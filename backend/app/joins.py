import numpy as np
import cv2
import math
from typing import List, Tuple, Dict, Any, Optional
from .models import Fragment, JoinCandidate

def resample_contour(points: List[List[float]], step_distance: float = 6.0) -> Tuple[np.ndarray, np.ndarray]:
    """
    Resamples a 2D closed polygon to approximately uniform arc-length spacing.
    Returns:
        (resampled_points [N, 2], outward_normals [N, 2])
    """
    pts = np.array(points, dtype=np.float32)
    if len(pts) < 4:
        return pts, np.zeros_like(pts)

    # Compute segment lengths along the perimeter
    diffs = np.diff(pts, axis=0, append=pts[:1])
    dists = np.linalg.norm(diffs, axis=1)
    total_length = np.sum(dists)

    num_samples = max(20, int(total_length / step_distance))
    sample_distances = np.linspace(0, total_length, num_samples, endpoint=False)

    cum_dist = np.cumsum(dists)
    cum_dist = np.insert(cum_dist, 0, 0.0)
    pts_loop = np.vstack([pts, pts[0]])

    resampled = np.zeros((num_samples, 2), dtype=np.float32)
    for i, sd in enumerate(sample_distances):
        # find segment where sd falls
        idx = np.searchsorted(cum_dist, sd, side="right") - 1
        idx = max(0, min(idx, len(pts) - 1))
        d0 = cum_dist[idx]
        d1 = cum_dist[idx + 1]
        seg_len = d1 - d0
        t = (sd - d0) / seg_len if seg_len > 1e-6 else 0.0
        resampled[i] = (1 - t) * pts_loop[idx] + t * pts_loop[idx + 1]

    # Compute tangents and outward normals
    tangents = np.zeros_like(resampled)
    for i in range(num_samples):
        prev_pt = resampled[i - 1]
        next_pt = resampled[(i + 1) % num_samples]
        t = next_pt - prev_pt
        t_norm = np.linalg.norm(t)
        tangents[i] = t / t_norm if t_norm > 1e-6 else np.array([1.0, 0.0])

    # Centroid for normal direction test (normals should point outward)
    centroid = np.mean(resampled, axis=0)
    normals = np.zeros_like(resampled)
    for i in range(num_samples):
        # 90-degree clockwise or counter-clockwise
        tx, ty = tangents[i]
        n1 = np.array([-ty, tx])
        # Vector from centroid to point
        v_out = resampled[i] - centroid
        if np.dot(n1, v_out) < 0:
            normals[i] = -n1
        else:
            normals[i] = n1

    return resampled, normals

def rigid_transform_2d(a_pts: np.ndarray, b_pts: np.ndarray) -> Tuple[np.ndarray, np.ndarray, float]:
    """
    Computes optimal 2D rigid transform (R, t) such that (R * b + t) aligns to a without scale change.
    Using Kabsch / Procrustes algorithm.
    Returns:
        (R [2, 2], t [2], rotation_degrees)
    """
    centroid_a = np.mean(a_pts, axis=0)
    centroid_b = np.mean(b_pts, axis=0)

    ac = a_pts - centroid_a
    bc = b_pts - centroid_b

    # Covariance
    H = bc.T @ ac
    U, S, Vt = np.linalg.svd(H)
    R = Vt.T @ U.T

    # Prevent reflection
    if np.linalg.det(R) < 0:
        Vt[1, :] *= -1
        R = Vt.T @ U.T

    t = centroid_a - R @ centroid_b
    rotation_rad = math.atan2(R[1, 0], R[0, 0])
    rotation_deg = math.degrees(rotation_rad)

    return R, t, rotation_deg

