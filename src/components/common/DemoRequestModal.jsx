import React, { useState } from 'react';
import { usePortal } from '../../context/PortalContext';
import { X, Building2, Mail, User, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const DemoRequestModal = () => {
  const { demoModalOpen, setDemoModalOpen, showToast } = usePortal();

  const [formData, setFormData] = useState({
    name: 'Sarah Jenkins',
    email: 's.jenkins@apexglobal.bank',
    institution: 'Apex Global Financial Group',
    role: 'Chief Technology Officer',
    assetSize: '$10B - $50B',
    selectedModules: ['Kastle Core Banking', 'AI Collective Intelligence', 'Amlgo Labs AML'],
    notes: 'Requesting demonstration of cross-tenant collective learning and seasonal SME lending normalizer.'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!demoModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Demo request registered! Azentio Enterprise Solutions team will provision a tailored sandbox.', 'success');
    setTimeout(() => {
      setSubmitted(false);
      setDemoModalOpen(false);
    }, 2800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl rounded-2xl bg-azentio-900 border border-azentio-700 shadow-2xl p-6 text-slate-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-azentio-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-azentio-500/20 text-azentio-400 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Request Azentio.ai Enterprise Demonstration</h3>
              <p className="text-xs text-slate-400">Tailored for Tier-1, Commercial & Islamic Financial Institutions</p>
            </div>
          </div>
          <button
            onClick={() => setDemoModalOpen(false)}
            className="p-1 rounded-lg hover:bg-azentio-800 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h4 className="text-xl font-bold text-white">Enterprise Sandbox Provisioned!</h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Your evaluation sandbox link and credential tokens for <strong>{formData.institution}</strong> have been scheduled. Welcome to the next generation of autonomous BFSI intelligence.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Executive Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white focus:border-cyan-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Institutional Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white focus:border-cyan-400 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-300 font-medium mb-1">Financial Institution</label>
                <input
                  type="text"
                  required
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white focus:border-cyan-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Asset Tier (AUM)</label>
                <select
                  value={formData.assetSize}
                  onChange={(e) => setFormData({ ...formData, assetSize: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white focus:border-cyan-400 outline-none"
                >
                  <option>$1B - $10B</option>
                  <option>$10B - $50B</option>
                  <option>$50B - $250B</option>
                  <option>$250B+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Target Solutions of Interest</label>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                {['Azentio Kastle (Lending Core)', 'Azentio iMAL (Islamic Banking)', 'Azentio Amlgo Labs (AML & Fraud)', 'Azentio AI Collective (Shared Intelligence)'].map(mod => (
                  <label key={mod} className="flex items-center gap-2 p-2 rounded bg-azentio-950/70 border border-azentio-800 text-slate-300 cursor-pointer hover:border-azentio-600">
                    <input
                      type="checkbox"
                      defaultChecked={formData.selectedModules.some(m => mod.includes(m.split(' ')[0]))}
                      className="rounded border-slate-700 text-cyan-500 focus:ring-0"
                    />
                    <span>{mod}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-1">Evaluation Scope & Objectives</label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-azentio-950 border border-azentio-700 text-white focus:border-cyan-400 outline-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                NDA Protected & ISO 27001 Certified
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-azentio-500 to-cyan-500 hover:from-azentio-600 hover:to-cyan-600 text-white font-bold transition shadow-lg"
              >
                Schedule Executive Demo
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
