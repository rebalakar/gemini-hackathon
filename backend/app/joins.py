import numpy as np
import cv2
import math
import time
from pathlib import Path
from typing import List, Tuple, Dict, Any, Optional
from .models import Fragment, FragmentPlacement, JoinCandidate


def get_fragment_bbox_center(frag: Fragment) -> np.ndarray:
    """
    Returns the bounding-box center [cx, cy] of a fragment's contour in original image coordinates.
    Matches the frontend SVG pivot point `minX + w/2, minY + h/2`.
    """
    pts = np.array(frag.contour, dtype=np.float64)
    if len(pts) == 0:
        return np.array(frag.centroid, dtype=np.float64)
    min_xy = np.min(pts, axis=0)
    max_xy = np.max(pts, axis=0)
    return (min_xy + max_xy) / 2.0


def placement_to_global_rt(frag: Fragment, placement: Optional[FragmentPlacement] = None) -> Tuple[np.ndarray, np.ndarray]:
    """
    Converts a fragment's canvas placement (x, y, rotation_deg) into a global 2D rigid transform (R, t)
    mapping original image coordinates p -> R @ p + t on the assembly canvas.
    """
    pl = placement or frag.placement
    c = get_fragment_bbox_center(frag)
    rad = math.radians(pl.rotation_deg)
    cos_a = math.cos(rad)
    sin_a = math.sin(rad)
    R = np.array([[cos_a, -sin_a], [sin_a, cos_a]], dtype=np.float64)
    pos = np.array([pl.x, pl.y], dtype=np.float64)
    t = pos - R @ c
    return R, t


def global_rt_to_placement(
    frag: Fragment,
    R: np.ndarray,
    t: np.ndarray,
    locked: bool = False,
    placed_in_assembly: bool = True
) -> FragmentPlacement:
    """
    Converts a global 2D rigid transform (R, t) back into a FragmentPlacement (x, y, rotation_deg).
    """
    c = get_fragment_bbox_center(frag)
    pos = R @ c + t
    rot_deg = math.degrees(math.atan2(float(R[1, 0]), float(R[0, 0])))
    return FragmentPlacement(
        x=round(float(pos[0]), 2),
        y=round(float(pos[1]), 2),
        rotation_deg=round(rot_deg, 2),
        locked=locked,
        placed_in_assembly=placed_in_assembly
    )


def resample_contour(points: List[List[float]], step_distance: float = 5.0) -> Tuple[np.ndarray, np.ndarray]:
    """
    Resamples a 2D closed polygon to uniform arc-length spacing.
    Returns:
        (resampled_points [N, 2], outward_normals [N, 2])
    """
    pts = np.array(points, dtype=np.float32)
    if len(pts) < 4:
        return pts, np.zeros_like(pts)

    diffs = np.diff(pts, axis=0, append=pts[:1])
    dists = np.linalg.norm(diffs, axis=1)
    total_length = float(np.sum(dists))

    num_samples = max(24, int(round(total_length / max(1.0, step_distance))))
    sample_distances = np.linspace(0, total_length, num_samples, endpoint=False)

    cum_dist = np.cumsum(dists)
    cum_dist = np.insert(cum_dist, 0, 0.0)
    pts_loop = np.vstack([pts, pts[0]])

    resampled = np.zeros((num_samples, 2), dtype=np.float32)
    for i, sd in enumerate(sample_distances):
        idx = int(np.searchsorted(cum_dist, sd, side="right")) - 1
        idx = max(0, min(idx, len(pts) - 1))
        d0 = cum_dist[idx]
        d1 = cum_dist[idx + 1]
        seg_len = d1 - d0
        t = (sd - d0) / seg_len if seg_len > 1e-6 else 0.0
        resampled[i] = (1.0 - t) * pts_loop[idx] + t * pts_loop[idx + 1]

    # Compute tangents and outward normals using signed polygon orientation
    tangents = np.zeros_like(resampled)
    for i in range(num_samples):
        prev_pt = resampled[i - 1]
        next_pt = resampled[(i + 1) % num_samples]
        t_vec = next_pt - prev_pt
        t_norm = np.linalg.norm(t_vec)
        tangents[i] = t_vec / t_norm if t_norm > 1e-6 else np.array([1.0, 0.0], dtype=np.float32)

    # Signed area to determine winding order (CCW vs CW in image coords)
    x = resampled[:, 0]
    y = resampled[:, 1]
    signed_area = 0.5 * float(np.sum(x * np.roll(y, -1) - np.roll(x, -1) * y))
    # For standard image coords (y down), signed_area > 0 means clockwise on screen
    normals = np.zeros_like(resampled)
    cnt_poly = resampled.reshape((-1, 1, 2)).astype(np.float32)
    for i in range(num_samples):
        tx, ty = float(tangents[i, 0]), float(tangents[i, 1])
        n_cand = np.array([-ty, tx], dtype=np.float32)
        test_pt = (float(resampled[i, 0] + n_cand[0] * 3.0), float(resampled[i, 1] + n_cand[1] * 3.0))
        # pointPolygonTest > 0 means inside polygon; outward normal should point outside (< 0)
        if cv2.pointPolygonTest(cnt_poly, test_pt, False) > 0:
            normals[i] = -n_cand
        else:
            normals[i] = n_cand

    return resampled, normals


def rigid_transform_2d(a_pts: np.ndarray, b_pts: np.ndarray) -> Tuple[np.ndarray, np.ndarray, float]:
    """
    Computes optimal 2D rigid transform (R, t) with det(R) = +1 (no scaling, no reflection)
    such that (R * b + t) aligns to a.
    """
    a64 = np.asarray(a_pts, dtype=np.float64)
    b64 = np.asarray(b_pts, dtype=np.float64)
    centroid_a = np.mean(a64, axis=0)
    centroid_b = np.mean(b64, axis=0)

    ac = a64 - centroid_a
    bc = b64 - centroid_b

    H = bc.T @ ac
    U, S, Vt = np.linalg.svd(H)
    R = Vt.T @ U.T

    # Prevent reflection (require proper rotation det(R) = +1)
    if np.linalg.det(R) < 0:
        Vt[1, :] *= -1
        R = Vt.T @ U.T

    t = centroid_a - R @ centroid_b
    rotation_rad = math.atan2(float(R[1, 0]), float(R[0, 0]))
    rotation_deg = math.degrees(rotation_rad)

    return R, t, rotation_deg


