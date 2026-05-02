"use client";

import React, { useState } from 'react';
import faqsData from '@/data/faqs.json';
import { Plus } from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';

const FAQSection = () => {
  const revealRef = useReveal();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex w-full flex-col items-center bg-premium-black px-5 py-24" ref={revealRef}>
      <div className="mb-16 text-center">
        <h2 className="relative mb-4 inline-block text-4xl font-extrabold text-premium-cream sm:text-5xl after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded-sm after:bg-linear-to-r after:from-premium-tan after:to-premium-brown after:content-['']">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="flex w-full max-w-3xl flex-col gap-4">
        {faqsData.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={index} 
              className={`overflow-hidden rounded-[20px] border bg-[#0c1012] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'border-premium-brown shadow-[0_10px_30px_rgba(0,0,0,0.4)]' : 'border-premium-brown/20'}`}
            >
              <button 
                className={`flex w-full items-center justify-between p-6 text-left text-lg font-bold transition-all duration-300 sm:p-5 ${isActive ? 'text-premium-tan' : 'text-premium-cream'}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <Plus className={`shrink-0 transition-transform duration-300 ${isActive ? 'rotate-45 text-premium-burgundy' : 'text-premium-brown'}`} size={24} />
              </button>
              <div className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] bg-premium-burgundy/5 ${isActive ? 'max-h-[500px] p-6 pt-0 sm:p-5 sm:pt-0' : 'max-h-0'}`}>
                <p className="text-[1rem] leading-relaxed text-premium-tan">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
