import sqlite3
import json
from datetime import datetime
from typing import List, Optional, Dict, Any
from pathlib import Path
from .config import DATABASE_PATH
from .models import (
    Project, CalibrationData, Fragment, VesselGroup,
    JoinCandidate, ReconstructionProfile, AdditionalPhoto,
    ReviewSnapshot
)

def get_db_connection() -> sqlite3.Connection:
    conn = sqlite3.connect(DATABASE_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON;")
    conn.execute("PRAGMA journal_mode = WAL;")
    return conn

def init_db():
    conn = get_db_connection()
    with conn:
        conn.executescript("""
        CREATE TABLE IF NOT EXISTS projects (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            description TEXT,
            status TEXT DEFAULT 'draft',
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            approved_at TEXT,
            reviewer_name TEXT,
            calibration_json TEXT,
            primary_photo_url TEXT,
            primary_photo_dimensions TEXT
        );

        CREATE TABLE IF NOT EXISTS photographs (
            id TEXT PRIMARY KEY,
            project_id TEXT NOT NULL,
            fragment_id TEXT,
            role TEXT NOT NULL,
            filename TEXT NOT NULL,
            file_url TEXT NOT NULL,
            notes TEXT,
            created_at TEXT NOT NULL,
            FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS fragments (
            id TEXT NOT NULL,
            project_id TEXT NOT NULL,
            contour_json TEXT NOT NULL,
            bbox_json TEXT NOT NULL,
            centroid_json TEXT NOT NULL,
            area_px REAL NOT NULL,
            perimeter_px REAL NOT NULL,
            area_mm2 REAL,
            perimeter_mm REAL,
            crop_url TEXT NOT NULL,
            mask_url TEXT,
            group_id TEXT,
            locked_group INTEGER DEFAULT 0,
            placement_json TEXT NOT NULL,
            edge_annotations_json TEXT DEFAULT '[]',
            observations_json TEXT DEFAULT '{}',
            features_json TEXT DEFAULT '{}',
            PRIMARY KEY (project_id, id),
            FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS vessel_groups (
            id TEXT NOT NULL,
            project_id TEXT NOT NULL,
            name TEXT NOT NULL,
            color_hex TEXT NOT NULL,
            fragment_ids_json TEXT DEFAULT '[]',
            confirmed INTEGER DEFAULT 0,
            notes TEXT,
            PRIMARY KEY (project_id, id),
            FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS join_candidates (
            id TEXT PRIMARY KEY,
            project_id TEXT NOT NULL,
            fragment_a_id TEXT NOT NULL,
            fragment_b_id TEXT NOT NULL,
            segment_a_indices_json TEXT NOT NULL,
            segment_b_indices_json TEXT NOT NULL,
            segment_a_points_json TEXT NOT NULL,
            segment_b_points_json TEXT NOT NULL,
            transform_rotation_deg REAL NOT NULL,
            transform_tx REAL NOT NULL,
            transform_ty REAL NOT NULL,
            residual_px REAL NOT NULL,
            residual_mm REAL,
            matched_length_px REAL NOT NULL,
            matched_length_mm REAL,
            tangent_score REAL NOT NULL,
            overlap_penalty REAL NOT NULL,
            compatibility_score REAL NOT NULL,
            status TEXT DEFAULT 'suggested',
            explanation TEXT NOT NULL,
            FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS reconstruction_profiles (
            id TEXT PRIMARY KEY,
            project_id TEXT NOT NULL,
            vessel_group_id TEXT,
            source TEXT NOT NULL,
            source_reference_id TEXT,
            rim_diameter_mm REAL NOT NULL,
            height_mm REAL NOT NULL,
            wall_thickness_mm REAL NOT NULL,
            points_json TEXT NOT NULL,
            rim_fit_evidence_json TEXT,
            notes TEXT,
            FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS review_snapshots (
            id TEXT PRIMARY KEY,
            project_id TEXT NOT NULL,
            approved_at TEXT NOT NULL,
            reviewer_name TEXT NOT NULL,
            notes TEXT,
            state_snapshot_json TEXT NOT NULL,
            FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS provenance_logs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            project_id TEXT NOT NULL,
            timestamp TEXT NOT NULL,
            source TEXT NOT NULL,
            method TEXT NOT NULL,
            parameters_json TEXT,
            summary TEXT NOT NULL,
            FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
        );
        """)
    conn.close()

# Database helper functions
class Database:
    @staticmethod
    def get_all_projects() -> List[Dict[str, Any]]:
        conn = get_db_connection()
        rows = conn.execute("SELECT * FROM projects ORDER BY updated_at DESC").fetchall()
        projects = []
        for r in rows:
            p_dict = dict(r)
            p_dict["calibration"] = json.loads(r["calibration_json"]) if r["calibration_json"] else CalibrationData().dict()
            p_dict["primary_photo_dimensions"] = json.loads(r["primary_photo_dimensions"]) if r["primary_photo_dimensions"] else None
            projects.append(p_dict)
        conn.close()
        return projects

    @staticmethod
    def get_project(project_id: str) -> Optional[Dict[str, Any]]:
        conn = get_db_connection()
        row = conn.execute("SELECT * FROM projects WHERE id = ?", (project_id,)).fetchone()
        if not row:
            conn.close()
            return None
        p_dict = dict(row)
        p_dict["calibration"] = json.loads(row["calibration_json"]) if row["calibration_json"] else CalibrationData().dict()
        p_dict["primary_photo_dimensions"] = json.loads(row["primary_photo_dimensions"]) if row["primary_photo_dimensions"] else None
        conn.close()
        return p_dict

    @staticmethod
    def save_project(project: Project):
        conn = get_db_connection()
        with conn:
            conn.execute("""
            INSERT INTO projects (
                id, name, description, status, created_at, updated_at,
                approved_at, reviewer_name, calibration_json,
                primary_photo_url, primary_photo_dimensions
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                name = excluded.name,
                description = excluded.description,
                status = excluded.status,
                updated_at = excluded.updated_at,
                approved_at = excluded.approved_at,
                reviewer_name = excluded.reviewer_name,
                calibration_json = excluded.calibration_json,
                primary_photo_url = excluded.primary_photo_url,
                primary_photo_dimensions = excluded.primary_photo_dimensions;
            """, (
                project.id, project.name, project.description, project.status,
                project.created_at, project.updated_at, project.approved_at,
                project.reviewer_name, json.dumps(project.calibration.dict()),
                project.primary_photo_url,
                json.dumps(project.primary_photo_dimensions) if project.primary_photo_dimensions else None
            ))
        conn.close()

    @staticmethod
    def get_fragments(project_id: str) -> List[Fragment]:
        conn = get_db_connection()
        rows = conn.execute("SELECT * FROM fragments WHERE project_id = ? ORDER BY id ASC", (project_id,)).fetchall()
        frags = []
        for r in rows:
            frags.append(Fragment(
                id=r["id"],
                project_id=r["project_id"],
                contour=json.loads(r["contour_json"]),
                bbox=json.loads(r["bbox_json"]),
                centroid=json.loads(r["centroid_json"]),
                area_px=r["area_px"],
                perimeter_px=r["perimeter_px"],
                area_mm2=r["area_mm2"],
                perimeter_mm=r["perimeter_mm"],
                crop_url=r["crop_url"],
                mask_url=r["mask_url"],
                group_id=r["group_id"],
                locked_group=bool(r["locked_group"]),
                placement=json.loads(r["placement_json"]),
                edge_annotations=json.loads(r["edge_annotations_json"] or '[]'),
                observations=json.loads(r["observations_json"] or '{}'),
                features=json.loads(r["features_json"] or '{}')
            ))
        conn.close()
        return frags

    @staticmethod
    def save_fragment(frag: Fragment):
        conn = get_db_connection()
        with conn:
            conn.execute("""
            INSERT INTO fragments (
                id, project_id, contour_json, bbox_json, centroid_json,
                area_px, perimeter_px, area_mm2, perimeter_mm,
                crop_url, mask_url, group_id, locked_group,
                placement_json, edge_annotations_json, observations_json, features_json
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(project_id, id) DO UPDATE SET
                contour_json = excluded.contour_json,
                bbox_json = excluded.bbox_json,
                centroid_json = excluded.centroid_json,
                area_px = excluded.area_px,
                perimeter_px = excluded.perimeter_px,
                area_mm2 = excluded.area_mm2,
                perimeter_mm = excluded.perimeter_mm,
                crop_url = excluded.crop_url,
                mask_url = excluded.mask_url,
                group_id = excluded.group_id,
                locked_group = excluded.locked_group,
                placement_json = excluded.placement_json,
                edge_annotations_json = excluded.edge_annotations_json,
                observations_json = excluded.observations_json,
                features_json = excluded.features_json;
            """, (
                frag.id, frag.project_id, json.dumps(frag.contour),
                json.dumps(frag.bbox), json.dumps(frag.centroid),
                frag.area_px, frag.perimeter_px, frag.area_mm2, frag.perimeter_mm,
                frag.crop_url, frag.mask_url, frag.group_id, 1 if frag.locked_group else 0,
                json.dumps(frag.placement.dict()),
                json.dumps([ea.dict() if hasattr(ea, "dict") else ea for ea in frag.edge_annotations]),
                json.dumps(frag.observations.dict() if hasattr(frag.observations, "dict") else frag.observations),
                json.dumps(frag.features.dict() if hasattr(frag.features, "dict") else frag.features)
            ))
        conn.close()

    @staticmethod
    def delete_fragment(project_id: str, fragment_id: str):
        conn = get_db_connection()
        with conn:
            conn.execute("DELETE FROM fragments WHERE project_id = ? AND id = ?", (project_id, fragment_id))
            # Clean up join candidates mentioning this fragment
            conn.execute("DELETE FROM join_candidates WHERE project_id = ? AND (fragment_a_id = ? OR fragment_b_id = ?)", (project_id, fragment_id, fragment_id))
        conn.close()

    @staticmethod
    def get_vessel_groups(project_id: str) -> List[VesselGroup]:
        conn = get_db_connection()
        rows = conn.execute("SELECT * FROM vessel_groups WHERE project_id = ?", (project_id,)).fetchall()
        groups = []
        for r in rows:
            groups.append(VesselGroup(
                id=r["id"],
                project_id=r["project_id"],
                name=r["name"],
                color_hex=r["color_hex"],
                fragment_ids=json.loads(r["fragment_ids_json"] or '[]'),
                confirmed=bool(r["confirmed"]),
                notes=r["notes"]
            ))
        conn.close()
        return groups

    @staticmethod
    def save_vessel_groups(project_id: str, groups: List[VesselGroup]):
        conn = get_db_connection()
        with conn:
            # Clear old groups and re-insert
            conn.execute("DELETE FROM vessel_groups WHERE project_id = ?", (project_id,))
            for g in groups:
                conn.execute("""
                INSERT INTO vessel_groups (id, project_id, name, color_hex, fragment_ids_json, confirmed, notes)
                VALUES (?, ?, ?, ?, ?, ?, ?)
                """, (
                    g.id, g.project_id, g.name, g.color_hex,
                    json.dumps(g.fragment_ids), 1 if g.confirmed else 0, g.notes
                ))
        conn.close()

    @staticmethod
    def get_join_candidates(project_id: str) -> List[JoinCandidate]:
        conn = get_db_connection()
        rows = conn.execute("SELECT * FROM join_candidates WHERE project_id = ? ORDER BY compatibility_score DESC", (project_id,)).fetchall()
        candidates = []
        for r in rows:
            candidates.append(JoinCandidate(
                id=r["id"],
                project_id=r["project_id"],
                fragment_a_id=r["fragment_a_id"],
                fragment_b_id=r["fragment_b_id"],
                segment_a_indices=json.loads(r["segment_a_indices_json"]),
                segment_b_indices=json.loads(r["segment_b_indices_json"]),
                segment_a_points=json.loads(r["segment_a_points_json"]),
                segment_b_points=json.loads(r["segment_b_points_json"]),
                transform_rotation_deg=r["transform_rotation_deg"],
                transform_tx=r["transform_tx"],
                transform_ty=r["transform_ty"],
                residual_px=r["residual_px"],
                residual_mm=r["residual_mm"],
                matched_length_px=r["matched_length_px"],
                matched_length_mm=r["matched_length_mm"],
                tangent_score=r["tangent_score"],
                overlap_penalty=r["overlap_penalty"],
                compatibility_score=r["compatibility_score"],
                status=r["status"],
                explanation=r["explanation"]
            ))
        conn.close()
        return candidates

    @staticmethod
    def save_join_candidates(project_id: str, joins: List[JoinCandidate]):
        conn = get_db_connection()
        with conn:
            for j in joins:
                conn.execute("""
                INSERT INTO join_candidates (
                    id, project_id, fragment_a_id, fragment_b_id,
                    segment_a_indices_json, segment_b_indices_json,
                    segment_a_points_json, segment_b_points_json,
                    transform_rotation_deg, transform_tx, transform_ty,
                    residual_px, residual_mm, matched_length_px, matched_length_mm,
                    tangent_score, overlap_penalty, compatibility_score, status, explanation
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                ON CONFLICT(id) DO UPDATE SET
                    status = excluded.status;
                """, (
                    j.id, j.project_id, j.fragment_a_id, j.fragment_b_id,
                    json.dumps(j.segment_a_indices), json.dumps(j.segment_b_indices),
                    json.dumps(j.segment_a_points), json.dumps(j.segment_b_points),
                    j.transform_rotation_deg, j.transform_tx, j.transform_ty,
                    j.residual_px, j.residual_mm, j.matched_length_px, j.matched_length_mm,
                    j.tangent_score, j.overlap_penalty, j.compatibility_score, j.status, j.explanation
                ))
        conn.close()

    @staticmethod
    def update_join_status(join_id: str, status: str):
        conn = get_db_connection()
        with conn:
            conn.execute("UPDATE join_candidates SET status = ? WHERE id = ?", (status, join_id))
        conn.close()

    @staticmethod
    def get_reconstruction_profile(project_id: str) -> Optional[ReconstructionProfile]:
        conn = get_db_connection()
        row = conn.execute("SELECT * FROM reconstruction_profiles WHERE project_id = ? LIMIT 1", (project_id,)).fetchone()
        if not row:
            conn.close()
            return None
        rec = ReconstructionProfile(
            id=row["id"],
            project_id=row["project_id"],
            vessel_group_id=row["vessel_group_id"],
            source=row["source"],
            source_reference_id=row["source_reference_id"],
            rim_diameter_mm=row["rim_diameter_mm"],
            height_mm=row["height_mm"],
            wall_thickness_mm=row["wall_thickness_mm"],
            points=json.loads(row["points_json"] or '[]'),
            rim_fit_evidence=json.loads(row["rim_fit_evidence_json"]) if row["rim_fit_evidence_json"] else None,
            notes=row["notes"]
        )
        conn.close()
        return rec

    @staticmethod
    def save_reconstruction_profile(rec: ReconstructionProfile):
        conn = get_db_connection()
        with conn:
            conn.execute("""
            INSERT INTO reconstruction_profiles (
                id, project_id, vessel_group_id, source, source_reference_id,
                rim_diameter_mm, height_mm, wall_thickness_mm, points_json,
                rim_fit_evidence_json, notes
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(id) DO UPDATE SET
                source = excluded.source,
                source_reference_id = excluded.source_reference_id,
                rim_diameter_mm = excluded.rim_diameter_mm,
                height_mm = excluded.height_mm,
                wall_thickness_mm = excluded.wall_thickness_mm,
                points_json = excluded.points_json,
                rim_fit_evidence_json = excluded.rim_fit_evidence_json,
                notes = excluded.notes;
            """, (
                rec.id, rec.project_id, rec.vessel_group_id, rec.source, rec.source_reference_id,
                rec.rim_diameter_mm, rec.height_mm, rec.wall_thickness_mm,
                json.dumps(rec.points),
                json.dumps(rec.rim_fit_evidence.dict()) if rec.rim_fit_evidence else None,
                rec.notes
            ))
        conn.close()

    @staticmethod
    def add_photo(photo: AdditionalPhoto):
        conn = get_db_connection()
        with conn:
            conn.execute("""
            INSERT INTO photographs (id, project_id, fragment_id, role, filename, file_url, notes, created_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
            """, (
                photo.id, photo.project_id, photo.fragment_id, photo.role,
                photo.filename, photo.file_url, photo.notes, datetime.utcnow().isoformat()
            ))
        conn.close()

    @staticmethod
    def get_photos(project_id: str) -> List[AdditionalPhoto]:
        conn = get_db_connection()
        rows = conn.execute("SELECT * FROM photographs WHERE project_id = ?", (project_id,)).fetchall()
        photos = []
        for r in rows:
            photos.append(AdditionalPhoto(
                id=r["id"],
                project_id=r["project_id"],
                fragment_id=r["fragment_id"],
                role=r["role"],
                filename=r["filename"],
                file_url=r["file_url"],
                notes=r["notes"]
            ))
        conn.close()
        return photos

    @staticmethod
    def log_provenance(project_id: str, source: str, method: str, parameters: Dict[str, Any], summary: str):
        conn = get_db_connection()
        with conn:
            conn.execute("""
            INSERT INTO provenance_logs (project_id, timestamp, source, method, parameters_json, summary)
            VALUES (?, ?, ?, ?, ?, ?)
            """, (
                project_id, datetime.utcnow().isoformat(), source, method,
                json.dumps(parameters), summary
            ))
        conn.close()

    @staticmethod
    def save_review_snapshot(snapshot: ReviewSnapshot):
        conn = get_db_connection()
        with conn:
            conn.execute("""
            INSERT INTO review_snapshots (id, project_id, approved_at, reviewer_name, notes, state_snapshot_json)
            VALUES (?, ?, ?, ?, ?, ?)
            """, (
                snapshot.id, snapshot.project_id, snapshot.approved_at,
                snapshot.reviewer_name, snapshot.notes, json.dumps(snapshot.state_snapshot)
            ))
        conn.close()

    @staticmethod
    def get_review_snapshots(project_id: str) -> List[ReviewSnapshot]:
        conn = get_db_connection()
        rows = conn.execute("SELECT * FROM review_snapshots WHERE project_id = ? ORDER BY approved_at DESC", (project_id,)).fetchall()
        snaps = []
        for r in rows:
            snaps.append(ReviewSnapshot(
                id=r["id"],
                project_id=r["project_id"],
                approved_at=r["approved_at"],
                reviewer_name=r["reviewer_name"],
                notes=r["notes"],
                state_snapshot=json.loads(r["state_snapshot_json"])
            ))
        conn.close()
        return snaps
