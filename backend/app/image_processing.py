import os
import cv2
import numpy as np
from pathlib import Path
from typing import List, Tuple, Dict, Any, Optional
from .models import (
    Fragment, FragmentPlacement, VisibleObservations,
    FragmentFeatures, EdgeAnnotation
)
from .config import UPLOAD_DIR

def estimate_background_color(img: np.ndarray) -> np.ndarray:
    """
    Estimates the background color in LAB space by sampling the border strips (top, bottom, left, right).
    """
    h, w = img.shape[:2]
    border_y = max(4, int(h * 0.05))
    border_x = max(4, int(w * 0.05))

    top_strip = img[0:border_y, :]
    bottom_strip = img[h-border_y:h, :]
    left_strip = img[:, 0:border_x]
    right_strip = img[:, w-border_x:w]

    border_pixels = np.vstack([
        top_strip.reshape(-1, 3),
        bottom_strip.reshape(-1, 3),
        left_strip.reshape(-1, 3),
        right_strip.reshape(-1, 3),
    ])

    # Convert to LAB for perceptual color distance
    border_lab = cv2.cvtColor(border_pixels.reshape(-1, 1, 3), cv2.COLOR_BGR2LAB).reshape(-1, 3)
    median_lab = np.median(border_lab, axis=0)
    return median_lab

def extract_features(img_bgr: np.ndarray, mask: np.ndarray) -> FragmentFeatures:
    """
    Extracts visible-face color histogram, mean RGB/LAB, and texture metrics inside the fragment mask.
    """
    mean_val_bgr = cv2.mean(img_bgr, mask=mask)[:3]
    mean_rgb = [round(float(mean_val_bgr[2]), 1), round(float(mean_val_bgr[1]), 1), round(float(mean_val_bgr[0]), 1)]

    img_lab = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2LAB)
    mean_val_lab = cv2.mean(img_lab, mask=mask)[:3]
    mean_lab = [round(float(mean_val_lab[0]), 1), round(float(mean_val_lab[1]), 1), round(float(mean_val_lab[2]), 1)]

    # Color histogram in HSV space (Hue: 16 bins, Saturation: 8 bins)
    img_hsv = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2HSV)
    hist = cv2.calcHist([img_hsv], [0, 1], mask, [16, 8], [0, 180, 0, 256])
    cv2.normalize(hist, hist, alpha=0, beta=1, norm_type=cv2.NORM_MINMAX)
    hist_flat = hist.flatten().tolist()
    hist_flat = [round(float(x), 4) for x in hist_flat]

    # Texture metrics: Gray-scale gradient / Laplacian variance
    gray = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2GRAY)
    laplacian = cv2.Laplacian(gray, cv2.CV_64F)
    mask_bool = mask > 0
    if np.sum(mask_bool) > 10:
        lap_pixels = laplacian[mask_bool]
        roughness = float(np.var(lap_pixels))
        # Local contrast
        gray_pixels = gray[mask_bool]
        contrast = float(np.std(gray_pixels))
        homogeneity = 1.0 / (1.0 + (contrast / 25.0))
    else:
        roughness = 0.0
        contrast = 0.0
        homogeneity = 1.0

    return FragmentFeatures(
        mean_rgb=mean_rgb,
        mean_lab=mean_lab,
        color_hist=hist_flat,
        texture_contrast=round(contrast, 2),
        texture_homogeneity=round(homogeneity, 3),
        texture_roughness=round(roughness, 2)
    )

