import os
import io
import csv
import json
import shutil
import uuid
from datetime import datetime
from pathlib import Path
from typing import List, Optional, Dict, Any

from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Query, Response
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse, PlainTextResponse

from .config import UPLOAD_DIR, DATABASE_PATH, GEMINI_MODEL
from .models import (
    Project, CalibrationData, Fragment, VesselGroup,
    JoinCandidate, ReconstructionProfile, AdditionalPhoto,
    ReviewSnapshot, EdgeAnnotation, VisibleObservations,
    FragmentPlacement
)
from .database import Database, init_db
from .image_processing import (
    detect_fragments_in_image,
    create_or_update_fragment_from_polygon
)
from .grouping import propose_vessel_groups, compute_pairwise_compatibility
from .joins import find_candidate_joins_for_pair
from .reconstruction import (
    fit_circle_to_rim_points,
    generate_default_profile_points,
    generate_svg_profile
)
from .typology import match_typology, ARCHAEOLOGICAL_REFERENCE_JSON_SCHEMA
from .gemini_adapter import gemini_adapter
from .synthetic_data import create_synthetic_scene_image

# Initialize DB on startup
init_db()

app = FastAPI(
    title="SHERD-FORGE API",
    description="Archaeological Pottery Fragment Reconstruction System",
    version="1.0.0"
)

# Enable CORS for local dev
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve uploaded / generated images
app.mount("/uploads", StaticFiles(directory=str(UPLOAD_DIR)), name="uploads")

@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "app": "SHERD-FORGE",
        "gemini_available": gemini_adapter.is_available(),
        "gemini_model": GEMINI_MODEL,
        "mode": "hybrid_ai" if gemini_adapter.is_available() else "deterministic_offline"
    }

@app.get("/api/projects")
def list_projects():
    return Database.get_all_projects()

@app.post("/api/projects")
def create_project(name: str = Form("New Archaeological Project"), description: str = Form("")):
    project_id = f"proj_{uuid.uuid4().hex[:8]}"
    now = datetime.utcnow().isoformat()
    project = Project(
        id=project_id,
        name=name,
        description=description,
        status="draft",
        created_at=now,
        updated_at=now,
        calibration=CalibrationData()
    )
    Database.save_project(project)
    # Initialize default reconstruction profile
    default_rec = ReconstructionProfile(
        id=f"rec_{project_id}",
        project_id=project_id,
        source="user_entered",
        rim_diameter_mm=160.0,
        height_mm=110.0,
        wall_thickness_mm=5.0,
        points=generate_default_profile_points(160.0, 110.0),
        notes="Initial baseline profile"
    )
    Database.save_reconstruction_profile(default_rec)
    return project

@app.get("/api/projects/{project_id}")
def get_project_state(project_id: str):
    p = Database.get_project(project_id)
    if not p:
        raise HTTPException(status_code=404, detail="Project not found")

    fragments = Database.get_fragments(project_id)
    groups = Database.get_vessel_groups(project_id)
    joins = Database.get_join_candidates(project_id)
    profile = Database.get_reconstruction_profile(project_id)
    photos = Database.get_photos(project_id)
    snapshots = Database.get_review_snapshots(project_id)

    return {
        "project": p,
        "fragments": fragments,
        "groups": groups,
        "joins": joins,
        "reconstruction_profile": profile,
        "photos": photos,
        "snapshots": snapshots
    }

