"use client";

import React from 'react';
import featuresData from '@/data/features.json';
import { Zap, BarChart3, Shield, Code2, Users, Clock } from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';

const iconMap = {
  Zap,
  BarChart3,
  Shield,
  Code2,
  Users,
  Clock
};
const FeaturesHighlight = () => {
  const revealRef = useReveal();

  return (
    <section className="flex w-full flex-col items-center bg-premium-black px-5 py-24" ref={revealRef}>
      <div className="mb-20 text-center">
        <h2 className="relative mb-4 inline-block text-4xl font-extrabold text-premium-cream sm:text-5xl after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded-sm after:bg-linear-to-r after:from-premium-tan after:to-premium-brown after:content-['']">
          Powerful Features
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-premium-tan opacity-80">
          Discover why the world's leading institutions trust iERP for their most critical transformations.
        </p>
      </div>
      <div className="grid w-full max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {featuresData.items.slice(0, 6).map((feature, index) => {
          const IconComponent = iconMap[feature.icon];
          return (
            <div 
              key={feature.id || index} 
              tabIndex={0}
              className="group relative flex flex-col gap-6 rounded-4xl border border-white/5 bg-[#0e1214] p-10 transition-all duration-700 hover:-translate-y-4 focus:-translate-y-4 focus:outline-none cursor-pointer overflow-hidden shadow-2xl"
            >
              {/* Animated Glow Backdrop */}
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 group-focus:opacity-100">
                <div className="absolute -inset-[100%] animate-spin-slow bg-linear-to-tr from-transparent via-premium-brown/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(180,140,100,0.15),transparent_70%)]" />
              </div>

              {/* Border Sweep Line */}
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100">
                <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-transparent via-premium-brown to-transparent animate-scan" />
              </div>

              <div className="relative z-10">
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/5 text-premium-brown shadow-xl transition-all duration-700 group-hover:bg-premium-brown group-hover:text-white group-hover:scale-110 group-hover:rotate-6 group-focus:bg-premium-brown group-focus:text-white group-focus:scale-110 group-focus:rotate-6">
                  {IconComponent && <IconComponent size={40} strokeWidth={1.5} />}
                </div>
                
                <h3 className="mb-4 text-3xl font-black tracking-tight text-premium-cream transition-colors duration-500 group-hover:text-premium-tan group-focus:text-premium-tan">
                  {feature.title}
                </h3>
                
                <p className="text-lg leading-relaxed text-premium-tan/60 transition-colors duration-500 group-hover:text-premium-tan/90 group-focus:text-premium-tan/90">
                  {feature.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default FeaturesHighlight;
