"use client";

import React, { useEffect, useRef, useState } from 'react';
import stepsData from '@/data/steps.json';
import { UserPlus, Settings, Activity, CheckCircle } from 'lucide-react';

const iconMap = {
  'user-plus': UserPlus,
  'settings': Settings,
  'activity': Activity,
  'check-circle': CheckCircle,
};

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on the section's position relative to viewport
      const totalHeight = rect.height;
      const offsetStart = windowHeight * 0.7; // Start animating when section is 70% from top
      const offsetEnd = windowHeight * 0.3;   // Stop when section is 30% from top
      
      const currentPos = offsetStart - rect.top;
      const totalTravel = totalHeight + offsetStart - offsetEnd;
      
      let progress = currentPos / totalTravel;
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollProgress(progress);
      
      // Update active step based on progress
      const stepCount = stepsData.length;
      const stepIndex = Math.floor(progress * stepCount);
      setActiveStep(Math.min(stepCount - 1, stepIndex));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-[#0c0c0c] px-5 py-32" ref={sectionRef}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-premium-burgundy/10 blur-[120px] pointer-events-none" />

      <div className="relative z-20 mb-24 text-center">
        <h2 className="relative mb-6 inline-block text-4xl font-extrabold text-premium-cream sm:text-5xl after:absolute after:bottom-[-12px] after:left-1/2 after:h-1.5 after:w-24 after:-translate-x-1/2 after:rounded-full after:bg-linear-to-r after:from-premium-tan after:to-premium-brown after:content-['']">
          How It Works
        </h2>
        <p className="mx-auto max-w-xl text-lg text-premium-tan opacity-80">
          Experience the seamless journey of transforming your business in four simple steps.
        </p>
      </div>

      <div className="relative flex w-full max-w-4xl flex-col gap-24">
        {/* Animated Connecting Line */}
        <div className="absolute top-[40px] bottom-[40px] left-[40px] z-0 w-1 pointer-events-none sm:left-[40px]">
          <svg className="h-full w-full" preserveAspectRatio="none">
            {/* Background dashed line */}
            <line 
              x1="50%" y1="0" x2="50%" y2="100%" 
              stroke="#774936" strokeWidth="2" strokeDasharray="8 8" 
              className="opacity-20"
            />
            {/* Progress filling line */}
            <line 
              x1="50%" y1="0" x2="50%" y2="100%" 
              stroke="#774936" strokeWidth="4" strokeLinecap="round" 
              pathLength="1"
              style={{ 
                strokeDasharray: 1, 
                strokeDashoffset: 1 - scrollProgress,
                transition: 'stroke-dashoffset 150ms linear'
              }}
            />
          </svg>
        </div>

        {stepsData.map((step, index) => {
          const stepThreshold = index / stepsData.length;
          const isVisible = scrollProgress >= stepThreshold;
          const isActive = activeStep === index;
          const IconComponent = iconMap[step.icon];

          return (
            <div 
              key={index} 
              className={`relative z-10 flex items-start gap-12 transition-all duration-1000 ease-out sm:gap-8 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
            >
              <div className="relative shrink-0">
                {/* Step Circle */}
                <div className={`relative flex h-20 w-20 items-center justify-center rounded-full border-4 bg-[#0c1012] text-premium-tan shadow-2xl transition-all duration-500 ${isActive ? 'scale-110 border-premium-burgundy bg-premium-burgundy text-premium-cream shadow-premium-burgundy/40' : isVisible ? 'border-premium-brown bg-[#111618] text-premium-cream' : 'border-premium-brown/30 opacity-50'}`}>
                  {IconComponent && <IconComponent className={`h-9 w-9 transition-all duration-500 ${isActive ? 'scale-110 rotate-3' : ''}`} />}
                  
                  {/* Step Number Badge */}
                  <div className={`absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-premium-black text-xs font-black text-premium-cream shadow-lg transition-colors duration-500 ${isActive ? 'bg-premium-burgundy' : 'bg-premium-brown'}`}>
                    {step.number}
                  </div>
                  
                  {/* Pulsing Glow for Active Step */}
                  {isActive && (
                    <div className="absolute inset-0 z-[-1] animate-pulse-slow rounded-full bg-premium-burgundy/30 blur-md" />
                  )}
                </div>
              </div>

              {/* Step Content Card */}
              <div className={`flex-1 rounded-3xl p-10 shadow-xl transition-all duration-500 sm:p-6 ${isActive ? 'glass-premium border-premium-burgundy/50 bg-linear-to-br from-[#111618] to-premium-burgundy/10 scale-[1.02] shadow-premium-burgundy/5' : 'glass-premium opacity-70 hover:opacity-100'}`}>
                <h3 className={`mb-4 text-2xl font-bold transition-colors duration-500 ${isActive ? 'text-premium-cream' : 'text-premium-tan'}`}>
                  {step.title}
                </h3>
                <p className={`text-lg leading-relaxed transition-opacity duration-500 ${isActive ? 'text-premium-cream/90' : 'text-premium-tan/70'}`}>
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