@app.post("/api/projects/create-demo")
def create_synthetic_demo():
    """
    Creates a turnkey demonstration project with our synthetic scene (8 sherds, 2 vessels, known scale and joins).
    """
    proj_id = f"demo_{uuid.uuid4().hex[:6]}"
    now = datetime.utcnow().isoformat()
    img_filename = f"{proj_id}_synthetic_scene.png"
    img_path = UPLOAD_DIR / img_filename

    # Generate synthetic image
    meta = create_synthetic_scene_image(img_path)
    calib = CalibrationData(
        is_calibrated=True,
        px_per_mm=meta["calibration"]["px_per_mm"],
        point_a=meta["calibration"]["point_a"],
        point_b=meta["calibration"]["point_b"],
        distance_mm=meta["calibration"]["distance_mm"],
        notes="Synthetic calibration marker: 100mm = 320px (3.20 px/mm)"
    )

    project = Project(
        id=proj_id,
        name="Synthetic Demonstration (2 Vessels, 8 Sherds)",
        description="Deterministic synthetic scene for evaluating fragment detection, grouping, edge matching, 3D lathe modeling, and typology retrieval.",
        status="draft",
        created_at=now,
        updated_at=now,
        calibration=calib,
        primary_photo_url=f"/uploads/{img_filename}",
        primary_photo_dimensions=meta["dimensions"]
    )
    Database.save_project(project)

    # Run detection
    fragments = detect_fragments_in_image(
        image_path=img_path,
        project_id=proj_id,
        sensitivity=1.0,
        px_per_mm=calib.px_per_mm
    )
    for f in fragments:
        # Mark top arc of S1 & S3 as original vessel edge
        if f.id in ["S1", "S3", "S5"]:
            f.edge_annotations.append(EdgeAnnotation(
                id=f"ea_{f.id}_1",
                start_idx=0,
                end_idx=min(8, len(f.contour) - 1),
                edge_type="original_vessel_edge",
                label="Preserved Rim Lip"
            ))
            f.observations.likely_part = "rim"
        else:
            f.observations.likely_part = "body"

        if f.id in ["S1", "S2", "S3", "S4"]:
            f.observations.color_desc = "Terracotta red-orange"
            f.observations.finish = "Fine smoothed slip"
            f.observations.wall_thickness_mm = 5.0
        elif f.id in ["S5", "S6", "S7"]:
            f.observations.color_desc = "Buff yellowish-sand"
            f.observations.finish = "Coarse sand temper"
            f.observations.wall_thickness_mm = 7.0
        elif f.id == "S8":
            f.observations.color_desc = "Dark reduced gray"
            f.observations.finish = "Burnished coarse ware"
            f.observations.wall_thickness_mm = 6.0

        Database.save_fragment(f)

    # Initial grouping
    groups, updated_frags = propose_vessel_groups(proj_id, fragments, threshold=0.68)
    Database.save_vessel_groups(proj_id, groups)
    for f in updated_frags:
        Database.save_fragment(f)

    # Suggest joins within groups
    all_joins = []
    # Search joins within each group
    for g in groups:
        group_members = [f for f in updated_frags if f.id in g.fragment_ids]
        for i in range(len(group_members)):
            for j in range(i + 1, len(group_members)):
                cand_joins = find_candidate_joins_for_pair(
                    group_members[i],
                    group_members[j],
                    px_per_mm=calib.px_per_mm
                )
                all_joins.extend(cand_joins)

    Database.save_join_candidates(proj_id, all_joins)

    # Default reconstruction profile for Vessel 1 (Terracotta Bowl: 180mm rim, 70mm height)
    rec = ReconstructionProfile(
        id=f"rec_{proj_id}",
        project_id=proj_id,
        vessel_group_id=groups[0].id if groups else None,
        source="user_entered",
        rim_diameter_mm=180.0,
        height_mm=70.0,
        wall_thickness_mm=5.0,
        points=generate_default_profile_points(180.0, 70.0),
        notes="Synthetic Vessel A demonstration profile"
    )
    Database.save_reconstruction_profile(rec)

    Database.log_provenance(
        project_id=proj_id,
        source="system",
        method="synthetic_generation",
        parameters={"fragments_count": len(fragments), "groups_count": len(groups)},
        summary="Generated synthetic demonstration project with 8 sherds across 2 vessels."
    )

    return {"project_id": proj_id, "fragments_count": len(fragments), "groups_count": len(groups)}

