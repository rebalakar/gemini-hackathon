import React, { useState } from 'react';
import { Project, Fragment, VesselGroup, JoinCandidate, ReconstructionProfile, ReviewSnapshot } from '../../types';
import {
  ClipboardCheck, CheckCircle2, ShieldCheck, Download, FileJson,
  FileSpreadsheet, Image as ImageIcon, History, UserCheck, AlertCircle
} from 'lucide-react';
import { api } from '../../api';

interface ReviewViewProps {
  project: Project;
  fragments: Fragment[];
  groups: VesselGroup[];
  joins: JoinCandidate[];
  profile: ReconstructionProfile | null;
  snapshots: ReviewSnapshot[];
  onProjectApproved: (reviewerName: string, snapshotId: string) => void;
  onOpenChecklist: () => void;
}

export const ReviewView: React.FC<ReviewViewProps> = ({
  project,
  fragments,
  groups,
  joins,
  profile,
  snapshots,
  onProjectApproved,
  onOpenChecklist,
}) => {
  const [reviewerName, setReviewerName] = useState<string>(project.reviewer_name || '');
  const [approvalNotes, setApprovalNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const acceptedJoins = joins.filter((j) => j.status === 'accepted');

  const handleApprove = async () => {
    if (!reviewerName.trim()) {
      alert('Please enter a reviewer name or investigator initials before signing approval.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await api.approveProject(project.id, reviewerName.trim(), approvalNotes.trim());
      onProjectApproved(reviewerName.trim(), res.snapshot_id);
    } catch (err: any) {
      alert(`Approval failed: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownloadJson = () => {
    window.open(`/api/projects/${project.id}/export/json`, '_blank');
  };

  const handleDownloadCsv = () => {
    window.open(`/api/projects/${project.id}/export/csv`, '_blank');
  };

  const handleDownloadSvg = () => {
    window.open(`/api/projects/${project.id}/reconstruction/svg`, '_blank');
  };

  return (
    <div className="flex-1 flex flex-col p-6 overflow-y-auto space-y-6">
      {/* Top Banner Toolbar */}
      <div className="bg-white border border-parchment-300 rounded-lg p-4 shadow-2xs flex items-center justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <ClipboardCheck className="w-5 h-5 text-terracotta-600" />
            <h2 className="font-semibold text-charcoal-900 text-base">Provenance & Review Sign-Off</h2>
          </div>
          <p className="text-xs text-charcoal-500 mt-0.5">
            Clear segregation of empirical observation, algorithmic computation, and human-approved conclusions.
          </p>
        </div>

        {/* Export Buttons */}
        <div className="flex items-center space-x-2.5">
          <button
            onClick={handleDownloadJson}
            className="flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-800 border border-parchment-300 px-3 py-1.5 rounded-md text-xs font-semibold transition"
          >
            <FileJson className="w-4 h-4 text-terracotta-600" />
            <span>Export JSON Record</span>
          </button>
          <button
            onClick={handleDownloadCsv}
            className="flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-800 border border-parchment-300 px-3 py-1.5 rounded-md text-xs font-semibold transition"
          >
            <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
            <span>Export CSV Measurements</span>
          </button>
          <button
            onClick={handleDownloadSvg}
            className="flex items-center space-x-1.5 bg-parchment-100 hover:bg-parchment-200 text-charcoal-800 border border-parchment-300 px-3 py-1.5 rounded-md text-xs font-semibold transition"
          >
            <ImageIcon className="w-4 h-4 text-blue-600" />
            <span>Export SVG Profile</span>
          </button>
        </div>
      </div>

      {/* 4-Pillar Epistemological Breakdown Grid */}
      <div className="grid grid-cols-4 gap-4">
        {/* 1. Observed Evidence */}
        <div className="bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs space-y-3">
          <div className="flex items-center space-x-2 text-charcoal-900 font-semibold text-xs border-b border-parchment-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>1. Observed Evidence</span>
          </div>
          <div className="text-xs font-mono space-y-2 text-charcoal-600">
            <div>• Primary overhead photograph</div>
            <div>• Scale marker in reference plane</div>
            <div>• {fragments.length} detected fragment silhouettes</div>
            <div>• User qualitative fabric observations</div>
          </div>
        </div>

        {/* 2. Computed Measurements */}
        <div className="bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs space-y-3">
          <div className="flex items-center space-x-2 text-charcoal-900 font-semibold text-xs border-b border-parchment-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>2. Computed Measurements</span>
          </div>
          <div className="text-xs font-mono space-y-2 text-charcoal-600">
            <div>• Scale: {project.calibration.px_per_mm?.toFixed(2) || 'N/A'} px/mm</div>
            <div>• Color histogram correlation</div>
            <div>• Contour arc-length & area</div>
            <div>
              • Rim circle fit: {profile?.rim_diameter_mm ? `Ø ${profile.rim_diameter_mm.toFixed(1)} mm` : 'Pending'}
            </div>
          </div>
        </div>

        {/* 3. Proposed Interpretations */}
        <div className="bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs space-y-3">
          <div className="flex items-center space-x-2 text-charcoal-900 font-semibold text-xs border-b border-parchment-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span>3. Proposed Interpretations</span>
          </div>
          <div className="text-xs font-mono space-y-2 text-charcoal-600">
            <div>• {groups.length} vessel clustering proposals</div>
            <div>• {joins.length} geometric edge match candidates</div>
            <div>• Rotational lathe 3D hypothesis</div>
            <div>• Demonstration typology candidates</div>
          </div>
        </div>

        {/* 4. Human-Approved Decisions */}
        <div className="bg-white rounded-xl border border-parchment-300 p-4 shadow-2xs space-y-3">
          <div className="flex items-center space-x-2 text-charcoal-900 font-semibold text-xs border-b border-parchment-200 pb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>4. Human Decisions</span>
          </div>
          <div className="text-xs font-mono space-y-2 text-charcoal-600">
            <div>• {acceptedJoins.length} accepted joins</div>
            <div>• {groups.filter((g) => g.confirmed).length} confirmed vessel groups</div>
            <div>• Validated profile control points</div>
            <div>
              • Status: {project.status === 'approved' ? 'Formally Approved' : 'Draft / Unapproved'}
            </div>
          </div>
        </div>
      </div>

      {/* Main Review Form & Historical Snapshots */}
      <div className="grid grid-cols-12 gap-6">
        {/* Formal Approval Card */}
        <div className="col-span-7 bg-white rounded-xl border border-parchment-300 p-5 shadow-2xs space-y-4">
          <div className="flex items-center space-x-2 pb-3 border-b border-parchment-200">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <div>
              <h3 className="font-semibold text-charcoal-900 text-sm">Formal Archaeological Approval</h3>
              <p className="text-xs text-charcoal-500">
                Creates an immutable timestamped snapshot in the SQLite database preserving decisions.
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-charcoal-700 font-semibold mb-1">
                Lead Reviewer / Specialist Name:
              </label>
              <input
                type="text"
                value={reviewerName}
                onChange={(e) => setReviewerName(e.target.value)}
                placeholder="e.g. Dr. H. Carter, Ceramic Specialist"
                className="w-full bg-parchment-50 border border-parchment-300 rounded px-3 py-2 text-charcoal-900 text-sm"
              />
            </div>

            <div>
              <label className="block text-charcoal-700 font-semibold mb-1">
                Approval Notes & Methodological Justification:
              </label>
              <textarea
                rows={3}
                value={approvalNotes}
                onChange={(e) => setApprovalNotes(e.target.value)}
                placeholder="Confirming vessel associations based on matching fine slip and mating fracture edges on S1/S2..."
                className="w-full bg-parchment-50 border border-parchment-300 rounded px-3 py-2 text-charcoal-900 text-xs"
              />
            </div>

            <div className="pt-2">
              <button
                onClick={handleApprove}
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm py-2.5 rounded-lg shadow-sm transition flex items-center justify-center space-x-2"
              >
                <UserCheck className="w-4 h-4" />
                <span>{isSubmitting ? 'Recording Snapshot...' : 'Sign & Freeze Approved Record'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Snapshot History */}
        <div className="col-span-5 bg-white rounded-xl border border-parchment-300 p-5 shadow-2xs space-y-4">
          <div className="flex items-center space-x-2 pb-3 border-b border-parchment-200">
            <History className="w-4 h-4 text-charcoal-600" />
            <h3 className="font-semibold text-charcoal-900 text-sm">Approved Snapshot Archive</h3>
          </div>

          {snapshots.length === 0 ? (
            <p className="text-xs text-charcoal-500 italic">No approved snapshots recorded yet.</p>
          ) : (
            <div className="space-y-3 max-h-72 overflow-y-auto">
              {snapshots.map((snap) => (
                <div key={snap.id} className="p-3 rounded-lg bg-parchment-50 border border-parchment-200 text-xs space-y-1">
                  <div className="flex justify-between font-mono font-bold text-charcoal-900">
                    <span>{snap.reviewer_name}</span>
                    <span className="text-emerald-700 font-semibold">APPROVED</span>
                  </div>
                  <div className="text-[10px] text-charcoal-400 font-mono">
                    {new Date(snap.approved_at).toLocaleString()}
                  </div>
                  {snap.notes && <p className="text-charcoal-600 italic text-[11px] mt-1">{snap.notes}</p>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
