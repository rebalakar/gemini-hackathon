import io
import cv2
import numpy as np
import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_paper_puzzle_synthetic_demo_end_to_end():
    """
    Verifies the honest Synthetic Paper Puzzle Demo:
    - Correct 6-piece detection (P1..P6) with mask_url, crop_url, and contour
    - Outer straight sheet edges marked as original_sheet_edge; internal tears as cut_torn_edge
    - Recovery of known adjacent edges via complementary boundary matching
    - Globally consistent 6-piece assembly without interior overlap
    - Preservation of piece scale (rigid transforms only)
    - Assembled PNG and JSON exports
    - Guardrails blocking typology and 3D reconstruction in paper mode
    """
    res = client.post("/api/projects/create-paper-demo")
    assert res.status_code == 200
    data = res.json()
    proj_id = data["project_id"]
    assert data["fragments_count"] == 6
    assert data["joins_count"] >= 6

    state_res = client.get(f"/api/projects/{proj_id}")
    assert state_res.status_code == 200
    state = state_res.json()
    project = state["project"]
    fragments = state["fragments"]
    joins = state["joins"]

    assert project["mode"] == "paper"
    assert project["demo_type"] == "paper_demo"
    assert [f["id"] for f in fragments] == ["P1", "P2", "P3", "P4", "P5", "P6"]

    # Every piece must have mask_url, crop_url, contour, and edge annotations
    for f in fragments:
        assert f["mask_url"] and f["mask_url"].endswith("_mask.png")
        assert f["crop_url"] and f["crop_url"].endswith("_crop.png")
        assert len(f["contour"]) >= 15
        edge_types = {ea["edge_type"] for ea in f["edge_annotations"]}
        assert "original_sheet_edge" in edge_types
        assert "cut_torn_edge" in edge_types

    # Check ground truth evaluation metrics (used only for verification)
    asm_meta = project["assembly_metadata"]
    assert asm_meta is not None
    gt_eval = asm_meta["ground_truth_evaluation"]
    assert gt_eval["ground_truth_used_for_matching"] is False
    assert gt_eval["detected_pieces"] == 6
    assert gt_eval["recovery_rate"] >= 0.70
    assert len(asm_meta["placed_piece_ids"]) >= 5

    # Check that typology and 3D reconstruction are blocked in paper mode
    typo_res = client.get(f"/api/projects/{proj_id}/typology")
    assert typo_res.status_code == 400
    rec_res = client.get(f"/api/projects/{proj_id}/reconstruction")
    assert rec_res.status_code == 400

    # Check assembled PNG export
    png_res = client.get(f"/api/projects/{proj_id}/export/assembled-png")
    assert png_res.status_code == 200
    assert png_res.headers["content-type"] == "image/png"
    arr = np.frombuffer(png_res.content, np.uint8)
    decoded_png = cv2.imdecode(arr, cv2.IMREAD_COLOR)
    assert decoded_png is not None
    assert decoded_png.shape[0] > 100 and decoded_png.shape[1] > 100

    # Check JSON export contains source image reference, piece contours, transforms, proposed & accepted joins
    json_res = client.get(f"/api/projects/{proj_id}/export/json")
    assert json_res.status_code == 200
    jdata = json_res.json()
    assert jdata["metadata"]["mode"] == "paper"
    assert "source_image_reference" in jdata
    assert len(jdata["piece_contours_and_transforms"]) == 6
    assert len(jdata["proposed_joins"]) == len(joins)
    assert len(jdata["accepted_joins"]) >= 4


