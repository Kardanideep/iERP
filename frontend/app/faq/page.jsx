"use client";

import React, { useState, useMemo } from 'react';
import faqData from '@/data/faq.json';
import { 
  Search, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  ArrowRight, 
  ArrowLeft,
  Filter,
  MessageSquare,
  Zap,
  Shield,
  Target
} from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';
import Link from 'next/link';

const ITEMS_PER_PAGE = 20;

const FAQHero = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden bg-[#080808] px-5 pt-32 pb-20 text-center text-premium-cream">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#80808015_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-premium-brown/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-premium-burgundy/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-premium-brown/20 bg-premium-brown/5 px-6 py-2">
           <HelpCircle size={14} className="text-premium-brown" />
           <span className="text-xs font-black uppercase tracking-widest text-premium-tan">Institutional Knowledge Hub</span>
        </div>
        <h1 className="mb-6 bg-gradient-to-br from-white via-premium-cream to-premium-brown bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl">
          How can we <br /> <span className="opacity-40 text-white">assist you?</span>
        </h1>
        
        {/* Search Bar
        <div className="relative mx-auto mt-12 max-w-2xl group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-premium-brown/20 to-premium-burgundy/20 blur opacity-40 group-focus-within:opacity-100 transition-opacity duration-500" />
          <div className="relative flex items-center rounded-2xl border border-white/10 bg-[#0a0a0a] px-6 py-5 shadow-2xl backdrop-blur-xl">
            <Search className="text-premium-tan/40" size={20} />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search institutional knowledge base..."
              className="w-full bg-transparent px-4 text-base text-premium-cream outline-none placeholder:text-white/10"
            />
            <div className="hidden sm:flex items-center gap-2 rounded-lg bg-white/5 px-3 py-1 text-[10px] font-black uppercase text-premium-tan/30">
               <span className="border-r border-white/10 pr-2">ESC</span>
               <span>Clear</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className={`group rounded-[32px] border border-white/5 bg-[#0a0a0a] overflow-hidden transition-all duration-500 ${isOpen ? 'border-premium-brown/30 bg-[#0c0c0c] shadow-2xl' : 'hover:border-white/10'}`}>
      <button 
        onClick={onToggle}
        className="flex w-full items-center justify-between p-8 text-left"
      >
        <div className="flex items-center gap-6">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-500 ${isOpen ? 'bg-premium-brown text-white' : 'bg-white/5 text-premium-tan/40 group-hover:bg-white/10 group-hover:text-premium-tan'}`}>
             <span className="text-xs font-black">{faq.id}</span>
          </div>
          <h3 className={`text-lg font-bold transition-colors duration-500 ${isOpen ? 'text-premium-cream' : 'text-premium-tan/70 group-hover:text-premium-tan'}`}>
            {faq.q}
          </h3>
        </div>
        <div className={`rounded-full p-2 transition-all duration-500 ${isOpen ? 'rotate-180 bg-premium-brown/10 text-premium-brown' : 'text-premium-tan/20'}`}>
           <ChevronDown size={20} />
        </div>
      </button>
      
      <div className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="border-t border-white/5 p-8 pt-4 mt-4">
           <div className="rounded-2xl bg-white/[0.02] p-8">
              <p className="text-lg leading-relaxed text-premium-tan/60">
                {faq.a}
              </p>
              <div className="mt-8 flex items-center gap-4 border-t border-white/5 pt-6">
                 <span className="text-[10px] font-black uppercase tracking-widest text-premium-brown/40">Category</span>
                 <span className="rounded-full bg-premium-brown/5 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-premium-brown border border-premium-brown/20">
                    {faq.category}
                 </span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [openId, setOpenId] = useState(null);

  const filteredFaqs = useMemo(() => {
    return faqData.questions.filter(faq => {
      const matchesSearch = faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            faq.a.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const totalPages = Math.ceil(filteredFaqs.length / ITEMS_PER_PAGE);
  const paginatedFaqs = filteredFaqs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setOpenId(null);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#080808]">
      <FAQHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      {/* Category Filter */}
      <section className="relative md:sticky md:top-20 z-40 w-full border-y border-white/5 bg-[#080808]/80 py-6 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-start md:justify-center gap-4 overflow-x-auto px-5 scrollbar-hide">
          {['All', ...faqData.categories].map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setCurrentPage(1); }}
              className={`whitespace-nowrap rounded-full px-8 py-3 text-xs font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-premium-brown text-white shadow-xl' : 'border border-white/5 bg-white/[0.02] text-premium-tan/40 hover:border-white/10 hover:text-premium-tan'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ List */}
      <section className="mx-auto max-w-5xl px-5 py-24">
        <div className="space-y-6">
          {paginatedFaqs.length > 0 ? (
            paginatedFaqs.map((faq) => (
              <FAQItem 
                key={faq.id} 
                faq={faq} 
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            ))
          ) : (
            <div className="rounded-[40px] border border-white/5 bg-[#0a0a0a] p-20 text-center">
               <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-premium-brown/10 text-premium-brown">
                  <Search size={40} />
               </div>
               <h2 className="text-3xl font-black text-premium-cream mb-4">No results found</h2>
               <p className="text-premium-tan/40">We couldn't find any questions matching "{searchQuery}". Try a different term.</p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-20 flex items-center justify-center gap-4">
            <button 
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-premium-tan/40 transition-all hover:border-premium-brown/40 hover:text-premium-brown disabled:opacity-20"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl text-sm font-black transition-all ${currentPage === i + 1 ? 'bg-premium-brown text-white shadow-xl' : 'border border-white/5 bg-white/[0.02] text-premium-tan/40 hover:border-white/10 hover:text-premium-tan'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/[0.02] text-premium-tan/40 transition-all hover:border-premium-brown/40 hover:text-premium-brown disabled:opacity-20"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        )}
      </section>

      {/* Still Have Questions CTA */}
      <section className="w-full bg-[#0a0a0a] px-5 py-24 text-center">
         <div className="mx-auto max-w-3xl rounded-[48px] border border-white/5 bg-white/[0.01] p-16 md:p-24 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 bg-premium-brown/5 blur-[80px]" />
            <div className="relative z-10">
               <h2 className="mb-6 text-4xl font-black text-premium-cream">Still have questions?</h2>
               <p className="mb-10 text-xl text-premium-tan/40">Our institutional experts are available 24/7 to provide in-depth technical guidance.</p>
               <Link 
                 href="/contact"
                 className="group inline-flex items-center gap-2 md:gap-3 rounded-full bg-premium-brown px-6 py-4 md:px-10 md:py-5 text-xs md:text-lg font-black uppercase tracking-widest text-white transition-all hover:-translate-y-1 hover:brightness-110 shadow-2xl"
               >
                 Contact Support
                 <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
               </Link>
            </div>
         </div>
      </section>
    </main>
  );
}
