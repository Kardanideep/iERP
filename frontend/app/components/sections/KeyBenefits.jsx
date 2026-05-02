"use client";

import React from 'react';
import benefitsData from '@/data/benefits.json';
import { TrendingUp, DollarSign, Users, Lightbulb } from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';

const iconMap = {
  'trending-up': TrendingUp,
  'dollar-sign': DollarSign,
  'users': Users,
  'lightbulb': Lightbulb,
};

const KeyBenefits = () => {
  const revealRef = useReveal();

  return (
    <section className="flex w-full flex-col items-center bg-premium-black px-5 py-24" ref={revealRef}>
      <div className="mb-16 text-center">
        <h2 className="relative mb-4 inline-block text-4xl font-extrabold text-premium-cream sm:text-5xl after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded-sm after:bg-linear-to-r after:from-premium-tan after:to-premium-brown after:content-['']">
          Key Benefits
        </h2>
        <p className="mx-auto max-w-xl text-premium-tan opacity-80">
          Unlock the full potential of your business with our tailored solutions and expert support.
        </p>
      </div>
      <div className="grid w-full max-w-5xl gap-10 sm:grid-cols-2">
        {benefitsData.map((benefit, index) => {
          const IconComponent = iconMap[benefit.icon];
          return (
            <div 
              key={index} 
              tabIndex={0}
              className="group relative flex flex-col rounded-[40px] border border-white/5 bg-[#0a0a0a] p-12 transition-all duration-700 hover:border-premium-brown/40 focus:border-premium-brown/40 hover:bg-[#0c0c0c] focus:bg-[#0c0c0c] focus:outline-none cursor-pointer overflow-hidden"
            >
              {/* Stylized Index Number */}
              <div className="absolute -right-4 -top-8 text-[12rem] font-black text-white/[0.02] transition-all duration-700 group-hover:text-premium-brown/[0.05] group-focus:text-premium-brown/[0.05] group-hover:-translate-y-4 group-focus:-translate-y-4">
                0{index + 1}
              </div>

              {/* Progress Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-premium-brown to-premium-burgundy transition-all duration-1000 group-hover:w-full group-focus:w-full" />

              <div className="relative z-10">
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-premium-brown/10 text-premium-brown transition-all duration-500 group-hover:bg-premium-brown group-hover:text-white group-hover:rotate-12 group-focus:bg-premium-brown group-focus:text-white group-focus:rotate-12">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                
                <h3 className="mb-6 text-3xl font-black tracking-tight text-premium-cream">
                  {benefit.title}
                </h3>
                
                <p className="text-xl leading-relaxed text-premium-tan/60 transition-colors duration-500 group-hover:text-premium-tan/90 group-focus:text-premium-tan/90">
                  {benefit.description}
                </p>

                <div className="mt-10 h-px w-20 bg-premium-brown/20 transition-all duration-700 group-hover:w-full group-hover:bg-premium-brown/40 group-focus:w-full group-focus:bg-premium-brown/40" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KeyBenefits;
