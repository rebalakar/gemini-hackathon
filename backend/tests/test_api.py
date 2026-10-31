import io
import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.synthetic_data import create_synthetic_scene_image

client = TestClient(app)

def test_api_health():
    res = client.get("/api/health")
    assert res.status_code == 200
    data = res.json()
    assert data["app"] == "SHERD-FORGE"
    assert "gemini_available" in data

def test_api_photo_and_camera_upload(tmp_path):
    # 1. Create a new empty project
    proj_res = client.post("/api/projects", data={"name": "Field Excavation Upload Test", "description": "Testing upload and camera"})
    assert proj_res.status_code == 200
    proj_id = proj_res.json()["id"]

    # 2. Generate a valid test image on disk
    img_path = tmp_path / "upload_scene.png"
    create_synthetic_scene_image(img_path)
    img_bytes = img_path.read_bytes()

    # 3. Upload overhead photo via /upload-photo
    up_res = client.post(
        f"/api/projects/{proj_id}/upload-photo",
        files={"file": ("field_table.png", io.BytesIO(img_bytes), "image/png")}
    )
    assert up_res.status_code == 200
    up_data = up_res.json()
    assert up_data["primary_photo_url"].startswith("/uploads/")
    assert up_data["dimensions"] == [1600, 1200]
    assert len(up_data["fragments"]) >= 7
    assert len(up_data["groups"]) >= 2

    # 4. Upload camera blob without file extension in filename (relying on content_type)
    cam_res = client.post(
        f"/api/projects/{proj_id}/upload-photo",
        files={"file": ("blob", io.BytesIO(img_bytes), "image/png")}
    )
    assert cam_res.status_code == 200
    cam_data = cam_res.json()
    assert cam_data["primary_photo_url"].startswith("/uploads/")
    assert len(cam_data["fragments"]) >= 7

    # 5. Upload additional fragment photo (e.g. fracture view)
    add_res = client.post(
        f"/api/projects/{proj_id}/additional-photos",
        data={"fragment_id": "S1", "role": "fracture", "notes": "Fracture profile"},
        files={"file": ("camera_fracture.png", io.BytesIO(img_bytes), "image/png")}
    )
    assert add_res.status_code == 200
    add_data = add_res.json()
    assert add_data["role"] == "fracture"
    assert add_data["fragment_id"] == "S1"
    assert add_data["file_url"].startswith("/uploads/")

def test_api_full_synthetic_workflow():
    # 1. Create turnkey synthetic demo project
    demo_res = client.post("/api/projects/create-demo")
    assert demo_res.status_code == 200
    proj_id = demo_res.json()["project_id"]
    assert proj_id.startswith("demo_")

    # 2. Fetch full project state
    state_res = client.get(f"/api/projects/{proj_id}")
    assert state_res.status_code == 200
    state = state_res.json()
    assert state["project"]["id"] == proj_id
    assert len(state["fragments"]) >= 7
    assert len(state["groups"]) >= 2
    assert len(state["joins"]) >= 1

    # 3. Test rim arc circle fitting
    # Points along circle radius 180px
    arc_points = [[300.0, 300.0], [350.0, 320.0], [400.0, 350.0], [440.0, 390.0]]
    rim_res = client.post(f"/api/projects/{proj_id}/rim-arc-fit", json={"points": arc_points})
    assert rim_res.status_code == 200
    rim_data = rim_res.json()
    assert "radius_px" in rim_data
    assert "arc_coverage_deg" in rim_data

    # 4. Fetch SVG profile drawing
    svg_res = client.get(f"/api/projects/{proj_id}/reconstruction/svg")
    assert svg_res.status_code == 200
    assert svg_res.headers["content-type"] == "image/svg+xml"
    assert "RECONSTRUCTION HYPOTHESIS" in svg_res.text

    # 5. Fetch typology ranking
    typo_res = client.get(f"/api/projects/{proj_id}/typology")
    assert typo_res.status_code == 200
    typo_data = typo_res.json()
    assert len(typo_data["candidates"]) > 0

    # 6. Approve project with reviewer snapshot
    appr_res = client.post(f"/api/projects/{proj_id}/approve", json={
        "reviewer_name": "Dr. E. Schliemann",
        "notes": "Verified synthetic pottery fragments against demonstration catalogue."
    })
    assert appr_res.status_code == 200
    assert appr_res.json()["status"] == "approved"

    # 7. Check JSON and CSV exports
    json_res = client.get(f"/api/projects/{proj_id}/export/json")
    assert json_res.status_code == 200
    assert json_res.json()["metadata"]["application"] == "SHERD-FORGE"

    csv_res = client.get(f"/api/projects/{proj_id}/export/csv")
    assert csv_res.status_code == 200
    assert "fragment_id,project_id" in csv_res.text
