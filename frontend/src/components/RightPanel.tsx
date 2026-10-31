import React, { useState } from 'react';
import { Fragment, VesselGroup, AdditionalPhoto, Project } from '../types';
import {
  Info, Tag, Sparkles, Upload, Image as ImageIcon,
  CheckCircle, ShieldAlert, Edit3, X, Sliders
} from 'lucide-react';
import { api } from '../api';

interface RightPanelProps {
  selectedFragment: Fragment | null;
  groups: VesselGroup[];
  photos: AdditionalPhoto[];
  project: Project | null;
  onUpdateFragment: (fragment: Fragment) => void;
  onDeselect: () => void;
  onPhotoUploaded: () => void;
}

export const RightPanel: React.FC<RightPanelProps> = ({
  selectedFragment,
  groups,
  photos,
  project,
  onUpdateFragment,
  onDeselect,
  onPhotoUploaded,
}) => {
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [uploadRole, setUploadRole] = useState<'outer_face' | 'inner_face' | 'side' | 'fracture'>('side');
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);

  if (!selectedFragment) {
    return (
      <aside className="w-80 bg-parchment-100 border-l border-parchment-300 p-5 flex flex-col justify-between text-charcoal-700 select-text overflow-y-auto">
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-charcoal-500 font-semibold mb-3">
            Evidence Inspector
          </h3>
          <div className="bg-white rounded-lg p-4 border border-parchment-300 shadow-2xs space-y-3">
            <div className="flex items-center space-x-2 text-terracotta-600">
              <Info className="w-4 h-4 shrink-0" />
              <span className="text-xs font-semibold">No Fragment Selected</span>
            </div>
            <p className="text-xs text-charcoal-600 leading-relaxed">
              Click any fragment on the central workspace or group list to inspect computed contour metrics, edit
              observations, mark fracture edges, or attach multi-view photographs.
            </p>
          </div>

          {/* Project Summary Evidence Box */}
          <div className="mt-6 space-y-3">
            <h4 className="text-[11px] font-mono uppercase text-charcoal-400 font-semibold">Current Context</h4>
            <div className="bg-white rounded-lg p-3 border border-parchment-300 text-xs space-y-2 font-mono">
              <div className="flex justify-between">
                <span className="text-charcoal-400">Scale Status:</span>
                <span className={project?.calibration.is_calibrated ? 'text-emerald-700 font-semibold' : 'text-amber-700'}>
                  {project?.calibration.is_calibrated ? `${project.calibration.px_per_mm?.toFixed(2)} px/mm` : 'Uncalibrated'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-charcoal-400">Reference Plane:</span>
                <span className="text-charcoal-700">Flat Table View</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-parchment-300 pt-4 text-[11px] text-charcoal-500 leading-normal">
          <p className="italic">
            Archaeological note: Silhouette contours provide projected 2D boundaries. Wall thickness and curvature must
            be verified with profile or fracture photographs.
          </p>
        </div>
      </aside>
    );
  }

  const assignedGroup = groups.find((g) => g.id === selectedFragment.group_id);
  const fragmentPhotos = photos.filter((p) => p.fragment_id === selectedFragment.id);

  const handleFieldChange = (field: string, value: any) => {
    const updated = {
      ...selectedFragment,
      observations: {
        ...selectedFragment.observations,
        [field]: value,
      },
    };
    onUpdateFragment(updated);
  };

  const handleAiAnalyze = async () => {
    if (!project) return;
    setIsAiLoading(true);
    try {
      const res = await api.aiAnalyzeFragment(project.id, selectedFragment.id);
      if (res.available) {
        onUpdateFragment({
          ...selectedFragment,
          observations: {
            ...selectedFragment.observations,
            color_desc: res.color_desc || selectedFragment.observations.color_desc,
            finish: res.finish || selectedFragment.observations.finish,
            decoration: res.decoration || selectedFragment.observations.decoration,
            likely_part: res.likely_part || selectedFragment.observations.likely_part,
            notes: (selectedFragment.observations.notes || '') + ' ' + (res.notes || ''),
            ai_generated: true,
          },
        });
      } else {
        alert(res.reason || 'AI analysis unavailable');
      }
    } catch (e: any) {
      alert(`AI request failed: ${e.message}`);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleAddPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!project || !e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setIsUploadingPhoto(true);
    try {
      await api.uploadAdditionalPhoto(project.id, file, uploadRole, selectedFragment.id, `Manual ${uploadRole} view`);
      onPhotoUploaded();
    } catch (err: any) {
      alert(`Upload failed: ${err.message}`);
    } finally {
      setIsUploadingPhoto(false);
    }
  };

  return (
    <aside className="w-88 bg-parchment-100 border-l border-parchment-300 flex flex-col justify-between text-charcoal-800 select-text overflow-y-auto">
      <div className="p-4 space-y-4">
        {/* Header with Fragment ID & Close */}
        <div className="flex items-center justify-between pb-3 border-b border-parchment-300">
          <div className="flex items-center space-x-2">
            <span className="text-base font-mono font-bold text-charcoal-900 bg-white px-2 py-0.5 rounded border border-parchment-300 shadow-2xs">
              {selectedFragment.id}
            </span>
            {assignedGroup ? (
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full text-white flex items-center space-x-1"
                style={{ backgroundColor: assignedGroup.color_hex }}
              >
                <Tag className="w-3 h-3" />
                <span>{assignedGroup.name}</span>
              </span>
            ) : (
              <span className="text-xs text-charcoal-500 bg-parchment-200 px-2 py-0.5 rounded">Unassigned</span>
            )}
          </div>
          <button onClick={onDeselect} className="p-1 text-charcoal-400 hover:text-charcoal-700 rounded">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Thumbnail & Computed Metrics */}
        <div className="bg-white rounded-lg p-3 border border-parchment-300 shadow-2xs flex space-x-3">
          <div className="w-20 h-20 rounded bg-parchment-100 border border-parchment-200 flex items-center justify-center overflow-hidden p-1 shrink-0">
            <img src={selectedFragment.crop_url} alt={selectedFragment.id} className="max-w-full max-h-full object-contain" />
          </div>
          <div className="text-[11px] font-mono space-y-1 flex-1">
            <div className="flex justify-between">
              <span className="text-charcoal-400">Area:</span>
              <span className="font-semibold text-charcoal-800">
                {selectedFragment.area_mm2 ? `${selectedFragment.area_mm2} mm²` : `${selectedFragment.area_px} px`}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-charcoal-400">Perimeter:</span>
              <span className="text-charcoal-800">
                {selectedFragment.perimeter_mm ? `${selectedFragment.perimeter_mm} mm` : `${selectedFragment.perimeter_px} px`}
              </span>
            </div>
            {selectedFragment.features.mean_rgb && (
              <div className="flex items-center justify-between pt-1 border-t border-parchment-200">
                <span className="text-charcoal-400">Mean Color:</span>
                <div className="flex items-center space-x-1">
                  <div
                    className="w-3.5 h-3.5 rounded border border-charcoal-400"
                    style={{
                      backgroundColor: `rgb(${selectedFragment.features.mean_rgb.join(',')})`,
                    }}
                  />
                  <span className="text-[10px] text-charcoal-500">RGB</span>
                </div>
              </div>
            )}
            {selectedFragment.features.texture_roughness !== undefined && (
              <div className="flex justify-between">
                <span className="text-charcoal-400">Roughness:</span>
                <span className="text-charcoal-700">{selectedFragment.features.texture_roughness?.toFixed(1)}</span>
              </div>
            )}
          </div>
        </div>

        {/* AI Observation Trigger */}
        <div className="flex items-center justify-between bg-purple-50 border border-purple-200 rounded-lg p-2.5">
          <div className="text-xs">
            <div className="font-semibold text-purple-900 flex items-center space-x-1">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>AI Feature Assistant</span>
            </div>
            <span className="text-[10px] text-purple-700">Suggest visible finish & part</span>
          </div>
          <button
            onClick={handleAiAnalyze}
            disabled={isAiLoading}
            className="text-xs bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-medium px-2.5 py-1 rounded transition shadow-2xs"
          >
            {isAiLoading ? 'Analyzing...' : 'Analyze'}
          </button>
        </div>

        {/* Editable Observations Form */}
        <div className="space-y-3 bg-white rounded-lg p-3 border border-parchment-300 shadow-2xs text-xs">
          <h4 className="font-mono text-[11px] uppercase tracking-wider font-semibold text-charcoal-500">
            Visible Evidence & Notes
          </h4>

          {/* Likely Part */}
          <div>
            <label className="block text-[11px] text-charcoal-500 mb-1">Anatomical Part</label>
            <select
              value={selectedFragment.observations.likely_part}
              onChange={(e) => handleFieldChange('likely_part', e.target.value)}
              className="w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800 font-medium"
            >
              <option value="unknown">Unknown / Unspecified</option>
              <option value="rim">Rim (Lip preserved)</option>
              <option value="body">Body (Wall sherd)</option>
              <option value="base">Base (Bottom section)</option>
              <option value="handle">Handle / Lug</option>
            </select>
          </div>

          {/* Visible Color / Slip */}
          <div>
            <label className="block text-[11px] text-charcoal-500 mb-1">Visible Color / Slip</label>
            <input
              type="text"
              value={selectedFragment.observations.color_desc || ''}
              onChange={(e) => handleFieldChange('color_desc', e.target.value)}
              placeholder="e.g. Terracotta orange, pale buff"
              className="w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800"
            />
          </div>

          {/* Surface Finish / Inclusions */}
          <div>
            <label className="block text-[11px] text-charcoal-500 mb-1">Finish & Temper</label>
            <input
              type="text"
              value={selectedFragment.observations.finish || ''}
              onChange={(e) => handleFieldChange('finish', e.target.value)}
              placeholder="e.g. Burnished slip, sand grit"
              className="w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800"
            />
          </div>

          {/* Wall Thickness with Scientific Caution Notice */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="text-[11px] text-charcoal-500">Wall Thickness (mm)</label>
              <span className="text-[10px] text-terracotta-600 italic">Side-view only</span>
            </div>
            <input
              type="number"
              step="0.1"
              value={selectedFragment.observations.wall_thickness_mm ?? ''}
              onChange={(e) => handleFieldChange('wall_thickness_mm', e.target.value ? parseFloat(e.target.value) : null)}
              placeholder="Enter caliper/profile measurement"
              className="w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800 font-mono"
            />
            <p className="text-[10px] text-charcoal-400 mt-0.5 leading-tight">
              ⚠ Never inferred from top-view silhouette. Measure directly from fracture face.
            </p>
          </div>

          {/* User Notes */}
          <div>
            <label className="block text-[11px] text-charcoal-500 mb-1">Observational Notes</label>
            <textarea
              rows={2}
              value={selectedFragment.observations.notes || ''}
              onChange={(e) => handleFieldChange('notes', e.target.value)}
              placeholder="Tool marks, wear, residue traces..."
              className="w-full bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800"
            />
          </div>
        </div>

        {/* Edge Annotations */}
        <div className="bg-white rounded-lg p-3 border border-parchment-300 shadow-2xs space-y-2 text-xs">
          <div className="flex justify-between items-center">
            <h4 className="font-mono text-[11px] uppercase tracking-wider font-semibold text-charcoal-500">
              Edge Constraints
            </h4>
            <span className="text-[10px] bg-parchment-200 px-1.5 py-0.5 rounded text-charcoal-600">
              {selectedFragment.edge_annotations.length} marked
            </span>
          </div>
          <p className="text-[11px] text-charcoal-500 leading-normal">
            Mark original rim or base edges so geometric join matching will not attempt to mate unbroken vessel lips.
          </p>
          {selectedFragment.edge_annotations.map((ea) => (
            <div key={ea.id} className="flex items-center justify-between p-2 rounded bg-parchment-50 border border-parchment-200">
              <div>
                <span className="font-semibold text-charcoal-800">{ea.label || 'Marked Boundary'}</span>
                <div className="text-[10px] text-charcoal-400 font-mono">
                  Type: {ea.edge_type === 'original_vessel_edge' ? 'Preserved Vessel Rim/Lip' : 'Fracture Break'}
                </div>
              </div>
              <button
                onClick={() => {
                  const updatedEdges = selectedFragment.edge_annotations.filter((x) => x.id !== ea.id);
                  onUpdateFragment({ ...selectedFragment, edge_annotations: updatedEdges });
                }}
                className="text-red-500 hover:text-red-700 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
          <button
            onClick={() => {
              const newEdge = {
                id: `ea_${Date.now()}`,
                start_idx: 0,
                end_idx: Math.min(10, selectedFragment.contour.length - 1),
                edge_type: 'original_vessel_edge' as const,
                label: 'Marked Rim Section',
              };
              onUpdateFragment({
                ...selectedFragment,
                edge_annotations: [...selectedFragment.edge_annotations, newEdge],
              });
            }}
            className="w-full text-center text-xs py-1.5 rounded border border-dashed border-terracotta-400 text-terracotta-700 hover:bg-terracotta-50 transition font-medium"
          >
            + Mark Section as Original Vessel Edge
          </button>
        </div>

        {/* Multi-View Gallery */}
        <div className="bg-white rounded-lg p-3 border border-parchment-300 shadow-2xs space-y-2 text-xs">
          <div className="flex justify-between items-center">
            <h4 className="font-mono text-[11px] uppercase tracking-wider font-semibold text-charcoal-500">
              Multi-View Photos
            </h4>
            <span className="text-[10px] text-charcoal-400">{fragmentPhotos.length} views</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {fragmentPhotos.map((p) => (
              <div key={p.id} className="relative rounded border border-parchment-200 overflow-hidden bg-parchment-50">
                <img src={p.file_url} alt={p.role} className="w-full h-16 object-cover" />
                <span className="absolute bottom-0 inset-x-0 bg-charcoal-900/70 text-white text-[9px] px-1 py-0.5 font-mono truncate">
                  {p.role}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-parchment-200">
            <div className="flex space-x-1 mb-2">
              {(['side', 'fracture', 'inner_face', 'outer_face'] as const).map((r) => (
                <button
                  key={r}
                  onClick={() => setUploadRole(r)}
                  className={`text-[10px] px-2 py-0.5 rounded capitalize ${
                    uploadRole === r ? 'bg-charcoal-800 text-white' : 'bg-parchment-200 text-charcoal-700'
                  }`}
                >
                  {r.replace('_', ' ')}
                </button>
              ))}
            </div>
            <label className="flex items-center justify-center space-x-1.5 py-1.5 px-3 border border-dashed border-charcoal-300 rounded cursor-pointer hover:bg-parchment-50 transition text-charcoal-600">
              <Upload className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">
                {isUploadingPhoto ? 'Uploading...' : `Upload ${uploadRole} photo`}
              </span>
              <input type="file" accept="image/jpeg,image/png" onChange={handleAddPhoto} className="hidden" />
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};
