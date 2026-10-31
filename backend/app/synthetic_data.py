import os
import cv2
import numpy as np
import math
from pathlib import Path
from typing import Tuple, Dict, Any
from .config import UPLOAD_DIR

def create_synthetic_scene_image(filepath: Path) -> Dict[str, Any]:
    """
    Generates a deterministic synthetic archaeological pottery photography scene.
    Contains:
    - Neutral studio backdrop table
    - Printed 100mm calibration scale marker (known length: 320 px -> 3.20 px/mm)
    - Vessel A (Terracotta Fine Ware Bowl): 4 fragments (S1..S4) with known (S1, S2) join
    - Vessel B (Buff Coarse Ware Pot): 3 fragments (S5..S7) with known (S5, S6) join
    - Stray Sherd (Gray Burnished Ware): 1 fragment (S8)
    """
    w, h = 1600, 1200
    # Create background with warm off-white and subtle paper/canvas grain
    np.random.seed(42)
    bg = np.ones((h, w, 3), dtype=np.uint8) * 232
    bg[:, :, 0] = 226  # B
    bg[:, :, 1] = 230  # G
    bg[:, :, 2] = 236  # R

    # Add gentle noise
    noise = np.random.normal(0, 3, (h, w, 3)).astype(np.int16)
    bg = np.clip(bg.astype(np.int16) + noise, 0, 255).astype(np.uint8)

    # 1. Draw printed calibration scale ruler
    # Ruler background strip
    rx0, ry0 = 120, 80
    rw, rh = 380, 80
    cv2.rectangle(bg, (rx0, ry0), (rx0 + rw, ry0 + rh), (255, 255, 255), -1)
    cv2.rectangle(bg, (rx0, ry0), (rx0 + rw, ry0 + rh), (40, 40, 40), 2)

    # Scale bar: 100 mm = 320 pixels (3.2 px/mm)
    calib_p1 = [rx0 + 30, ry0 + 45]
    calib_p2 = [rx0 + 350, ry0 + 45]
    bar_y = calib_p1[1]

    # Draw black & white alternating 10mm blocks (32 px each)
    block_w = 32
    for b in range(10):
        bx = calib_p1[0] + b * block_w
        color = (30, 30, 30) if b % 2 == 0 else (240, 240, 240)
        cv2.rectangle(bg, (bx, bar_y - 8), (bx + block_w, bar_y + 8), color, -1)
        cv2.rectangle(bg, (bx, bar_y - 8), (bx + block_w, bar_y + 8), (30, 30, 30), 1)

    cv2.putText(bg, "0", (calib_p1[0] - 6, bar_y + 24), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (30, 30, 30), 1, cv2.LINE_AA)
    cv2.putText(bg, "50", (calib_p1[0] + 5 * block_w - 10, bar_y + 24), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (30, 30, 30), 1, cv2.LINE_AA)
    cv2.putText(bg, "100 mm", (calib_p2[0] - 20, bar_y + 24), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (30, 30, 30), 1, cv2.LINE_AA)
    cv2.putText(bg, "CALIBRATION SCALE (100mm)", (rx0 + 20, ry0 + 22), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (30, 30, 30), 1, cv2.LINE_AA)

    # Helper function to draw textured ceramic polygons
    def draw_ceramic_polygon(pts, base_bgr, grain_std=8, painted_band=False):
        pts = np.array(pts, dtype=np.int32).reshape((-1, 1, 2))
        mask = np.zeros((h, w), dtype=np.uint8)
        cv2.fillPoly(mask, [pts], 255)

        # Base ceramic color
        ceramic = np.zeros((h, w, 3), dtype=np.uint8)
        ceramic[:] = base_bgr

        # Texture grain
        tex = np.random.normal(0, grain_std, (h, w, 3)).astype(np.int16)
        ceramic = np.clip(ceramic.astype(np.int16) + tex, 0, 255).astype(np.uint8)

        if painted_band:
            # Add darker painted slip line
            cv2.polylines(ceramic, [pts[:15]], isClosed=False, color=(35, 30, 45), thickness=6)

        # Draw drop shadow for 2.5D visual realism
        shadow = cv2.GaussianBlur(mask, (21, 21), 0)
        shadow_rgb = (shadow.astype(np.float32) / 255.0) * 0.35
        for c in range(3):
            bg[:, :, c] = (bg[:, :, c] * (1.0 - shadow_rgb)).astype(np.uint8)

        # Blend ceramic onto background
        mask_bool = mask > 0
        bg[mask_bool] = ceramic[mask_bool]
        # Fine outline edge
        cv2.drawContours(bg, [pts], -1, (20, 20, 20), 1)

    # --- Vessel A: Terracotta Fine Ware (Base BGR: 45, 85, 195) ---
    # S1: Rim fragment with jagged right fracture edge
    # S2: Body fragment whose left fracture edge MATES with S1!
    # Common fracture edge formula:
    # y from 0 to 180, x(y) = 25 * sin(y / 28) + 10 * cos(y / 15)
    fracture_y = np.linspace(0, 180, 25)
    fracture_x = 22.0 * np.sin(fracture_y / 28.0) + 12.0 * np.cos(fracture_y / 16.0)

    # S1 contour (placed at offset [250, 260])
    s1_off_x, s1_off_y = 260, 260
    # Top curved rim arc (radius 288px)
    s1_rim = [[s1_off_x + 0, s1_off_y + 0], [s1_off_x + 50, s1_off_y - 8], [s1_off_x + 100, s1_off_y - 12], [s1_off_x + 150, s1_off_y - 8], [s1_off_x + 190, s1_off_y + 0]]
    # Right fracture edge
    s1_fracture = [[float(s1_off_x + 190 + fx), float(s1_off_y + fy)] for fx, fy in zip(fracture_x, fracture_y)]
    # Bottom break and left edge
    s1_bottom = [[s1_off_x + 110, s1_off_y + 195], [s1_off_x + 30, s1_off_y + 180], [s1_off_x - 10, s1_off_y + 110], [s1_off_x + 0, s1_off_y + 0]]
    s1_poly = s1_rim + s1_fracture + s1_bottom
    draw_ceramic_polygon(s1_poly, base_bgr=(45, 85, 195), grain_std=6, painted_band=True)

    # S2 contour (separated slightly and rotated for realistic scatter, mating edge on its left)
    # When unrotated, mating edge is at x = 190 + fx, y = fy
    # Let's place S2 at [560, 270] (displaced by ~110px)
    s2_off_x, s2_off_y = 560, 270
    s2_fracture = [[float(s2_off_x + fx), float(s2_off_y + fy)] for fx, fy in zip(fracture_x, fracture_y)]
    s2_poly = s2_fracture + [
        [s2_off_x + 140, s2_off_y + 175],
        [s2_off_x + 180, s2_off_y + 110],
        [s2_off_x + 150, s2_off_y + 20],
        [s2_off_x + 40, s2_off_y - 5],
    ]
    draw_ceramic_polygon(s2_poly, base_bgr=(45, 85, 195), grain_std=6, painted_band=False)

    # S3: Another Terracotta Rim Fragment
    s3_poly = [
        [820, 240], [880, 235], [940, 242], [990, 260],
        [985, 340], [930, 370], [860, 360], [810, 310]
    ]
    draw_ceramic_polygon(s3_poly, base_bgr=(45, 85, 195), grain_std=6, painted_band=True)

    # S4: Terracotta Body Fragment
    s4_poly = [
        [1060, 280], [1140, 270], [1190, 320], [1170, 410],
        [1090, 430], [1030, 370], [1040, 310]
    ]
    draw_ceramic_polygon(s4_poly, base_bgr=(45, 85, 195), grain_std=6, painted_band=False)

    # --- Vessel B: Buff Coarse Ware Cooking Pot (Base BGR: 140, 185, 210) ---
    # S5 & S6: Shared fracture contour
    frac_b_y = np.linspace(0, 160, 20)
    frac_b_x = 18.0 * np.sin(frac_b_y / 22.0) - 8.0 * np.cos(frac_b_y / 14.0)

    s5_off_x, s5_off_y = 280, 680
    s5_fracture = [[float(s5_off_x + 160 + fx), float(s5_off_y + fy)] for fx, fy in zip(frac_b_x, frac_b_y)]
    s5_poly = [[s5_off_x, s5_off_y], [s5_off_x + 80, s5_off_y - 15], [s5_off_x + 160, s5_off_y]] + s5_fracture + [
        [s5_off_x + 110, s5_off_y + 180], [s5_off_x + 20, s5_off_y + 150]
    ]
    draw_ceramic_polygon(s5_poly, base_bgr=(140, 185, 210), grain_std=14, painted_band=False)

    # S6: Mating body fragment of Vessel B
    s6_off_x, s6_off_y = 540, 710
    s6_fracture = [[float(s6_off_x + fx), float(s6_off_y + fy)] for fx, fy in zip(frac_b_x, frac_b_y)]
    s6_poly = s6_fracture + [
        [s6_off_x + 130, s6_off_y + 150], [s6_off_x + 160, s6_off_y + 80],
        [s6_off_x + 110, s6_off_y + 10], [s6_off_x + 20, s6_off_y - 10]
    ]
    draw_ceramic_polygon(s6_poly, base_bgr=(140, 185, 210), grain_std=14, painted_band=False)

    # S7: Another Buff Ware Sherd
    s7_poly = [
        [790, 690], [880, 670], [930, 730], [910, 830],
        [830, 850], [770, 780]
    ]
    draw_ceramic_polygon(s7_poly, base_bgr=(140, 185, 210), grain_std=14, painted_band=False)

    # --- Vessel C: Gray Burnished Stray Sherd (Base BGR: 90, 90, 95) ---
    s8_poly = [
        [1060, 710], [1150, 690], [1210, 750], [1180, 820],
        [1110, 840], [1040, 790]
    ]
    draw_ceramic_polygon(s8_poly, base_bgr=(90, 90, 95), grain_std=5, painted_band=False)

    # Save final synthetic image
    cv2.imwrite(str(filepath), bg)

    return {
        "dimensions": [w, h],
        "calibration": {
            "point_a": calib_p1,
            "point_b": calib_p2,
            "distance_mm": 100.0,
            "px_per_mm": 3.20
        },
        "ground_truth": {
            "vessel_a": {
                "name": "Terracotta Fine Ware Bowl",
                "color_type": "terracotta_fine",
                "fragments": ["S1", "S2", "S3", "S4"],
                "known_joins": [["S1", "S2"]],
                "rim_diameter_mm": 180.0,
                "height_mm": 70.0
            },
            "vessel_b": {
                "name": "Buff Coarse Cooking Pot",
                "color_type": "buff_coarse",
                "fragments": ["S5", "S6", "S7"],
                "known_joins": [["S5", "S6"]],
                "rim_diameter_mm": 190.0,
                "height_mm": 150.0
            },
            "unassigned": ["S8"]
        }
    }


