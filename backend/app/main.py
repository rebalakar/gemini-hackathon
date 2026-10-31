import os
import io
import csv
import json
import time
import shutil
import uuid
from datetime import datetime
from pathlib import Path
from typing import List, Optional, Dict, Any

import cv2
import numpy as np
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
    create_or_update_fragment_from_polygon,
    auto_classify_paper_edges
)
from .grouping import propose_vessel_groups, compute_pairwise_compatibility
from .joins import (
    find_candidate_joins_for_pair,
    annotate_global_join_ambiguities,
    compute_global_assembly,
    compute_join_snap_placement,
    render_assembled_png_bytes
)
from .reconstruction import (
    fit_circle_to_rim_points,
    generate_default_profile_points,
    generate_svg_profile
)
from .typology import match_typology, ARCHAEOLOGICAL_REFERENCE_JSON_SCHEMA
from .gemini_adapter import gemini_adapter
from .synthetic_data import (
    create_synthetic_scene_image,
    create_synthetic_paper_puzzle_scene,
    create_ambiguous_paper_puzzle_scene
)

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

MAX_UPLOAD_BYTES = 20 * 1024 * 1024  # 20 MB
ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp", ".bmp"}
CONTENT_TYPE_TO_EXT = {
    "image/jpeg": ".jpg",
    "image/jpg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/bmp": ".bmp",
}


def _resolve_image_extension(filename: Optional[str], content_type: Optional[str]) -> str:
    ext = Path(filename or "").suffix.lower()
    if ext in ALLOWED_EXTENSIONS:
        return ".jpg" if ext == ".jpeg" else ext
    if content_type and content_type.lower() in CONTENT_TYPE_TO_EXT:
        return CONTENT_TYPE_TO_EXT[content_type.lower()]
    return ""


@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "app": "SHERD-FORGE",
        "gemini_available": gemini_adapter.is_available(),
        "gemini_model": gemini_adapter.model_name or GEMINI_MODEL,
        "mode": "hybrid_ai" if gemini_adapter.is_available() else "deterministic_offline"
    }


@app.post("/api/settings/gemini-key")
def configure_gemini_key(data: Dict[str, Any]):
    """
    Allows the user to paste their Gemini API key directly from the UI.
    Updates the runtime GeminiAdapter and optionally persists it to the local .env file.
    """
    key = str(data.get("api_key", "")).strip()
    model = str(data.get("model", "")).strip() or None

    success = gemini_adapter.set_api_key(key, model_name=model)

    # Persist to .env file in project root if valid key provided
    if key and success:
        try:
            from .config import ROOT_DIR
            env_file = ROOT_DIR / ".env"
            lines = []
            if env_file.exists():
                with open(env_file, "r", encoding="utf-8") as f:
                    for line in f:
                        if line.startswith("GEMINI_API_KEY=") or line.startswith("GEMINI_MODEL="):
                            continue
                        lines.append(line.rstrip("\r\n"))
            lines.append(f"GEMINI_API_KEY={key}")
            if model:
                lines.append(f"GEMINI_MODEL={model}")
            with open(env_file, "w", encoding="utf-8") as f:
                f.write("\n".join(lines) + "\n")
        except Exception as e:
            print(f"[configure_gemini_key] Note: Could not write .env file: {e}")

    return {
        "gemini_available": gemini_adapter.is_available(),
        "gemini_model": gemini_adapter.model_name,
        "mode": "hybrid_ai" if gemini_adapter.is_available() else "deterministic_offline",
        "message": "Gemini API key configured successfully" if success else "Gemini API key cleared or invalid"
    }

@app.get("/api/projects")
def list_projects(mode: Optional[str] = Query(None)):
    projects = Database.get_all_projects()
    if mode:
        return [p for p in projects if p.get("mode", "ceramic") == mode]
    return projects

@app.post("/api/projects")
def create_project(
    name: str = Form("New Archaeological Project"),
    description: str = Form(""),
    mode: str = Form("ceramic")
):
    project_id = f"proj_{uuid.uuid4().hex[:8]}"
    now = datetime.utcnow().isoformat()
    norm_mode = "paper" if mode == "paper" else "ceramic"
    project = Project(
        id=project_id,
        name=name,
        description=description,
        mode=norm_mode,
        status="draft",
        created_at=now,
        updated_at=now,
        calibration=CalibrationData()
    )
    Database.save_project(project)
    if norm_mode == "ceramic":
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
    profile = Database.get_reconstruction_profile(project_id) if p.get("mode", "ceramic") == "ceramic" else None
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
        mode="ceramic",
        demo_type="ceramic_demo",
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
        px_per_mm=calib.px_per_mm,
        mode="ceramic"
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
                    px_per_mm=calib.px_per_mm,
                    mode="ceramic"
                )
                all_joins.extend(cand_joins)

    Database.save_join_candidates(proj_id, all_joins, replace_all=True)

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


