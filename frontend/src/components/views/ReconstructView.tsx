import React, { useState, useRef, useEffect } from 'react';
import { Project, ReconstructionProfile, RimArcFittingResult } from '../../types';
import { ThreeViewer } from '../ThreeViewer';
import { RimArcFitterModal } from '../RimArcFitterModal';
import {
  Box, Sliders, Disc, Download, ArrowRight, Eye, RefreshCw, Plus, Trash2, Split
} from 'lucide-react';
import { api } from '../../api';

interface ReconstructViewProps {
  project: Project;
  profile: ReconstructionProfile | null;
  onProfileUpdated: (profile: ReconstructionProfile) => void;
  onNextStep: () => void;
}

export const ReconstructView: React.FC<ReconstructViewProps> = ({
  project,
  profile,
  onProfileUpdated,
  onNextStep,
}) => {
  const [localProfile, setLocalProfile] = useState<ReconstructionProfile>(
    profile || {
      id: `rec_${project.id}`,
      project_id: project.id,
      source: 'user_entered',
      rim_diameter_mm: 180.0,
      height_mm: 75.0,
      wall_thickness_mm: 5.0,
      points: [
        [40.0, 0.0],
        [60.0, 15.0],
        [85.0, 40.0],
        [90.0, 75.0],
      ],
    }
  );

  const [halfSection, setHalfSection] = useState<boolean>(false);
  const [isFitterOpen, setIsFitterOpen] = useState<boolean>(false);
  const [selectedPointIdx, setSelectedPointIdx] = useState<number | null>(null);

  useEffect(() => {
    if (profile) setLocalProfile(profile);
  }, [profile]);

  const updateParam = (field: keyof ReconstructionProfile, value: any) => {
    const updated = { ...localProfile, [field]: value };
    // If rim diameter changes, adjust top point radius
    if (field === 'rim_diameter_mm') {
      const newRadius = value / 2.0;
      const pts = [...updated.points];
      if (pts.length > 0) {
        pts[pts.length - 1] = [newRadius, updated.height_mm];
        updated.points = pts;
      }
    }
    // If height changes, adjust top point height
    if (field === 'height_mm') {
      const pts = [...updated.points];
      if (pts.length > 0) {
        pts[pts.length - 1] = [pts[pts.length - 1][0], value];
        updated.points = pts;
      }
    }
    setLocalProfile(updated);
    onProfileUpdated(updated);
    api.updateReconstruction(project.id, updated);
  };

  const handlePointDrag = (idx: number, newR: number, newH: number) => {
    const pts = [...localProfile.points];
    pts[idx] = [Math.max(5.0, Number(newR.toFixed(1))), Math.max(0.0, Number(newH.toFixed(1)))];
    const updated = { ...localProfile, points: pts };
    setLocalProfile(updated);
    onProfileUpdated(updated);
    api.updateReconstruction(project.id, updated);
  };

  const handleAddControlPoint = () => {
    const pts = [...localProfile.points];
    const n = pts.length;
    if (n < 2) return;
    const midIdx = Math.floor(n / 2);
    const p1 = pts[midIdx - 1];
    const p2 = pts[midIdx];
    const newPt: [number, number] = [
      Number(((p1[0] + p2[0]) / 2).toFixed(1)),
      Number(((p1[1] + p2[1]) / 2).toFixed(1)),
    ];
    pts.splice(midIdx, 0, newPt);
    const updated = { ...localProfile, points: pts };
    setLocalProfile(updated);
    onProfileUpdated(updated);
    api.updateReconstruction(project.id, updated);
  };

  const handleDeleteControlPoint = (idx: number) => {
    if (localProfile.points.length <= 2) {
      alert('A vessel profile requires at least 2 control points (base and rim).');
      return;
    }
    const pts = localProfile.points.filter((_, i) => i !== idx);
    const updated = { ...localProfile, points: pts };
    setLocalProfile(updated);
    onProfileUpdated(updated);
    api.updateReconstruction(project.id, updated);
    setSelectedPointIdx(null);
  };

  const handleApplyRimDiameter = (diameterMm: number, evidence: RimArcFittingResult) => {
    const updated = {
      ...localProfile,
      rim_diameter_mm: diameterMm,
      rim_fit_evidence: evidence,
      source: 'measured_side_profile' as const,
    };
    const newRadius = diameterMm / 2.0;
    const pts = [...updated.points];
    if (pts.length > 0) {
      pts[pts.length - 1] = [newRadius, updated.height_mm];
      updated.points = pts;
    }
    setLocalProfile(updated);
    onProfileUpdated(updated);
    api.updateReconstruction(project.id, updated);
  };

  const handleDownloadSvg = () => {
    window.open(`/api/projects/${project.id}/reconstruction/svg`, '_blank');
  };

  return (
    <div className="flex-1 flex flex-col p-6 overflow-y-auto space-y-4">
      {/* Top Banner Toolbar */}
      <div className="bg-white border border-parchment-300 rounded-lg p-3 shadow-2xs flex items-center justify-between">
        <div className="flex items-center space-x-6 text-xs">
          {/* Profile Source */}
          <div className="flex items-center space-x-2">
            <span className="text-charcoal-500 font-medium">Profile Evidence Source:</span>
            <select
              value={localProfile.source}
              onChange={(e) => updateParam('source', e.target.value)}
              className="bg-parchment-50 border border-parchment-300 rounded px-2.5 py-1 text-charcoal-800 font-semibold"
            >
              <option value="user_entered">User-Entered Hypothetical</option>
              <option value="measured_side_profile">Measured Side Profile / Rim Fit</option>
              <option value="catalogue_template">Reference Catalogue Template</option>
            </select>
          </div>

          <button
            onClick={() => setIsFitterOpen(true)}
            className="flex items-center space-x-1.5 bg-terracotta-50 hover:bg-terracotta-100 text-terracotta-800 border border-terracotta-300 px-3 py-1.5 rounded-md font-semibold transition shadow-xs"
          >
            <Disc className="w-3.5 h-3.5 text-terracotta-600" />
            <span>Fit Rim Arc on Photograph</span>
          </button>

          {/* Half Section Toggle */}
          <button
            onClick={() => setHalfSection((h) => !h)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md border text-xs font-medium transition ${
              halfSection
                ? 'bg-charcoal-800 text-white border-charcoal-800'
                : 'bg-parchment-100 text-charcoal-700 border-parchment-300'
            }`}
          >
            <Split className="w-3.5 h-3.5" />
            <span>{halfSection ? 'Half-Section Cutaway' : '360° Full Revolve'}</span>
          </button>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <button
            onClick={handleDownloadSvg}
            className="flex items-center space-x-1.5 bg-white hover:bg-parchment-50 text-charcoal-700 border border-parchment-300 px-3 py-1.5 rounded-md font-semibold transition shadow-xs"
          >
            <Download className="w-3.5 h-3.5 text-terracotta-600" />
            <span>Export SVG Drawing</span>
          </button>

          <button
            onClick={onNextStep}
            className="bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition"
          >
            <span>Compare Typology</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Reconstruction Workspace */}
      <div className="flex-1 grid grid-cols-12 gap-5 min-h-[560px]">
        {/* Profile Control Points & Parameters Panel */}
        <div className="col-span-5 bg-white rounded-xl border border-parchment-300 p-5 shadow-2xs flex flex-col justify-between overflow-y-auto space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-parchment-300">
              <h3 className="font-semibold text-charcoal-900 text-sm">Profile Geometry (mm)</h3>
              <span className="text-[10px] font-mono bg-parchment-200 px-2 py-0.5 rounded text-charcoal-600">
                Rotational Lathe
              </span>
            </div>

            {/* Dimensional Sliders */}
            <div className="space-y-3 bg-parchment-50/70 p-3.5 rounded-lg border border-parchment-200 text-xs font-mono">
              {/* Rim Diameter */}
              <div>
                <div className="flex justify-between text-charcoal-700 mb-1">
                  <span>Rim Diameter (Ø):</span>
                  <span className="font-bold text-charcoal-900">{localProfile.rim_diameter_mm.toFixed(1)} mm</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="350"
                  step="1"
                  value={localProfile.rim_diameter_mm}
                  onChange={(e) => updateParam('rim_diameter_mm', parseFloat(e.target.value))}
                  className="w-full accent-terracotta-600"
                />
              </div>

              {/* Height */}
              <div>
                <div className="flex justify-between text-charcoal-700 mb-1">
                  <span>Vessel Height (H):</span>
                  <span className="font-bold text-charcoal-900">{localProfile.height_mm.toFixed(1)} mm</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="400"
                  step="1"
                  value={localProfile.height_mm}
                  onChange={(e) => updateParam('height_mm', parseFloat(e.target.value))}
                  className="w-full accent-terracotta-600"
                />
              </div>

              {/* Wall Thickness */}
              <div>
                <div className="flex justify-between text-charcoal-700 mb-1">
                  <span>Wall Thickness (t):</span>
                  <span className="font-bold text-charcoal-900">{localProfile.wall_thickness_mm.toFixed(1)} mm</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="16"
                  step="0.5"
                  value={localProfile.wall_thickness_mm}
                  onChange={(e) => updateParam('wall_thickness_mm', parseFloat(e.target.value))}
                  className="w-full accent-terracotta-600"
                />
              </div>
            </div>

            {/* Profile Points List & Control */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-mono uppercase font-bold text-charcoal-500">
                  Control Points (Radius, Height in mm)
                </span>
                <button
                  onClick={handleAddControlPoint}
                  className="text-xs text-terracotta-700 hover:text-terracotta-900 font-semibold flex items-center space-x-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Point</span>
                </button>
              </div>

              <div className="space-y-1.5 max-h-48 overflow-y-auto">
                {localProfile.points.map(([r, h], idx) => {
                  const isSelected = selectedPointIdx === idx;
                  const isBase = idx === 0;
                  const isRim = idx === localProfile.points.length - 1;

                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedPointIdx(idx)}
                      className={`flex items-center justify-between px-3 py-1.5 rounded text-xs font-mono border transition ${
                        isSelected
                          ? 'bg-terracotta-50 border-terracotta-400'
                          : 'bg-white border-parchment-300 hover:bg-parchment-50'
                      }`}
                    >
                      <span className="text-charcoal-500 text-[10px]">
                        {isBase ? 'Base' : isRim ? 'Rim' : `Pt ${idx + 1}`}:
                      </span>
                      <div className="flex items-center space-x-2">
                        <span>r:</span>
                        <input
                          type="number"
                          step="0.5"
                          value={r}
                          onChange={(e) => handlePointDrag(idx, parseFloat(e.target.value) || 0, h)}
                          className="w-14 bg-parchment-50 border border-parchment-200 rounded px-1 py-0.5 text-right"
                        />
                        <span>h:</span>
                        <input
                          type="number"
                          step="0.5"
                          value={h}
                          disabled={isBase}
                          onChange={(e) => handlePointDrag(idx, r, parseFloat(e.target.value) || 0)}
                          className="w-14 bg-parchment-50 border border-parchment-200 rounded px-1 py-0.5 text-right disabled:opacity-50"
                        />
                      </div>
                      {!isBase && !isRim && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteControlPoint(idx);
                          }}
                          className="text-red-500 hover:text-red-700 p-0.5"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Rim Fit Evidence Box if present */}
            {localProfile.rim_fit_evidence && (
              <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-3 text-xs font-mono space-y-1">
                <div className="text-emerald-900 font-bold">ARC-FIT EVIDENCE ATTACHED</div>
                <div className="text-emerald-800 text-[11px]">
                  Fitted Ø: {localProfile.rim_fit_evidence.diameter_mm?.toFixed(1)} mm • Arc coverage:{' '}
                  {localProfile.rim_fit_evidence.arc_coverage_deg.toFixed(1)}°
                </div>
              </div>
            )}
          </div>

          <div className="text-[11px] text-charcoal-400 italic leading-tight">
            Standard archaeological practice: The 3D model presents a rotationally symmetric hypothesis. Inferred geometry
            is rendered translucently.
          </div>
        </div>

        {/* Three.js 3D Viewer */}
        <div className="col-span-7 bg-charcoal-900 rounded-xl overflow-hidden border border-charcoal-700 shadow-inner flex flex-col">
          <ThreeViewer profile={localProfile} halfSection={halfSection} />
        </div>
      </div>

      {/* Rim Arc Fitter Modal */}
      <RimArcFitterModal
        project={project}
        isOpen={isFitterOpen}
        onClose={() => setIsFitterOpen(false)}
        onApplyDiameter={handleApplyRimDiameter}
      />
    </div>
  );
};
