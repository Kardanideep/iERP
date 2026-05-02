"use client";

import React, { useState } from 'react';
import blogData from '@/data/blog.json';
import { 
  ArrowRight, 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ChevronRight,
  Sparkles,
  BookOpen,
  X
} from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';
import Link from 'next/link';

const BlogHero = () => {
  const [nodes, setNodes] = React.useState([]);

  React.useEffect(() => {
    // Generate nodes only on the client to avoid hydration mismatch
    const newNodes = [...Array(6)].map((_, i) => ({
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      delay: `${i * 1.5}s`
    }));
    setNodes(newNodes);
  }, []);

  return (
    <section className="relative flex min-h-[65vh] w-full flex-col items-center justify-center overflow-hidden bg-[#080808] px-5 pt-32 pb-20 text-center text-premium-cream">
      {/* Cinematic Panoramic Background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#80808020_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_70%,transparent_100%)] animate-grid-flow" />
        
        {/* Horizontal Light Horizon */}
        <div className="absolute top-1/2 left-0 h-px w-full bg-linear-to-r from-transparent via-premium-brown/40 to-transparent shadow-[0_0_50px_rgba(180,140,100,0.3)] animate-pulse" />
        
        {/* Floating Data Nodes */}
        {nodes.map((node, i) => (
          <div 
            key={i} 
            className="absolute h-1 w-1 rounded-full bg-premium-brown shadow-[0_0_15px_#B48C64] animate-float"
            style={{ 
              top: node.top, 
              left: node.left,
              animationDelay: node.delay
            }} 
          />
        ))}

        <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-premium-burgundy/10 blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-premium-brown/5 blur-[120px] animate-drift" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-premium-brown/20 bg-premium-brown/5 px-6 py-2">
           <BookOpen size={14} className="text-premium-brown" />
           <span className="text-xs font-black uppercase tracking-widest text-premium-tan">Institutional Journal</span>
        </div>
        <h1 className="mb-6 bg-gradient-to-br from-white via-premium-cream to-premium-brown bg-clip-text text-6xl font-extrabold tracking-tight text-transparent md:text-9xl">
          Institutional <br /> <span className="text-premium-brown">Insights</span>
        </h1>
        <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-premium-tan/50">
          Exploring the intersection of advanced technology and institutional excellence through technical briefing and analysis.
        </p>
      </div>
    </section>
  );
};

