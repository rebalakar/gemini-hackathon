import React from 'react';
import { Camera, Shapes, Puzzle, Box, BookOpen, ClipboardCheck } from 'lucide-react';

export type WorkflowStep = 'capture' | 'group' | 'assemble' | 'reconstruct' | 'typology' | 'review';

interface WorkflowNavProps {
  currentStep: WorkflowStep;
  onSelectStep: (step: WorkflowStep) => void;
  stats: {
    hasPhoto: boolean;
    fragmentCount: number;
    groupCount: number;
    acceptedJoinsCount: number;
    hasReconstruction: boolean;
    isApproved: boolean;
  };
}

export const WorkflowNav: React.FC<WorkflowNavProps> = ({ currentStep, onSelectStep, stats }) => {
  const steps: { id: WorkflowStep; label: string; icon: React.ReactNode; badge?: string | number; ready: boolean }[] = [
    {
      id: 'capture',
      label: '1. Capture & Scale',
      icon: <Camera className="w-4 h-4" />,
      badge: stats.hasPhoto ? 'Photo Loaded' : 'Required',
      ready: true,
    },
    {
      id: 'group',
      label: '2. Detect & Group',
      icon: <Shapes className="w-4 h-4" />,
      badge: stats.fragmentCount > 0 ? `${stats.fragmentCount} Sherds` : undefined,
      ready: stats.hasPhoto,
    },
    {
      id: 'assemble',
      label: '3. Suggested Joins',
      icon: <Puzzle className="w-4 h-4" />,
      badge: stats.acceptedJoinsCount > 0 ? `${stats.acceptedJoinsCount} Joins` : undefined,
      ready: stats.fragmentCount >= 2,
    },
    {
      id: 'reconstruct',
      label: '4. 3D Reconstruct',
      icon: <Box className="w-4 h-4" />,
      badge: stats.hasReconstruction ? 'Profile' : undefined,
      ready: stats.fragmentCount > 0,
    },
    {
      id: 'typology',
      label: '5. Typology Match',
      icon: <BookOpen className="w-4 h-4" />,
      ready: stats.fragmentCount > 0,
    },
    {
      id: 'review',
      label: '6. Review & Export',
      icon: <ClipboardCheck className="w-4 h-4" />,
      badge: stats.isApproved ? 'Approved' : 'Draft',
      ready: true,
    },
  ];

  return (
    <div className="bg-parchment-200 border-b border-parchment-300 px-6 py-2 flex items-center justify-between">
      <nav className="flex space-x-1">
        {steps.map((s) => {
          const isActive = currentStep === s.id;
          return (
            <button
              key={s.id}
              onClick={() => onSelectStep(s.id)}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                isActive
                  ? 'bg-charcoal-800 text-white shadow-xs'
                  : 'text-charcoal-700 hover:bg-parchment-300 hover:text-charcoal-900'
              }`}
            >
              <span>{s.icon}</span>
              <span>{s.label}</span>
              {s.badge && (
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive
                      ? 'bg-terracotta-500 text-white'
                      : 'bg-parchment-100 text-charcoal-600 border border-parchment-300'
                  }`}
                >
                  {s.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Uncertainty Disclaimer Banner */}
      <div className="text-[11px] text-charcoal-500 italic flex items-center space-x-1.5 bg-parchment-100/70 border border-parchment-300 px-2.5 py-1 rounded">
        <span>⚠ Single-photograph evidence establishes hypotheses, not ground truth 3D surfaces.</span>
      </div>
    </div>
  );
};
