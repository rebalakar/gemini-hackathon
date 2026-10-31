import {
  Project, ProjectState, CalibrationData, Fragment,
  VesselGroup, JoinCandidate, ReconstructionProfile,
  RimArcFittingResult, TypologyCandidate, HealthInfo
} from './types';

const BASE_URL = '/api';

export const api = {
  async getHealth(): Promise<HealthInfo> {
    const res = await fetch(`${BASE_URL}/health`);
    if (!res.ok) throw new Error('Health check failed');
    return res.json();
  },

  async listProjects(): Promise<Project[]> {
    const res = await fetch(`${BASE_URL}/projects`);
    if (!res.ok) throw new Error('Failed to list projects');
    return res.json();
  },

  async createProject(name: string, description: string = ''): Promise<Project> {
    const fd = new FormData();
    fd.append('name', name);
    fd.append('description', description);
    const res = await fetch(`${BASE_URL}/projects`, {
      method: 'POST',
      body: fd,
    });
    if (!res.ok) throw new Error('Failed to create project');
    return res.json();
  },

  async createDemoProject(): Promise<{ project_id: string; fragments_count: number; groups_count: number }> {
    const res = await fetch(`${BASE_URL}/projects/create-demo`, {
      method: 'POST',
    });
    if (!res.ok) throw new Error('Failed to generate demonstration project');
    return res.json();
  },

  async getProjectState(projectId: string): Promise<ProjectState> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}`);
    if (!res.ok) throw new Error('Failed to fetch project state');
    return res.json();
  },

  async uploadPhoto(projectId: string, file: File): Promise<{ primary_photo_url: string; dimensions: [number, number] }> {
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch(`${BASE_URL}/projects/${projectId}/upload-photo`, {
      method: 'POST',
      body: fd,
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Upload failed' }));
      throw new Error(err.detail || 'Failed to upload photo');
    }
    return res.json();
  },

  async updateCalibration(projectId: string, calib: CalibrationData): Promise<CalibrationData> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/calibration`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(calib),
    });
    if (!res.ok) throw new Error('Failed to update calibration');
    return res.json();
  },

  async runDetection(projectId: string, sensitivity: number = 1.0): Promise<Fragment[]> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/detect?sensitivity=${sensitivity}`, {
      method: 'POST',
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Detection failed' }));
      throw new Error(err.detail || 'Detection failed');
    }
    return res.json();
  },

  async addFragmentPolygon(projectId: string, polygon: [number, number][]): Promise<Fragment> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/fragments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ polygon }),
    });
    if (!res.ok) throw new Error('Failed to add fragment polygon');
    return res.json();
  },

  async updateFragment(projectId: string, fragment: Fragment): Promise<Fragment> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/fragments/${fragment.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fragment),
    });
    if (!res.ok) throw new Error('Failed to update fragment');
    return res.json();
  },

  async deleteFragment(projectId: string, fragId: string): Promise<void> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/fragments/${fragId}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Failed to delete fragment');
  },

  async aiAnalyzeFragment(projectId: string, fragId: string): Promise<any> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/fragments/${fragId}/ai-analyze`, {
      method: 'POST',
    });
    if (!res.ok) throw new Error('AI analysis failed');
    return res.json();
  },

  async groupFragments(projectId: string, threshold: number = 0.68): Promise<{ groups: VesselGroup[]; fragments: Fragment[] }> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/group?threshold=${threshold}`, {
      method: 'POST',
    });
    if (!res.ok) throw new Error('Grouping failed');
    return res.json();
  },

  async saveGroups(projectId: string, groups: VesselGroup[]): Promise<VesselGroup[]> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/groups`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(groups),
    });
    if (!res.ok) throw new Error('Failed to save groups');
    return res.json();
  },

  async suggestJoins(projectId: string, crossGroups: boolean = false): Promise<JoinCandidate[]> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/suggest-joins?cross_groups=${crossGroups}`, {
      method: 'POST',
    });
    if (!res.ok) throw new Error('Join suggestion failed');
    return res.json();
  },

  async updateJoinStatus(projectId: string, joinId: string, status: 'suggested' | 'accepted' | 'rejected'): Promise<any> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/joins/${joinId}/status?status=${status}`, {
      method: 'POST',
    });
    if (!res.ok) throw new Error('Failed to update join status');
    return res.json();
  },

  async calculateRimArcFit(projectId: string, points: [number, number][]): Promise<RimArcFittingResult> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/rim-arc-fit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ points }),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({ detail: 'Rim fit failed' }));
      throw new Error(err.detail || 'Rim arc fitting failed');
    }
    return res.json();
  },

  async getReconstruction(projectId: string): Promise<ReconstructionProfile> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/reconstruction`);
    if (!res.ok) throw new Error('Failed to get reconstruction');
    return res.json();
  },

  async updateReconstruction(projectId: string, profile: ReconstructionProfile): Promise<ReconstructionProfile> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/reconstruction`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile),
    });
    if (!res.ok) throw new Error('Failed to update reconstruction');
    return res.json();
  },

  async getTypology(projectId: string): Promise<{ candidates: TypologyCandidate[]; schema: any; ai_explanation?: any }> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/typology`);
    if (!res.ok) throw new Error('Failed to retrieve typology matches');
    return res.json();
  },

  async approveProject(projectId: string, reviewerName: string, notes: string): Promise<any> {
    const res = await fetch(`${BASE_URL}/projects/${projectId}/approve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reviewer_name: reviewerName, notes }),
    });
    if (!res.ok) throw new Error('Approval failed');
    return res.json();
  },

  async uploadAdditionalPhoto(projectId: string, file: File, role: string, fragmentId?: string, notes?: string): Promise<any> {
    const fd = new FormData();
    fd.append('file', file);
    fd.append('role', role);
    if (fragmentId) fd.append('fragment_id', fragmentId);
    if (notes) fd.append('notes', notes);
    const res = await fetch(`${BASE_URL}/projects/${projectId}/additional-photos`, {
      method: 'POST',
      body: fd,
    });
    if (!res.ok) throw new Error('Failed to upload additional photo');
    return res.json();
  }
};
