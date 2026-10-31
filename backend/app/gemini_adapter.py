import os
import json
from typing import Dict, Any, Optional, List
from .config import GEMINI_API_KEY, GEMINI_MODEL

class GeminiAdapter:
    def __init__(self):
        self.api_key = GEMINI_API_KEY
        self.model_name = GEMINI_MODEL
        self._client = None
        if self.api_key:
            try:
                from google import genai
                self._client = genai.Client(api_key=self.api_key)
            except Exception as e:
                print(f"[GeminiAdapter] Initialization warning: {e}")
                self._client = None

    def is_available(self) -> bool:
        return self._client is not None and bool(self.api_key)

    def analyze_fragment(self, image_bytes: bytes, mime_type: str = "image/png") -> Dict[str, Any]:
        """
        Requests editable observations of visible color, finish, decoration, and likely anatomical part.
        Returns a dictionary or fallback message if offline.
        """
        if not self.is_available():
            return {
                "available": False,
                "reason": "Gemini API key is not configured. Using deterministic computer vision and manual observation mode."
            }

        prompt = (
            "You are an archaeological ceramics assistant. Examine this ceramic fragment crop. "
            "Provide structured, objective observations strictly based on what is visible. "
            "Do NOT invent findspots, cultures, or dates. Return ONLY valid JSON with these fields:\n"
            "{\n"
            '  "color_desc": "short description of visible clay body / slip color",\n'
            '  "finish": "e.g. burnished, matte slip, coarse gritted, smoothed",\n'
            '  "decoration": "e.g. incised horizontal lines, painted band, undecorated",\n'
            '  "likely_part": "rim" | "body" | "base" | "handle" | "unknown",\n'
            '  "notes": "brief observational comments on fracture edges or surface inclusions"\n'
            "}"
        )

        try:
            from google.genai import types
            response = self._client.models.generate_content(
                model=self.model_name,
                contents=[
                    types.Part.from_bytes(data=image_bytes, mime_type=mime_type),
                    prompt
                ]
            )

            text = response.text.strip()
            # Clean markdown code block formatting if present
            if text.startswith("```"):
                lines = text.splitlines()
                if lines[0].startswith("```"):
                    lines = lines[1:]
                if lines and lines[-1].startswith("```"):
                    lines = lines[:-1]
                text = "\n".join(lines).strip()

            parsed = json.loads(text)
            parsed["available"] = True
            parsed["ai_generated"] = True
            return parsed
        except Exception as e:
            return {
                "available": False,
                "reason": f"Gemini API request failed: {str(e)}. Fallback to manual entry active."
            }

    def explain_typology_match(
        self,
        vessel_summary: Dict[str, Any],
        top_candidates: List[Dict[str, Any]]
    ) -> Dict[str, Any]:
        """
        Synthesizes an archaeological comparison explanation strictly based on retrieved demonstration references.
        Must not invent dates or provenance.
        """
        if not self.is_available():
            return {
                "available": False,
                "reason": "Gemini API key not configured. Using rule-based algorithmic candidate explanations."
            }

        prompt = (
            "You are an archaeological ceramic typologist. Analyze this pottery reconstruction hypothesis against retrieved candidates.\n"
            f"Vessel measurements: Rim diameter {vessel_summary.get('rim_diameter_mm')}mm, Height {vessel_summary.get('height_mm')}mm, Wall {vessel_summary.get('wall_thickness_mm')}mm.\n"
            f"Retrieved reference forms:\n{json.dumps(top_candidates, indent=2)}\n\n"
            "Provide a concise, nuanced explanation of which candidate form is best supported, noting uncertainties and missing profile elements. "
            "Strictly adhere to the provided reference data. DO NOT invent archaeological dates, periods, or historical sites. "
            "Return JSON:\n"
            '{"summary": "concise synthesized archaeological reasoning", "key_uncertainty": "what is missing to confirm"}'
        )

        try:
            response = self._client.models.generate_content(
                model=self.model_name,
                contents=[prompt]
            )
            text = response.text.strip()
            if text.startswith("```"):
                lines = text.splitlines()
                if lines[0].startswith("```"):
                    lines = lines[1:]
                if lines and lines[-1].startswith("```"):
                    lines = lines[:-1]
                text = "\n".join(lines).strip()

            data = json.loads(text)
            data["available"] = True
            return data
        except Exception as e:
            return {
                "available": False,
                "reason": f"Gemini explanation unavailable: {str(e)}"
            }

gemini_adapter = GeminiAdapter()