def _generate_irregular_tear_curve(
    p_start: Tuple[float, float],
    p_end: Tuple[float, float],
    num_pts: int,
    harmonics: list,
    bumps: list
) -> list:
    """
    Generates a high-relief, deterministic 2D curve from p_start to p_end
    with zero displacement at endpoints (t=0 and t=1) so piece corners meet cleanly.
    harmonics: list of (freq_int, sin_amp, cos_amp)
    bumps: list of (center_t, width_t, amp_px)
    """
    x0, y0 = p_start
    x1, y1 = p_end
    dx = x1 - x0
    dy = y1 - y0
    length = math.hypot(dx, dy)
    ux, uy = dx / length, dy / length
    # Normal vector (-uy, ux)
    nx, ny = -uy, ux

    pts = []
    for i in range(num_pts):
        t = i / float(num_pts - 1)
        envelope = math.sin(math.pi * t) ** 0.85
        offset = 0.0
        for freq, s_amp, c_amp in harmonics:
            offset += s_amp * math.sin(freq * math.pi * t)
            offset += c_amp * (1.0 - math.cos(2.0 * freq * math.pi * t)) * 0.5
        for ct, wt, b_amp in bumps:
            offset += b_amp * math.exp(-((t - ct) / wt) ** 2)
        offset *= envelope
        px = x0 + t * dx + offset * nx
        py = y0 + t * dy + offset * ny
        pts.append([float(px), float(py)])
    return pts


