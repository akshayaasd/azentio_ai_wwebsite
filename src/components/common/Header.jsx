import React, { useState } from 'react';
import { usePortal } from '../../context/PortalContext';
import { AzentioLogo } from './AzentioLogo';
import {
  Shield,
  Layers,
  ChevronDown,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Bell,
  RefreshCw,
  Award,
  Lock,
  Building2,
  CheckCircle2
} from 'lucide-react';

export const Header = () => {
  const {
    currentRole,
    currentView,
    switchRole,
    navigateTo,
    roles,
    organizations,
    notifications,
    setDemoModalOpen,
    resetDemoData
  } = usePortal();

  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);

  const activeRoleObj = roles[currentRole] || roles['public'];
  const activeOrgObj = organizations[currentRole];

  return (
    <>
      {/* Top Banner: Hackathon Grand Finale & Evaluator Switcher */}
      <div className="bg-[#050B18] border-b border-[#142347] px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2EE59D]/15 text-[#2EE59D] font-semibold border border-[#2EE59D]/30">
              <Award className="w-3.5 h-3.5" /> Azentio.ai Build Labs 2026
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300 font-medium">
              Grand Finale Special Challenge: <strong className="text-white">10 Brownie Points Ready</strong>
            </span>
            <span className="text-[#2EE59D] bg-[#070D1E] px-2 py-0.5 rounded border border-[#172B57]">
              Reporting: 31 Oct, 8:00 AM • Bengaluru
            </span>
          </div>

          {/* Quick Perspective Switcher for Judges */}
          <div className="flex items-center gap-2">
            <span className="text-slate-400 hidden lg:inline">Evaluate Persona:</span>
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#0D1836] hover:bg-[#13234F] border border-[#1F366E] text-white font-medium transition shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#2EE59D] animate-pulse" />
                <span className="text-slate-300 font-normal text-[11px]">Role:</span>
                <span className="text-[#2EE59D] font-semibold">{activeRoleObj.name}</span>
                <span className="text-[10px] text-slate-400 font-mono">({activeRoleObj.badge})</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-1" />
              </button>

              {roleDropdownOpen && (
                <div
                  className="absolute right-0 mt-1.5 w-80 rounded-xl bg-[#070D1E] border border-[#172B57] shadow-2xl p-2 z-50 text-left backdrop-blur-xl"
                  onClick={() => setRoleDropdownOpen(false)}
                >
                  <div className="px-3 py-2 border-b border-[#142347] text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex justify-between items-center">
                    <span>Select Evaluation Persona</span>
                    <span className="text-[#2EE59D] font-normal">Click to switch</span>
                  </div>

                  <div className="py-1 max-h-96 overflow-y-auto space-y-1">
                    {/* Public Site */}
                    <button
                      onClick={() => switchRole('public')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition flex items-start gap-2.5 ${
                        currentRole === 'public'
                          ? 'bg-[#2EE59D]/20 border border-[#2EE59D]/40 text-white'
                          : 'hover:bg-[#0D1836] text-slate-300'
                      }`}
                    >
                      <Layers className="w-4 h-4 text-[#2EE59D] mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs text-white">Public Visitor</div>
                        <div className="text-[11px] text-slate-400">Marketing site, product suite & sandbox demo</div>
                      </div>
                    </button>

                    {/* Bank A */}
                    <button
                      onClick={() => switchRole('bank-a')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition flex items-start gap-2.5 ${
                        currentRole === 'bank-a'
                          ? 'bg-blue-600/30 border border-blue-500/50 text-white'
                          : 'hover:bg-[#0D1836] text-slate-300'
                      }`}
                    >
                      <Building2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs text-blue-300">Apex Global Bank (Client Tenant A)</div>
                        <div className="text-[11px] text-slate-400">Marcus Vance • Submits SME seasonality loan gaps</div>
                      </div>
                    </button>

                    {/* Bank B */}
                    <button
                      onClick={() => switchRole('bank-b')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition flex items-start gap-2.5 ${
                        currentRole === 'bank-b'
                          ? 'bg-[#2EE59D]/20 border border-[#2EE59D]/50 text-white'
                          : 'hover:bg-[#0D1836] text-slate-300'
                      }`}
                    >
                      <Building2 className="w-4 h-4 text-[#2EE59D] mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs text-emerald-300">Crescent Islamic Bank (Client Tenant B)</div>
                        <div className="text-[11px] text-slate-400">Zahra Al-Mansoor • Submits Sharia SME Murabaha flags</div>
                      </div>
                    </button>

                    {/* Bank C */}
                    <button
                      onClick={() => switchRole('bank-c')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition flex items-start gap-2.5 ${
                        currentRole === 'bank-c'
                          ? 'bg-purple-600/30 border border-purple-500/50 text-white'
                          : 'hover:bg-[#0D1836] text-slate-300'
                      }`}
                    >
                      <Building2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs text-purple-300">Summit Mutual Bank (Client Tenant C)</div>
                        <div className="text-[11px] text-slate-400">Rohan Mehra • Submits seasonal inventory spikes</div>
                      </div>
                    </button>

                    {/* Moderator */}
                    <button
                      onClick={() => switchRole('moderator')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition flex items-start gap-2.5 ${
                        currentRole === 'moderator'
                          ? 'bg-amber-600/30 border border-amber-500/50 text-white'
                          : 'hover:bg-[#0D1836] text-slate-300'
                      }`}
                    >
                      <Shield className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs text-amber-300">Compliance & Safety Moderator</div>
                        <div className="text-[11px] text-slate-400">Elena Rostova • Redacts PII & approves to Collective Feed</div>
                      </div>
                    </button>

                    {/* Product Owner */}
                    <button
                      onClick={() => switchRole('product-owner')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition flex items-start gap-2.5 ${
                        currentRole === 'product-owner'
                          ? 'bg-teal-600/30 border border-teal-500/50 text-white'
                          : 'hover:bg-[#0D1836] text-slate-300'
                      }`}
                    >
                      <Sparkles className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs text-teal-300">Product Owner (Azentio Core)</div>
                        <div className="text-[11px] text-slate-400">Dr. Tariq Siddiqui • Converts cluster to Roadmap Feature</div>
                      </div>
                    </button>

                    {/* Admin */}
                    <button
                      onClick={() => switchRole('admin')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition flex items-start gap-2.5 ${
                        currentRole === 'admin'
                          ? 'bg-rose-600/30 border border-rose-500/50 text-white'
                          : 'hover:bg-[#0D1836] text-slate-300'
                      }`}
                    >
                      <Lock className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs text-rose-300">System Admin & Security Ops</div>
                        <div className="text-[11px] text-slate-400">Tenant fencing enforcement, keys & SIEM logs</div>
                      </div>
                    </button>

                    {/* Employee */}
                    <button
                      onClick={() => switchRole('employee')}
                      className={`w-full text-left px-3 py-2 rounded-lg transition flex items-start gap-2.5 ${
                        currentRole === 'employee'
                          ? 'bg-indigo-600/30 border border-indigo-500/50 text-white'
                          : 'hover:bg-[#0D1836] text-slate-300'
                      }`}
                    >
                      <Layers className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="font-semibold text-xs text-indigo-300">Azentio AI Lab Employee</div>
                        <div className="text-[11px] text-slate-400">Priya Sharma • Model playground & synthetic generator</div>
                      </div>
                    </button>
                  </div>

                  <div className="pt-2 mt-2 border-t border-[#142347] flex justify-between items-center text-[10px] text-slate-400 px-2">
                    <span>Full RBAC & Tenant Isolation Active</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        resetDemoData();
                      }}
                      className="text-slate-400 hover:text-white flex items-center gap-1"
                      title="Reset demo data to initial state"
                    >
                      <RefreshCw className="w-3 h-3" /> Reset Demo
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#040814]/95 backdrop-blur-md border-b border-[#142347]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo with Exact Azentio Wordmark + Dual Blade Emblem */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigateTo('public')}
              className="flex items-center text-left group transition transform hover:opacity-95"
            >
              <AzentioLogo variant="dark" height="h-8" />
            </button>

            {/* Public Navigation Links */}
            {currentView === 'public' && (
              <nav className="hidden lg:flex items-center gap-1 ml-4 text-sm font-medium text-slate-300">
                <a
                  href="#products"
                  className="px-3 py-2 rounded-lg hover:text-white hover:bg-[#0D1836] transition"
                >
                  Solutions
                </a>
                <a
                  href="#collective-intelligence"
                  className="px-3 py-2 rounded-lg hover:text-white hover:bg-[#0D1836] transition flex items-center gap-1"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#2EE59D]" />
                  Collective AI
                </a>
                <a
                  href="#interactive-sandbox"
                  className="px-3 py-2 rounded-lg hover:text-white hover:bg-[#0D1836] transition"
                >
                  Interactive Sandbox
                </a>
                <a
                  href="#hackathon-hub"
                  className="px-3 py-2 rounded-lg hover:text-white hover:bg-[#0D1836] transition flex items-center gap-1"
                >
                  <Award className="w-3.5 h-3.5 text-[#2EE59D]" />
                  Build Labs Hub
                </a>
                <a
                  href="https://www.azentio.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-2 rounded-lg text-slate-400 hover:text-slate-200 transition flex items-center gap-1"
                >
                  Official Site <ExternalLink className="w-3 h-3" />
                </a>
              </nav>
            )}
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
                className="p-2 rounded-lg bg-[#070D1E] hover:bg-[#0D1836] border border-[#172B57] text-slate-300 hover:text-white transition relative"
                title="System Notifications"
              >
                <Bell className="w-4 h-4" />
                {notifications.some(n => !n.read) && (
                  <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-[#2EE59D] ring-2 ring-[#040814]" />
                )}
              </button>

              {notifDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 rounded-xl bg-[#070D1E] border border-[#172B57] shadow-2xl p-3 z-50 text-left"
                  onClick={() => setNotifDropdownOpen(false)}
                >
                  <div className="flex justify-between items-center pb-2 border-b border-[#142347]">
                    <span className="font-semibold text-xs text-white">Live System Feeds</span>
                    <span className="text-[10px] text-[#2EE59D]">{notifications.length} alerts</span>
                  </div>
                  <div className="py-2 space-y-2 max-h-64 overflow-y-auto">
                    {notifications.map(n => (
                      <div key={n.id} className="p-2 rounded-lg bg-[#0A1329] border border-[#172B57] text-xs">
                        <div className="font-semibold text-slate-200 flex justify-between items-start">
                          <span>{n.title}</span>
                          <span className="text-[9px] text-slate-400 font-mono">{n.time}</span>
                        </div>
                        <div className="text-slate-400 text-[11px] mt-1">{n.message}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Request Demo Trigger */}
            <button
              onClick={() => setDemoModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#070D1E] hover:bg-[#0D1836] border border-[#172B57] text-xs font-semibold text-slate-200 hover:text-white transition shadow-sm"
            >
              Request Demo
            </button>

            {/* Primary Launch Portal Button */}
            {currentView === 'public' ? (
              <button
                onClick={() => switchRole('bank-a')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2EE59D] hover:bg-[#25CE8B] text-xs font-bold text-[#0E2633] shadow-lg shadow-[#2EE59D]/25 transition transform hover:scale-[1.02]"
              >
                <span>Launch Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={() => navigateTo('public')}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#070D1E] hover:bg-[#0D1836] border border-[#172B57] text-xs font-semibold text-[#2EE59D] transition"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Return to Public Site</span>
              </button>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
