"use client";

import React from 'react';
import productData from '@/data/product.json';
import siteConfig from '@/data/siteConfig.json';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  Cloud,
  Server,
  Zap,
  ChevronRight,
  Database,
  Layout,
  Cpu,
  ShieldAlert,
  BarChart4,
  Users2,
  Globe2,
  GraduationCap,
  CreditCard,
  MessageSquare,
  Target
} from 'lucide-react';
import { useReveal } from '@/app/hooks/useReveal';
import Link from 'next/link';

/* ── Reusable Section Heading ── */
const SectionHeading = ({ title, subtitle, centered = true, dark = false }) => (
  <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
    <h2 className={`relative mb-6 inline-block text-4xl font-extrabold ${dark ? 'text-premium-cream' : 'text-premium-cream'} sm:text-3xl after:absolute after:bottom-[-10px] ${centered ? 'after:left-1/2 after:-translate-x-1/2' : 'after:left-0'} after:h-1.5 after:w-24 after:rounded-full after:bg-linear-to-r after:from-premium-tan after:to-premium-brown after:content-['']`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-8 max-w-3xl text-lg text-premium-tan opacity-80 ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>
    )}
  </div>
);

/* ═══════════════════════════════
   HERO
   ═══════════════════════════════ */
const ProductHero = () => {
  return (
    <section className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-5 pt-30 pb-28 text-center text-premium-cream">
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Square Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Animated Glows */}
        <div className="absolute top-1/4 left-1/4 h-[40vw] w-[40vw] animate-pulse-slow rounded-full bg-premium-burgundy/15 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[30vw] w-[30vw] animate-drift rounded-full bg-premium-brown/15 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-premium-brown/30 bg-premium-brown/10 px-5 py-2 text-sm font-bold tracking-wide text-premium-tan uppercase">
          <Sparkles size={16} className="text-premium-cream" />
          The Industry Standard for Campus Automation
        </div>

        <h1 className="mb-5 py-4 bg-gradient-to-br from-white via-premium-cream to-premium-brown bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl lg:text-8xl">
          {productData.hero.title}
        </h1>
        <p className="mx-auto mb-14 max-w-4xl text-xl font-light leading-relaxed text-premium-tan/80 md:text-2xl">
          {productData.hero.subtitle}
        </p>

        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
          <Link
            href="/#demo-form"
            className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-premium-burgundy to-premium-brown px-12 py-5 text-lg font-bold text-white shadow-[0_0_50px_rgba(160,30,40,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_70px_rgba(160,30,40,0.6)]"
          >
            Get Expert Walkthrough
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   WHAT IS & WHY US (Detailed Intro)
   ═══════════════════════════════ */
const IntroSection = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="flex w-full flex-col items-center bg-[#0c0c0c] px-5 py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-2">
        {/* Left: Purpose & Definition */}
        <div className="flex flex-col gap-12">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-premium-brown/10 px-4 py-1.5 text-xs font-bold tracking-widest text-premium-brown uppercase border border-premium-brown/20">
              Platform Philosophy
            </div>
            <h2 className="text-4xl font-extrabold text-premium-cream md:text-6xl leading-tight">
              {productData.whatIs.title.split('?')[0]}? <br />
            </h2>
            <p className="text-xl leading-relaxed text-premium-tan/90 max-w-xl">
              {productData.whatIs.description}
            </p>
            <div className="relative rounded-[32px] border border-white/5 bg-[#0e1214] p-8 shadow-2xl">
              <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-premium-brown flex items-center justify-center text-white shadow-lg">
                <Sparkles size={20} />
              </div>
              <p className="text-lg leading-relaxed text-premium-tan italic">
                "{productData.whatIs.educationErpDef}"
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[40px] border border-white/5 bg-[#0c1012] p-10 transition-all duration-700 hover:border-premium-burgundy/40 shadow-2xl">
            {/* Background Decorative Element */}
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-premium-burgundy/10 blur-[60px] transition-all duration-700 group-hover:bg-premium-burgundy/30" />
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] grayscale transition-all duration-700 group-hover:opacity-10 group-hover:grayscale-0">
              <Globe2 size={180} className="text-premium-burgundy" />
            </div>

            <div className="relative z-10">
              <div className="mb-10 flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-premium-brown/20 text-premium-cream border border-premium-brown/40 transition-all duration-500 group-hover:bg-premium-brown group-hover:text-white group-hover:scale-110 shadow-[0_0_20px_rgba(119,73,54,0.2)]">
                  <Zap size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-premium-cream uppercase tracking-tight">{productData.whyUs.title}</h3>
                  <p className="text-xs font-bold text-premium-tan/50 uppercase tracking-widest">Digital Excellence Since 2004</p>
                </div>
              </div>

              <p className="text-xl leading-relaxed text-premium-tan/90 border-l-2 border-premium-burgundy/40 pl-8">
                {productData.whyUs.description}
              </p>

            </div>
          </div>
        </div>

        {/* Right: Infographic Sections */}
        <div className="flex flex-col gap-10">
          {/* 1. Student Lifecycle Infographic */}
          <div className="rounded-[40px] border border-white/5 bg-[#0a0a0a] p-10 shadow-2xl">
            <h3 className="mb-10 text-2xl font-bold text-premium-cream flex items-center gap-3">
              <Users2 size={24} className="text-premium-brown" />
              {productData.lifecycleMastery.title}
            </h3>

            {/* Vertical Infographic Timeline */}
            <div className="space-y-0">
              {productData.lifecycleMastery.steps.map((step, idx) => {
                const stepIcons = [GraduationCap, Layout, Globe2, Target];
                const Icon = stepIcons[idx] || CheckCircle2;
                return (
                  <div key={idx} className="group flex gap-8 pb-10 last:pb-0">
                    <div className="flex flex-col items-center">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-premium-tan border border-white/10 transition-all duration-500 group-hover:bg-premium-brown group-hover:text-white group-hover:scale-110">
                        <Icon size={20} />
                      </div>
                      {idx !== productData.lifecycleMastery.steps.length - 1 && <div className="h-full w-[1px] bg-white/10 mt-4 group-hover:bg-premium-brown/30" />}
                    </div>
                    <div className="pt-1">
                      <h4 className="text-lg font-bold text-premium-cream mb-1 transition-colors group-hover:text-premium-tan">{step.title}</h4>
                      <p className="text-sm text-premium-tan/60 leading-relaxed max-w-sm">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Administrative Excellence Infographic Grid */}
          <div className="rounded-[40px] bg-linear-to-br from-premium-brown/10 to-transparent border border-premium-brown/20 p-10">
            <h3 className="mb-8 text-2xl font-bold text-premium-cream flex items-center gap-3">
              <Cpu size={24} className="text-premium-brown" />
              {productData.operationsExcellence.title}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {productData.operationsExcellence.pillars.map((item, idx) => {
                const pillarIcons = [ShieldCheck, CreditCard, Database, Layout];
                const Icon = pillarIcons[idx] || CheckCircle2;
                return (
                  <div key={idx} className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-black/40 p-6 transition-all hover:border-premium-brown/40 hover:-translate-y-1">
                    <Icon size={20} className="text-premium-brown" />
                    <span className="text-sm font-bold text-premium-tan">{item.label}</span>
                  </div>
                );
              })}
            </div>
            <p className="mt-8 text-sm text-premium-tan/50 italic text-center">
              {productData.operationsExcellence.footer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   WHY DO YOU NEED ERP? (Problems)
   ═══════════════════════════════ */
const ProblemsSection = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="flex w-full flex-col items-center bg-premium-black px-5 py-32">
      <div className="mx-auto w-full max-w-5xl">
        {/* Header */}
        <div className="mb-24 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-premium-burgundy/40 bg-premium-burgundy/20 px-4 py-1.5 text-xs font-bold tracking-widest text-premium-cream uppercase">
            The Reality of Manual Ops
          </div>
          <h2 className="text-5xl font-extrabold text-premium-cream md:text-7xl leading-tight mb-8">
            Why you need <br />
            <span className="bg-gradient-to-r from-premium-tan to-premium-brown bg-clip-text text-transparent">Education ERP</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-premium-tan opacity-60">
            {productData.whyNeed.description}
          </p>
        </div>

        {/* Vertical Interactive List (No Cards) */}
        <div className="flex flex-col">
          {productData.whyNeed.challenges?.map((item, i) => (
            <div
              key={i}
              tabIndex={0}
              className="group relative flex flex-col items-start gap-6 border-t border-white/10 py-12 transition-all duration-500 first:border-t-0 hover:px-8 focus:px-8 focus:outline-none cursor-pointer"
            >
              {/* Background Highlight on Hover */}
              <div className="absolute inset-0 -z-10 bg-linear-to-r from-premium-burgundy/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus:opacity-100" />

              <div className="flex w-full items-center justify-between gap-10">
                <div className="flex items-center gap-10">
                  {/* Large Index Number */}
                  <span className="text-4xl font-black text-white/20 transition-colors duration-500 group-hover:text-premium-cream group-focus:text-premium-cream md:text-6xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Issue Text */}
                  <h3 className="text-2xl font-bold text-premium-cream transition-all duration-500 group-hover:translate-x-2 group-focus:translate-x-2 md:text-3xl">
                    {item.problem}
                  </h3>
                </div>

                {/* Status Indicator */}
                <div className="hidden shrink-0 items-center gap-3 rounded-full border border-premium-burgundy/50 bg-premium-cream px-5 py-2.5 text-xs font-bold text-premium-burgundy shadow-[0_0_15px_rgba(160,30,40,0.2)] transition-all duration-500 group-hover:bg-premium-burgundy group-focus:bg-premium-burgundy group-hover:text-white group-focus:text-white group-hover:shadow-[0_0_25px_rgba(160,30,40,0.4)] group-focus:shadow-[0_0_25px_rgba(160,30,40,0.4)] md:flex">
                  <ShieldAlert size={14} className="text-premium-burgundy transition-colors duration-500 group-hover:text-white group-focus:text-white" />
                  CRITICAL HURDLE
                </div>
              </div>

              {/* Detail / Solution reveal - Deep Technical Explanation */}
              <div className="max-h-[500px] md:max-h-0 overflow-hidden transition-all duration-700 md:group-hover:max-h-[500px] md:group-focus:max-h-[500px]">
                <div className="pl-[7rem] md:pl-[10rem] pt-2 flex flex-col gap-4">
                  {/* Primary Solution */}
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded bg-premium-brown text-premium-black text-[10px] font-black uppercase tracking-tighter">Fix</span>
                    <p className="text-lg font-bold text-premium-cream/90 italic">
                      {item.solution}
                    </p>
                  </div>
                  {/* Deeper Detail */}
                  <div className="flex flex-col gap-1 border-l border-premium-brown/30 pl-4 py-1">
                    <span className="text-[10px] font-bold text-premium-tan uppercase tracking-widest opacity-50 mb-1">In-Deep Explanation</span>
                    <p className="text-base leading-relaxed text-premium-tan/80 max-w-3xl">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>

              {/* Animated Progress Line */}
              <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-premium-burgundy to-premium-brown transition-all duration-700 group-hover:w-full group-focus:w-full" />
            </div>
          ))}

          {/* Bottom Callout */}
          <div className="mt-12 flex flex-col items-center justify-between gap-8 border-t border-premium-brown/20 pt-12 md:flex-row">
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold text-premium-cream">Stop Wrestling with Legacy Data.</h4>
              <p className="text-premium-tan/50">Your institution deserves a modern, digital-first foundation.</p>
            </div>
            <Link
              href="/#demo-form"
              className="group flex items-center gap-3 rounded-full bg-linear-to-r from-premium-burgundy to-premium-brown px-10 py-5 text-lg font-bold text-white shadow-[0_15px_30px_rgba(160,30,40,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(160,30,40,0.5)]"
            >
              Modernize Today
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   BENEFITS (Detailed)
   ═══════════════════════════════ */
const benefitIcons = [Zap, ShieldCheck, CreditCard, Cpu, MessageSquare];

const BenefitsSection = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="flex w-full flex-col items-center bg-[#0c0c0c] px-5 py-32">
      <SectionHeading title={productData.benefits.title} subtitle="Transforming institutional data into strategic assets." />

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        {productData.benefits.points.map((benefit, i) => {
          const Icon = benefitIcons[i] || BarChart4;
          return (
            <div
              key={i}
              className="group relative grid gap-10 rounded-[40px] border border-white/5 bg-white/[0.01] p-10 transition-all duration-700 hover:bg-white/[0.02] lg:grid-cols-[1fr_2fr] lg:items-center overflow-hidden"
            >
              {/* Animated Border Glow (Travels on hover) */}
              <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <div className="absolute inset-[-2px] bg-linear-to-r from-transparent via-premium-brown/40 to-transparent animate-border-flow" />
              </div>

              {/* Inner Content - Z-indexed above glow */}
              <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-premium-brown/10 text-premium-brown transition-all duration-700 group-hover:bg-premium-brown group-hover:text-white group-hover:shadow-[0_0_30px_rgba(200,160,130,0.4)] group-hover:-translate-y-2 group-hover:rotate-6">
                  <Icon size={40} className="animate-float" />
                </div>
                <h3 className="text-3xl font-extrabold text-premium-cream md:text-4xl transition-all duration-500 group-hover:translate-x-2">
                  {benefit.title}
                </h3>
              </div>

              <div className="relative z-10">
                <p className="text-xl leading-relaxed text-premium-tan/80 transition-all duration-500 group-hover:text-premium-cream">
                  {benefit.desc}
                </p>
                {/* Visual Accent */}
                <div className="mt-6 h-1 w-0 bg-linear-to-r from-premium-brown to-transparent transition-all duration-1000 group-hover:w-full" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   CLOUD BENEFITS GRID
   ═══════════════════════════════ */
const CloudBenefits = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="flex w-full flex-col items-center bg-premium-black px-5 py-24">
      <div className="mx-auto w-full max-w-7xl rounded-[50px] border border-white/10 bg-linear-to-br from-white/[0.02] to-white/[0.05] p-12 md:p-20 shadow-2xl relative overflow-hidden">
        {/* Glow */}
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-premium-brown/5 blur-[100px]" />

        <SectionHeading title="Benefits of Cloud ERP" subtitle="Modern scalability meets robust performance." />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productData.cloudBenefits.map((item, i) => (
            <div key={i} className="flex items-center gap-4 text-lg font-semibold text-premium-cream/80">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-premium-brown/20 text-premium-brown">
                <CheckCircle2 size={16} />
              </div>
              {item}
            </div>
          ))}
        </div>

        {/* Deployment Split */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 border-t border-white/10 pt-20">
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-premium-brown/5 border border-premium-brown/10">
            <Cloud size={48} className="text-premium-brown mb-6" />
            <h4 className="text-2xl font-bold text-premium-cream mb-4">{productData.deployment.saas.title}</h4>
            <p className="text-premium-tan/80 leading-relaxed">{productData.deployment.saas.description}</p>
          </div>
          <div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10">
            <Server size={48} className="text-premium-tan mb-6" />
            <h4 className="text-2xl font-bold text-premium-cream mb-4">{productData.deployment.onPremise.title}</h4>
            <p className="text-premium-tan/80 leading-relaxed">{productData.deployment.onPremise.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   MODULES & FEATURES (The Full List)
   ═══════════════════════════════ */
const ComprehensiveSpecs = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="flex w-full flex-col items-center bg-[#0c0c0c] px-5 py-24">
      <div className="mx-auto grid w-full max-w-7xl gap-20 lg:grid-cols-2">
        {/* Modules List */}
        <div>
          <SectionHeading title="System Modules" subtitle="18+ core modules integrated in one platform." centered={false} />
          <div className="grid gap-4 sm:grid-cols-2">
            {productData.modules.map((m, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] text-premium-cream font-medium transition-all hover:bg-white/[0.05] hover:border-premium-brown/30">
                <Layout size={18} className="text-premium-brown shrink-0" />
                {m}
              </div>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div>
          <SectionHeading title="Top Notch Features" subtitle="Everything you need for full digital transformation." centered={false} />
          <div className="grid gap-4">
            {productData.features.map((f, i) => (
              <div key={i} className="flex items-center gap-5 p-5 rounded-2xl border border-premium-brown/20 bg-premium-brown/5 text-premium-cream font-bold group">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-premium-brown text-white transition-all group-hover:scale-110">
                  <CheckCircle2 size={20} />
                </span>
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   WHY CHOOSE US (Scale)
   ═══════════════════════════════ */
const WhyChooseScale = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="flex w-full flex-col items-center bg-premium-black px-5 py-24 text-center">
      <SectionHeading title="Why Choose Us?" subtitle="Proven at scale, trusted by the best." />

      <div className="mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {[
            { val: productData.scale.universities, label: "Universities" },
            { val: productData.scale.institutes, label: "Institutes" },
            { val: productData.scale.students, label: "Students" },
            { val: productData.scale.faculties, label: "Faculties" },
            { val: productData.scale.teachers, label: "Teachers" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center p-8 rounded-3xl border border-premium-brown/15 bg-white/[0.02] transition-all hover:bg-premium-brown/10">
              <div className="text-4xl font-extrabold text-premium-cream mb-2 md:text-5xl">{stat.val}</div>
              <div className="text-xs font-bold text-premium-tan uppercase tracking-widest opacity-60">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[40px] border border-premium-burgundy/20 bg-linear-to-br from-premium-burgundy/10 to-transparent p-12">
          <h3 className="text-2xl font-bold text-premium-cream mb-6">Complete Institutional Solution</h3>
          <p className="text-lg text-premium-tan/80 max-w-3xl mx-auto leading-relaxed">
            Automation for the Admission Process, Enrollment, Fees, Exams, Results, Certification, HR & Payroll.
            Including entrance test support via OMR & Online modes with 128-bit SSL secured systems.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   CTA
   ═══════════════════════════════ */
const ProductCTA = () => {
  const ref = useReveal();
  return (
    <section ref={ref} className="relative flex w-full flex-col items-center bg-[#0c0c0c] px-5 py-28 text-center">
      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-8 bg-gradient-to-br from-white via-premium-cream to-premium-brown bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
          {productData.cta?.title}
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-xl text-premium-tan opacity-80">
          {productData.cta?.subtitle}
        </p>
        <Link
          href="/#demo-form"
          className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-linear-to-br from-premium-brown to-premium-burgundy px-14 py-6 text-xl font-bold text-premium-cream shadow-[0_20px_40px_rgba(60,0,13,0.4)] transition-all duration-300 hover:-translate-y-1 hover:brightness-125 hover:shadow-[0_30px_60px_rgba(60,0,13,0.6)] mx-auto w-fit"
        >
          {productData.cta?.primaryButton}
          <ArrowRight size={24} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
};

/* ═══════════════════════════════
   PRODUCTS PAGE
   ═══════════════════════════════ */
export default function ProductsPage() {
  return (
    <main style={{ backgroundColor: '#0c0c0c', color: '#F5D0C5', minHeight: '100vh' }}>
      <ProductHero />
      <IntroSection />
      <ProblemsSection />
      <BenefitsSection />
      <CloudBenefits />
      <ComprehensiveSpecs />
      <WhyChooseScale />
      <ProductCTA />
    </main>
  );
}