def check_polygon_overlap_contours(cnt1: np.ndarray, cnt2_trans: np.ndarray, erode_px: int = 2) -> float:
    """
    Rasterizes two contours on a local grid, erodes slightly so touching boundaries don't count as interior collision,
    and returns interior intersection area / min(area1, area2) in [0.0, 1.0].
    """
    all_pts = np.vstack([cnt1, cnt2_trans])
    min_x, min_y = np.min(all_pts, axis=0) - 8
    max_x, max_y = np.max(all_pts, axis=0) + 8

    # Fast bounding-box disjoint check
    if (
        np.max(cnt1[:, 0]) < np.min(cnt2_trans[:, 0]) or
        np.max(cnt2_trans[:, 0]) < np.min(cnt1[:, 0]) or
        np.max(cnt1[:, 1]) < np.min(cnt2_trans[:, 1]) or
        np.max(cnt2_trans[:, 1]) < np.min(cnt1[:, 1])
    ):
        return 0.0

    w = int(max(12, max_x - min_x))
    h = int(max(12, max_y - min_y))

    scale = 1.0
    if max(w, h) > 650:
        scale = 650.0 / max(w, h)
        w = int(max(12, w * scale))
        h = int(max(12, h * scale))

    grid1 = np.zeros((h, w), dtype=np.uint8)
    grid2 = np.zeros((h, w), dtype=np.uint8)

    c1_local = ((cnt1 - [min_x, min_y]) * scale).astype(np.int32)
    c2_local = ((cnt2_trans - [min_x, min_y]) * scale).astype(np.int32)

    cv2.fillPoly(grid1, [c1_local], 255)
    cv2.fillPoly(grid2, [c2_local], 255)

    area1 = int(np.sum(grid1 > 0))
    area2 = int(np.sum(grid2 > 0))
    min_area = min(area1, area2)
    if min_area <= 0:
        return 0.0

    if erode_px > 0:
        k_size = max(3, int(round(erode_px * scale)) * 2 + 1)
        kernel = np.ones((k_size, k_size), dtype=np.uint8)
        g1_inner = cv2.erode(grid1, kernel, iterations=1)
        g2_inner = cv2.erode(grid2, kernel, iterations=1)
        inter_area = int(np.sum(cv2.bitwise_and(g1_inner, g2_inner) > 0))
    else:
        inter_area = int(np.sum(cv2.bitwise_and(grid1, grid2) > 0))

    return min(1.0, float(inter_area) / float(min_area))


def check_polygon_overlap(f1: Fragment, f2: Fragment, R: np.ndarray, t: np.ndarray) -> float:
    cnt1 = np.array(f1.contour, dtype=np.float64)
    cnt2 = np.array(f2.contour, dtype=np.float64)
    cnt2_trans = (R @ cnt2.T).T + t
    return check_polygon_overlap_contours(cnt1, cnt2_trans, erode_px=2)


def compute_segment_relief_px(seg_pts: np.ndarray) -> float:
    """
    Computes the RMS perpendicular deviation of a boundary segment from the straight chord joining its endpoints.
    Near-zero (< 1.3 px) indicates a straight cut/sheet edge; larger values indicate an irregular tear/fracture.
    """
    if len(seg_pts) < 3:
        return 0.0
    chord = seg_pts[-1] - seg_pts[0]
    chord_len = float(np.linalg.norm(chord))
    if chord_len < 1e-3:
        return float(np.std(seg_pts))
    unit_chord = chord / chord_len
    normal = np.array([-unit_chord[1], unit_chord[0]], dtype=np.float64)
    rel = seg_pts - seg_pts[0]
    devs = rel @ normal
    return float(np.sqrt(np.mean(devs ** 2)))


def compute_signed_deviation_profile(seg_pts: np.ndarray) -> np.ndarray:
    """
    Returns the signed perpendicular deviation profile from the segment's chord (from start to end).
    When two complementary edges mate in reverse orientation, their signed deviation profiles sum to ~0.
    """
    chord = seg_pts[-1] - seg_pts[0]
    chord_len = float(np.linalg.norm(chord))
    if chord_len < 1e-3:
        return np.zeros(len(seg_pts), dtype=np.float64)
    unit_chord = chord / chord_len
    normal = np.array([-unit_chord[1], unit_chord[0]], dtype=np.float64)
    rel = seg_pts - seg_pts[0]
    return (rel @ normal).astype(np.float64)


def compute_seam_color_continuity(
    img_lab: Optional[np.ndarray],
    seg1_pts: np.ndarray,
    seg1_normals: np.ndarray,
    seg2_rev_pts: np.ndarray,
    seg2_rev_normals: np.ndarray
) -> Optional[float]:
    """
    Optional secondary score: samples LAB values 4px inside each piece along the proposed seam
    and computes cross-seam visual continuity in [0, 1].
    """
    if img_lab is None:
        return None
    h, w = img_lab.shape[:2]
    inward1 = seg1_pts - seg1_normals * 4.0
    inward2 = seg2_rev_pts - seg2_rev_normals * 4.0

    x1 = np.clip(np.round(inward1[:, 0]).astype(int), 0, w - 1)
    y1 = np.clip(np.round(inward1[:, 1]).astype(int), 0, h - 1)
    x2 = np.clip(np.round(inward2[:, 0]).astype(int), 0, w - 1)
    y2 = np.clip(np.round(inward2[:, 1]).astype(int), 0, h - 1)

    lab1 = img_lab[y1, x1].astype(np.float32)
    lab2 = img_lab[y2, x2].astype(np.float32)
    delta_e = np.linalg.norm(lab1 - lab2, axis=1)
    mean_de = float(np.mean(delta_e))
    return round(float(np.exp(-mean_de / 25.0)), 3)


