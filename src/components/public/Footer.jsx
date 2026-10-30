import React from 'react';
import { usePortal } from '../../context/PortalContext';
import { AzentioLogo } from '../common/AzentioLogo';
import {
  Shield,
  Lock,
  Award,
  ExternalLink,
  Building2,
  Mail,
  Phone,
  Globe2,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export const Footer = () => {
  const { navigateTo, setDemoModalOpen, switchRole } = usePortal();

  return (
    <footer className="bg-[#03060E] text-slate-300 border-t border-[#142347] relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00D084]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Col 1: Brand & Enterprise Profile (Span 2) */}
          <div className="lg:col-span-2 space-y-6">
            <AzentioLogo variant="dark" height="h-9" />
            <p className="text-sm font-semibold text-[#2EE59D] tracking-wide">
              "Purpose-built to shape tomorrow"
            </p>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Azentio Software provides specialized, mission-critical core software solutions across Asia Pacific, Middle East, Africa, and South Asia. Powering 60+ tier-1 commercial banks, Islamic financial institutions, insurance providers, and capital markets.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 bg-[#070D1E] px-3 py-1.5 rounded-lg border border-[#172B57]">
                <Globe2 className="w-4 h-4 text-[#2EE59D]" />
                HQ: Singapore
              </span>
              <span className="flex items-center gap-1.5 bg-[#070D1E] px-3 py-1.5 rounded-lg border border-[#172B57]">
                <Building2 className="w-4 h-4 text-blue-400" />
                60+ Global Financial Institutions
              </span>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00D084] hover:from-[#0052cc] hover:to-[#25ce8b] text-white font-bold text-xs shadow-lg shadow-[#0066FF]/20 transition transform hover:scale-[1.02]"
              >
                <span>Request Enterprise Demonstration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Core BFSI Product Suites */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-[#142347] pb-2">
              BFSI Product Suites
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#products" className="hover:text-[#2EE59D] transition block">
                  <span className="text-white font-medium">Azentio Kastle</span>
                  <span className="block text-xs text-slate-500">Universal Core Banking & SME</span>
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#2EE59D] transition block">
                  <span className="text-white font-medium">Azentio iMAL</span>
                  <span className="block text-xs text-slate-500">AAOIFI Islamic Banking Core</span>
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#2EE59D] transition block">
                  <span className="text-white font-medium">Azentio Amlgo Labs</span>
                  <span className="block text-xs text-slate-500">AML & Sanctions Defense</span>
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#2EE59D] transition block">
                  <span className="text-white font-medium">Azentio Beyon360</span>
                  <span className="block text-xs text-slate-500">Digital Insurance & Claims</span>
                </a>
              </li>
              <li>
                <a href="#collective-intelligence" className="hover:text-[#2EE59D] transition block">
                  <span className="text-[#2EE59D] font-medium">Azentio AI Collective</span>
                  <span className="block text-xs text-slate-500">Shared Privacy-Safe Intelligence</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal & Personas */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-[#142347] pb-2">
              Collaboration Portal
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => switchRole('bank-a')}
                  className="hover:text-blue-400 text-left transition flex items-center justify-between w-full"
                >
                  <span>Apex Global Bank (Client A)</span>
                  <span className="text-[10px] text-blue-400 font-mono bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-900">Tenant</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => switchRole('bank-b')}
                  className="hover:text-[#2EE59D] text-left transition flex items-center justify-between w-full"
                >
                  <span>Crescent Islamic Bank (Client B)</span>
                  <span className="text-[10px] text-[#2EE59D] font-mono bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-900">Tenant</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => switchRole('moderator')}
                  className="hover:text-amber-400 text-left transition flex items-center justify-between w-full"
                >
                  <span>Compliance Moderator</span>
                  <span className="text-[10px] text-amber-400 font-mono bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-900">HITL</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => switchRole('product-owner')}
                  className="hover:text-teal-400 text-left transition flex items-center justify-between w-full"
                >
                  <span>Product Roadmap Lead</span>
                  <span className="text-[10px] text-teal-400 font-mono bg-teal-950/60 px-1.5 py-0.5 rounded border border-teal-900">Product</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => switchRole('admin')}
                  className="hover:text-rose-400 text-left transition flex items-center justify-between w-full"
                >
                  <span>SecOps & Admin Console</span>
                  <span className="text-[10px] text-rose-400 font-mono bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-900">Admin</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => switchRole('employee')}
                  className="hover:text-indigo-400 text-left transition flex items-center justify-between w-full"
                >
                  <span>AI Research Laboratory</span>
                  <span className="text-[10px] text-indigo-400 font-mono bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-900">R&D</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Global Hubs & Official Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-[#142347] pb-2">
              Global Presence
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="p-3.5 rounded-xl bg-[#070D1E] border border-[#172B57] space-y-2">
                <div className="text-white font-semibold text-xs flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#2EE59D]" />
                  Azentio Software Headquarters
                </div>
                <div className="text-slate-400 text-xs">
                  Singapore • Bengaluru • Dubai • Riyadh • London • Mumbai
                </div>
                <div className="pt-2 border-t border-[#142347] flex items-center justify-between">
                  <a
                    href="https://www.azentio.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#2EE59D] hover:underline font-semibold text-xs"
                  >
                    azentio.com <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[11px] text-slate-500">Tier-1 BFSI Core</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#070D1E] border border-[#172B57] space-y-1.5 text-xs">
                <div className="text-slate-300 font-medium">Enterprise Client Support:</div>
                <div className="text-slate-400">24/7 Mission-Critical SLA Guaranteed</div>
                <div className="text-slate-500 font-mono text-[11px]">support@azentio.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Enterprise Compliance Bar */}
        <div className="pt-8 pb-8 border-t border-[#142347] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2 p-3 rounded-xl bg-[#070D1E]/60 border border-[#172B57]/60">
            <Shield className="w-5 h-5 text-[#2EE59D] shrink-0" />
            <div>
              <div className="text-white font-semibold text-xs">ISO 27001 Certified</div>
              <div className="text-[11px] text-slate-500">Information Security Management</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-[#070D1E]/60 border border-[#172B57]/60">
            <Lock className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="text-white font-semibold text-xs">SOC 2 Type II Audited</div>
              <div className="text-[11px] text-slate-500">Security, Availability, Privacy</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-[#070D1E]/60 border border-[#172B57]/60">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-white font-semibold text-xs">AAOIFI Sharia Certified</div>
              <div className="text-[11px] text-slate-500">Global Islamic Financial Standard</div>
            </div>
          </div>

          <div className="flex items-center gap-2 p-3 rounded-xl bg-[#070D1E]/60 border border-[#172B57]/60">
            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
            <div>
              <div className="text-white font-semibold text-xs">Zero-Trust Isolation</div>
              <div className="text-[11px] text-slate-500">Cryptographic Tenant Separation</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 border-t border-[#142347] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 Azentio Software Private Limited. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <a href="https://www.azentio.com/privacy-policy/" target="_blank" rel="noreferrer" className="hover:text-white transition">
              Privacy Policy
            </a>
            <span className="text-slate-700">•</span>
            <a href="https://www.azentio.com/terms-of-use/" target="_blank" rel="noreferrer" className="hover:text-white transition">
              Terms of Use
            </a>
            <span className="text-slate-700">•</span>
            <a href="https://www.azentio.com/security/" target="_blank" rel="noreferrer" className="hover:text-white transition">
              Security Standards
            </a>
            <span className="text-slate-700">•</span>
            <span className="text-[#2EE59D] font-mono">v4.2.0-BFSI-Enterprise</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
