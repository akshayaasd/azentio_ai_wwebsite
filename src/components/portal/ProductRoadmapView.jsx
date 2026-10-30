import React, { useState } from 'react';
import { usePortal } from '../../context/PortalContext';
import {
  TrendingUp,
  Sparkles,
  PlusCircle,
  CheckCircle2,
  Clock,
  ArrowRight,
  Lightbulb,
  Building2,
  Calendar,
  Layers,
  ChevronRight,
  X
} from 'lucide-react';

export const ProductRoadmapView = () => {
  const {
    improvements,
    clusters,
    currentRole,
    createImprovementFromCluster,
    updateImprovementStatus,
    showToast
  } = usePortal();

  const isProductOwner = currentRole === 'product-owner' || currentRole === 'admin';

  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    clusterId: 'CLUST-702',
    productLine: 'Azentio Kastle / iMAL Suite',
    targetRelease: 'v4.2 (Q1 2027)'
  });

  const stages = [
    { id: 'proposed', label: 'Proposed', color: 'border-slate-500 text-slate-300' },
    { id: 'under_review', label: 'Under Review', color: 'border-amber-500 text-amber-300' },
    { id: 'planned', label: 'Planned', color: 'border-blue-500 text-blue-300' },
    { id: 'in_progress', label: 'In Progress', color: 'border-cyan-500 text-cyan-300' },
    { id: 'released', label: 'Released', color: 'border-emerald-500 text-emerald-300' }
  ];

  const handleCreate = (e) => {
    e.preventDefault();
    if (!formData.title) return;
    createImprovementFromCluster(
      formData.clusterId,
      formData.title,
      formData.description,
      formData.productLine,
      formData.targetRelease
    );
    setModalOpen(false);
    setFormData({
      title: '',
      description: '',
      clusterId: 'CLUST-702',
      productLine: 'Azentio Kastle / iMAL Suite',
      targetRelease: 'v4.2 (Q1 2027)'
    });
  };

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-azentio-900 to-azentio-950 border border-cyan-500/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/40 shadow-md">
            <TrendingUp className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white">Continuous Product Evolution Tracker</h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                LIFECYCLE TRACEABILITY
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Closing the loop: connecting cross-tenant observations to Azentio engineering sprints and live release notes.
            </p>
          </div>
        </div>

        {isProductOwner && (
          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-azentio-500 to-cyan-500 hover:from-azentio-600 hover:to-cyan-600 text-white font-bold text-xs shadow-lg transition flex items-center gap-2"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Create Roadmap Improvement</span>
          </button>
        )}
      </div>

      {/* Kanban Board of Lifecycle Stages */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {stages.map((stage) => {
          const itemsInStage = improvements.filter((imp) => imp.status === stage.id);

          return (
            <div
              key={stage.id}
              className="rounded-2xl bg-azentio-900/60 border border-azentio-800 p-3.5 flex flex-col justify-between min-h-[500px]"
            >
              <div>
                <div className="flex justify-between items-center pb-2.5 mb-3 border-b border-azentio-800">
                  <span className={`text-xs font-bold uppercase tracking-wider ${stage.color}`}>
                    {stage.label}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-azentio-950 text-slate-400 border border-azentio-800">
                    {itemsInStage.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {itemsInStage.map((imp) => (
                    <div
                      key={imp.id}
                      className="p-4 rounded-xl bg-azentio-950/90 border border-azentio-800 hover:border-azentio-700 transition shadow-md space-y-2.5 text-xs text-left"
                    >
                      <div className="flex justify-between items-center text-[10px]">
                        <span className="font-mono font-bold text-cyan-400">
                          {imp.id}
                        </span>
                        <span className="text-slate-400 font-mono">
                          {imp.targetRelease}
                        </span>
                      </div>

                      <div className="font-bold text-white text-xs leading-snug">
                        {imp.title}
                      </div>

                      <p className="text-[11px] text-slate-400 line-clamp-3 leading-relaxed">
                        {imp.description}
                      </p>

                      <div className="pt-2 border-t border-azentio-800/80 space-y-1.5 text-[10px]">
                        <div className="flex justify-between text-slate-400">
                          <span>Product Line:</span>
                          <span className="text-slate-200 font-medium">{imp.productLine}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>Impacted Banks:</span>
                          <span className="text-emerald-400 font-mono font-bold">
                            {imp.impactedClientsCount} Institutions
                          </span>
                        </div>
                      </div>

                      {/* Evaluator Status Changer */}
                      {isProductOwner && (
                        <div className="pt-2 border-t border-azentio-800/60 flex items-center justify-between text-[10px]">
                          <span className="text-slate-400">Change Status:</span>
                          <select
                            value={imp.status}
                            onChange={(e) => updateImprovementStatus(imp.id, e.target.value)}
                            className="bg-azentio-900 border border-azentio-700 text-cyan-300 rounded px-1.5 py-0.5 text-[10px] outline-none"
                          >
                            <option value="proposed">Proposed</option>
                            <option value="under_review">Under Review</option>
                            <option value="planned">Planned</option>
                            <option value="in_progress">In Progress</option>
                            <option value="released">Released</option>
                          </select>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Spotlight: Feature #IMP-104 Detailed Timeline */}
      {improvements.find(i => i.id === 'IMP-104') && (
        <div className="p-6 rounded-2xl bg-azentio-900/80 border border-azentio-700 shadow-xl space-y-4">
          <div className="flex flex-wrap items-center justify-between pb-3 border-b border-azentio-800 gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded font-mono font-bold text-xs bg-cyan-950 text-cyan-300 border border-cyan-800">
                  FEATURE #IMP-104 SPOTLIGHT
                </span>
                <h3 className="font-bold text-base text-white">
                  Seasonality-Aware Dynamic Cashflow Normalizer (SDCN)
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Originated from Cross-Tenant Cluster #702 (Bank A, Bank B, and Bank C reports).
              </p>
            </div>

            <div className="text-right">
              <div className="text-[10px] uppercase text-slate-400">Estimated Portfolio Salvage</div>
              <div className="text-sm font-bold font-mono text-emerald-400">
                $36.5M Annualized Qualified Lending
              </div>
            </div>
          </div>

          {/* Timeline steps */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 pt-2">
            {[
              { step: '1. Ingested from Bank A, B & C', done: true, date: 'Oct 29' },
              { step: '2. Clustered at 94.6% Confidence', done: true, date: 'Oct 29' },
              { step: '3. Compliance Moderator Cleared', done: true, date: 'Oct 30' },
              { step: '4. Active Engineering Sprint', done: true, date: 'Sprint 24' },
              { step: '5. Release to Production Tenants', done: false, date: 'v4.2 (Q1)' }
            ].map((st, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-xl border text-xs text-left ${
                  st.done
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-emerald-200'
                    : 'bg-azentio-950 border-azentio-800 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono">{st.date}</span>
                  {st.done ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                  )}
                </div>
                <div className="font-semibold text-white">{st.step}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CREATE IMPROVEMENT MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-xl rounded-2xl bg-azentio-900 border border-azentio-700 shadow-2xl p-6 text-slate-100 overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-azentio-800">
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-base text-white">
                  Convert Collective Cluster to Roadmap Feature
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-lg hover:bg-azentio-800 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="mt-4 space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Feature Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dynamic Seasonal Normalizer for Kastle Lending Engine"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white focus:border-cyan-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Engineering Scope & Functional Requirement
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe the architectural change, algorithm modifications, or parameters."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white focus:border-cyan-400 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Origin Cluster
                  </label>
                  <select
                    value={formData.clusterId}
                    onChange={(e) => setFormData({ ...formData, clusterId: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white focus:border-cyan-400 outline-none"
                  >
                    {clusters.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.id}: {c.name.substring(0, 30)}...
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Target Release Version
                  </label>
                  <input
                    type="text"
                    value={formData.targetRelease}
                    onChange={(e) => setFormData({ ...formData, targetRelease: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white focus:border-cyan-400 outline-none"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-3.5 py-2 rounded-lg bg-azentio-950 hover:bg-azentio-800 text-slate-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-azentio-500 to-cyan-500 hover:from-azentio-600 hover:to-cyan-600 text-white font-bold transition shadow-lg"
                >
                  Promote to Roadmap
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
