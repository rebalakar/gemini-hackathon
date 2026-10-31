import os
import json
import base64
from typing import Dict, Any, Optional, List
from .config import GEMINI_API_KEY, GEMINI_MODEL

class GeminiAdapter:
    def __init__(self):
        self.api_key = GEMINI_API_KEY
        self.model_name = GEMINI_MODEL or "gemini-4-argon"
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

    def set_api_key(self, api_key: str, model_name: Optional[str] = None) -> bool:
        """
        Dynamically updates the Gemini API key (and optionally model) in memory.
        """
        api_key = api_key.strip()
        if not api_key:
            self.api_key = ""
            self._client = None
            return False
        self.api_key = api_key
        if model_name:
            self.model_name = model_name.strip()
        try:
            from google import genai
            self._client = genai.Client(api_key=self.api_key)
            return True
        except Exception as e:
            print(f"[GeminiAdapter] Initialization error with provided key: {e}")
            self._client = None
            return False

    @staticmethod
    def _extract_interaction_text(interaction: Any) -> str:
        if getattr(interaction, "output_text", None):
            return interaction.output_text.strip()
        if hasattr(interaction, "steps") and interaction.steps:
            for step in reversed(interaction.steps):
                if getattr(step, "type", None) == "model_output" and getattr(step, "content", None):
                    for part in step.content:
                        if getattr(part, "text", None):
                            return part.text.strip()
        if hasattr(interaction, "outputs") and interaction.outputs:
            for out in reversed(interaction.outputs):
                if getattr(out, "text", None):
                    return out.text.strip()
        if hasattr(interaction, "text") and interaction.text:
            return interaction.text.strip()
        return ""

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
            b64_data = base64.b64encode(image_bytes).decode("ascii")
            interaction = self._client.interactions.create(
                model=self.model_name,
                input=[
                    {
                        "type": "image",
                        "data": b64_data,
                        "mime_type": mime_type,
                    },
                    {
                        "type": "text",
                        "text": prompt,
                    },
                ],
                generation_config={"thinking_level": "low"},
            )

            text = self._extract_interaction_text(interaction)
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
            interaction = self._client.interactions.create(
                model=self.model_name,
                input=prompt,
                generation_config={"thinking_level": "medium"},
            )
            text = self._extract_interaction_text(interaction)
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
