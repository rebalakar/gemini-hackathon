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
