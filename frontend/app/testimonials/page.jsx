"use client";

import React from 'react';
import { Quote, Star } from 'lucide-react';
import platformData from '@/data/testimonials.json';

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#080808] pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-premium-brown/20 bg-premium-brown/5 px-6 py-2">
           <Star size={14} className="text-premium-brown" />
           <span className="text-xs font-black uppercase tracking-widest text-premium-tan">Institutional Impact</span>
        </div>
        <h1 className="mb-20 bg-gradient-to-br from-white via-premium-cream to-premium-brown bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-8xl">
          Partner <span className="text-premium-brown">Voices</span>
        </h1>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {platformData.map((test) => (
            <div key={test.id} className="group relative rounded-[48px] border border-white/5 bg-[#0a0a0a] p-16 transition-all duration-500 hover:border-premium-brown/30 hover:bg-[#0c0c0c]">
               <Quote size={64} className="absolute top-12 left-12 text-premium-brown/10" />
               <p className="relative z-10 mb-12 text-2xl font-light leading-relaxed text-premium-cream italic">
                 "{test.quote}"
               </p>
               <div className="flex items-center gap-6">
                  <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-premium-brown/30">
                     <img src={test.image} alt={test.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="text-left">
                     <h4 className="text-lg font-bold text-premium-cream">{test.name}</h4>
                     <p className="text-sm font-black uppercase tracking-widest text-premium-brown">{test.role}</p>
                     <p className="text-xs text-premium-tan/40">{test.institution}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
