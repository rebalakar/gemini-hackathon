import React, { useState, useRef, useEffect } from 'react';
import { Project, CalibrationData, Fragment, VesselGroup } from '../../types';
import {
  Upload,
  Camera,
  Crosshair,
  Check,
  AlertCircle,
  ArrowRight,
  RefreshCw,
  Ruler,
  X,
  Video,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { api } from '../../api';

interface CaptureViewProps {
  project: Project;
  fragmentCount?: number;
  onPhotoUploaded: (
    url: string,
    dims: [number, number],
    fragments?: Fragment[],
    groups?: VesselGroup[],
    calibration?: CalibrationData
  ) => void;
  onCalibrationUpdated: (calib: CalibrationData) => void;
  onNextStep: () => void;
}

/**
 * Generates a realistic tabletop camera frame on an HTML5 canvas (with ceramic sherds and a 100mm scale bar)
 * so that users on desktops without a physical webcam can still test the Camera capture workflow end-to-end.
 */
async function createSimulatedCameraFrameFile(): Promise<File> {
  const canvas = document.createElement('canvas');
  canvas.width = 1600;
  canvas.height = 1200;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas 2D context unavailable');

  // 1. Matte light neutral background
  ctx.fillStyle = '#EAE6DF';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle lighting gradient
  const grad = ctx.createRadialGradient(800, 600, 100, 800, 600, 950);
  grad.addColorStop(0, 'rgba(255,255,255,0.12)');
  grad.addColorStop(1, 'rgba(0,0,0,0.06)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 2. Calibration scale bar at bottom-left: 100 mm = 320 px (from x=140 to x=460, y=1060)
  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = '#222222';
  ctx.lineWidth = 3;
  ctx.fillRect(110, 1020, 380, 95);
  ctx.strokeRect(110, 1020, 380, 95);

  // Alternating 32px segments (10mm each, 10 segments = 320px = 100mm)
  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = i % 2 === 0 ? '#1E1E1E' : '#FFFFFF';
    ctx.fillRect(140 + i * 32, 1045, 32, 22);
    ctx.strokeRect(140 + i * 32, 1045, 32, 22);
  }
  ctx.fillStyle = '#1E1E1E';
  ctx.font = 'bold 18px monospace';
  ctx.fillText('0 mm', 135, 1098);
  ctx.fillText('100 mm (3.20 px/mm)', 320, 1098);

  // 3. Draw 7 separated ceramic sherds across 2 vessels (Terracotta red-orange & Buff ochre)
  const sherds: { pts: [number, number][]; color: string; stroke: string }[] = [
    // Vessel A (Terracotta Red-Orange) - mating pair S1 & S2 + S3 + S4
    {
      pts: [
        [240, 210],
        [450, 195],
        [475, 360],
        [355, 395],
        [230, 370],
      ],
      color: '#B85435',
      stroke: '#8E3B21',
    },
    {
      pts: [
        [250, 460],
        [375, 485],
        [495, 450],
        [480, 640],
        [245, 625],
      ],
      color: '#BA5738',
      stroke: '#8E3B21',
    },
    {
      pts: [
        [570, 215],
        [780, 205],
        [795, 385],
        [670, 415],
        [560, 365],
      ],
      color: '#B45032',
      stroke: '#8E3B21',
    },
    {
      pts: [
        [590, 490],
        [790, 470],
        [820, 650],
        [605, 665],
      ],
      color: '#B95536',
      stroke: '#8E3B21',
    },
    // Vessel B (Warm Buff/Ochre Coarse Ware) - S5, S6, S7
    {
      pts: [
        [960, 220],
        [1190, 210],
        [1215, 410],
        [1075, 435],
        [950, 395],
      ],
      color: '#C49A5C',
      stroke: '#96713A',
    },
    {
      pts: [
        [970, 510],
        [1095, 535],
        [1235, 505],
        [1220, 710],
        [965, 695],
      ],
      color: '#C19658',
      stroke: '#96713A',
    },
    {
      pts: [
        [1290, 310],
        [1470, 300],
        [1485, 520],
        [1305, 535],
      ],
      color: '#BF9456',
      stroke: '#96713A',
    },
  ];

  for (const s of sherds) {
    ctx.beginPath();
    ctx.moveTo(s.pts[0][0], s.pts[0][1]);
    for (let i = 1; i < s.pts.length; i++) {
      ctx.lineTo(s.pts[i][0], s.pts[i][1]);
    }
    ctx.closePath();
    ctx.fillStyle = s.color;
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = s.stroke;
    ctx.stroke();
  }

  const blob: Blob = await new Promise((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('Failed to encode canvas image'))), 'image/png');
  });

  return new File([blob], `camera_capture_${Date.now()}.png`, { type: 'image/png' });
}

