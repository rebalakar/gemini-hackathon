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

def generate_crop_png(img_bgr: np.ndarray, contour: np.ndarray, project_id: str, frag_id: str) -> str:
    """
    Crops the fragment bounding box and writes a transparent PNG (BGRA) with alpha channel masking the contour.
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

    filename = f"{project_id}_{frag_id}_crop.png"
    filepath = UPLOAD_DIR / filename
    cv2.imwrite(str(filepath), bgra)
    return f"/uploads/{filename}"

def detect_fragments_in_image(
    image_path: Path,
    project_id: str,
    sensitivity: float = 1.0,
    existing_fragments: Optional[List[Fragment]] = None,
    px_per_mm: Optional[float] = None
) -> List[Fragment]:
    """
    Segments individual pottery fragments from a plain background photograph using color difference and adaptive thresholding.
    """
    img = cv2.imread(str(image_path))
    if img is None:
        raise ValueError(f"Could not open image file: {image_path}")

    h, w = img.shape[:2]
    total_area = h * w

    # Estimate background color
    bg_lab = estimate_background_color(img)
    img_lab = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)

    # Calculate Euclidean distance in LAB space (Delta E)
    diff = img_lab.astype(np.float32) - bg_lab.astype(np.float32)
    dist = np.sqrt(np.sum(diff ** 2, axis=2))

    # Delta E threshold modulated by sensitivity:
    # Baseline Delta E of 22.0 is clearly perceptible against plain studio background
    thresh_val = 22.0 / max(0.2, sensitivity)
    binary = (dist >= thresh_val).astype(np.uint8) * 255

    # Morphological cleanup
    kernel_open = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    kernel_close = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (11, 11))
    cleaned = cv2.morphologyEx(binary, cv2.MORPH_OPEN, kernel_open)
    cleaned = cv2.morphologyEx(cleaned, cv2.MORPH_CLOSE, kernel_close)

    # Extract external contours
    contours, _ = cv2.findContours(cleaned, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_TC89_KCOS)

    # Size filtering: min area is 0.05% of image, max area is 85% of image
    min_area = total_area * 0.0005
    max_area = total_area * 0.85

    valid_contours = []
    for cnt in contours:
        area = cv2.contourArea(cnt)
        if min_area <= area <= max_area:
            # Check aspect ratio to avoid long thin calibration rulers (aspect ratio > 7:1)
            x, y, cw, ch = cv2.boundingRect(cnt)
            aspect = max(cw, ch) / max(1, min(cw, ch))
            if aspect < 8.0:
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

    for idx, cnt in enumerate(valid_contours):
        frag_id = f"S{idx + 1}"
        x, y, bw, bh = cv2.boundingRect(cnt)
        M = cv2.moments(cnt)
        if M["m00"] != 0:
            cx = float(M["m10"] / M["m00"])
            cy = float(M["m01"] / M["m00"])
        else:
            cx, cy = float(x + bw / 2), float(y + bh / 2)

        area_px = float(cv2.contourArea(cnt))
        perimeter_px = float(cv2.arcLength(cnt, True))

        area_mm2 = round(area_px / (px_per_mm ** 2), 2) if px_per_mm else None
        perimeter_mm = round(perimeter_px / px_per_mm, 2) if px_per_mm else None

        # Simplified contour coordinates for frontend rendering
        # Douglas-Peucker epsilon
        epsilon = 0.002 * perimeter_px
        approx_cnt = cv2.approxPolyDP(cnt, epsilon, True)
        contour_coords = [[float(pt[0][0]), float(pt[0][1])] for pt in approx_cnt]

        # Transparent crop PNG
        crop_url = generate_crop_png(img, cnt, project_id, frag_id)

        # Feature mask
        mask = np.zeros((h, w), dtype=np.uint8)
        cv2.drawContours(mask, [cnt], -1, 255, -1)
        features = extract_features(img, mask)

        # Preserve existing user annotations/observations if re-running
        prev_obs = existing_map.get(frag_id).observations if frag_id in existing_map else VisibleObservations()
        prev_group = existing_map.get(frag_id).group_id if frag_id in existing_map else None
        prev_locked = existing_map.get(frag_id).locked_group if frag_id in existing_map else False
        prev_placement = existing_map.get(frag_id).placement if frag_id in existing_map else FragmentPlacement(x=cx, y=cy)
        prev_edges = existing_map.get(frag_id).edge_annotations if frag_id in existing_map else []

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

    crop_url = generate_crop_png(img, pts, project_id, frag_id)

    mask = np.zeros((h, w), dtype=np.uint8)
    cv2.drawContours(mask, [pts], -1, 255, -1)
    features = extract_features(img, mask)

    obs = existing_fragment.observations if existing_fragment else VisibleObservations()
    group_id = existing_fragment.group_id if existing_fragment else None
    locked_group = existing_fragment.locked_group if existing_fragment else False
    placement = existing_fragment.placement if existing_fragment else FragmentPlacement(x=cx, y=cy)
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
        group_id=group_id,
        locked_group=locked_group,
        placement=placement,
        edge_annotations=edges,
        observations=obs,
        features=features
    )