def check_polygon_overlap(f1: Fragment, f2: Fragment, R: np.ndarray, t: np.ndarray) -> float:
    """
    Transforms f2 contour by (R, t) and rasterizes both on a local grid to calculate intersection area.
    Returns overlap ratio in [0.0, 1.0].
    """
    cnt1 = np.array(f1.contour, dtype=np.float32)
    cnt2 = np.array(f2.contour, dtype=np.float32)

    # Transform f2 points
    cnt2_trans = (R @ cnt2.T).T + t

    all_pts = np.vstack([cnt1, cnt2_trans])
    min_x, min_y = np.min(all_pts, axis=0) - 10
    max_x, max_y = np.max(all_pts, axis=0) + 10

    w = int(max(10, min_x - min_x + (max_x - min_x)))
    h = int(max(10, min_y - min_y + (max_y - min_y)))

    # If canvas is excessively large, scale down
    scale = 1.0
    if max(w, h) > 800:
        scale = 800.0 / max(w, h)
        w = int(w * scale)
        h = int(h * scale)

    grid1 = np.zeros((h, w), dtype=np.uint8)
    grid2 = np.zeros((h, w), dtype=np.uint8)

    c1_local = ((cnt1 - [min_x, min_y]) * scale).astype(np.int32)
    c2_local = ((cnt2_trans - [min_x, min_y]) * scale).astype(np.int32)

    cv2.fillPoly(grid1, [c1_local], 255)
    cv2.fillPoly(grid2, [c2_local], 255)

    intersection = cv2.bitwise_and(grid1, grid2)
    inter_area = np.sum(intersection > 0)
    area1 = np.sum(grid1 > 0)
    area2 = np.sum(grid2 > 0)

    min_area = min(area1, area2)
    if min_area <= 0:
        return 0.0

    overlap_ratio = float(inter_area) / float(min_area)
    return min(1.0, overlap_ratio)