const BlogModal = ({ post, onClose }) => {
  if (!post) return null;
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-5 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-500"
        onClick={onClose}
      />
      
      {/* Content Panel */}
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[48px] border border-white/10 bg-[#0a0a0a] shadow-[0_0_100px_rgba(0,0,0,0.8)] animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 scrollbar-hide">
        
        {/* Hero Section of Modal */}
        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden">
           <img 
             src={post.image} 
             alt={post.title} 
             className="h-full w-full object-cover"
           />
           <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
           
           {/* Close Button */}
           <button 
             onClick={onClose}
             className="absolute top-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all hover:bg-premium-brown hover:border-premium-brown hover:scale-110 active:scale-95"
           >
              <X size={24} />
           </button>

           <div className="absolute bottom-0 left-0 w-full p-10 md:p-20">
              <div className="mb-6 flex items-center gap-6 text-xs font-black uppercase tracking-[0.3em] text-premium-brown">
                 <span>{post.category}</span>
                 <span className="h-1 w-1 rounded-full bg-premium-brown/40" />
                 <span className="text-white/40">{post.date}</span>
              </div>
              <h2 className="max-w-4xl text-4xl font-black text-premium-cream md:text-6xl leading-tight">
                {post.title}
              </h2>
           </div>
        </div>

        {/* Article Body */}
        <div className="px-10 py-20 md:px-20 md:py-24">
           <div className="grid lg:grid-cols-12 gap-16">
              {/* Sidebar Meta */}
              <div className="lg:col-span-4 space-y-12">
                 <div className="flex items-center gap-6 p-8 rounded-3xl border border-white/5 bg-white/[0.02]">
                    <div className="h-16 w-16 rounded-full bg-premium-brown/20 flex items-center justify-center">
                       <User size={28} className="text-premium-brown" />
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-premium-brown/60 mb-1">{post.role || 'Lead Analyst'}</p>
                       <p className="text-lg font-bold text-premium-cream">{post.author}</p>
                    </div>
                 </div>

                 <div className="space-y-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-white/20">Institutional Context</h4>
                    <p className="text-sm leading-relaxed text-premium-tan/40 italic">
                      {post.context}
                    </p>
                 </div>
              </div>

              {/* Main Text Content */}
              <div className="lg:col-span-8">
                 <div className="prose prose-invert max-w-none space-y-8">
                    <p className="text-xl leading-relaxed text-premium-tan/70 first-letter:text-7xl first-letter:font-black first-letter:text-premium-brown first-letter:mr-3 first-letter:float-left">
                      {post.content}
                    </p>
                    
                    <div className="h-px w-full bg-linear-to-r from-premium-brown/30 to-transparent" />
                    
                    <h4 className="text-2xl font-black text-premium-cream uppercase tracking-tight">Strategic Implementation</h4>
                    <p className="text-lg leading-relaxed text-premium-tan/50">
                      {post.implementationText}
                    </p>

                    <div className="rounded-3xl border border-white/5 bg-white/[0.01] p-10 italic text-premium-tan/60 border-l-4 border-l-premium-brown">
                      "{post.quote}"
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Footer of Modal */}
        <div className="border-t border-white/5 bg-white/[0.01] p-10 text-center">
           <button 
             onClick={onClose}
             className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-4 text-xs font-black uppercase tracking-widest text-premium-tan transition-all hover:bg-premium-brown hover:text-white"
           >
              Dismiss Briefing
           </button>
        </div>
      </div>
    </div>
  );
};

