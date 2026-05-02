"use client";

import React from 'react';
import { Layout, ArrowRight } from 'lucide-react';
import solutionsData from '@/data/solutions.json';

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#080808] pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-premium-brown/20 bg-premium-brown/5 px-6 py-2">
           <Layout size={14} className="text-premium-brown" />
           <span className="text-xs font-black uppercase tracking-widest text-premium-tan">Institutional Frameworks</span>
        </div>
        <h1 className="mb-20 bg-gradient-to-br from-white via-premium-cream to-premium-brown bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-8xl">
          Smarter <span className="text-premium-brown">Solutions</span>
        </h1>

        <div className="grid gap-12">
          {solutionsData.map((sol, i) => (
            <div key={sol.id} className={`flex flex-col lg:flex-row items-center gap-16 rounded-[60px] border border-white/5 bg-[#0a0a0a] p-12 lg:p-20 transition-all hover:border-premium-brown/10 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
               <div className="relative h-[400px] w-full lg:w-1/2 overflow-hidden rounded-[40px] border border-white/5 shadow-2xl">
                  <img src={sol.image} alt={sol.title} className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8">
                     <span className="text-xs font-black uppercase tracking-widest text-premium-brown">Solution Layer {i + 1}</span>
                  </div>
               </div>

               <div className="w-full lg:w-1/2 text-left space-y-8">
                  <h2 className="text-4xl font-black text-premium-cream lg:text-6xl tracking-tight">{sol.title}</h2>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-premium-brown">{sol.focus}</p>
                  <p className="text-xl leading-relaxed text-premium-tan/50">
                    {sol.description}
                  </p>
                  <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-premium-brown hover:text-premium-cream transition-colors">
                     Explore Framework
                     <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                  </button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
