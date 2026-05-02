"use client";

import React from 'react';
import { Rocket, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import onboardingData from '@/data/onboarding.json';

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-[#080808] pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-premium-brown/20 bg-premium-brown/5 px-6 py-2">
           <Rocket size={14} className="text-premium-brown" />
           <span className="text-xs font-black uppercase tracking-widest text-premium-tan">Deployment Roadmap</span>
        </div>
        <h1 className="mb-10 pb-10 bg-gradient-to-br from-white via-premium-cream to-premium-brown bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-8xl">
          Onboarding <span className="text-premium-brown">Process</span>
        </h1>

        <div className="relative mx-auto max-w-4xl space-y-12">
          {/* Timeline Line */}
          <div className="absolute left-[31px] top-0 h-full w-px bg-linear-to-b from-premium-brown/40 via-premium-brown/10 to-transparent md:left-1/2" />

          {onboardingData.map((item, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-center gap-12 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
               {/* Step Circle */}
               <div className="absolute left-0 z-10 flex h-16 w-16 items-center justify-center rounded-full border border-premium-brown/30 bg-[#0a0a0a] text-xl font-black text-premium-brown shadow-[0_0_30px_rgba(180,140,100,0.2)] md:left-1/2 md:-translate-x-1/2">
                  {item.step}
               </div>

               <div className={`w-full pl-24 md:w-1/2 ${i % 2 === 1 ? 'md:pl-20 md:pr-0' : 'md:pr-20 md:pl-0'}`}>
                  <div className="rounded-[40px] border border-white/5 bg-[#0a0a0a] p-10 text-left transition-all hover:border-premium-brown/20 hover:bg-[#0c0c0c]">
                     <div className="mb-4 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-premium-brown/60">{item.status}</span>
                        <div className="flex items-center gap-2 text-premium-tan/30">
                           <Clock size={12} />
                           <span className="text-[10px] font-black uppercase tracking-widest">{item.duration}</span>
                        </div>
                     </div>
                     <h3 className="mb-4 text-2xl font-black text-premium-cream">{item.title}</h3>
                     <p className="text-sm leading-relaxed text-premium-tan/40">
                        {item.description}
                     </p>
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-32 rounded-[48px] border border-white/5 bg-linear-to-br from-premium-brown/5 to-transparent p-16">
           <h2 className="mb-6 text-3xl font-black text-premium-cream">Ready to Modernize?</h2>
           <p className="mb-10 text-lg text-premium-tan/40">Our deployment team is standing by to initiate your institutional audit.</p>
           <button className="group inline-flex items-center gap-4 rounded-full bg-premium-brown px-10 py-4 text-xs font-black uppercase tracking-widest text-white transition-all hover:scale-105">
              Start Your Audit
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
           </button>
        </div>
      </div>
    </main>
  );
}
