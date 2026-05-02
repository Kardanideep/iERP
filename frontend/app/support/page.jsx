"use client";

import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  MessageSquare, 
  LifeBuoy, 
  FileText, 
  Users, 
  ArrowRight,
  Activity,
  CheckCircle2,
  Clock,
  Zap,
  Globe,
  Settings
} from 'lucide-react';
import Link from 'next/link';
import supportData from '@/data/support.json';

const iconMap = {
  MessageSquare,
  Globe,
  Settings
};

const SupportHero = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const newNodes = [...Array(8)].map((_, i) => ({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      delay: `${i * 1.2}s`
    }));
    setNodes(newNodes);
  }, []);

  return (
    <section className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden bg-[#080808] px-5 pt-32 pb-20 text-center">
      {/* Background Cinematic Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#80808015_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] animate-grid-flow" />
        
        {/* Floating Data Nodes */}
        {nodes.map((node, i) => (
          <div 
            key={i} 
            className="absolute h-1 w-1 rounded-full bg-premium-brown shadow-[0_0_15px_#B48C64] animate-float"
            style={{ top: node.top, left: node.left, animationDelay: node.delay }} 
          />
        ))}

        <div className="absolute top-1/2 left-0 h-px w-full bg-linear-to-r from-transparent via-premium-brown/30 to-transparent shadow-[0_0_40px_rgba(180,140,100,0.2)] animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-premium-brown/20 bg-premium-brown/5 px-6 py-2">
           <LifeBuoy size={14} className="text-premium-brown" />
           <span className="text-xs font-black uppercase tracking-widest text-premium-tan">Institutional Support Center</span>
        </div>
        <h1 className="mb-6 bg-gradient-to-br from-white via-premium-cream to-premium-brown bg-clip-text text-6xl font-extrabold tracking-tight text-transparent md:text-9xl">
          Command <br /> <span className="text-premium-brown">Center</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-premium-tan/50">
          Dedicated technical guidance and operational resources for high-fidelity institutional management.
        </p>
      </div>
    </section>
  );
};

const SupportTier = ({ icon: Icon, title, description, features, link, linkText }) => (
  <div className="group relative flex flex-col rounded-[40px] border border-white/5 bg-[#0a0a0a] p-10 transition-all duration-500 hover:border-premium-brown/30 hover:bg-[#0c0c0c] hover:shadow-2xl">
     <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-premium-brown transition-all duration-500 group-hover:bg-premium-brown group-hover:text-white group-hover:scale-110">
        <Icon size={32} strokeWidth={1.5} />
     </div>
     <h3 className="mb-4 text-2xl font-black text-premium-cream">{title}</h3>
     <p className="mb-8 text-sm leading-relaxed text-premium-tan/40">{description}</p>
     
     <ul className="mb-10 space-y-4 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-xs font-medium text-premium-tan/60">
             <CheckCircle2 size={14} className="text-premium-brown/40" />
             {f}
          </li>
        ))}
     </ul>

     <Link 
       href={link}
       className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-[10px] font-black uppercase tracking-widest text-premium-tan transition-all group-hover:bg-premium-brown group-hover:text-white group-hover:border-premium-brown"
     >
        {linkText}
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
     </Link>
  </div>
);

const SystemStatus = () => (
  <section className="mx-auto max-w-7xl px-5 py-24">
     <div className="rounded-[48px] border border-white/5 bg-[#0a0a0a] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 h-64 w-64 bg-premium-brown/5 blur-[100px]" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
           <div className="space-y-4">
              <div className="flex items-center gap-3">
                 <Activity className="text-premium-brown animate-pulse" size={24} />
                 <h2 className="text-3xl font-black text-premium-cream">System Status</h2>
              </div>
              <p className="text-lg text-premium-tan/40">Real-time operational health of the iERP global infrastructure.</p>
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {supportData.systemStatus.map((sys, i) => (
                <div key={i} className="rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center">
                   <p className="text-[10px] font-black uppercase tracking-widest text-premium-tan/30 mb-2">{sys.label}</p>
                   <div className="flex items-center justify-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: sys.color, boxShadow: `0 0 10px ${sys.color}` }} />
                      <span className="text-xs font-bold text-premium-cream">{sys.status}</span>
                   </div>
                </div>
              ))}
           </div>
        </div>
     </div>
  </section>
);

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <SupportHero />
      
      <section className="mx-auto max-w-7xl px-5 py-24">
         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {supportData.tiers.map((tier) => (
              <SupportTier 
                key={tier.id}
                {...tier}
                icon={iconMap[tier.icon] || LifeBuoy}
              />
            ))}
         </div>
      </section>

      <SystemStatus />

      {/* SLA Commitment */}
      <section className="w-full bg-[#0a0a0a] px-5 py-24 text-center border-t border-white/5">
         <div className="mx-auto max-w-3xl">
            <Shield className="mx-auto mb-8 text-premium-brown" size={48} />
            <h2 className="mb-6 text-4xl font-black text-premium-cream uppercase tracking-tight">Institutional SLA</h2>
            <p className="mb-12 text-xl leading-relaxed text-premium-tan/40">
              {supportData.sla.commitment}
            </p>
            <div className="flex flex-wrap justify-center gap-6">
               <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-4">
                  <Clock size={20} className="text-premium-brown" />
                  <span className="text-sm font-black uppercase tracking-widest text-premium-cream">{supportData.sla.uptime} Uptime</span>
               </div>
               <div className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-4">
                  <Shield size={20} className="text-premium-brown" />
                  <span className="text-sm font-black uppercase tracking-widest text-premium-cream">{supportData.sla.responseTime} Response</span>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}