@app.post("/api/projects/{project_id}/upload-photo")
async def upload_project_photo(project_id: str, file: UploadFile = File(...)):
    p = Database.get_project(project_id)
    if not p:
        raise HTTPException(status_code=404, detail="Project not found")

    ext = Path(file.filename).suffix.lower()
    if ext not in [".jpg", ".jpeg", ".png"]:
        raise HTTPException(status_code=400, detail="Only JPEG and PNG formats are supported.")

    filename = f"{project_id}_overhead_{uuid.uuid4().hex[:6]}{ext}"
    filepath = UPLOAD_DIR / filename

    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    import cv2
    img = cv2.imread(str(filepath))
    if img is None:
        raise HTTPException(status_code=400, detail="Corrupted image file")

    h, w = img.shape[:2]
    now = datetime.utcnow().isoformat()

    project = Project(
        id=p["id"],
        name=p["name"],
        description=p["description"],
        status="draft",
        created_at=p["created_at"],
        updated_at=now,
        calibration=CalibrationData(**p["calibration"]),
        primary_photo_url=f"/uploads/{filename}",
        primary_photo_dimensions=[w, h]
    )
    Database.save_project(project)
    Database.log_provenance(
        project_id=project_id,
        source="user_upload",
        method="image_upload",
        parameters={"filename": file.filename, "width": w, "height": h},
        summary=f"Uploaded primary overhead photograph ({w}x{h} px)."
    )

    return {"primary_photo_url": f"/uploads/{filename}", "dimensions": [w, h]}

@app.post("/api/projects/{project_id}/calibration")
def update_calibration(project_id: str, calib: CalibrationData):
    p = Database.get_project(project_id)
    if not p:
        raise HTTPException(status_code=404, detail="Project not found")

    if calib.point_a and calib.point_b and calib.distance_mm and calib.distance_mm > 0:
        dx = calib.point_b[0] - calib.point_a[0]
        dy = calib.point_b[1] - calib.point_a[1]
        dist_px = (dx**2 + dy**2)**0.5
        calib.px_per_mm = round(dist_px / calib.distance_mm, 4)
        calib.is_calibrated = True
    else:
        calib.px_per_mm = None
        calib.is_calibrated = False

    project = Project(
        id=p["id"],
        name=p["name"],
        description=p["description"],
        status="draft",
        created_at=p["created_at"],
        updated_at=datetime.utcnow().isoformat(),
        calibration=calib,
        primary_photo_url=p["primary_photo_url"],
        primary_photo_dimensions=p["primary_photo_dimensions"]
    )
    Database.save_project(project)

    # Update metric area/perimeter on existing fragments
    fragments = Database.get_fragments(project_id)
    for f in fragments:
        if calib.px_per_mm:
            f.area_mm2 = round(f.area_px / (calib.px_per_mm ** 2), 2)
            f.perimeter_mm = round(f.perimeter_px / calib.px_per_mm, 2)
        else:
            f.area_mm2 = None
            f.perimeter_mm = None
        Database.save_fragment(f)

    # Update metric measurements on joins
    joins = Database.get_join_candidates(project_id)
    for j in joins:
        if calib.px_per_mm:
            j.residual_mm = round(j.residual_px / calib.px_per_mm, 2)
            j.matched_length_mm = round(j.matched_length_px / calib.px_per_mm, 2)
        else:
            j.residual_mm = None
            j.matched_length_mm = None
        Database.save_join_candidates(project_id, [j])

    Database.log_provenance(
        project_id=project_id,
        source="user_calibration",
        method="two_point_ruler_scale",
        parameters=calib.dict(),
        summary=f"Scale set: {calib.px_per_mm} px/mm ({calib.distance_mm}mm distance)." if calib.px_per_mm else "Scale reset."
    )

    return calib

