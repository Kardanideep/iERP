"use client";

import React from 'react';
import Link from 'next/link';
import siteConfig from '@/data/siteConfig.json';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black px-5 pt-24 pb-10 text-premium-tan">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="col-span-1 lg:col-span-1">
          <h2 className="mb-6 text-3xl font-extrabold text-premium-cream sm:text-2xl">{siteConfig.companyName}</h2>
          <p className="mb-8 leading-relaxed text-premium-tan">
            {siteConfig.tagline}
          </p>
          <div className="mb-8 flex flex-col gap-3">
            <p className="flex items-start gap-3 text-[0.95rem] leading-tight text-premium-tan"><MapPin size={16} className="mt-0.5 shrink-0 text-premium-brown" /> {siteConfig.address}</p>
            <p className="flex items-start gap-3 text-[0.95rem] leading-tight text-premium-tan"><Mail size={16} className="mt-0.5 shrink-0 text-premium-brown" /> {siteConfig.contactEmail}</p>
            <p className="flex items-start gap-3 text-[0.95rem] leading-tight text-premium-tan"><Phone size={16} className="mt-0.5 shrink-0 text-premium-brown" /> {siteConfig.phone}</p>
          </div>
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-premium-brown/30 bg-[#0c1012] text-premium-cream transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-premium-burgundy hover:bg-premium-burgundy hover:text-white hover:underline">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {i === 1 && <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>}
                  {i === 2 && <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></>}
                  {i === 3 && <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></>}
                  {i === 4 && <><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></>}
                  {i === 5 && <><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></>}
                </svg>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-6 text-lg font-bold text-premium-cream">Product</h3>
          <ul className="flex flex-col gap-3.5">
            <li><Link href="/products" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">Product Suite</Link></li>
            <li><Link href="/solutions" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">Solutions</Link></li>
            <li><Link href="/features" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">Features</Link></li>
            <li><Link href="/how-it-works" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">How It Works</Link></li>
            <li><Link href="/pricing" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">Pricing</Link></li>
            <li><Link href="/case-studies" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">Case Studies</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-6 text-lg font-bold text-premium-cream">Company</h3>
          <ul className="flex flex-col gap-3.5">
            <li><Link href="/" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">Home</Link></li>
            <li><Link href="/about" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">Our Story</Link></li>
            <li><Link href="/testimonials" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">Testimonials</Link></li>
            <li><Link href="/onboarding" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">Onboarding</Link></li>
            <li><Link href="/blog" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">Blog</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-6 text-lg font-bold text-premium-cream">Support</h3>
          <ul className="flex flex-col gap-3.5">
            <li><Link href="/faq" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">FAQ</Link></li>
            <li><Link href="/support" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">Help Center</Link></li>
            <li><Link href="/docs" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">Documentation</Link></li>
            <li><Link href="/contact" className="text-[0.95rem] text-premium-tan transition-all duration-300 hover:pl-1 hover:text-premium-cream">Contact Us</Link></li>
          </ul>
           
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl border-t border-premium-brown/20 pt-10 text-center text-[0.9rem] text-premium-brown flex flex-col items-center justify-between gap-6 md:flex-row md:text-left">
        <p>&copy; {siteConfig.year} {siteConfig.companyName} Inc. All rights reserved.</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-premium-cream transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-premium-cream transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
