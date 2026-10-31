export interface CalibrationData {
  is_calibrated: boolean;
  px_per_mm?: number | null;
  point_a?: [number, number] | null;
  point_b?: [number, number] | null;
  distance_mm?: number | null;
  notes?: string | null;
}

export interface EdgeAnnotation {
  id: string;
  start_idx: number;
  end_idx: number;
  edge_type: 'fracture' | 'original_vessel_edge' | 'unknown';
  label?: string | null;
}

export interface VisibleObservations {
  color_desc?: string | null;
  finish?: string | null;
  decoration?: string | null;
  likely_part: 'rim' | 'body' | 'base' | 'handle' | 'unknown';
  wall_thickness_mm?: number | null;
  notes?: string | null;
  ai_generated?: boolean;
}

export interface FragmentPlacement {
  x: number;
  y: number;
  rotation_deg: number;
  locked: boolean;
}

export interface FragmentFeatures {
  mean_rgb?: [number, number, number] | null;
  mean_lab?: [number, number, number] | null;
  color_hist?: number[] | null;
  texture_contrast?: number | null;
  texture_homogeneity?: number | null;
  texture_roughness?: number | null;
}

export interface Fragment {
  id: string;
  project_id: string;
  contour: [number, number][];
  bbox: [number, number, number, number];
  centroid: [number, number];
  area_px: number;
  perimeter_px: number;
  area_mm2?: number | null;
  perimeter_mm?: number | null;
  crop_url: string;
  mask_url?: string | null;
  group_id?: string | null;
  locked_group: boolean;
  placement: FragmentPlacement;
  edge_annotations: EdgeAnnotation[];
  observations: VisibleObservations;
  features: FragmentFeatures;
}

export interface VesselGroup {
  id: string;
  project_id: string;
  name: string;
  color_hex: string;
  fragment_ids: string[];
  confirmed: boolean;
  notes?: string | null;
}

export interface JoinCandidate {
  id: string;
  project_id: string;
  fragment_a_id: string;
  fragment_b_id: string;
  segment_a_indices: [number, number];
  segment_b_indices: [number, number];
  segment_a_points: [number, number][];
  segment_b_points: [number, number][];
  transform_rotation_deg: number;
  transform_tx: number;
  transform_ty: number;
  residual_px: number;
  residual_mm?: number | null;
  matched_length_px: number;
  matched_length_mm?: number | null;
  tangent_score: number;
  overlap_penalty: number;
  compatibility_score: number;
  status: 'suggested' | 'accepted' | 'rejected';
  explanation: string;
}

export interface RimArcFittingResult {
  center_x: number;
  center_y: number;
  radius_px: number;
  radius_mm?: number | null;
  diameter_mm?: number | null;
  arc_coverage_deg: number;
  rmse_residual_px: number;
  rmse_residual_mm?: number | null;
  num_points: number;
  quality_warning?: string | null;
}

export interface ReconstructionProfile {
  id: string;
  project_id: string;
  vessel_group_id?: string | null;
  source: 'user_entered' | 'measured_side_profile' | 'catalogue_template';
  source_reference_id?: string | null;
  rim_diameter_mm: number;
  height_mm: number;
  wall_thickness_mm: number;
  points: [number, number][]; // [radius_mm, height_mm]
  rim_fit_evidence?: RimArcFittingResult | null;
  notes?: string | null;
}

export interface TypologyCandidate {
  reference_id: string;
  name: string;
  category: string;
  compatibility_score: number;
  supporting_features: string[];
  contradictions: string[];
  missing_evidence: string[];
  source_citation: string;
  source_url?: string | null;
  dimensions_summary: string;
  description: string;
  schematic_profile_points: [number, number][];
  explanation?: string | null;
}

export interface AdditionalPhoto {
  id: string;
  project_id: string;
  fragment_id?: string | null;
  role: 'outer_face' | 'inner_face' | 'side' | 'fracture' | 'general';
  filename: string;
  file_url: string;
  notes?: string | null;
}

export interface ReviewSnapshot {
  id: string;
  project_id: string;
  approved_at: string;
  reviewer_name: string;
  notes?: string | null;
  state_snapshot: any;
}

export interface Project {
  id: string;
  name: string;
  description?: string | null;
  status: 'draft' | 'approved';
  created_at: string;
  updated_at: string;
  approved_at?: string | null;
  reviewer_name?: string | null;
  calibration: CalibrationData;
  primary_photo_url?: string | null;
  primary_photo_dimensions?: [number, number] | null;
}

export interface ProjectState {
  project: Project;
  fragments: Fragment[];
  groups: VesselGroup[];
  joins: JoinCandidate[];
  reconstruction_profile: ReconstructionProfile | null;
  photos: AdditionalPhoto[];
  snapshots: ReviewSnapshot[];
}

export interface HealthInfo {
  status: string;
  app: string;
  gemini_available: boolean;
  gemini_model: string;
  mode: string;
}