@app.post("/api/projects/{project_id}/detect")
def run_fragment_detection(project_id: str, sensitivity: float = Query(1.0, ge=0.2, le=3.0)):
    p = Database.get_project(project_id)
    if not p or not p["primary_photo_url"]:
        raise HTTPException(status_code=400, detail="Primary photo must be uploaded first.")

    photo_path = UPLOAD_DIR / Path(p["primary_photo_url"]).name
    if not photo_path.exists():
        raise HTTPException(status_code=404, detail="Photo file missing on disk")

    calib = CalibrationData(**p["calibration"])
    existing = Database.get_fragments(project_id)

    fragments = detect_fragments_in_image(
        image_path=photo_path,
        project_id=project_id,
        sensitivity=sensitivity,
        existing_fragments=existing,
        px_per_mm=calib.px_per_mm
    )

    for f in fragments:
        Database.save_fragment(f)

    Database.log_provenance(
        project_id=project_id,
        source="system",
        method="opencv_border_background_segmentation",
        parameters={"sensitivity": sensitivity, "count": len(fragments)},
        summary=f"Detected {len(fragments)} fragments with sensitivity {sensitivity}."
    )

    return fragments

@app.post("/api/projects/{project_id}/fragments")
def add_fragment_polygon(project_id: str, data: Dict[str, Any]):
    p = Database.get_project(project_id)
    if not p or not p["primary_photo_url"]:
        raise HTTPException(status_code=400, detail="Project photo required")

    photo_path = UPLOAD_DIR / Path(p["primary_photo_url"]).name
    polygon = data.get("polygon", [])
    if len(polygon) < 3:
        raise HTTPException(status_code=400, detail="At least 3 polygon points required.")

    calib = CalibrationData(**p["calibration"])
    existing = Database.get_fragments(project_id)
    next_id = f"S{len(existing) + 1}"

    frag = create_or_update_fragment_from_polygon(
        image_path=photo_path,
        project_id=project_id,
        frag_id=next_id,
        polygon_coords=polygon,
        px_per_mm=calib.px_per_mm
    )
    Database.save_fragment(frag)
    return frag

@app.put("/api/projects/{project_id}/fragments/{frag_id}")
def update_fragment(project_id: str, frag_id: str, frag_data: Fragment):
    p = Database.get_project(project_id)
    if not p:
        raise HTTPException(status_code=404, detail="Project not found")

    Database.save_fragment(frag_data)
    return frag_data

@app.delete("/api/projects/{project_id}/fragments/{frag_id}")
def delete_fragment(project_id: str, frag_id: str):
    Database.delete_fragment(project_id, frag_id)
    return {"status": "deleted", "fragment_id": frag_id}

@app.post("/api/projects/{project_id}/fragments/{frag_id}/ai-analyze")
def ai_analyze_fragment(project_id: str, frag_id: str):
    fragments = Database.get_fragments(project_id)
    frag = next((f for f in fragments if f.id == frag_id), None)
    if not frag:
        raise HTTPException(status_code=404, detail="Fragment not found")

    crop_path = UPLOAD_DIR / Path(frag.crop_url).name
    if not crop_path.exists():
        raise HTTPException(status_code=404, detail="Fragment crop file missing")

    with open(crop_path, "rb") as f:
        crop_bytes = f.read()

    res = gemini_adapter.analyze_fragment(crop_bytes)
    if res.get("available") and res.get("ai_generated"):
        # Update observations
        if res.get("color_desc"):
            frag.observations.color_desc = res["color_desc"]
        if res.get("finish"):
            frag.observations.finish = res["finish"]
        if res.get("decoration"):
            frag.observations.decoration = res["decoration"]
        if res.get("likely_part"):
            frag.observations.likely_part = res["likely_part"]
        if res.get("notes"):
            frag.observations.notes = (frag.observations.notes or "") + " " + res["notes"]
        frag.observations.ai_generated = True
        Database.save_fragment(frag)

    return res

