"use client";

import React from 'react';
import pricingData from '@/data/pricing.json';
import { Check } from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';

const PricingOverview = () => {
  const revealRef = useReveal();

  return (
    <section className="flex w-full flex-col items-center bg-[#0c0c0c] px-5 py-24" ref={revealRef}>
      <div className="mb-16 text-center">
        <h2 className="relative mb-4 inline-block text-4xl font-extrabold text-premium-cream sm:text-5xl after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded-sm after:bg-linear-to-r after:from-premium-tan after:to-premium-brown after:content-['']">
          Simple, Transparent Pricing
        </h2>
        <p className="mx-auto max-w-xl text-premium-tan opacity-80">
          Choose the plan that's right for your business. No hidden fees, ever.
        </p>
      </div>

      <div className="grid w-full max-w-6xl items-start gap-8 lg:grid-cols-3">
        {pricingData.plans.map((plan, index) => (
          <div
            key={index}
            tabIndex={0}
            className={`group glass-premium relative flex flex-col items-center rounded-3xl p-10 text-center transition-all duration-500 hover:-translate-y-2 focus:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] focus:shadow-[0_20px_40px_rgba(0,0,0,0.5)] focus:outline-none cursor-pointer ${plan.popular ? 'border-2 border-premium-burgundy shadow-[0_0_30px_rgba(60,0,13,0.3)]' : ''}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-premium-burgundy px-4 py-1 text-xs font-black tracking-widest text-premium-cream uppercase">
                Most Popular
              </div>
            )}
            <h3 className="mb-4 text-xl font-bold text-premium-tan">{plan.name}</h3>
            <div className="mb-8 flex items-baseline gap-1 text-5xl font-black text-premium-cream">
              {plan.price}<span className="text-base font-medium text-premium-tan opacity-60">{plan.period}</span>
            </div>

            <div className="mb-10 flex flex-col gap-4 self-stretch">
              <ul className="flex flex-col gap-4">
                {plan.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-premium-cream">
                    <Check size={18} className="shrink-0 text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
              <ul className="flex max-h-[500px] md:max-h-0 flex-col gap-4 overflow-hidden opacity-100 md:opacity-0 transition-all duration-500 ease-out mt-4 md:mt-0 md:group-hover:max-h-[500px] md:group-focus:max-h-[500px] md:group-hover:opacity-100 md:group-focus:opacity-100 md:group-hover:mt-4 md:group-focus:mt-4">
                {plan.features.slice(3).map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-premium-cream">
                    <Check size={18} className="shrink-0 text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button className={`w-full cursor-pointer rounded-xl py-4 text-sm font-black transition-all duration-300 ${plan.popular ? 'bg-linear-to-br from-premium-brown to-premium-burgundy text-premium-cream shadow-lg hover:brightness-125' : 'border border-premium-brown/30 text-premium-tan hover:border-premium-tan hover:text-premium-cream'}`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingOverview;
