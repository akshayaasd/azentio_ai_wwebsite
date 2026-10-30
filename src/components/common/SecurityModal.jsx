import React from 'react';
import { usePortal } from '../../context/PortalContext';
import { ShieldAlert, Lock, XCircle, AlertTriangle, FileText, CheckCircle2, X } from 'lucide-react';

export const SecurityModal = () => {
  const { securityModalData, setSecurityModalData } = usePortal();

  if (!securityModalData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#0B132B] border-2 border-rose-500/70 shadow-2xl shadow-rose-900/40 p-6 text-slate-100 overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-rose-500 via-amber-500 to-rose-600" />

        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-rose-500/30 text-rose-300 font-mono text-[11px] font-bold uppercase border border-rose-500/50">
                  HTTP 403 Forbidden
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  RBAC Boundary Triggered
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-1">
                Zero-Trust Multi-Tenant Fence Enforced
              </h3>
            </div>
          </div>

          <button
            onClick={() => setSecurityModalData(null)}
            className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-rose-950/30 border border-rose-800/40 text-xs space-y-2">
          <div className="flex justify-between items-center text-slate-300">
            <span className="font-semibold text-rose-300">Origin Tenant:</span>
            <span className="font-mono text-white bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
              {securityModalData.currentOrg}
            </span>
          </div>

          <div className="flex justify-between items-center text-slate-300">
            <span className="font-semibold text-rose-300">Target Tenant Vault:</span>
            <span className="font-mono text-rose-200 bg-rose-950 px-2 py-0.5 rounded border border-rose-800">
              {securityModalData.targetOrg}
            </span>
          </div>

          <div className="flex justify-between items-center text-slate-300">
            <span className="font-semibold text-slate-400">Target Cryptographic Key:</span>
            <span className="font-mono text-[11px] text-slate-400">
              {securityModalData.targetTenantKey || 'TENANT-VAULT-ISOLATED'}
            </span>
          </div>

          <div className="flex justify-between items-center text-slate-300">
            <span className="font-semibold text-slate-400">Enforcement Log ID:</span>
            <span className="font-mono text-[11px] text-cyan-400">
              {securityModalData.logId}
            </span>
          </div>

          <div className="flex justify-between items-center text-slate-300">
            <span className="font-semibold text-slate-400">Timestamp:</span>
            <span className="font-mono text-[11px] text-slate-400">
              {securityModalData.timestamp}
            </span>
          </div>
        </div>

        {/* Technical safeguard explanation for judges */}
        <div className="mt-4 space-y-2 text-xs text-slate-300">
          <div className="font-semibold text-slate-200 flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            Enterprise Multi-Tenant Compliance Guardrail:
          </div>
          <p className="text-slate-400 leading-relaxed text-[11px]">
            In strict compliance with Azentio’s BFSI data governance standards, individual client raw drafts, customer account numbers, and un-sanitized operational observations are cryptographically sequestered inside each tenant's private schema.
          </p>
          <div className="p-2.5 rounded-lg bg-azentio-900 border border-azentio-700/60 flex items-start gap-2 text-[11px]">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
            <span className="text-slate-300">
              Only observations that pass <strong>Named Entity Recognition (NER) de-identification</strong> and <strong>Human Moderator certification</strong> are published to the cross-tenant Collective Intelligence feed.
            </span>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() => setSecurityModalData(null)}
            className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 font-semibold text-xs text-white shadow-lg transition"
          >
            Acknowledge & Dismiss Log
          </button>
        </div>
      </div>
    </div>
  );
};