@app.post("/api/projects/{project_id}/group")
def group_fragments(project_id: str, threshold: float = Query(0.68, ge=0.3, le=0.95)):
    fragments = Database.get_fragments(project_id)
    if not fragments:
        raise HTTPException(status_code=400, detail="No fragments detected to group.")

    existing_groups = Database.get_vessel_groups(project_id)
    groups, updated_frags = propose_vessel_groups(project_id, fragments, existing_groups, threshold)

    Database.save_vessel_groups(project_id, groups)
    for f in updated_frags:
        Database.save_fragment(f)

    Database.log_provenance(
        project_id=project_id,
        source="system",
        method="clique_clustering_color_texture",
        parameters={"threshold": threshold, "groups_count": len(groups)},
        summary=f"Proposed {len(groups)} vessel groups at threshold {threshold}."
    )

    return {"groups": groups, "fragments": updated_frags}

@app.put("/api/projects/{project_id}/groups")
def save_groups(project_id: str, groups: List[VesselGroup]):
    Database.save_vessel_groups(project_id, groups)
    # Update fragment group_id mappings
    fragments = Database.get_fragments(project_id)
    frag_to_g = {}
    for g in groups:
        for fid in g.fragment_ids:
            frag_to_g[fid] = g.id
    for f in fragments:
        f.group_id = frag_to_g.get(f.id, None)
        Database.save_fragment(f)
    return groups

@app.post("/api/projects/{project_id}/suggest-joins")
def suggest_joins(project_id: str, cross_groups: bool = False):
    fragments = Database.get_fragments(project_id)
    if len(fragments) < 2:
        return []

    p = Database.get_project(project_id)
    calib = CalibrationData(**p["calibration"])
    groups = Database.get_vessel_groups(project_id)

    # Decide candidate pairs: by default within same group or unassigned, or all if cross_groups
    candidate_pairs = []
    if cross_groups or not groups:
        for i in range(len(fragments)):
            for j in range(i + 1, len(fragments)):
                candidate_pairs.append((fragments[i], fragments[j]))
    else:
        for g in groups:
            members = [f for f in fragments if f.id in g.fragment_ids]
            for i in range(len(members)):
                for j in range(i + 1, len(members)):
                    candidate_pairs.append((members[i], members[j]))

    all_joins: List[JoinCandidate] = []
    for f1, f2 in candidate_pairs:
        cands = find_candidate_joins_for_pair(f1, f2, px_per_mm=calib.px_per_mm)
        all_joins.extend(cands)

    Database.save_join_candidates(project_id, all_joins)

    Database.log_provenance(
        project_id=project_id,
        source="system",
        method="resampled_contour_rigid_kabsch_alignment",
        parameters={"evaluated_pairs": len(candidate_pairs), "found_joins": len(all_joins)},
        summary=f"Found {len(all_joins)} potential join candidates."
    )

    return all_joins

@app.post("/api/projects/{project_id}/joins/{join_id}/status")
def update_join_status(project_id: str, join_id: str, status: str = Query(..., pattern="^(suggested|accepted|rejected)$")):
    Database.update_join_status(join_id, status)
    # If accepted, we can initialize placement of fragment_b relative to fragment_a
    if status == "accepted":
        joins = Database.get_join_candidates(project_id)
        target_join = next((j for j in joins if j.id == join_id), None)
        if target_join:
            fragments = Database.get_fragments(project_id)
            fa = next((f for f in fragments if f.id == target_join.fragment_a_id), None)
            fb = next((f for f in fragments if f.id == target_join.fragment_b_id), None)
            if fa and fb and not fb.placement.locked:
                # Apply rigid transform:
                # Rotates and translates fb to touch fa
                fb.placement.rotation_deg = (fb.placement.rotation_deg + target_join.transform_rotation_deg) % 360.0
                fb.placement.x = fa.placement.x + target_join.transform_tx
                fb.placement.y = fa.placement.y + target_join.transform_ty
                Database.save_fragment(fb)

    return {"status": status, "join_id": join_id}

