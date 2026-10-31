import React from 'react';
import { Project, HealthInfo } from '../types';
import { Layers, Sparkles, CheckCircle2, Clock, Plus, Beaker, FileSpreadsheet } from 'lucide-react';

interface HeaderProps {
  currentProject: Project | null;
  projects: Project[];
  health: HealthInfo | null;
  onSelectProject: (id: string) => void;
  onCreateProject: () => void;
  onLoadDemo: () => void;
  onOpenChecklist: () => void;
  isSaving: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentProject,
  projects,
  health,
  onSelectProject,
  onCreateProject,
  onLoadDemo,
  onOpenChecklist,
  isSaving
}) => {
  return (
    <header className="bg-parchment-100 border-b border-parchment-300 px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Brand & Project Selector */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-lg bg-terracotta-600 flex items-center justify-center text-white shadow-sm ring-2 ring-terracotta-200">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono font-black text-lg tracking-wider text-charcoal-900">SHERD-FORGE</span>
              <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-terracotta-100 text-terracotta-800 border border-terracotta-200">
                v1.0
              </span>
            </div>
            <p className="text-xs text-charcoal-400 font-medium">Archaeological Fragment Reconstruction</p>
          </div>
        </div>

        {/* Project Selector & Actions */}
        <div className="flex items-center space-x-2 pl-4 border-l border-parchment-300">
          <select
            value={currentProject?.id || ''}
            onChange={(e) => onSelectProject(e.target.value)}
            className="bg-white border border-parchment-300 text-charcoal-800 text-xs rounded-md px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-terracotta-500 font-medium"
          >
            {projects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.status.toUpperCase()})
              </option>
            ))}
          </select>

          <button
            onClick={onCreateProject}
            title="Create New Project"
            className="p-1.5 rounded-md hover:bg-parchment-200 text-charcoal-600 transition"
          >
            <Plus className="w-4 h-4" />
          </button>

          <button
            onClick={onLoadDemo}
            className="flex items-center space-x-1.5 bg-terracotta-50 hover:bg-terracotta-100 text-terracotta-700 border border-terracotta-300 text-xs px-2.5 py-1.5 rounded-md font-semibold transition shadow-xs"
          >
            <Beaker className="w-3.5 h-3.5 text-terracotta-600" />
            <span>Synthetic Demo</span>
          </button>
        </div>
      </div>

      {/* Center status badges */}
      <div className="flex items-center space-x-4">
        {/* Scale Status */}
        <div className="text-xs flex items-center space-x-1.5 font-mono px-2.5 py-1 rounded bg-white border border-parchment-300 shadow-2xs">
          <span className="text-charcoal-400">Scale:</span>
          {currentProject?.calibration?.is_calibrated ? (
            <span className="text-technical-green font-semibold">
              {currentProject.calibration.px_per_mm?.toFixed(2)} px/mm
            </span>
          ) : (
            <span className="text-technical-amber font-medium">Uncalibrated (px)</span>
          )}
        </div>

        {/* AI Adapter Mode */}
        <div className="text-xs flex items-center space-x-1.5 px-2.5 py-1 rounded bg-white border border-parchment-300 font-mono shadow-2xs">
          <Sparkles className={`w-3.5 h-3.5 ${health?.gemini_available ? 'text-purple-600' : 'text-charcoal-400'}`} />
          <span className="text-charcoal-600 text-[11px]">
            {health?.gemini_available ? `Gemini Active (${health.gemini_model})` : 'Offline Deterministic CV'}
          </span>
        </div>

        {/* Evaluation Checklist */}
        <button
          onClick={onOpenChecklist}
          className="text-xs flex items-center space-x-1 text-charcoal-600 hover:text-charcoal-900 px-2 py-1 rounded hover:bg-parchment-200 transition"
        >
          <FileSpreadsheet className="w-3.5 h-3.5 text-terracotta-600" />
          <span>Evaluation Checklist</span>
        </button>
      </div>

      {/* Right project state */}
      <div className="flex items-center space-x-3">
        {isSaving ? (
          <span className="text-xs text-charcoal-400 flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 animate-spin" />
            <span>Saving...</span>
          </span>
        ) : currentProject?.status === 'approved' ? (
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center space-x-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Approved: {currentProject.reviewer_name || 'Reviewer'}</span>
          </span>
        ) : (
          <span className="text-xs font-medium px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
            Working Draft
          </span>
        )}
      </div>
    </header>
  );
};
