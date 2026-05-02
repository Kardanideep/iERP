"use client";

import React from 'react';
import { Settings, Cloud, Cpu, RefreshCw, Shield, ArrowRight } from 'lucide-react';
import howItWorksData from '@/data/how-it-works.json';
import { useReveal } from '@/app/hooks/useReveal';

const iconMap = {
  Cloud,
  Cpu,
  RefreshCw,
  Shield
};

const RevealItem = ({ children, index }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal-ready" style={{ transitionDelay: `${index * 100}ms` }}>
      {children}
    </div>
  );
};

export default function HowItWorksPage() {
  const lineRef = useReveal();
  const [activeStep, setActiveStep] = React.useState(0);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const step = parseInt(entry.target.getAttribute('data-step'));
          setActiveStep(step);
        }
      });
    }, { threshold: 0.5, rootMargin: "-100px 0px -200px 0px" });

    document.querySelectorAll('[data-step]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-premium-brown/20 bg-premium-brown/5 px-6 py-2">
           <Settings size={14} className="text-premium-brown" />
           <span className="text-xs font-black uppercase tracking-widest text-premium-tan">System Architecture</span>
        </div>
        <h1 className="mb-20 bg-gradient-to-br from-white via-premium-cream to-premium-brown bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-8xl">
          How It <span className="text-premium-brown">Works</span>
        </h1>

        <div className="relative mx-auto max-w-4xl space-y-24">
          {/* Technical Connector Line - Scroll Growth */}
          <div 
            ref={lineRef}
            className="absolute left-10 top-12 bottom-12 w-px bg-linear-to-b from-premium-brown/40 via-premium-brown/10 to-transparent origin-top scale-y-0 transition-transform duration-[3000ms] ease-out [&.visible]:scale-y-100" 
          />

          {howItWorksData.map((item, i) => {
            const Icon = iconMap[item.icon] || Settings;
            const isActive = activeStep === i;

            return (
              <RevealItem key={item.id} index={i}>
                <div 
                  data-step={i}
                  className={`group relative flex flex-col md:flex-row gap-6 md:gap-12 text-left transition-all duration-700 ${isActive ? 'opacity-100 translate-x-0 md:translate-x-2' : 'opacity-100 md:opacity-30 translate-x-0'}`}
                >
                   {/* Technical Icon Node */}
                   <div className={`relative z-10 flex h-16 w-16 md:h-20 md:w-20 shrink-0 items-center justify-center rounded-2xl md:rounded-3xl border transition-all duration-700 ${isActive ? 'border-premium-brown bg-premium-brown text-white shadow-[0_0_50px_rgba(180,140,100,0.4)] scale-110' : 'border-premium-brown bg-[#080808] text-premium-brown md:border-premium-brown/30'}`}>
                      <Icon className="h-6 w-6 md:h-8 md:w-8" />
                      {isActive && (
                        <div className="absolute inset-0 rounded-2xl md:rounded-3xl animate-ping bg-premium-brown/20" />
                      )}
                   </div>

                   <div className="flex-1 space-y-4 md:space-y-6 pt-2">
                      <div className="flex items-center justify-between">
                         <h3 className={`text-2xl md:text-3xl font-black tracking-tight transition-all duration-700 ${isActive ? 'text-premium-cream md:scale-105 origin-left' : 'text-premium-cream md:text-premium-tan/40'}`}>
                           {item.title}
                         </h3>
                         <span className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors duration-700 ${isActive ? 'text-premium-brown' : 'text-premium-brown md:text-premium-brown/20'}`}>Step 0{i + 1}</span>
                      </div>
                      
                      <p className={`text-lg md:text-xl font-light leading-relaxed transition-all duration-700 ${isActive ? 'text-premium-tan/80' : 'text-premium-tan/80 md:text-premium-tan/20'}`}>
                         {item.description}
                      </p>

                      <div className={`rounded-2xl md:rounded-[32px] border p-6 md:p-8 space-y-4 transition-all duration-700 ${isActive ? 'border-premium-brown/30 bg-premium-brown/5' : 'border-premium-brown/30 bg-premium-brown/5 md:border-white/5 md:bg-white/[0.02]'}`}>
                         <p className={`text-[10px] font-black uppercase tracking-widest transition-colors ${isActive ? 'text-premium-brown' : 'text-premium-brown md:text-premium-brown/20'}`}>Technical Orchestration</p>
                         <p className={`text-sm leading-relaxed transition-colors ${isActive ? 'text-premium-tan/40' : 'text-premium-tan/40 md:text-premium-tan/10'}`}>
                            {item.detailedBreakdown}
                         </p>
                         <div className={`inline-block rounded-full px-4 py-1.5 text-[9px] font-black uppercase tracking-widest border transition-all ${isActive ? 'bg-premium-brown text-white border-premium-brown shadow-lg' : 'bg-premium-brown/20 text-premium-brown border-premium-brown/30 md:bg-premium-brown/5 md:text-premium-brown/40 md:border-premium-brown/10'}`}>
                            {item.technicalDetail}
                         </div>
                      </div>
                   </div>
                </div>
              </RevealItem>
            );
          })}
        </div>




        {/* Cinematic Flow Diagram Placeholder */}
        <div className="mt-32 h-[500px] w-full overflow-hidden rounded-[48px] border border-white/5 bg-[#0a0a0a] relative">
           <div className="absolute inset-0 bg-[radial-gradient(#80808015_1px,transparent_1px)] bg-[size:40px_40px]" />
           <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-premium-brown/30 bg-premium-brown/10 text-premium-brown animate-pulse">
                 <Cpu size={48} />
              </div>
              <h2 className="mb-4 text-center text-xl md:text-3xl font-black text-premium-cream uppercase tracking-tight px-4">Institutional Heuristics Engine</h2>
              <p className="text-center text-sm md:text-base text-premium-tan/40 px-4">The heartbeat of iERP's predictive architecture.</p>
           </div>
        </div>
      </div>
    </main>
  );
}
