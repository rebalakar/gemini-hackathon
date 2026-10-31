import numpy as np
from typing import List, Dict, Any, Tuple, Optional
from .models import Fragment, VesselGroup

GROUP_PALETTE = [
    "#C85A32",  # Terracotta Primary
    "#2A6F97",  # Mediterranean Blue
    "#588157",  # Olive Sage
    "#B08968",  # Sandy Buff
    "#7209B7",  # Roman Purple
    "#E07A5F",  # Clay Light
    "#3D5A80",  # Indigo Dark
    "#81B29A",  # Verdigris
]

def compute_pairwise_compatibility(f1: Fragment, f2: Fragment) -> Tuple[float, Dict[str, Any]]:
    """
    Computes a normalised same-vessel compatibility score [0.0 - 1.0] and returns an evidence breakdown.
    Does not fabricate missing data.
    """
    evidence = {}
    weights = []
    scores = []

    # 1. Color Histogram Correlation (if available)
    if f1.features.color_hist and f2.features.color_hist and len(f1.features.color_hist) == len(f2.features.color_hist):
        h1 = np.array(f1.features.color_hist, dtype=np.float32)
        h2 = np.array(f2.features.color_hist, dtype=np.float32)
        denom = (np.linalg.norm(h1) * np.linalg.norm(h2))
        if denom > 1e-6:
            cos_sim = float(np.dot(h1, h2) / denom)
            cos_sim = max(0.0, min(1.0, cos_sim))
            scores.append(cos_sim)
            weights.append(0.35)
            evidence["color_hist_similarity"] = round(cos_sim, 3)

    # 2. Mean LAB Color Proximity
    if f1.features.mean_lab and f2.features.mean_lab:
        l1 = np.array(f1.features.mean_lab, dtype=np.float32)
        l2 = np.array(f2.features.mean_lab, dtype=np.float32)
        delta_e = float(np.linalg.norm(l1 - l2))
        lab_score = max(0.0, min(1.0, float(np.exp(-delta_e / 25.0))))
        scores.append(lab_score)
        weights.append(0.25)
        evidence["color_delta_e"] = round(delta_e, 2)
        evidence["color_lab_score"] = round(lab_score, 3)

    # 3. Texture Consistency
    if f1.features.texture_contrast is not None and f2.features.texture_contrast is not None:
        c1, c2 = f1.features.texture_contrast, f2.features.texture_contrast
        r1, r2 = (f1.features.texture_roughness or 0.0), (f2.features.texture_roughness or 0.0)
        c_diff = abs(c1 - c2)
        r_diff = abs(r1 - r2)
        tex_score = float(np.exp(-c_diff / 20.0) * np.exp(-r_diff / 80.0))
        scores.append(tex_score)
        weights.append(0.25)
        evidence["texture_score"] = round(tex_score, 3)

    # 4. Wall Thickness Compatibility (Only if user measured/entered on both)
    t1 = f1.observations.wall_thickness_mm
    t2 = f2.observations.wall_thickness_mm
    if t1 is not None and t2 is not None and t1 > 0 and t2 > 0:
        thick_diff = abs(t1 - t2)
        thick_score = max(0.0, min(1.0, float(np.exp(-thick_diff / 1.5))))
        scores.append(thick_score)
        weights.append(0.15)
        evidence["wall_thickness_score"] = round(thick_score, 3)
        evidence["thickness_diff_mm"] = round(thick_diff, 2)
    else:
        evidence["wall_thickness_evidence"] = "Not measured (omitted from weighting)"

    # 5. Qualitative observations (finish / decoration)
    if f1.observations.finish and f2.observations.finish:
        finish_match = 1.0 if f1.observations.finish.strip().lower() == f2.observations.finish.strip().lower() else 0.4
        scores.append(finish_match)
        weights.append(0.10)
        evidence["finish_match"] = f"{f1.observations.finish} vs {f2.observations.finish}"

    if not weights:
        return 0.5, {"summary": "Insufficient numerical features to compute vessel compatibility."}

    total_weight = sum(weights)
    composite_score = sum(s * w for s, w in zip(scores, weights)) / total_weight
    composite_score = round(max(0.0, min(1.0, composite_score)), 3)

    # Human-readable summary
    summary_parts = []
    if "color_hist_similarity" in evidence:
        summary_parts.append(f"Color match: {int(evidence['color_hist_similarity'] * 100)}%")
    if "color_delta_e" in evidence:
        summary_parts.append(f"ΔE: {evidence['color_delta_e']}")
    if "texture_score" in evidence:
        summary_parts.append(f"Texture match: {int(evidence['texture_score'] * 100)}%")

    evidence["summary"] = "; ".join(summary_parts) if summary_parts else "Default feature baseline"
    return composite_score, evidence

