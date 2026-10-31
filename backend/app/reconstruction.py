import math
import numpy as np
from typing import List, Dict, Any, Tuple, Optional
from .models import RimArcFittingResult, ReconstructionProfile

def fit_circle_to_rim_points(
    points: List[List[float]],
    px_per_mm: Optional[float] = None
) -> RimArcFittingResult:
    """
    Fits a circle to user-selected points along a pottery rim arc using Pratt algebraic least-squares.
    Evaluates angular arc coverage and residual error.
    """
    pts = np.array(points, dtype=np.float64)
    n = len(pts)
    if n < 3:
        raise ValueError("At least 3 non-collinear points are required to fit a rim circle.")

    x = pts[:, 0]
    y = pts[:, 1]

    # Linear system: [2x, 2y, 1] [cx, cy, c]^T = [x^2 + y^2]
    A = np.column_stack([2 * x, 2 * y, np.ones(n)])
    b = x**2 + y**2

    sol, residuals, rank, s = np.linalg.lstsq(A, b, rcond=None)
    cx, cy, c = sol[0], sol[1], sol[2]
    radius_sq = c + cx**2 + cy**2
    if radius_sq <= 0:
        raise ValueError("Collinear or degenerate points cannot define a circle.")
    radius_px = math.sqrt(radius_sq)

    # Point-to-circle Euclidean residuals
    dists = np.sqrt((x - cx)**2 + (y - cy)**2)
    diffs = np.abs(dists - radius_px)
    rmse_px = float(np.sqrt(np.mean(diffs**2)))

    # Angular arc coverage
    angles = np.arctan2(y - cy, x - cx)  # [-pi, pi]
    angles_deg = np.degrees(angles)
    angles_sorted = np.sort(angles_deg)

    # Compute maximum angular gap
    diff_angles = np.diff(angles_sorted)
    # wrap-around gap
    wrap_gap = (360.0 + angles_sorted[0]) - angles_sorted[-1]
    max_gap = max(np.max(diff_angles), wrap_gap)
    arc_coverage_deg = float(360.0 - max_gap)

    warning = None
    if arc_coverage_deg < 30.0:
        warning = f"Very short arc coverage ({round(arc_coverage_deg, 1)}° < 30°): Fitted diameter has wide uncertainty bounds."
    elif arc_coverage_deg < 50.0:
        warning = f"Moderate arc coverage ({round(arc_coverage_deg, 1)}°): Cross-check with side profile or fabric curvature."

    radius_mm = round(radius_px / px_per_mm, 2) if px_per_mm else None
    diameter_mm = round((2.0 * radius_px) / px_per_mm, 2) if px_per_mm else None
    rmse_mm = round(rmse_px / px_per_mm, 2) if px_per_mm else None

    return RimArcFittingResult(
        center_x=round(float(cx), 2),
        center_y=round(float(cy), 2),
        radius_px=round(float(radius_px), 2),
        radius_mm=radius_mm,
        diameter_mm=diameter_mm,
        arc_coverage_deg=round(arc_coverage_deg, 1),
        rmse_residual_px=round(rmse_px, 2),
        rmse_residual_mm=rmse_mm,
        num_points=n,
        quality_warning=warning
    )

def generate_default_profile_points(rim_diameter_mm: float = 160.0, height_mm: float = 110.0) -> List[List[float]]:
    """
    Generates standard baseline profile control points [[radius_mm, height_mm], ...]
    from base (h=0) to rim (h=height_mm).
    """
    rim_r = rim_diameter_mm / 2.0
    base_r = max(20.0, rim_r * 0.45)
    belly_r = rim_r * 1.05

    # Curved bowl/jar profile
    pts = [
        [round(base_r, 1), 0.0],
        [round(base_r * 1.15, 1), round(height_mm * 0.15, 1)],
        [round(belly_r, 1), round(height_mm * 0.50, 1)],
        [round(rim_r * 0.95, 1), round(height_mm * 0.85, 1)],
        [round(rim_r, 1), round(height_mm, 1)]
    ]
    return pts

