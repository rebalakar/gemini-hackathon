import json
import numpy as np
from typing import List, Dict, Any, Optional, Tuple
from .models import TypologyCandidate, ReconstructionProfile, VisibleObservations

DEMONSTRATION_CATALOGUE = [
    {
        "reference_id": "DEMO-BOW-01",
        "name": "Hemispherical Plain Serving Bowl",
        "category": "bowl",
        "rim_diameter_range": [160.0, 200.0],
        "height_range": [60.0, 85.0],
        "aspect_ratio_range": [2.2, 2.9],
        "wall_thickness_range": [4.0, 6.5],
        "typical_fabric": ["fine orange slip", "terracotta", "matte"],
        "description": "Demonstration reference for an open hemispherical vessel with smooth continuous curvature from simple direct rim to flattened base.",
        "source_citation": "SHERD-FORGE Synthetic Reference Type-Series (Demonstration Only)",
        "source_url": None,
        "schematic_points": [[40.0, 0.0], [60.0, 15.0], [80.0, 40.0], [90.0, 70.0]]
    },
    {
        "reference_id": "DEMO-BOW-02",
        "name": "Carinated Fine Ware Shallow Bowl",
        "category": "bowl",
        "rim_diameter_range": [130.0, 160.0],
        "height_range": [45.0, 60.0],
        "aspect_ratio_range": [2.6, 3.2],
        "wall_thickness_range": [3.0, 4.8],
        "typical_fabric": ["fine red slip", "burnished", "thin-walled"],
        "description": "Demonstration reference for a fine table bowl exhibiting an angular carination at the mid-body and an everted rim.",
        "source_citation": "SHERD-FORGE Synthetic Reference Type-Series (Demonstration Only)",
        "source_url": None,
        "schematic_points": [[35.0, 0.0], [65.0, 25.0], [70.0, 30.0], [73.0, 52.0]]
    },
    {
        "reference_id": "DEMO-PLT-01",
        "name": "Broad Flat Platter / Shallow Dish",
        "category": "plate",
        "rim_diameter_range": [220.0, 280.0],
        "height_range": [20.0, 36.0],
        "aspect_ratio_range": [6.5, 9.5],
        "wall_thickness_range": [5.0, 8.0],
        "typical_fabric": ["buff", "coarse sand temper", "matte"],
        "description": "Demonstration reference for a wide communal serving plate with a low, slightly upturned direct rim.",
        "source_citation": "SHERD-FORGE Synthetic Reference Type-Series (Demonstration Only)",
        "source_url": None,
        "schematic_points": [[90.0, 0.0], [115.0, 12.0], [125.0, 26.0]]
    },
    {
        "reference_id": "DEMO-CUP-01",
        "name": "Conical Beaker / Flared Drinking Cup",
        "category": "cup",
        "rim_diameter_range": [75.0, 95.0],
        "height_range": [85.0, 115.0],
        "aspect_ratio_range": [0.75, 1.0],
        "wall_thickness_range": [3.0, 5.0],
        "typical_fabric": ["fine slip", "wheel-thrown", "undecorated"],
        "description": "Demonstration reference for an unhandled drinking vessel with straight diverging walls and a small flat base.",
        "source_citation": "SHERD-FORGE Synthetic Reference Type-Series (Demonstration Only)",
        "source_url": None,
        "schematic_points": [[25.0, 0.0], [32.0, 35.0], [40.0, 70.0], [44.0, 95.0]]
    },
    {
        "reference_id": "DEMO-CUP-02",
        "name": "Bulbous Ovoid Small Cup",
        "category": "cup",
        "rim_diameter_range": [68.0, 88.0],
        "height_range": [65.0, 82.0],
        "aspect_ratio_range": [0.95, 1.25],
        "wall_thickness_range": [3.5, 5.2],
        "typical_fabric": ["terracotta", "smoothed"],
        "description": "Demonstration reference for a small single-portion vessel with a rounded lower body and slightly constricted rim.",
        "source_citation": "SHERD-FORGE Synthetic Reference Type-Series (Demonstration Only)",
        "source_url": None,
        "schematic_points": [[22.0, 0.0], [40.0, 25.0], [42.0, 50.0], [38.0, 72.0]]
    },
    {
        "reference_id": "DEMO-JAR-01",
        "name": "Globular Narrow-Necked Storage Jar",
        "category": "jar",
        "rim_diameter_range": [105.0, 140.0],
        "height_range": [200.0, 270.0],
        "aspect_ratio_range": [0.45, 0.62],
        "wall_thickness_range": [6.0, 9.5],
        "typical_fabric": ["coarse grit", "red-brown", "incised neck"],
        "description": "Demonstration reference for an enclosed liquid container with a pronounced shoulder, cylindrical neck, and out-turned lip.",
        "source_citation": "SHERD-FORGE Synthetic Reference Type-Series (Demonstration Only)",
        "source_url": None,
        "schematic_points": [[45.0, 0.0], [95.0, 80.0], [105.0, 140.0], [60.0, 200.0], [62.0, 230.0]]
    },
    {
        "reference_id": "DEMO-JAR-02",
        "name": "Ovoid Collared Storage Jar",
        "category": "jar",
        "rim_diameter_range": [150.0, 185.0],
        "height_range": [260.0, 330.0],
        "aspect_ratio_range": [0.48, 0.65],
        "wall_thickness_range": [7.0, 11.0],
        "typical_fabric": ["buff", "vegetal temper", "heavy ware"],
        "description": "Demonstration reference for a heavy storage jar with an externally thickened collar rim to support a tie-down stopper.",
        "source_citation": "SHERD-FORGE Synthetic Reference Type-Series (Demonstration Only)",
        "source_url": None,
        "schematic_points": [[55.0, 0.0], [120.0, 110.0], [130.0, 190.0], [80.0, 270.0], [85.0, 290.0]]
    },
    {
        "reference_id": "DEMO-POT-01",
        "name": "Coarse Ware Globular Cooking Pot",
        "category": "cooking pot",
        "rim_diameter_range": [170.0, 215.0],
        "height_range": [140.0, 185.0],
        "aspect_ratio_range": [1.05, 1.35],
        "wall_thickness_range": [5.5, 8.5],
        "typical_fabric": ["gritty buff", "sand temper", "fire-clouded", "coarse"],
        "description": "Demonstration reference for a heat-resistant kitchen pot with a convex base, globular body, and short neck.",
        "source_citation": "SHERD-FORGE Synthetic Reference Type-Series (Demonstration Only)",
        "source_url": None,
        "schematic_points": [[50.0, 0.0], [95.0, 50.0], [105.0, 100.0], [92.0, 145.0], [96.0, 160.0]]
    },
    {
        "reference_id": "DEMO-FLW-01",
        "name": "Conical Horticultural Vessel / Flowerpot",
        "category": "flowerpot",
        "rim_diameter_range": [140.0, 175.0],
        "height_range": [120.0, 155.0],
        "aspect_ratio_range": [1.0, 1.25],
        "wall_thickness_range": [6.0, 9.0],
        "typical_fabric": ["terracotta", "porous", "unpainted"],
        "description": "Demonstration reference for a straight-sided flared utilitarian pot with a thickened exterior rim lip.",
        "source_citation": "SHERD-FORGE Synthetic Reference Type-Series (Demonstration Only)",
        "source_url": None,
        "schematic_points": [[45.0, 0.0], [60.0, 45.0], [72.0, 90.0], [80.0, 135.0]]
    },
    {
        "reference_id": "DEMO-JUG-01",
        "name": "Narrow-Necked Flagon / Juglet",
        "category": "jug",
        "rim_diameter_range": [48.0, 72.0],
        "height_range": [165.0, 215.0],
        "aspect_ratio_range": [0.26, 0.40],
        "wall_thickness_range": [4.0, 6.0],
        "typical_fabric": ["fine pale slip", "single vertical handle"],
        "description": "Demonstration reference for a narrow liquid pouring vessel with a pinched lip and constricted vertical neck.",
        "source_citation": "SHERD-FORGE Synthetic Reference Type-Series (Demonstration Only)",
        "source_url": None,
        "schematic_points": [[30.0, 0.0], [70.0, 60.0], [75.0, 110.0], [28.0, 160.0], [30.0, 185.0]]
    }
]

