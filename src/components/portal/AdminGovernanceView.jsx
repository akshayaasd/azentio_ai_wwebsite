import React from 'react';
import { usePortal } from '../../context/PortalContext';
import {
  Lock,
  ShieldAlert,
  ShieldCheck,
  Building2,
  Users,
  Database,
  Activity,
  CheckCircle2,
  KeyRound,
  RefreshCw
} from 'lucide-react';

export const AdminGovernanceView = () => {
  const {
    auditLogs,
    organizations,
    resetDemoData,
    testTenantBoundaryViolation,
    showToast
  } = usePortal();

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-950/40 via-azentio-900 to-azentio-950 border border-rose-500/40 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/40 shadow-md">
            <Lock className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold text-white">System Governance & Multi-Tenant Security</h1>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/40">
                ZERO-TRUST FIREWALL ACTIVE
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              SecOps Console • Real-time SIEM audit stream, cryptographic tenant boundary enforcement, and access violation traps.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => testTenantBoundaryViolation('bank-b')}
            className="px-3.5 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5"
          >
            <ShieldAlert className="w-4 h-4" />
            <span>Simulate Tenant Breach Trap</span>
          </button>

          <button
            onClick={resetDemoData}
            className="px-3.5 py-2 rounded-lg bg-azentio-950 hover:bg-azentio-800 border border-azentio-700 text-slate-300 text-xs font-semibold flex items-center gap-1.5 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Demo State</span>
          </button>
        </div>
      </div>

      {/* Tenant Vault Isolation Matrix */}
      <div className="space-y-3">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Building2 className="w-4 h-4 text-cyan-400" />
          Provisioned Institutional Tenant Boundaries
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.values(organizations).map((org) => (
            <div
              key={org.id}
              className="p-5 rounded-2xl bg-azentio-900/70 border border-azentio-800 space-y-3 shadow-lg text-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-sm">{org.name}</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  ISOLATED
                </span>
              </div>

              <div className="space-y-1.5 text-slate-400 text-[11px]">
                <div className="flex justify-between">
                  <span>Cryptographic Vault Key:</span>
                  <span className="font-mono text-cyan-300 text-[10px]">{org.tenantKey}</span>
                </div>
                <div className="flex justify-between">
                  <span>Jurisdiction:</span>
                  <span className="text-slate-200">{org.jurisdiction}</span>
                </div>
                <div className="flex justify-between">
                  <span>Provisioned Users:</span>
                  <span className="font-mono text-slate-200">{org.activeUsers}</span>
                </div>
                <div className="flex justify-between">
                  <span>Encryption:</span>
                  <span className="text-emerald-400 font-mono">AES-256-GCM / Schema Segregation</span>
                </div>
              </div>

              <div className="pt-2 border-t border-azentio-800 flex justify-end">
                <button
                  onClick={() => testTenantBoundaryViolation(org.id === 'bank-a' ? 'bank-b' : 'bank-a')}
                  className="text-rose-400 hover:text-rose-300 text-[11px] font-semibold flex items-center gap-1"
                >
                  <Lock className="w-3 h-3" /> Test Unauthorized Access Defense
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-Time SIEM Audit Log Table */}
      <div className="rounded-2xl bg-azentio-900/70 border border-azentio-800 overflow-hidden shadow-xl">
        <div className="p-4 border-b border-azentio-800 flex justify-between items-center text-xs">
          <div className="font-bold text-white flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>Real-Time Security & Compliance Audit Stream</span>
          </div>
          <span className="font-mono text-slate-400 text-[11px]">
            {auditLogs.length} immutable events logged
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-azentio-950 text-slate-400 font-medium border-b border-azentio-800">
              <tr>
                <th className="py-2.5 px-4">Log ID</th>
                <th className="py-2.5 px-4">Timestamp</th>
                <th className="py-2.5 px-4">Actor</th>
                <th className="py-2.5 px-4">Action</th>
                <th className="py-2.5 px-4">Status</th>
                <th className="py-2.5 px-4">Audit Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-azentio-800/60 text-slate-300 font-mono text-[11px]">
              {auditLogs.map((log) => (
                <tr key={log.id} className="hover:bg-azentio-800/40 transition">
                  <td className="py-2.5 px-4 text-cyan-400 font-bold whitespace-nowrap">
                    {log.id}
                  </td>
                  <td className="py-2.5 px-4 text-slate-400 whitespace-nowrap">
                    {log.timestamp}
                  </td>
                  <td className="py-2.5 px-4 text-white whitespace-nowrap">
                    {log.actor}
                  </td>
                  <td className="py-2.5 px-4 font-bold text-cyan-300 whitespace-nowrap">
                    {log.action}
                  </td>
                  <td className="py-2.5 px-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        log.status === 'SUCCESS'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : log.status === 'BLOCKED_BY_FENCE'
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}
                    >
                      {log.status}
                    </span>
                  </td>
                  <td className="py-2.5 px-4 text-slate-300 font-sans text-xs">
                    {log.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