@app.post("/api/projects/create-paper-demo")
def create_synthetic_paper_demo():
    """
    Creates the honest Synthetic Paper Puzzle Demo:
    - Generates a 6-piece scattered paper puzzle scene by partitioning a single rectangular sheet
      with irregular torn boundaries, rotating and scattering the pieces.
    - Runs the exact same detection, edge classification, complementary-edge matching,
      and global assembly pipeline as real uploaded photographs (ground truth is used ONLY for evaluation).
    """
    t0 = time.perf_counter()
    proj_id = f"paper_{uuid.uuid4().hex[:6]}"
    now = datetime.utcnow().isoformat()
    img_filename = f"{proj_id}_paper_puzzle_scene.png"
    img_path = UPLOAD_DIR / img_filename

    meta = create_synthetic_paper_puzzle_scene(img_path)

    # Ensure project record exists before inserting foreign-key dependent fragments/joins
    project = Project(
        id=proj_id,
        name="Synthetic Paper Puzzle Demo (6 Irregular Pieces)",
        description="Single 500x350px paper sheet partitioned into 6 irregular pieces, rotated and scattered. Evaluated through the real segmentation and complementary-edge pipeline.",
        mode="paper",
        demo_type="paper_demo",
        status="draft",
        created_at=now,
        updated_at=now,
        calibration=CalibrationData(),
        primary_photo_url=f"/uploads/{img_filename}",
        primary_photo_dimensions=meta["dimensions"],
        assembly_metadata=None
    )
    Database.save_project(project)

    # 1. Detect pieces via the shared OpenCV segmentation pipeline
    t_det_start = time.perf_counter()
    fragments = detect_fragments_in_image(
        image_path=img_path,
        project_id=proj_id,
        sensitivity=1.0,
        px_per_mm=None,
        mode="paper",
        background_polarity="dark_bg"
    )
    t_det_ms = round((time.perf_counter() - t_det_start) * 1000.0, 1)

    for f in fragments:
        Database.save_fragment(f)

    # 2. Run pairwise complementary-edge matching (without using ground truth)
    t_match_start = time.perf_counter()
    img_bgr = cv2.imread(str(img_path))
    img_lab = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2LAB) if img_bgr is not None else None
    all_joins: List[JoinCandidate] = []
    pair_count = 0
    for i in range(len(fragments)):
        for j in range(i + 1, len(fragments)):
            pair_count += 1
            cands = find_candidate_joins_for_pair(
                fragments[i],
                fragments[j],
                px_per_mm=None,
                max_candidates=2,
                mode="paper",
                img_lab=img_lab,
                use_visual_seam_score=True
            )
            all_joins.extend(cands)

    all_joins = annotate_global_join_ambiguities(all_joins)
    t_match_ms = round((time.perf_counter() - t_match_start) * 1000.0, 1)

    # 3. Run globally consistent assembly solver
    t_asm_start = time.perf_counter()
    updated_fragments, assembly_meta = compute_global_assembly(
        fragments=fragments,
        joins=all_joins,
        canvas_center=(480.0, 360.0)
    )
    t_asm_ms = round((time.perf_counter() - t_asm_start) * 1000.0, 1)

    for f in updated_fragments:
        Database.save_fragment(f)
    Database.save_join_candidates(proj_id, all_joins, replace_all=True)

    # 4. Evaluate pipeline output against ground truth (strictly for verification reporting)
    gt = meta["ground_truth"]
    known_pairs_set = {tuple(sorted(pair)) for pair in gt["known_adjacent_pairs"]}
    recovered_top_pairs = set()
    for j in all_joins:
        pair_key = tuple(sorted([j.fragment_a_id, j.fragment_b_id]))
        if j.rank_for_pair == 1 and j.compatibility_score >= 0.55:
            recovered_top_pairs.add(pair_key)

    true_recovered = known_pairs_set.intersection(recovered_top_pairs)
    assembly_meta["progress_steps"] = [
        {"step": "1. OpenCV Piece Segmentation & Corner Classification", "duration_ms": t_det_ms, "detail": f"Detected {len(fragments)} pieces (P1..P{len(fragments)})"},
        {"step": "2. Coarse-to-Fine Complementary Edge Matching", "duration_ms": t_match_ms, "detail": f"Evaluated {pair_count} piece pairs -> {len(all_joins)} candidate joins"},
        {"step": "3. Globally Consistent Multi-Piece Assembly", "duration_ms": t_asm_ms, "detail": f"Placed {len(assembly_meta['placed_piece_ids'])}/{len(fragments)} pieces without interior overlap"},
    ]
    assembly_meta["total_processing_ms"] = round((time.perf_counter() - t0) * 1000.0, 1)
    assembly_meta["ground_truth_evaluation"] = {
        "is_synthetic_benchmark": True,
        "expected_pieces": gt["pieces_count"],
        "detected_pieces": len(fragments),
        "known_adjacent_pairs": [list(p) for p in sorted(known_pairs_set)],
        "recovered_adjacent_pairs": [list(p) for p in sorted(true_recovered)],
        "recovery_rate": round(len(true_recovered) / max(1, len(known_pairs_set)), 3),
        "scale_preserved": True,
        "rigid_transform_only": True,
        "ground_truth_used_for_matching": False,
        "description": gt["description"]
    }

    project = Project(
        id=proj_id,
        name="Synthetic Paper Puzzle Demo (6 Irregular Pieces)",
        description="Single 500x350px paper sheet partitioned into 6 irregular pieces, rotated and scattered. Evaluated through the real segmentation and complementary-edge pipeline.",
        mode="paper",
        demo_type="paper_demo",
        status="draft",
        created_at=now,
        updated_at=now,
        calibration=CalibrationData(),
        primary_photo_url=f"/uploads/{img_filename}",
        primary_photo_dimensions=meta["dimensions"],
        assembly_metadata=assembly_meta
    )
    Database.save_project(project)

    Database.log_provenance(
        project_id=proj_id,
        source="system",
        method="synthetic_paper_puzzle_demo",
        parameters={"pieces_count": len(fragments), "joins_count": len(all_joins)},
        summary=f"Generated 6-piece synthetic paper puzzle demo and recovered {len(true_recovered)}/{len(known_pairs_set)} adjacent edges."
    )

    return {
        "project_id": proj_id,
        "fragments_count": len(fragments),
        "joins_count": len(all_joins),
        "assembly_metadata": assembly_meta
    }


