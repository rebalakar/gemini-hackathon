import React, { useState } from 'react';
import { Sparkles, KeyRound, X, CheckCircle2, AlertCircle, ShieldAlert } from 'lucide-react';
import { api } from '../api';
import { HealthInfo } from '../types';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  health: HealthInfo | null;
  onHealthUpdated: (health: HealthInfo) => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  onClose,
  health,
  onHealthUpdated,
}) => {
  const [apiKey, setApiKey] = useState<string>('');
  const [model, setModel] = useState<string>(health?.gemini_model || 'gemini-4-argon');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusMsg, setStatusMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  if (!isOpen) return null;

  const handlePasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setApiKey(text.trim());
        setStatusMsg(null);
      }
    } catch (e) {
      // Fallback if clipboard permission denied
      console.warn('Clipboard read error:', e);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMsg(null);
    try {
      const res = await api.updateGeminiApiKey(apiKey.trim(), model.trim());
      const updatedHealth: HealthInfo = {
        status: 'healthy',
        app: 'SHERD-FORGE',
        gemini_available: res.gemini_available,
        gemini_model: res.gemini_model,
        mode: res.mode,
      };
      onHealthUpdated(updatedHealth);
      if (res.gemini_available) {
        setStatusMsg({
          type: 'success',
          text: `Gemini API key configured! Using ${res.gemini_model}.`,
        });
        setTimeout(() => {
          onClose();
          setStatusMsg(null);
        }, 1200);
      } else {
        setStatusMsg({
          type: 'error',
          text: apiKey.trim()
            ? 'Key accepted but client could not initialize. Check key format.'
            : 'Key cleared. SHERD-FORGE will operate in offline deterministic mode.',
        });
      }
    } catch (err: any) {
      setStatusMsg({
        type: 'error',
        text: err?.message || 'Failed to update Gemini API key',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearKey = async () => {
    setIsLoading(true);
    setStatusMsg(null);
    try {
      const res = await api.updateGeminiApiKey('', model.trim());
      const updatedHealth: HealthInfo = {
        status: 'healthy',
        app: 'SHERD-FORGE',
        gemini_available: false,
        gemini_model: res.gemini_model,
        mode: 'deterministic_offline',
      };
      onHealthUpdated(updatedHealth);
      setApiKey('');
      setStatusMsg({
        type: 'success',
        text: 'API key cleared. System reset to offline deterministic mode.',
      });
    } catch (err: any) {
      setStatusMsg({
        type: 'error',
        text: err?.message || 'Failed to clear key',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full border border-parchment-300 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="bg-parchment-100 border-b border-parchment-300 px-5 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center shadow-xs">
              <KeyRound className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-semibold text-charcoal-900 text-sm">Gemini API Key Setup</h2>
              <p className="text-[11px] text-charcoal-500">Enable AI fabric & surface observations</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-charcoal-400 hover:text-charcoal-700 hover:bg-parchment-200 rounded-md transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
          {/* Current status pill */}
          <div className={`p-3 rounded-lg border flex items-start space-x-2.5 ${
            health?.gemini_available
              ? 'bg-purple-50/70 border-purple-200 text-purple-900'
              : 'bg-amber-50/70 border-amber-200 text-amber-900'
          }`}>
            <Sparkles className="w-4 h-4 mt-0.5 shrink-0" />
            <div className="space-y-0.5">
              <p className="font-semibold">
                Status: {health?.gemini_available ? `Active (${health.gemini_model})` : 'Offline Deterministic Mode'}
              </p>
              <p className="text-[11px] opacity-90">
                {health?.gemini_available
                  ? 'Gemini is enabled for visible fabric colors, surface decoration, and anatomical part hypotheses.'
                  : 'All core sherd detection, geometric edge matching, and 3D reconstruction work 100% offline without a key.'}
              </p>
            </div>
          </div>

          {/* Key Input */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="font-semibold text-charcoal-800">Gemini API Key</label>
              <button
                type="button"
                onClick={handlePasteFromClipboard}
                className="text-[11px] font-medium text-terracotta-700 hover:text-terracotta-800 underline cursor-pointer"
              >
                Paste from Clipboard
              </button>
            </div>
            <div className="relative">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Paste AIzaSy... key here"
                className="w-full font-mono bg-parchment-50 border border-parchment-300 rounded-lg px-3 py-2 text-charcoal-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-terracotta-500 text-xs"
              />
            </div>
            <p className="mt-1 text-[11px] text-charcoal-400">
              Keys remain server-side on your local machine and are written to your local <code className="bg-parchment-100 px-1 py-0.5 rounded text-charcoal-700 font-mono">.env</code> file.
            </p>
          </div>

          {/* Model selection */}
          <div>
            <label className="block font-semibold text-charcoal-800 mb-1">Model Selection</label>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full bg-white border border-parchment-300 rounded-lg px-3 py-2 text-charcoal-800 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-terracotta-500"
            >
              <option value="gemini-4-argon">gemini-4-argon (Default / Interactions API)</option>
              <option value="gemini-3.8-flash">gemini-3.8-flash (Fast)</option>
              <option value="gemini-3.5-flash-lite">gemini-3.5-flash-lite (Ultra-light)</option>
            </select>
          </div>

          {/* Status Message */}
          {statusMsg && (
            <div className={`p-2.5 rounded-lg border text-xs flex items-center space-x-2 ${
              statusMsg.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-rose-50 border-rose-200 text-rose-800'
            }`}>
              {statusMsg.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 shrink-0" />
              )}
              <span>{statusMsg.text}</span>
            </div>
          )}

          {/* Footer Actions */}
          <div className="pt-2 flex items-center justify-between border-t border-parchment-200">
            {health?.gemini_available ? (
              <button
                type="button"
                onClick={handleClearKey}
                disabled={isLoading}
                className="text-xs text-rose-600 hover:text-rose-800 font-medium px-2 py-1 rounded hover:bg-rose-50 transition"
              >
                Clear / Remove Key
              </button>
            ) : (
              <span />
            )}
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="text-xs text-charcoal-600 hover:text-charcoal-900 px-3 py-1.5 rounded-md font-medium"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading || !apiKey.trim()}
                className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-xs transition flex items-center space-x-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isLoading ? 'Saving...' : 'Save & Activate'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
