"use client";

import React from 'react';
import { useReveal } from '@/app/hooks/useReveal';
import siteConfig from '@/data/siteConfig.json';

const DemoForm = () => {
  const revealRef = useReveal();

  return (
    <section id="demo-form" className="flex w-full items-center justify-center bg-premium-black px-5 py-24" ref={revealRef}>
      <div className="w-full max-w-4xl rounded-[32px] border border-premium-brown/30 bg-[#0c1012] p-12 shadow-[0_25px_50px_rgba(0,0,0,0.4)] transition-transform duration-300 sm:p-8 sm:px-6">
        <h2 className="relative mb-6 block text-center text-4xl font-extrabold text-premium-cream after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded-sm after:bg-linear-to-r after:from-premium-tan after:to-premium-brown after:content-['']">
          Book a Demo
        </h2>
        <p className="mb-10 text-center text-premium-tan opacity-90">Experience the power of {siteConfig.companyName} firsthand. Our experts will walk you through our key features.</p>
        
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold text-premium-tan">Full Name</label>
            <input type="text" id="name" placeholder="John Doe" required className="rounded-xl border border-premium-brown/20 bg-[#111111] p-3.5 text-base text-premium-cream outline-none transition-all duration-300 focus:border-premium-tan focus:ring-4 focus:ring-premium-tan/10" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold text-premium-tan">Work Email</label>
            <input type="email" id="email" placeholder="john@company.com" required className="rounded-xl border border-premium-brown/20 bg-[#111111] p-3.5 text-base text-premium-cream outline-none transition-all duration-300 focus:border-premium-tan focus:ring-4 focus:ring-premium-tan/10" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-sm font-semibold text-premium-tan">Company Name</label>
            <input type="text" id="company" placeholder="TechFlow Inc." required className="rounded-xl border border-premium-brown/20 bg-[#111111] p-3.5 text-base text-premium-cream outline-none transition-all duration-300 focus:border-premium-tan focus:ring-4 focus:ring-premium-tan/10" />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="size" className="text-sm font-semibold text-premium-tan">Team Size</label>
            <select id="size" required className="rounded-xl border border-premium-brown/20 bg-[#111111] p-3.5 text-base text-premium-cream outline-none transition-all duration-300 focus:border-premium-tan focus:ring-4 focus:ring-premium-tan/10">
              <option value="">Select an option</option>
              <option value="1-10">1 - 10</option>
              <option value="11-50">11 - 50</option>
              <option value="51-200">51 - 200</option>
              <option value="201+">201+</option>
            </select>
          </div>
          
          <button type="submit" className="mt-3 cursor-pointer rounded-xl bg-linear-to-br from-premium-brown to-premium-burgundy p-4.5 text-lg font-bold text-premium-cream shadow-[0_10px_20px_rgba(60,0,13,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-125 hover:shadow-[0_15px_30px_rgba(60,0,13,0.5)] active:translate-y-0 md:col-span-2">
            Schedule My Demo
          </button>
        </form>
      </div>
    </section>
  );
};

export default DemoForm;