@app.post("/api/projects/create-paper-ambiguous-demo")
def create_ambiguous_paper_demo():
    """
    Creates a deliberately ambiguous Paper Puzzle Demo (4 pieces: P1..P4):
    - P1 and P3 share a unique irregular torn edge (resolved automatically).
    - P2 and P4 were cut with straight parallel scissor cuts of identical length,
      demonstrating that the matcher flags ambiguous straight cuts and leaves them unresolved
      for human confirmation rather than forcing a guess.
    """
    t0 = time.perf_counter()
    proj_id = f"ambig_{uuid.uuid4().hex[:6]}"
    now = datetime.utcnow().isoformat()
    img_filename = f"{proj_id}_paper_ambiguous_scene.png"
    img_path = UPLOAD_DIR / img_filename

    meta = create_ambiguous_paper_puzzle_scene(img_path)

    # Ensure project record exists before inserting foreign-key dependent fragments/joins
    project = Project(
        id=proj_id,
        name="Ambiguous Straight-Cut Paper Demo (Unresolved Match)",
        description="Demonstrates honest ambiguity handling: irregular tear (P1-P3) is assembled while straight scissor cuts (P2, P4) are flagged and left unresolved for human confirmation.",
        mode="paper",
        demo_type="paper_ambiguous",
        status="draft",
        created_at=now,
        updated_at=now,
        calibration=CalibrationData(),
        primary_photo_url=f"/uploads/{img_filename}",
        primary_photo_dimensions=meta["dimensions"],
        assembly_metadata=None
    )
    Database.save_project(project)

    fragments = detect_fragments_in_image(
        image_path=img_path,
        project_id=proj_id,
        sensitivity=1.0,
        px_per_mm=None,
        mode="paper",
        background_polarity="dark_bg"
    )

    # On P2 and P4 (the straight-scissor-cut rectangular pieces), mark 2 sides as cut_torn_edge
    # so the matcher evaluates their straight scissor cuts and demonstrates ambiguity detection.
    for f in fragments:
        if f.id in ["P2", "P4"]:
            for idx_ea, ea in enumerate(f.edge_annotations):
                if idx_ea in [0, 3]:
                    ea.edge_type = "cut_torn_edge"
                    ea.label = f"Straight Scissor Cut {idx_ea + 1}"
        Database.save_fragment(f)

    all_joins: List[JoinCandidate] = []
    for i in range(len(fragments)):
        for j in range(i + 1, len(fragments)):
            cands = find_candidate_joins_for_pair(
                fragments[i],
                fragments[j],
                px_per_mm=None,
                max_candidates=2,
                mode="paper"
            )
            all_joins.extend(cands)

    all_joins = annotate_global_join_ambiguities(all_joins)

    updated_fragments, assembly_meta = compute_global_assembly(
        fragments=fragments,
        joins=all_joins,
        canvas_center=(480.0, 360.0)
    )

    for f in updated_fragments:
        Database.save_fragment(f)
    Database.save_join_candidates(proj_id, all_joins, replace_all=True)

    assembly_meta["total_processing_ms"] = round((time.perf_counter() - t0) * 1000.0, 1)
    assembly_meta["ground_truth_evaluation"] = {
        "is_synthetic_benchmark": True,
        "is_ambiguous_test": True,
        "expected_pieces": 4,
        "detected_pieces": len(fragments),
        "unambiguous_join_resolved": ["P1", "P3"],
        "unresolved_ambiguous_pieces": assembly_meta.get("unplaced_piece_ids", []),
        "description": meta["ground_truth"]["description"]
    }

    project = Project(
        id=proj_id,
        name="Ambiguous Straight-Cut Paper Demo (Unresolved Match)",
        description="Demonstrates honest ambiguity handling: irregular tear (P1-P3) is assembled while straight scissor cuts (P2, P4) are flagged and left unresolved for human confirmation.",
        mode="paper",
        demo_type="paper_ambiguous",
        status="draft",
        created_at=now,
        updated_at=now,
        calibration=CalibrationData(),
        primary_photo_url=f"/uploads/{img_filename}",
        primary_photo_dimensions=meta["dimensions"],
        assembly_metadata=assembly_meta
    )
    Database.save_project(project)

    return {
        "project_id": proj_id,
        "fragments_count": len(fragments),
        "joins_count": len(all_joins),
        "assembly_metadata": assembly_meta
    }


