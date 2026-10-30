import React from 'react';
import { usePortal } from '../../context/PortalContext';
import {
  Building2,
  Cpu,
  ShieldCheck,
  Search,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Lock
} from 'lucide-react';

export const CollectiveExplainer = () => {
  const { switchRole } = usePortal();

  const steps = [
    {
      num: '01',
      title: 'Client Submits Observation',
      role: 'Client (Bank A / B / C)',
      desc: 'Bank risk officers or product users report empirical market observations, product friction, or regulatory nuances inside their private tenant space.',
      icon: <Building2 className="w-5 h-5 text-blue-400" />,
      color: 'border-blue-500/30 bg-blue-500/5',
      actionRole: 'bank-a',
      badge: 'Tenant Isolated'
    },
    {
      num: '02',
      title: 'AI Anonymization & Clustering',
      role: 'System AI Engine',
      desc: 'LLMs detect sensitive PII/bank names, produce sanitized abstracts, extract semantic domain tags, and cluster multi-tenant trends.',
      icon: <Cpu className="w-5 h-5 text-[#00D084]" />,
      color: 'border-[#00D084]/30 bg-[#00D084]/5',
      actionRole: 'employee',
      badge: 'Automated NER'
    },
    {
      num: '03',
      title: 'Moderator Review & Redaction',
      role: 'Compliance Officer',
      desc: 'Human-in-the-loop moderator verifies privacy safeguards, approves or modifies redactions, and certifies submission for collective sharing.',
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
      color: 'border-amber-500/30 bg-amber-500/5',
      actionRole: 'moderator',
      badge: 'Human-in-the-Loop'
    },
    {
      num: '04',
      title: 'Collective Knowledge Feed',
      role: 'Authorized BFSI Community',
      desc: 'Approved, de-identified insights become searchable across client organizations, fostering cross-institutional intelligence and upvoting.',
      icon: <Search className="w-5 h-5 text-[#00D084]" />,
      color: 'border-[#00D084]/30 bg-[#00D084]/5',
      actionRole: 'bank-b',
      badge: 'Searchable Vault'
    },
    {
      num: '05',
      title: 'Product Owner Converts to Feature',
      role: 'Azentio Product Core',
      desc: 'Product owners promote high-convergence clusters directly into Azentio engineering roadmaps, allocating development sprints.',
      icon: <Lightbulb className="w-5 h-5 text-purple-400" />,
      color: 'border-purple-500/30 bg-purple-500/5',
      actionRole: 'product-owner',
      badge: 'Roadmap Ticket'
    },
    {
      num: '06',
      title: 'Continuous Lifecycle Tracking',
      role: 'All Participating Clients',
      desc: 'Clients track progress from Proposed → Under Review → Planned → In Progress → Released in next software maintenance drop.',
      icon: <CheckCircle2 className="w-5 h-5 text-teal-400" />,
      color: 'border-teal-500/30 bg-teal-500/5',
      actionRole: 'admin',
      badge: 'Full Traceability'
    }
  ];

  return (
    <section id="collective-intelligence" className="py-20 bg-[#040814] relative border-t border-[#142347]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D084]/10 text-[#00D084] text-xs font-semibold border border-[#00D084]/30">
            <Sparkles className="w-3.5 h-3.5" />
            Core Innovation Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How Collective AI Learning Works
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The winning feature: transforming disconnected banking feedback from multiple financial institutions into verified, privacy-safe core product evolution.
          </p>
        </div>

        {/* 6 Step Interactive Architecture Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`p-6 rounded-2xl border ${step.color} bg-[#0A1329]/80 backdrop-blur-md flex flex-col justify-between hover:border-[#00D084]/50 transition group`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#142347]">
                  <span className="font-mono text-xs font-bold text-slate-400">
                    STAGE {step.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#060D1E] text-[#00D084] border border-[#142347]">
                    {step.badge}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#060D1E] border border-[#142347] group-hover:scale-110 transition">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">
                      {step.title}
                    </h3>
                    <span className="text-[11px] text-[#00D084] font-medium">
                      {step.role}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#142347] flex justify-between items-center text-xs">
                <span className="text-[11px] text-slate-500">Live in Prototype</span>
                <button
                  onClick={() => switchRole(step.actionRole)}
                  className="text-[#00D084] hover:text-[#05DF72] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition"
                >
                  Jump to Persona <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scenario Banner from Requirements */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0A1329] via-[#070E22] to-[#0A1329] border border-[#00D084]/40 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D084]">
                <Lock className="w-3.5 h-3.5 text-[#00D084]" />
                Empirical Evaluation Scenario (Cluster #702)
              </div>
              <h4 className="text-lg font-bold text-white">
                Bank A + Bank B + Bank C: Seasonality Dilemma Convergence
              </h4>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                Bank A reported monsoon dips, Bank B reported Murabaha harvest lags, and Bank C reported holiday stock-ups. The AI engine detected cross-tenant convergence at <strong>94.6%</strong>, prompting Dr. Tariq Siddiqui to create <strong>Feature #IMP-104 (Seasonality-Aware Normalizer)</strong>.
              </p>
            </div>

            <button
              onClick={() => switchRole('bank-a')}
              className="px-6 py-3 rounded-xl bg-[#00D084] hover:bg-[#05DF72] text-[#040814] font-extrabold text-xs shadow-lg transition shrink-0"
            >
              Trace Complete Flow in Portal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