def build_valid_sample_mask(frag: Fragment, resampled_pts: np.ndarray) -> np.ndarray:
    """
    Marks resampled points as False if they fall on an excluded edge annotation
    ('original_vessel_edge' or 'original_sheet_edge').
    """
    n_samples = len(resampled_pts)
    valid_mask = np.ones(n_samples, dtype=bool)
    n_orig = len(frag.contour)
    if n_orig == 0:
        return valid_mask

    excluded_types = {"original_vessel_edge", "original_sheet_edge"}
    for edge in frag.edge_annotations:
        if edge.edge_type not in excluded_types:
            continue
        if edge.points and len(edge.points) >= 2:
            poly = np.array(edge.points, dtype=np.float32)
            # Mark any resampled point within 5.5px of the annotated polyline segment
            for k in range(len(poly) - 1):
                p0 = poly[k]
                p1 = poly[k + 1]
                seg_v = p1 - p0
                seg_l2 = float(np.dot(seg_v, seg_v))
                if seg_l2 < 1e-6:
                    dists = np.linalg.norm(resampled_pts - p0, axis=1)
                else:
                    t_proj = np.clip(((resampled_pts - p0) @ seg_v) / seg_l2, 0.0, 1.0)
                    proj = p0 + np.outer(t_proj, seg_v)
                    dists = np.linalg.norm(resampled_pts - proj, axis=1)
                valid_mask[dists <= 5.5] = False
        else:
            s_idx = int((edge.start_idx / max(1, n_orig)) * n_samples) % n_samples
            e_idx = int((edge.end_idx / max(1, n_orig)) * n_samples) % n_samples
            if s_idx <= e_idx:
                valid_mask[s_idx : e_idx + 1] = False
            else:
                valid_mask[s_idx:] = False
                valid_mask[: e_idx + 1] = False

    return valid_mask


