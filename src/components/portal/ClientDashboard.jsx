import React, { useState } from 'react';
import { usePortal } from '../../context/PortalContext';
import {
  Building2,
  PlusCircle,
  FolderLock,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Clock,
  CheckCircle2,
  Lock,
  Cpu,
  ArrowRight,
  Eye,
  FileText,
  X
} from 'lucide-react';

export const ClientDashboard = () => {
  const {
    currentRole,
    organizations,
    observations,
    clusters,
    improvements,
    submitObservation,
    testTenantBoundaryViolation,
    setActivePortalTab,
    showToast
  } = usePortal();

  const org = organizations[currentRole] || organizations['bank-a'];

  // Filter observations belonging specifically to this tenant
  const myObservations = observations.filter((obs) => obs.orgId === currentRole);
  const approvedCount = myObservations.filter((obs) => obs.status === 'approved').length;
  const pendingCount = myObservations.filter((obs) => obs.status === 'pending').length;

  // New observation modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    productCategory: org.entitlements[0] || 'Azentio Kastle Core Banking',
    targetCluster: 'CLUST-702'
  });

  // Selected observation for deep modal inspect
  const [inspectObs, setInspectObs] = useState(null);

  // Pre-fill quick templates based on hackathon problem statements
  const handleQuickTemplate = (type) => {
    if (type === 'seasonality') {
      setFormData({
        title: `${org.shortName} SME working capital assessment fails due to seasonal revenue variance`,
        content: `At ${org.name}, our commercial risk officers observe that high-quality SME borrowers face automated credit score drops during quarterly off-season troughs. Specifically in agro-processing and retail supply, cyclical cashflow swings are flagged as default insolvency rather than normal business seasonality.`,
        productCategory: 'Azentio Kastle / iMAL Suite',
        targetCluster: 'CLUST-702'
      });
    } else if (type === 'sanctions') {
      setFormData({
        title: `${org.shortName} trade finance screening experiences elevated false positives on patronymics`,
        content: `Our compliance unit at ${org.name} reports that automated fuzzy sanctions matching in Amlgo Labs produces 60%+ false alerts on Arabic and Southeast Asian name transliterations, causing unnecessary 4-hour settlement holds.`,
        productCategory: 'Azentio Amlgo Labs AML',
        targetCluster: 'CLUST-810'
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      showToast('Please provide both title and observation details.', 'warning');
      return;
    }
    submitObservation(
      formData.title,
      formData.content,
      formData.productCategory,
      formData.targetCluster
    );
    setModalOpen(false);
    setFormData({
      title: '',
      content: '',
      productCategory: org.entitlements[0] || 'Azentio Kastle Core Banking',
      targetCluster: 'CLUST-702'
    });
  };

  return (
    <div className="space-y-8">
      {/* Tenant Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-azentio-900 via-azentio-850 to-azentio-900 border border-azentio-700/80 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${org.logoColor} flex items-center justify-center font-bold text-lg text-white shadow-lg`}
            >
              {org.avatar}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-white">{org.name}</h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                  {org.tenantKey}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {org.type} • Jurisdiction: <strong>{org.jurisdiction}</strong> • SLA Tier: <strong>{org.slaTier}</strong>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-azentio-500 to-cyan-500 hover:from-azentio-600 hover:to-cyan-600 text-white font-bold text-xs shadow-lg shadow-azentio-500/25 transition transform hover:scale-[1.02]"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Submit Market Observation</span>
            </button>

            <button
              onClick={() => testTenantBoundaryViolation(currentRole === 'bank-a' ? 'bank-b' : 'bank-a')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-azentio-950 hover:bg-azentio-800 border border-rose-500/40 text-rose-300 text-xs font-semibold transition"
              title="Test multi-tenant boundary security"
            >
              <Lock className="w-3.5 h-3.5 text-rose-400" />
              <span>Test Tenant Fence</span>
            </button>
          </div>
        </div>

        {/* Entitlements Bar */}
        <div className="mt-4 pt-4 border-t border-azentio-800 flex flex-wrap items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Active Azentio Entitlements:</span>
          {org.entitlements.map((ent, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-md bg-azentio-950 border border-azentio-800 text-slate-300 font-mono text-[11px]"
            >
              {ent}
            </span>
          ))}
          <span className="ml-auto text-[11px] text-emerald-400 flex items-center gap-1 font-mono">
            <CheckCircle2 className="w-3.5 h-3.5" />
            AES-256 Tenant Schema Isolated
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-azentio-900/70 border border-azentio-800 space-y-2">
          <div className="flex justify-between items-center text-slate-400 text-xs">
            <span>Tenant Observations</span>
            <FolderLock className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-3xl font-extrabold text-white font-mono">
            {myObservations.length}
          </div>
          <div className="text-[11px] text-slate-400">
            {pendingCount} in moderation queue
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-azentio-900/70 border border-azentio-800 space-y-2">
          <div className="flex justify-between items-center text-slate-400 text-xs">
            <span>Approved Collective Insights</span>
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold text-emerald-400 font-mono">
            {approvedCount}
          </div>
          <div className="text-[11px] text-slate-400">
            Contributing to cross-tenant AI
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-azentio-900/70 border border-azentio-800 space-y-2">
          <div className="flex justify-between items-center text-slate-400 text-xs">
            <span>Converged Trend Clusters</span>
            <Cpu className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-3xl font-extrabold text-cyan-400 font-mono">
            {clusters.length}
          </div>
          <div className="text-[11px] text-cyan-300 font-medium">
            Active: Cluster #702 (Seasonality)
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-azentio-900/70 border border-azentio-800 space-y-2">
          <div className="flex justify-between items-center text-slate-400 text-xs">
            <span>Roadmap Improvements</span>
            <TrendingUp className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-3xl font-extrabold text-purple-400 font-mono">
            {improvements.length}
          </div>
          <div className="text-[11px] text-purple-300">
            Feature #IMP-104 In Progress
          </div>
        </div>
      </div>

      {/* Main Section: Private Tenant Submissions */}
      <div className="rounded-2xl bg-azentio-900/70 border border-azentio-800 overflow-hidden shadow-xl">
        <div className="p-5 border-b border-azentio-800 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <FolderLock className="w-4 h-4 text-cyan-400" />
              {org.shortName}'s Private Observations Vault
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Strictly restricted to {org.shortName} staff. Other bank tenants cannot read raw data.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-3 py-1.5 rounded-lg bg-azentio-800 hover:bg-azentio-700 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>New Observation</span>
          </button>
        </div>

        {/* Table of Observations */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-azentio-950 text-slate-400 font-medium border-b border-azentio-800">
              <tr>
                <th className="py-3 px-4">Observation ID</th>
                <th className="py-3 px-4">Raw Title & Description</th>
                <th className="py-3 px-4">Product Category</th>
                <th className="py-3 px-4">Status & Moderation</th>
                <th className="py-3 px-4">AI Cluster</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-azentio-800/60 text-slate-300">
              {myObservations.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-slate-500">
                    No observations submitted yet for this tenant. Click "Submit Market Observation" to begin.
                  </td>
                </tr>
              ) : (
                myObservations.map((obs) => (
                  <tr key={obs.id} className="hover:bg-azentio-800/40 transition">
                    <td className="py-3.5 px-4 font-mono font-bold text-cyan-400 whitespace-nowrap">
                      {obs.id}
                      <div className="text-[10px] text-slate-500 font-normal">
                        {obs.submittedAt}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 max-w-md">
                      <div className="font-bold text-white leading-snug">
                        {obs.rawTitle}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                        {obs.rawContent}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {obs.domainTags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] px-1.5 py-0.5 rounded bg-azentio-950 text-slate-400 border border-azentio-800 font-mono"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="px-2 py-1 rounded bg-azentio-950 border border-azentio-800 text-[11px] text-slate-300 font-medium">
                        {obs.productCategory}
                      </span>
                    </td>

                    <td className="py-3.5 px-4 whitespace-nowrap">
                      {obs.status === 'approved' ? (
                        <div className="space-y-1">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                            <CheckCircle2 className="w-3 h-3" />
                            Approved & Published
                          </span>
                          <div className="text-[10px] text-slate-400">
                            De-identified in Collective Feed
                          </div>
                        </div>
                      ) : obs.status === 'pending' ? (
                        <div className="space-y-1">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px] font-bold">
                            <Clock className="w-3 h-3" />
                            In Compliance Review
                          </span>
                          <div className="text-[10px] text-slate-400">
                            Awaiting Moderator NER check
                          </div>
                        </div>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30 text-[10px] font-bold">
                          Rejected
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/80 font-mono text-[11px] font-bold">
                        {obs.aiClusterId || 'Evaluating'}
                      </span>
                      {obs.convergedWith?.length > 0 && (
                        <div className="text-[10px] text-emerald-400 mt-1 font-medium">
                          Converged with {obs.convergedWith.length} other banks
                        </div>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => setInspectObs(obs)}
                        className="px-2.5 py-1 rounded bg-azentio-800 hover:bg-azentio-700 text-cyan-300 text-xs font-semibold inline-flex items-center gap-1 transition"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Safeguards</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* SUBMIT OBSERVATION MODAL */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl bg-azentio-900 border border-azentio-700 shadow-2xl p-6 text-slate-100 overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-azentio-800">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <PlusCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">
                    Submit Market Observation • {org.shortName}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Encrypted inside tenant schema before automated NER processing
                  </p>
                </div>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-lg hover:bg-azentio-800 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Templates Helper */}
            <div className="mt-4 p-3 rounded-xl bg-azentio-950 border border-azentio-800 space-y-1.5 text-xs">
              <div className="text-slate-400 font-medium text-[11px]">
                Quick evaluation presets (Simulate Hackathon Section 4 Requirements):
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handleQuickTemplate('seasonality')}
                  className="px-2.5 py-1 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/40 text-[11px] font-medium transition"
                >
                  ⚡ Preset: SME Seasonality Cashflow Volatility
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickTemplate('sanctions')}
                  className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-[11px] font-medium transition"
                >
                  ⚡ Preset: Trade AML Patronymic Screening Friction
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Observation Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Automated SME loan rejections during Q3 agricultural revenue downturns"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white focus:border-cyan-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Observation Details & Operational Impact
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe the product behavior, gap, or market dynamic you are experiencing. (You can include specific branches/names; our NER pipeline will sanitize them)."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white focus:border-cyan-400 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Affected Azentio Product Line
                  </label>
                  <select
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white focus:border-cyan-400 outline-none"
                  >
                    <option>Azentio Kastle (Core Banking & SME Lending)</option>
                    <option>Azentio iMAL (Islamic Banking Core)</option>
                    <option>Azentio Amlgo Labs (AML & Financial Crime)</option>
                    <option>Azentio Beyon360 (Insurance & Underwriting)</option>
                    <option>Azentio AI Collective Network</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1">
                    Targeted Knowledge Cluster
                  </label>
                  <select
                    value={formData.targetCluster}
                    onChange={(e) => setFormData({ ...formData, targetCluster: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white focus:border-cyan-400 outline-none"
                  >
                    <option value="CLUST-702">CLUST-702: SME Cashflow Seasonality</option>
                    <option value="CLUST-810">CLUST-810: AML Cross-Border Screening</option>
                    <option value="">Let System Auto-Cluster (Vector Match)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Multi-tenant encrypted submission
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-3.5 py-2 rounded-lg bg-azentio-950 hover:bg-azentio-800 text-slate-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-azentio-500 to-cyan-500 hover:from-azentio-600 hover:to-cyan-600 text-white font-bold transition shadow-lg"
                  >
                    <span>Submit to Moderation Queue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* INSPECT OBSERVATION MODAL (Shows Raw vs Redacted De-identification) */}
      {inspectObs && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl rounded-2xl bg-azentio-900 border border-azentio-700 shadow-2xl p-6 text-slate-100 overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-azentio-800">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded font-mono font-bold text-xs bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {inspectObs.id}
                </span>
                <h3 className="font-bold text-base text-white">
                  Multi-Tenant Redaction & De-Identification Safeguards
                </h3>
              </div>
              <button
                onClick={() => setInspectObs(null)}
                className="p-1 rounded-lg hover:bg-azentio-800 text-slate-400 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Private Side */}
              <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-500/40 space-y-2">
                <div className="flex justify-between items-center text-blue-300 font-bold">
                  <span className="flex items-center gap-1.5">
                    <FolderLock className="w-4 h-4" />
                    Private Raw Data ({org.shortName} Vault)
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900 text-white">
                    Encrypted
                  </span>
                </div>
                <div className="font-semibold text-white pt-1">{inspectObs.rawTitle}</div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {inspectObs.rawContent}
                </p>
                <div className="pt-2 text-[10px] text-blue-300">
                  🔒 Strictly isolated. Bank B and Bank C have 0% access to this raw view.
                </div>
              </div>

              {/* Public Redacted Side */}
              <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/40 space-y-2">
                <div className="flex justify-between items-center text-emerald-300 font-bold">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    De-Identified Shared Version
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900 text-white">
                    Published
                  </span>
                </div>
                <div className="font-semibold text-white pt-1">{inspectObs.redactedTitle}</div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {inspectObs.redactedContent}
                </p>
                <div className="pt-2 text-[10px] text-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  De-identified by NER + Approved by Elena Rostova (Moderator)
                </div>
              </div>
            </div>

            {/* Moderation Notes & Audit Trail */}
            <div className="mt-4 p-3 rounded-xl bg-azentio-950 border border-azentio-800 space-y-2 text-xs">
              <div className="flex justify-between items-center text-[11px]">
                <span className="text-slate-400 font-semibold">Moderator Note:</span>
                <span className="font-mono text-cyan-400">{inspectObs.moderationNote || 'Pending approval review'}</span>
              </div>
              <div className="flex flex-wrap items-center gap-1 text-[11px]">
                <span className="text-slate-400">Tokens Redacted:</span>
                {inspectObs.piiDetected.map((pii, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-mono text-[10px]">
                    {pii}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setInspectObs(null)}
                className="px-4 py-2 rounded-lg bg-azentio-800 hover:bg-azentio-700 text-white font-semibold text-xs"
              >
                Close Safeguards Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
