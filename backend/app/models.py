from typing import List, Optional, Dict, Any, Union
from pydantic import BaseModel, Field

class CalibrationData(BaseModel):
    is_calibrated: bool = False
    px_per_mm: Optional[float] = None
    point_a: Optional[List[float]] = None  # [x, y] in original image coordinates
    point_b: Optional[List[float]] = None  # [x, y] in original image coordinates
    distance_mm: Optional[float] = None
    notes: Optional[str] = "Reference plane calibration. Raised or tilted surfaces introduce perspective distortion."

class EdgeAnnotation(BaseModel):
    id: str
    start_idx: int
    end_idx: int
    edge_type: str = "fracture"  # "fracture", "original_vessel_edge", "unknown"
    label: Optional[str] = None

class VisibleObservations(BaseModel):
    color_desc: Optional[str] = None
    finish: Optional[str] = None  # e.g., "burnished", "matte slip", "coarse grit"
    decoration: Optional[str] = None  # e.g., "incised band", "undecorated"
    likely_part: str = "unknown"  # "rim", "body", "base", "handle", "unknown"
    wall_thickness_mm: Optional[float] = None  # user-entered or side-view measured only
    notes: Optional[str] = None
    ai_generated: bool = False

class FragmentPlacement(BaseModel):
    x: float = 0.0
    y: float = 0.0
    rotation_deg: float = 0.0
    locked: bool = False

class FragmentFeatures(BaseModel):
    mean_rgb: Optional[List[float]] = None
    mean_lab: Optional[List[float]] = None
    color_hist: Optional[List[float]] = None
    texture_contrast: Optional[float] = None
    texture_homogeneity: Optional[float] = None
    texture_roughness: Optional[float] = None

class Fragment(BaseModel):
    id: str  # Stable ID: "S1", "S2", etc.
    project_id: str
    contour: List[List[float]]  # [[x, y], ...] in image coordinates
    bbox: List[int]  # [x, y, w, h]
    centroid: List[float]  # [x, y]
    area_px: float
    perimeter_px: float
    area_mm2: Optional[float] = None
    perimeter_mm: Optional[float] = None
    crop_url: str  # Path or URL to transparent PNG crop
    mask_url: Optional[str] = None
    group_id: Optional[str] = None
    locked_group: bool = False
    placement: FragmentPlacement = Field(default_factory=FragmentPlacement)
    edge_annotations: List[EdgeAnnotation] = Field(default_factory=list)
    observations: VisibleObservations = Field(default_factory=VisibleObservations)
    features: FragmentFeatures = Field(default_factory=FragmentFeatures)

class AdditionalPhoto(BaseModel):
    id: str
    project_id: str
    fragment_id: Optional[str] = None
    role: str = "outer_face"  # "outer_face", "inner_face", "side", "fracture", "general"
    filename: str
    file_url: str
    notes: Optional[str] = None

class VesselGroup(BaseModel):
    id: str  # "VG1", "VG2", etc.
    project_id: str
    name: str
    color_hex: str
    fragment_ids: List[str] = Field(default_factory=list)
    confirmed: bool = False
    notes: Optional[str] = None

class JoinCandidate(BaseModel):
    id: str
    project_id: str
    fragment_a_id: str
    fragment_b_id: str
    segment_a_indices: List[int]  # [start_idx, end_idx]
    segment_b_indices: List[int]  # [start_idx, end_idx]
    segment_a_points: List[List[float]]
    segment_b_points: List[List[float]]
    # Rigid transform for fragment B to align with fragment A:
    # point_aligned = R * point + t
    transform_rotation_deg: float
    transform_tx: float
    transform_ty: float
    residual_px: float
    residual_mm: Optional[float] = None
    matched_length_px: float
    matched_length_mm: Optional[float] = None
    tangent_score: float  # 0 to 1, higher is better
    overlap_penalty: float  # 0 to 1, lower is better (0 = no collision)
    compatibility_score: float  # 0 to 1 composite metric
    status: str = "suggested"  # "suggested", "accepted", "rejected"
    explanation: str

class RimArcFittingResult(BaseModel):
    center_x: float
    center_y: float
    radius_px: float
    radius_mm: Optional[float] = None
    diameter_mm: Optional[float] = None
    arc_coverage_deg: float
    rmse_residual_px: float
    rmse_residual_mm: Optional[float] = None
    num_points: int
    quality_warning: Optional[str] = None

class ReconstructionProfile(BaseModel):
    id: str
    project_id: str
    vessel_group_id: Optional[str] = None
    source: str = "user_entered"  # "user_entered", "measured_side_profile", "catalogue_template"
    source_reference_id: Optional[str] = None
    rim_diameter_mm: float = 160.0
    height_mm: float = 120.0
    wall_thickness_mm: float = 5.0
    points: List[List[float]] = Field(default_factory=list)  # [[radius_mm, height_mm], ...]
    rim_fit_evidence: Optional[RimArcFittingResult] = None
    notes: Optional[str] = None

class TypologyCandidate(BaseModel):
    reference_id: str
    name: str
    category: str  # "bowl", "plate", "cup", "jar", "cooking pot", "flowerpot"
    compatibility_score: float
    supporting_features: List[str]
    contradictions: List[str]
    missing_evidence: List[str]
    source_citation: str
    source_url: Optional[str] = None
    dimensions_summary: str
    description: str
    schematic_profile_points: List[List[float]]  # [[r, h], ...]
    explanation: Optional[str] = None

class Project(BaseModel):
    id: str
    name: str
    description: Optional[str] = None
    status: str = "draft"  # "draft" | "approved"
    created_at: str
    updated_at: str
    approved_at: Optional[str] = None
    reviewer_name: Optional[str] = None
    calibration: CalibrationData = Field(default_factory=CalibrationData)
    primary_photo_url: Optional[str] = None
    primary_photo_dimensions: Optional[List[int]] = None  # [width, height]

class ReviewSnapshot(BaseModel):
    id: str
    project_id: str
    approved_at: str
    reviewer_name: str
    notes: Optional[str] = None
    state_snapshot: Dict[str, Any]
