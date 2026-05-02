"use client";

import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, BarChart3, Users, Zap, Shield, CheckCircle, Activity } from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';

const HeroBanner = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); 
  }, []);

  const handleCtaClick = () => {
    const demoForm = document.getElementById('demo-form');
    if (demoForm) {
      demoForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const chartData = [40, 70, 45, 90, 65, 110, 85, 120, 95, 130];

  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-5 pt-32 pb-20 text-premium-cream">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        {/* High-Contrast Dot Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#80808050_2px,transparent_2px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-grid-flow" />
        
        {/* Hyper-Visible Scanning Beam */}
        <div className="absolute inset-0 overflow-hidden">
          {/* <div className="h-[100px] w-full bg-linear-to-b from-transparent via-premium-burgundy/30 to-transparent shadow-[0_0_100px_rgba(60,0,13,0.3)] animate-scan opacity-60" /> */}
        </div>

        <div className="absolute top-1/4 left-1/4 h-[40vw] w-[40vw] animate-pulse-slow rounded-full bg-premium-burgundy/10 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 h-[30vw] w-[30vw] animate-drift rounded-full bg-premium-brown/10 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[50vw] w-[50vw] -translate-x-1/2 rounded-t-full bg-gradient-to-t from-premium-burgundy/5 to-transparent blur-[80px]" />

        {/* Live Floating Data Nodes */}
        <div className="absolute top-[20%] left-[10%] h-2 w-2 animate-drift-slow rounded-full bg-premium-tan/20 blur-[1px]" />
        <div className="absolute top-[60%] right-[15%] h-3 w-3 animate-drift rounded-full bg-premium-brown/30 blur-[2px]" />
        <div className="absolute bottom-[20%] left-[20%] h-2 w-2 animate-pulse-slow rounded-full bg-premium-burgundy/40 blur-[1px]" />
      </div>
      
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* Main Heading */}
        <h1 className="mb-1 py-5 bg-gradient-to-br from-white via-premium-cream to-premium-brown bg-clip-text text-5xl font-extrabold tracking-tight text-transparent drop-shadow-sm md:text-7xl lg:text-8xl">
          {siteConfig.tagline}
        </h1>
        
        {/* Subtitle */}
        <p className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-premium-tan/80 md:text-xl">
          Intelligent, scalable, and beautifully designed. Streamline your entire business operation from a single, powerful platform built for modern enterprises.
        </p>
        
        {/* CTAs */}
        <div className="mb-20 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <button
            className="group relative flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-premium-burgundy to-premium-brown px-8 py-4 text-base font-bold text-white shadow-[0_0_40px_rgba(160,30,40,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(160,30,40,0.5)] sm:w-auto"
            onClick={handleCtaClick}
            id="hero-cta"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Free Trial
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </button>
          
          <button
            className="group flex w-full cursor-pointer items-center justify-center gap-3 rounded-full border border-premium-brown/30 bg-white/5 px-8 py-4 text-base font-bold text-premium-cream backdrop-blur-md transition-all duration-300 hover:border-premium-tan/50 hover:bg-white/10 sm:w-auto"
            onClick={handleCtaClick}
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-premium-tan/20 transition-colors group-hover:bg-premium-tan/40">
              <Play size={12} className="ml-0.5 fill-premium-cream text-premium-cream" />
            </div>
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