@app.post("/api/projects/{project_id}/rim-arc-fit")
def calculate_rim_arc_fit(project_id: str, data: Dict[str, Any]):
    points = data.get("points", [])
    if len(points) < 3:
        raise HTTPException(status_code=400, detail="At least 3 points along the rim arc are required.")

    p = Database.get_project(project_id)
    calib = CalibrationData(**p["calibration"])
    fit_res = fit_circle_to_rim_points(points, px_per_mm=calib.px_per_mm)

    # If diameter is valid, update reconstruction profile
    if fit_res.diameter_mm:
        rec = Database.get_reconstruction_profile(project_id)
        if rec:
            rec.rim_diameter_mm = fit_res.diameter_mm
            rec.rim_fit_evidence = fit_res
            # Update points
            rec.points = generate_default_profile_points(rec.rim_diameter_mm, rec.height_mm)
            Database.save_reconstruction_profile(rec)

    return fit_res

@app.get("/api/projects/{project_id}/reconstruction")
def get_reconstruction(project_id: str):
    rec = Database.get_reconstruction_profile(project_id)
    if not rec:
        rec = ReconstructionProfile(
            id=f"rec_{project_id}",
            project_id=project_id,
            source="user_entered",
            rim_diameter_mm=160.0,
            height_mm=110.0,
            wall_thickness_mm=5.0,
            points=generate_default_profile_points(160.0, 110.0)
        )
        Database.save_reconstruction_profile(rec)
    return rec

@app.put("/api/projects/{project_id}/reconstruction")
def update_reconstruction(project_id: str, rec: ReconstructionProfile):
    Database.save_reconstruction_profile(rec)
    return rec

@app.get("/api/projects/{project_id}/reconstruction/svg")
def export_svg(project_id: str):
    p = Database.get_project(project_id)
    rec = Database.get_reconstruction_profile(project_id)
    if not rec:
        raise HTTPException(status_code=404, detail="Reconstruction profile not found")

    svg_content = generate_svg_profile(rec, project_name=p["name"] if p else "SHERD-FORGE")
    return Response(content=svg_content, media_type="image/svg+xml")

@app.get("/api/projects/{project_id}/typology")
def get_typology_matches(project_id: str):
    rec = Database.get_reconstruction_profile(project_id)
    if not rec:
        raise HTTPException(status_code=400, detail="Reconstruction profile required for typology search")

    fragments = Database.get_fragments(project_id)
    # Find sample rim or body observation
    obs = None
    for f in fragments:
        if f.observations.finish or f.observations.likely_part == "rim":
            obs = f.observations
            break

    candidates = match_typology(rec, observations=obs)

    # Optional Gemini synthesis
    gemini_explanation = None
    if gemini_adapter.is_available():
        vessel_summary = {
            "rim_diameter_mm": rec.rim_diameter_mm,
            "height_mm": rec.height_mm,
            "wall_thickness_mm": rec.wall_thickness_mm
        }
        cand_dicts = [c.dict() for c in candidates]
        gemini_explanation = gemini_adapter.explain_typology_match(vessel_summary, cand_dicts)

    return {
        "candidates": candidates,
        "schema": ARCHAEOLOGICAL_REFERENCE_JSON_SCHEMA,
        "ai_explanation": gemini_explanation
    }

@app.post("/api/projects/{project_id}/approve")
def approve_project(project_id: str, data: Dict[str, Any]):
    p = Database.get_project(project_id)
    if not p:
        raise HTTPException(status_code=404, detail="Project not found")

    reviewer_name = data.get("reviewer_name", "Anonymous Archaeologist").strip()
    notes = data.get("notes", "").strip()
    now = datetime.utcnow().isoformat()

    full_state = {
        "project": p,
        "fragments": [f.dict() for f in Database.get_fragments(project_id)],
        "groups": [g.dict() for g in Database.get_vessel_groups(project_id)],
        "joins": [j.dict() for j in Database.get_join_candidates(project_id)],
        "reconstruction": Database.get_reconstruction_profile(project_id).dict() if Database.get_reconstruction_profile(project_id) else None
    }

    snap_id = f"snap_{uuid.uuid4().hex[:8]}"
    snapshot = ReviewSnapshot(
        id=snap_id,
        project_id=project_id,
        approved_at=now,
        reviewer_name=reviewer_name,
        notes=notes,
        state_snapshot=full_state
    )
    Database.save_review_snapshot(snapshot)

    # Update project status to approved
    proj_obj = Project(
        id=p["id"],
        name=p["name"],
        description=p["description"],
        status="approved",
        created_at=p["created_at"],
        updated_at=now,
        approved_at=now,
        reviewer_name=reviewer_name,
        calibration=CalibrationData(**p["calibration"]),
        primary_photo_url=p["primary_photo_url"],
        primary_photo_dimensions=p["primary_photo_dimensions"]
    )
    Database.save_project(proj_obj)

    return {"status": "approved", "snapshot_id": snap_id, "approved_at": now}