def propose_vessel_groups(
    project_id: str,
    fragments: List[Fragment],
    existing_groups: Optional[List[VesselGroup]] = None,
    threshold: float = 0.68
) -> Tuple[List[VesselGroup], List[Fragment]]:
    """
    Groups fragments into proposed vessels using conservative clique clustering.
    Avoids transitive chaining of weakly linked pairs.
    Preserves locked assignments and places low-compatibility fragments into unassigned.
    """
    if not fragments:
        return [], []

    # Map locked assignments
    locked_map = {}
    for f in fragments:
        if f.locked_group and f.group_id:
            locked_map[f.id] = f.group_id

    # Compute pairwise compatibility matrix
    n = len(fragments)
    compat_matrix = np.zeros((n, n), dtype=np.float32)
    for i in range(n):
        compat_matrix[i, i] = 1.0
        for j in range(i + 1, n):
            score, _ = compute_pairwise_compatibility(fragments[i], fragments[j])
            compat_matrix[i, j] = score
            compat_matrix[j, i] = score

    # Agglomerative clustering with COMPLETE LINKAGE (conservative: all members must be >= threshold)
    clusters: List[List[int]] = []
    unassigned_indices = list(range(n))

    # Seed clusters from locked groups first
    group_clusters: Dict[str, List[int]] = {}
    for idx, f in enumerate(fragments):
        if f.id in locked_map:
            gid = locked_map[f.id]
            if gid not in group_clusters:
                group_clusters[gid] = []
            group_clusters[gid].append(idx)
            unassigned_indices.remove(idx)

    # For remaining fragments, cluster with complete linkage
    while unassigned_indices:
        best_i = unassigned_indices[0]
        # Find all unassigned j that form a mutually compatible clique with best_i
        candidate_clique = [best_i]
        for candidate in unassigned_indices[1:]:
            # Check if candidate is compatible with EVERY member of candidate_clique
            is_compatible = all(compat_matrix[candidate, member] >= threshold for member in candidate_clique)
            if is_compatible:
                candidate_clique.append(candidate)

        if len(candidate_clique) > 1:
            clusters.append(candidate_clique)
            for c in candidate_clique:
                unassigned_indices.remove(c)
        else:
            # Single fragment remains unassigned (left out of automatic groups)
            unassigned_indices.remove(best_i)

    # Build final groups
    final_groups: List[VesselGroup] = []
    assigned_frag_ids = set()

    # Add existing locked groups
    color_idx = 0
    for gid, indices in group_clusters.items():
        frag_ids = [fragments[i].id for i in indices]
        final_groups.append(VesselGroup(
            id=gid,
            project_id=project_id,
            name=f"Vessel {color_idx + 1} (Confirmed)",
            color_hex=GROUP_PALETTE[color_idx % len(GROUP_PALETTE)],
            fragment_ids=frag_ids,
            confirmed=True,
            notes="User-locked group"
        ))
        assigned_frag_ids.update(frag_ids)
        color_idx += 1

    # Add newly proposed multi-fragment clusters
    for cluster_indices in clusters:
        frag_ids = [fragments[i].id for i in cluster_indices]
        gid = f"VG{color_idx + 1}"
        final_groups.append(VesselGroup(
            id=gid,
            project_id=project_id,
            name=f"Proposed Vessel {color_idx + 1}",
            color_hex=GROUP_PALETTE[color_idx % len(GROUP_PALETTE)],
            fragment_ids=frag_ids,
            confirmed=False,
            notes=f"Proposed based on shared color/texture compatibility (threshold {threshold})"
        ))
        assigned_frag_ids.update(frag_ids)
        color_idx += 1

    # Update fragments with their group IDs
    updated_fragments = []
    frag_to_group = {}
    for g in final_groups:
        for fid in g.fragment_ids:
            frag_to_group[fid] = g.id

    for f in fragments:
        f_copy = f.model_copy(deep=True)
        if not f_copy.locked_group:
            f_copy.group_id = frag_to_group.get(f_copy.id, None)
        updated_fragments.append(f_copy)

    return final_groups, updated_fragments
