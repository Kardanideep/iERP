"use client";

import React from 'react';
import { useReveal } from '@/app/hooks/useReveal';
import siteConfig from '@/data/siteConfig.json';

const CallToAction = () => {
  const revealRef = useReveal();

  const scrollToForm = () => {
    const formElement = document.getElementById('demo-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-linear-to-br from-premium-burgundy to-premium-brown px-5 py-32 text-center text-premium-cream reveal-scale" ref={revealRef}>
      {/* Background Animation */}
      <div className="absolute top-[-50%] left-[-50%] h-[200%] w-[200%] animate-[spin_20s_linear_infinite] bg-radial from-premium-cream/10 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl">
        <h2 className="relative mb-12 inline-block text-5xl font-extrabold leading-[1.1] text-premium-cream sm:text-4xl after:absolute after:bottom-[-12px] after:left-1/2 after:h-1.5 after:w-24 after:-translate-x-1/2 after:rounded-full after:bg-linear-to-r after:from-premium-tan after:to-premium-brown after:content-['']">
          Ready to Scale Your Business?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-xl opacity-90 sm:text-lg">
          Join 10,000+ teams who use {siteConfig.companyName} to build, deploy, and scale their applications with ease.
        </p>
        <div className="flex flex-wrap justify-center gap-5 sm:flex-col sm:items-stretch sm:gap-4">
          <button className="cursor-pointer rounded-xl bg-premium-cream px-9 py-4.5 text-lg font-bold text-premium-burgundy shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-400 hover:-translate-y-1 hover:scale-105 hover:bg-white hover:shadow-[0_15px_40px_rgba(0,0,0,0.3)] sm:px-6 sm:py-4 sm:text-base" onClick={scrollToForm}>
            Get Started Now
          </button>
          <button className="cursor-pointer rounded-xl border-2 border-premium-cream/50 bg-transparent px-9 py-4.5 text-lg font-bold text-premium-cream transition-all duration-300 hover:border-premium-cream hover:bg-premium-cream/10 sm:px-6 sm:py-4 sm:text-base">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