ARCHAEOLOGICAL_REFERENCE_JSON_SCHEMA = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "ArchaeologicalPotteryTypologyReference",
    "description": "Schema for verifiable, sourced archaeological pottery typology reference records.",
    "type": "object",
    "required": ["reference_id", "name", "category", "source_citation", "rim_diameter_range", "schematic_points"],
    "properties": {
        "reference_id": {"type": "string", "pattern": "^[A-Z0-9_-]+$"},
        "name": {"type": "string"},
        "category": {"type": "string", "enum": ["bowl", "plate", "cup", "jar", "cooking pot", "flowerpot", "jug", "other"]},
        "source_citation": {"type": "string"},
        "source_url": {"type": ["string", "null"], "format": "uri"},
        "profile_image_url": {"type": ["string", "null"]},
        "rim_diameter_range": {"type": "array", "items": {"type": "number"}, "minItems": 2, "maxItems": 2},
        "height_range": {"type": ["array", "null"], "items": {"type": "number"}, "minItems": 2, "maxItems": 2},
        "wall_thickness_range": {"type": ["array", "null"], "items": {"type": "number"}, "minItems": 2, "maxItems": 2},
        "fabric_descriptors": {"type": "array", "items": {"type": "string"}},
        "date_range": {
            "type": ["object", "null"],
            "properties": {
                "start_year": {"type": "integer"},
                "end_year": {"type": "integer"},
                "period_label": {"type": "string"}
            }
        },
        "provenance": {
            "type": ["object", "null"],
            "properties": {
                "site_name": {"type": "string"},
                "region": {"type": "string"},
                "context": {"type": "string"}
            }
        },
        "schematic_points": {
            "type": "array",
            "items": {"type": "array", "items": {"type": "number"}, "minItems": 2, "maxItems": 2}
        }
    }
}

