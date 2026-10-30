import React, { useState } from 'react';
import { usePortal } from '../../context/PortalContext';
import {
  Sliders,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  ShieldCheck,
  Cpu,
  RefreshCw,
  TrendingDown,
  TrendingUp,
  FileText,
  Lock,
  ArrowRight
} from 'lucide-react';

export const InteractiveSandbox = () => {
  const { switchRole } = usePortal();

  // Demo A: Seasonality Simulator State
  const [seasonalityDip, setSeasonalityDip] = useState(45); // 45% revenue drop
  const [modelType, setModelType] = useState('azentio'); // 'legacy' or 'azentio'
  const [businessSector, setBusinessSector] = useState('Agro-Export & FMCG');

  // Calculation metrics
  const baselineRevenue = 500000; // $500k/quarter
  const dipAmount = baselineRevenue * (seasonalityDip / 100);
  const dipQuarterRevenue = baselineRevenue - dipAmount;

  // Legacy vs Azentio logic
  const legacyDscr = (dipQuarterRevenue / 180000).toFixed(2);
  const legacyApproved = parseFloat(legacyDscr) >= 1.25;

  // Azentio AI normalizes cyclical variance using 24-month rolling baseline
  const normalizedRevenue = baselineRevenue * (1 - (seasonalityDip * 0.15) / 100);
  const azentioDscr = (normalizedRevenue / 180000).toFixed(2);
  const azentioApproved = parseFloat(azentioDscr) >= 1.25;

  const currentApproved = modelType === 'azentio' ? azentioApproved : legacyApproved;
  const currentDscr = modelType === 'azentio' ? azentioDscr : legacyDscr;

  // Demo B: Real-Time AI Redaction Simulator State
  const sampleInputs = [
    {
      label: 'Bank A (Apex Singapore)',
      text: 'At Apex Bank Singapore, customer John Tan at Jurong branch is facing SME loan rejection because Q3 monsoon revenue drops 40%. His 6-year repayment track record is spotless.'
    },
    {
      label: 'Bank B (Crescent Riyadh)',
      text: 'Crescent Islamic Bank Riyadh branch credit team reports agricultural Murabaha facilities trigger default warnings during the 90-day seasonal harvest gestation cycle.'
    },
    {
      label: 'Bank C (Summit London)',
      text: 'Summit Mutual clients in UK garment supply draw 85% credit lines for Christmas inventory; Kastle engine misinterprets seasonal drawdown as acute insolvency risk.'
    }
  ];

  const [inputText, setInputText] = useState(sampleInputs[0].text);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState({
    redactedText: 'At [FINANCIAL_INSTITUTION] [REGION], customer [CLIENT_ENTITY] at [BRANCH_ENTITY] is facing SME loan rejection because seasonal revenue drops 40%. The multi-year repayment track record is spotless.',
    detectedPii: ['Apex Bank', 'Singapore', 'John Tan', 'Jurong branch', 'Q3 monsoon'],
    matchedCluster: 'CLUST-702 (SME Cashflow Seasonality Normalization)',
    clusterConfidence: 96.4,
    tags: ['#SMELending', '#CashflowNormalization', '#SeasonalityAdjustment']
  });

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      const pii = [];
      if (/Apex|Crescent|Summit|Bank/i.test(inputText)) pii.push('Bank Entity');
      if (/Singapore|Riyadh|London|UK|Jurong/i.test(inputText)) pii.push('Geographical Identity');
      if (/John Tan|customer|client/i.test(inputText)) pii.push('Client Identifiers');
      if (/monsoon|harvest|Christmas/i.test(inputText)) pii.push('Seasonal Identifier');

      let cleaned = inputText
        .replace(/Apex Bank|Crescent Islamic Bank|Summit Mutual/gi, '[FINANCIAL_INSTITUTION]')
        .replace(/Singapore|Riyadh|London|Jurong/gi, '[JURISDICTION]')
        .replace(/John Tan/gi, '[INDIVIDUAL_NAME]')
        .replace(/branch\s+[A-Za-z0-9]+/gi, '[BRANCH_ENTITY]')
        .replace(/Q3 monsoon|Christmas|harvest/gi, '[CYCLICAL_SEASON]');

      setAnalysisResult({
        redactedText: cleaned,
        detectedPii: pii.length > 0 ? pii : ['Proprietary Identifiers'],
        matchedCluster: 'CLUST-702 (SME Cashflow Seasonality Normalization)',
        clusterConfidence: 94.8 + Math.random() * 3,
        tags: ['#SMELending', '#CashflowNormalization', '#SeasonalityAdjustment']
      });
      setAnalyzing(false);
    }, 600);
  };

  return (
    <section id="interactive-sandbox" className="py-20 bg-[#050B18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D084]/10 text-[#00D084] text-xs font-semibold border border-[#00D084]/30">
            <Cpu className="w-3.5 h-3.5" />
            Live Demonstration Sandbox
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience Autonomous BFSI Innovations
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Experience the real business value: how Azentio AI solves the SME lending seasonality dilemma and safely redacts cross-tenant observations.
          </p>
        </div>

        {/* Dual Sandbox Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SANDBOX 1: SME Seasonality Risk Normalizer */}
          <div className="rounded-2xl bg-[#0A1329]/90 border border-[#172B57] p-6 shadow-2xl flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#142347]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00D084]/15 text-[#00D084] flex items-center justify-center font-bold text-xs border border-[#00D084]/30">
                    01
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">SME Seasonality Credit Simulator</h3>
                    <p className="text-xs text-slate-400">Problem Statement Benchmark (Kastle & iMAL)</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00D084]/15 text-[#00D084] border border-[#00D084]/30 font-semibold">
                  Feature #IMP-104
                </span>
              </div>

              {/* Controls */}
              <div className="mt-5 space-y-4 text-xs">
                <div>
                  <div className="flex justify-between items-center text-slate-300 mb-1.5">
                    <span className="font-semibold">Simulate Seasonal Revenue Dip (%):</span>
                    <span className="font-mono text-[#00D084] text-sm font-bold">-{seasonalityDip}%</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="70"
                    step="5"
                    value={seasonalityDip}
                    onChange={(e) => setSeasonalityDip(Number(e.target.value))}
                    className="w-full accent-[#00D084] cursor-pointer h-2 bg-[#060D1E] rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>Mild Cycle (-10%)</span>
                    <span>Monsoon / Off-Season (-45%)</span>
                    <span>Severe Freeze (-70%)</span>
                  </div>
                </div>

                {/* Model Selector Toggle */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Underwriting Intelligence Engine:</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setModelType('legacy')}
                      className={`p-2.5 rounded-xl border text-left transition ${
                        modelType === 'legacy'
                          ? 'bg-rose-950/40 border-rose-500/80 text-rose-200 shadow-md'
                          : 'bg-[#060D1E] border-[#172B57] text-slate-400 hover:bg-[#0F1D3D]'
                      }`}
                    >
                      <div className="font-bold text-xs">Legacy Static Scoring</div>
                      <div className="text-[10px] text-slate-400 mt-0.5">Penalizes cyclical downturns as insolvency</div>
                    </button>

                    <button
                      onClick={() => setModelType('azentio')}
                      className={`p-2.5 rounded-xl border text-left transition ${
                        modelType === 'azentio'
                          ? 'bg-[#00D084]/15 border-[#00D084] text-white shadow-md shadow-[#00D084]/20'
                          : 'bg-[#060D1E] border-[#172B57] text-slate-400 hover:bg-[#0F1D3D]'
                      }`}
                    >
                      <div className="font-bold text-xs flex items-center gap-1 text-[#00D084]">
                        <Sparkles className="w-3.5 h-3.5 text-[#00D084]" />
                        Azentio SDCN Engine
                      </div>
                      <div className="text-[10px] text-slate-300 mt-0.5">24-month cyclical baseline smoothing</div>
                    </button>
                  </div>
                </div>

                {/* Live Underwriting Decision Box */}
                <div
                  className={`p-4 rounded-xl border transition ${
                    currentApproved
                      ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-200'
                      : 'bg-rose-950/30 border-rose-500/50 text-rose-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {currentApproved ? (
                        <CheckCircle2 className="w-6 h-6 text-[#00D084]" />
                      ) : (
                        <XCircle className="w-6 h-6 text-rose-400" />
                      )}
                      <div>
                        <div className="text-sm font-bold uppercase tracking-wide">
                          {currentApproved ? 'Credit Facility Approved' : 'Automated Loan Rejected'}
                        </div>
                        <div className="text-[11px] text-slate-300">
                          Debt Service Coverage Ratio (DSCR):{' '}
                          <strong className="font-mono text-white">{currentDscr}x</strong> (Req: &ge; 1.25x)
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] text-slate-400 uppercase">Quarter Revenue</div>
                      <div className="text-sm font-bold font-mono text-white">
                        ${dipQuarterRevenue.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <p className="mt-3 text-[11px] leading-relaxed border-t border-slate-700/50 pt-2 text-slate-300">
                    {modelType === 'azentio' ? (
                      <span>
                        ✅ <strong>Azentio Advantage:</strong> Recognized predictable seasonal pattern based on historical 5-year repayment fidelity. Normalized DSCR remains healthy at {azentioDscr}x. Bank retains high-value client without elevating risk.
                      </span>
                    ) : (
                      <span>
                        ❌ <strong>Legacy Flaw:</strong> Rigid point-in-time calculation mistakes routine Q3 monsoon dip for structural default. Good borrower is turned away to competitors.
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#142347] flex justify-between items-center text-xs">
              <span className="text-slate-400">Deployed in Kastle & iMAL v4.2</span>
              <button
                onClick={() => switchRole('product-owner')}
                className="text-[#00D084] hover:text-[#05DF72] font-semibold flex items-center gap-1"
              >
                View Roadmap Feature <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* SANDBOX 2: Cross-Tenant Redaction & Vector Cluster Matcher */}
          <div className="rounded-2xl bg-[#0A1329]/90 border border-[#172B57] p-6 shadow-2xl flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#142347]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00D084]/15 text-[#00D084] flex items-center justify-center font-bold text-xs border border-[#00D084]/30">
                    02
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white">PII Redactor & Vector Matcher</h3>
                    <p className="text-xs text-slate-400">Section 4 Requirements: Automated De-Identification</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#00D084]/15 text-[#00D084] border border-[#00D084]/30 font-semibold">
                  Privacy Preserving
                </span>
              </div>

              {/* Sample Preset Buttons */}
              <div className="mt-4 space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 text-[11px] block mb-1.5 font-medium">
                    Select a realistic bank submission or type your own:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sampleInputs.map((sample, idx) => (
                      <button
                        key={idx}
                        onClick={() => setInputText(sample.text)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition ${
                          inputText === sample.text
                            ? 'bg-[#00D084] text-[#040814] font-bold'
                            : 'bg-[#060D1E] text-slate-400 hover:bg-[#0F1D3D] hover:text-slate-200'
                        }`}
                      >
                        {sample.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Textarea */}
                <div>
                  <textarea
                    rows={3}
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-[#060D1E] border border-[#172B57] text-slate-200 text-xs focus:border-[#00D084] outline-none"
                    placeholder="Enter proprietary bank observation..."
                  />
                </div>

                {/* Analyze Trigger */}
                <div className="flex justify-end">
                  <button
                    onClick={handleAnalyze}
                    disabled={analyzing}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00D084] hover:bg-[#05DF72] text-[#040814] font-extrabold text-xs shadow-md transition disabled:opacity-50"
                  >
                    {analyzing ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Sparkles className="w-3.5 h-3.5" />
                    )}
                    <span>{analyzing ? 'Processing NER...' : 'Execute AI Sanitization & Cluster'}</span>
                  </button>
                </div>

                {/* Sanitized Output Card */}
                <div className="p-3.5 rounded-xl bg-[#060D1E] border border-[#172B57] space-y-2 text-xs">
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400 font-medium">De-Identified Collective Formulation:</span>
                    <span className="text-[#00D084] font-mono flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> PII Stripped
                    </span>
                  </div>

                  <p className="p-2.5 rounded bg-[#0A1329] border border-[#172B57] text-slate-200 font-mono text-[11px] leading-relaxed">
                    {analysisResult.redactedText}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-[10px]">
                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">Tokens Redacted:</span>
                      {analysisResult.detectedPii.map((p, i) => (
                        <span key={i} className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono">
                          {p}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1">
                      <span className="text-slate-400">Matched Vector:</span>
                      <span className="px-2 py-0.5 rounded bg-[#00D084]/20 text-[#00D084] font-mono font-bold">
                        {analysisResult.clusterConfidence.toFixed(1)}% Match
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#142347] flex justify-between items-center text-xs">
              <span className="text-slate-400">Ready for Moderator Approval Queue</span>
              <button
                onClick={() => switchRole('moderator')}
                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
              >
                Open Moderator Console <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
