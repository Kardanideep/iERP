"use client";

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Zap, 
  Code2, 
  ShieldCheck, 
  Lightbulb, 
  ChevronRight,
  BookOpen,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import docsData from '@/data/docs.json';

const iconMap = {
  Zap,
  Code2,
  ShieldCheck,
  Lightbulb
};

const DocSidebar = ({ activeArticleId, onSelect, isOpen, onClose }) => {
  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-80 transform border-r border-white/5 bg-[#080808]/95 backdrop-blur-2xl transition-transform duration-500 lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex h-20 items-center justify-between px-8 lg:px-10">
         <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-premium-brown shadow-[0_0_10px_#B48C64]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-premium-tan/60">Doc Portal</span>
         </div>
         <button onClick={onClose} className="text-premium-tan/40 hover:text-white lg:hidden">
            <X size={20} />
         </button>
      </div>

      <div className="h-[calc(100vh-160px)] overflow-y-auto px-6 py-10 scrollbar-hide">
        {docsData.categories.map((cat) => {
          const Icon = iconMap[cat.icon] || BookOpen;
          return (
            <div key={cat.id} className="mb-12">
              <div className="mb-6 flex items-center gap-3 px-4 text-premium-brown/40">
                <Icon size={16} strokeWidth={2.5} />
                <h3 className="text-[10px] font-black uppercase tracking-widest">{cat.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {cat.articles.map((art) => (
                  <li key={art.id}>
                    <button
                      onClick={() => {
                        onSelect(art);
                        onClose();
                      }}
                      className={`group flex w-full items-center justify-between rounded-2xl px-5 py-3.5 text-sm transition-all ${activeArticleId === art.id ? 'bg-premium-brown/10 text-premium-cream font-bold border border-premium-brown/20' : 'text-premium-tan/40 hover:bg-white/[0.03] hover:text-premium-tan border border-transparent'}`}
                    >
                      <span className="truncate">{art.title}</span>
                      <ChevronRight size={14} className={`shrink-0 transition-transform ${activeArticleId === art.id ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default function DocsPage() {
  const [selectedArticle, setSelectedArticle] = useState(docsData.categories[0].articles[0]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Find article by search
  const filteredArticles = docsData.categories.flatMap(c => c.articles).filter(a => 
    a.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    a.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-[#080808] text-premium-tan">
      {/* Mobile Nav Trigger */}
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="fixed bottom-10 right-10 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-premium-brown text-white shadow-[0_20px_50px_rgba(180,140,100,0.3)] lg:hidden"
      >
        <Menu size={24} />
      </button>

      <DocSidebar 
        activeArticleId={selectedArticle.id} 
        onSelect={setSelectedArticle} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 pt-20">
        {/* Header / Search - Natural Scroll */}
        <header className="relative border-b border-white/5 bg-[#080808]/90 px-8 py-6 lg:px-20">
           <div className="mx-auto flex max-w-4xl items-center justify-between gap-8">
              <div className="hidden items-center gap-6 lg:flex">
                 <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-premium-tan/30">System v4.2.1 Stable</span>
                 </div>
              </div>
              
              <div className="relative w-full max-w-[300px] ml-auto">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-premium-tan/20" size={16} />
                 <input 
                   type="text" 
                   placeholder="Search docs..."
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="w-full rounded-xl border border-white/5 bg-white/[0.02] py-3 pl-10 pr-4 text-xs outline-hidden transition-all focus:border-premium-brown/30 focus:bg-white/[0.04]"
                 />
                 
                 {searchQuery && (
                   <div className="absolute top-full left-0 z-50 mt-4 w-full rounded-[32px] border border-white/10 bg-[#0c0c0c] p-5 shadow-[0_30px_60px_rgba(0,0,0,0.8)] animate-in fade-in slide-in-from-top-2">
                      <p className="mb-4 px-4 text-[10px] font-black uppercase tracking-widest text-premium-brown/40">Knowledge Matches</p>
                      <div className="space-y-1 max-h-80 overflow-y-auto scrollbar-hide">
                         {filteredArticles.map(art => (
                           <button 
                             key={art.id}
                             onClick={() => {
                               setSelectedArticle(art);
                               setSearchQuery('');
                             }}
                             className="flex w-full items-center justify-between rounded-2xl px-5 py-4 text-sm text-premium-tan/60 hover:bg-white/5 hover:text-white transition-all"
                           >
                             <span className="font-medium">{art.title}</span>
                             <ArrowRight size={14} className="text-premium-brown/40" />
                           </button>
                         ))}
                         {filteredArticles.length === 0 && <p className="px-5 py-8 text-center text-sm text-premium-tan/20 italic">No technical matches found</p>}
                      </div>
                   </div>
                 )}
              </div>
           </div>
        </header>

        {/* Content Area */}
        <div className="mx-auto max-w-4xl px-8 py-24 lg:px-20">
           <div className="mb-16 flex items-center gap-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-premium-brown">Institutional Briefing</span>
              <div className="h-px flex-1 bg-white/5" />
           </div>

           <h1 className="mb-12 text-5xl font-black text-premium-cream lg:text-8xl leading-[0.9]">
             {selectedArticle.title}
           </h1>

           <div className="prose prose-invert max-w-none">
              <div className="mb-16 rounded-[40px] border border-white/5 bg-linear-to-br from-white/[0.01] to-transparent p-12">
                 <p className="text-xl leading-relaxed text-premium-tan/60 first-letter:text-7xl first-letter:font-black first-letter:text-premium-brown first-letter:mr-4 first-letter:float-left">
                   {selectedArticle.content}
                 </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                 <div className="group rounded-3xl border border-white/5 bg-[#0a0a0a] p-8 transition-all hover:border-premium-brown/20 hover:bg-[#0c0c0c]">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-premium-brown/10 text-premium-brown">
                       <Zap size={24} />
                    </div>
                    <h4 className="mb-3 text-lg font-bold text-premium-cream">Interactive Console</h4>
                    <p className="text-sm leading-relaxed text-premium-tan/40">Test this module directly in our institutional sandbox environment to verify data integrity.</p>
                 </div>
                 <div className="group rounded-3xl border border-white/5 bg-[#0a0a0a] p-8 transition-all hover:border-premium-brown/20 hover:bg-[#0c0c0c]">
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-premium-brown/10 text-premium-brown">
                       <BookOpen size={24} />
                    </div>
                    <h4 className="mb-3 text-lg font-bold text-premium-cream">Implementation Guide</h4>
                    <p className="text-sm leading-relaxed text-premium-tan/40">Review the step-by-step PDF roadmap for deploying this architecture across multi-campus networks.</p>
                 </div>
              </div>
           </div>

           {/* Footer Navigation */}
           <div className="mt-32 flex items-center justify-between border-t border-white/5 pt-12">
              <div className="text-left">
                 <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-premium-tan/20">Last Updated</p>
                 <p className="text-sm font-bold text-premium-tan/40">May 12, 2026</p>
              </div>
              <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest text-premium-brown hover:text-premium-cream transition-colors">
                 Help Center
                 <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
           </div>
        </div>
      </main>
    </div>
  );
}