def _transform_polygon(pts: list, angle_deg: float, target_center: Tuple[float, float]) -> Tuple[list, Dict[str, float]]:
    """
    Rotates polygon around its centroid by angle_deg and translates its centroid to target_center.
    Returns (transformed_pts, transform_meta).
    """
    arr = np.array(pts, dtype=np.float64)
    centroid = np.mean(arr, axis=0)
    theta = math.radians(angle_deg)
    c, s = math.cos(theta), math.sin(theta)
    R = np.array([[c, -s], [s, c]], dtype=np.float64)
    rotated = (arr - centroid) @ R.T + np.array(target_center, dtype=np.float64)
    return rotated.tolist(), {
        "sheet_centroid": [float(centroid[0]), float(centroid[1])],
        "scatter_center": [float(target_center[0]), float(target_center[1])],
        "rotation_deg": float(angle_deg)
    }


def create_synthetic_paper_puzzle_scene(filepath: Path) -> Dict[str, Any]:
    """
    Generates an honest synthetic Paper Puzzle Demo scene:
    - Partitions a single 500x350 px rectangular sheet into 6 pieces (3x2 grid)
      sharing 7 distinct irregular torn internal boundaries, while outer boundaries
      remain straight sheet edges.
    - Rotates and scatters the 6 pieces on a contrasting dark studio surface (1440x960 px)
      without overlap.
    - Returns ground-truth piece adjacency and transforms strictly for evaluation.
    """
    w, h = 1440, 960
    np.random.seed(104)

    # Dark contrasting slate background
    bg = np.zeros((h, w, 3), dtype=np.uint8)
    bg[:, :, 0] = 38  # B
    bg[:, :, 1] = 34  # G
    bg[:, :, 2] = 31  # R
    noise = np.random.normal(0, 2.0, (h, w, 3)).astype(np.int16)
    bg = np.clip(bg.astype(np.int16) + noise, 0, 255).astype(np.uint8)

    # Sheet dimensions: 500 x 350 px
    # Grid corners:
    # Row 0: (0,0), (168,0), (336,0), (500,0)
    # Row 1: (0,175), (168,175), (336,175), (500,175)
    # Row 2: (0,350), (168,350), (336,350), (500,350)
    r0 = [(0.0, 0.0), (168.0, 0.0), (336.0, 0.0), (500.0, 0.0)]
    r1 = [(0.0, 175.0), (168.0, 175.0), (336.0, 175.0), (500.0, 175.0)]
    r2 = [(0.0, 350.0), (168.0, 350.0), (336.0, 350.0), (500.0, 350.0)]

    # 7 distinct irregular internal tear curves (each 28 points)
    # Vertical tears (Row 0 -> Row 1)
    v_top_1 = _generate_irregular_tear_curve(
        r0[1], r1[1], 28,
        harmonics=[(1, 14.0, 0.0), (2, -11.0, 6.0), (3, 7.0, -4.0)],
        bumps=[(0.28, 0.09, 14.0), (0.72, 0.10, -16.0)]
    )
    v_top_2 = _generate_irregular_tear_curve(
        r0[2], r1[2], 28,
        harmonics=[(1, -15.0, 5.0), (2, 9.0, -8.0), (4, 6.0, 0.0)],
        bumps=[(0.38, 0.08, -18.0), (0.68, 0.09, 15.0)]
    )
    # Vertical tears (Row 1 -> Row 2)
    v_bot_1 = _generate_irregular_tear_curve(
        r1[1], r2[1], 28,
        harmonics=[(1, 12.0, -7.0), (3, -13.0, 5.0)],
        bumps=[(0.24, 0.08, -17.0), (0.58, 0.11, 19.0)]
    )
    v_bot_2 = _generate_irregular_tear_curve(
        r1[2], r2[2], 28,
        harmonics=[(2, 16.0, 4.0), (3, 9.0, -7.0)],
        bumps=[(0.32, 0.10, 16.0), (0.76, 0.08, 14.0)]
    )
    # Horizontal tears (Col 0->1, Col 1->2, Col 2->3 along Row 1)
    h_mid_0 = _generate_irregular_tear_curve(
        r1[0], r1[1], 28,
        harmonics=[(1, -13.0, 6.0), (2, -10.0, -5.0), (3, 8.0, 0.0)],
        bumps=[(0.35, 0.09, 18.0), (0.70, 0.09, -14.0)]
    )
    h_mid_1 = _generate_irregular_tear_curve(
        r1[1], r1[2], 28,
        harmonics=[(1, 15.0, -5.0), (2, 12.0, 7.0), (4, -6.0, 0.0)],
        bumps=[(0.26, 0.08, -16.0), (0.64, 0.10, -15.0)]
    )
    h_mid_2 = _generate_irregular_tear_curve(
        r1[2], r1[3], 28,
        harmonics=[(1, -11.0, -6.0), (3, 14.0, 4.0)],
        bumps=[(0.45, 0.09, 20.0), (0.78, 0.08, -15.0)]
    )

    def _line_pts(p_a, p_b, n=12):
        return [
            [float(p_a[0] + (p_b[0] - p_a[0]) * i / (n - 1)),
             float(p_a[1] + (p_b[1] - p_a[1]) * i / (n - 1))]
            for i in range(n)
        ]

    # Build closed clockwise polygons in sheet coordinates for the 6 pieces
    # Top-Left (piece_idx 0)
    poly_tl = (
        _line_pts(r0[0], r0[1])[:-1] +
        v_top_1[:-1] +
        list(reversed(h_mid_0))[:-1] +
        _line_pts(r1[0], r0[0])[:-1]
    )
    # Top-Mid (piece_idx 1)
    poly_tm = (
        _line_pts(r0[1], r0[2])[:-1] +
        v_top_2[:-1] +
        list(reversed(h_mid_1))[:-1] +
        list(reversed(v_top_1))[:-1]
    )
    # Top-Right (piece_idx 2)
    poly_tr = (
        _line_pts(r0[2], r0[3])[:-1] +
        _line_pts(r0[3], r1[3])[:-1] +
        list(reversed(h_mid_2))[:-1] +
        list(reversed(v_top_2))[:-1]
    )
    # Bot-Left (piece_idx 3)
    poly_bl = (
        h_mid_0[:-1] +
        v_bot_1[:-1] +
        _line_pts(r2[1], r2[0])[:-1] +
        _line_pts(r2[0], r1[0])[:-1]
    )
    # Bot-Mid (piece_idx 4)
    poly_bm = (
        h_mid_1[:-1] +
        v_bot_2[:-1] +
        _line_pts(r2[2], r2[1])[:-1] +
        list(reversed(v_bot_1))[:-1]
    )
    # Bot-Right (piece_idx 5)
    poly_br = (
        h_mid_2[:-1] +
        _line_pts(r1[3], r2[3])[:-1] +
        _line_pts(r2[3], r2[2])[:-1] +
        list(reversed(v_bot_2))[:-1]
    )

    sheet_polys = [poly_tl, poly_tm, poly_tr, poly_bl, poly_bm, poly_br]

    # Scatter locations (ordered left-to-right, top-to-bottom so detection labels P1..P6 match!)
    scatter_Layout = [
        ((270.0, 260.0), -24.0),   # P1 (Top-Left of sheet)
        ((720.0, 250.0), 19.0),    # P2 (Top-Mid of sheet)
        ((1170.0, 265.0), -31.0),  # P3 (Top-Right of sheet)
        ((280.0, 690.0), 27.0),    # P4 (Bot-Left of sheet)
        ((730.0, 700.0), -18.0),   # P5 (Bot-Mid of sheet)
        ((1165.0, 695.0), 23.0),   # P6 (Bot-Right of sheet)
    ]

    # Pre-render the un-cut 500x350 paper sheet texture with optional faint registration markings
    sheet_w, sheet_h = 500, 350
    sheet_img = np.zeros((sheet_h, sheet_w, 3), dtype=np.uint8)
    sheet_img[:, :, 0] = 234  # Warm off-white paper (BGR)
    sheet_img[:, :, 1] = 241
    sheet_img[:, :, 2] = 245
    paper_grain = np.random.normal(0, 2.5, (sheet_h, sheet_w, 3)).astype(np.int16)
    sheet_img = np.clip(sheet_img.astype(np.int16) + paper_grain, 0, 255).astype(np.uint8)

    # Draw subtle internal registration graphics (kept >=14px away from edges so silhouette is unaffected)
    cv2.circle(sheet_img, (250, 175), 110, (195, 175, 155), 2, cv2.LINE_AA)
    cv2.circle(sheet_img, (250, 175), 55, (180, 195, 170), 2, cv2.LINE_AA)
    cv2.line(sheet_img, (60, 70), (440, 280), (185, 170, 190), 2, cv2.LINE_AA)
    cv2.line(sheet_img, (60, 280), (440, 70), (170, 185, 195), 2, cv2.LINE_AA)

    ground_truth_pieces = {}
    for idx, (spoly, (center_xy, rot_deg)) in enumerate(zip(sheet_polys, scatter_Layout)):
        pid = f"P{idx + 1}"
        scattered_poly, t_meta = _transform_polygon(spoly, rot_deg, center_xy)
        ground_truth_pieces[pid] = {
            "sheet_polygon": spoly,
            "scattered_polygon": scattered_poly,
            **t_meta
        }

        # Render piece polygon onto bg using warpAffine from sheet_img for texture + crisp mask
        pts_int = np.array(scattered_poly, dtype=np.int32).reshape((-1, 1, 2))
        mask = np.zeros((h, w), dtype=np.uint8)
        cv2.fillPoly(mask, [pts_int], 255)

        # Base paper fill on mask
        paper_fill = np.zeros((h, w, 3), dtype=np.uint8)
        paper_fill[:, :, 0] = 234
        paper_fill[:, :, 1] = 241
        paper_fill[:, :, 2] = 245
        p_noise = np.random.normal(0, 2.5, (h, w, 3)).astype(np.int16)
        paper_fill = np.clip(paper_fill.astype(np.int16) + p_noise, 0, 255).astype(np.uint8)

        # Warp internal sheet pattern into scattered piece
        arr_sheet = np.array(spoly, dtype=np.float32)
        centroid = np.mean(arr_sheet, axis=0)
        M = cv2.getRotationMatrix2D((float(centroid[0]), float(centroid[1])), -rot_deg, 1.0)
        M[0, 2] += center_xy[0] - centroid[0]
        M[1, 2] += center_xy[1] - centroid[1]
        warped_sheet = cv2.warpAffine(sheet_img, M, (w, h), flags=cv2.INTER_LINEAR, borderMode=cv2.BORDER_REPLICATE)

        # Use warped_sheet inside eroded interior, and pure paper_fill near boundary for crisp silhouette
        eroded = cv2.erode(mask, np.ones((7, 7), np.uint8), iterations=1)
        bg[mask > 0] = paper_fill[mask > 0]
        bg[eroded > 0] = warped_sheet[eroded > 0]

    cv2.imwrite(str(filepath), bg)

    known_adjacent_joins = [
        ["P1", "P2"],
        ["P2", "P3"],
        ["P4", "P5"],
        ["P5", "P6"],
        ["P1", "P4"],
        ["P2", "P5"],
        ["P3", "P6"],
    ]

    return {
        "dimensions": [w, h],
        "sheet_dimensions": [sheet_w, sheet_h],
        "ground_truth": {
            "pieces_count": 6,
            "piece_ids": ["P1", "P2", "P3", "P4", "P5", "P6"],
            "known_adjacent_pairs": known_adjacent_joins,
            "pieces": ground_truth_pieces,
            "description": "Single 500x350px paper sheet partitioned into 6 irregular pieces (3x2 grid) with 7 shared irregular torn boundaries and 8 outer straight sheet edges."
        }
    }