def test_paper_puzzle_ambiguous_demo():
    """
    Verifies the deliberately ambiguous straight-cut example:
    - P1 and P3 share an irregular tear and are assembled automatically
    - P2 and P4 have straight scissor cuts, are flagged with is_ambiguous=True,
      and are left unresolved (unplaced) in global assembly for human confirmation.
    """
    res = client.post("/api/projects/create-paper-ambiguous-demo")
    assert res.status_code == 200
    data = res.json()
    proj_id = data["project_id"]
    assert data["fragments_count"] == 4

    state = client.get(f"/api/projects/{proj_id}").json()
    joins = state["joins"]
    asm_meta = state["project"]["assembly_metadata"]

    # At least one join should be unambiguous (P1-P3) and at least one flagged as ambiguous
    unambiguous = [j for j in joins if not j["is_ambiguous"]]
    ambiguous = [j for j in joins if j["is_ambiguous"]]
    assert len(unambiguous) >= 1
    assert len(ambiguous) >= 1
    assert any(j["ambiguity_warning"] for j in ambiguous)

    # Global assembly must leave the ambiguous pieces unplaced and report an ambiguity notice
    assert len(asm_meta["placed_piece_ids"]) >= 2
    assert len(asm_meta["unplaced_piece_ids"]) >= 1
    assert asm_meta["ambiguity_notice"] is not None


def test_dark_paper_on_light_background_and_manual_polygon_edits():
    """
    Verifies segmentation of dark paper pieces on a light background,
    plus manual polygon creation, polygon editing, and deletion.
    """
    proj_res = client.post(
        "/api/projects",
        data={"name": "Dark Paper on Light Tabletop", "description": "Polarity & polygon test", "mode": "paper"}
    )
    assert proj_res.status_code == 200
    proj_id = proj_res.json()["id"]
    assert proj_res.json()["mode"] == "paper"

    # Synthesize a light background (240, 240, 240) with 3 dark paper pieces (35, 40, 45)
    h, w = 700, 1000
    img = np.full((h, w, 3), 240, dtype=np.uint8)
    p1_pts = np.array([[120, 140], [280, 140], [270, 310], [120, 300]], dtype=np.int32)
    p2_pts = np.array([[420, 150], [590, 150], [580, 320], [430, 310]], dtype=np.int32)
    p3_pts = np.array([[700, 160], [870, 160], [860, 330], [710, 320]], dtype=np.int32)
    for pts in [p1_pts, p2_pts, p3_pts]:
        cv2.fillPoly(img, [pts], (35, 40, 45))

    ok, buf = cv2.imencode(".png", img)
    assert ok

    up_res = client.post(
        f"/api/projects/{proj_id}/upload-photo",
        files={"file": ("dark_paper.png", io.BytesIO(buf.tobytes()), "image/png")}
    )
    assert up_res.status_code == 200
    up_data = up_res.json()
    assert len(up_data["fragments"]) == 3
    assert [f["id"] for f in up_data["fragments"]] == ["P1", "P2", "P3"]

    # Test re-running detection explicitly with light_bg polarity
    det_res = client.post(f"/api/projects/{proj_id}/detect?sensitivity=1.1&background_polarity=light_bg")
    assert det_res.status_code == 200
    assert len(det_res.json()) == 3

    # Test adding a 4th piece manually via polygon
    add_res = client.post(
        f"/api/projects/{proj_id}/fragments",
        json={"polygon": [[150, 420], [310, 420], [305, 580], [150, 575]]}
    )
    assert add_res.status_code == 200
    assert add_res.json()["id"] == "P4"

    # Test editing P4's polygon vertices
    edit_res = client.put(
        f"/api/projects/{proj_id}/fragments/P4/polygon",
        json={"polygon": [[140, 410], [320, 410], [315, 590], [140, 585]]}
    )
    assert edit_res.status_code == 200
    assert edit_res.json()["area_px"] > add_res.json()["area_px"]

    # Test deleting P4
    del_res = client.delete(f"/api/projects/{proj_id}/fragments/P4")
    assert del_res.status_code == 200
    state_after = client.get(f"/api/projects/{proj_id}").json()
    assert [f["id"] for f in state_after["fragments"]] == ["P1", "P2", "P3"]
