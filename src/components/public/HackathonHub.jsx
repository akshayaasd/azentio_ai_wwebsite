import React from 'react';
import { usePortal } from '../../context/PortalContext';
import {
  Award,
  MapPin,
  Clock,
  Calendar,
  ExternalLink,
  Users,
  CheckCircle2,
  FileCheck,
  Linkedin,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const HackathonHub = () => {
  const { switchRole } = usePortal();

  return (
    <section id="hackathon-hub" className="py-20 bg-[#070D1E] relative border-t border-azentio-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/30">
            <Award className="w-3.5 h-3.5" />
            HackCulture & Azentio Official Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Azentio.ai Build Labs Grand Finale Hub
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            All essential event details, 10 Brownie Points submission guidelines, and venue coordination for our finalist team.
          </p>
        </div>

        {/* Hackathon Key Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Event Schedule & Venue */}
          <div className="p-6 rounded-2xl bg-azentio-900/80 border border-azentio-800 p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-azentio-800">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                Event Schedule
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                GRAND FINALE
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Date & Reporting Time</div>
                  <div className="text-slate-400">31 October 2026, 8:00 AM IST</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Grand Finale Venue</div>
                  <div className="text-slate-400">Azentio Office, Kadubeesanahalli, Bengaluru</div>
                  <a
                    href="https://maps.app.goo.gl/F1RGnjx62CEhzCe9A"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1 mt-1 font-semibold"
                  >
                    Open Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FileCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white">Security & Check-in Form</div>
                  <div className="text-slate-400">Required prior to building entry</div>
                  <a
                    href="https://forms.gle/UaK6YAieqttQn6ZY7"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:underline flex items-center gap-1 mt-1 font-semibold"
                  >
                    Submit Check-in Form <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: 10 Brownie Points Special Challenge */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-azentio-900/90 to-azentio-950 border-2 border-emerald-500/50 p-6 space-y-4 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-black font-extrabold text-[10px] px-3 py-1 rounded-bl-xl uppercase tracking-wider">
              +10 Points Extra
            </div>

            <div className="flex items-center gap-2 pb-3 border-b border-azentio-800">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-bold text-white">Special Challenge Mandate</span>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <h4 className="font-bold text-white text-sm">
                Azentio.ai Website & Intelligent Collaboration Portal
              </h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Build the dual public website and multi-tenant portal fulfilling all 6 steps of collective learning: Client &rarr; AI Sanitizer &rarr; Moderator &rarr; Feed &rarr; Roadmap.
              </p>

              <div className="space-y-1.5 pt-2 text-[11px]">
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Dual Public Website & Auth Portal</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Strict Tenant Isolation (Bank A vs B vs C)</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>AI Observation Clustering & De-identification</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Human-in-the-Loop Moderation Workbench</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Live Product Improvement Roadmap Tracker</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Finalist Team & LinkedIn Recognition */}
          <div className="p-6 rounded-2xl bg-azentio-900/80 border border-azentio-800 p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-azentio-800">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                Team & Showcase
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                FINALIST TEAM
              </span>
            </div>

            <div className="space-y-3 text-xs text-slate-300">
              <div>
                <div className="font-bold text-white">Lead Finalist</div>
                <div className="text-cyan-400 font-semibold">Akshayaa S & Team</div>
                <div className="text-slate-400 text-[11px] mt-0.5">Full team collaboration verified</div>
              </div>

              <div className="p-3 rounded-xl bg-azentio-950 border border-azentio-800 space-y-2">
                <div className="font-bold text-white text-[11px] flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                  Official Social Verification
                </div>
                <p className="text-[11px] text-slate-400">
                  Finalist post announced with official tags:
                </p>
                <div className="flex flex-wrap gap-2 text-[10px]">
                  <a
                    href="https://www.linkedin.com/showcase/azentio-ai/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    @Azentio.ai <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/hackculture/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    @HackCulture <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              </div>

              <button
                onClick={() => switchRole('bank-a')}
                className="w-full mt-2 py-2 rounded-lg bg-azentio-800 hover:bg-azentio-700 border border-azentio-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <span>Launch Portal For Judges</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
