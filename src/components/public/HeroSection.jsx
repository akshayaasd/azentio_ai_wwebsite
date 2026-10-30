import React from 'react';
import { usePortal } from '../../context/PortalContext';
import {
  Sparkles,
  ArrowRight,
  Shield,
  TrendingUp,
  Cpu,
  Layers,
  Lock,
  Award,
  CheckCircle2,
  Users
} from 'lucide-react';

export const HeroSection = () => {
  const { switchRole, setDemoModalOpen } = usePortal();

  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#040814] via-[#070E22] to-[#040814]">
      {/* Background radial glows in Azentio Emerald & Mint */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#00D084]/15 via-emerald-500/10 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute -top-10 left-10 w-72 h-72 bg-[#00D084]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1329]/80 border border-[#172B57] shadow-inner backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-[#00D084] animate-ping" />
            <span className="text-xs font-semibold text-[#00D084]">
              Azentio Autonomous BFSI Suite
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-300 italic">
              "Purpose-built to shape tomorrow"
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Purpose-Built BFSI Core &{' '}
            <span className="bg-gradient-to-r from-[#05DF72] via-[#00D084] to-teal-400 bg-clip-text text-transparent">
              Collective AI Learning
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Empowering 60+ global commercial and Islamic banks with mission-critical banking cores, real-time AML surveillance, and an automated privacy-preserving collaboration network.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => switchRole('bank-a')}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00D084] hover:bg-[#05DF72] text-[#040814] font-extrabold text-sm shadow-xl shadow-[#00D084]/25 transition transform hover:scale-[1.02]"
            >
              <span>Launch Client Portal (Bank A)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#interactive-sandbox"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A1329] hover:bg-[#0F1D3D] border border-[#172B57] text-slate-200 hover:text-white font-semibold text-sm transition"
            >
              <Cpu className="w-4 h-4 text-[#00D084]" />
              <span>Test SME Seasonality Simulator</span>
            </a>

            <button
              onClick={() => setDemoModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-transparent hover:bg-[#0A1329] border border-[#172B57] text-slate-400 hover:text-slate-200 font-medium text-sm transition"
            >
              <span>Request Enterprise Briefing</span>
            </button>
          </div>

          {/* Trust & Compliance Ticker */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#00D084]" />
              Zero-Leakage Multi-Tenant Isolation
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-[#00D084]" />
              Automated PII De-Identification
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00D084]" />
              AAOIFI-Certified Islamic Core
            </span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              ISO 27001 & SOC 2 Type II
            </span>
          </div>
        </div>

        {/* Live Visual Architecture Snapshot */}
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl bg-[#0A1329]/90 border border-[#172B57] shadow-2xl p-4 sm:p-6 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between pb-4 border-b border-[#142347] gap-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-[#00D084]" />
              <span className="text-xs font-mono text-slate-400 ml-2">
                azentio.ai :: live-cross-tenant-mesh
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="px-2 py-0.5 rounded bg-[#00D084]/15 text-[#00D084] font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D084] animate-pulse" />
                Cluster Engine: ACTIVE
              </span>
              <span className="text-slate-400 font-mono">
                Model: BFSI-FinBERT-v2 + LLM Extractor
              </span>
            </div>
          </div>

          {/* Interactive Flow Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 text-left">
            {/* Step 1: Ingestion */}
            <div className="p-4 rounded-xl bg-[#060D1E] border border-[#142347] hover:border-[#00D084]/40 transition">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-mono text-[#00D084]">01. INGESTION</span>
                <Users className="w-4 h-4 text-[#00D084]" />
              </div>
              <h4 className="font-bold text-white text-sm">3 Fictional Banks</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Bank A, B, and C independently submit seasonal SME lending friction points inside private tenant vaults.
              </p>
              <div className="mt-3 flex gap-1">
                <span className="text-[10px] bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">Apex</span>
                <span className="text-[10px] bg-[#00D084]/20 text-[#00D084] px-1.5 py-0.5 rounded">Crescent</span>
                <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">Summit</span>
              </div>
            </div>

            {/* Step 2: NER Sanitizer */}
            <div className="p-4 rounded-xl bg-[#060D1E] border border-[#142347] hover:border-[#00D084]/40 transition">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-mono text-[#00D084]">02. NER SANITIZER</span>
                <Lock className="w-4 h-4 text-[#00D084]" />
              </div>
              <h4 className="font-bold text-white text-sm">PII Anonymization</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                LLM extracts key themes and redacts bank identifiers, geography, and customer account tokens automatically.
              </p>
              <div className="mt-3 text-[10px] font-mono text-[#00D084]">
                100% Zero PII Leakage
              </div>
            </div>

            {/* Step 3: Moderator */}
            <div className="p-4 rounded-xl bg-[#060D1E] border border-[#142347] hover:border-[#00D084]/40 transition">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-mono text-amber-400">03. MODERATOR</span>
                <Shield className="w-4 h-4 text-amber-400" />
              </div>
              <h4 className="font-bold text-white text-sm">Human in the Loop</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Compliance officer verifies de-identification, certifies domain relevance, and publishes to Collective Feed.
              </p>
              <div className="mt-3 text-[10px] font-mono text-amber-300">
                Compliance Certified
              </div>
            </div>

            {/* Step 4: Evolution */}
            <div className="p-4 rounded-xl bg-[#060D1E] border border-[#142347] hover:border-[#00D084]/40 transition">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span className="font-mono text-[#00D084]">04. EVOLUTION</span>
                <TrendingUp className="w-4 h-4 text-[#00D084]" />
              </div>
              <h4 className="font-bold text-white text-sm">Product Feature</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Cluster #702 converted directly into Azentio Kastle Seasonality Normalizer (v4.2), salvaging $36.5M in SME loans.
              </p>
              <div className="mt-3 text-[10px] font-mono text-[#00D084]">
                Feature #IMP-104 Active
              </div>
            </div>
          </div>

          {/* Quick Metrics Banner */}
          <div className="mt-6 pt-4 border-t border-[#142347] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">60+</div>
              <div className="text-xs text-slate-400">Global BFSI Deployments</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#00D084]">#1</div>
              <div className="text-xs text-slate-400">Islamic Banking Core (iMAL)</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#00D084]">94.6%</div>
              <div className="text-xs text-slate-400">AI Clustering Precision</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">$120B+</div>
              <div className="text-xs text-slate-400">Banking Assets Managed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