def generate_crop_and_mask_png(img_bgr: np.ndarray, contour: np.ndarray, project_id: str, frag_id: str) -> Tuple[str, str]:
    """
    Crops the fragment bounding box and writes both:
    1. A transparent PNG (BGRA) with alpha channel masking the contour.
    2. A binary mask PNG for inspection and verification.
    """
    x, y, w, h = cv2.boundingRect(contour)
    # Add small padding if within image bounds
    pad = 4
    x0 = max(0, x - pad)
    y0 = max(0, y - pad)
    x1 = min(img_bgr.shape[1], x + w + pad)
    y1 = min(img_bgr.shape[0], y + h + pad)

    crop_bgr = img_bgr[y0:y1, x0:x1]
    crop_h, crop_w = crop_bgr.shape[:2]

    # Local mask
    shifted_cnt = contour.copy()
    shifted_cnt[:, 0, 0] -= x0
    shifted_cnt[:, 0, 1] -= y0

    local_mask = np.zeros((crop_h, crop_w), dtype=np.uint8)
    cv2.drawContours(local_mask, [shifted_cnt], -1, 255, -1)

    # BGRA image
    bgra = cv2.cvtColor(crop_bgr, cv2.COLOR_BGR2BGRA)
    bgra[:, :, 3] = local_mask

    crop_filename = f"{project_id}_{frag_id}_crop.png"
    crop_filepath = UPLOAD_DIR / crop_filename
    cv2.imwrite(str(crop_filepath), bgra)

    mask_filename = f"{project_id}_{frag_id}_mask.png"
    mask_filepath = UPLOAD_DIR / mask_filename
    cv2.imwrite(str(mask_filepath), local_mask)

    return f"/uploads/{crop_filename}", f"/uploads/{mask_filename}"

def generate_crop_png(img_bgr: np.ndarray, contour: np.ndarray, project_id: str, frag_id: str) -> str:
    crop_url, _ = generate_crop_and_mask_png(img_bgr, contour, project_id, frag_id)
    return crop_url


def extract_contour_subpath(contour_coords: List[List[float]], start_idx: int, end_idx: int) -> List[List[float]]:
    """
    Extracts ordered points along the closed contour from start_idx to end_idx (wrapping around if start_idx > end_idx).
    """
    n = len(contour_coords)
    if n == 0:
        return []
    s = max(0, min(n - 1, int(start_idx)))
    e = max(0, min(n - 1, int(end_idx)))
    if s <= e:
        return contour_coords[s : e + 1]
    else:
        return contour_coords[s:] + contour_coords[: e + 1]


def _point_along_closed_polygon(pts: np.ndarray, start_vertex: int, signed_dist: float) -> np.ndarray:
    """
    Walks `abs(signed_dist)` pixels forward (signed_dist > 0) or backward (signed_dist < 0)
    along the closed polygon `pts` starting from `pts[start_vertex]`.
    """
    n = len(pts)
    rem = abs(float(signed_dist))
    step = 1 if signed_dist >= 0 else -1
    curr_idx = start_vertex % n
    for _ in range(n):
        next_idx = (curr_idx + step) % n
        p0 = pts[curr_idx]
        p1 = pts[next_idx]
        seg_len = float(np.linalg.norm(p1 - p0))
        if seg_len >= rem and seg_len > 1e-6:
            return p0 + (rem / seg_len) * (p1 - p0)
        rem -= seg_len
        curr_idx = next_idx
    return pts[curr_idx]


