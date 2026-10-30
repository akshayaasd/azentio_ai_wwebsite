import React, { useState } from 'react';
import { PRODUCTS_CATALOG } from '../../data/mockData';
import { usePortal } from '../../context/PortalContext';
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Cpu,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

export const ProductsShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS_CATALOG[0]);
  const { setDemoModalOpen, switchRole } = usePortal();

  return (
    <section id="products" className="py-20 bg-[#040814] relative border-t border-b border-[#142347]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D084]/10 text-[#00D084] text-xs font-semibold border border-[#00D084]/30">
            <Layers className="w-3.5 h-3.5" />
            Purpose-Built BFSI Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive BFSI Software Portfolio
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Mission-critical platforms trusted by premier financial institutions across Asia Pacific, Middle East, Africa, and South Asia.
          </p>
        </div>

        {/* Product Selection Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {PRODUCTS_CATALOG.map((prod) => (
            <button
              key={prod.id}
              onClick={() => setSelectedProduct(prod)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 border ${
                selectedProduct.id === prod.id
                  ? 'bg-[#00D084] text-[#040814] border-[#00D084] shadow-lg shadow-[#00D084]/25 scale-105'
                  : 'bg-[#070D1E] text-slate-300 border-[#172B57] hover:bg-[#0D1836] hover:text-white'
              }`}
            >
              <span>{prod.name}</span>
              {prod.highlightBadge && (
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded font-mono uppercase ${
                    selectedProduct.id === prod.id
                      ? 'bg-black/20 text-[#040814]'
                      : 'bg-[#00D084]/15 text-[#00D084]'
                  }`}
                >
                  {prod.highlightBadge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Selected Product Deep Dive Card */}
        <div className="mt-10 max-w-5xl mx-auto rounded-2xl bg-[#0A1329]/95 border border-[#172B57] p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
          {/* Subtle gradient corner */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00D084]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#00D084] bg-[#00D084]/10 px-2.5 py-1 rounded border border-[#00D084]/30 font-semibold">
                  {selectedProduct.category}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  ISO & Regulatory Compliant
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProduct.name}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedProduct.tagline}
              </p>

              {/* Key capabilities */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                  Core Enterprise Capabilities
                </h4>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  {selectedProduct.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#00D084] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => switchRole('bank-a')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#00D084] hover:bg-[#05DF72] text-[#040814] font-extrabold text-xs shadow-md shadow-[#00D084]/20 transition"
                >
                  <span>Explore In Portal Sandbox</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setDemoModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#060D1E] hover:bg-[#0F1D3D] border border-[#172B57] text-slate-200 text-xs font-medium transition"
                >
                  <span>Request Full Specification Sheet</span>
                </button>
              </div>
            </div>

            {/* Right Col: Production Benchmarks Box */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-xl bg-[#060D1E] border border-[#142347] space-y-4 shadow-inner">
                <div className="flex justify-between items-center pb-3 border-b border-[#142347]">
                  <span className="text-xs font-semibold text-white">Production Benchmarks</span>
                  <span className="text-[10px] font-mono text-[#00D084] bg-[#00D084]/15 px-2 py-0.5 rounded border border-[#00D084]/30 font-semibold">
                    Live Telemetry
                  </span>
                </div>

                <div className="space-y-3">
                  {Object.entries(selectedProduct.metrics).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}
                      </span>
                      <span className="font-bold text-white font-mono bg-[#0A1329] px-2 py-0.5 rounded border border-[#172B57]">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* AI Collective Integration Badge */}
                <div className="pt-3 border-t border-[#142347]">
                  <div className="p-3 rounded-lg bg-[#0A1329] border border-[#00D084]/30 text-xs space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[#00D084] font-semibold">
                      <Sparkles className="w-3.5 h-3.5 text-[#00D084]" />
                      Connected to AI Collective
                    </div>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      Continuously absorbs cross-tenant observations, auto-adapting underwriting models and compliance checks across all connected institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
