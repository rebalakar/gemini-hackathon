import React, { useState, useRef, useEffect } from 'react';
import { Fragment, VesselGroup, AdditionalPhoto, Project } from '../types';
import {
  Info,
  Tag,
  Sparkles,
  Upload,
  Camera,
  X,
  RefreshCw,
  AlertCircle,
  CheckCircle2,
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

async function createSimulatedFragmentViewFile(fragmentId: string, role: string): Promise<File> {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 480;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');

  ctx.fillStyle = '#F5F2EB';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw schematic fragment view according to role
  ctx.fillStyle = '#B85435';
  ctx.strokeStyle = '#7A2F18';
  ctx.lineWidth = 4;

  ctx.beginPath();
  if (role === 'side' || role === 'fracture') {
    // Profile / cross-section view
    ctx.moveTo(260, 80);
    ctx.quadraticCurveTo(320, 240, 290, 390);
    ctx.lineTo(335, 390);
    ctx.quadraticCurveTo(365, 240, 305, 80);
    ctx.closePath();
  } else {
    // Face view
    ctx.moveTo(180, 110);
    ctx.lineTo(440, 95);
    ctx.lineTo(470, 340);
    ctx.lineTo(210, 370);
    ctx.closePath();
  }
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#2B2B2B';
  ctx.font = 'bold 16px monospace';
  ctx.fillText(`${fragmentId} — ${role.replace('_', ' ').toUpperCase()} VIEW`, 24, 36);

  const blob: Blob = await new Promise((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Failed to encode image'))), 'image/png');
  });
  return new File([blob], `${fragmentId}_${role}_${Date.now()}.png`, { type: 'image/png' });
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
  const [panelNotice, setPanelNotice] = useState<{ type: 'info' | 'error' | 'success'; text: string } | null>(null);

  // Camera modal state for multi-view photos
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [cameraStreamActive, setCameraStreamActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const multiViewInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    setPanelNotice(null);
  }, [selectedFragment?.id]);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setCameraStreamActive(false);
  };

  const openMultiViewCamera = async () => {
    setIsCameraOpen(true);
    setCameraError(null);
    stopCamera();

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setCameraError('Live webcam API unavailable. Use Simulated Capture or Upload below.');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play().catch(() => {});
      }
      setCameraStreamActive(true);
    } catch (err: any) {
      setCameraStreamActive(false);
      setCameraError(`Webcam unavailable (${err?.message || 'No camera detected'}).`);
    }
  };

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
    setPanelNotice(null);
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
            notes: ((selectedFragment.observations.notes || '') + ' ' + (res.notes || '')).trim(),
            ai_generated: true,
          },
        });
        setPanelNotice({ type: 'success', text: 'Gemini AI observations populated.' });
      } else {
        setPanelNotice({ type: 'info', text: res.reason || 'AI analysis unavailable in offline mode.' });
      }
    } catch (e: any) {
      setPanelNotice({ type: 'error', text: `AI request failed: ${e.message}` });
    } finally {
      setIsAiLoading(false);
    }
  };

  const uploadMultiViewFile = async (file: File) => {
    if (!project) return;
    setIsUploadingPhoto(true);
    setPanelNotice(null);
    try {
      await api.uploadAdditionalPhoto(
        project.id,
        file,
        uploadRole,
        selectedFragment.id,
        `Manual ${uploadRole} view`
      );
      setPanelNotice({
        type: 'success',
        text: `Attached ${uploadRole.replace('_', ' ')} photograph to ${selectedFragment.id}.`,
      });
      onPhotoUploaded();
    } catch (err: any) {
      setPanelNotice({ type: 'error', text: `Upload failed: ${err.message}` });
    } finally {
      setIsUploadingPhoto(false);
    }
  };

  const handleAddPhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    await uploadMultiViewFile(file);
  };

  const handleCaptureMultiViewFrame = async () => {
    if (!videoRef.current || !cameraStreamActive) return;
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const blob: Blob | null = await new Promise((r) => canvas.toBlob(r, 'image/png'));
    if (!blob) return;
    const file = new File([blob], `${selectedFragment.id}_${uploadRole}_${Date.now()}.png`, { type: 'image/png' });
    stopCamera();
    setIsCameraOpen(false);
    await uploadMultiViewFile(file);
  };

  const handleSimulatedMultiViewCapture = async () => {
    const file = await createSimulatedFragmentViewFile(selectedFragment.id, uploadRole);
    stopCamera();
    setIsCameraOpen(false);
    await uploadMultiViewFile(file);
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
          <button
            type="button"
            onClick={onDeselect}
            className="p-1 text-charcoal-400 hover:text-charcoal-700 rounded"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Status Banner */}
        {panelNotice && (
          <div
            className={`rounded-lg p-2.5 text-[11px] flex items-start justify-between border ${
              panelNotice.type === 'error'
                ? 'bg-red-50 border-red-300 text-red-800'
                : panelNotice.type === 'success'
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : 'bg-amber-50 border-amber-300 text-amber-900'
            }`}
          >
            <div className="flex items-start space-x-1.5">
              {panelNotice.type === 'error' ? (
                <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-red-600" />
              ) : (
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-emerald-600" />
              )}
              <span>{panelNotice.text}</span>
            </div>
            <button type="button" onClick={() => setPanelNotice(null)} className="ml-2 opacity-60 hover:opacity-100">
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        {/* Thumbnail & Computed Metrics */}
        <div className="bg-white rounded-lg p-3 border border-parchment-300 shadow-2xs flex space-x-3">
          <div className="w-20 h-20 rounded bg-parchment-100 border border-parchment-200 flex items-center justify-center overflow-hidden p-1 shrink-0">
            <img
              src={selectedFragment.crop_url}
              alt={selectedFragment.id}
              className="max-w-full max-h-full object-contain"
            />
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
                {selectedFragment.perimeter_mm
                  ? `${selectedFragment.perimeter_mm} mm`
                  : `${selectedFragment.perimeter_px} px`}
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
            type="button"
            onClick={handleAiAnalyze}
            disabled={isAiLoading}
            className="text-xs bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-medium px-2.5 py-1 rounded transition shadow-2xs cursor-pointer"
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
            <div
              key={ea.id}
              className="flex items-center justify-between p-2 rounded bg-parchment-50 border border-parchment-200"
            >
              <div>
                <span className="font-semibold text-charcoal-800">{ea.label || 'Marked Boundary'}</span>
                <div className="text-[10px] text-charcoal-400 font-mono">
                  Type: {ea.edge_type === 'original_vessel_edge' ? 'Preserved Vessel Rim/Lip' : 'Fracture Break'}
                </div>
              </div>
              <button
                type="button"
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
            type="button"
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
            className="w-full text-center text-xs py-1.5 rounded border border-dashed border-terracotta-400 text-terracotta-700 hover:bg-terracotta-50 transition font-medium cursor-pointer"
          >
            + Mark Section as Original Vessel Edge
          </button>
        </div>

        {/* Multi-View Gallery */}
        <div className="bg-white rounded-lg p-3 border border-parchment-300 shadow-2xs space-y-2 text-xs">
          <input
            ref={multiViewInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/bmp"
            onChange={handleAddPhoto}
            className="hidden"
          />

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
                  {p.role.replace('_', ' ')}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-parchment-200 space-y-2">
            <div className="flex space-x-1">
              {(['side', 'fracture', 'inner_face', 'outer_face'] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setUploadRole(r)}
                  className={`text-[10px] px-2 py-0.5 rounded capitalize cursor-pointer ${
                    uploadRole === r ? 'bg-charcoal-800 text-white' : 'bg-parchment-200 text-charcoal-700'
                  }`}
                >
                  {r.replace('_', ' ')}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                disabled={isUploadingPhoto}
                onClick={() => multiViewInputRef.current?.click()}
                className="flex items-center justify-center space-x-1.5 py-1.5 px-2 border border-dashed border-charcoal-300 rounded cursor-pointer hover:bg-parchment-50 transition text-charcoal-700 disabled:opacity-50"
              >
                <Upload className="w-3.5 h-3.5 text-terracotta-600 shrink-0" />
                <span className="text-[11px] font-medium truncate">
                  {isUploadingPhoto ? 'Uploading...' : `Upload ${uploadRole.replace('_', ' ')}`}
                </span>
              </button>

              <button
                type="button"
                disabled={isUploadingPhoto}
                onClick={openMultiViewCamera}
                className="flex items-center justify-center space-x-1.5 py-1.5 px-2 border border-charcoal-300 bg-parchment-100 rounded cursor-pointer hover:bg-parchment-200 transition text-charcoal-800 disabled:opacity-50"
              >
                <Camera className="w-3.5 h-3.5 text-terracotta-600 shrink-0" />
                <span className="text-[11px] font-medium">Camera</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Multi-View Camera Capture Modal */}
      {isCameraOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-900/80 flex items-center justify-center p-4">
          <div className="bg-parchment-50 border border-parchment-300 rounded-xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-parchment-100 border-b border-parchment-300 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Camera className="w-4 h-4 text-terracotta-600" />
                <span className="text-xs font-bold text-charcoal-900">
                  Capture {selectedFragment.id} ({uploadRole.replace('_', ' ')})
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  stopCamera();
                  setIsCameraOpen(false);
                }}
                className="p-1 text-charcoal-500 hover:text-charcoal-900"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-charcoal-900 aspect-video flex items-center justify-center p-4">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={`w-full h-full object-contain ${cameraStreamActive ? 'block' : 'hidden'}`}
              />
              {!cameraStreamActive && (
                <div className="text-center space-y-3">
                  <p className="text-xs text-parchment-200">
                    {cameraError || 'Initializing camera stream...'}
                  </p>
                  <button
                    type="button"
                    onClick={handleSimulatedMultiViewCapture}
                    className="bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow transition inline-flex items-center space-x-1.5 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Capture Simulated {uploadRole.replace('_', ' ')} View</span>
                  </button>
                </div>
              )}
            </div>

            <div className="bg-parchment-100 border-t border-parchment-300 px-4 py-2.5 flex items-center justify-between">
              <button
                type="button"
                onClick={handleSimulatedMultiViewCapture}
                className="text-[11px] text-terracotta-700 hover:underline font-medium cursor-pointer"
              >
                Simulate {uploadRole.replace('_', ' ')} capture
              </button>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => {
                    stopCamera();
                    setIsCameraOpen(false);
                  }}
                  className="text-xs text-charcoal-600 px-2.5 py-1"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={!cameraStreamActive}
                  onClick={handleCaptureMultiViewFrame}
                  className="bg-terracotta-600 hover:bg-terracotta-700 disabled:opacity-40 text-white text-xs font-semibold px-3.5 py-1.5 rounded-md cursor-pointer"
                >
                  Capture View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};