def generate_svg_profile(profile: ReconstructionProfile, project_name: str = "SHERD-FORGE") -> str:
    """
    Generates an archaeological-standard vector SVG technical drawing:
    Centerline, inner wall cavity (left), outer profile (right), dimensions, scale bar, and disclaimer.
    """
    points = profile.points
    if not points or len(points) < 2:
        points = generate_default_profile_points(profile.rim_diameter_mm, profile.height_mm)

    h_mm = max(10.0, profile.height_mm)
    rim_r_mm = max(10.0, profile.rim_diameter_mm / 2.0)
    wall_t = max(2.0, profile.wall_thickness_mm)

    # Drawing dimensions in SVG px
    svg_w = 640
    svg_h = 480
    margin = 60

    # Scale factor (mm to SVG pixels)
    scale_y = (svg_h - 2 * margin) / max(60.0, h_mm)
    scale_x = (svg_w / 2.0 - margin) / max(40.0, rim_r_mm * 1.3)
    scale = min(scale_x, scale_y)

    cx = svg_w / 2.0
    base_y = svg_h - margin

    # Right side: Outer profile points
    # (r, h) -> (cx + r * scale, base_y - h * scale)
    outer_path_d = []
    inner_path_d = []

    for idx, (r, h) in enumerate(points):
        x = cx + r * scale
        y = base_y - h * scale
        cmd = "M" if idx == 0 else "L"
        outer_path_d.append(f"{cmd} {x:.1f},{y:.1f}")

    # Left side: Interior profile cavity (offset by wall thickness)
    for idx, (r, h) in enumerate(points):
        r_inner = max(0.0, r - wall_t)
        x = cx - r_inner * scale
        y = base_y - h * scale
        cmd = "M" if idx == 0 else "L"
        inner_path_d.append(f"{cmd} {x:.1f},{y:.1f}")

    outer_d_str = " ".join(outer_path_d)
    inner_d_str = " ".join(inner_path_d)

    # Hatched section polygon connecting left interior and right exterior at base and rim
    # Rim top line
    rim_r_outer = points[-1][0]
    rim_h = points[-1][1]
    rim_x_outer = cx + rim_r_outer * scale
    rim_x_inner = cx - max(0.0, rim_r_outer - wall_t) * scale
    rim_y = base_y - rim_h * scale

    base_r_outer = points[0][0]
    base_h = points[0][1]
    base_x_outer = cx + base_r_outer * scale
    base_x_inner = cx - max(0.0, base_r_outer - wall_t) * scale
    base_y_svg = base_y - base_h * scale

    # Scale bar in mm (e.g. 50 mm)
    bar_mm = 50.0
    bar_px = bar_mm * scale
    bar_x = margin
    bar_y = svg_h - 20

    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {svg_w} {svg_h}" width="{svg_w}" height="{svg_h}" style="background-color: #FAF8F5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <defs>
    <pattern id="hatch" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="6" stroke="#C85A32" stroke-width="1.2" opacity="0.35" />
    </pattern>
  </defs>

  <!-- Title & Metadata -->
  <text x="{margin}" y="32" font-size="14" font-weight="bold" fill="#1F2421">SHERD-FORGE // RECONSTRUCTION HYPOTHESIS</text>
  <text x="{margin}" y="48" font-size="11" fill="#757C76">Project: {project_name} | Source: {profile.source} | Wall: {wall_t:.1f}mm</text>
  <rect x="{svg_w - margin - 150}" y="20" width="150" height="22" rx="3" fill="#FDF6F0" stroke="#C85A32" stroke-width="1"/>
  <text x="{svg_w - margin - 75}" y="35" font-size="9" font-weight="600" fill="#C85A32" text-anchor="middle">RESEARCH HYPOTHESIS ONLY</text>

  <!-- Center Axis (Dashed) -->
  <line x1="{cx}" y1="{margin - 10}" x2="{cx}" y2="{base_y + 15}" stroke="#757C76" stroke-width="1.2" stroke-dasharray="6,4" />
  <text x="{cx}" y="{margin - 18}" font-size="10" fill="#757C76" text-anchor="middle">CENTERLINE</text>

  <!-- Outer Profile (Right) -->
  <path d="{outer_d_str}" fill="none" stroke="#1F2421" stroke-width="2.5" stroke-linecap="round" />

  <!-- Inner Profile Cavity (Left) -->
  <path d="{inner_d_str}" fill="none" stroke="#C85A32" stroke-width="2" stroke-linecap="round" />

  <!-- Base Line -->
  <line x1="{base_x_inner}" y1="{base_y_svg}" x2="{base_x_outer}" y2="{base_y_svg}" stroke="#1F2421" stroke-width="2" />
  <!-- Rim Top Line -->
  <line x1="{rim_x_inner}" y1="{rim_y}" x2="{rim_x_outer}" y2="{rim_y}" stroke="#1F2421" stroke-width="2" />

  <!-- Dimension: Rim Diameter -->
  <line x1="{cx - rim_r_outer * scale}" y1="{rim_y - 14}" x2="{rim_x_outer}" y2="{rim_y - 14}" stroke="#757C76" stroke-width="1" />
  <line x1="{cx - rim_r_outer * scale}" y1="{rim_y - 19}" x2="{cx - rim_r_outer * scale}" y2="{rim_y - 9}" stroke="#757C76" stroke-width="1" />
  <line x1="{rim_x_outer}" y1="{rim_y - 19}" x2="{rim_x_outer}" y2="{rim_y - 9}" stroke="#757C76" stroke-width="1" />
  <text x="{cx}" y="{rim_y - 18}" font-size="11" font-weight="600" fill="#1F2421" text-anchor="middle">Ø {profile.rim_diameter_mm:.1f} mm</text>

  <!-- Dimension: Height -->
  <line x1="{cx + rim_r_outer * scale + 24}" y1="{rim_y}" x2="{cx + rim_r_outer * scale + 24}" y2="{base_y_svg}" stroke="#757C76" stroke-width="1" />
  <line x1="{cx + rim_r_outer * scale + 19}" y1="{rim_y}" x2="{cx + rim_r_outer * scale + 29}" y2="{rim_y}" stroke="#757C76" stroke-width="1" />
  <line x1="{cx + rim_r_outer * scale + 19}" y1="{base_y_svg}" x2="{cx + rim_r_outer * scale + 29}" y2="{base_y_svg}" stroke="#757C76" stroke-width="1" />
  <text x="{cx + rim_r_outer * scale + 32}" y="{(rim_y + base_y_svg) / 2 + 4}" font-size="11" font-weight="600" fill="#1F2421" text-anchor="start">H: {h_mm:.1f} mm</text>

  <!-- Scale Bar -->
  <line x1="{bar_x}" y1="{bar_y}" x2="{bar_x + bar_px}" y2="{bar_y}" stroke="#1F2421" stroke-width="3" />
  <line x1="{bar_x}" y1="{bar_y - 4}" x2="{bar_x}" y2="{bar_y + 4}" stroke="#1F2421" stroke-width="1.5" />
  <line x1="{bar_x + bar_px}" y1="{bar_y - 4}" x2="{bar_x + bar_px}" y2="{bar_y + 4}" stroke="#1F2421" stroke-width="1.5" />
  <text x="{bar_x + bar_px / 2}" y="{bar_y - 6}" font-size="10" font-weight="600" fill="#1F2421" text-anchor="middle">50 mm</text>

  <text x="{svg_w - margin}" y="{svg_h - 15}" font-size="9" fill="#757C76" text-anchor="end">Generated by SHERD-FORGE</text>
</svg>"""
    return svg
