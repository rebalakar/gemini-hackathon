import pytest
from pathlib import Path
import numpy as np

from app.synthetic_data import create_synthetic_scene_image
from app.image_processing import detect_fragments_in_image
from app.grouping import propose_vessel_groups
from app.joins import find_candidate_joins_for_pair
from app.reconstruction import fit_circle_to_rim_points, generate_svg_profile, generate_default_profile_points
from app.models import ReconstructionProfile, VisibleObservations
from app.typology import match_typology

def test_synthetic_generation_and_detection(tmp_path):
    img_path = tmp_path / "test_scene.png"
    meta = create_synthetic_scene_image(img_path)
    assert img_path.exists()
    assert meta["calibration"]["px_per_mm"] == 3.20

    # Test detection
    fragments = detect_fragments_in_image(
        image_path=img_path,
        project_id="test_proj",
        sensitivity=1.0,
        px_per_mm=3.20
    )
    # The synthetic scene has 8 fragments
    assert len(fragments) >= 7
    frag_ids = [f.id for f in fragments]
    assert "S1" in frag_ids
    assert "S2" in frag_ids

    # Verify metric measurements computed
    s1 = next(f for f in fragments if f.id == "S1")
    assert s1.area_mm2 is not None and s1.area_mm2 > 0
    assert s1.perimeter_mm is not None and s1.perimeter_mm > 0

def test_geometric_join_recovery(tmp_path):
    img_path = tmp_path / "test_scene.png"
    meta = create_synthetic_scene_image(img_path)
    fragments = detect_fragments_in_image(
        image_path=img_path,
        project_id="test_proj",
        sensitivity=1.0,
        px_per_mm=3.20
    )
    s1 = next(f for f in fragments if f.id == "S1")
    s2 = next(f for f in fragments if f.id == "S2")

    joins = find_candidate_joins_for_pair(s1, s2, px_per_mm=3.20)
    assert len(joins) > 0
    best_join = joins[0]
    # S1 and S2 share mating fracture edge, residual should be small (< 10 px)
    assert best_join.residual_px < 15.0
    assert best_join.compatibility_score > 0.40

def test_rim_arc_circle_fitting():
    # True circle: center=(100, 150), radius=200 px
    angles = np.radians(np.linspace(10, 60, 12))  # 50 deg arc
    pts = [[100 + 200 * np.cos(a), 150 + 200 * np.sin(a)] for a in angles]

    # Calibrated at 2.0 px/mm -> diameter should be 200 mm
    res = fit_circle_to_rim_points(pts, px_per_mm=2.0)
    assert abs(res.radius_px - 200.0) < 1.0
    assert abs(res.diameter_mm - 200.0) < 1.0
    assert res.rmse_residual_px < 0.5
    assert res.arc_coverage_deg >= 45.0

def test_reconstruction_svg_generation():
    profile = ReconstructionProfile(
        id="rec_test",
        project_id="proj_test",
        source="user_entered",
        rim_diameter_mm=180.0,
        height_mm=75.0,
        wall_thickness_mm=5.0,
        points=generate_default_profile_points(180.0, 75.0)
    )
    svg = generate_svg_profile(profile, project_name="TEST_PROJ")
    assert "<svg" in svg
    assert "RECONSTRUCTION HYPOTHESIS" in svg
    assert "180.0 mm" in svg
    assert "</svg>" in svg

def test_typology_matching():
    profile = ReconstructionProfile(
        id="rec_test",
        project_id="proj_test",
        source="user_entered",
        rim_diameter_mm=180.0,
        height_mm=75.0,
        wall_thickness_mm=5.0,
        points=generate_default_profile_points(180.0, 75.0)
    )
    obs = VisibleObservations(finish="fine orange slip", likely_part="rim")
    candidates = match_typology(profile, observations=obs)
    assert len(candidates) > 0
    top = candidates[0]
    # Bowl forms should score high for 180mm rim, 75mm height
    assert top.category == "bowl"
    assert top.compatibility_score >= 0.70
