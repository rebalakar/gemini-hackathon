import React, { useState, useRef } from 'react';
import { Project, RimArcFittingResult } from '../types';
import { Crosshair, AlertTriangle, Check, X, RefreshCw, Disc } from 'lucide-react';
import { api } from '../api';

interface RimArcFitterModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
  onApplyDiameter: (diameterMm: number, evidence: RimArcFittingResult) => void;
}

export const RimArcFitterModal: React.FC<RimArcFitterModalProps> = ({
  project,
  isOpen,
  onClose,
  onApplyDiameter,
}) => {
  const [points, setPoints] = useState<[number, number][]>([]);
  const [result, setResult] = useState<RimArcFittingResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  if (!isOpen) return null;

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const naturalW = imgRef.current.naturalWidth;
    const naturalH = imgRef.current.naturalHeight;

    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const scaleX = naturalW / rect.width;
    const scaleY = naturalH / rect.height;

    const origX = Math.round(clickX * scaleX);
    const origY = Math.round(clickY * scaleY);

    const newPts: [number, number][] = [...points, [origX, origY]];
    setPoints(newPts);

    if (newPts.length >= 3) {
      calculateFit(newPts);
    }
  };

  const calculateFit = async (pts: [number, number][]) => {
    setIsCalculating(true);
    try {
      const res = await api.calculateRimArcFit(project.id, pts);
      setResult(res);
    } catch (err: any) {
      console.warn(err);
    } finally {
      setIsCalculating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/70 backdrop-blur-xs p-6">
      <div className="bg-white rounded-xl shadow-2xl border border-parchment-300 w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-parchment-100 border-b border-parchment-300 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-terracotta-100 text-terracotta-700 rounded-lg">
              <Disc className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-semibold text-charcoal-900 text-sm">Rim Diameter Estimation via Arc Fitting</h2>
              <p className="text-xs text-charcoal-500">
                Click 3 or more points along the preserved curved rim lip to fit an algebraic circle.
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 text-charcoal-400 hover:text-charcoal-700 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 flex-1 overflow-y-auto flex space-x-6">
          {/* Photo Canvas */}
          <div className="flex-1 bg-charcoal-900 rounded-lg overflow-hidden relative flex items-center justify-center p-2 min-h-[380px]">
            <div className="relative inline-block max-w-full max-h-full">
              <img
                ref={imgRef}
                src={project.primary_photo_url || ''}
                alt="Rim Arc"
                onClick={handleImageClick}
                className="max-w-full max-h-[440px] object-contain rounded cursor-crosshair select-none"
              />

              {/* Point Markers and Fitted Circle Overlay */}
              <svg
                className="absolute inset-0 pointer-events-none w-full h-full"
                viewBox={`0 0 ${project.primary_photo_dimensions?.[0] || 1600} ${project.primary_photo_dimensions?.[1] || 1200}`}
              >
                {points.map((p, idx) => (
                  <circle
                    key={idx}
                    cx={p[0]}
                    cy={p[1]}
                    r="8"
                    fill="#C85A32"
                    stroke="#FFFFFF"
                    strokeWidth="2.5"
                  />
                ))}

                {result && (
                  <circle
                    cx={result.center_x}
                    cy={result.center_y}
                    r={result.radius_px}
                    fill="none"
                    stroke="#28A745"
                    strokeWidth="3.5"
                    strokeDasharray="6,4"
                  />
                )}
              </svg>
            </div>
          </div>

          {/* Results & Guidelines Sidebar */}
          <div className="w-72 space-y-4 text-xs font-mono">
            <div className="bg-parchment-50 rounded-lg p-3 border border-parchment-300 space-y-2">
              <div className="flex justify-between font-bold text-charcoal-900 text-sm">
                <span>Points Selected:</span>
                <span className="text-terracotta-600">{points.length}</span>
              </div>

              {result ? (
                <div className="space-y-1.5 pt-2 border-t border-parchment-200">
                  <div className="flex justify-between text-xs">
                    <span className="text-charcoal-500">Estimated Rim Ø:</span>
                    <span className="font-bold text-emerald-800 text-sm">
                      {result.diameter_mm ? `${result.diameter_mm.toFixed(1)} mm` : `${(result.radius_px * 2).toFixed(0)} px`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-500">Arc Coverage:</span>
                    <span className="font-semibold text-charcoal-800">{result.arc_coverage_deg.toFixed(1)}°</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-charcoal-500">Fit RMSE:</span>
                    <span>{result.rmse_residual_mm ? `${result.rmse_residual_mm.toFixed(2)} mm` : `${result.rmse_residual_px.toFixed(1)} px`}</span>
                  </div>
                </div>
              ) : (
                <p className="text-charcoal-500 font-sans italic text-[11px]">
                  Click points spaced along the preserved rim lip to calculate diameter.
                </p>
              )}
            </div>

            {/* Quality Warnings */}
            {result?.quality_warning && (
              <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 text-[11px] font-sans text-amber-900 flex items-start space-x-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{result.quality_warning}</span>
              </div>
            )}

            <div className="text-[11px] font-sans text-charcoal-500 space-y-1 bg-white p-3 rounded-lg border border-parchment-300 leading-normal">
              <p className="font-semibold text-charcoal-800">Methodological Caution:</p>
              <p>
                Rims viewed obliquely appear as ellipses. True rim diameter fitting requires an orthogonal overhead view
                aligned with the vessel orifice plane.
              </p>
            </div>

            <div className="space-x-2 flex">
              <button
                onClick={() => {
                  setPoints([]);
                  setResult(null);
                }}
                className="flex-1 bg-parchment-100 hover:bg-parchment-200 text-charcoal-700 py-2 rounded font-sans text-xs transition"
              >
                Clear Points
              </button>
              {result && result.diameter_mm && (
                <button
                  onClick={() => {
                    onApplyDiameter(result.diameter_mm!, result);
                    onClose();
                  }}
                  className="flex-1 bg-terracotta-600 hover:bg-terracotta-700 text-white py-2 rounded font-sans text-xs font-semibold transition"
                >
                  Apply Ø
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