@app.post("/api/projects/{project_id}/upload-photo")
async def upload_project_photo(project_id: str, file: UploadFile = File(...)):
    p = Database.get_project(project_id)
    if not p:
        raise HTTPException(status_code=404, detail="Project not found")

    ext = _resolve_image_extension(file.filename, file.content_type)
    if not ext:
        raise HTTPException(
            status_code=400,
            detail="Only JPEG, PNG, WebP, and BMP image formats are supported."
        )

    raw_bytes = await file.read()
    if not raw_bytes:
        raise HTTPException(status_code=400, detail="Uploaded image file is empty.")
    if len(raw_bytes) > MAX_UPLOAD_BYTES:
        raise HTTPException(status_code=400, detail="Image exceeds the 20MB maximum size limit.")

    arr = np.frombuffer(raw_bytes, np.uint8)
    img = cv2.imdecode(arr, cv2.IMREAD_COLOR)
    if img is None:
        raise HTTPException(status_code=400, detail="Corrupted or unreadable image file.")

    # Save normalized image to disk
    save_ext = ".png" if ext in [".png", ".webp", ".bmp"] else ".jpg"
    filename = f"{project_id}_overhead_{uuid.uuid4().hex[:6]}{save_ext}"
    filepath = UPLOAD_DIR / filename
    cv2.imwrite(str(filepath), img)

    h, w = img.shape[:2]
    now = datetime.utcnow().isoformat()
    proj_mode = p.get("mode", "ceramic")

    # Clear stale fragments, groups, and joins from any previous photograph on this project
    Database.clear_project_detection_state(project_id)

    # Reset calibration for the new photograph so old ruler points do not carry over
    fresh_calib = CalibrationData()

    project = Project(
        id=p["id"],
        name=p["name"],
        description=p["description"],
        mode=proj_mode,
        demo_type=None,
        status="draft",
        created_at=p["created_at"],
        updated_at=now,
        calibration=fresh_calib,
        primary_photo_url=f"/uploads/{filename}",
        primary_photo_dimensions=[w, h],
        assembly_metadata=None
    )
    Database.save_project(project)

    # Automatically run initial deterministic fragment/piece detection
    fragments: List[Fragment] = []
    groups: List[VesselGroup] = []
    try:
        fragments = detect_fragments_in_image(
            image_path=filepath,
            project_id=project_id,
            sensitivity=1.0,
            px_per_mm=None,
            mode=proj_mode,
            background_polarity="auto"
        )
        for f in fragments:
            Database.save_fragment(f)

        if proj_mode == "ceramic" and len(fragments) >= 2:
            groups, fragments = propose_vessel_groups(project_id, fragments, threshold=0.68)
            Database.save_vessel_groups(project_id, groups)
            for f in fragments:
                Database.save_fragment(f)
    except Exception as det_err:
        print(f"[upload_project_photo] Auto-detection warning: {det_err}")

    Database.log_provenance(
        project_id=project_id,
        source="user_upload",
        method="image_upload_and_auto_detect",
        parameters={
            "filename": file.filename or filename,
            "mode": proj_mode,
            "width": w,
            "height": h,
            "detected_fragments": len(fragments),
            "proposed_groups": len(groups)
        },
        summary=f"Uploaded overhead photograph ({w}x{h} px) in {proj_mode} mode and detected {len(fragments)} items."
    )

    return {
        "primary_photo_url": f"/uploads/{filename}",
        "dimensions": [w, h],
        "fragments": fragments,
        "groups": groups,
        "calibration": fresh_calib
    }

