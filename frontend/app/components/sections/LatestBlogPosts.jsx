"use client";

import React from 'react';
import blogData from '@/data/blog.json';
import { useReveal } from '@/app/hooks/useReveal';
import { ArrowRight } from 'lucide-react';

const LatestBlogPosts = () => {
  const revealRef = useReveal();

  return (
    <section className="flex w-full flex-col items-center bg-[#0c0c0c] px-5 py-24" ref={revealRef}>
      <div className="mb-16 text-center">
        <h2 className="relative mb-4 inline-block text-4xl font-extrabold text-premium-cream sm:text-5xl after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded-sm after:bg-linear-to-r after:from-premium-tan after:to-premium-brown after:content-['']">
          Latest from our Blog
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-premium-tan opacity-80">
          Insights, tips, and updates from our expert team.
        </p>
      </div>

      <div className="grid w-full max-w-7xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {blogData.posts.slice(0, 4).map((post) => (
          <article 
            key={post.id} 
            tabIndex={0}
            className="group relative flex flex-col overflow-hidden rounded-[32px] border border-white/5 bg-[#0a0a0a] transition-all duration-700 hover:-translate-y-3 focus:-translate-y-3 hover:border-premium-brown/30 focus:border-premium-brown/30 shadow-2xl focus:outline-none cursor-pointer"
          >
            {/* Bottom Sweep Line */}
            <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-premium-brown to-premium-burgundy transition-all duration-1000 group-hover:w-full group-focus:w-full" />

            <div className="relative h-56 w-full overflow-hidden">
              <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-all duration-1000" />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
            </div>

            <div className="relative z-10 flex flex-col p-8">
              <div className="mb-4 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-premium-brown/80">
                <span>{post.date}</span>
                <span className="h-1 w-1 rounded-full bg-premium-brown/40" />
                <span>{post.author}</span>
              </div>
              
              <div className="relative mb-4">
                <h3 className="text-xl font-black leading-tight text-premium-cream transition-colors duration-500 group-hover:text-premium-tan group-focus:text-premium-tan">
                  {post.title}
                </h3>
                {/* Interactive Title Underline */}
                <div className="absolute -bottom-2 left-0 h-0.5 w-0 bg-premium-brown/40 transition-all duration-500 group-hover:w-20 group-focus:w-20" />
              </div>

              <p className="mb-8 text-sm leading-relaxed text-premium-tan/60 line-clamp-2 transition-colors duration-500 group-hover:text-premium-tan/80 group-focus:text-premium-tan/80">
                {post.excerpt}
              </p>

              <div className="mt-auto flex items-center gap-2 text-xs font-black uppercase tracking-widest text-premium-cream transition-all duration-300 group-hover:gap-4 group-focus:gap-4 group-hover:text-premium-brown group-focus:text-premium-brown">
                Read Entry <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 group-focus:translate-x-1" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default LatestBlogPosts;
