import React, { useState, useEffect } from 'react';
import {
  Project,
  ProjectState,
  HealthInfo,
  Fragment,
  VesselGroup,
  JoinCandidate,
  ReconstructionProfile,
  CalibrationData,
} from './types';
import { api } from './api';
import { Header } from './components/Header';
import { WorkflowNav, WorkflowStep } from './components/WorkflowNav';
import { RightPanel } from './components/RightPanel';
import { CaptureView } from './components/views/CaptureView';
import { GroupView } from './components/views/GroupView';
import { AssembleCanvas } from './components/views/AssembleCanvas';
import { ReconstructView } from './components/views/ReconstructView';
import { TypologyView } from './components/views/TypologyView';
import { ReviewView } from './components/views/ReviewView';
import { EvaluationChecklistModal } from './components/EvaluationChecklistModal';
import { ApiKeyModal } from './components/ApiKeyModal';
import { Plus, X } from 'lucide-react';

export const App: React.FC = () => {
  const [health, setHealth] = useState<HealthInfo | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  const [projectState, setProjectState] = useState<ProjectState | null>(null);
  const [currentStep, setCurrentStep] = useState<WorkflowStep>('capture');
  const [selectedFragmentId, setSelectedFragmentId] = useState<string | null>(null);
  const [isChecklistOpen, setIsChecklistOpen] = useState<boolean>(false);
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // Non-blocking New Project Modal state (replaces window.prompt)
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState<boolean>(false);
  const [newProjectName, setNewProjectName] = useState<string>('New Pottery Project');
  const [newProjectDesc, setNewProjectDesc] = useState<string>('');
  const [isCreatingProject, setIsCreatingProject] = useState<boolean>(false);

  // Initialize
  useEffect(() => {
    initApp();
  }, []);

  const initApp = async () => {
    try {
      const h = await api.getHealth();
      setHealth(h);
    } catch (e) {
      console.warn('Backend not responding yet:', e);
    }

    try {
      const projs = await api.listProjects();
      setProjects(projs);
      if (projs.length > 0) {
        selectProject(projs[0].id);
      } else {
        // Automatically seed with synthetic demo so interface is immediately populated
        handleLoadDemo();
      }
    } catch (e) {
      console.warn('Failed to load projects:', e);
    }
  };

  const selectProject = async (projId: string, preserveStep: boolean = false) => {
    setCurrentProjectId(projId);
    setSelectedFragmentId(null);
    try {
      const state = await api.getProjectState(projId);
      setProjectState(state);
      if (!preserveStep) {
        if (state.fragments.length > 0) {
          setCurrentStep('group');
        } else {
          setCurrentStep('capture');
        }
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleOpenCreateProject = () => {
    setNewProjectName(`Excavation Lot #${projects.length + 1}`);
    setNewProjectDesc('');
    setIsNewProjectModalOpen(true);
  };

  const handleConfirmCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newProjectName.trim() || 'New Pottery Project';
    setIsCreatingProject(true);
    try {
      const p = await api.createProject(trimmed, newProjectDesc.trim());
      setProjects((prev) => [p, ...prev]);
      setIsNewProjectModalOpen(false);
      await selectProject(p.id, true);
      setCurrentStep('capture');
    } catch (err: any) {
      console.error('Could not create project:', err);
    } finally {
      setIsCreatingProject(false);
    }
  };

  const handleLoadDemo = async () => {
    try {
      const res = await api.createDemoProject();
      const updatedList = await api.listProjects();
      setProjects(updatedList);
      await selectProject(res.project_id);
      setCurrentStep('group');
    } catch (err: any) {
      console.error('Could not load demonstration:', err);
    }
  };

  const handlePhotoUploaded = async (
    url: string,
    dims: [number, number],
    fragments?: Fragment[],
    groups?: VesselGroup[],
    calibration?: CalibrationData
  ) => {
    if (!projectState) return;
    const updatedProject: Project = {
      ...projectState.project,
      primary_photo_url: url,
      primary_photo_dimensions: dims,
      calibration: calibration || projectState.project.calibration,
    };
    setProjectState({
      ...projectState,
      project: updatedProject,
      fragments: fragments ?? [],
      groups: groups ?? [],
      joins: [],
    });
    setSelectedFragmentId(null);
    setProjects((prev) => prev.map((p) => (p.id === updatedProject.id ? updatedProject : p)));
    // Refresh full state from backend to ensure complete sync while remaining on Capture view for calibration
    try {
      const freshState = await api.getProjectState(updatedProject.id);
      setProjectState(freshState);
    } catch (e) {
      console.warn('Could not refresh project state after upload:', e);
    }
  };

  const handleCalibrationUpdated = async (calib: CalibrationData) => {
    if (!projectState) return;
    const updatedProj = { ...projectState.project, calibration: calib };
    setProjectState({ ...projectState, project: updatedProj });
    setProjects((prev) => prev.map((p) => (p.id === updatedProj.id ? updatedProj : p)));
    // Refresh fragments so updated mm2 / mm measurements are reflected
    try {
      const freshState = await api.getProjectState(updatedProj.id);
      setProjectState(freshState);
    } catch {
      // Ignore refresh warning
    }
  };

  const handleFragmentsUpdated = (frags: Fragment[]) => {
    if (!projectState) return;
    setProjectState({ ...projectState, fragments: frags });
  };

  const handleGroupsUpdated = (groups: VesselGroup[]) => {
    if (!projectState) return;
    setProjectState({ ...projectState, groups });
  };

  const handleJoinsUpdated = (joins: JoinCandidate[]) => {
    if (!projectState) return;
    setProjectState({ ...projectState, joins });
  };

  const handleProfileUpdated = (profile: ReconstructionProfile) => {
    if (!projectState) return;
    setProjectState({ ...projectState, reconstruction_profile: profile });
  };

  const handleProjectApproved = (reviewerName: string, snapshotId: string) => {
    if (!projectState) return;
    const now = new Date().toISOString();
    const updatedProj: Project = {
      ...projectState.project,
      status: 'approved',
      approved_at: now,
      reviewer_name: reviewerName,
    };
    const newSnapshot = {
      id: snapshotId,
      project_id: updatedProj.id,
      approved_at: now,
      reviewer_name: reviewerName,
      notes: 'Formal approval recorded.',
      state_snapshot: {},
    };
    setProjectState({
      ...projectState,
      project: updatedProj,
      snapshots: [newSnapshot, ...projectState.snapshots],
    });
    setProjects((prev) => prev.map((p) => (p.id === updatedProj.id ? updatedProj : p)));
  };

  const selectedFrag = projectState?.fragments.find((f) => f.id === selectedFragmentId) || null;

  return (
    <div className="flex flex-col h-screen bg-parchment-50 font-sans overflow-hidden">
      {/* 1. Header */}
      <Header
        currentProject={projectState?.project || null}
        projects={projects}
        health={health}
        onSelectProject={(id) => selectProject(id)}
        onCreateProject={handleOpenCreateProject}
        onLoadDemo={handleLoadDemo}
        onOpenChecklist={() => setIsChecklistOpen(true)}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        isSaving={isSaving}
      />

      {/* 2. Workflow Navigation */}
      <WorkflowNav
        currentStep={currentStep}
        onSelectStep={setCurrentStep}
        stats={{
          hasPhoto: Boolean(projectState?.project.primary_photo_url),
          fragmentCount: projectState?.fragments.length || 0,
          groupCount: projectState?.groups.length || 0,
          acceptedJoinsCount: projectState?.joins.filter((j) => j.status === 'accepted').length || 0,
          hasReconstruction: Boolean(projectState?.reconstruction_profile),
          isApproved: projectState?.project.status === 'approved',
        }}
      />

      {/* 3. Main Workspace & Evidence Inspector */}
      <div className="flex-1 flex overflow-hidden">
        {projectState ? (
          <>
            {currentStep === 'capture' && (
              <CaptureView
                project={projectState.project}
                fragmentCount={projectState.fragments.length}
                onPhotoUploaded={handlePhotoUploaded}
                onCalibrationUpdated={handleCalibrationUpdated}
                onNextStep={() => setCurrentStep('group')}
              />
            )}

            {currentStep === 'group' && (
              <GroupView
                project={projectState.project}
                fragments={projectState.fragments}
                groups={projectState.groups}
                selectedFragmentId={selectedFragmentId}
                onSelectFragment={(frag) => setSelectedFragmentId(frag ? frag.id : null)}
                onFragmentsUpdated={handleFragmentsUpdated}
                onGroupsUpdated={handleGroupsUpdated}
                onNextStep={() => setCurrentStep('assemble')}
              />
            )}

            {currentStep === 'assemble' && (
              <AssembleCanvas
                project={projectState.project}
                fragments={projectState.fragments}
                joins={projectState.joins}
                groups={projectState.groups}
                selectedFragmentId={selectedFragmentId}
                onSelectFragment={(frag) => setSelectedFragmentId(frag ? frag.id : null)}
                onFragmentsUpdated={handleFragmentsUpdated}
                onJoinsUpdated={handleJoinsUpdated}
                onNextStep={() => setCurrentStep('reconstruct')}
              />
            )}

            {currentStep === 'reconstruct' && (
              <ReconstructView
                project={projectState.project}
                profile={projectState.reconstruction_profile}
                onProfileUpdated={handleProfileUpdated}
                onNextStep={() => setCurrentStep('typology')}
              />
            )}

            {currentStep === 'typology' && (
              <TypologyView
                project={projectState.project}
                onNextStep={() => setCurrentStep('review')}
              />
            )}

            {currentStep === 'review' && (
              <ReviewView
                project={projectState.project}
                fragments={projectState.fragments}
                groups={projectState.groups}
                joins={projectState.joins}
                profile={projectState.reconstruction_profile}
                snapshots={projectState.snapshots}
                onProjectApproved={handleProjectApproved}
                onOpenChecklist={() => setIsChecklistOpen(true)}
              />
            )}

            {/* Right Evidence Inspector */}
            <RightPanel
              selectedFragment={selectedFrag}
              groups={projectState.groups}
              photos={projectState.photos}
              project={projectState.project}
              onUpdateFragment={(f) => {
                const updated = projectState.fragments.map((item) => (item.id === f.id ? f : item));
                handleFragmentsUpdated(updated);
                api.updateFragment(projectState.project.id, f);
              }}
              onDeselect={() => setSelectedFragmentId(null)}
              onPhotoUploaded={() => selectProject(projectState.project.id, true)}
            />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-charcoal-400 text-sm font-mono">
            Loading SHERD-FORGE workspace...
          </div>
        )}
      </div>

      {/* Create New Project Modal */}
      {isNewProjectModalOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-900/70 flex items-center justify-center p-4">
          <form
            onSubmit={handleConfirmCreateProject}
            className="bg-parchment-50 border border-parchment-300 rounded-xl shadow-xl max-w-md w-full overflow-hidden"
          >
            <div className="bg-parchment-100 border-b border-parchment-300 px-5 py-3.5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Plus className="w-4 h-4 text-terracotta-600" />
                <h3 className="text-sm font-bold text-charcoal-900">Create New Pottery Project</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsNewProjectModalOpen(false)}
                className="p-1 text-charcoal-500 hover:text-charcoal-900 rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-charcoal-700 mb-1">Project / Context Name</label>
                <input
                  type="text"
                  autoFocus
                  required
                  value={newProjectName}
                  onChange={(e) => setNewProjectName(e.target.value)}
                  placeholder="e.g. Trench 4 — Context 108 Ceramic Scatter"
                  className="w-full bg-white border border-parchment-300 rounded-md px-3 py-2 text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                />
              </div>
              <div>
                <label className="block font-semibold text-charcoal-700 mb-1">Excavation Notes (Optional)</label>
                <textarea
                  rows={2}
                  value={newProjectDesc}
                  onChange={(e) => setNewProjectDesc(e.target.value)}
                  placeholder="Tabletop scatter with calibration scale bar..."
                  className="w-full bg-white border border-parchment-300 rounded-md px-3 py-2 text-charcoal-900 focus:outline-none focus:ring-1 focus:ring-terracotta-500"
                />
              </div>
            </div>
            <div className="bg-parchment-100 border-t border-parchment-300 px-5 py-3 flex items-center justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsNewProjectModalOpen(false)}
                className="text-xs text-charcoal-600 hover:text-charcoal-900 px-3 py-1.5 rounded-md font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isCreatingProject}
                className="bg-terracotta-600 hover:bg-terracotta-700 disabled:opacity-50 text-white text-xs font-semibold px-4 py-2 rounded-md shadow-xs transition cursor-pointer"
              >
                {isCreatingProject ? 'Creating...' : 'Create & Open Capture'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Evaluation Checklist Modal */}
      <EvaluationChecklistModal
        isOpen={isChecklistOpen}
        onClose={() => setIsChecklistOpen(false)}
        stats={{
          isCalibrated: Boolean(projectState?.project.calibration.is_calibrated),
          fragmentCount: projectState?.fragments.length || 0,
          hasJoins: (projectState?.joins.length || 0) > 0,
          hasAcceptedJoin: (projectState?.joins.filter((j) => j.status === 'accepted').length || 0) > 0,
          hasReconstruction: Boolean(projectState?.reconstruction_profile),
          isApproved: projectState?.project.status === 'approved',
          isOfflineSupported: true,
        }}
      />

      {/* Gemini API Key Modal */}
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        health={health}
        onHealthUpdated={(updated) => setHealth(updated)}
      />
    </div>
  );
};
