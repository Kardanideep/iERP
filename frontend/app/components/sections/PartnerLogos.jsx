"use client";

import React from 'react';
import partnersData from '@/data/partners.json';
import { useReveal } from '@/app/hooks/useReveal';

const PartnerLogos = () => {
  const revealRef = useReveal();

  return (
    <section className="flex w-full flex-col items-center bg-[#111111] px-5 py-24" ref={revealRef}>
      <div className="mb-16 text-center">
        <h2 className="text-[15px] font-black uppercase tracking-[0.4em] text-premium-brown">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div className="grid w-full max-w-6xl grid-cols-2 items-center justify-items-center gap-x-12 gap-y-16 md:grid-cols-3 lg:grid-cols-4">
        {partnersData.map((partner, index) => (
          <div key={index} className="group relative flex h-20 w-full max-w-[180px] cursor-pointer items-center justify-center rounded-xl bg-gray p-4 ">
            <img 
              src={partner.logo} 
              alt={partner.name} 
              title={partner.name} 
              className="max-h-full max-w-full object-contain transition-all duration-700 md:grayscale opacity-100 md:opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerLogos;