@app.get("/api/projects/{project_id}/export/json")
def export_project_json(project_id: str):
    p = Database.get_project(project_id)
    if not p:
        raise HTTPException(status_code=404, detail="Project not found")

    fragments = Database.get_fragments(project_id)
    groups = Database.get_vessel_groups(project_id)
    joins = Database.get_join_candidates(project_id)
    profile = Database.get_reconstruction_profile(project_id)
    snapshots = Database.get_review_snapshots(project_id)

    export_data = {
        "metadata": {
            "application": "SHERD-FORGE",
            "version": "1.0.0",
            "exported_at": datetime.utcnow().isoformat(),
            "disclaimer": "RESEARCH HYPOTHESIS: Computed from overhead photograph; requires multi-view and fracture-surface verification."
        },
        "project": p,
        "fragments": [f.dict() for f in fragments],
        "vessel_groups": [g.dict() for g in groups],
        "joins": [j.dict() for j in joins],
        "reconstruction_profile": profile.dict() if profile else None,
        "review_snapshots": [s.dict() for s in snapshots]
    }
    return JSONResponse(
        content=export_data,
        headers={"Content-Disposition": f"attachment; filename=sherd_forge_{project_id}.json"}
    )

@app.get("/api/projects/{project_id}/export/csv")
def export_fragments_csv(project_id: str):
    fragments = Database.get_fragments(project_id)
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow([
        "fragment_id", "project_id", "group_id", "area_px", "area_mm2",
        "perimeter_px", "perimeter_mm", "likely_part", "color_desc",
        "finish", "wall_thickness_mm", "placement_x", "placement_y",
        "placement_rot_deg"
    ])
    for f in fragments:
        writer.writerow([
            f.id, f.project_id, f.group_id or "unassigned",
            f.area_px, f.area_mm2 or "", f.perimeter_px, f.perimeter_mm or "",
            f.observations.likely_part, f.observations.color_desc or "",
            f.observations.finish or "", f.observations.wall_thickness_mm or "",
            f.placement.x, f.placement.y, f.placement.rotation_deg
        ])
    return Response(
        content=output.getvalue(),
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename=sherd_forge_{project_id}_measurements.csv"}
    )

@app.post("/api/projects/{project_id}/additional-photos")
async def add_additional_photo(
    project_id: str,
    file: UploadFile = File(...),
    fragment_id: Optional[str] = Form(None),
    role: str = Form("outer_face"),
    notes: Optional[str] = Form(None)
):
    ext = Path(file.filename).suffix.lower()
    filename = f"{project_id}_{role}_{uuid.uuid4().hex[:6]}{ext}"
    filepath = UPLOAD_DIR / filename
    with open(filepath, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    photo = AdditionalPhoto(
        id=f"photo_{uuid.uuid4().hex[:6]}",
        project_id=project_id,
        fragment_id=fragment_id,
        role=role,
        filename=file.filename,
        file_url=f"/uploads/{filename}",
        notes=notes
    )
    Database.add_photo(photo)
    return photo

# Serve frontend build if present
frontend_dist = Path(__file__).resolve().parent.parent.parent / "frontend" / "dist"
if frontend_dist.exists():
    app.mount("/", StaticFiles(directory=str(frontend_dist), html=True), name="frontend")

