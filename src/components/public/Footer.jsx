import React from 'react';
import { usePortal } from '../../context/PortalContext';
import { AzentioLogo } from '../common/AzentioLogo';
import { Shield, Lock, Award, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const { navigateTo, setDemoModalOpen, switchRole } = usePortal();

  return (
    <footer className="bg-[#03060E] text-slate-400 text-xs border-t border-[#142347]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Brand & Exact Logo */}
          <div className="space-y-3">
            <AzentioLogo variant="dark" showAi={true} />
            <p className="text-[11px] text-[#2EE59D] font-medium italic">
              "Purpose-built to shape tomorrow"
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Azentio Software delivers mission-critical software products across Asia Pacific, Middle East, Africa, and South Asia for banking, financial services, and insurance.
            </p>
            <div className="text-[10px] text-slate-500">
              Singapore • Dubai • Riyadh • Mumbai • London • Kuala Lumpur
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">BFSI Solutions</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li><a href="#products" className="hover:text-[#2EE59D] transition">Azentio Kastle (Core Banking & SME Lending)</a></li>
              <li><a href="#products" className="hover:text-[#2EE59D] transition">Azentio iMAL (World #1 Islamic Banking Core)</a></li>
              <li><a href="#products" className="hover:text-[#2EE59D] transition">Azentio Amlgo Labs (AML & Sanctions)</a></li>
              <li><a href="#products" className="hover:text-[#2EE59D] transition">Azentio Beyon360 (Insurance Core)</a></li>
              <li><a href="#collective-intelligence" className="hover:text-[#2EE59D] transition">Azentio AI Collective (Shared Intelligence)</a></li>
            </ul>
          </div>

          {/* Col 3: Portal & Evaluation */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Evaluation Personas</h4>
            <ul className="space-y-1.5 text-[11px]">
              <li><button onClick={() => switchRole('bank-a')} className="hover:text-blue-400 text-left transition">Apex Global Bank (Client A)</button></li>
              <li><button onClick={() => switchRole('bank-b')} className="hover:text-[#2EE59D] text-left transition">Crescent Islamic Bank (Client B)</button></li>
              <li><button onClick={() => switchRole('moderator')} className="hover:text-amber-400 text-left transition">Compliance Moderator (Elena Rostova)</button></li>
              <li><button onClick={() => switchRole('product-owner')} className="hover:text-teal-400 text-left transition">Product Owner (Roadmap Lead)</button></li>
              <li><button onClick={() => switchRole('admin')} className="hover:text-rose-400 text-left transition">System Admin & SecOps</button></li>
            </ul>
          </div>

          {/* Col 4: Hackathon Grand Finale */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Build Labs Grand Finale</h4>
            <div className="p-3 rounded-xl bg-[#070D1E] border border-[#172B57] space-y-2 text-[11px]">
              <div className="text-white font-semibold">Special Challenge Evaluation</div>
              <div className="text-[#2EE59D] font-bold">+10 Brownie Points Ready</div>
              <div className="text-slate-400">Team: Akshayaa S & Team</div>
              <a
                href="https://www.azentio.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[#2EE59D] hover:underline pt-1 font-semibold"
              >
                azentio.com official <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#142347] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; 2026 Azentio Software Private Limited. Built for Azentio.ai Build Labs 2026 Grand Finale.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-[#2EE59D]" />
              ISO 27001
            </span>
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-blue-500" />
              SOC2 Type II
            </span>
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              AAOIFI Certified
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
