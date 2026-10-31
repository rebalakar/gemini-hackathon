import React, { useState, useRef } from 'react';
import { Project, CalibrationData } from '../../types';
import { Upload, Crosshair, Check, AlertCircle, ArrowRight, RefreshCw, Ruler } from 'lucide-react';
import { api } from '../../api';

interface CaptureViewProps {
  project: Project;
  onPhotoUploaded: (url: string, dims: [number, number]) => void;
  onCalibrationUpdated: (calib: CalibrationData) => void;
  onNextStep: () => void;
}

export const CaptureView: React.FC<CaptureViewProps> = ({
  project,
  onPhotoUploaded,
  onCalibrationUpdated,
  onNextStep,
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [calibMode, setCalibMode] = useState(false);
  const [calibPoints, setCalibPoints] = useState<[number, number][]>([]);
  const [realDistanceMm, setRealDistanceMm] = useState<number>(100.0);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    setIsUploading(true);
    try {
      const res = await api.uploadPhoto(project.id, file);
      onPhotoUploaded(res.primary_photo_url, res.dimensions);
    } catch (err: any) {
      alert(`Upload failed: ${err.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!calibMode || !imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const naturalW = imgRef.current.naturalWidth;
    const naturalH = imgRef.current.naturalHeight;

    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const scaleX = naturalW / rect.width;
    const scaleY = naturalH / rect.height;

    const origX = Math.round(clickX * scaleX);
    const origY = Math.round(clickY * scaleY);

    if (calibPoints.length === 0) {
      setCalibPoints([[origX, origY]]);
    } else if (calibPoints.length === 1) {
      const p1 = calibPoints[0];
      const p2: [number, number] = [origX, origY];
      setCalibPoints([p1, p2]);
      // Calculate
      const dx = p2[0] - p1[0];
      const dy = p2[1] - p1[1];
      const distPx = Math.sqrt(dx * dx + dy * dy);
      const pxPerMm = Number((distPx / realDistanceMm).toFixed(4));

      api.updateCalibration(project.id, {
        is_calibrated: true,
        px_per_mm: pxPerMm,
        point_a: p1,
        point_b: p2,
        distance_mm: realDistanceMm,
        notes: `Ruler scale: ${realDistanceMm}mm = ${Math.round(distPx)}px`,
      }).then((updated) => {
        onCalibrationUpdated(updated);
        setCalibMode(false);
      });
    }
  };

  return (
    <div className="flex-1 flex flex-col p-6 overflow-y-auto">
      {/* Top Banner Guidelines */}
      <div className="bg-white border border-parchment-300 rounded-lg p-4 mb-6 shadow-2xs flex items-start space-x-3">
        <div className="p-2 bg-terracotta-100 rounded-lg text-terracotta-700 shrink-0 mt-0.5">
          <Ruler className="w-5 h-5" />
        </div>
        <div className="text-xs space-y-1">
          <h3 className="font-semibold text-charcoal-900 text-sm">Overhead Photography & Scale Calibration</h3>
          <p className="text-charcoal-600 leading-relaxed">
            “Separate fragments, avoid overlap, use even lighting, and include a scale. One photograph supports
            preliminary grouping; side and fracture views improve reconstruction.”
          </p>
          <p className="text-[11px] text-terracotta-700 font-medium">
            Note: Calibration applies to the reference plane. Raised, curved, or tilted surfaces can introduce perspective
            measurement error.
          </p>
        </div>
      </div>

      {/* Main Canvas Area */}
      {!project.primary_photo_url ? (
        <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-parchment-300 rounded-xl bg-white p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-parchment-100 flex items-center justify-center text-charcoal-400 mb-4">
            <Upload className="w-8 h-8 text-terracotta-500" />
          </div>
          <h2 className="text-base font-bold text-charcoal-900 mb-1">Upload Overhead Pottery Photograph</h2>
          <p className="text-xs text-charcoal-500 max-w-md mb-6">
            Accepts JPEG or PNG up to 20MB. Plain, high-contrast matte tabletop background with a visible millimetre scale
            bar is recommended.
          </p>
          <label className="bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-sm cursor-pointer transition flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>{isUploading ? 'Uploading...' : 'Select Overhead Photograph'}</span>
            <input type="file" accept="image/jpeg,image/png" onChange={handleFileUpload} className="hidden" />
          </label>
        </div>
      ) : (
        <div className="flex-1 flex flex-col space-y-4">
          {/* Controls Bar */}
          <div className="bg-white border border-parchment-300 rounded-lg px-4 py-2.5 flex items-center justify-between shadow-2xs">
            <div className="flex items-center space-x-4 text-xs font-mono">
              <span className="text-charcoal-500 font-sans">Scale Calibration:</span>
              {project.calibration.is_calibrated ? (
                <div className="flex items-center space-x-1.5 text-emerald-700 font-semibold">
                  <Check className="w-4 h-4" />
                  <span>
                    {project.calibration.px_per_mm?.toFixed(2)} px/mm ({project.calibration.distance_mm} mm)
                  </span>
                </div>
              ) : (
                <div className="flex items-center space-x-1 text-amber-700">
                  <AlertCircle className="w-4 h-4" />
                  <span>Uncalibrated (results in pixels)</span>
                </div>
              )}

              {calibMode ? (
                <div className="flex items-center space-x-2 pl-4 border-l border-parchment-300">
                  <span className="text-terracotta-600 animate-pulse font-semibold">
                    {calibPoints.length === 0 ? 'Click Point 1 on ruler' : 'Click Point 2 on ruler'}
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-charcoal-500 font-sans">Distance:</span>
                    <input
                      type="number"
                      value={realDistanceMm}
                      onChange={(e) => setRealDistanceMm(parseFloat(e.target.value) || 100)}
                      className="w-16 bg-parchment-50 border border-parchment-300 rounded px-1.5 py-0.5 text-xs font-mono"
                    />
                    <span className="text-charcoal-500">mm</span>
                  </div>
                  <button
                    onClick={() => {
                      setCalibMode(false);
                      setCalibPoints([]);
                    }}
                    className="text-xs text-charcoal-500 hover:text-charcoal-800 underline"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setCalibMode(true);
                    setCalibPoints([]);
                  }}
                  className="flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-700 px-3 py-1 rounded border border-parchment-300 transition"
                >
                  <Crosshair className="w-3.5 h-3.5 text-terracotta-600" />
                  <span>{project.calibration.is_calibrated ? 'Recalibrate Scale' : 'Calibrate Scale on Ruler'}</span>
                </button>
              )}
            </div>

            <div className="flex items-center space-x-3">
              <label className="text-xs text-charcoal-600 hover:text-charcoal-900 cursor-pointer flex items-center space-x-1">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Replace Photo</span>
                <input type="file" accept="image/jpeg,image/png" onChange={handleFileUpload} className="hidden" />
              </label>

              <button
                onClick={onNextStep}
                className="bg-charcoal-800 hover:bg-charcoal-900 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition"
              >
                <span>Proceed to Detect Fragments</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Photograph Canvas */}
          <div className="flex-1 bg-charcoal-900 rounded-xl overflow-hidden relative flex items-center justify-center p-2 border border-charcoal-700 shadow-inner min-h-[500px]">
            <div className="relative inline-block max-w-full max-h-full">
              <img
                ref={imgRef}
                src={project.primary_photo_url}
                alt="Overhead View"
                onClick={handleImageClick}
                className={`max-w-full max-h-[680px] object-contain rounded select-none ${
                  calibMode ? 'cursor-crosshair' : 'cursor-default'
                }`}
              />

              {/* Calibration Markers Overlay */}
              {project.calibration.point_a && project.calibration.point_b && (
                <svg className="absolute inset-0 pointer-events-none w-full h-full" viewBox={`0 0 ${project.primary_photo_dimensions?.[0] || 1600} ${project.primary_photo_dimensions?.[1] || 1200}`}>
                  <line
                    x1={project.calibration.point_a[0]}
                    y1={project.calibration.point_a[1]}
                    x2={project.calibration.point_b[0]}
                    y2={project.calibration.point_b[1]}
                    stroke="#28A745"
                    strokeWidth="4"
                    strokeDasharray="6,4"
                  />
                  <circle cx={project.calibration.point_a[0]} cy={project.calibration.point_a[1]} r="7" fill="#28A745" stroke="#FFFFFF" strokeWidth="2" />
                  <circle cx={project.calibration.point_b[0]} cy={project.calibration.point_b[1]} r="7" fill="#28A745" stroke="#FFFFFF" strokeWidth="2" />
                  <text
                    x={(project.calibration.point_a[0] + project.calibration.point_b[0]) / 2}
                    y={(project.calibration.point_a[1] + project.calibration.point_b[1]) / 2 - 12}
                    fill="#28A745"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="drop-shadow-md"
                  >
                    {project.calibration.distance_mm} mm
                  </text>
                </svg>
              )}

              {/* Temporary In-Progress Calibration Click Marker */}
              {calibMode && calibPoints.length === 1 && (
                <div
                  className="absolute w-4 h-4 rounded-full bg-terracotta-500 border-2 border-white pointer-events-none -translate-x-1/2 -translate-y-1/2 animate-ping"
                  style={{
                    left: `${(calibPoints[0][0] / (project.primary_photo_dimensions?.[0] || 1600)) * 100}%`,
                    top: `${(calibPoints[0][1] / (project.primary_photo_dimensions?.[1] || 1200)) * 100}%`,
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