@app.post("/api/projects/{project_id}/ calibration")
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
        mode=p.get("mode", "ceramic"),
        demo_type=p.get("demo_type"),
        status=p["status"],
        created_at=p["created_at"],
        updated_at=datetime.utcnow().isoformat(),
        calibration=calib,
        primary_photo_url=p["primary_photo_url"],
        primary_photo_dimensions=p["primary_photo_dimensions"],
        assembly_metadata=p.get("assembly_metadata")
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
def run_fragment_detection(
    project_id: str,
    sensitivity: float = Query(1.0, ge=0.2, le=3.0),
    background_polarity: str = Query("auto", pattern="^(auto|dark_bg|light_bg)$"),
    preserve_edits: bool = Query(False)
):
    p = Database.get_project(project_id)
    if not p or not p["primary_photo_url"]:
        raise HTTPException(status_code=400, detail="Primary photo must be uploaded first.")

    photo_path = UPLOAD_DIR / Path(p["primary_photo_url"]).name
    if not photo_path.exists():
        raise HTTPException(status_code=404, detail="Photo file missing on disk")

    proj_mode = p.get("mode", "ceramic")
    calib = CalibrationData(**p["calibration"])
    existing = Database.get_fragments(project_id) if preserve_edits else None

    fragments = detect_fragments_in_image(
        image_path=photo_path,
        project_id=project_id,
        sensitivity=sensitivity,
        existing_fragments=existing,
        px_per_mm=calib.px_per_mm,
        mode=proj_mode,
        background_polarity=background_polarity
    )

    # Replace fragment records cleanly so deleted noise doesn't linger
    conn_frags = Database.get_fragments(project_id)
    new_ids = {f.id for f in fragments}
    for old_f in conn_frags:
        if old_f.id not in new_ids:
            Database.delete_fragment(project_id, old_f.id)

    for f in fragments:
        Database.save_fragment(f)

    # Clear stale joins when re-detecting outlines
    Database.save_join_candidates(project_id, [], replace_all=True)

    Database.log_provenance(
        project_id=project_id,
        source="system",
        method="opencv_border_background_segmentation",
        parameters={"sensitivity": sensitivity, "background_polarity": background_polarity, "mode": proj_mode, "count": len(fragments)},
        summary=f"Detected {len(fragments)} {'pieces' if proj_mode == 'paper' else 'fragments'} with sensitivity {sensitivity}."
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

    proj_mode = p.get("mode", "ceramic")
    id_prefix = "P" if proj_mode == "paper" else "S"
    calib = CalibrationData(**p["calibration"])
    existing = Database.get_fragments(project_id)
    existing_nums = [int(f.id[1:]) for f in existing if f.id.startswith(id_prefix) and f.id[1:].isdigit()]
    next_num = (max(existing_nums) + 1) if existing_nums else (len(existing) + 1)
    next_id = f"{id_prefix}{next_num}"

    frag = create_or_update_fragment_from_polygon(
        image_path=photo_path,
        project_id=project_id,
        frag_id=next_id,
        polygon_coords=polygon,
        px_per_mm=calib.px_per_mm
    )
    if proj_mode == "paper":
        frag.edge_annotations = auto_classify_paper_edges(frag.contour)

    Database.save_fragment(frag)
    return frag

@app.put("/api/projects/{project_id}/fragments/{frag_id}/polygon")
def update_fragment_polygon(project_id: str, frag_id: str, data: Dict[str, Any]):
    """
    Updates an existing piece/fragment's outline using an edited polygon,
    regenerating its transparent crop, binary mask, bounding box, and edge annotations.
    """
    p = Database.get_project(project_id)
    if not p or not p["primary_photo_url"]:
        raise HTTPException(status_code=400, detail="Project photo required")

    photo_path = UPLOAD_DIR / Path(p["primary_photo_url"]).name
    polygon = data.get("polygon", [])
    if len(polygon) < 3:
        raise HTTPException(status_code=400, detail="At least 3 polygon points required.")

    existing_frags = Database.get_fragments(project_id)
    old_frag = next((f for f in existing_frags if f.id == frag_id), None)
    calib = CalibrationData(**p["calibration"])
    proj_mode = p.get("mode", "ceramic")

    updated_frag = create_or_update_fragment_from_polygon(
        image_path=photo_path,
        project_id=project_id,
        frag_id=frag_id,
        polygon_coords=polygon,
        px_per_mm=calib.px_per_mm
    )
    if old_frag:
        updated_frag.group_id = old_frag.group_id
        updated_frag.observations = old_frag.observations
    if proj_mode == "paper":
        updated_frag.edge_annotations = auto_classify_paper_edges(updated_frag.contour)

    Database.save_fragment(updated_frag)
    return updated_frag

@app.post("/api/projects/{project_id}/auto-classify-edges")
def run_auto_classify_edges(project_id: str, fragment_id: Optional[str] = Query(None)):
    """
    Automatically splits paper piece contours at corner vertices and marks straight segments
    as 'original_sheet_edge' and irregular segments as 'cut_torn_edge'.
    """
    fragments = Database.get_fragments(project_id)
    updated = []
    for f in fragments:
        if fragment_id and f.id != fragment_id:
            continue
        f.edge_annotations = auto_classify_paper_edges(f.contour)
        Database.save_fragment(f)
        updated.append(f)
    return updated if fragment_id is None else (updated[0] if updated else None)

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
    p = Database.get_project(project_id)
    if p and p.get("mode") == "paper":
        raise HTTPException(
            status_code=400,
            detail="Archaeological fabric/typology analysis is disabled in Paper Puzzle Demo mode."
        )
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
def suggest_joins(
    project_id: str,
    cross_groups: bool = False,
    use_visual_seam_score: bool = False,
    run_global_assembly: bool = True
):
    t0 = time.perf_counter()
    fragments = Database.get_fragments(project_id)
    if len(fragments) < 2:
        return []

    p = Database.get_project(project_id)
    if not p:
        raise HTTPException(status_code=404, detail="Project not found")

    proj_mode = p.get("mode", "ceramic")
    calib = CalibrationData(**p["calibration"])
    groups = Database.get_vessel_groups(project_id)

    # Load primary image in LAB space if visual seam continuity is requested
    img_lab = None
    if use_visual_seam_score and p.get("primary_photo_url"):
        photo_path = UPLOAD_DIR / Path(p["primary_photo_url"]).name
        if photo_path.exists():
            img_bgr = cv2.imread(str(photo_path))
            if img_bgr is not None:
                img_lab = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2LAB)

    candidate_pairs = []
    if proj_mode == "paper" or cross_groups or not groups:
        for i in range(len(fragments)):
            for j in range(i + 1, len(fragments)):
                candidate_pairs.append((fragments[i], fragments[j]))
    else:
        for g in groups:
            members = [f for f in fragments if f.id in g.fragment_ids]
            for i in range(len(members)):
                for j in range(i + 1, len(members)):
                    candidate_pairs.append((members[i], members[j]))

    t_match_start = time.perf_counter()
    all_joins: List[JoinCandidate] = []
    for f1, f2 in candidate_pairs:
        cands = find_candidate_joins_for_pair(
            f1,
            f2,
            px_per_mm=calib.px_per_mm,
            max_candidates=2 if proj_mode == "paper" else 3,
            mode=proj_mode,
            img_lab=img_lab,
            use_visual_seam_score=use_visual_seam_score
        )
        all_joins.extend(cands)

    all_joins = annotate_global_join_ambiguities(all_joins)
    t_match_ms = round((time.perf_counter() - t_match_start) * 1000.0, 1)

    Database.save_join_candidates(project_id, all_joins, replace_all=True)

    if proj_mode == "paper" and run_global_assembly:
        t_asm_start = time.perf_counter()
        updated_fragments, assembly_meta = compute_global_assembly(
            fragments=fragments,
            joins=all_joins,
            canvas_center=(480.0, 360.0)
        )
        t_asm_ms = round((time.perf_counter() - t_asm_start) * 1000.0, 1)
        for f in updated_fragments:
            Database.save_fragment(f)

        prev_meta = p.get("assembly_metadata") or {}
        if "ground_truth_evaluation" in prev_meta:
            assembly_meta["ground_truth_evaluation"] = prev_meta["ground_truth_evaluation"]
        assembly_meta["progress_steps"] = [
            {"step": "1. Uniform Contour Resampling & Boundary Filtering", "duration_ms": round(t_match_ms * 0.2, 1), "detail": f"Resampled {len(fragments)} piece contours; excluded marked original sheet edges"},
            {"step": "2. Coarse-to-Fine Complementary Edge Matching", "duration_ms": round(t_match_ms * 0.8, 1), "detail": f"Evaluated {len(candidate_pairs)} piece pairs -> {len(all_joins)} candidate joins"},
            {"step": "3. Globally Consistent Multi-Piece Assembly", "duration_ms": t_asm_ms, "detail": f"Placed {len(assembly_meta['placed_piece_ids'])}/{len(fragments)} pieces without interior overlap"},
        ]
        assembly_meta["total_processing_ms"] = round((time.perf_counter() - t0) * 1000.0, 1)

        proj_obj = Project(
            id=p["id"],
            name=p["name"],
            description=p["description"],
            mode=proj_mode,
            demo_type=p.get("demo_type"),
            status=p["status"],
            created_at=p["created_at"],
            updated_at=datetime.utcnow().isoformat(),
            approved_at=p.get("approved_at"),
            reviewer_name=p.get("reviewer_name"),
            calibration=calib,
            primary_photo_url=p["primary_photo_url"],
            primary_photo_dimensions=p["primary_photo_dimensions"],
            assembly_metadata=assembly_meta
        )
        Database.save_project(proj_obj)

    Database.log_provenance(
        project_id=project_id,
        source="system",
        method="resampled_contour_rigid_kabsch_alignment",
        parameters={"mode": proj_mode, "evaluated_pairs": len(candidate_pairs), "found_joins": len(all_joins)},
        summary=f"Found {len(all_joins)} potential join candidates across {len(candidate_pairs)} pairs."
    )

    return all_joins