def find_candidate_joins_for_pair(
    f1: Fragment,
    f2: Fragment,
    px_per_mm: Optional[float] = None,
    max_candidates: int = 3,
    mode: str = "ceramic",
    img_lab: Optional[np.ndarray] = None,
    use_visual_seam_score: bool = False
) -> List[JoinCandidate]:
    """
    Evaluates geometric complementarity between boundary segments of f1 and f2.
    1. Resamples contours at uniform spacing.
    2. Generates candidate boundary segments at multiple lengths (circularly around closed contour).
    3. Compares a segment of f1 with the reversed traversal of f2's segment.
    4. Estimates rigid 2D rotation and translation (det(R) = +1, no scale, no reflection).
    5. Scores alignment residual, tangent/normal opposition, matched length, and interior polygon overlap.
    6. Rejects substantial interior overlap or short coincidental matches.
    7. Retains top candidate joins for review.
    """
    step_px = 5.0 if mode == "paper" else 6.0
    pts1, n1 = resample_contour(f1.contour, step_distance=step_px)
    pts2, n2 = resample_contour(f2.contour, step_distance=step_px)

    n_samples1 = len(pts1)
    n_samples2 = len(pts2)
    if n_samples1 < 12 or n_samples2 < 12:
        return []

    valid_mask1 = build_valid_sample_mask(f1, pts1)
    valid_mask2 = build_valid_sample_mask(f2, pts2)

    # Double arrays for fast circular slicing without wrap-around edge cases
    pts1_2x = np.vstack([pts1, pts1])
    n1_2x = np.vstack([n1, n1])
    valid1_2x = np.concatenate([valid_mask1, valid_mask1])

    pts2_2x = np.vstack([pts2, pts2])
    n2_2x = np.vstack([n2, n2])
    valid2_2x = np.concatenate([valid_mask2, valid_mask2])

    candidate_lengths = [14, 20, 28, 36] if mode == "paper" else [16, 24, 32]
    max_overlap_allowed = 0.08 if mode == "paper" else 0.15
    max_mean_res_allowed = 11.0 if mode == "paper" else 15.0

    coarse_hits = []

    for seg_len in candidate_lengths:
        if seg_len > int(n_samples1 * 0.48) or seg_len > int(n_samples2 * 0.48):
            continue

        stride = 3 if mode == "paper" else max(4, seg_len // 3)

        # Precompute segments for f1 and f2
        segs1 = []
        for i in range(0, n_samples1, stride):
            if not np.all(valid1_2x[i : i + seg_len]):
                continue
            s_pts = pts1_2x[i : i + seg_len]
            chord_len = float(np.linalg.norm(s_pts[-1] - s_pts[0]))
            if chord_len < 32.0:
                continue
            dev_prof = compute_signed_deviation_profile(s_pts)
            segs1.append((i, s_pts, chord_len, dev_prof))

        segs2 = []
        for j in range(0, n_samples2, stride):
            if not np.all(valid2_2x[j : j + seg_len]):
                continue
            s_pts = pts2_2x[j : j + seg_len]
            s_rev = s_pts[::-1]
            chord_len = float(np.linalg.norm(s_rev[-1] - s_rev[0]))
            if chord_len < 32.0:
                continue
            dev_prof_rev = compute_signed_deviation_profile(s_rev)
            segs2.append((j, s_rev, chord_len, dev_prof_rev))

        for i, s1_pts, len1, dev1 in segs1:
            for j, s2_rev, len2, dev2 in segs2:
                if abs(len1 - len2) > 15.0:
                    continue
                # Fast complementary profile pre-filter:
                # For true mating edges traversed in opposite directions, dev1 and dev2 match closely
                prof_diff = float(np.sqrt(np.mean((dev1 - dev2) ** 2)))
                if prof_diff > 10.5:
                    continue
                coarse_hits.append((prof_diff, seg_len, i, j))

    # Sort coarse hits by profile agreement and keep bounded set for fine refinement
    coarse_hits.sort(key=lambda x: x[0])
    coarse_hits = coarse_hits[:140]

    candidate_results = []
    evaluated_keys = set()

    for _, seg_len, base_i, base_j in coarse_hits:
        # Fine local refinement around (base_i, base_j)
        best_local = None
        offsets = [-1, 0, 1] if mode == "paper" else [0]
        for di in offsets:
            i = (base_i + di) % n_samples1
            if not np.all(valid1_2x[i : i + seg_len]):
                continue
            seg1_pts = pts1_2x[i : i + seg_len]
            seg1_n = n1_2x[i : i + seg_len]

            for dj in offsets:
                j = (base_j + dj) % n_samples2
                key = (seg_len, i, j)
                if key in evaluated_keys:
                    continue
                evaluated_keys.add(key)

                if not np.all(valid2_2x[j : j + seg_len]):
                    continue
                seg2_pts = pts2_2x[j : j + seg_len]
                seg2_n = n2_2x[j : j + seg_len]

                seg2_rev_pts = seg2_pts[::-1]
                seg2_rev_n = seg2_n[::-1]

                R, t, rot_deg = rigid_transform_2d(seg1_pts, seg2_rev_pts)
                aligned_seg2_pts = (R @ seg2_rev_pts.T).T + t
                aligned_seg2_n = (R @ seg2_rev_n.T).T

                diffs = np.linalg.norm(seg1_pts - aligned_seg2_pts, axis=1)
                mean_res = float(np.mean(diffs))
                max_res = float(np.max(diffs))

                if mean_res > max_mean_res_allowed or max_res > 24.0:
                    continue

                normal_dots = np.sum(seg1_n * aligned_seg2_n, axis=1)
                tangent_score = float(np.mean(np.maximum(0.0, -normal_dots)))
                if tangent_score < 0.40:
                    continue

                if best_local is None or mean_res < best_local["mean_res"]:
                    best_local = {
                        "i": i,
                        "j": j,
                        "seg_len": seg_len,
                        "seg1_pts": seg1_pts,
                        "seg1_n": seg1_n,
                        "seg2_pts": seg2_pts,
                        "seg2_rev_pts": seg2_rev_pts,
                        "seg2_rev_n": seg2_rev_n,
                        "R": R,
                        "t": t,
                        "rot_deg": rot_deg,
                        "mean_res": mean_res,
                        "tangent_score": tangent_score,
                    }

        if best_local is None:
            continue

        R = best_local["R"]
        t = best_local["t"]
        overlap_ratio = check_polygon_overlap(f1, f2, R, t)
        if overlap_ratio > max_overlap_allowed:
            continue

        seg1_pts = best_local["seg1_pts"]
        matched_len_px = float(np.sum(np.linalg.norm(np.diff(seg1_pts, axis=0), axis=1)))
        if matched_len_px < 38.0:
            continue

        matched_len_mm = round(matched_len_px / px_per_mm, 2) if (px_per_mm and mode != "paper") else None
        mean_res = best_local["mean_res"]
        residual_mm = round(mean_res / px_per_mm, 2) if (px_per_mm and mode != "paper") else None
        tangent_score = best_local["tangent_score"]

        relief_px = compute_segment_relief_px(seg1_pts)
        seam_color_score = compute_seam_color_continuity(
            img_lab,
            seg1_pts,
            best_local["seg1_n"],
            best_local["seg2_rev_pts"],
            best_local["seg2_rev_n"],
        )

        # Relative compatibility score
        distance_score = float(np.exp(-mean_res / 4.5))
        overlap_penalty = float(min(1.0, overlap_ratio * (6.0 if mode == "paper" else 4.0)))
        length_boost = min(1.0, matched_len_px / 115.0)
        # Distinct irregular relief slightly boosts confidence over featureless straight lines
        relief_factor = min(1.0, relief_px / 3.5) if mode == "paper" else 0.5

        if mode == "paper":
            geom_score = (
                distance_score * 0.46 +
                tangent_score * 0.24 +
                (1.0 - overlap_penalty) * 0.14 +
                length_boost * 0.10 +
                relief_factor * 0.06
            )
            if use_visual_seam_score and seam_color_score is not None:
                composite_score = geom_score * 0.90 + seam_color_score * 0.10
            else:
                composite_score = geom_score
        else:
            composite_score = (
                distance_score * 0.45 +
                tangent_score * 0.30 +
                (1.0 - overlap_penalty) * 0.15 +
                length_boost * 0.10
            )

        composite_score = round(max(0.0, min(1.0, float(composite_score))), 3)

        if composite_score >= 0.42:
            candidate_results.append({
                "i": best_local["i"],
                "j": best_local["j"],
                "seg_len": best_local["seg_len"],
                "seg1_pts": seg1_pts.tolist(),
                "seg2_pts": best_local["seg2_pts"].tolist(),
                "R": R,
                "t": t,
                "rot_deg": round(best_local["rot_deg"], 2),
                "tx": round(float(t[0]), 2),
                "ty": round(float(t[1]), 2),
                "mean_res": round(mean_res, 2),
                "residual_mm": residual_mm,
                "matched_len_px": round(matched_len_px, 1),
                "matched_len_mm": matched_len_mm,
                "tangent_score": round(tangent_score, 3),
                "overlap_penalty": round(overlap_penalty, 3),
                "composite_score": composite_score,
                "seam_color_score": seam_color_score,
                "relief_px": round(relief_px, 2),
            })

    # Sort and deduplicate nearby segment intervals
    candidate_results.sort(key=lambda x: (x["composite_score"], x["matched_len_px"]), reverse=True)
    filtered = []
    for c in candidate_results:
        is_dup = False
        for existing in filtered:
            di = min(abs(c["i"] - existing["i"]), n_samples1 - abs(c["i"] - existing["i"]))
            dj = min(abs(c["j"] - existing["j"]), n_samples2 - abs(c["j"] - existing["j"]))
            if di < 7 and dj < 7:
                is_dup = True
                break
        if not is_dup:
            filtered.append(c)
        if len(filtered) >= max_candidates:
            break

    join_candidates: List[JoinCandidate] = []
    for idx, c in enumerate(filtered):
        join_id = f"JOIN_{f1.project_id}_{f1.id}_{f2.id}_{idx+1}"
        edge_shape_desc = "straight cut/edge" if c["relief_px"] < 1.35 else f"irregular contour (relief {c['relief_px']}px)"
        explanation = (
            f"Residual {c['mean_res']}px" +
            (f" ({c['residual_mm']}mm)" if c['residual_mm'] else "") +
            f", matched length {c['matched_len_px']}px" +
            (f" ({c['matched_len_mm']}mm)" if c['matched_len_mm'] else "") +
            f", tangent opposition {int(c['tangent_score']*100)}%, {edge_shape_desc}" +
            (f", seam pattern continuity {int(c['seam_color_score']*100)}%." if c["seam_color_score"] is not None else ".")
        )

        is_straight_ambiguous = (mode == "paper" and c["relief_px"] < 1.35)
        ambiguity_warning = (
            f"Low-curvature straight boundary (relief {c['relief_px']}px): straight cuts can match multiple edges or slide along the seam. Human confirmation required."
            if is_straight_ambiguous else None
        )

        join_candidates.append(JoinCandidate(
            id=join_id,
            project_id=f1.project_id,
            fragment_a_id=f1.id,
            fragment_b_id=f2.id,
            segment_a_indices=[int(c["i"]), int(c["i"] + c["seg_len"])],
            segment_b_indices=[int(c["j"]), int(c["j"] + c["seg_len"])],
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
            seam_color_score=c["seam_color_score"],
            is_ambiguous=is_straight_ambiguous,
            ambiguity_warning=ambiguity_warning,
            rank_for_pair=idx + 1,
            status="suggested",
            explanation=explanation
        ))

    return join_candidates


def _segments_overlap(seg1: List[int], seg2: List[int], min_overlap_samples: int = 6) -> bool:
    s1, e1 = seg1[0], seg1[1]
    s2, e2 = seg2[0], seg2[1]
    inter = max(0, min(e1, e2) - max(s1, s2))
    return inter >= min_overlap_samples


def annotate_global_join_ambiguities(joins: List[JoinCandidate], mode: str = "ceramic") -> List[JoinCandidate]:
    """
    Detects competing candidate joins that share the same boundary section or have near-identical scores
    on straight/repeated edges, flagging them with `is_ambiguous = True` and descriptive warnings.
    """
    if not joins:
        return joins

    # Sort descending by compatibility_score
    joins.sort(key=lambda x: x.compatibility_score, reverse=True)

    # Check if any boundary section on a piece has two competing joins to different pieces/orientations with close scores
    for idx_a, j1 in enumerate(joins):
        competing = []
        pair1 = {j1.fragment_a_id, j1.fragment_b_id}
        for idx_b, j2 in enumerate(joins):
            if idx_a == idx_b:
                continue
            pair2 = {j2.fragment_a_id, j2.fragment_b_id}
            if pair1 == pair2:
                continue

            shares_boundary = False
            if j1.fragment_a_id == j2.fragment_a_id and _segments_overlap(j1.segment_a_indices, j2.segment_a_indices):
                shares_boundary = True
            elif j1.fragment_a_id == j2.fragment_b_id and _segments_overlap(j1.segment_a_indices, j2.segment_b_indices):
                shares_boundary = True
            elif j1.fragment_b_id == j2.fragment_a_id and _segments_overlap(j1.segment_b_indices, j2.segment_a_indices):
                shares_boundary = True
            elif j1.fragment_b_id == j2.fragment_b_id and _segments_overlap(j1.segment_b_indices, j2.segment_b_indices):
                shares_boundary = True

            if shares_boundary:
                if j2.compatibility_score >= j1.compatibility_score - 0.035 and j2.residual_px <= j1.residual_px + 0.65:
                    competing.append(f"{j2.fragment_a_id}↔{j2.fragment_b_id} (score {int(j2.compatibility_score*100)}%, res {j2.residual_px}px)")

        if competing:
            j1.is_ambiguous = True
            comp_str = ", ".join(competing[:2])
            if j1.ambiguity_warning:
                if "Competing" not in j1.ambiguity_warning:
                    j1.ambiguity_warning += f" Competing arrangement(s) fit similarly well: {comp_str}."
            else:
                j1.ambiguity_warning = f"Ambiguous boundary match: {comp_str} fit similarly well. Left unresolved for human confirmation."

    return joins


def compute_global_assembly(
    fragments: List[Fragment],
    joins: List[JoinCandidate],
    canvas_center: Tuple[float, float] = (520.0, 380.0),
    respect_locked: bool = True
) -> Dict[str, Any]:
    """
    Builds a globally consistent 2D assembly from pairwise candidate joins.
    - Starts with user-accepted joins and locked pieces, then adds unambiguous high-scoring joins.
    - Prevents one boundary section from being assigned to incompatible joins.
    - Prevents substantial interior overlaps with ANY already-placed piece in the assembly.
    - Leaves uncertain/ambiguous pieces unplaced rather than forcing a greedy complete solution.
    """
    frag_map: Dict[str, Fragment] = {f.id: f for f in fragments}
    if not fragments:
        return {
            "placements": {},
            "active_join_ids": [],
            "unplaced_piece_ids": [],
            "ambiguity_notice": None,
            "alternatives": [],
        }

    # Filter out rejected joins
    valid_joins = [j for j in joins if j.status != "rejected"]
    accepted_joins = [j for j in valid_joins if j.status == "accepted"]
    suggested_joins = [j for j in valid_joins if j.status == "suggested"]

    # Sort suggested joins: unambiguous high-compatibility first
    suggested_joins.sort(key=lambda j: (0 if j.is_ambiguous else 1, j.compatibility_score, j.matched_length_px), reverse=True)

    # Track global rigid transforms (R_global, t_global) for placed pieces
    placed_rt: Dict[str, Tuple[np.ndarray, np.ndarray]] = {}
    committed_segments: Dict[str, List[List[int]]] = {f.id: [] for f in fragments}
    active_join_ids: List[str] = []
    rejected_for_conflict: List[Dict[str, Any]] = []
    ambiguous_unplaced_reasons: List[str] = []

    # 1. Seed with locked fragments if requested
    if respect_locked:
        for f in fragments:
            if f.placement and f.placement.locked:
                placed_rt[f.id] = placement_to_global_rt(f, f.placement)

    # Helper to test if a boundary segment on `fid` is already committed
    def is_segment_free(fid: str, seg_indices: List[int]) -> bool:
        for used_seg in committed_segments.get(fid, []):
            if _segments_overlap(used_seg, seg_indices, min_overlap_samples=6):
                return False
        return True

    # Helper to test if placing `fid` with `(R_cand, t_cand)` collides with any already placed fragment
    def has_global_collision(fid: str, R_cand: np.ndarray, t_cand: np.ndarray) -> bool:
        cnt_cand = np.array(frag_map[fid].contour, dtype=np.float64)
        cnt_cand_global = (R_cand @ cnt_cand.T).T + t_cand
        for other_id, (R_other, t_other) in placed_rt.items():
            if other_id == fid:
                continue
            cnt_other = np.array(frag_map[other_id].contour, dtype=np.float64)
            cnt_other_global = (R_other @ cnt_other.T).T + t_other
            ov = check_polygon_overlap_contours(cnt_other_global, cnt_cand_global, erode_px=2)
            if ov > 0.08:
                return True
        return False

    # Helper to compute join (R_join, t_join) such that p_a = R_join @ p_b + t_join
    def get_join_rt(j: JoinCandidate) -> Tuple[np.ndarray, np.ndarray]:
        rad = math.radians(j.transform_rotation_deg)
        c_a, s_a = math.cos(rad), math.sin(rad)
        R_j = np.array([[c_a, -s_a], [s_a, c_a]], dtype=np.float64)
        t_j = np.array([j.transform_tx, j.transform_ty], dtype=np.float64)
        return R_j, t_j

    # Ordered queue of joins to consider: accepted first, then unambiguous suggested
    ordered_candidates = accepted_joins + [j for j in suggested_joins if not j.is_ambiguous]

    # Seed anchor piece if no piece is placed yet
    if not placed_rt and ordered_candidates:
        first_join = ordered_candidates[0]
        anchor_id = first_join.fragment_a_id
        if anchor_id in frag_map:
            # Place anchor at identity in its image frame (we will recenter the whole assembly afterwards)
            placed_rt[anchor_id] = (np.eye(2, dtype=np.float64), np.zeros(2, dtype=np.float64))

    # Iteratively grow the connected assembly
    made_progress = True
    while made_progress:
        made_progress = False
        for j in ordered_candidates:
            if j.id in active_join_ids:
                continue
            fa_id, fb_id = j.fragment_a_id, j.fragment_b_id
            if fa_id not in frag_map or fb_id not in frag_map:
                continue

            a_placed = fa_id in placed_rt
            b_placed = fb_id in placed_rt

            if a_placed and b_placed:
                # Both already placed: check if this join is consistent with their current global placements
                if is_segment_free(fa_id, j.segment_a_indices) and is_segment_free(fb_id, j.segment_b_indices):
                    R_a, t_a = placed_rt[fa_id]
                    R_b, t_b = placed_rt[fb_id]
                    seg_a = np.array(j.segment_a_points, dtype=np.float64)
                    seg_b_rev = np.array(j.segment_b_points, dtype=np.float64)[::-1]
                    ga = (R_a @ seg_a.T).T + t_a
                    gb = (R_b @ seg_b_rev.T).T + t_b
                    loop_res = float(np.mean(np.linalg.norm(ga - gb, axis=1)))
                    if loop_res <= 14.0:
                        committed_segments[fa_id].append(j.segment_a_indices)
                        committed_segments[fb_id].append(j.segment_b_indices)
                        active_join_ids.append(j.id)
                continue

            if not a_placed and not b_placed:
                continue

            if not is_segment_free(fa_id, j.segment_a_indices) or not is_segment_free(fb_id, j.segment_b_indices):
                continue

            R_j, t_j = get_join_rt(j)
            if a_placed and not b_placed:
                R_a, t_a = placed_rt[fa_id]
                R_b_cand = R_a @ R_j
                t_b_cand = R_a @ t_j + t_a
                if not has_global_collision(fb_id, R_b_cand, t_b_cand):
                    placed_rt[fb_id] = (R_b_cand, t_b_cand)
                    committed_segments[fa_id].append(j.segment_a_indices)
                    committed_segments[fb_id].append(j.segment_b_indices)
                    active_join_ids.append(j.id)
                    made_progress = True
                else:
                    rejected_for_conflict.append({
                        "join_id": j.id,
                        "pair": f"{fa_id}↔{fb_id}",
                        "reason": "Substantial interior overlap with already-placed pieces in global assembly."
                    })
            elif b_placed and not a_placed:
                R_b, t_b = placed_rt[fb_id]
                R_a_cand = R_b @ R_j.T
                t_a_cand = t_b - R_a_cand @ t_j
                if not has_global_collision(fa_id, R_a_cand, t_a_cand):
                    placed_rt[fa_id] = (R_a_cand, t_a_cand)
                    committed_segments[fa_id].append(j.segment_a_indices)
                    committed_segments[fb_id].append(j.segment_b_indices)
                    active_join_ids.append(j.id)
                    made_progress = True
                else:
                    rejected_for_conflict.append({
                        "join_id": j.id,
                        "pair": f"{fa_id}↔{fb_id}",
                        "reason": "Substantial interior overlap with already-placed pieces in global assembly."
                    })

    # Recenter unlocked placed pieces around `canvas_center` so the assembly sits cleanly in the workspace
    any_locked = any(frag_map[fid].placement.locked for fid in placed_rt if fid in frag_map)
    if placed_rt and not any_locked:
        all_transformed_pts = []
        for fid, (R_f, t_f) in placed_rt.items():
            cnt = np.array(frag_map[fid].contour, dtype=np.float64)
            all_transformed_pts.append((R_f @ cnt.T).T + t_f)
        stacked = np.vstack(all_transformed_pts)
        curr_center = (np.min(stacked, axis=0) + np.max(stacked, axis=0)) / 2.0
        shift = np.array(canvas_center, dtype=np.float64) - curr_center
        for fid in list(placed_rt.keys()):
            R_f, t_f = placed_rt[fid]
            placed_rt[fid] = (R_f, t_f + shift)

    # Inspect unplaced pieces and record why they were left unplaced
    unplaced_piece_ids = [f.id for f in fragments if f.id not in placed_rt]
    alternatives = []
    for up_id in unplaced_piece_ids:
        related_ambig = [
            j for j in suggested_joins
            if (j.fragment_a_id == up_id or j.fragment_b_id == up_id) and j.is_ambiguous
        ]
        if related_ambig:
            top_a = related_ambig[0]
            ambiguous_unplaced_reasons.append(
                f"Piece {up_id} left unplaced: {top_a.ambiguity_warning or 'Multiple candidate edges fit with near-identical residual.'}"
            )
            for alt in related_ambig[:3]:
                alternatives.append({
                    "join_id": alt.id,
                    "pair": f"{alt.fragment_a_id}↔{alt.fragment_b_id}",
                    "compatibility_score": alt.compatibility_score,
                    "residual_px": alt.residual_px,
                    "warning": alt.ambiguity_warning,
                })

    # Also check if there are ambiguous joins between placed pieces that were skipped
    for j in suggested_joins:
        if j.is_ambiguous and j.id not in active_join_ids:
            if not any(a["join_id"] == j.id for a in alternatives):
                alternatives.append({
                    "join_id": j.id,
                    "pair": f"{j.fragment_a_id}↔{j.fragment_b_id}",
                    "compatibility_score": j.compatibility_score,
                    "residual_px": j.residual_px,
                    "warning": j.ambiguity_warning,
                })

    # Compute final FragmentPlacement for every fragment
    placements: Dict[str, Dict[str, Any]] = {}
    unplaced_idx = 0
    for f in fragments:
        if f.id in placed_rt:
            R_f, t_f = placed_rt[f.id]
            pl = global_rt_to_placement(
                f, R_f, t_f,
                locked=bool(f.placement and f.placement.locked),
                placed_in_assembly=True
            )
            placements[f.id] = pl.dict()
        else:
            # Keep unplaced pieces in an unplaced holding column on the right side of the assembly canvas
            # (or at their source photo coordinates) so they are clearly separated from confirmed joins
            c_xy = get_fragment_bbox_center(f)
            park_x = round(float(canvas_center[0] + 390.0), 1)
            park_y = round(float(140.0 + unplaced_idx * 175.0), 1)
            unplaced_idx += 1
            pl = FragmentPlacement(
                x=park_x if len(placed_rt) > 0 else round(float(c_xy[0]), 1),
                y=park_y if len(placed_rt) > 0 else round(float(c_xy[1]), 1),
                rotation_deg=0.0,
                locked=False,
                placed_in_assembly=False
            )
            placements[f.id] = pl.dict()

    ambiguity_notice = None
    if ambiguous_unplaced_reasons:
        ambiguity_notice = " ".join(ambiguous_unplaced_reasons)
    elif alternatives:
        ambiguity_notice = (
            "Several straight or congruent boundary sections fit similarly well. "
            "Uncertain joins have been left unaccepted for human review."
        )

    assembly_meta = {
        "placements": placements,
        "placed_piece_ids": list(placed_rt.keys()),
        "active_join_ids": active_join_ids,
        "unplaced_piece_ids": unplaced_piece_ids,
        "ambiguity_notice": ambiguity_notice,
        "alternatives": alternatives,
        "rejected_conflicts": rejected_for_conflict,
    }

    # Apply computed placements to fragments
    updated_fragments: List[Fragment] = []
    for f in fragments:
        if f.id in placements:
            pl_dict = placements[f.id]
            f.placement = FragmentPlacement(**pl_dict)
        updated_fragments.append(f)

    return updated_fragments, assembly_meta


def compute_join_snap_placement(
    frag_a: Fragment,
    frag_b: Fragment,
    join: JoinCandidate,
    move_b_to_a: bool = True
) -> Dict[str, Any]:
    frag_anchor = frag_a if move_b_to_a else frag_b
    frag_moving = frag_b if move_b_to_a else frag_a
    """
    Computes the exact canvas FragmentPlacement for `frag_moving` when snapping it to `frag_anchor`
    using `join`, properly accounting for `frag_anchor`'s current rotation and position on the canvas.
    """
    R_anchor, t_anchor = placement_to_global_rt(frag_anchor, frag_anchor.placement)
    rad = math.radians(join.transform_rotation_deg)
    c_a, s_a = math.cos(rad), math.sin(rad)
    R_j = np.array([[c_a, -s_a], [s_a, c_a]], dtype=np.float64)
    t_j = np.array([join.transform_tx, join.transform_ty], dtype=np.float64)

    if frag_anchor.id == join.fragment_a_id and frag_moving.id == join.fragment_b_id:
        R_mov = R_anchor @ R_j
        t_mov = R_anchor @ t_j + t_anchor
    elif frag_anchor.id == join.fragment_b_id and frag_moving.id == join.fragment_a_id:
        R_mov = R_anchor @ R_j.T
        t_mov = t_anchor - R_mov @ t_j
    else:
        raise ValueError("Join does not connect the specified anchor and moving fragments.")

    pl = global_rt_to_placement(
        frag_moving,
        R_mov,
        t_mov,
        locked=frag_moving.placement.locked,
        placed_in_assembly=True
    )
    return {
        "x": pl.x,
        "y": pl.y,
        "rotation_deg": pl.rotation_deg,
        "locked": pl.locked,
        "placed_in_assembly": pl.placed_in_assembly
    }


def render_assembled_png_bytes(
    image_path: Path,
    fragments: List[Fragment],
    joins: Optional[List[JoinCandidate]] = None,
    active_joins: Optional[List[JoinCandidate]] = None,
    project_name: str = "Paper Puzzle Assembly",
    show_labels: bool = True,
    show_outlines: bool = True,
    show_seams: bool = True
) -> bytes:
    seams_list = active_joins if active_joins is not None else (joins or [])
    """
    Renders the 2D assembled pieces into a high-resolution PNG image using their actual rigid transforms,
    warping each piece's pixels from the source photograph and overlaying contour outlines, labels, and active join seams.
    """
    src_img = cv2.imread(str(image_path))
    if src_img is None:
        src_img = np.full((850, 1200, 3), 36, dtype=np.uint8)

    # Determine bounding box of all fragments in canvas coordinates
    global_transforms: Dict[str, Tuple[np.ndarray, np.ndarray]] = {}
    all_canvas_pts = []
    for f in fragments:
        R_f, t_f = placement_to_global_rt(f, f.placement)
        global_transforms[f.id] = (R_f, t_f)
        cnt = np.array(f.contour, dtype=np.float64)
        if len(cnt) > 0:
            all_canvas_pts.append((R_f @ cnt.T).T + t_f)

    if all_canvas_pts:
        stacked = np.vstack(all_canvas_pts)
        min_xy = np.min(stacked, axis=0) - 90.0
        max_xy = np.max(stacked, axis=0) + 90.0
    else:
        min_xy = np.array([0.0, 0.0])
        max_xy = np.array([1000.0, 750.0])

    out_w = int(max(800, min(2200, round(max_xy[0] - min_xy[0]))))
    out_h = int(max(600, min(1800, round(max_xy[1] - min_xy[1]))))
    offset = -min_xy

    # Create dark studio slate canvas with subtle grid
    canvas = np.full((out_h, out_w, 3), (38, 36, 33), dtype=np.uint8)
    for gx in range(0, out_w, 50):
        cv2.line(canvas, (gx, 0), (gx, out_h), (48, 45, 42), 1)
    for gy in range(0, out_h, 50):
        cv2.line(canvas, (0, gy), (out_w, gy), (48, 45, 42), 1)

    h_src, w_src = src_img.shape[:2]

    # Warp each fragment onto the output canvas
    for f in fragments:
        R_f, t_f = global_transforms[f.id]
        t_shifted = t_f + offset

        # Create mask for fragment in source image
        src_mask = np.zeros((h_src, w_src), dtype=np.uint8)
        cnt_i32 = np.array(f.contour, dtype=np.int32).reshape((-1, 1, 2))
        cv2.fillPoly(src_mask, [cnt_i32], 255)

        # 2x3 affine matrix [R | t_shifted]
        M_affine = np.hstack([R_f, t_shifted.reshape(2, 1)]).astype(np.float32)
        warped_img = cv2.warpAffine(src_img, M_affine, (out_w, out_h), flags=cv2.INTER_LINEAR, borderMode=cv2.BORDER_CONSTANT, borderValue=(0, 0, 0))
        warped_mask = cv2.warpAffine(src_mask, M_affine, (out_w, out_h), flags=cv2.INTER_NEAREST, borderMode=cv2.BORDER_CONSTANT, borderValue=0)

        mask_bool = warped_mask > 127
        canvas[mask_bool] = warped_img[mask_bool]

        # Draw contour outline and label
        cnt_f = np.array(f.contour, dtype=np.float64)
        cnt_canvas = ((R_f @ cnt_f.T).T + t_shifted).astype(np.int32).reshape((-1, 1, 2))
        is_placed = getattr(f.placement, "placed_in_assembly", True)
        outline_color = (120, 210, 90) if is_placed else (80, 170, 245)
        cv2.polylines(canvas, [cnt_canvas], True, outline_color, 2, cv2.LINE_AA)

        c_center = (R_f @ get_fragment_bbox_center(f) + t_shifted).astype(int)
        label_text = f.id if is_placed else f"{f.id} (unplaced)"
        cv2.putText(canvas, label_text, (int(c_center[0]) - 14, int(c_center[1]) + 5), cv2.FONT_HERSHEY_SIMPLEX, 0.55, (20, 20, 20), 3, cv2.LINE_AA)
        cv2.putText(canvas, label_text, (int(c_center[0]) - 14, int(c_center[1]) + 5), cv2.FONT_HERSHEY_SIMPLEX, 0.55, (250, 250, 250), 1, cv2.LINE_AA)

    # Highlight accepted/active join seams
    for j in (seams_list or []):
        if getattr(j, "status", "suggested") == "accepted" and j.fragment_a_id in global_transforms:
            R_a, t_a = global_transforms[j.fragment_a_id]
            seg_a = np.array(j.segment_a_points, dtype=np.float64)
            seg_canvas = ((R_a @ seg_a.T).T + t_a + offset).astype(np.int32).reshape((-1, 1, 2))
            cv2.polylines(canvas, [seg_canvas], False, (80, 230, 140), 3, cv2.LINE_AA)

    # Title banner at top-left
    cv2.rectangle(canvas, (12, 12), (460, 62), (28, 26, 24), -1)
    cv2.rectangle(canvas, (12, 12), (460, 62), (90, 85, 80), 1)
    cv2.putText(canvas, f"SHERD-FORGE 2D Assembly: {project_name[:32]}", (24, 36), cv2.FONT_HERSHEY_SIMPLEX, 0.52, (240, 236, 228), 1, cv2.LINE_AA)
    cv2.putText(canvas, f"Pieces: {len(fragments)} | Rigid 2D Transforms (Scale=1.0, No Reflection)", (24, 54), cv2.FONT_HERSHEY_SIMPLEX, 0.40, (180, 175, 168), 1, cv2.LINE_AA)

    ok, buf = cv2.imencode(".png", canvas)
    if not ok:
        raise RuntimeError("Failed to encode assembled PNG")
    return buf.tobytes()
