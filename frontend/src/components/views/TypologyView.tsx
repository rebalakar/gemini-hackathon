import React, { useState, useEffect } from 'react';
import { Project, TypologyCandidate } from '../../types';
import {
  BookOpen, Sparkles, CheckCircle, AlertTriangle, HelpCircle,
  FileCode, ArrowRight, RefreshCw, Copy, Check
} from 'lucide-react';
import { api } from '../../api';

interface TypologyViewProps {
  project: Project;
  onNextStep: () => void;
}

export const TypologyView: React.FC<TypologyViewProps> = ({ project, onNextStep }) => {
  const [candidates, setCandidates] = useState<TypologyCandidate[]>([]);
  const [schema, setSchema] = useState<any>(null);
  const [aiExplanation, setAiExplanation] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showSchemaModal, setShowSchemaModal] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    loadTypology();
  }, [project.id]);

  const loadTypology = async () => {
    setIsLoading(true);
    try {
      const res = await api.getTypology(project.id);
      setCandidates(res.candidates);
      setSchema(res.schema);
      setAiExplanation(res.ai_explanation);
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopySchema = () => {
    if (schema) {
      navigator.clipboard.writeText(JSON.stringify(schema, null, 2));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex-1 flex flex-col p-6 overflow-y-auto space-y-4">
      {/* Top Banner Toolbar */}
      <div className="bg-white border border-parchment-300 rounded-lg p-3 shadow-2xs flex items-center justify-between">
        <div className="flex items-center space-x-4 text-xs">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-terracotta-600" />
            <span className="font-semibold text-charcoal-900 text-sm">Typology Comparison</span>
          </div>
          <span className="text-[11px] font-mono bg-parchment-100 border border-parchment-300 px-2 py-0.5 rounded text-charcoal-600">
            10 Demonstration References
          </span>
          <button
            onClick={() => setShowSchemaModal(true)}
            className="flex items-center space-x-1 text-xs text-charcoal-600 hover:text-charcoal-900 border border-parchment-300 px-2.5 py-1 rounded bg-parchment-50 transition"
          >
            <FileCode className="w-3.5 h-3.5 text-terracotta-600" />
            <span>Archaeological JSON Schema</span>
          </button>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <button
            onClick={loadTypology}
            className="flex items-center space-x-1 text-charcoal-600 hover:text-charcoal-900 px-2.5 py-1 rounded transition"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
            <span>Re-rank Typology</span>
          </button>

          <button
            onClick={onNextStep}
            className="bg-terracotta-600 hover:bg-terracotta-700 text-white text-xs font-semibold px-4 py-1.5 rounded-md flex items-center space-x-1.5 shadow-sm transition"
          >
            <span>Proceed to Review & Export</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Scientific Caution Banner */}
      <div className="bg-amber-50/80 border border-amber-200 rounded-lg p-3 text-xs text-amber-900 flex items-start space-x-2.5">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-semibold">Demonstration Reference Notice: </span>
          Catalogue entries are synthetic geometric templates for algorithm validation. They do not constitute
          authoritative historical dating or cultural attribution.
        </div>
      </div>

      {/* Optional Gemini Typology Synthesis */}
      {aiExplanation?.available && (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 shadow-2xs space-y-2">
          <div className="flex items-center space-x-2 text-purple-900 font-semibold text-xs">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Gemini Typological Synthesis (Strictly Grounded)</span>
          </div>
          <p className="text-xs text-purple-950 leading-relaxed">{aiExplanation.summary}</p>
          {aiExplanation.key_uncertainty && (
            <div className="text-[11px] text-purple-800 italic">
              Key uncertainty: {aiExplanation.key_uncertainty}
            </div>
          )}
        </div>
      )}

      {/* Candidates Grid */}
      <div className="grid grid-cols-3 gap-5">
        {candidates.map((cand, idx) => {
          const scorePercent = Math.round(cand.compatibility_score * 100);
          const isTop = idx === 0 && cand.compatibility_score >= 0.5;

          return (
            <div
              key={cand.reference_id}
              className={`bg-white rounded-xl border p-4 shadow-2xs flex flex-col justify-between space-y-4 ${
                isTop ? 'border-terracotta-400 ring-2 ring-terracotta-100' : 'border-parchment-300'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-parchment-100 border border-parchment-300 text-charcoal-700">
                    {cand.reference_id}
                  </span>
                  <span className="text-xs font-mono font-bold text-terracotta-700 bg-terracotta-50 px-2 py-0.5 rounded-full border border-terracotta-200">
                    {scorePercent}% Fit
                  </span>
                </div>

                <h4 className="font-semibold text-charcoal-900 text-sm mb-1">{cand.name}</h4>
                <div className="text-[11px] font-mono text-charcoal-500 mb-3">{cand.dimensions_summary}</div>

                {/* Schematic SVG Profile Drawing */}
                <div className="bg-parchment-50 rounded-lg p-2 border border-parchment-200 mb-3 flex items-center justify-center h-28">
                  <svg className="w-full h-full" viewBox="0 0 200 120">
                    <line x1="100" y1="10" x2="100" y2="110" stroke="#CBD5E0" strokeWidth="1" strokeDasharray="3,3" />
                    {/* Revolved schematic profile */}
                    <polyline
                      points={cand.schematic_profile_points.map(([r, h]) => `${100 + r * 0.7},${110 - h * 0.7}`).join(' ')}
                      fill="none"
                      stroke="#C85A32"
                      strokeWidth="2.5"
                    />
                    <polyline
                      points={cand.schematic_profile_points.map(([r, h]) => `${100 - r * 0.7},${110 - h * 0.7}`).join(' ')}
                      fill="none"
                      stroke="#4A5568"
                      strokeWidth="1.5"
                      strokeDasharray="2,2"
                    />
                  </svg>
                </div>

                <p className="text-xs text-charcoal-600 mb-3 leading-relaxed">{cand.description}</p>

                {/* Supporting Evidence */}
                {cand.supporting_features.length > 0 && (
                  <div className="space-y-1 mb-2">
                    <div className="text-[10px] font-mono uppercase font-bold text-emerald-800 flex items-center space-x-1">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>Supporting Evidence</span>
                    </div>
                    {cand.supporting_features.map((s, i) => (
                      <p key={i} className="text-[11px] text-emerald-900 leading-tight pl-4">
                        • {s}
                      </p>
                    ))}
                  </div>
                )}

                {/* Contradictions */}
                {cand.contradictions.length > 0 && (
                  <div className="space-y-1 mb-2">
                    <div className="text-[10px] font-mono uppercase font-bold text-red-800 flex items-center space-x-1">
                      <AlertTriangle className="w-3 h-3 text-red-500" />
                      <span>Contradictions</span>
                    </div>
                    {cand.contradictions.map((c, i) => (
                      <p key={i} className="text-[11px] text-red-900 leading-tight pl-4">
                        • {c}
                      </p>
                    ))}
                  </div>
                )}

                {/* Missing Evidence */}
                {cand.missing_evidence.length > 0 && (
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono uppercase font-bold text-charcoal-500 flex items-center space-x-1">
                      <HelpCircle className="w-3 h-3 text-charcoal-400" />
                      <span>Unverified / Missing</span>
                    </div>
                    {cand.missing_evidence.map((m, i) => (
                      <p key={i} className="text-[11px] text-charcoal-500 leading-tight pl-4">
                        • {m}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Source Citation */}
              <div className="pt-3 border-t border-parchment-200 text-[10px] text-charcoal-400 italic">
                Source: {cand.source_citation}
              </div>
            </div>
          );
        })}
      </div>

      {/* JSON Schema Modal */}
      {showSchemaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-950/70 backdrop-blur-xs p-6">
          <div className="bg-white rounded-xl shadow-2xl border border-parchment-300 w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden">
            <div className="px-6 py-4 bg-parchment-100 border-b border-parchment-300 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-charcoal-900 text-sm">Archaeological Reference JSON Schema</h3>
                <p className="text-xs text-charcoal-500">
                  Standard format for importing verified, sourced archaeological typology datasets.
                </p>
              </div>
              <button
                onClick={() => setShowSchemaModal(false)}
                className="text-xs text-charcoal-500 hover:text-charcoal-800"
              >
                Close
              </button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto bg-charcoal-900">
              <pre className="text-xs font-mono text-emerald-400 select-all">
                {JSON.stringify(schema, null, 2)}
              </pre>
            </div>
            <div className="px-6 py-3 bg-parchment-100 border-t border-parchment-300 flex justify-end">
              <button
                onClick={handleCopySchema}
                className="bg-charcoal-800 hover:bg-charcoal-900 text-white text-xs px-4 py-1.5 rounded-md font-semibold flex items-center space-x-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy JSON Schema'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
