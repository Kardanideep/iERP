"use client";

import React, { useState } from 'react';
import { useReveal } from '@/app/hooks/useReveal';
import { Send } from 'lucide-react';
import siteConfig from '@/data/siteConfig.json';

const NewsletterSignup = () => {
  const revealRef = useReveal();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="flex w-full flex-col items-center bg-[#0c0c0c] px-5 py-24 text-center" ref={revealRef}>
      <div className="w-full max-w-2xl">
        <h2 className="relative mb-6 inline-block text-4xl font-extrabold text-premium-cream sm:text-5xl after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded-sm after:bg-linear-to-r after:from-premium-tan after:to-premium-brown after:content-['']">
          Stay in the Loop
        </h2>
        <p className="mb-10 text-xl text-premium-tan sm:text-lg">Get the latest {siteConfig.companyName} updates, articles, and resources delivered straight to your inbox.</p>
        
        {status === 'success' ? (
          <div className="animate-[fadeIn_0.5s_ease] text-lg font-semibold text-premium-tan">
            Thanks for subscribing! Check your email for a confirmation link.
          </div>
        ) : (
          <form className="mb-5 flex gap-3 sm:flex-col" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'loading'}
              className="flex-1 rounded-xl border border-premium-brown/30 bg-[#0c1012] p-4 text-base text-premium-cream outline-none transition-all duration-300 focus:border-premium-tan focus:ring-4 focus:ring-premium-tan/10 disabled:opacity-50"
            />
            <button 
              type="submit" 
              className="cursor-pointer whitespace-nowrap rounded-xl bg-linear-to-br from-premium-brown to-premium-burgundy px-8 py-4 text-base font-bold text-premium-cream shadow-[0_10px_20px_rgba(60,0,13,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-125 hover:shadow-[0_15px_30px_rgba(60,0,13,0.5)] disabled:bg-[#4a3026] disabled:text-premium-cream/50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none sm:px-6 sm:py-3.5"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              {status !== 'loading' && <Send size={18} className="ml-2 inline" />}
            </button>
          </form>
        )}
        
        <p className="text-[0.85rem] text-premium-brown">
          We care about your data in our <a href="#" className="underline">privacy policy</a>.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;
