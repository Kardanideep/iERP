"use client";

import React from 'react';
import aboutData from '@/data/about.json';
import siteConfig from '@/data/siteConfig.json';
import { Target, Zap, Shield, Users, Globe, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';
import Link from 'next/link';

const iconMap = {
  'target': Target,
  'zap': Zap,
  'shield': Shield,
  'users': Users,
  'globe': Globe,
  'sparkles': Sparkles,
};

/* ── Reusable Section Heading ── */
const SectionHeading = ({ title, subtitle }) => (
  <div className="mb-20 text-center">
    <h2 className="relative mb-4 inline-block text-4xl font-extrabold text-premium-cream sm:text-3xl after:absolute after:bottom-[-10px] after:left-1/2 after:h-1 after:w-20 after:-translate-x-1/2 after:rounded-sm after:bg-linear-to-r after:from-premium-tan after:to-premium-brown after:content-['']">
      {title}
    </h2>
    {subtitle && (
      <p className="mx-auto mt-8 max-w-xl text-premium-tan opacity-80">{subtitle}</p>
    )}
  </div>
);

/* ═══════════════════════════════
   HERO
   ═══════════════════════════════ */
const AboutHero = () => {
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
    <section className="relative flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-[#080808] px-5 pt-32 pb-20 text-center text-premium-cream">
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

      <div className="relative z-10 mx-auto max-w-6xl">
        <h1 className="mb-10 text-5xl font-black tracking-tight text-premium-cream md:text-9xl leading-[0.9] text-gradient">
          Our Legacy of <br />
          <span className="opacity-40">Innovation.</span>
        </h1>
        
        <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-premium-tan/60 md:text-2xl">
          {aboutData.hero.subtitle}
        </p>
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   STATS BAR
   ═══════════════════════════════ */
const StatsBar = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="w-full bg-[#0c0c0c] px-5 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4 gap-8 sm:gap-4">
        {aboutData.stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="text-4xl font-extrabold text-premium-cream md:text-5xl">{stat.value}</div>
            <div className="mt-2 text-sm font-medium text-premium-tan opacity-70">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   OUR STORY
   ═══════════════════════════════ */
const OurStory = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="flex w-full flex-col items-center bg-premium-black px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={aboutData.story.title} />
        <div className="flex flex-col gap-6">
          {aboutData.story.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-premium-tan opacity-90">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   MISSION & VISION
   ═══════════════════════════════ */
const MissionVision = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="flex w-full flex-col items-center bg-[#0c0c0c] px-5 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="glass-premium flex flex-col gap-6 rounded-3xl p-8 md:p-10 transition-all duration-400 hover:-translate-y-1 hover:border-premium-tan hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-linear-to-br from-premium-brown to-premium-burgundy text-premium-cream shadow-lg">
            <Target className="h-6 w-6 md:h-7 md:w-7" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-premium-cream">{aboutData.mission.title}</h3>
          <p className="text-base md:text-lg leading-relaxed text-premium-tan opacity-90">{aboutData.mission.description}</p>
        </div>
        {/* Vision */}
        <div className="glass-premium flex flex-col gap-6 rounded-3xl p-8 md:p-10 transition-all duration-400 hover:-translate-y-1 hover:border-premium-tan hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-linear-to-br from-premium-brown to-premium-burgundy text-premium-cream shadow-lg">
            <Globe className="h-6 w-6 md:h-7 md:w-7" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-premium-cream">{aboutData.vision.title}</h3>
          <p className="text-base md:text-lg leading-relaxed text-premium-tan opacity-90">{aboutData.vision.description}</p>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   OUR VALUES
   ═══════════════════════════════ */
const OurValues = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="flex w-full flex-col items-center bg-premium-black px-5 py-24">
      <SectionHeading title="Our Values" subtitle="The principles that guide everything we build." />
      <div className="grid w-full max-w-7xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {aboutData.values.map((value, i) => {
          const IconComponent = iconMap[value.icon];
          return (
            <div
              key={i}
              className="group glass-premium flex flex-col gap-6 rounded-3xl p-10 transition-all duration-400 hover:-translate-y-2 hover:border-premium-tan hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-premium-brown to-premium-burgundy text-premium-cream shadow-lg transition-transform duration-400 group-hover:scale-110 group-hover:rotate-3">
                {IconComponent && <IconComponent size={32} />}
              </div>
              <h3 className="text-2xl font-bold text-premium-cream transition-colors duration-400 group-hover:text-premium-tan">
                {value.title}
              </h3>
              <p className="text-lg leading-relaxed text-premium-tan opacity-90">{value.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   TIMELINE
   ═══════════════════════════════ */
const Timeline = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="flex w-full flex-col items-center bg-[#0c0c0c] px-5 py-24">
      <SectionHeading title="Our Journey" subtitle="From a 5-person startup to a global platform — here's how we got here." />
      <div className="relative mx-auto w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-premium-brown/30 sm:left-6" />

        <div className="flex flex-col gap-16">
          {aboutData.timeline.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className="relative flex items-start sm:pl-16">
                {/* Dot */}
                <div className="absolute left-1/2 top-1 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-premium-brown/30 bg-[#0c1012] text-xs font-bold text-premium-cream shadow-xl sm:left-6">
                  <span className="text-[0.65rem] font-extrabold tracking-tight">{item.year}</span>
                </div>

                {/* Content Card */}
                <div
                  className={`glass-premium w-[calc(50%-40px)] rounded-2xl p-8 transition-all duration-400 hover:-translate-y-1 hover:border-premium-tan sm:w-full ${
                    isLeft ? 'mr-auto text-right sm:text-left' : 'ml-auto text-left'
                  }`}
                >
                  <h3 className="mb-2 text-xl font-bold text-premium-cream">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-premium-tan opacity-80">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   TEAM
   ═══════════════════════════════ */
const Team = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="flex w-full flex-col items-center bg-premium-black px-5 py-24">
      <SectionHeading title="Meet the Team" subtitle="The people behind the platform." />
      <div className="grid w-full max-w-6xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {aboutData.team.map((member, i) => (
          <div
            key={i}
            className="group glass-premium flex flex-col items-center gap-5 rounded-3xl p-10 text-center transition-all duration-400 hover:-translate-y-2 hover:border-premium-tan hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Avatar */}
            <div
              className="h-24 w-24 rounded-full border-4 border-premium-brown/30 bg-premium-brown bg-cover bg-center shadow-xl transition-all duration-400 group-hover:border-premium-tan group-hover:scale-105"
              style={{ backgroundImage: `url(https://i.pravatar.cc/200?img=${member.avatar + 10})` }}
            />
            <div>
              <h3 className="text-lg font-bold text-premium-cream">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold text-premium-brown">{member.role}</p>
            </div>
            <p className="text-sm leading-relaxed text-premium-tan opacity-80">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   CTA
   ═══════════════════════════════ */
const AboutCTA = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="flex w-full flex-col items-center bg-[#0c0c0c] px-5 py-24 text-center">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-6 text-4xl font-extrabold text-premium-cream sm:text-3xl">
          Ready to Transform Your Business?
        </h2>
        <p className="mb-10 text-lg text-premium-tan opacity-80">
          Join 500+ enterprises already using {siteConfig.companyName} to streamline their operations.
        </p>
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full bg-linear-to-br from-premium-brown to-premium-burgundy px-8 py-4 text-base font-bold text-premium-cream shadow-[0_10px_20px_rgba(60,0,13,0.3)] transition-all duration-300 hover:-translate-y-1 hover:brightness-125 hover:shadow-[0_15px_30px_rgba(60,0,13,0.5)]"
          >
            Get Started
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="flex items-center gap-2 rounded-full border border-premium-brown/50 bg-white/5 px-8 py-4 text-base font-bold text-premium-tan backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-premium-tan hover:text-premium-cream"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   ABOUT PAGE
   ═══════════════════════════════ */
export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#0c0c0c', color: '#F5D0C5', minHeight: '100vh' }}>
      <AboutHero />
      <StatsBar />
      <OurStory />
      <MissionVision />
      <OurValues />
      <Timeline />
      <Team />
      <AboutCTA />
    </main>
  );
}