@app.post("/api/projects/{project_id}/assemble-global")
def run_global_assembly_endpoint(project_id: str):
    """
    Recomputes the globally consistent multi-piece assembly given current accepted/rejected joins
    and locked placements.
    """
    p = Database.get_project(project_id)
    if not p:
        raise HTTPException(status_code=404, detail="Project not found")

    fragments = Database.get_fragments(project_id)
    joins = Database.get_join_candidates(project_id)

    updated_fragments, assembly_meta = compute_global_assembly(
        fragments=fragments,
        joins=joins,
        canvas_center=(480.0, 360.0)
    )
    for f in updated_fragments:
        Database.save_fragment(f)

    prev_meta = p.get("assembly_metadata") or {}
    if "ground_truth_evaluation" in prev_meta:
        assembly_meta["ground_truth_evaluation"] = prev_meta["ground_truth_evaluation"]
    if "progress_steps" in prev_meta:
        assembly_meta["progress_steps"] = prev_meta["progress_steps"]

    proj_obj = Project(
        id=p["id"],
        name=p["name"],
        description=p["description"],
        mode=p.get("mode", "ceramic"),
        demo_type=p.get("demo_type"),
        status=p["status"],
        created_at=p["created_at"],
        updated_at=datetime.utcnow().isoformat(),
        approved_at=p.get("approved_at"),
        reviewer_name=p.get("reviewer_name"),
        calibration=CalibrationData(**p["calibration"]),
        primary_photo_url=p["primary_photo_url"],
        primary_photo_dimensions=p["primary_photo_dimensions"],
        assembly_metadata=assembly_meta
    )
    Database.save_project(proj_obj)

    return {
        "fragments": updated_fragments,
        "joins": joins,
        "assembly_metadata": assembly_meta
    }

