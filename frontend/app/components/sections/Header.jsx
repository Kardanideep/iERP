"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import siteConfig from '@/data/siteConfig.json';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const navGroups = [
  {
    label: 'Platform',
    items: [
      { label: 'Products', href: '/products' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Features', href: '/features' },
      { label: 'How It Works', href: '/how-it-works' },
    ]
  },
  {
    label: 'Institutional',
    items: [
      { label: 'Process', href: '/onboarding' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Pricing', href: '/pricing' },
    ]
  },
  {
    label: 'Company',
    items: [
      { label: 'Our Story', href: '/about' },
      { label: 'Insights', href: '/blog' },
      { label: 'Contact', href: '/contact' },
    ]
  },
  {
    label: 'Resources',
    items: [
      { label: 'Support', href: '/support' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Documentation', href: '/docs' },
    ]
  }
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled || activeDropdown
            ? 'border-b border-white/5 bg-[#0c0c0c]/90 py-3 shadow-2xl backdrop-blur-2xl'
            : 'bg-transparent py-6'
        }`}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-premium-brown text-white shadow-lg transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <span className="text-lg font-black tracking-tighter">i</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-premium-cream">
              {siteConfig.companyName}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-2 lg:flex">
            <Link href="/" className={`px-4 py-2 text-[13px] font-black uppercase tracking-widest transition-all ${pathname === '/' ? 'text-premium-brown' : 'text-premium-tan/60 hover:text-premium-tan'}`}>Home</Link>
            
            {navGroups.map((group) => (
              <div 
                key={group.label} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(group.label)}
              >
                <button
                  className={`flex items-center gap-2 px-4 py-2 text-[13px] font-black uppercase tracking-widest transition-all ${activeDropdown === group.label ? 'text-premium-brown' : 'text-premium-tan/60 hover:text-premium-tan'}`}
                >
                  {group.label}
                  <ChevronDown size={12} className={`transition-transform duration-300 ${activeDropdown === group.label ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === group.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 rounded-3xl border border-white/5 bg-[#0c0c0c] p-4 shadow-[0_30px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl animate-in fade-in slide-in-from-top-2">
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`block rounded-2xl px-5 py-3.5 text-[13px] font-black uppercase tracking-widest transition-all ${pathname === item.href ? 'bg-premium-brown/10 text-premium-brown' : 'text-premium-tan/40 hover:bg-white/5 hover:text-premium-tan'}`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center lg:flex">
            <Link
              href="/#demo-form"
              className="group flex items-center gap-3 rounded-full bg-premium-brown px-8 py-3 text-[10px] font-black uppercase tracking-widest text-white shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 text-premium-cream transition-all hover:bg-white/5 lg:hidden"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808] transition-transform duration-500 lg:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto px-8 pt-32 pb-12 scrollbar-hide">
          <nav className="space-y-12">
            <div className="space-y-4">
              <Link href="/" className="text-4xl font-black tracking-tighter text-premium-cream">Home</Link>
            </div>
            
            {navGroups.map((group) => (
              <div key={group.label} className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-premium-brown">{group.label}</h3>
                <div className="grid gap-4">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-2xl font-bold text-premium-tan/60 hover:text-premium-cream"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};


export default Header;