def auto_classify_paper_edges(contour_coords: List[List[float]]) -> List[EdgeAnnotation]:
    """
    Partitions a piece contour at high-curvature corners (measured using fixed arc-length arms
    so single-segment approxPolyDP edges are never skipped) and classifies straight segments
    as 'original_sheet_edge' and irregular/wavy segments as 'cut_torn_edge'.
    """
    pts = np.array(contour_coords, dtype=np.float64)
    n = len(pts)
    if n < 3:
        return []

    # Compute cumulative arc length along the closed polygon
    seg_lengths = np.array([
        float(np.linalg.norm(pts[(i + 1) % n] - pts[i]))
        for i in range(n)
    ], dtype=np.float64)
    total_perim = float(np.sum(seg_lengths))
    if total_perim < 40.0:
        return []
    cum_arc = np.concatenate([[0.0], np.cumsum(seg_lengths[:-1])])

    arm_px = min(26.0, max(12.0, total_perim * 0.04))
    raw_corners = []
    for i in range(n):
        p_curr = pts[i]
        p_prev = _point_along_closed_polygon(pts, i, -arm_px)
        p_next = _point_along_closed_polygon(pts, i, +arm_px)
        v1 = p_curr - p_prev
        v2 = p_next - p_curr
        n1 = float(np.linalg.norm(v1))
        n2 = float(np.linalg.norm(v2))
        if n1 < 1e-3 or n2 < 1e-3:
            continue
        cos_ang = np.clip(np.dot(v1, v2) / (n1 * n2), -1.0, 1.0)
        angle_deg = float(np.degrees(np.arccos(cos_ang)))
        if angle_deg >= 42.0:
            raw_corners.append((i, angle_deg, float(cum_arc[i])))

    # Non-maximum suppression within 32px arc-length window
    raw_corners.sort(key=lambda x: x[1], reverse=True)
    selected_corners = []
    for idx_v, ang, arc_pos in raw_corners:
        too_close = False
        for sel_idx, _, sel_arc in selected_corners:
            arc_diff = abs(arc_pos - sel_arc)
            arc_dist = min(arc_diff, total_perim - arc_diff)
            if arc_dist < 32.0:
                too_close = True
                break
        if not too_close:
            selected_corners.append((idx_v, ang, arc_pos))

    selected_corners.sort(key=lambda x: x[0])
    corner_indices = [c[0] for c in selected_corners]

    if len(corner_indices) < 2:
        corner_indices = [0, max(1, n // 3), max(2, (2 * n) // 3)]

    annotations: List[EdgeAnnotation] = []
    num_c = len(corner_indices)
    for k in range(num_c):
        s_idx = int(corner_indices[k])
        e_idx = int(corner_indices[(k + 1) % num_c])
        sub_pts = extract_contour_subpath(contour_coords, s_idx, e_idx)
        if len(sub_pts) < 2:
            continue
        arr = np.array(sub_pts, dtype=np.float64)
        chord = arr[-1] - arr[0]
        chord_len = float(np.linalg.norm(chord))
        if chord_len < 25.0:
            continue

        arc_len = float(np.sum(np.linalg.norm(np.diff(arr, axis=0), axis=1)))

        # Perpendicular deviation of intermediate points from the straight chord
        if len(arr) > 2:
            unit_chord = chord / chord_len
            normal = np.array([-unit_chord[1], unit_chord[0]])
            rel = arr - arr[0]
            devs = np.abs(rel @ normal)
            max_dev = float(np.max(devs))
            rms_dev = float(np.sqrt(np.mean(devs ** 2)))
        else:
            max_dev = 0.0
            rms_dev = 0.0

        is_straight = (
            max_dev < 2.2
            and rms_dev < 1.25
            and chord_len >= 60.0
            and (arc_len / max(1.0, chord_len)) < 1.015
        )
        edge_type = "original_sheet_edge" if is_straight else "cut_torn_edge"
        label = (
            f"Original Sheet Edge ({chord_len:.0f}px, dev {rms_dev:.1f}px)"
            if is_straight
            else f"Cut/Torn Edge ({chord_len:.0f}px, dev {rms_dev:.1f}px)"
        )
        annotations.append(EdgeAnnotation(
            id=f"edge_{k + 1}",
            start_idx=s_idx,
            end_idx=e_idx,
            edge_type=edge_type,
            label=label,
            points=sub_pts
        ))
    return annotations


def detect_fragments_in_image(
    image_path: Path,
    project_id: str,
    sensitivity: float = 1.0,
    existing_fragments: Optional[List[Fragment]] = None,
    px_per_mm: Optional[float] = None,
    mode: str = "ceramic",
    background_polarity: str = "auto"
) -> List[Fragment]:
    """
    Segments individual pottery fragments or paper puzzle pieces from a plain background photograph.
    Supports both light pieces on a dark background and dark pieces on a light background.
    """
    img = cv2.imread(str(image_path))
    if img is None:
        raise ValueError(f"Could not open image file: {image_path}")

    h, w = img.shape[:2]
    total_area = h * w

    # Estimate background color in LAB space from image border strips
    bg_lab = estimate_background_color(img)
    img_lab = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)

    # Calculate Euclidean distance in LAB space (Delta E)
    diff = img_lab.astype(np.float32) - bg_lab.astype(np.float32)
    dist_lab = np.sqrt(np.sum(diff ** 2, axis=2))

    bg_l = float(bg_lab[0])
    img_l = img_lab[:, :, 0].astype(np.float32)

    if background_polarity == "dark_bg":
        # Light paper/pieces on dark background
        l_pos = np.clip(img_l - bg_l, 0, 255)
        dist = np.maximum(l_pos * 1.15, dist_lab * 0.85)
    elif background_polarity == "light_bg":
        # Dark paper/pieces on light background
        l_neg = np.clip(bg_l - img_l, 0, 255)
        dist = np.maximum(l_neg * 1.15, dist_lab * 0.85)
    else:
        if mode == "paper":
            # Auto-detect contrast polarity from luminance and LAB color difference
            l_abs = np.abs(img_l - bg_l)
            dist = np.maximum(dist_lab, l_abs * 1.05)
        else:
            dist = dist_lab

    # Threshold modulated by sensitivity
    base_thresh = 20.0 if mode == "paper" else 24.0
    thresh_val = base_thresh / max(0.2, sensitivity)
    binary = (dist >= thresh_val).astype(np.uint8) * 255

    # Morphological cleanup (finer kernel in paper mode to preserve sharp corners and jagged tear teeth)
    if mode == "paper":
        kernel_open = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (3, 3))
        kernel_close = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    else:
        kernel_open = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
        kernel_close = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (11, 11))

    cleaned = cv2.morphologyEx(binary, cv2.MORPH_OPEN, kernel_open)
    cleaned = cv2.morphologyEx(cleaned, cv2.MORPH_CLOSE, kernel_close)

    # Extract external contours
    contours, _ = cv2.findContours(cleaned, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE if mode == "paper" else cv2.CHAIN_APPROX_TC89_KCOS)

    # Size filtering: min area is 0.05% of image, max area is 85% of image
    min_area = total_area * (0.0008 if mode == "paper" else 0.0005)
    max_area = total_area * 0.85

    valid_contours = []
    for cnt in contours:
        area = cv2.contourArea(cnt)
        if min_area <= area <= max_area:
            x, y, cw, ch = cv2.boundingRect(cnt)
            aspect = max(cw, ch) / max(1, min(cw, ch))
            # Paper strips can be somewhat elongated, ceramic avoids >4.5:1 calibration ruler bars
            max_aspect = 12.0 if mode == "paper" else 4.5
            if aspect < max_aspect:
                valid_contours.append(cnt)

    # Sort contours by spatial position (top-to-bottom, left-to-right) for stable indexing
    def contour_sort_key(c):
        M = cv2.moments(c)
        if M["m00"] != 0:
            cx = M["m10"] / M["m00"]
            cy = M["m01"] / M["m00"]
        else:
            cx, cy = 0, 0
        return (cy // 100) * 10000 + cx

    valid_contours.sort(key=contour_sort_key)

    fragments: List[Fragment] = []
    existing_map = {f.id: f for f in (existing_fragments or [])}
    id_prefix = "P" if mode == "paper" else "S"

    for idx, cnt in enumerate(valid_contours):
        frag_id = f"{id_prefix}{idx + 1}"
        x, y, bw, bh = cv2.boundingRect(cnt)
        M = cv2.moments(cnt)
        if M["m00"] != 0:
            cx = float(M["m10"] / M["m00"])
            cy = float(M["m01"] / M["m00"])
        else:
            cx, cy = float(x + bw / 2), float(y + bh / 2)

        bbox_cx = float(x + bw / 2.0)
        bbox_cy = float(y + bh / 2.0)

        area_px = float(cv2.contourArea(cnt))
        perimeter_px = float(cv2.arcLength(cnt, True))

        area_mm2 = round(area_px / (px_per_mm ** 2), 2) if (px_per_mm and mode != "paper") else None
        perimeter_mm = round(perimeter_px / px_per_mm, 2) if (px_per_mm and mode != "paper") else None

        # Simplified contour coordinates (finer epsilon in paper mode to preserve tear geometry)
        eps_factor = 0.0012 if mode == "paper" else 0.002
        epsilon = eps_factor * perimeter_px
        approx_cnt = cv2.approxPolyDP(cnt, epsilon, True)
        contour_coords = [[round(float(pt[0][0]), 2), round(float(pt[0][1]), 2)] for pt in approx_cnt]

        # Transparent crop PNG and binary mask PNG
        crop_url, mask_url = generate_crop_and_mask_png(img, cnt, project_id, frag_id)

        # Feature mask
        mask = np.zeros((h, w), dtype=np.uint8)
        cv2.drawContours(mask, [cnt], -1, 255, -1)
        features = extract_features(img, mask)

        # Preserve existing user annotations/observations if re-running
        prev_obs = existing_map.get(frag_id).observations if frag_id in existing_map else VisibleObservations()
        prev_group = existing_map.get(frag_id).group_id if frag_id in existing_map else ("PAPER_SHEET" if mode == "paper" else None)
        prev_locked = existing_map.get(frag_id).locked_group if frag_id in existing_map else False
        prev_placement = (
            existing_map.get(frag_id).placement
            if frag_id in existing_map
            else FragmentPlacement(x=round(bbox_cx, 1), y=round(bbox_cy, 1), rotation_deg=0.0, locked=False, placed_in_assembly=True)
        )
        prev_edges = (
            existing_map.get(frag_id).edge_annotations
            if (frag_id in existing_map and existing_map.get(frag_id).edge_annotations)
            else (auto_classify_paper_edges(contour_coords) if mode == "paper" else [])
        )

        fragments.append(Fragment(
            id=frag_id,
            project_id=project_id,
            contour=contour_coords,
            bbox=[int(x), int(y), int(bw), int(bh)],
            centroid=[round(cx, 1), round(cy, 1)],
            area_px=round(area_px, 1),
            perimeter_px=round(perimeter_px, 1),
            area_mm2=area_mm2,
            perimeter_mm=perimeter_mm,
            crop_url=crop_url,
            mask_url=mask_url,
            group_id=prev_group,
            locked_group=prev_locked,
            placement=prev_placement,
            edge_annotations=prev_edges,
            observations=prev_obs,
            features=features
        ))

    return fragments

def create_or_update_fragment_from_polygon(
    image_path: Path,
    project_id: str,
    frag_id: str,
    polygon_coords: List[List[float]],
    px_per_mm: Optional[float] = None,
    existing_fragment: Optional[Fragment] = None
) -> Fragment:
    """
    Creates or updates a fragment from user-drawn or edited polygon vertices.
    """
    img = cv2.imread(str(image_path))
    if img is None:
        raise ValueError("Could not open image file")

    h, w = img.shape[:2]
    pts = np.array(polygon_coords, dtype=np.int32).reshape((-1, 1, 2))

    x, y, bw, bh = cv2.boundingRect(pts)
    M = cv2.moments(pts)
    if M["m00"] != 0:
        cx = float(M["m10"] / M["m00"])
        cy = float(M["m01"] / M["m00"])
    else:
        cx, cy = float(x + bw / 2), float(y + bh / 2)

    area_px = float(cv2.contourArea(pts))
    perimeter_px = float(cv2.arcLength(pts, True))

    area_mm2 = round(area_px / (px_per_mm ** 2), 2) if px_per_mm else None
    perimeter_mm = round(perimeter_px / px_per_mm, 2) if px_per_mm else None

    crop_url, mask_url = generate_crop_and_mask_png(img, pts, project_id, frag_id)

    mask = np.zeros((h, w), dtype=np.uint8)
    cv2.drawContours(mask, [pts], -1, 255, -1)
    features = extract_features(img, mask)

    bbox_cx = round(float(x + bw / 2.0), 1)
    bbox_cy = round(float(y + bh / 2.0), 1)
    obs = existing_fragment.observations if existing_fragment else VisibleObservations()
    group_id = existing_fragment.group_id if existing_fragment else ("PAPER_SHEET" if frag_id.startswith("P") else None)
    locked_group = existing_fragment.locked_group if existing_fragment else False
    placement = existing_fragment.placement if existing_fragment else FragmentPlacement(x=bbox_cx, y=bbox_cy, rotation_deg=0.0, locked=False, placed_in_assembly=True)
    edges = existing_fragment.edge_annotations if existing_fragment else []

    return Fragment(
        id=frag_id,
        project_id=project_id,
        contour=[[float(pt[0][0]), float(pt[0][1])] for pt in pts],
        bbox=[int(x), int(y), int(bw), int(bh)],
        centroid=[round(cx, 1), round(cy, 1)],
        area_px=round(area_px, 1),
        perimeter_px=round(perimeter_px, 1),
        area_mm2=area_mm2,
        perimeter_mm=perimeter_mm,
        crop_url=crop_url,
        mask_url=mask_url,
        group_id=group_id,
        locked_group=locked_group,
        placement=placement,
        edge_annotations=edges,
        observations=obs,
        features=features
    )