export const CaptureView: React.FC<CaptureViewProps> = ({
  project,
  fragmentCount = 0,
  onPhotoUploaded,
  onCalibrationUpdated,
  onNextStep,
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  // Calibration state
  const [calibMode, setCalibMode] = useState(false);
  const [calibPoints, setCalibPoints] = useState<[number, number][]>([]);
  const [realDistanceMm, setRealDistanceMm] = useState<number>(100.0);

  // Camera Modal state
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isCameraStarting, setIsCameraStarting] = useState(false);
  const [cameraStreamActive, setCameraStreamActive] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>('');

  const imgRef = useRef<HTMLImageElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const deviceCameraInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Clean up camera stream on unmount
  useEffect(() => {
    return () => {
      stopCameraStream();
    };
  }, []);

  const stopCameraStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setCameraStreamActive(false);
  };

  const startCameraStream = async (deviceId?: string) => {
    stopCameraStream();
    setIsCameraStarting(true);
    setCameraError(null);

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setIsCameraStarting(false);
      setCameraError(
        'Browser webcam API (navigator.mediaDevices.getUserMedia) is not available in this context. You can capture a simulated overhead camera frame or select a photo from your device below.'
      );
      return;
    }

    try {
      const constraints: MediaStreamConstraints = {
        video: deviceId
          ? { deviceId: { exact: deviceId }, width: { ideal: 1600 }, height: { ideal: 1200 } }
          : { facingMode: 'environment', width: { ideal: 1600 }, height: { ideal: 1200 } },
        audio: false,
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play().catch(() => {});
      }
      setCameraStreamActive(true);

      // Enumerate video cameras if available
      const devices = await navigator.mediaDevices.enumerateDevices();
      const cams = devices.filter((d) => d.kind === 'videoinput');
      setVideoDevices(cams);
      if (!deviceId && cams.length > 0 && !selectedDeviceId) {
        setSelectedDeviceId(cams[0].deviceId);
      }
    } catch (err: any) {
      setCameraStreamActive(false);
      setCameraError(
        `Live camera stream unavailable (${err?.name || 'CameraError'}: ${
          err?.message || 'No webcam found or permission denied'
        }). Use 'Capture Simulated Camera Frame' or 'Choose / Take Device Photo' below.`
      );
    } finally {
      setIsCameraStarting(false);
    }
  };

  const handleOpenCameraModal = () => {
    setUploadError(null);
    setIsCameraOpen(true);
    startCameraStream(selectedDeviceId || undefined);
  };

  const handleCloseCameraModal = () => {
    stopCameraStream();
    setIsCameraOpen(false);
    setCameraError(null);
  };

  const processUploadedFile = async (file: File, sourceLabel: string = 'Photograph') => {
    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(null);
    try {
      const res = await api.uploadPhoto(project.id, file);
      const detectedCount = res.fragments ? res.fragments.length : 0;
      setUploadSuccess(
        `${sourceLabel} uploaded (${res.dimensions[0]}×${res.dimensions[1]} px) — ${detectedCount} ceramic fragment${
          detectedCount === 1 ? '' : 's'
        } automatically segmented. You can calibrate the scale on the ruler below or proceed to Group & Detect.`
      );
      onPhotoUploaded(res.primary_photo_url, res.dimensions, res.fragments, res.groups, res.calibration);
    } catch (err: any) {
      setUploadError(err.message || 'Upload failed. Please verify the file is a valid JPEG, PNG, or WebP image.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    // Reset input value so selecting the same file again always triggers onChange
    e.target.value = '';
    if (!file) return;
    await processUploadedFile(file, `Photograph "${file.name}"`);
  };

  const handleCaptureLiveVideoFrame = async () => {
    if (!videoRef.current || !cameraStreamActive) return;
    const video = videoRef.current;
    const width = video.videoWidth || 1280;
    const height = video.videoHeight || 720;

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, width, height);
    const blob: Blob | null = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
    if (!blob) {
      setCameraError('Could not capture frame from video stream.');
      return;
    }

    const file = new File([blob], `camera_capture_${Date.now()}.png`, { type: 'image/png' });
    handleCloseCameraModal();
    await processUploadedFile(file, 'Live camera photograph');
  };

  const handleCaptureSimulatedFrame = async () => {
    try {
      const file = await createSimulatedCameraFrameFile();
      handleCloseCameraModal();
      await processUploadedFile(file, 'Camera tabletop capture');
    } catch (err: any) {
      setCameraError(`Simulated capture failed: ${err.message}`);
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    await processUploadedFile(file, `Dropped photograph "${file.name}"`);
  };

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!calibMode || !imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const naturalW = imgRef.current.naturalWidth || project.primary_photo_dimensions?.[0] || 1600;
    const naturalH = imgRef.current.naturalHeight || project.primary_photo_dimensions?.[1] || 1200;

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
      const dx = p2[0] - p1[0];
      const dy = p2[1] - p1[1];
      const distPx = Math.sqrt(dx * dx + dy * dy);
      const pxPerMm = Number((distPx / realDistanceMm).toFixed(4));

      api
        .updateCalibration(project.id, {
          is_calibrated: true,
          px_per_mm: pxPerMm,
          point_a: p1,
          point_b: p2,
          distance_mm: realDistanceMm,
          notes: `Ruler scale: ${realDistanceMm}mm = ${Math.round(distPx)}px`,
        })
        .then((updated) => {
          onCalibrationUpdated(updated);
          setCalibMode(false);
          setUploadSuccess(
            `Scale calibrated: ${updated.px_per_mm?.toFixed(2)} px/mm (${realDistanceMm} mm = ${Math.round(distPx)} px).`
          );
        })
        .catch((err) => {
          setUploadError(`Calibration update failed: ${err.message}`);
        });
    }
  };

  return (
    <div className="flex-1 flex flex-col p-6 overflow-y-auto">
      {/* Hidden File Inputs with explicit refs so buttons are 100% responsive */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/bmp"
        onChange={handleFileUpload}
        className="hidden"
        data-testid="photo-upload-input"
      />
      <input
        ref={deviceCameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={(e) => {
          handleCloseCameraModal();
          handleFileUpload(e);
        }}
        className="hidden"
        data-testid="device-camera-input"
      />

      {/* Top Banner Guidelines & Quick Capture Actions */}
      <div className="bg-white border border-parchment-300 rounded-lg p-4 mb-4 shadow-2xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-start space-x-3 max-w-2xl">
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
              Note: Calibration applies to the reference plane. Raised, curved, or tilted surfaces can introduce
              perspective measurement error.
            </p>
          </div>
        </div>

        {/* Always-Visible Primary Action Buttons: Upload Photo & Use Camera */}
        <div className="flex items-center space-x-2.5 shrink-0">
          <button
            type="button"
            disabled={isUploading}
            onClick={() => fileInputRef.current?.click()}
            data-testid="upload-photo-btn"
            className="bg-terracotta-600 hover:bg-terracotta-700 disabled:opacity-50 text-white font-semibold text-xs px-4 py-2.5 rounded-lg shadow-sm transition flex items-center space-x-2 cursor-pointer"
          >
            <Upload className="w-4 h-4" />
            <span>{isUploading ? 'Processing...' : project.primary_photo_url ? 'Upload New Photo' : 'Upload Photo'}</span>
          </button>

          <button
            type="button"
            disabled={isUploading}
            onClick={handleOpenCameraModal}
            data-testid="open-camera-btn"
            className="bg-charcoal-800 hover:bg-charcoal-900 disabled:opacity-50 text-white font-semibold text-xs px-4 py-2.5 rounded-lg shadow-sm transition flex items-center space-x-2 cursor-pointer"
          >
            <Camera className="w-4 h-4 text-terracotta-400" />
            <span>Use Camera</span>
          </button>
        </div>
      </div>

      {/* Status / Error / Progress Notifications */}
      {isUploading && (
        <div className="mb-4 bg-terracotta-50 border border-terracotta-300 text-terracotta-900 rounded-lg px-4 py-3 text-xs flex items-center space-x-3 shadow-2xs">
          <RefreshCw className="w-4 h-4 text-terracotta-600 animate-spin shrink-0" />
          <span className="font-medium">
            Uploading overhead photograph and running deterministic OpenCV contour segmentation...
          </span>
        </div>
      )}

      {uploadError && (
        <div className="mb-4 bg-red-50 border border-red-300 text-red-800 rounded-lg px-4 py-3 text-xs flex items-center justify-between shadow-2xs">
          <div className="flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span className="font-medium">{uploadError}</span>
          </div>
          <button
            type="button"
            onClick={() => setUploadError(null)}
            className="text-red-500 hover:text-red-800 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {uploadSuccess && !isUploading && (
        <div className="mb-4 bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-lg px-4 py-3 text-xs flex items-center justify-between shadow-2xs">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium">{uploadSuccess}</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={onNextStep}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-3 py-1 rounded flex items-center space-x-1 transition"
            >
              <span>Inspect {fragmentCount} Sherds in Group View</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => setUploadSuccess(null)}
              className="text-emerald-600 hover:text-emerald-900 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Main Canvas Area */}
      {!project.primary_photo_url ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={handleDrop}
          className={`flex-1 flex flex-col items-center justify-center border-2 border-dashed rounded-xl bg-white p-12 text-center transition ${
            isDragOver ? 'border-terracotta-500 bg-terracotta-50/40' : 'border-parchment-300'
          }`}
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-16 h-16 rounded-full bg-parchment-100 flex items-center justify-center text-charcoal-400">
              <Upload className="w-8 h-8 text-terracotta-500" />
            </div>
            <div className="w-16 h-16 rounded-full bg-parchment-100 flex items-center justify-center text-charcoal-400">
              <Camera className="w-8 h-8 text-charcoal-700" />
            </div>
          </div>
          <h2 className="text-base font-bold text-charcoal-900 mb-1">
            Upload Overhead Pottery Photograph or Capture with Camera
          </h2>
          <p className="text-xs text-charcoal-500 max-w-md mb-6">
            Accepts JPEG, PNG, or WebP up to 20MB (or drag & drop a photo here). Use a plain, contrasting tabletop
            background with a visible millimetre scale bar.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              disabled={isUploading}
              onClick={() => fileInputRef.current?.click()}
              className="bg-terracotta-600 hover:bg-terracotta-700 disabled:opacity-50 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-sm cursor-pointer transition flex items-center space-x-2"
            >
              <Upload className="w-4 h-4" />
              <span>{isUploading ? 'Uploading & Detecting...' : 'Select Overhead Photograph'}</span>
            </button>

            <button
              type="button"
              disabled={isUploading}
              onClick={handleOpenCameraModal}
              className="bg-charcoal-800 hover:bg-charcoal-900 disabled:opacity-50 text-white font-semibold text-xs px-5 py-2.5 rounded-lg shadow-sm cursor-pointer transition flex items-center space-x-2"
            >
              <Camera className="w-4 h-4 text-terracotta-400" />
              <span>Capture with Camera</span>
            </button>
          </div>
        </div>
      ) : (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragOver(true);
          }}
          onDragLeave={() => setIsDragOver(false)}
          onDrop={handleDrop}
          className="flex-1 flex flex-col space-y-4"
        >
          {/* Controls Bar */}
          <div className="bg-white border border-parchment-300 rounded-lg px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
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
                    type="button"
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
                  type="button"
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

            <div className="flex items-center space-x-2.5">
              <button
                type="button"
                disabled={isUploading}
                onClick={() => fileInputRef.current?.click()}
                className="text-xs bg-parchment-100 hover:bg-parchment-200 text-charcoal-700 border border-parchment-300 px-3 py-1.5 rounded-md font-medium cursor-pointer flex items-center space-x-1.5 transition"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isUploading ? 'animate-spin' : ''}`} />
                <span>Replace Photo</span>
              </button>

              <button
                type="button"
                disabled={isUploading}
                onClick={handleOpenCameraModal}
                className="text-xs bg-parchment-100 hover:bg-parchment-200 text-charcoal-700 border border-parchment-300 px-3 py-1.5 rounded-md font-medium cursor-pointer flex items-center space-x-1.5 transition"
              >
                <Camera className="w-3.5 h-3.5 text-terracotta-600" />
                <span>Retake with Camera</span>
              </button>

              <button
                type="button"
                onClick={onNextStep}
                className="bg-charcoal-800 hover:bg-charcoal-900 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition cursor-pointer"
              >
                <span>
                  Proceed to Detect & Group{fragmentCount > 0 ? ` (${fragmentCount} Sherds)` : ''}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Photograph Canvas */}
          <div
            className={`flex-1 bg-charcoal-900 rounded-xl overflow-hidden relative flex items-center justify-center p-2 border shadow-inner min-h-[500px] ${
              isDragOver ? 'border-terracotta-500 ring-2 ring-terracotta-400' : 'border-charcoal-700'
            }`}
          >
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
                <svg
                  className="absolute inset-0 pointer-events-none w-full h-full"
                  viewBox={`0 0 ${project.primary_photo_dimensions?.[0] || 1600} ${
                    project.primary_photo_dimensions?.[1] || 1200
                  }`}
                >
                  <line
                    x1={project.calibration.point_a[0]}
                    y1={project.calibration.point_a[1]}
                    x2={project.calibration.point_b[0]}
                    y2={project.calibration.point_b[1]}
                    stroke="#28A745"
                    strokeWidth="4"
                    strokeDasharray="6,4"
                  />
                  <circle
                    cx={project.calibration.point_a[0]}
                    cy={project.calibration.point_a[1]}
                    r="7"
                    fill="#28A745"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
                  <circle
                    cx={project.calibration.point_b[0]}
                    cy={project.calibration.point_b[1]}
                    r="7"
                    fill="#28A745"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                  />
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

      {/* Live Camera Capture Modal */}
      {isCameraOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-900/80 flex items-center justify-center p-4">
          <div className="bg-parchment-50 border border-parchment-300 rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="bg-parchment-100 border-b border-parchment-300 px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 rounded-lg bg-terracotta-600 text-white">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-charcoal-900">Overhead Camera Capture</h3>
                  <p className="text-[11px] text-charcoal-500">
                    Position camera perpendicular to tabletop with non-overlapping sherds and a visible ruler scale
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCloseCameraModal}
                className="p-1.5 text-charcoal-500 hover:text-charcoal-900 rounded-lg hover:bg-parchment-200 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Camera Selector Bar (if multiple video devices) */}
            {videoDevices.length > 1 && (
              <div className="px-5 py-2 bg-white border-b border-parchment-200 flex items-center space-x-3 text-xs">
                <Video className="w-3.5 h-3.5 text-charcoal-500" />
                <span className="text-charcoal-600 font-medium">Camera Source:</span>
                <select
                  value={selectedDeviceId}
                  onChange={(e) => {
                    setSelectedDeviceId(e.target.value);
                    startCameraStream(e.target.value);
                  }}
                  className="bg-parchment-50 border border-parchment-300 rounded px-2 py-1 text-charcoal-800"
                >
                  {videoDevices.map((d, idx) => (
                    <option key={d.deviceId || idx} value={d.deviceId}>
                      {d.label || `Camera ${idx + 1}`}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Video Viewfinder Area */}
            <div className="relative bg-charcoal-900 aspect-video w-full flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className={`w-full h-full object-contain ${cameraStreamActive ? 'block' : 'hidden'}`}
              />

              {/* Framing Guide Overlay when stream is active */}
              {cameraStreamActive && (
                <div className="absolute inset-4 border-2 border-dashed border-white/40 rounded-lg pointer-events-none flex flex-col justify-between p-3">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/80 bg-charcoal-900/60 px-2 py-0.5 rounded self-start">
                    Reference Plane Framing Guide
                  </div>
                  <div className="border border-emerald-400/70 bg-emerald-950/30 rounded px-3 py-1.5 self-start text-[10px] font-mono text-emerald-300">
                    Place millimetre scale bar here
                  </div>
                </div>
              )}

              {isCameraStarting && (
                <div className="text-center text-parchment-100 space-y-2 p-6">
                  <RefreshCw className="w-8 h-8 animate-spin mx-auto text-terracotta-400" />
                  <p className="text-xs font-mono">Initializing camera stream...</p>
                </div>
              )}

              {!isCameraStarting && !cameraStreamActive && (
                <div className="max-w-lg text-center p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-charcoal-800 border border-charcoal-700 flex items-center justify-center mx-auto text-terracotta-400">
                    <Camera className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-sm font-semibold text-white">Live Webcam Feed Unavailable</h4>
                    <p className="text-xs text-parchment-200 leading-relaxed">
                      {cameraError ||
                        'No physical camera was detected or camera access was declined. You can capture a realistic simulated overhead camera frame or open your device file/camera picker below.'}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleCaptureSimulatedFrame}
                      data-testid="capture-simulated-frame-btn"
                      className="bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow transition flex items-center space-x-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4" />
                      <span>Capture Simulated Tabletop Frame</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => deviceCameraInputRef.current?.click()}
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/25 text-xs font-semibold px-4 py-2 rounded-lg transition flex items-center space-x-2 cursor-pointer"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Choose / Take Device Photo</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Controls */}
            <div className="bg-parchment-100 border-t border-parchment-300 px-5 py-3.5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => startCameraStream(selectedDeviceId || undefined)}
                  className="text-xs bg-white hover:bg-parchment-200 text-charcoal-700 border border-parchment-300 px-3 py-1.5 rounded-md font-medium flex items-center space-x-1.5 transition cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Retry Webcam</span>
                </button>

                <button
                  type="button"
                  onClick={handleCaptureSimulatedFrame}
                  className="text-xs bg-terracotta-50 hover:bg-terracotta-100 text-terracotta-800 border border-terracotta-300 px-3 py-1.5 rounded-md font-medium flex items-center space-x-1.5 transition cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-terracotta-600" />
                  <span>Simulate Tabletop Capture</span>
                </button>
              </div>

              <div className="flex items-center space-x-2.5">
                <button
                  type="button"
                  onClick={handleCloseCameraModal}
                  className="text-xs text-charcoal-600 hover:text-charcoal-900 px-3 py-1.5 rounded-md font-medium"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={!cameraStreamActive}
                  onClick={handleCaptureLiveVideoFrame}
                  data-testid="shutter-capture-btn"
                  className="bg-terracotta-600 hover:bg-terracotta-700 disabled:opacity-40 text-white text-xs font-semibold px-5 py-2 rounded-lg shadow-sm flex items-center space-x-2 transition cursor-pointer"
                >
                  <Camera className="w-4 h-4" />
                  <span>Capture Overhead Photograph</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
