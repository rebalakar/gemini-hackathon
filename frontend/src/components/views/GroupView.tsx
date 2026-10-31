import React, { useState, useRef } from 'react';
import { Project, Fragment, VesselGroup } from '../../types';
import {
  Shapes, Plus, Trash2, Lock, Unlock, RefreshCw, Sliders,
  CheckCircle, ArrowRight, Tag, HelpCircle, Layers
} from 'lucide-react';
import { api } from '../../api';

interface GroupViewProps {
  project: Project;
  fragments: Fragment[];
  groups: VesselGroup[];
  selectedFragmentId: string | null;
  onSelectFragment: (fragment: Fragment | null) => void;
  onFragmentsUpdated: (fragments: Fragment[]) => void;
  onGroupsUpdated: (groups: VesselGroup[]) => void;
  onNextStep: () => void;
}

export const GroupView: React.FC<GroupViewProps> = ({
  project,
  fragments,
  groups,
  selectedFragmentId,
  onSelectFragment,
  onFragmentsUpdated,
  onGroupsUpdated,
  onNextStep,
}) => {
  const [sensitivity, setSensitivity] = useState<number>(1.0);
  const [isDetecting, setIsDetecting] = useState(false);
  const [groupThreshold, setGroupThreshold] = useState<number>(0.68);
  const [isGrouping, setIsGrouping] = useState(false);
  const [drawingPolygon, setDrawingPolygon] = useState<boolean>(false);
  const [polygonPoints, setPolygonPoints] = useState<[number, number][]>([]);

  const imgRef = useRef<HTMLImageElement>(null);

  const handleRunDetection = async () => {
    setIsDetecting(true);
    try {
      const frags = await api.runDetection(project.id, sensitivity);
      onFragmentsUpdated(frags);
      if (frags.length > 0) {
        onSelectFragment(frags[0]);
      }
    } catch (err: any) {
      alert(`Detection failed: ${err.message}`);
    } finally {
      setIsDetecting(false);
    }
  };

  const handleGroupFragments = async () => {
    setIsGrouping(true);
    try {
      const res = await api.groupFragments(project.id, groupThreshold);
      onGroupsUpdated(res.groups);
      onFragmentsUpdated(res.fragments);
    } catch (err: any) {
      alert(`Grouping failed: ${err.message}`);
    } finally {
      setIsGrouping(false);
    }
  };

  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!drawingPolygon || !imgRef.current) return;
    const rect = imgRef.current.getBoundingClientRect();
    const naturalW = imgRef.current.naturalWidth;
    const naturalH = imgRef.current.naturalHeight;

    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const scaleX = naturalW / rect.width;
    const scaleY = naturalH / rect.height;

    const origX = Math.round(clickX * scaleX);
    const origY = Math.round(clickY * scaleY);

    setPolygonPoints([...polygonPoints, [origX, origY]]);
  };

  const handleFinishPolygon = async () => {
    if (polygonPoints.length < 3) {
      alert('At least 3 points are required to define a fragment polygon.');
      return;
    }
    try {
      const newFrag = await api.addFragmentPolygon(project.id, polygonPoints);
      onFragmentsUpdated([...fragments, newFrag]);
      onSelectFragment(newFrag);
      setDrawingPolygon(false);
      setPolygonPoints([]);
    } catch (err: any) {
      alert(`Failed to add polygon: ${err.message}`);
    }
  };

  const handleDeleteSelected = async () => {
    if (!selectedFragmentId) return;
    if (!confirm(`Delete fragment ${selectedFragmentId}?`)) return;
    try {
      await api.deleteFragment(project.id, selectedFragmentId);
      const remaining = fragments.filter((f) => f.id !== selectedFragmentId);
      onFragmentsUpdated(remaining);
      onSelectFragment(null);
    } catch (err: any) {
      alert(`Delete failed: ${err.message}`);
    }
  };

  const handleMoveFragment = (fragId: string, targetGroupId: string | null) => {
    const updated = fragments.map((f) => {
      if (f.id === fragId) {
        return { ...f, group_id: targetGroupId };
      }
      return f;
    });
    onFragmentsUpdated(updated);

    // Update group lists
    const updatedGroups = groups.map((g) => {
      let fids = g.fragment_ids.filter((id) => id !== fragId);
      if (g.id === targetGroupId) {
        fids.push(fragId);
      }
      return { ...g, fragment_ids: fids };
    });
    onGroupsUpdated(updatedGroups);
    api.saveGroups(project.id, updatedGroups);
  };

  const handleToggleLockGroup = (fragId: string) => {
    const f = fragments.find((x) => x.id === fragId);
    if (!f) return;
    const updated = fragments.map((x) => (x.id === fragId ? { ...x, locked_group: !x.locked_group } : x));
    onFragmentsUpdated(updated);
    api.updateFragment(project.id, { ...f, locked_group: !f.locked_group });
  };

  const handleCreateNewGroup = () => {
    const newGid = `VG${groups.length + 1}`;
    const colors = ['#C85A32', '#2A6F97', '#588157', '#B08968', '#7209B7', '#E07A5F'];
    const newGroup: VesselGroup = {
      id: newGid,
      project_id: project.id,
      name: `Vessel Group ${groups.length + 1}`,
      color_hex: colors[groups.length % colors.length],
      fragment_ids: selectedFragmentId ? [selectedFragmentId] : [],
      confirmed: false,
      notes: 'User created group',
    };
    const updated = [...groups, newGroup];
    onGroupsUpdated(updated);
    api.saveGroups(project.id, updated);
  };

  return (
    <div className="flex-1 flex flex-col p-6 overflow-y-auto space-y-4">
      {/* Detection & Tooling Toolbar */}
      <div className="bg-white border border-parchment-300 rounded-lg p-3 shadow-2xs flex items-center justify-between">
        <div className="flex items-center space-x-6 text-xs">
          {/* Sensitivity Slider */}
          <div className="flex items-center space-x-2">
            <Sliders className="w-3.5 h-3.5 text-charcoal-400" />
            <span className="text-charcoal-600 font-medium">Detection Sensitivity:</span>
            <input
              type="range"
              min="0.4"
              max="2.2"
              step="0.1"
              value={sensitivity}
              onChange={(e) => setSensitivity(parseFloat(e.target.value))}
              className="w-24 accent-terracotta-600"
            />
            <span className="font-mono text-charcoal-700 w-8">{sensitivity.toFixed(1)}x</span>
          </div>

          <button
            onClick={handleRunDetection}
            disabled={isDetecting}
            className="flex items-center space-x-1.5 bg-terracotta-600 hover:bg-terracotta-700 disabled:opacity-50 text-white px-3 py-1.5 rounded-md font-semibold transition shadow-xs"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isDetecting ? 'animate-spin' : ''}`} />
            <span>{isDetecting ? 'Segmenting...' : 'Detect Sherds'}</span>
          </button>

          {/* Polygon Annotation Tool */}
          {drawingPolygon ? (
            <div className="flex items-center space-x-2 bg-amber-50 border border-amber-300 px-3 py-1 rounded-md">
              <span className="text-amber-800 font-medium">
                Click vertices on photo ({polygonPoints.length} pts)
              </span>
              <button
                onClick={handleFinishPolygon}
                className="bg-amber-600 text-white px-2 py-0.5 rounded text-xs font-semibold"
              >
                Done
              </button>
              <button
                onClick={() => {
                  setDrawingPolygon(false);
                  setPolygonPoints([]);
                }}
                className="text-xs text-charcoal-500 underline"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setDrawingPolygon(true);
                setPolygonPoints([]);
              }}
              className="flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-700 border border-parchment-300 px-3 py-1.5 rounded-md transition"
            >
              <Plus className="w-3.5 h-3.5 text-terracotta-600" />
              <span>Add Missing Polygon</span>
            </button>
          )}

          {selectedFragmentId && (
            <button
              onClick={handleDeleteSelected}
              className="flex items-center space-x-1 text-red-600 hover:text-red-800 px-2.5 py-1.5 rounded hover:bg-red-50 transition"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Delete {selectedFragmentId}</span>
            </button>
          )}
        </div>

        {/* Grouping Action */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 text-xs">
            <span className="text-charcoal-500">Group Strictness:</span>
            <input
              type="range"
              min="0.50"
              max="0.88"
              step="0.02"
              value={groupThreshold}
              onChange={(e) => setGroupThreshold(parseFloat(e.target.value))}
              className="w-20 accent-terracotta-600"
            />
            <span className="font-mono text-charcoal-700 w-8">{(groupThreshold * 100).toFixed(0)}%</span>
          </div>

          <button
            onClick={handleGroupFragments}
            disabled={isGrouping || fragments.length === 0}
            className="flex items-center space-x-1.5 bg-charcoal-800 hover:bg-charcoal-900 disabled:opacity-50 text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow-sm transition"
          >
            <Layers className="w-3.5 h-3.5 text-terracotta-400" />
            <span>{isGrouping ? 'Clustering...' : 'Suggest Vessel Groups'}</span>
          </button>

          <button
            onClick={onNextStep}
            className="bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition"
          >
            <span>Proceed to Joins</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="flex-1 grid grid-cols-12 gap-5 min-h-[520px]">
        {/* Photo with Overlay Canvas */}
        <div className="col-span-8 bg-charcoal-900 rounded-xl overflow-hidden relative flex items-center justify-center p-2 border border-charcoal-700 shadow-inner">
          <div className="relative inline-block max-w-full max-h-full">
            <img
              ref={imgRef}
              src={project.primary_photo_url || ''}
              alt="Sherd Detection"
              onClick={handleImageClick}
              className={`max-w-full max-h-[640px] object-contain rounded select-none ${
                drawingPolygon ? 'cursor-crosshair' : 'cursor-pointer'
              }`}
            />

            {/* SVG Contours & Labels Overlay */}
            <svg
              className="absolute inset-0 pointer-events-none w-full h-full"
              viewBox={`0 0 ${project.primary_photo_dimensions?.[0] || 1600} ${project.primary_photo_dimensions?.[1] || 1200}`}
            >
              {fragments.map((frag) => {
                const isSelected = selectedFragmentId === frag.id;
                const assignedGroup = groups.find((g) => g.id === frag.group_id);
                const strokeColor = assignedGroup ? assignedGroup.color_hex : '#9CA3AF';
                const fillColor = isSelected ? `${strokeColor}44` : 'transparent';

                const pathData =
                  frag.contour.map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt[0]} ${pt[1]}`).join(' ') + ' Z';

                return (
                  <g key={frag.id} className="pointer-events-auto cursor-pointer" onClick={() => onSelectFragment(frag)}>
                    {/* Outline */}
                    <path
                      d={pathData}
                      fill={fillColor}
                      stroke={strokeColor}
                      strokeWidth={isSelected ? '5' : '3'}
                      strokeDasharray={assignedGroup ? 'none' : '6,4'}
                      className="transition-all hover:stroke-white"
                    />

                    {/* Centroid Label Pill */}
                    <g transform={`translate(${frag.centroid[0]}, ${frag.centroid[1]})`}>
                      <rect
                        x="-20"
                        y="-12"
                        width="40"
                        height="24"
                        rx="4"
                        fill="#1F2421"
                        stroke={strokeColor}
                        strokeWidth="2"
                        className="shadow-md"
                      />
                      <text
                        x="0"
                        y="4"
                        fill="#FFFFFF"
                        fontSize="12"
                        fontWeight="bold"
                        fontFamily="monospace"
                        textAnchor="middle"
                      >
                        {frag.id}
                      </text>
                    </g>
                  </g>
                );
              })}

              {/* In-progress Polygon vertices */}
              {drawingPolygon && polygonPoints.length > 0 && (
                <g>
                  <polyline
                    points={polygonPoints.map((p) => `${p[0]},${p[1]}`).join(' ')}
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3"
                    strokeDasharray="4,4"
                  />
                  {polygonPoints.map((p, idx) => (
                    <circle key={idx} cx={p[0]} cy={p[1]} r="5" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="2" />
                  ))}
                </g>
              )}
            </svg>
          </div>
        </div>

        {/* Vessel Groups Hierarchy & Manual Corrections */}
        <div className="col-span-4 bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs flex flex-col justify-between overflow-y-auto space-y-4">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-parchment-300">
              <div className="flex items-center space-x-2">
                <Tag className="w-4 h-4 text-terracotta-600" />
                <h3 className="font-semibold text-charcoal-900 text-sm">Vessel Groups</h3>
              </div>
              <button
                onClick={handleCreateNewGroup}
                className="text-xs text-terracotta-700 hover:text-terracotta-900 font-semibold flex items-center space-x-1"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Group</span>
              </button>
            </div>

            <p className="text-[11px] text-charcoal-500 mt-2 mb-4 leading-normal">
              Conservative grouping clusters fragments with matching fabric color and texture. Drag or select below to
              reassign or lock assignments.
            </p>

            {/* Groups List */}
            <div className="space-y-3">
              {groups.map((group) => (
                <div key={group.id} className="border border-parchment-300 rounded-lg p-3 bg-parchment-50/70 shadow-2xs">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3.5 h-3.5 rounded-full" style={{ backgroundColor: group.color_hex }} />
                      <span className="font-semibold text-xs text-charcoal-900">{group.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-charcoal-500">
                      {group.fragment_ids.length} fragments
                    </span>
                  </div>

                  {/* Fragment Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {group.fragment_ids.map((fid) => {
                      const frag = fragments.find((f) => f.id === fid);
                      const isSelected = selectedFragmentId === fid;
                      return (
                        <div
                          key={fid}
                          onClick={() => frag && onSelectFragment(frag)}
                          className={`flex items-center space-x-1 px-2 py-1 rounded text-xs font-mono font-bold cursor-pointer transition ${
                            isSelected
                              ? 'bg-charcoal-800 text-white ring-2 ring-terracotta-500'
                              : 'bg-white border border-parchment-300 text-charcoal-800 hover:bg-parchment-100'
                          }`}
                        >
                          <span>{fid}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleToggleLockGroup(fid);
                            }}
                            title={frag?.locked_group ? 'Assignment Locked' : 'Unlocked'}
                            className="text-charcoal-400 hover:text-charcoal-800 pl-1"
                          >
                            {frag?.locked_group ? (
                              <Lock className="w-3 h-3 text-terracotta-600" />
                            ) : (
                              <Unlock className="w-3 h-3 text-charcoal-300" />
                            )}
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleMoveFragment(fid, null);
                            }}
                            title="Unassign"
                            className="text-charcoal-400 hover:text-red-600 pl-0.5"
                          >
                            ×
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}

              {/* Unassigned Fragments */}
              {fragments.filter((f) => !f.group_id).length > 0 && (
                <div className="border border-dashed border-charcoal-300 rounded-lg p-3 bg-white">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold text-charcoal-500 flex items-center space-x-1">
                      <HelpCircle className="w-3.5 h-3.5" />
                      <span>Unassigned Fragments</span>
                    </span>
                    <span className="text-[10px] font-mono text-charcoal-400">
                      {fragments.filter((f) => !f.group_id).length} sherds
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {fragments
                      .filter((f) => !f.group_id)
                      .map((frag) => (
                        <div
                          key={frag.id}
                          onClick={() => onSelectFragment(frag)}
                          className={`px-2 py-1 rounded text-xs font-mono font-medium cursor-pointer border ${
                            selectedFragmentId === frag.id
                              ? 'bg-charcoal-800 text-white'
                              : 'bg-parchment-100 border-parchment-300 text-charcoal-600 hover:bg-parchment-200'
                          }`}
                        >
                          {frag.id}
                        </div>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Quick Reassign Dropdown for selected fragment */}
          {selectedFragmentId && (
            <div className="pt-3 border-t border-parchment-300 flex items-center justify-between text-xs">
              <span className="text-charcoal-600">Assign {selectedFragmentId} to:</span>
              <select
                value={fragments.find((f) => f.id === selectedFragmentId)?.group_id || ''}
                onChange={(e) => handleMoveFragment(selectedFragmentId, e.target.value || null)}
                className="bg-white border border-parchment-300 rounded px-2 py-1 text-xs font-medium text-charcoal-800"
              >
                <option value="">Unassigned</option>
                {groups.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