const FeaturedPost = ({ post, onClick }) => {
  const ref = useReveal();
  return (
    <section ref={ref} className="mx-auto max-w-7xl px-5 pb-24">
       <button 
         onClick={() => onClick(post)}
         className="group relative block w-full text-left overflow-hidden rounded-[48px] border border-white/5 bg-[#0a0a0a] transition-all duration-700 hover:border-premium-brown/30"
       >
          <div className="grid lg:grid-cols-2">
             {/* Image side */}
             <div className="relative h-[400px] lg:h-full overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10 hidden lg:block" />
                <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent z-10 lg:hidden" />
                
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="h-full w-full object-cover"
                />

                <div className="absolute top-8 left-8 z-20 rounded-full bg-premium-brown px-6 py-2 text-[10px] font-black uppercase tracking-widest text-white shadow-2xl">
                   Featured Editorial
                </div>
             </div>

             {/* Content side */}
             <div className="relative z-20 flex flex-col justify-center p-12 lg:p-20">
                <div className="mb-6 flex items-center gap-6 text-[10px] font-black uppercase tracking-widest text-premium-tan/40">
                   <span className="flex items-center gap-2 text-premium-brown"><Calendar size={12} /> {post.date}</span>
                   <span className="flex items-center gap-2"><User size={12} /> {post.author}</span>
                </div>
                <h2 className="mb-6 text-4xl font-black text-premium-cream transition-colors duration-500 group-hover:text-premium-tan lg:text-5xl">
                   {post.title}
                </h2>
                <p className="mb-10 text-lg leading-relaxed text-premium-tan/50">
                   {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm font-black uppercase tracking-widest text-premium-brown">
                   Read Analysis
                   <div className="h-px w-12 bg-premium-brown/30 transition-all duration-500 group-hover:w-20 group-hover:bg-premium-brown" />
                </div>
             </div>
          </div>
       </button>
    </section>
  );
};

const BlogPostCard = ({ post, onClick }) => {
  return (
    <button 
      onClick={() => onClick(post)}
      className="group relative flex flex-col text-left overflow-hidden rounded-[32px] border border-white/5 bg-[#0a0a0a] p-0 transition-all duration-500 hover:border-premium-brown/20 hover:bg-[#0c0c0c]"
    >
       {/* Card Image */}
       <div className="relative h-64 w-full overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] to-transparent z-10" />
          <img 
            src={post.image} 
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-6 left-6 z-20">
             <span className="rounded-full bg-premium-brown px-4 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-white shadow-xl">
               {post.category}
             </span>
          </div>
       </div>

       <div className="flex flex-1 flex-col p-10 pt-6">
          <div className="mb-6 flex items-center justify-between">
             <span className="text-[10px] font-bold text-premium-tan/20 tracking-widest uppercase">{post.date}</span>
             <span className="text-[10px] font-black uppercase tracking-widest text-premium-brown/40">{post.id.toString().padStart(2, '0')}</span>
          </div>

          <h3 className="mb-6 text-2xl font-black text-premium-cream leading-tight transition-all duration-500 group-hover:text-premium-tan">
             {post.title}
          </h3>
          
          <p className="mb-10 text-sm leading-relaxed text-premium-tan/40 line-clamp-2">
             {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
             <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-premium-brown/20 flex items-center justify-center">
                   <User size={10} className="text-premium-brown" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-premium-tan/30">{post.author}</span>
             </div>
             <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-premium-tan/20 transition-all duration-500 group-hover:bg-premium-brown group-hover:text-white group-hover:border-premium-brown group-hover:rotate-45">
                <ArrowRight size={18} />
             </div>
          </div>
       </div>

       {/* Animated Bottom Line */}
       <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-premium-brown to-premium-burgundy transition-all duration-700 ease-in-out group-hover:w-full" />
    </button>
  );
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState(null);
  
  const filteredPosts = blogData.posts.filter(post => 
    activeCategory === 'All' || post.category === activeCategory
  );

  return (
    <>
      <main className={`bg-[#080808] transition-all duration-500 ${selectedPost ? 'blur-md brightness-50' : ''}`}>
        <BlogHero />
        <FeaturedPost post={blogData.featured} onClick={setSelectedPost} />
        
        {/* Category Navigation */}
        <section className="sticky top-20 z-40 w-full border-y border-white/5 bg-[#080808]/80 py-6 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 overflow-x-auto px-5 scrollbar-hide">
            {blogData.categories.map((cat) => (
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

        {/* Blog Grid */}
        <section className="mx-auto max-w-7xl px-5 py-24">
           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} onClick={setSelectedPost} />
              ))}
           </div>
        </section>

        {/* Newsletter / Stay Updated */}
        <section className="w-full bg-[#0a0a0a] px-5 py-24 border-t border-white/5">
           <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 text-4xl font-black text-premium-cream">Institutional Briefing</h2>
              <p className="mb-12 text-xl text-premium-tan/40">Subscribe to receive monthly technical analysis and ERP roadmap updates.</p>
              
              <form className="mx-auto flex max-w-xl flex-col gap-4 sm:flex-row">
                 <input 
                   type="email" 
                   placeholder="name@university.edu"
                   className="flex-1 rounded-full border border-white/10 bg-white/[0.02] px-8 py-5 text-sm text-premium-cream outline-none focus:border-premium-brown/40 transition-all"
                 />
                 <button className="rounded-full bg-premium-brown px-12 py-5 text-xs font-black uppercase tracking-widest text-white shadow-2xl transition-all hover:-translate-y-1 hover:brightness-110">
                   Subscribe
                 </button>
              </form>
           </div>
        </section>
      </main>

      {/* Briefing Modal - Kept outside for absolute clarity */}
      {selectedPost && (
        <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </>
  );
}
