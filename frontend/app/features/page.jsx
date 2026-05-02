"use client";

import React, { useState } from 'react';
import { Zap, BarChart3, Shield, Code2, Users, Clock, Box } from 'lucide-react';
import featuresData from '@/data/features.json';

const iconMap = {
  Zap,
  BarChart3,
  Shield,
  Code2,
  Users,
  Clock
};

export default function FeaturesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFeatures = featuresData.items.filter(item => 
    activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <main className="min-h-screen bg-[#080808] pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-5 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-premium-brown/20 bg-premium-brown/5 px-6 py-2">
           <Box size={14} className="text-premium-brown" />
           <span className="text-xs font-black uppercase tracking-widest text-premium-tan">Core Capabilities</span>
        </div>
        <h1 className="mb-12 bg-gradient-to-br from-white via-premium-cream to-premium-brown bg-clip-text text-6xl font-black tracking-tight text-transparent md:text-8xl">
          Platform <span className="text-premium-brown">Features</span>
        </h1>

        {/* Category Filters */}
        <div className="mb-20 flex flex-wrap justify-center gap-4">
           {featuresData.categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setActiveCategory(cat)}
               className={`rounded-full px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-premium-brown text-white shadow-xl' : 'border border-white/10 bg-white/[0.02] text-premium-tan/40 hover:text-premium-tan hover:border-white/20'}`}
             >
               {cat}
             </button>
           ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredFeatures.map((feature) => {
            const Icon = iconMap[feature.icon] || Box;
            return (
              <div key={feature.id} className="group relative rounded-[40px] border border-white/5 bg-[#0a0a0a] p-10 text-left transition-all duration-500 hover:border-premium-brown/30 hover:bg-[#0c0c0c]">
                 <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-premium-brown transition-all group-hover:bg-premium-brown group-hover:text-white">
                    <Icon size={28} />
                 </div>
                 <div className="mb-4 inline-block rounded-full bg-premium-brown/10 px-4 py-1 text-[8px] font-black uppercase tracking-widest text-premium-brown">
                    {feature.category}
                 </div>
                 <h3 className="mb-4 text-2xl font-black text-premium-cream">{feature.title}</h3>
                 <p className="text-sm leading-relaxed text-premium-tan/40">
                    {feature.details}
                 </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