def create_ambiguous_paper_puzzle_scene(filepath: Path) -> Dict[str, Any]:
    """
    Generates a deliberately ambiguous Paper Puzzle scene (4 pieces: P1..P4):
    - P1 and P2 share a distinctive irregular torn edge (unambiguous match).
    - P3 and P4 are blank rectangular strips cut with straight parallel scissor cuts
      of identical length (170 px), creating geometric ambiguity where multiple straight
      boundaries fit equally well and must be left unresolved for human confirmation.
    """
    w, h = 1360, 860
    np.random.seed(208)

    bg = np.zeros((h, w, 3), dtype=np.uint8)
    bg[:, :, 0] = 36
    bg[:, :, 1] = 33
    bg[:, :, 2] = 30
    noise = np.random.normal(0, 2.0, (h, w, 3)).astype(np.int16)
    bg = np.clip(bg.astype(np.int16) + noise, 0, 255).astype(np.uint8)

    def _line_pts(p_a, p_b, n=14):
        return [
            [float(p_a[0] + (p_b[0] - p_a[0]) * i / (n - 1)),
             float(p_a[1] + (p_b[1] - p_a[1]) * i / (n - 1))]
            for i in range(n)
        ]

    # P1 & P2 share a rich irregular horizontal tear of length 190 px
    tear_12 = _generate_irregular_tear_curve(
        (0.0, 170.0), (190.0, 170.0), 30,
        harmonics=[(1, 16.0, -5.0), (2, -13.0, 7.0), (3, 9.0, 0.0)],
        bumps=[(0.30, 0.08, 19.0), (0.68, 0.09, -17.0)]
    )
    poly_p1 = (
        _line_pts((0.0, 0.0), (190.0, 0.0))[:-1] +
        _line_pts((190.0, 0.0), (190.0, 170.0))[:-1] +
        list(reversed(tear_12))[:-1] +
        _line_pts((0.0, 170.0), (0.0, 0.0))[:-1]
    )
    poly_p2 = (
        tear_12[:-1] +
        _line_pts((190.0, 170.0), (190.0, 340.0))[:-1] +
        _line_pts((190.0, 340.0), (0.0, 340.0))[:-1] +
        _line_pts((0.0, 340.0), (0.0, 170.0))[:-1]
    )

    # P3 & P4 are separated by straight scissor cuts (160 x 170 px rectangles)
    poly_p3 = (
        _line_pts((190.0, 0.0), (350.0, 0.0))[:-1] +
        _line_pts((350.0, 0.0), (350.0, 170.0))[:-1] +
        _line_pts((350.0, 170.0), (190.0, 170.0))[:-1] +
        _line_pts((190.0, 170.0), (190.0, 0.0))[:-1]
    )
    poly_p4 = (
        _line_pts((190.0, 170.0), (350.0, 170.0))[:-1] +
        _line_pts((350.0, 170.0), (350.0, 340.0))[:-1] +
        _line_pts((350.0, 340.0), (190.0, 340.0))[:-1] +
        _line_pts((190.0, 340.0), (190.0, 170.0))[:-1]
    )

    layout = [
        (poly_p1, (340.0, 250.0), -19.0),
        (poly_p3, (980.0, 250.0), 14.0),
        (poly_p2, (340.0, 630.0), 22.0),
        (poly_p4, (980.0, 630.0), -16.0),
    ]

    for spoly, center_xy, rot_deg in layout:
        scattered_poly, _ = _transform_polygon(spoly, rot_deg, center_xy)
        pts_int = np.array(scattered_poly, dtype=np.int32).reshape((-1, 1, 2))
        mask = np.zeros((h, w), dtype=np.uint8)
        cv2.fillPoly(mask, [pts_int], 255)
        paper_fill = np.zeros((h, w, 3), dtype=np.uint8)
        paper_fill[:, :, 0] = 236
        paper_fill[:, :, 1] = 242
        paper_fill[:, :, 2] = 246
        p_noise = np.random.normal(0, 2.2, (h, w, 3)).astype(np.int16)
        paper_fill = np.clip(paper_fill.astype(np.int16) + p_noise, 0, 255).astype(np.uint8)
        bg[mask > 0] = paper_fill[mask > 0]

    cv2.imwrite(str(filepath), bg)

    return {
        "dimensions": [w, h],
        "ground_truth": {
            "pieces_count": 4,
            "unambiguous_joins": [["P1", "P3"]],  # Top-left and bottom-left in row-major order: P1 (top-left) and P3 (bottom-left)
            "ambiguous_pieces": ["P2", "P4"],
            "description": "Deliberately ambiguous scene: P1 and P3 share an irregular torn edge, while P2 and P4 have straight scissor cuts with multiple valid orientations."
        }
    }