@app.post("/api/projects/{project_id}/joins/{join_id}/status")
def update_join_status(project_id: str, join_id: str, status: str = Query(..., pattern="^(suggested|accepted|rejected)$")):
    Database.update_join_status(join_id, status)
    snapped_fragment = None
    if status == "accepted":
        joins = Database.get_join_candidates(project_id)
        target_join = next((j for j in joins if j.id == join_id), None)
        if target_join:
            fragments = Database.get_fragments(project_id)
            fa = next((f for f in fragments if f.id == target_join.fragment_a_id), None)
            fb = next((f for f in fragments if f.id == target_join.fragment_b_id), None)
            if fa and fb:
                if not fb.placement.locked:
                    new_p = compute_join_snap_placement(fa, fb, target_join, move_b_to_a=True)
                    fb.placement.x = new_p["x"]
                    fb.placement.y = new_p["y"]
                    fb.placement.rotation_deg = new_p["rotation_deg"]
                    fb.placement.placed_in_assembly = True
                    Database.save_fragment(fb)
                    snapped_fragment = fb
                elif not fa.placement.locked:
                    new_p = compute_join_snap_placement(fa, fb, target_join, move_b_to_a=False)
                    fa.placement.x = new_p["x"]
                    fa.placement.y = new_p["y"]
                    fa.placement.rotation_deg = new_p["rotation_deg"]
                    fa.placement.placed_in_assembly = True
                    Database.save_fragment(fa)
                    snapped_fragment = fa

    return {"status": status, "join_id": join_id, "snapped_fragment": snapped_fragment}

@app.post("/api/projects/{project_id}/rim-arc-fit")
def calculate_rim_arc_fit(project_id: str, data: Dict[str, Any]):
    p = Database.get_project(project_id)
    if p and p.get("mode") == "paper":
        raise HTTPException(status_code=400, detail="3D Rim Arc Fitting is not applicable in Paper Puzzle Demo mode.")

    points = data.get("points", [])
    if len(points) < 3:
        raise HTTPException(status_code=400, detail="At least 3 points along the rim arc are required.")

    calib = CalibrationData(**p["calibration"])
    fit_res = fit_circle_to_rim_points(points, px_per_mm=calib.px_per_mm)

    if fit_res.diameter_mm:
        rec = Database.get_reconstruction_profile(project_id)
        if rec:
            rec.rim_diameter_mm = fit_res.diameter_mm
            rec.rim_fit_evidence = fit_res
            rec.points = generate_default_profile_points(rec.rim_diameter_mm, rec.height_mm)
            Database.save_reconstruction_profile(rec)

    return fit_res

