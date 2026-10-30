import React from 'react';
import { usePortal } from '../../context/PortalContext';
import {
  LayoutDashboard,
  PlusCircle,
  FolderLock,
  Sparkles,
  ShieldCheck,
  Lock,
  Cpu,
  ArrowLeft,
  Building2,
  TrendingUp
} from 'lucide-react';

export const PortalLayout = ({ children }) => {
  const {
    currentRole,
    activePortalTab,
    setActivePortalTab,
    navigateTo,
    roles,
    organizations,
    switchRole,
    testTenantBoundaryViolation
  } = usePortal();

  const roleObj = roles[currentRole] || roles['bank-a'];
  const orgObj = organizations[currentRole];
  const isClientRole = currentRole.startsWith('bank-');

  const navItems = [
    {
      id: 'dashboard',
      label: 'Tenant Overview',
      icon: <LayoutDashboard className="w-4 h-4" />,
      visible: true
    },
    {
      id: 'submit',
      label: 'Submit Observation',
      icon: <PlusCircle className="w-4 h-4 text-[#00D084]" />,
      visible: isClientRole || currentRole === 'employee'
    },
    {
      id: 'private',
      label: 'Private Tenant Vault',
      icon: <FolderLock className="w-4 h-4 text-blue-400" />,
      visible: isClientRole
    },
    {
      id: 'collective',
      label: 'Collective Feed',
      icon: <Sparkles className="w-4 h-4 text-[#00D084]" />,
      visible: true
    },
    {
      id: 'moderation',
      label: 'Moderation Console',
      icon: <ShieldCheck className="w-4 h-4 text-amber-400" />,
      visible: currentRole === 'moderator' || currentRole === 'admin'
    },
    {
      id: 'roadmap',
      label: 'Product Roadmap',
      icon: <TrendingUp className="w-4 h-4 text-teal-400" />,
      visible: true
    },
    {
      id: 'security',
      label: 'Security & Audit Logs',
      icon: <Lock className="w-4 h-4 text-rose-400" />,
      visible: currentRole === 'admin' || currentRole === 'moderator'
    },
    {
      id: 'employee',
      label: 'AI Research Sandbox',
      icon: <Cpu className="w-4 h-4 text-indigo-400" />,
      visible: currentRole === 'employee' || currentRole === 'admin'
    }
  ];

  return (
    <div className="min-h-screen bg-[#040814] text-slate-100 flex flex-col">
      {/* Portal Top Bar */}
      <div className="bg-[#070D1E] border-b border-[#142347] px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          {/* User & Tenant Info */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigateTo('public')}
              className="p-1.5 rounded-lg bg-[#0A1329] hover:bg-[#0F1D3D] text-slate-400 hover:text-white transition flex items-center gap-1 text-xs"
              title="Return to Public Website"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Exit to Site</span>
            </button>

            <div className="h-6 w-px bg-[#142347] hidden sm:block" />

            {/* Active Avatar & Identity */}
            <div className="flex items-center gap-2.5">
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs text-white shadow-md ${
                  orgObj ? `bg-gradient-to-tr ${orgObj.logoColor}` : 'bg-[#00D084] text-[#040814]'
                }`}
              >
                {orgObj ? orgObj.avatar : roleObj.badge.substring(0, 3)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-white">
                    {roleObj.name}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${roleObj.color}`}
                  >
                    {roleObj.badge}
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span>{roleObj.organization}</span>
                  {orgObj && (
                    <>
                      <span>•</span>
                      <span className="text-[#00D084] font-mono text-[10px]">
                        {orgObj.tenantKey}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Quick RBAC Switch Buttons for Judges */}
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            <span className="text-[11px] text-slate-400 hidden xl:inline">Switch Role:</span>

            <button
              onClick={() => switchRole('bank-a')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition border ${
                currentRole === 'bank-a'
                  ? 'bg-blue-600 text-white border-blue-400 shadow-sm'
                  : 'bg-[#0A1329] text-blue-300 border-blue-900/60 hover:bg-blue-900/40'
              }`}
            >
              Bank A
            </button>

            <button
              onClick={() => switchRole('bank-b')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition border ${
                currentRole === 'bank-b'
                  ? 'bg-[#00D084] text-[#040814] font-bold border-[#00D084] shadow-sm'
                  : 'bg-[#0A1329] text-[#00D084] border-[#00D084]/40 hover:bg-[#00D084]/15'
              }`}
            >
              Bank B
            </button>

            <button
              onClick={() => switchRole('bank-c')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition border ${
                currentRole === 'bank-c'
                  ? 'bg-purple-600 text-white border-purple-400 shadow-sm'
                  : 'bg-[#0A1329] text-purple-300 border-purple-900/60 hover:bg-purple-900/40'
              }`}
            >
              Bank C
            </button>

            <button
              onClick={() => switchRole('moderator')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition border ${
                currentRole === 'moderator'
                  ? 'bg-amber-600 text-white border-amber-400 shadow-sm'
                  : 'bg-[#0A1329] text-amber-300 border-amber-900/60 hover:bg-amber-900/40'
              }`}
            >
              Moderator
            </button>

            <button
              onClick={() => switchRole('product-owner')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition border ${
                currentRole === 'product-owner'
                  ? 'bg-teal-600 text-white border-teal-400 shadow-sm'
                  : 'bg-[#0A1329] text-teal-300 border-teal-900/60 hover:bg-teal-900/40'
              }`}
            >
              Product Owner
            </button>

            <button
              onClick={() => switchRole('admin')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition border ${
                currentRole === 'admin'
                  ? 'bg-rose-600 text-white border-rose-400 shadow-sm'
                  : 'bg-[#0A1329] text-rose-300 border-rose-900/60 hover:bg-rose-900/40'
              }`}
            >
              Admin
            </button>

            <button
              onClick={() => switchRole('employee')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition border ${
                currentRole === 'employee'
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-sm'
                  : 'bg-[#0A1329] text-indigo-300 border-indigo-900/60 hover:bg-indigo-900/40'
              }`}
            >
              Employee R&D
            </button>
          </div>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="max-w-7xl mx-auto mt-3 pt-2 border-t border-[#142347] flex items-center gap-1 overflow-x-auto text-xs font-medium">
          {navItems
            .filter((item) => item.visible)
            .map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePortalTab(tab.id)}
                className={`px-3.5 py-2 rounded-lg flex items-center gap-2 whitespace-nowrap transition ${
                  activePortalTab === tab.id
                    ? 'bg-[#0A1329] text-[#00D084] border border-[#00D084]/40 shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-[#070D1E]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}

          {/* Cross-Tenant Boundary Demo Button */}
          {isClientRole && (
            <button
              onClick={() => testTenantBoundaryViolation(currentRole === 'bank-a' ? 'bank-b' : 'bank-a')}
              className="ml-auto px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-[11px] font-semibold flex items-center gap-1.5 transition shrink-0"
              title="Test multi-tenant isolation firewall"
            >
              <Lock className="w-3.5 h-3.5 text-rose-400" />
              <span>Simulate Cross-Tenant Access Check</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Portal Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};
