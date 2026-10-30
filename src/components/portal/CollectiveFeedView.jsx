import React, { useState } from 'react';
import { usePortal } from '../../context/PortalContext';
import {
  Sparkles,
  Search,
  ThumbsUp,
  Tag,
  Building2,
  CheckCircle2,
  ArrowRight,
  Filter,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Layers
} from 'lucide-react';

export const CollectiveFeedView = () => {
  const {
    observations,
    clusters,
    improvements,
    upvoteObservation,
    switchRole,
    setActivePortalTab
  } = usePortal();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('ALL');
  const [viewMode, setViewMode] = useState('insights'); // 'insights' | 'clusters'

  // Only approved, de-identified observations appear in the collective feed
  const approvedObs = observations.filter(o => o.status === 'approved');

  const allTags = [
    'ALL',
    '#SMELending',
    '#SeasonalityAdjustment',
    '#IslamicFinance',
    '#CashflowNormalization',
    '#AML',
    '#SanctionsScreening'
  ];

  const filteredObs = approvedObs.filter((obs) => {
    const matchesSearch =
      obs.redactedTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      obs.redactedContent.toLowerCase().includes(searchTerm.toLowerCase()) ||
      obs.productCategory.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag =
      selectedTag === 'ALL' || obs.domainTags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-azentio-900 to-azentio-950 border border-emerald-500/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40 shadow-md">
            <Sparkles className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white">Cross-Tenant Collective Intelligence Feed</h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                PRIVACY-PRESERVED & DE-IDENTIFIED
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Sanitized BFSI empirical observations aggregated across 60+ financial institutions to drive collective software upgrades.
            </p>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 bg-azentio-950 p-1 rounded-xl border border-azentio-800 text-xs">
          <button
            onClick={() => setViewMode('insights')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
              viewMode === 'insights'
                ? 'bg-azentio-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Insights Feed ({approvedObs.length})
          </button>
          <button
            onClick={() => setViewMode('clusters')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition ${
              viewMode === 'clusters'
                ? 'bg-azentio-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            AI Trend Clusters ({clusters.length})
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-xl bg-azentio-900/70 border border-azentio-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search de-identified insights by keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-xs text-white placeholder-slate-500 focus:border-cyan-400 outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto w-full sm:w-auto">
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTag(t)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition ${
                selectedTag === t
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                  : 'bg-azentio-950 text-slate-400 border border-azentio-800 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* VIEW MODE 1: INSIGHTS FEED */}
      {viewMode === 'insights' && (
        <div className="space-y-4">
          {filteredObs.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-azentio-900/40 border border-azentio-800 text-slate-500 text-xs">
              No matching insights found in the collective repository.
            </div>
          ) : (
            filteredObs.map((obs) => {
              const matchingCluster = clusters.find(c => c.id === obs.aiClusterId);
              const matchingImprovement = improvements.find(i => i.originClusterId === obs.aiClusterId);

              return (
                <div
                  key={obs.id}
                  className="p-6 rounded-2xl bg-azentio-900/80 border border-azentio-800 hover:border-azentio-700 transition shadow-xl space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-cyan-400 bg-azentio-950 px-2 py-0.5 rounded border border-azentio-800">
                        {obs.id}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 font-medium">
                        {obs.productCategory}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        Published: {obs.submittedAt}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> De-Identified
                      </span>
                      <button
                        onClick={() => upvoteObservation(obs.id)}
                        className="px-2.5 py-1 rounded-lg bg-azentio-800 hover:bg-azentio-700 text-white font-bold flex items-center gap-1.5 transition text-xs"
                        title="Upvote if your institution experiences this issue"
                      >
                        <ThumbsUp className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{obs.upvotes}</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">
                      {obs.redactedTitle}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {obs.redactedContent}
                    </p>
                  </div>

                  {/* Domain Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {obs.domainTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] px-2 py-0.5 rounded bg-azentio-950 text-slate-300 border border-azentio-800 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Convergence & Roadmap Status Box */}
                  <div className="pt-3 border-t border-azentio-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3">
                      {matchingCluster && (
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Clustered in: <strong className="text-cyan-300 font-mono">{matchingCluster.id}</strong> ({matchingCluster.institutionsInvolved} banks converged)</span>
                        </div>
                      )}
                    </div>

                    {matchingImprovement ? (
                      <button
                        onClick={() => setActivePortalTab('roadmap')}
                        className="px-3 py-1 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 font-semibold flex items-center gap-1 transition"
                      >
                        <span>Linked to Roadmap: {matchingImprovement.id}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    ) : (
                      <span className="text-[11px] text-slate-500">
                        In evaluation for next roadmap cycle
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}

      {/* VIEW MODE 2: AI TREND CLUSTERS */}
      {viewMode === 'clusters' && (
        <div className="space-y-6">
          {clusters.map((cluster) => {
            const relatedImprovement = improvements.find(i => i.originClusterId === cluster.id);

            return (
              <div
                key={cluster.id}
                className="p-6 rounded-2xl bg-azentio-900/80 border-2 border-cyan-500/40 shadow-2xl space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg font-mono font-extrabold text-xs bg-cyan-950 text-cyan-300 border border-cyan-800">
                      {cluster.id}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold">
                      {cluster.severity}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-slate-400">Confidence:</span>
                    <span className="text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                      {cluster.convergenceConfidence}%
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white">
                    {cluster.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {cluster.summary}
                  </p>
                </div>

                {/* Institutions involved ticker */}
                <div className="p-3 rounded-xl bg-azentio-950 border border-azentio-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Building2 className="w-4 h-4 text-cyan-400" />
                    <span>Cross-Tenant Proof: <strong>{cluster.institutionsInvolved} Banking Organizations</strong> Converged</span>
                  </div>
                  <div className="flex gap-1.5">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">Apex Global</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Crescent Islamic</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">Summit Mutual</span>
                  </div>
                </div>

                {/* Footer Link to Roadmap */}
                <div className="pt-3 border-t border-azentio-800 flex justify-between items-center text-xs">
                  <div className="flex flex-wrap gap-1">
                    {cluster.tags.map((t, idx) => (
                      <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-azentio-950 text-slate-400 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  {relatedImprovement && (
                    <button
                      onClick={() => setActivePortalTab('roadmap')}
                      className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-azentio-500 to-cyan-500 hover:from-azentio-600 hover:to-cyan-600 text-white font-bold transition flex items-center gap-1.5"
                    >
                      <span>Track Feature: {relatedImprovement.id}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