def find_candidate_joins_for_pair(
    f1: Fragment,
    f2: Fragment,
    px_per_mm: Optional[float] = None,
    max_candidates: int = 3
) -> List[JoinCandidate]:
    """
    Evaluates geometric complementarity between broken edges of f1 and f2.
    Constrained by marked original vessel edges (e.g. rims/bases are not treated as fracture edges).
    """
    pts1, n1 = resample_contour(f1.contour, step_distance=6.0)
    pts2, n2 = resample_contour(f2.contour, step_distance=6.0)

    n_samples1 = len(pts1)
    n_samples2 = len(pts2)

    # Filter out points on original vessel edges
    # Build mask of valid fracture indices for f1
    valid_mask1 = np.ones(n_samples1, dtype=bool)
    for edge in f1.edge_annotations:
        if edge.edge_type == "original_vessel_edge":
            # Map original contour index to resampled points approximately
            s_idx = int((edge.start_idx / max(1, len(f1.contour))) * n_samples1)
            e_idx = int((edge.end_idx / max(1, len(f1.contour))) * n_samples1)
            if s_idx <= e_idx:
                valid_mask1[s_idx:e_idx+1] = False
            else:
                valid_mask1[s_idx:] = False
                valid_mask1[:e_idx+1] = False

    valid_mask2 = np.ones(n_samples2, dtype=bool)
    for edge in f2.edge_annotations:
        if edge.edge_type == "original_vessel_edge":
            s_idx = int((edge.start_idx / max(1, len(f2.contour))) * n_samples2)
            e_idx = int((edge.end_idx / max(1, len(f2.contour))) * n_samples2)
            if s_idx <= e_idx:
                valid_mask2[s_idx:e_idx+1] = False
            else:
                valid_mask2[s_idx:] = False
                valid_mask2[:e_idx+1] = False

    # Segment lengths to evaluate (short, medium, long)
    candidate_lengths = [16, 24, 32]
    candidate_results = []

    for seg_len in candidate_lengths:
        if seg_len > n_samples1 // 2 or seg_len > n_samples2 // 2:
            continue

        stride1 = max(4, seg_len // 3)
        stride2 = max(4, seg_len // 3)

        for i in range(0, n_samples1 - seg_len, stride1):
            if not np.all(valid_mask1[i:i + seg_len]):
                continue
            seg1_pts = pts1[i:i + seg_len]
            seg1_n = n1[i:i + seg_len]

            for j in range(0, n_samples2 - seg_len, stride2):
                if not np.all(valid_mask2[j:j + seg_len]):
                    continue
                seg2_pts = pts2[j:j + seg_len]
                seg2_n = n2[j:j + seg_len]

                # Broken mating edges face each other in REVERSE sequence:
                seg2_rev_pts = seg2_pts[::-1]
                seg2_rev_n = seg2_n[::-1]

                # Fast bounding diameter check
                len1 = np.linalg.norm(seg1_pts[-1] - seg1_pts[0])
                len2 = np.linalg.norm(seg2_rev_pts[-1] - seg2_rev_pts[0])
                if abs(len1 - len2) > 18.0:
                    continue

                # Rigid 2D alignment (R, t)
                R, t, rot_deg = rigid_transform_2d(seg1_pts, seg2_rev_pts)

                # Transformed points and normals
                aligned_seg2_pts = (R @ seg2_rev_pts.T).T + t
                aligned_seg2_n = (R @ seg2_rev_n.T).T

                # Euclidean distance residuals
                diffs = np.linalg.norm(seg1_pts - aligned_seg2_pts, axis=1)
                mean_res = float(np.mean(diffs))
                max_res = float(np.max(diffs))

                if mean_res > 15.0 or max_res > 28.0:
                    continue

                # Tangent / normal complementarity: mating normals should oppose each other (dot product ~ -1)
                normal_dots = np.sum(seg1_n * aligned_seg2_n, axis=1)
                # Opposed normals have dot < 0. We want dot close to -1.
                tangent_score = float(np.mean(np.maximum(0.0, -normal_dots)))

                if tangent_score < 0.35:
                    continue

                # Overlap penalty
                overlap_ratio = check_polygon_overlap(f1, f2, R, t)
                if overlap_ratio > 0.15:
                    continue

                # Matched physical length
                matched_len_px = float(np.sum(np.linalg.norm(np.diff(seg1_pts, axis=0), axis=1)))
                matched_len_mm = round(matched_len_px / px_per_mm, 2) if px_per_mm else None
                residual_mm = round(mean_res / px_per_mm, 2) if px_per_mm else None

                # Composite compatibility metric
                distance_score = float(np.exp(-mean_res / 5.0))
                overlap_penalty = float(min(1.0, overlap_ratio * 4.0))
                length_boost = min(1.0, matched_len_px / 120.0)

                composite_score = float(
                    distance_score * 0.45 +
                    tangent_score * 0.30 +
                    (1.0 - overlap_penalty) * 0.15 +
                    length_boost * 0.10
                )
                composite_score = round(max(0.0, min(1.0, composite_score)), 3)

                if composite_score >= 0.42:
                    candidate_results.append({
                        "i": i,
                        "j": j,
                        "seg_len": seg_len,
                        "seg1_pts": seg1_pts.tolist(),
                        "seg2_pts": seg2_pts.tolist(),
                        "R": R,
                        "t": t,
                        "rot_deg": round(rot_deg, 2),
                        "tx": round(float(t[0]), 2),
                        "ty": round(float(t[1]), 2),
                        "mean_res": round(mean_res, 2),
                        "residual_mm": residual_mm,
                        "matched_len_px": round(matched_len_px, 1),
                        "matched_len_mm": matched_len_mm,
                        "tangent_score": round(tangent_score, 3),
                        "overlap_penalty": round(overlap_penalty, 3),
                        "composite_score": composite_score,
                    })

    # Sort and pick non-duplicate candidates
    candidate_results.sort(key=lambda x: x["composite_score"], reverse=True)
    filtered = []
    for c in candidate_results:
        # Check if too close to an already selected candidate
        is_dup = False
        for existing in filtered:
            if abs(c["i"] - existing["i"]) < 6 and abs(c["j"] - existing["j"]) < 6:
                is_dup = True
                break
        if not is_dup:
            filtered.append(c)
        if len(filtered) >= max_candidates:
            break

    join_candidates: List[JoinCandidate] = []
    for idx, c in enumerate(filtered):
        join_id = f"JOIN_{f1.project_id}_{f1.id}_{f2.id}_{idx+1}"
        explanation = (
            f"Residual {c['mean_res']}px" +
            (f" ({c['residual_mm']}mm)" if c['residual_mm'] else "") +
            f", matched edge: {c['matched_len_px']}px" +
            (f" ({c['matched_len_mm']}mm)" if c['matched_len_mm'] else "") +
            f", normal alignment {int(c['tangent_score']*100)}%."
        )

        join_candidates.append(JoinCandidate(
            id=join_id,
            project_id=f1.project_id,
            fragment_a_id=f1.id,
            fragment_b_id=f2.id,
            segment_a_indices=[c["i"], c["i"] + c["seg_len"]],
            segment_b_indices=[c["j"], c["j"] + c["seg_len"]],
            segment_a_points=c["seg1_pts"],
            segment_b_points=c["seg2_pts"],
            transform_rotation_deg=c["rot_deg"],
            transform_tx=c["tx"],
            transform_ty=c["ty"],
            residual_px=c["mean_res"],
            residual_mm=c["residual_mm"],
            matched_length_px=c["matched_len_px"],
            matched_length_mm=c["matched_len_mm"],
            tangent_score=c["tangent_score"],
            overlap_penalty=c["overlap_penalty"],
            compatibility_score=c["composite_score"],
            status="suggested",
            explanation=explanation
        ))

    return join_candidates
