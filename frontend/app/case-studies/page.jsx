"use client";

import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  ArrowRight, 
  CheckCircle2, 
  BarChart3, 
  Building2, 
  X,
  Plus,
  ArrowUpRight
} from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';
import caseData from '@/data/case-studies.json';

const CaseStudyHero = () => {
  return (
    <section className="relative flex min-h-[50vh] w-full flex-col items-center justify-center overflow-hidden bg-[#080808] px-5 pt-32 pb-20 text-center">
      <div className="pointer-events-none absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(#80808015_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-flow" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-premium-brown/20 bg-premium-brown/5 px-6 py-2">
           <Trophy size={14} className="text-premium-brown" />
           <span className="text-xs font-black uppercase tracking-widest text-premium-tan">Institutional Excellence</span>
        </div>
        <h1 className="mb-6 bg-gradient-to-br from-white via-premium-cream to-premium-brown bg-clip-text text-6xl font-extrabold tracking-tight text-transparent md:text-9xl">
          Case <span className="text-premium-brown">Studies</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-premium-tan/50">
          Quantifiable digital transformation across the world's most prestigious academic ecosystems.
        </p>
      </div>
    </section>
  );
};

const CaseStudyModal = ({ study, onClose }) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-5 md:p-10">
      <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-500" onClick={onClose} />
      
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[48px] border border-white/10 bg-[#0a0a0a] shadow-[0_0_100px_rgba(0,0,0,1)] animate-in zoom-in-95 duration-500 scrollbar-hide">
         <div className="relative h-[300px] md:h-[500px] w-full overflow-hidden">
            <img src={study.image} alt={study.title} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
            
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-premium-brown hover:scale-110"
            >
               <X size={24} />
            </button>

            <div className="absolute bottom-0 left-0 w-full p-10 md:p-20">
               <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-premium-brown">{study.universityName}</p>
               <h2 className="max-w-4xl text-4xl font-black text-premium-cream md:text-6xl leading-tight">
                 {study.title}
               </h2>
            </div>
         </div>

         <div className="p-10 md:p-20">
            <div className="grid lg:grid-cols-12 gap-16">
               <div className="lg:col-span-4 space-y-12">
                  <div className="space-y-6">
                     <h4 className="text-xs font-black uppercase tracking-widest text-premium-brown">Key Metrics</h4>
                     <div className="space-y-4">
                        {study.results.map((res, i) => (
                          <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
                             <BarChart3 size={20} className="text-premium-brown" />
                             <span className="text-sm font-bold text-premium-tan">{res}</span>
                          </div>
                        ))}
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-8 space-y-16">
                  <div className="space-y-8">
                     <div className="flex items-center gap-4">
                        <div className="h-px w-12 bg-premium-brown/30" />
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-premium-brown">Strategic Overview</span>
                     </div>
                     <p className="text-2xl font-light leading-relaxed text-premium-cream italic">
                        "{study.summary}"
                     </p>
                  </div>

                  <div className="prose prose-invert max-w-none">
                     <h3 className="mb-8 text-3xl font-black text-premium-cream">Implementation Narrative</h3>
                     <p className="text-xl leading-relaxed text-premium-tan/60 first-letter:text-7xl first-letter:font-black first-letter:text-premium-brown first-letter:mr-3 first-letter:float-left">
                       {study.fullStory}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

const CaseStudyCard = ({ study, onClick }) => {
  const ref = useReveal();
  return (
    <button 
      ref={ref}
      onClick={() => onClick(study)}
      className="group relative flex flex-col text-left overflow-hidden rounded-[40px] border border-white/5 bg-[#0a0a0a] transition-all duration-700 hover:border-premium-brown/30 hover:bg-[#0c0c0c]"
    >
       <div className="relative h-[400px] w-full overflow-hidden">
          <img 
            src={study.image} 
            alt={study.universityName} 
            className="h-full w-full object-cover transition-all duration-700" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
          
          <div className="absolute top-8 left-8 z-20">
             <span className="rounded-full bg-premium-brown/90 backdrop-blur-md px-6 py-2 text-[10px] font-black uppercase tracking-widest text-white">
               {study.category}
             </span>
          </div>

          <div className="absolute bottom-10 left-10 right-10 z-20">
             <div className="mb-4 flex items-center gap-2 text-premium-tan/60">
                <Building2 size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">{study.universityName}</span>
             </div>
             <h3 className="text-3xl font-black text-premium-cream transition-colors duration-500 group-hover:text-premium-tan">
               {study.title}
             </h3>
             <div className="mt-4 h-0.5 w-24 origin-left scale-x-0 bg-premium-brown transition-transform duration-700 group-hover:scale-x-100" />
          </div>

          <div className="absolute bottom-10 right-10 z-20 h-14 w-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-premium-tan/40 transition-all duration-500 group-hover:bg-premium-brown group-hover:text-white group-hover:scale-110 group-hover:rotate-45">
             <ArrowUpRight size={24} />
          </div>
       </div>

       <div className="p-10">
          <p className="mb-10 text-lg leading-relaxed text-premium-tan/40 line-clamp-2">
             {study.summary}
          </p>
          <div className="grid grid-cols-1 gap-4">
             {study.results.slice(0, 2).map((res, i) => (
               <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-premium-brown">
                  <CheckCircle2 size={14} className="text-premium-brown/40" />
                  {res}
               </div>
             ))}
          </div>
       </div>
    </button>
  );
};

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedStudy, setSelectedStudy] = useState(null);

  const filteredStudies = caseData.studies.filter(study => 
    activeCategory === 'All' || study.category === activeCategory
  );

  return (
    <>
      <main className={`bg-[#080808] transition-all duration-700 ${selectedStudy ? 'blur-xl brightness-50' : ''}`}>
        <CaseStudyHero />

        {/* Category Navigation */}
        <section className="relative md:sticky md:top-20 z-40 w-full border-y border-white/5 bg-[#080808]/80 py-6 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-start md:justify-center gap-4 overflow-x-auto px-5 scrollbar-hide">
            {caseData.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap rounded-full px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-premium-brown text-white shadow-xl' : 'border border-white/5 bg-white/[0.02] text-premium-tan/40 hover:border-white/10 hover:text-premium-tan'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Studies Grid */}
        <section className="mx-auto max-w-7xl px-5 py-24">
           <div className="grid gap-12 md:grid-cols-2">
              {filteredStudies.map((study) => (
                <CaseStudyCard key={study.id} study={study} onClick={setSelectedStudy} />
              ))}
           </div>
        </section>

        {/* Proof Section */}
        <section className="w-full border-t border-white/5 bg-[#0a0a0a] px-5 py-24 text-center">
           <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-4xl font-black text-premium-cream">Ready for Excellence?</h2>
              <p className="mb-16 text-xl leading-relaxed text-premium-tan/40">
                 Join the world's leading institutions in transforming their digital landscape with iERP's surgical precision.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                 {[
                   { label: "Global Users", val: "2.4M+" },
                   { label: "Partner Institutions", val: "180+" },
                   { label: "Uptime Guarantee", val: "99.9%" }
                 ].map((stat, i) => (
                   <div key={i} className="text-center">
                      <p className="text-4xl font-black text-premium-brown">{stat.val}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-premium-tan/30">{stat.label}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </main>

      {/* Case Study Detail Modal - Outside for clarity */}
      {selectedStudy && (
        <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
      )}
    </>
  );
}

