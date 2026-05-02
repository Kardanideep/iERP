"use client";

import React from 'react';
import testimonialsData from '@/data/testimonials.json';
import { Star } from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';

const Testimonials = () => {
  const revealRef = useReveal();

  return (
    <section className="flex w-full flex-col items-center bg-premium-black px-5 py-24" ref={revealRef}>
      <div className="mb-16 text-center">
        <h2 className="relative mb-4 inline-block text-4xl font-extrabold text-premium-cream sm:text-5xl after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded-sm after:bg-linear-to-r after:from-premium-tan after:to-premium-brown after:content-['']">
          Success Stories
        </h2>
        <p className="mx-auto max-w-xl text-premium-tan opacity-80">
          Hear from the people who have transformed their businesses with our platform.
        </p>
      </div>

      <div className="grid w-full max-w-6xl gap-8 sm:grid-cols-1 lg:grid-cols-2">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="group relative flex flex-col gap-5 rounded-4xl border border-white/5 bg-[#0e1214] p-10 shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:border-premium-brown/30">
            <p className="relative text-xl font-light italic leading-relaxed text-premium-cream">
              "{testimonial.quote}"
            </p>
            
            <div className="mt-auto flex items-center gap-4 pt-6 border-t border-white/5">
              <div className="h-[60px] w-[60px] overflow-hidden rounded-full border-2 border-premium-brown/30">
                <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-premium-cream">{testimonial.name}</h4>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-premium-brown">{testimonial.role}</span>
                  <span className="text-[10px] text-premium-tan/40 uppercase tracking-widest">{testimonial.institution}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