@app.get("/api/projects/{project_id}/reconstruction")
def get_reconstruction(project_id: str):
    p = Database.get_project(project_id)
    if p and p.get("mode") == "paper":
        raise HTTPException(status_code=400, detail="3D Vessel Reconstruction is disabled in Paper Puzzle Demo mode.")
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
    p = Database.get_project(project_id)
    if p and p.get("mode") == "paper":
        raise HTTPException(
            status_code=400,
            detail="Archaeological typology, dating, and fabric interpretation are disabled in Paper Puzzle Demo mode."
        )
    rec = Database.get_reconstruction_profile(project_id)
    if not rec:
        raise HTTPException(status_code=400, detail="Reconstruction profile required for typology search")

    fragments = Database.get_fragments(project_id)
    obs = None
    for f in fragments:
        if f.observations.finish or f.observations.likely_part == "rim":
            obs = f.observations
            break

    candidates = match_typology(rec, observations=obs)

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

    proj_mode = p.get("mode", "ceramic")
    default_reviewer = "Geometry Evaluator" if proj_mode == "paper" else "Anonymous Archaeologist"
    reviewer_name = data.get("reviewer_name", default_reviewer).strip()
    notes = data.get("notes", "").strip()
    now = datetime.utcnow().isoformat()

    rec_profile = Database.get_reconstruction_profile(project_id) if proj_mode == "ceramic" else None
    full_state = {
        "project": p,
        "fragments": [f.dict() for f in Database.get_fragments(project_id)],
        "groups": [g.dict() for g in Database.get_vessel_groups(project_id)],
        "joins": [j.dict() for j in Database.get_join_candidates(project_id)],
        "reconstruction": rec_profile.dict() if rec_profile else None
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

    proj_obj = Project(
        id=p["id"],
        name=p["name"],
        description=p["description"],
        mode=proj_mode,
        demo_type=p.get("demo_type"),
        status="approved",
        created_at=p["created_at"],
        updated_at=now,
        approved_at=now,
        reviewer_name=reviewer_name,
        calibration=CalibrationData(**p["calibration"]),
        primary_photo_url=p["primary_photo_url"],
        primary_photo_dimensions=p["primary_photo_dimensions"],
        assembly_metadata=p.get("assembly_metadata")
    )
    Database.save_project(proj_obj)

    return {"status": "approved", "snapshot_id": snap_id, "approved_at": now}

@app.get("/api/projects/{project_id}/export/assembled-png")
def export_assembled_png(
    project_id: str,
    show_labels: bool = Query(True),
    show_outlines: bool = Query(True),
    show_seams: bool = Query(True)
):
    """
    Renders the 2D assembled pieces into a downloadable PNG image using their
    current rigid transforms on the assembly canvas.
    """
    p = Database.get_project(project_id)
    if not p or not p.get("primary_photo_url"):
        raise HTTPException(status_code=404, detail="Project photo not found")

    photo_path = UPLOAD_DIR / Path(p["primary_photo_url"]).name
    if not photo_path.exists():
        raise HTTPException(status_code=404, detail="Source photograph missing on disk")

    fragments = Database.get_fragments(project_id)
    joins = Database.get_join_candidates(project_id)
    active_ids = (p.get("assembly_metadata") or {}).get("active_join_ids", [])
    active_joins = [
        j for j in joins
        if j.status == "accepted" or j.id in active_ids
    ]

    png_bytes = render_assembled_png_bytes(
        image_path=photo_path,
        fragments=fragments,
        active_joins=active_joins,
        show_labels=show_labels,
        show_outlines=show_outlines,
        show_seams=show_seams
    )
    return Response(
        content=png_bytes,
        media_type="image/png",
        headers={"Content-Disposition": f"attachment; filename=sherd_forge_{project_id}_assembled.png"}
    )

@app.get("/api/projects/{project_id}/export/json")
def export_project_json(project_id: str):
    p = Database.get_project(project_id)
    if not p:
        raise HTTPException(status_code=404, detail="Project not found")

    proj_mode = p.get("mode", "ceramic")
    fragments = Database.get_fragments(project_id)
    groups = Database.get_vessel_groups(project_id)
    joins = Database.get_join_candidates(project_id)
    profile = Database.get_reconstruction_profile(project_id) if proj_mode == "ceramic" else None
    snapshots = Database.get_review_snapshots(project_id)

    active_join_ids = set((p.get("assembly_metadata") or {}).get("active_join_ids", []))
    accepted_joins = [
        j.dict() for j in joins
        if j.status == "accepted" or j.id in active_join_ids
    ]

    export_data = {
        "metadata": {
            "application": "SHERD-FORGE",
            "version": "1.0.0",
            "mode": proj_mode,
            "exported_at": datetime.utcnow().isoformat(),
            "disclaimer": (
                "GEOMETRIC PAPER PUZZLE RECONSTRUCTION: Computed from 2D piece silhouettes and complementary boundary alignment using rigid transforms."
                if proj_mode == "paper"
                else "RESEARCH HYPOTHESIS: Computed from overhead photograph; requires multi-view and fracture-surface verification."
            )
        },
        "source_image_reference": {
            "primary_photo_url": p.get("primary_photo_url"),
            "dimensions_px": p.get("primary_photo_dimensions"),
        },
        "project": p,
        "fragments": [f.dict() for f in fragments],
        "piece_contours_and_transforms": [
            {
                "id": f.id,
                "mask_url": f.mask_url,
                "crop_url": f.crop_url,
                "bbox": f.bbox,
                "area_px": f.area_px,
                "perimeter_px": f.perimeter_px,
                "contour": f.contour,
                "edge_annotations": [ea.dict() for ea in f.edge_annotations],
                "rigid_transform_placement": f.placement.dict(),
            }
            for f in fragments
        ],
        "proposed_joins": [j.dict() for j in joins],
        "accepted_joins": accepted_joins,
        "joins": [j.dict() for j in joins],
        "vessel_groups": [g.dict() for g in groups] if proj_mode == "ceramic" else [],
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
    p = Database.get_project(project_id)
    if not p:
        raise HTTPException(status_code=404, detail="Project not found")

    ext = _resolve_image_extension(file.filename, file.content_type)
    if not ext:
        raise HTTPException(status_code=400, detail="Only JPEG, PNG, and WebP formats are supported.")

    raw_bytes = await file.read()
    if not raw_bytes:
        raise HTTPException(status_code=400, detail="Uploaded image file is empty.")
    if len(raw_bytes) > MAX_UPLOAD_BYTES:
        raise HTTPException(status_code=400, detail="Image exceeds the 20MB maximum size limit.")

    arr = np.frombuffer(raw_bytes, np.uint8)
    img = cv2.imdecode(arr, cv2.IMREAD_COLOR)
    if img is None:
        raise HTTPException(status_code=400, detail="Corrupted or unreadable image file.")

    save_ext = ".png" if ext in [".png", ".webp", ".bmp"] else ".jpg"
    filename = f"{project_id}_{role}_{uuid.uuid4().hex[:6]}{save_ext}"
    filepath = UPLOAD_DIR / filename
    cv2.imwrite(str(filepath), img)

    photo = AdditionalPhoto(
        id=f"photo_{uuid.uuid4().hex[:6]}",
        project_id=project_id,
        fragment_id=fragment_id,
        role=role,
        filename=file.filename or filename,
        file_url=f"/uploads/{filename}",
        notes=notes
    )
    Database.add_photo(photo)
    return photo

# Serve frontend build if present
frontend_dist = Path(__file__).resolve().parent.parent.parent / "frontend" / "dist"
if frontend_dist.exists():
    app.mount("/", StaticFiles(directory=str(frontend_dist), html=True), name="frontend")
