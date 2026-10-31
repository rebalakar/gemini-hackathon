import React, { useState, useEffect } from 'react';
import { Project, ProjectState, HealthInfo, Fragment, VesselGroup, JoinCandidate, ReconstructionProfile, CalibrationData } from './types';
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

export const App: React.FC = () => {
  const [health, setHealth] = useState<HealthInfo | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);
  const [projectState, setProjectState] = useState<ProjectState | null>(null);
  const [currentStep, setCurrentStep] = useState<WorkflowStep>('capture');
  const [selectedFragmentId, setSelectedFragmentId] = useState<string | null>(null);
  const [isChecklistOpen, setIsChecklistOpen] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

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

  const selectProject = async (projId: string) => {
    setCurrentProjectId(projId);
    setSelectedFragmentId(null);
    try {
      const state = await api.getProjectState(projId);
      setProjectState(state);
      // Auto-advance step based on project data completeness
      if (state.fragments.length > 0) {
        setCurrentStep('group');
      } else {
        setCurrentStep('capture');
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreateProject = async () => {
    const name = prompt('Enter project name:', 'New Pottery Project') || 'New Pottery Project';
    try {
      const p = await api.createProject(name);
      setProjects((prev) => [p, ...prev]);
      selectProject(p.id);
    } catch (err: any) {
      alert(`Could not create project: ${err.message}`);
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
      alert(`Could not load demonstration: ${err.message}`);
    }
  };

  const handlePhotoUploaded = async (url: string, dims: [number, number]) => {
    if (!projectState) return;
    const updatedProject: Project = {
      ...projectState.project,
      primary_photo_url: url,
      primary_photo_dimensions: dims,
    };
    setProjectState({
      ...projectState,
      project: updatedProject,
    });
    setProjects((prev) => prev.map((p) => (p.id === updatedProject.id ? updatedProject : p)));
    setCurrentStep('group');
  };

  const handleCalibrationUpdated = (calib: CalibrationData) => {
    if (!projectState) return;
    const updatedProj = { ...projectState.project, calibration: calib };
    setProjectState({ ...projectState, project: updatedProj });
    setProjects((prev) => prev.map((p) => (p.id === updatedProj.id ? updatedProj : p)));
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
        onSelectProject={selectProject}
        onCreateProject={handleCreateProject}
        onLoadDemo={handleLoadDemo}
        onOpenChecklist={() => setIsChecklistOpen(true)}
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
              onPhotoUploaded={() => selectProject(projectState.project.id)}
            />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-charcoal-400 text-sm font-mono">
            Loading SHERD-FORGE workspace...
          </div>
        )}
      </div>

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
    </div>
  );
};
