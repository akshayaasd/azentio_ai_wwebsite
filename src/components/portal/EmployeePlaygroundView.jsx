import React, { useState } from 'react';
import { usePortal } from '../../context/PortalContext';
import {
  Cpu,
  Sparkles,
  Radio,
  Database,
  Terminal,
  Send,
  RefreshCw,
  CheckCircle2,
  FileCode,
  Layers,
  Zap
} from 'lucide-react';

export const EmployeePlaygroundView = () => {
  const { showToast, submitObservation } = usePortal();

  // Broadcast state
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastMsg, setBroadcastMsg] = useState('');

  // Synthetic generator state
  const [syntheticCount, setSyntheticCount] = useState(3);
  const [generating, setGenerating] = useState(false);

  // Model prompt test state
  const [promptInput, setPromptInput] = useState(
    'Extract financial entities, detect cyclical agricultural revenue seasonality, and identify tenant bank names from this input text.'
  );
  const [promptResult, setPromptResult] = useState(null);
  const [testingPrompt, setTestingPrompt] = useState(false);

  const handleSendBroadcast = (e) => {
    e.preventDefault();
    if (!broadcastTitle || !broadcastMsg) return;
    showToast(`System Broadcast Dispatched: "${broadcastTitle}" to all active bank tenants.`, 'success');
    setBroadcastTitle('');
    setBroadcastMsg('');
  };

  const handleGenerateSynthetic = () => {
    setGenerating(true);
    setTimeout(() => {
      // Inject synthetic observations
      submitObservation(
        'Synthetic Agro-SME Q3 Cashflow Trough (Generated Stress Test)',
        'Synthetic telemetry test: Micro-lender portfolio experiencing algorithmic loan denial in Punjab agricultural cluster due to monsoon harvesting lag.',
        'Azentio Kastle Lending Suite',
        'CLUST-702'
      );
      setGenerating(false);
      showToast(`Generated synthetic test records and ingested into Cluster #702.`, 'success');
    }, 800);
  };

  const handleTestPrompt = () => {
    setTestingPrompt(true);
    setTimeout(() => {
      setPromptResult({
        latency: '84ms',
        tokens: 342,
        extractedEntities: ['[FINANCIAL_INSTITUTION]', '[CROP_CYCLE]', '[SEASONAL_TROUGH]'],
        similarityVectorScore: 0.946
      });
      setTestingPrompt(false);
      showToast('Prompt benchmark completed on FinBERT-LLM engine.', 'info');
    }, 600);
  };

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-azentio-900 to-azentio-950 border border-indigo-500/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/40 shadow-md">
            <Cpu className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white">Azentio AI Research & Model Playground</h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/40">
                R&D & MODEL EXPERIMENTATION
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Priya Sharma (Senior AI Research Engineer) • Synthetic telemetry generation, LLM prompt laboratory, and platform-wide broadcasts.
            </p>
          </div>
        </div>
      </div>

      {/* Grid: 3 Playground Modules */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Module 1: Synthetic BFSI Dataset Generator */}
        <div className="rounded-2xl bg-azentio-900/70 border border-azentio-800 p-5 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-azentio-800">
              <span className="font-bold text-white text-xs flex items-center gap-1.5">
                <Database className="w-4 h-4 text-cyan-400" />
                Synthetic Data Generator
              </span>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                Sandboxed
              </span>
            </div>

            <p className="text-xs text-slate-400 mt-3 leading-relaxed">
              Generate realistic synthetic SME loan applications with seasonal variations to stress-test Kastle risk underwriting algorithms without using real customer PII.
            </p>

            <div className="mt-4 p-3 rounded-xl bg-azentio-950 border border-azentio-800 text-xs space-y-2">
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>Sample Sector:</span>
                <span className="text-white font-medium">Agro-FMCG & Apparel</span>
              </div>
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>Cycle Fluctuation:</span>
                <span className="text-cyan-300 font-mono">-40% to -65% Q3 Dip</span>
              </div>
              <div className="flex justify-between text-slate-400 text-[11px]">
                <span>Target Engine:</span>
                <span className="text-slate-200">Kastle Core + iMAL Sharia</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleGenerateSynthetic}
            disabled={generating}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-azentio-500 to-cyan-500 hover:from-azentio-600 hover:to-cyan-600 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {generating ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
            <span>{generating ? 'Synthesizing...' : 'Generate & Ingest Synthetic Test'}</span>
          </button>
        </div>

        {/* Module 2: Prompt Engineering & NER Laboratory */}
        <div className="rounded-2xl bg-azentio-900/70 border border-azentio-800 p-5 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-azentio-800">
              <span className="font-bold text-white text-xs flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-indigo-400" />
                Prompt & NER Evaluator
              </span>
              <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800">
                FinBERT-v2
              </span>
            </div>

            <p className="text-xs text-slate-400 mt-3 leading-relaxed">
              Fine-tune Named Entity Recognition system prompts for financial jargon, Sharia terminology, and regional patronymic patterns.
            </p>

            <div className="mt-4">
              <textarea
                rows={3}
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-azentio-950 border border-azentio-700 text-slate-200 text-xs focus:border-cyan-400 outline-none"
              />
            </div>

            {promptResult && (
              <div className="mt-3 p-3 rounded-xl bg-azentio-950 border border-azentio-800 text-[11px] font-mono space-y-1 text-slate-300">
                <div className="flex justify-between text-emerald-400">
                  <span>Latency: {promptResult.latency}</span>
                  <span>Tokens: {promptResult.tokens}</span>
                </div>
                <div className="text-cyan-300">Score: {promptResult.similarityVectorScore}</div>
              </div>
            )}
          </div>

          <button
            onClick={handleTestPrompt}
            disabled={testingPrompt}
            className="w-full py-2.5 rounded-xl bg-azentio-800 hover:bg-azentio-700 border border-azentio-600 text-cyan-300 font-bold text-xs shadow-md transition flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {testingPrompt ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            <span>{testingPrompt ? 'Benchmarking...' : 'Benchmark Prompt Precision'}</span>
          </button>
        </div>

        {/* Module 3: Multi-Tenant System Broadcasts */}
        <div className="rounded-2xl bg-azentio-900/70 border border-azentio-800 p-5 space-y-4 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-azentio-800">
              <span className="font-bold text-white text-xs flex items-center gap-1.5">
                <Radio className="w-4 h-4 text-emerald-400" />
                Multi-Tenant Broadcast
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                All Tenants
              </span>
            </div>

            <p className="text-xs text-slate-400 mt-3 leading-relaxed">
              Send an instant system advisory or patch notification to Bank A, Bank B, and Bank C dashboards simultaneously.
            </p>

            <form onSubmit={handleSendBroadcast} className="mt-4 space-y-2 text-xs">
              <input
                type="text"
                placeholder="Broadcast subject..."
                value={broadcastTitle}
                onChange={(e) => setBroadcastTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white placeholder-slate-500 outline-none focus:border-cyan-400"
              />
              <textarea
                rows={2}
                placeholder="Message content for all bank administrators..."
                value={broadcastMsg}
                onChange={(e) => setBroadcastMsg(e.target.value)}
                className="w-full p-2.5 rounded-lg bg-azentio-950 border border-azentio-700 text-white placeholder-slate-500 outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Broadcast to All Tenants</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