def match_typology(
    profile: ReconstructionProfile,
    observations: Optional[VisibleObservations] = None,
    custom_references: Optional[List[Dict[str, Any]]] = None
) -> List[TypologyCandidate]:
    """
    Ranks reference catalogue candidates against current reconstructed vessel dimensions and visible features.
    Returns up to 3 candidates with supporting evidence, contradictions, and missing data.
    """
    catalog = list(DEMONSTRATION_CATALOGUE)
    if custom_references:
        catalog.extend(custom_references)

    target_rim_d = profile.rim_diameter_mm
    target_h = profile.height_mm
    target_aspect = target_rim_d / max(10.0, target_h)
    target_wall = profile.wall_thickness_mm

    candidates_scored = []

    for entry in catalog:
        supporting = []
        contradictions = []
        missing = []

        scores = []
        weights = []

        # 1. Rim Diameter match
        r_min, r_max = entry["rim_diameter_range"]
        r_mid = (r_min + r_max) / 2.0
        if r_min <= target_rim_d <= r_max:
            scores.append(1.0)
            weights.append(0.40)
            supporting.append(f"Rim diameter {target_rim_d:.1f}mm fits reference range [{r_min:.0f}–{r_max:.0f}mm].")
        else:
            diff = min(abs(target_rim_d - r_min), abs(target_rim_d - r_max))
            score_r = max(0.0, float(np.exp(-diff / 25.0)))
            scores.append(score_r)
            weights.append(0.40)
            if diff > 30.0:
                contradictions.append(f"Rim diameter {target_rim_d:.1f}mm differs substantially from range [{r_min:.0f}–{r_max:.0f}mm].")
            else:
                supporting.append(f"Rim diameter {target_rim_d:.1f}mm is close to range boundary (diff {diff:.1f}mm).")

        # 2. Height and Aspect Ratio
        if "aspect_ratio_range" in entry and entry["aspect_ratio_range"]:
            asp_min, asp_max = entry["aspect_ratio_range"]
            if profile.source == "user_entered" and profile.rim_fit_evidence:
                missing.append("Vessel height is unmeasured from photograph; aspect ratio score is hypothetical.")
                weights.append(0.15)
                scores.append(0.6)
            else:
                if asp_min <= target_aspect <= asp_max:
                    scores.append(1.0)
                    weights.append(0.30)
                    supporting.append(f"Aspect ratio (Ø/H = {target_aspect:.2f}) matches profile proportion [{asp_min:.2f}–{asp_max:.2f}].")
                else:
                    asp_diff = min(abs(target_aspect - asp_min), abs(target_aspect - asp_max))
                    score_asp = max(0.0, float(np.exp(-asp_diff / 0.6)))
                    scores.append(score_asp)
                    weights.append(0.30)
                    if asp_diff > 0.8:
                        contradictions.append(f"Proportions differ: Ø/H is {target_aspect:.2f} vs expected [{asp_min:.2f}–{asp_max:.2f}].")

        # 3. Wall thickness check
        if "wall_thickness_range" in entry and entry["wall_thickness_range"]:
            wt_min, wt_max = entry["wall_thickness_range"]
            if wt_min <= target_wall <= wt_max:
                supporting.append(f"Wall thickness {target_wall:.1f}mm aligns with fabric norms [{wt_min:.1f}–{wt_max:.1f}mm].")
            elif target_wall > wt_max + 2.0:
                contradictions.append(f"Wall thickness {target_wall:.1f}mm is significantly thicker than typical [{wt_min:.1f}–{wt_max:.1f}mm].")

        # 4. Visible observations (finish, fabric)
        if observations and observations.finish:
            obs_finish = observations.finish.lower()
            matched_fabric = any(term in obs_finish for term in entry.get("typical_fabric", []))
            if matched_fabric:
                scores.append(1.0)
                weights.append(0.20)
                supporting.append(f"Observed finish '{observations.finish}' matches fabric descriptors.")
            else:
                scores.append(0.4)
                weights.append(0.15)

        total_weight = sum(weights) if weights else 1.0
        final_score = sum(s * w for s, w in zip(scores, weights)) / total_weight
        final_score = round(max(0.0, min(1.0, final_score)), 3)

        dim_summary = f"Ø {r_min:.0f}–{r_max:.0f}mm"
        if "height_range" in entry and entry["height_range"]:
            dim_summary += f", H {entry['height_range'][0]:.0f}–{entry['height_range'][1]:.0f}mm"

        candidates_scored.append({
            "candidate": TypologyCandidate(
                reference_id=entry["reference_id"],
                name=entry["name"],
                category=entry["category"],
                compatibility_score=final_score,
                supporting_features=supporting,
                contradictions=contradictions,
                missing_evidence=missing,
                source_citation=entry["source_citation"],
                source_url=entry.get("source_url"),
                dimensions_summary=dim_summary,
                description=entry["description"],
                schematic_profile_points=entry["schematic_points"],
                explanation=f"Ranked with compatibility score {final_score:.2f} based on rim diameter and available profile geometry."
            ),
            "score": final_score
        })

    candidates_scored.sort(key=lambda x: x["score"], reverse=True)
    top_candidates = [item["candidate"] for item in candidates_scored[:3]]

    # If top score is below threshold, add explanation of insufficiency
    if top_candidates and top_candidates[0].compatibility_score < 0.40:
        for c in top_candidates:
            c.explanation = "INSUFFICIENT EVIDENCE / NO STRONG MATCH: Current fragment dimensions fall outside the standard ranges of demonstration forms."

    return top_candidates
