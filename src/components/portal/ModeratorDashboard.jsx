import React, { useState } from 'react';
import { usePortal } from '../../context/PortalContext';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Sparkles,
  Lock,
  Search,
  Filter,
  ArrowRight,
  Eye,
  Edit3,
  Building2,
  Cpu
} from 'lucide-react';

export const ModeratorDashboard = () => {
  const {
    observations,
    moderateObservation,
    organizations,
    showToast
  } = usePortal();

  // Active observation being moderated
  const pendingObsList = observations.filter(o => o.status === 'pending');
  const [selectedObs, setSelectedObs] = useState(pendingObsList[0] || observations[0]);

  // Editable fields in review console
  const [editTitle, setEditTitle] = useState(selectedObs ? selectedObs.redactedTitle : '');
  const [editContent, setEditContent] = useState(selectedObs ? selectedObs.redactedContent : '');
  const [complianceNote, setComplianceNote] = useState('');

  // Update form fields when selected observation changes
  const handleSelectObs = (obs) => {
    setSelectedObs(obs);
    setEditTitle(obs.redactedTitle || obs.rawTitle);
    setEditContent(obs.redactedContent || obs.rawContent);
    setComplianceNote(obs.moderationNote || 'De-identified bank name and specific geography. Anonymized to industry pattern.');
  };

  const handleApprove = () => {
    if (!selectedObs) return;
    moderateObservation(
      selectedObs.id,
      'approve',
      editTitle,
      editContent,
      complianceNote || 'PII tokens scrubbed. Verified safe for shared collective intelligence feed.'
    );
  };

  const handleReject = () => {
    if (!selectedObs) return;
    moderateObservation(
      selectedObs.id,
      'reject',
      editTitle,
      editContent,
      complianceNote || 'Rejected due to insufficient anonymization or non-BFSI scope.'
    );
  };

  const handleAutoStrip = () => {
    if (!selectedObs) return;
    const org = organizations[selectedObs.orgId] || { name: 'Bank', shortName: 'Bank' };
    const strippedTitle = editTitle
      .replace(new RegExp(org.name, 'gi'), '[INSTITUTION]')
      .replace(new RegExp(org.shortName, 'gi'), '[INSTITUTION]')
      .replace(/Singapore|Riyadh|London|Mumbai|Dubai/gi, '[JURISDICTION]');

    const strippedContent = editContent
      .replace(new RegExp(org.name, 'gi'), '[FINANCIAL_INSTITUTION]')
      .replace(new RegExp(org.shortName, 'gi'), '[FINANCIAL_INSTITUTION]')
      .replace(/branch\s+[A-Za-z0-9]+/gi, '[BRANCH_ENTITY]')
      .replace(/Singapore|Riyadh|London|Mumbai|Dubai/gi, '[JURISDICTION]')
      .replace(/John Tan|customer|client\s+[A-Z]/gi, '[CLIENT_ENTITY]');

    setEditTitle(strippedTitle);
    setEditContent(strippedContent);
    showToast('Auto-NER redaction executed on active draft.', 'info');
  };

  return (
    <div className="space-y-8">
      {/* Moderator Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-azentio-900 to-azentio-950 border border-amber-500/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/40 shadow-md">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white">Compliance & Redaction Workbench</h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/40">
                HUMAN-IN-THE-LOOP GATE
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Elena Rostova (Compliance Moderator) • Verifying zero-leakage de-identification before collective publication.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="px-3 py-1.5 rounded-lg bg-azentio-950 border border-azentio-800 text-xs font-mono text-amber-400">
            {pendingObsList.length} Pending Review
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-azentio-950 border border-azentio-800 text-xs font-mono text-emerald-400">
            {observations.filter(o => o.status === 'approved').length} Published
          </span>
        </div>
      </div>

      {/* Main Grid: Observation Queue on Left, Deep Redaction Workbench on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Triage Queue (4 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-azentio-900/70 border border-azentio-800 p-4 space-y-3 shadow-xl">
          <div className="flex justify-between items-center pb-3 border-b border-azentio-800 text-xs">
            <span className="font-bold text-white flex items-center gap-1.5">
              <span>Submitted Queue</span>
              <span className="text-slate-400 font-normal">({observations.length})</span>
            </span>
            <span className="text-[10px] text-cyan-400 font-mono">Real-Time Ingestion</span>
          </div>

          <div className="space-y-2 max-h-[600px] overflow-y-auto pr-1">
            {observations.map((obs) => {
              const obsOrg = organizations[obs.orgId] || { shortName: 'Bank' };
              const isSelected = selectedObs?.id === obs.id;

              return (
                <div
                  key={obs.id}
                  onClick={() => handleSelectObs(obs)}
                  className={`p-3.5 rounded-xl border text-xs cursor-pointer transition ${
                    isSelected
                      ? 'bg-azentio-800/90 border-cyan-400 shadow-md'
                      : 'bg-azentio-950/80 border-azentio-800 hover:border-azentio-700'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-cyan-400">
                        {obs.id}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {obsOrg.shortName}
                      </span>
                    </div>

                    <span
                      className={`text-[9px] font-bold uppercase px-1.5 py-0.5 rounded-full ${
                        obs.status === 'approved'
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : obs.status === 'pending'
                          ? 'bg-amber-500/20 text-amber-400 animate-pulse'
                          : 'bg-rose-500/20 text-rose-400'
                      }`}
                    >
                      {obs.status}
                    </span>
                  </div>

                  <div className="font-semibold text-slate-200 mt-2 line-clamp-1">
                    {obs.rawTitle}
                  </div>

                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    {obs.rawContent}
                  </p>

                  <div className="mt-2.5 pt-2 border-t border-azentio-800/80 flex justify-between items-center text-[10px]">
                    <span className="text-slate-500">{obs.submittedAt}</span>
                    <span className="text-cyan-400 font-mono">{obs.aiClusterId}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Interactive Side-by-Side Redaction Console (7 cols) */}
        {selectedObs ? (
          <div className="lg:col-span-7 rounded-2xl bg-azentio-900/70 border border-azentio-800 p-6 space-y-5 shadow-xl">
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-azentio-800 gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-sm text-cyan-400">
                    Reviewing: {selectedObs.id}
                  </span>
                  <span className="text-xs text-slate-400">
                    from <strong>{organizations[selectedObs.orgId]?.name || 'Client Bank'}</strong>
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Submitted by {selectedObs.author} • Category: {selectedObs.productCategory}
                </div>
              </div>

              <button
                onClick={handleAutoStrip}
                className="px-3 py-1.5 rounded-lg bg-azentio-800 hover:bg-azentio-700 text-cyan-300 border border-cyan-500/30 text-xs font-semibold flex items-center gap-1.5 transition"
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>One-Click Auto-Strip PII</span>
              </button>
            </div>

            {/* PII Entities Detected Badge Bar */}
            <div className="p-3 rounded-xl bg-azentio-950 border border-azentio-800 text-xs space-y-1.5">
              <div className="flex justify-between items-center text-[11px] text-slate-400">
                <span className="font-semibold text-rose-300 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  PII & Proprietary Entities Flagged by AI:
                </span>
                <span className="text-slate-500 font-mono">Rule Engine: FinNER-BFSI</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedObs.piiDetected?.map((pii, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono text-[10px]"
                  >
                    Flagged: {pii}
                  </span>
                ))}
              </div>
            </div>

            {/* Raw vs Redacted View */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Raw Client View */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-slate-400">
                  <span className="font-bold text-slate-300">Raw Proprietary Text</span>
                  <span className="text-[10px] font-mono text-rose-400">Internal Only</span>
                </div>
                <div className="font-semibold text-slate-200">{selectedObs.rawTitle}</div>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  {selectedObs.rawContent}
                </p>
              </div>

              {/* Editable De-identified Version */}
              <div className="p-4 rounded-xl bg-azentio-950 border border-cyan-500/40 space-y-2">
                <div className="flex justify-between items-center text-cyan-300">
                  <span className="font-bold flex items-center gap-1">
                    <Edit3 className="w-3.5 h-3.5" />
                    De-Identified Public Form
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">Editable</span>
                </div>

                <div>
                  <label className="block text-[10px] text-slate-400 uppercase font-semibold mb-1">
                    Sanitized Title
                  </label>
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="w-full p-2 rounded bg-azentio-900 border border-azentio-700 text-white text-xs outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-[10px] text-slate-400 uppercase font-semibold mb-1">
                    Sanitized Content (Collective Feed)
                  </label>
                  <textarea
                    rows={4}
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full p-2 rounded bg-azentio-900 border border-azentio-700 text-white text-xs outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            </div>

            {/* Compliance Justification Note */}
            <div>
              <label className="block text-slate-300 text-xs font-semibold mb-1">
                Moderator Compliance Certification Note:
              </label>
              <input
                type="text"
                value={complianceNote}
                onChange={(e) => setComplianceNote(e.target.value)}
                placeholder="e.g. Verified zero identifying institutional tokens. Anonymized to industry pattern."
                className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white text-xs outline-none focus:border-cyan-400"
              />
            </div>

            {/* Approval / Rejection Actions */}
            <div className="pt-3 border-t border-azentio-800 flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] text-slate-400">
                Action triggers automatic audit entry and updates Collective Intelligence index.
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleReject}
                  className="px-4 py-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-bold transition flex items-center gap-1.5"
                >
                  <XCircle className="w-4 h-4" />
                  <span>Reject Submission</span>
                </button>

                <button
                  onClick={handleApprove}
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-bold transition shadow-lg flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Certify & Publish to Collective Feed</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="lg:col-span-7 rounded-2xl bg-azentio-900/40 border border-azentio-800 p-12 text-center text-slate-500">
            Select an observation from the queue to moderate.
          </div>
        )}
      </div>
    </div>
  );
};
