"use client";

import React from 'react';
import pricingData from '@/data/pricing.json';
import siteConfig from '@/data/siteConfig.json';
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  CreditCard,
  Target,
  Globe2,
  Lock,
  Users2,
  GraduationCap,
  Layout
} from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';
import Link from 'next/link';

/* ── Reusable Components ── */
const SectionHeading = ({ title, subtitle, centered = true }) => (
  <div className={`mb-20 flex flex-col gap-6 ${centered ? 'items-center text-center' : 'items-start text-left'}`}>
    <h2 className="text-4xl font-extrabold text-premium-cream md:text-6xl leading-tight">
      {title}
    </h2>
    {subtitle && <p className="max-w-2xl text-xl text-premium-tan/80">{subtitle}</p>}
  </div>
);

const PricingHero = ({ isAnnual, setIsAnnual }) => (
  <section className="relative flex min-h-[70vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0c0c0c] px-5 pt-32 pb-20 text-center text-premium-cream">
    {/* Unique Pricing Background: Concentric Rings */}
    <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
       <div className="absolute h-[300px] w-[300px] rounded-full border border-premium-brown/20 animate-pulse-slow" />
       <div className="absolute h-[600px] w-[600px] rounded-full border border-premium-brown/10 animate-drift-slow" />
       <div className="absolute h-[900px] w-[900px] rounded-full border border-premium-brown/5" />
       <div className="absolute top-0 h-full w-full bg-linear-to-b from-transparent via-transparent to-[#0c0c0c]" />
    </div>

    <div className="relative z-10 mx-auto max-w-5xl">
      <div className="mb-8 flex justify-center">
        <div className="relative flex items-center gap-1 rounded-2xl border border-white/10 bg-white/5 p-1.5 backdrop-blur-md">
          <button 
            onClick={() => setIsAnnual(false)}
            className={`relative z-10 rounded-xl px-6 py-2 text-sm font-black uppercase tracking-widest transition-all duration-300 ${!isAnnual ? 'text-white' : 'text-premium-tan/40 hover:text-premium-tan'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsAnnual(true)}
            className={`relative z-10 rounded-xl px-6 py-2 text-sm font-black uppercase tracking-widest transition-all duration-300 ${isAnnual ? 'text-white' : 'text-premium-tan/40 hover:text-premium-tan'}`}
          >
            Annual
          </button>
          {/* Animated Background Slider */}
          <div className={`absolute h-[calc(100%-12px)] w-[calc(50%-6px)] rounded-xl bg-premium-brown shadow-lg transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isAnnual ? 'translate-x-[calc(100%)]' : 'translate-x-0'}`} />
        </div>
      </div>
      <h1 className="mb-6 text-5xl font-black tracking-tight text-premium-cream md:text-8xl">
        Scale with <br />
        <span className="text-gradient">Certainty.</span>
      </h1>
      <p className="mx-auto max-w-xl text-xl text-premium-tan/60">
        Flexible licensing models designed to evolve alongside your institutional ambitions.
      </p>
    </div>
  </section>
);

const PricingPlans = ({ isAnnual }) => {
  const ref = useReveal();
  return (
    <section ref={ref} className="w-full bg-[#0c0c0c] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          {pricingData.plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`group relative flex flex-col rounded-[40px] border bg-[#050505] p-10 transition-all duration-500 hover:-translate-y-2 ${
                plan.popular 
                ? 'border-premium-brown/40 shadow-[0_0_50px_rgba(180,140,100,0.15)]' 
                : 'border-white/5 shadow-2xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-8 right-10 rounded-full bg-premium-brown/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-premium-brown border border-premium-brown/20">
                  Most Popular
                </div>
              )}

              {/* Title & Price Section */}
              <div className="mb-10">
                <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${plan.popular ? 'bg-gradient-to-br from-premium-brown to-premium-burgundy text-white' : 'bg-[#0c0c0c] text-premium-tan'}`}>
                   {idx === 0 ? <Target size={28} /> : idx === 1 ? <Zap size={28} /> : <Globe2 size={28} />}
                </div>
                
                <h3 className="text-3xl font-black text-premium-cream tracking-tight mb-2">{plan.name}</h3>
                
                {isAnnual && plan.saveAmount && (
                  <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-[#22c55e]/10 px-3 py-1 border border-[#22c55e]/20">
                    <Sparkles size={12} className="text-[#22c55e]" />
                    <span className="text-xs font-black uppercase tracking-widest text-[#22c55e]">
                      {plan.saveAmount}
                    </span>
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black text-premium-cream transition-all duration-300">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-premium-tan/30">{plan.period}</span>
                </div>
                {isAnnual && plan.annualPrice !== "Custom" && (
                  <p className="mt-1 text-[10px] font-black uppercase text-premium-brown">Billed annually</p>
                )}
                <p className="mt-4 text-sm text-premium-tan/60 leading-relaxed max-w-[280px]">{plan.desc}</p>
              </div>

              {/* Inset Glass Panel for Features */}
              <div className="relative flex-grow rounded-3xl bg-white/[0.03] p-8 border border-white/5 shadow-inner mb-10 group-hover:bg-white/[0.05] transition-colors">
                <div className="space-y-6">
                  {plan.features.map((feature, fIdx) => {
                    const featureIcons = [Users2, GraduationCap, Layout, Globe2, Target, ShieldCheck];
                    const FeatureIcon = featureIcons[fIdx] || CheckCircle2;
                    return (
                      <div key={fIdx} className="flex items-center gap-4">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-premium-brown/10 text-premium-brown">
                          <FeatureIcon size={12} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium text-premium-tan/80">{feature}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-6 border-t border-white/5">
                   <h4 className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-premium-brown/60">Technical Foundation</h4>
                   <div className="grid grid-cols-1 gap-3">
                      {plan.technicalDetails.map((detail, dIdx) => (
                        <div key={dIdx} className="rounded-xl bg-black/40 px-4 py-3 text-sm font-bold text-premium-tan/80 border border-white/5 shadow-sm group-hover:border-premium-brown/20 transition-all">
                          <span className="text-premium-cream block mb-1">{detail.split(':')[0]}</span>
                          <span className="text-[11px] font-medium text-premium-tan/40 leading-tight block">{detail.split(':')[1]}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              <Link 
                href="/#demo-form"
                className={`flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-sm font-black uppercase tracking-widest transition-all ${
                  plan.popular 
                  ? 'bg-premium-brown text-white hover:bg-white hover:text-premium-brown shadow-xl' 
                  : 'bg-white/5 text-premium-cream hover:bg-white/10 border border-white/5'
                }`}
              >
                {plan.cta}
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="w-full bg-[#0c0c0c] px-5 py-24 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-3">
          {[
            { title: "No Hidden Costs", desc: "Our implementation fees are transparent and include full staff training.", icon: Lock },
            { title: "Scalable Growth", desc: "Seamlessly upgrade as your institution expands from 100 to 100,000 students.", icon: Zap },
            { title: "Enterprise Grade", desc: "State-of-the-art security and 99.9% uptime guaranteed for all plans.", icon: ShieldCheck }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-premium-brown/10 text-premium-brown">
                <item.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-premium-cream">{item.title}</h3>
              <p className="text-premium-tan/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = React.useState(true);
  
  return (
    <main className="min-h-screen bg-[#0c0c0c]">
      <PricingHero isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      <PricingPlans isAnnual={isAnnual} />
      <TrustSection />
      
      {/* Custom Quote CTA */}
      <section className="w-full bg-[#0a0a0a] px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl rounded-[40px] border border-premium-brown/20 bg-linear-to-br from-premium-brown/10 to-transparent p-12 md:p-20">
          <h2 className="mb-6 text-3xl font-bold text-premium-cream md:text-5xl">Need a Custom Solution?</h2>
          <p className="mb-10 text-xl text-premium-tan/80">We specialize in bespoke modules for complex university structures. Let's build exactly what you need.</p>
          <Link 
            href="/#demo-form"
            className="inline-flex items-center gap-2 md:gap-3 rounded-full bg-premium-brown px-6 py-4 md:px-10 md:py-5 text-sm md:text-xl font-bold text-white transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            Request Custom Proposal
            <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
          </Link>
        </div>
      </section>
    </main>
  );
}
