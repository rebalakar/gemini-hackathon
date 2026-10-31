import React, { useState, useRef, useEffect } from 'react';
import { Project, Fragment, JoinCandidate, VesselGroup } from '../../types';
import {
  RotateCw, RotateCcw, ZoomIn, ZoomOut, Maximize2, Undo2, Redo2,
  Lock, Unlock, AlertTriangle, Check, X, ArrowRight, Play, Eye, EyeOff
} from 'lucide-react';
import { api } from '../../api';

interface AssembleCanvasProps {
  project: Project;
  fragments: Fragment[];
  joins: JoinCandidate[];
  groups: VesselGroup[];
  selectedFragmentId: string | null;
  onSelectFragment: (fragment: Fragment | null) => void;
  onFragmentsUpdated: (fragments: Fragment[]) => void;
  onJoinsUpdated: (joins: JoinCandidate[]) => void;
  onNextStep: () => void;
}

export const AssembleCanvas: React.FC<AssembleCanvasProps> = ({
  project,
  fragments,
  joins,
  groups,
  selectedFragmentId,
  onSelectFragment,
  onFragmentsUpdated,
  onJoinsUpdated,
  onNextStep,
}) => {
  const [zoom, setZoom] = useState<number>(0.85);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 100, y: 80 });
  const [isPanning, setIsPanning] = useState<boolean>(false);
  const [dragFragmentId, setDragFragmentId] = useState<string | null>(null);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [initialFragPlacement, setInitialFragPlacement] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [history, setHistory] = useState<Fragment[][]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [showOutlines, setShowOutlines] = useState<boolean>(true);
  const [crossGroups, setCrossGroups] = useState<boolean>(false);
  const [isCalculatingJoins, setIsCalculatingJoins] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize placements if zero
  useEffect(() => {
    let changed = false;
    const updated = fragments.map((f, i) => {
      if (f.placement.x === 0 && f.placement.y === 0) {
        changed = true;
        return {
          ...f,
          placement: {
            ...f.placement,
            x: f.centroid[0] || 200 + (i % 4) * 220,
            y: f.centroid[1] || 200 + Math.floor(i / 4) * 220,
          },
        };
      }
      return f;
    });
    if (changed) {
      onFragmentsUpdated(updated);
    }
  }, [fragments.length]);

  const handleSuggestJoins = async () => {
    setIsCalculatingJoins(true);
    try {
      const candidates = await api.suggestJoins(project.id, crossGroups);
      onJoinsUpdated(candidates);
    } catch (err: any) {
      alert(`Join suggestion failed: ${err.message}`);
    } finally {
      setIsCalculatingJoins(false);
    }
  };

  const handleJoinStatusChange = async (joinId: string, status: 'accepted' | 'rejected' | 'suggested') => {
    try {
      await api.updateJoinStatus(project.id, joinId, status);
      const updatedJoins = joins.map((j) => (j.id === joinId ? { ...j, status } : j));
      onJoinsUpdated(updatedJoins);

      // If accepted, snap fragment_b to fragment_a
      if (status === 'accepted') {
        const j = joins.find((x) => x.id === joinId);
        if (j) {
          const fa = fragments.find((f) => f.id === j.fragment_a_id);
          const fb = fragments.find((f) => f.id === j.fragment_b_id);
          if (fa && fb && !fb.placement.locked) {
            pushHistory();
            const newRotation = (fb.placement.rotation_deg + j.transform_rotation_deg) % 360;
            const newX = fa.placement.x + j.transform_tx;
            const newY = fa.placement.y + j.transform_ty;
            const updatedFrags = fragments.map((f) =>
              f.id === fb.id ? { ...f, placement: { ...f.placement, x: newX, y: newY, rotation_deg: newRotation } } : f
            );
            onFragmentsUpdated(updatedFrags);
            api.updateFragment(project.id, {
              ...fb,
              placement: { ...fb.placement, x: newX, y: newY, rotation_deg: newRotation },
            });
          }
        }
      }
    } catch (err: any) {
      alert(`Status update failed: ${err.message}`);
    }
  };

  const pushHistory = () => {
    const cur = fragments.map((f) => ({ ...f, placement: { ...f.placement } }));
    setHistory((prev) => [...prev.slice(0, historyIndex + 1), cur]);
    setHistoryIndex((prev) => prev + 1);
  };

  const handleRotateSelected = (degrees: number) => {
    if (!selectedFragmentId) return;
    const f = fragments.find((x) => x.id === selectedFragmentId);
    if (!f || f.placement.locked) return;
    pushHistory();
    const newRot = (f.placement.rotation_deg + degrees) % 360;
    const updated = fragments.map((x) =>
      x.id === selectedFragmentId ? { ...x, placement: { ...x.placement, rotation_deg: newRot } } : x
    );
    onFragmentsUpdated(updated);
    api.updateFragment(project.id, { ...f, placement: { ...f.placement, rotation_deg: newRot } });
  };

  const handleToggleLockPlacement = (fragId: string) => {
    const f = fragments.find((x) => x.id === fragId);
    if (!f) return;
    const updated = fragments.map((x) =>
      x.id === fragId ? { ...x, placement: { ...x.placement, locked: !x.placement.locked } } : x
    );
    onFragmentsUpdated(updated);
    api.updateFragment(project.id, { ...f, placement: { ...f.placement, locked: !f.placement.locked } });
  };

  const handleResetPlacement = (fragId: string) => {
    const f = fragments.find((x) => x.id === fragId);
    if (!f) return;
    pushHistory();
    const updated = fragments.map((x) =>
      x.id === fragId ? { ...x, placement: { x: f.centroid[0], y: f.centroid[1], rotation_deg: 0, locked: false } } : x
    );
    onFragmentsUpdated(updated);
    api.updateFragment(project.id, {
      ...f,
      placement: { x: f.centroid[0], y: f.centroid[1], rotation_deg: 0, locked: false },
    });
  };

  // Mouse pan & drag interactions
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('.fragment-item')) {
      return;
    }
    setIsPanning(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isPanning) {
      setPan({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    } else if (dragFragmentId) {
      const f = fragments.find((x) => x.id === dragFragmentId);
      if (!f || f.placement.locked) return;
      const dx = (e.clientX - dragStart.x) / zoom;
      const dy = (e.clientY - dragStart.y) / zoom;
      const newX = initialFragPlacement.x + dx;
      const newY = initialFragPlacement.y + dy;

      const updated = fragments.map((x) =>
        x.id === dragFragmentId ? { ...x, placement: { ...x.placement, x: newX, y: newY } } : x
      );
      onFragmentsUpdated(updated);
    }
  };

  const handleMouseUp = () => {
    if (isPanning) {
      setIsPanning(false);
    }
    if (dragFragmentId) {
      const f = fragments.find((x) => x.id === dragFragmentId);
      if (f) {
        api.updateFragment(project.id, f);
      }
      setDragFragmentId(null);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 1.1 : 0.9;
    setZoom((prev) => Math.min(2.5, Math.max(0.3, prev * factor)));
  };

  const selectedFrag = fragments.find((f) => f.id === selectedFragmentId);

  return (
    <div className="flex-1 flex flex-col p-6 overflow-y-auto space-y-4">
      {/* Top Banner Toolbar */}
      <div className="bg-white border border-parchment-300 rounded-lg p-3 shadow-2xs flex items-center justify-between">
        <div className="flex items-center space-x-6 text-xs">
          {/* Zoom controls */}
          <div className="flex items-center space-x-1 border-r border-parchment-300 pr-4">
            <button onClick={() => setZoom((z) => Math.max(0.3, z - 0.1))} className="p-1 text-charcoal-600 hover:text-charcoal-900 rounded">
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="font-mono text-[11px] text-charcoal-700 w-12 text-center">
              {Math.round(zoom * 100)}%
            </span>
            <button onClick={() => setZoom((z) => Math.min(2.5, z + 0.1))} className="p-1 text-charcoal-600 hover:text-charcoal-900 rounded">
              <ZoomIn className="w-4 h-4" />
            </button>
            <button onClick={() => { setZoom(1.0); setPan({ x: 80, y: 60 }); }} className="p-1 text-charcoal-400 hover:text-charcoal-800" title="Reset View">
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Selected Fragment Rotation Controls */}
          {selectedFrag && (
            <div className="flex items-center space-x-2 border-r border-parchment-300 pr-4">
              <span className="font-mono font-bold text-charcoal-800">{selectedFrag.id}:</span>
              <button
                onClick={() => handleRotateSelected(-5)}
                disabled={selectedFrag.placement.locked}
                className="p-1 rounded hover:bg-parchment-200 text-charcoal-700 disabled:opacity-40"
                title="Rotate -5°"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleRotateSelected(-45)}
                disabled={selectedFrag.placement.locked}
                className="px-1.5 py-0.5 rounded bg-parchment-100 hover:bg-parchment-200 text-[10px] font-mono text-charcoal-700 disabled:opacity-40"
              >
                -45°
              </button>
              <span className="font-mono text-charcoal-800 text-[11px] w-12 text-center">
                {Math.round(selectedFrag.placement.rotation_deg)}°
              </span>
              <button
                onClick={() => handleRotateSelected(45)}
                disabled={selectedFrag.placement.locked}
                className="px-1.5 py-0.5 rounded bg-parchment-100 hover:bg-parchment-200 text-[10px] font-mono text-charcoal-700 disabled:opacity-40"
              >
                +45°
              </button>
              <button
                onClick={() => handleRotateSelected(5)}
                disabled={selectedFrag.placement.locked}
                className="p-1 rounded hover:bg-parchment-200 text-charcoal-700 disabled:opacity-40"
                title="Rotate +5°"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleToggleLockPlacement(selectedFrag.id)}
                className="p-1 text-charcoal-600 hover:text-charcoal-900 ml-1"
                title={selectedFrag.placement.locked ? 'Unlock Placement' : 'Lock Placement'}
              >
                {selectedFrag.placement.locked ? <Lock className="w-3.5 h-3.5 text-terracotta-600" /> : <Unlock className="w-3.5 h-3.5 text-charcoal-400" />}
              </button>
              <button
                onClick={() => handleResetPlacement(selectedFrag.id)}
                className="text-[10px] text-charcoal-500 hover:text-charcoal-900 underline ml-1"
              >
                Reset
              </button>
            </div>
          )}

          {/* Toggle Outlines */}
          <button
            onClick={() => setShowOutlines((v) => !v)}
            className="flex items-center space-x-1 text-xs text-charcoal-600 hover:text-charcoal-900"
          >
            {showOutlines ? <Eye className="w-3.5 h-3.5 text-terracotta-600" /> : <EyeOff className="w-3.5 h-3.5 text-charcoal-400" />}
            <span>Outlines</span>
          </button>
        </div>

        {/* Suggest Joins Action */}
        <div className="flex items-center space-x-3 text-xs">
          <label className="flex items-center space-x-1 text-charcoal-600 cursor-pointer">
            <input
              type="checkbox"
              checked={crossGroups}
              onChange={(e) => setCrossGroups(e.target.checked)}
              className="rounded text-terracotta-600"
            />
            <span className="text-[11px]">Match across groups</span>
          </label>

          <button
            onClick={handleSuggestJoins}
            disabled={isCalculatingJoins || fragments.length < 2}
            className="flex items-center space-x-1.5 bg-charcoal-800 hover:bg-charcoal-900 disabled:opacity-50 text-white px-3 py-1.5 rounded-md font-semibold transition shadow-xs"
          >
            <Play className={`w-3.5 h-3.5 ${isCalculatingJoins ? 'animate-spin' : ''}`} />
            <span>{isCalculatingJoins ? 'Matching Contours...' : 'Suggest Geometric Joins'}</span>
          </button>

          <button
            onClick={onNextStep}
            className="bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition"
          >
            <span>Proceed to 3D Reconstruct</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Assembly Layout */}
      <div className="flex-1 grid grid-cols-12 gap-5 min-h-[560px]">
        {/* Interactive 2D Jigsaw Canvas */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onWheel={handleWheel}
          className="col-span-8 bg-charcoal-900 rounded-xl overflow-hidden relative cursor-grab active:cursor-grabbing border border-charcoal-700 shadow-inner flex select-none"
        >
          {/* Grid lines background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
              backgroundSize: `${40 * zoom}px ${40 * zoom}px`,
              backgroundPosition: `${pan.x}px ${pan.y}px`,
            }}
          />

          {/* Transformed Canvas Container */}
          <div
            className="absolute"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
              transformOrigin: '0 0',
            }}
          >
            {fragments.map((frag) => {
              const isSelected = selectedFragmentId === frag.id;
              const assignedGroup = groups.find((g) => g.id === frag.group_id);
              const groupColor = assignedGroup ? assignedGroup.color_hex : '#A0AEC0';

              return (
                <div
                  key={frag.id}
                  className="fragment-item absolute cursor-move"
                  style={{
                    left: `${frag.placement.x}px`,
                    top: `${frag.placement.y}px`,
                    transform: `translate(-50%, -50%) rotate(${frag.placement.rotation_deg}deg)`,
                  }}
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    onSelectFragment(frag);
                    if (!frag.placement.locked) {
                      setDragFragmentId(frag.id);
                      setDragStart({ x: e.clientX, y: e.clientY });
                      setInitialFragPlacement({ x: frag.placement.x, y: frag.placement.y });
                    }
                  }}
                >
                  {/* Fragment Transparent PNG Crop */}
                  <img
                    src={frag.crop_url}
                    alt={frag.id}
                    draggable={false}
                    className={`max-w-[240px] max-h-[240px] object-contain drop-shadow-xl transition-shadow ${
                      isSelected ? 'ring-2 ring-terracotta-400 ring-offset-2 ring-offset-charcoal-900' : ''
                    }`}
                  />

                  {/* ID Tag Pill */}
                  <div
                    className="absolute top-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold text-white shadow-md flex items-center space-x-1"
                    style={{ backgroundColor: groupColor }}
                  >
                    <span>{frag.id}</span>
                    {frag.placement.locked && <Lock className="w-2.5 h-2.5" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flat 2D Notice Overlay */}
          <div className="absolute bottom-3 left-3 bg-charcoal-950/80 border border-charcoal-700 text-[10px] text-charcoal-400 px-2.5 py-1 rounded backdrop-blur-xs font-mono">
            Proposed Assembly Hypothesis (Planar Projection) • Wheel: Zoom • Drag: Move
          </div>
        </div>

        {/* Candidate Joins List Panel */}
        <div className="col-span-4 bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs flex flex-col justify-between overflow-y-auto space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-parchment-300">
              <h3 className="font-semibold text-charcoal-900 text-sm">Suggested Edge Joins</h3>
              <span className="text-xs font-mono bg-parchment-200 px-2 py-0.5 rounded text-charcoal-700 font-semibold">
                {joins.length} candidates
              </span>
            </div>

            <p className="text-[11px] text-charcoal-500 mt-2 mb-3 leading-normal">
              Candidate joins are computed using rigid Procrustes contour alignment (no scaling). Accepting a join
              automatically translates and rotates the fragment into mating contact.
            </p>

            {joins.length === 0 ? (
              <div className="bg-parchment-50 border border-dashed border-parchment-300 rounded-lg p-6 text-center text-xs text-charcoal-500">
                <p>No candidate joins generated yet.</p>
                <p className="mt-1">Click "Suggest Geometric Joins" to evaluate broken edge complementarity.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {joins.map((join) => {
                  const isAccepted = join.status === 'accepted';
                  const isRejected = join.status === 'rejected';

                  return (
                    <div
                      key={join.id}
                      className={`border rounded-lg p-3 transition shadow-2xs ${
                        isAccepted
                          ? 'bg-emerald-50 border-emerald-300'
                          : isRejected
                          ? 'bg-gray-50 border-gray-200 opacity-60'
                          : 'bg-white border-parchment-300 hover:border-terracotta-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center space-x-1.5">
                          <span className="font-mono font-bold text-xs text-charcoal-900 bg-parchment-100 px-1.5 py-0.5 rounded border border-parchment-300">
                            {join.fragment_a_id} ↔ {join.fragment_b_id}
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-terracotta-100 text-terracotta-800">
                            {(join.compatibility_score * 100).toFixed(0)}% Match
                          </span>
                        </div>
                        <span
                          className={`text-[10px] uppercase font-mono font-semibold px-1.5 py-0.5 rounded ${
                            isAccepted
                              ? 'bg-emerald-200 text-emerald-900'
                              : isRejected
                              ? 'bg-gray-200 text-gray-700'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {join.status}
                        </span>
                      </div>

                      {/* Scientific Metrics */}
                      <div className="text-[11px] font-mono text-charcoal-600 space-y-0.5 mb-2 bg-parchment-50/70 p-2 rounded border border-parchment-200">
                        <div className="flex justify-between">
                          <span>Edge Residual:</span>
                          <span className="font-semibold text-charcoal-800">
                            {join.residual_mm ? `${join.residual_mm} mm` : `${join.residual_px} px`}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Matched Length:</span>
                          <span>{join.matched_length_mm ? `${join.matched_length_mm} mm` : `${join.matched_length_px} px`}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Normal Opposition:</span>
                          <span>{(join.tangent_score * 100).toFixed(0)}%</span>
                        </div>
                      </div>

                      <p className="text-[10px] text-charcoal-500 mb-2 italic">{join.explanation}</p>

                      {/* Action buttons */}
                      <div className="flex items-center space-x-2 pt-1 border-t border-parchment-200">
                        <button
                          onClick={() => handleJoinStatusChange(join.id, isAccepted ? 'suggested' : 'accepted')}
                          className={`flex-1 text-xs py-1 px-2 rounded font-semibold flex items-center justify-center space-x-1 transition ${
                            isAccepted
                              ? 'bg-emerald-600 text-white'
                              : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-800'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>{isAccepted ? 'Accepted (Snap applied)' : 'Accept Join'}</span>
                        </button>

                        <button
                          onClick={() => handleJoinStatusChange(join.id, isRejected ? 'suggested' : 'rejected')}
                          className={`text-xs py-1 px-2.5 rounded transition ${
                            isRejected
                              ? 'bg-gray-400 text-white'
                              : 'bg-parchment-100 hover:bg-parchment-200 text-charcoal-600'
                          }`}
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
