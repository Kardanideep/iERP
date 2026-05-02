"use client";

import React from 'react';
import contactData from '@/data/contact.json';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock, 
  Zap, 
  Shield, 
  Globe,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Users2
} from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';
import Link from 'next/link';

const iconMap = {
  'zap': Zap,
  'shield': Shield,
  'globe': Globe
};

const ContactHero = () => {
  const [nodes, setNodes] = React.useState([]);

  React.useEffect(() => {
    const newNodes = [...Array(8)].map((_, i) => ({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      delay: `${i * 1.2}s`
    }));
    setNodes(newNodes);
  }, []);

  return (
    <section className="relative flex min-h-[60vh] w-full flex-col items-center justify-center overflow-hidden bg-[#080808] px-5 pt-32 pb-20 text-center text-premium-cream">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#80808020_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] animate-grid-flow" />
        
        {/* Connection Lines (Visual) */}
        <div className="absolute top-1/2 left-0 h-px w-full bg-linear-to-r from-transparent via-premium-brown/30 to-transparent animate-pulse" />
        
        {nodes.map((node, i) => (
          <div 
            key={i} 
            className="absolute h-1 w-1 rounded-full bg-premium-brown shadow-[0_0_15px_#B48C64] animate-float"
            style={{ top: node.top, left: node.left, animationDelay: node.delay }} 
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-premium-brown/20 bg-premium-brown/5 px-6 py-2">
           <MessageSquare size={14} className="text-premium-brown" />
           <span className="text-xs font-black uppercase tracking-widest text-premium-tan">Global Communication Hub</span>
        </div>
        <h1 className="mb-6 bg-gradient-to-br from-white via-premium-cream to-premium-brown bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-8xl">
          {contactData.hero.title}
        </h1>
        <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-premium-tan/60">
          {contactData.hero.subtitle}
        </p>
      </div>
    </section>
  );
};

const ContactHub = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="w-full bg-[#050505] px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Left Side: Information & Branding */}
          <div className="flex-1 space-y-16">
            <div>
              <h2 className="text-6xl font-black text-premium-cream tracking-tight mb-6">Let's build <br /> <span className="text-gradient">the future.</span></h2>
              <p className="text-xl text-premium-tan/60 max-w-lg leading-relaxed">
                Whether you're scaling a single campus or a global university network, our experts are ready to architect your digital transformation.
              </p>
            </div>

            <div className="space-y-12">
               {contactData.contactMethods.map((method, idx) => {
                 const Icon = iconMap[method.icon] || Mail;
                 return (
                   <div key={idx} className="group flex items-start gap-8 transition-all duration-500">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-premium-brown transition-all duration-500 group-hover:bg-premium-brown group-hover:text-white">
                        <Icon size={24} strokeWidth={2} />
                      </div>
                      
                      <div className="flex-1 border-b border-white/5 pb-8 group-last:border-none">
                        <h4 className="text-xs font-black uppercase tracking-[0.5em] text-premium-brown mb-3">{method.title}</h4>
                        <div className="flex flex-col gap-2">
                          <p className="text-xl font-bold text-premium-cream transition-colors group-hover:text-premium-tan">{method.email}</p>
                          <p className="text-sm font-medium text-premium-tan/30 tracking-widest">{method.phone}</p>
                        </div>
                      </div>
                   </div>
                 );
               })}
            </div>
          </div>

          {/* Right Side: Floating Glass Form */}
          <div className="w-full lg:w-[520px] shrink-0">
            <div className="relative group">
              {/* Card Glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-premium-brown/20 to-premium-burgundy/20 rounded-[40px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative rounded-[40px] border border-white/10 bg-[#0a0a0a] p-12 shadow-2xl backdrop-blur-xl">
                <h3 className="text-3xl font-black text-premium-cream mb-2">Direct Inquiry</h3>
                <p className="text-sm text-premium-tan/40 mb-10 uppercase tracking-widest font-bold">Secure Transmission Portal</p>

                <form className="space-y-8">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-premium-brown/80 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Institutional Lead"
                      className="w-full rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-5 text-base text-premium-cream outline-none focus:border-premium-brown/40 transition-all placeholder:text-white/5"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-premium-brown/80 ml-1">Contact Email</label>
                    <input 
                      type="email" 
                      placeholder="name@university.edu"
                      className="w-full rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-5 text-base text-premium-cream outline-none focus:border-premium-brown/40 transition-all placeholder:text-white/5"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-premium-brown/80 ml-1">Objective</label>
                    <textarea 
                      rows={4}
                      placeholder="Briefly describe your institutional goals..."
                      className="w-full rounded-2xl border border-white/5 bg-white/[0.02] px-8 py-5 text-base text-premium-cream outline-none focus:border-premium-brown/40 transition-all placeholder:text-white/5 resize-none"
                    />
                  </div>

                  <button className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-premium-brown py-6 text-base font-black uppercase tracking-[0.2em] text-white transition-all hover:brightness-110 active:scale-95 shadow-2xl">
                     <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                     <span>Send Request</span>
                     <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <ContactHero />
      <ContactHub />

      {/* Quick Connect Footer: Tech-Grid UI */}
      <section className="relative w-full overflow-hidden bg-[#050505] px-5 py-32 text-center border-t border-white/5">
         {/* Background Tech Grid */}
         <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-premium-brown to-transparent animate-scan" />
         </div>

         <div className="relative z-10 mx-auto max-w-xl">
            <h2 className="mb-12 text-sm font-black text-premium-brown tracking-[0.8em] uppercase opacity-60">Sync with iERP</h2>
            <div className="flex justify-center gap-16">
               {[
                 { name: "LinkedIn", icon: Users2, url: "https://linkedin.com/company/ierp" },
                 { name: "Twitter", icon: Globe, url: "https://twitter.com/ierp_official" },
                 { name: "YouTube", icon: Zap, url: "https://youtube.com/ierp_channel" }
               ].map((social, idx) => (
                 <a 
                   key={idx} 
                   href={social.url} 
                   className="group relative flex flex-col items-center gap-4 text-premium-tan/30 transition-all hover:text-premium-brown"
                 >
                   <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-500 group-hover:bg-premium-brown group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(180,140,100,0.3)]">
                      <social.icon size={28} />
                   </div>
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-2">
                     {social.name}
                   </span>
                 </a>
               ))}
            </div>
         </div>
      </section>
    </main>
  );
}
