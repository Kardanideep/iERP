"use client";

import React from 'react';
import comparisonData from '@/data/comparison.json';
import { Check, X } from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';

const WhyChooseUs = () => {
  const revealRef = useReveal();

  return (
    <section className="flex w-full flex-col items-center bg-[#0c0c0c] px-5 py-24 sm:px-4" ref={revealRef}>
      <div className="mb-16 text-center">
        <h2 className="relative mb-4 inline-block text-4xl font-extrabold text-premium-cream sm:text-5xl after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded-sm after:bg-linear-to-r after:from-premium-tan after:to-premium-brown after:content-['']">
          Why Choose Us
        </h2>
        <p className="mx-auto max-w-xl text-premium-tan opacity-80">
          See how we stack up against the competition and why our platform is the best choice for your needs.
        </p>
      </div>

      <div className="relative w-full max-w-5xl overflow-hidden rounded-[24px] border border-premium-brown/30 bg-[#0c1012] shadow-[0_20px_40px_rgba(0,0,0,0.3)] sm:rounded-2xl after:block after:p-3 after:text-center after:text-[0.8rem] after:font-semibold after:text-premium-brown  sm:after:block after:hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left">
            <thead>
              <tr className="border-b border-premium-brown/10">
                <th className="p-6 text-[0.85rem] font-bold tracking-wider text-premium-tan uppercase sm:p-4">Features</th>
                <th className="bg-premium-burgundy/20 p-6 text-[0.85rem] font-extrabold tracking-wider text-premium-cream uppercase sm:p-4">Our Platform</th>
                <th className="p-6 text-[0.85rem] font-bold tracking-wider text-premium-tan uppercase sm:p-4">Competitor A</th>
                <th className="p-6 text-[0.85rem] font-bold tracking-wider text-premium-tan uppercase sm:p-4">Competitor B</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="group relative z-0 border-b border-premium-brown/10 transition-all duration-300 hover:z-10 hover:scale-[1.01] hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)] sm:hover:scale-100 sm:hover:shadow-none">
                  <td className="p-6 text-base font-semibold text-premium-cream group-hover:bg-premium-brown/5 sm:p-4">{row.feature}</td>
                  <td className="bg-premium-burgundy/10 p-6 text-center font-semibold text-premium-cream group-hover:bg-premium-brown/5 sm:p-4">
                    {row.us ? (
                      <Check className="mx-auto text-premium-tan" size={24} />
                    ) : (
                      <X className="mx-auto text-premium-brown opacity-50" size={24} />
                    )}
                  </td>
                  <td className="p-6 text-center group-hover:bg-premium-brown/5 sm:p-4">
                    {row.competitorA ? (
                      <Check className="mx-auto text-premium-tan opacity-50" size={20} />
                    ) : (
                      <X className="mx-auto text-premium-brown opacity-50" size={20} />
                    )}
                  </td>
                  <td className="p-6 text-center group-hover:bg-premium-brown/5 sm:p-4">
                    {row.competitorB ? (
                      <Check className="mx-auto text-premium-tan opacity-50" size={20} />
                    ) : (
                      <X className="mx-auto text-premium-brown opacity-50" size={20} />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
