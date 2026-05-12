'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const wordReveal = {
  hidden: { y: '110%' },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 1.6 + i * 0.12 },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-ink"
    >
      {/* ==== DESKTOP LAYOUT ==== */}
      <div className="hidden md:block relative min-h-screen">
        {/* Photo - full height, right side, half-bleed */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-0 right-0 w-[42%] lg:w-[40%] h-full overflow-hidden"
        >
          <motion.div
            style={{ y: photoY, scale: photoScale }}
            className="absolute inset-0"
          >
            <Image
              src="/images/profile.png"
              alt="Putera Buana Gani"
              fill
              className="object-cover"
              style={{ filter: 'grayscale(0.85) contrast(1.05) brightness(0.9) sepia(0.08)' }}
              priority
            />
          </motion.div>
          {/* Vignette gradients to blend with background */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-ink/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/60" />
          {/* Subtle warm glow */}
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 60% 40%, rgba(255,200,140,0.06), transparent 70%)' }} />
        </motion.div>

        {/* Big background "portfolio" text - parallax */}
        <motion.div
          style={{ y: bgTextY }}
          className="absolute inset-0 flex items-end justify-start pointer-events-none opacity-[0.035] pb-20"
        >
          <div className="font-display italic text-[22vw] leading-[0.8] tracking-tighter text-bone whitespace-nowrap -ml-8">
            portfolio
          </div>
        </motion.div>

        {/* Content layer */}
        <div className="relative z-10 min-h-screen flex flex-col justify-between px-12 pt-32 pb-12">
          {/* Top meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex justify-between items-start"
          >
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">
              <div className="text-silver mb-1">— Portfolio / 2026</div>
              <div>Indonesia → Worldwide</div>
            </div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted text-right">
              <div>Independent Studio</div>
            </div>
          </motion.div>

          {/* Headline - overlaps the photo */}
          <div className="max-w-[1600px] mx-auto w-full">
            <h1 className="font-display text-[8.5vw] lg:text-[7.5vw] leading-[0.92] tracking-[-0.04em] text-bone">
              {['Building', 'brands'].map((w, i) => (
                <span key={i} className="inline-block overflow-hidden align-top mr-[0.2em]">
                  <motion.span
                    custom={i}
                    initial="hidden"
                    animate="show"
                    variants={wordReveal}
                    className="inline-block"
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
              <br />
              {['that', 'actually', 'perform.'].map((w, i) => (
                <span key={i} className="inline-block overflow-hidden align-top mr-[0.2em]">
                  <motion.span
                    custom={i + 2}
                    initial="hidden"
                    animate="show"
                    variants={wordReveal}
                    className="inline-block italic font-light text-silver"
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          {/* Bottom row: subhead + CTAs + meta strip */}
          <div className="max-w-[1600px] mx-auto w-full">
            <div className="grid grid-cols-12 gap-8 items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.3 }}
                className="col-span-5"
              >
                <p className="text-base lg:text-lg text-silver leading-relaxed font-light max-w-md">
                  I'm <span className="text-bone">Putera Buana Gani</span> — a freelance digital
                  marketing specialist, designer, and data professional helping ambitious teams
                  turn ideas into results-driven brands.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2.4 }}
                className="col-span-7 flex flex-col items-start lg:items-end gap-6"
              >
                <div className="flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="inline-flex items-center gap-3 bg-bone text-ink px-7 py-4 rounded-full text-[12px] font-mono tracking-[0.2em] uppercase hover:bg-silver transition-colors group"
                  >
                    View Portfolio
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 border border-bone/30 text-bone px-7 py-4 rounded-full text-[12px] font-mono tracking-[0.2em] uppercase hover:bg-bone hover:text-ink transition-all backdrop-blur-sm"
                  >
                    Hire Me
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Meta strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.6 }}
              className="mt-12 pt-8 border-t border-bone/[0.08] grid grid-cols-4 gap-6"
            >
              {[
                { label: 'Specialties', value: 'Marketing · Design · Data' },
                { label: 'Status', value: 'Open to projects', live: true },
                { label: 'Based in', value: 'Indonesia · Worldwide' },
                { label: 'Response', value: 'Within 1–2 hours' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted mb-2">
                    {item.label}
                  </div>
                  <div className="text-bone text-sm flex items-center gap-2">
                    {item.live && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                    {item.value}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ==== MOBILE LAYOUT ==== */}
      <div className="md:hidden relative min-h-screen flex flex-col">
        {/* Top meta bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="relative z-20 px-6 pt-28 pb-4 flex justify-between items-start"
        >
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
            <div className="text-silver mb-1">— Portfolio / 2026</div>
            <div>Indonesia → Worldwide</div>
          </div>
          <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted text-right">
          </div>
        </motion.div>

        {/* Hero photo - full width, large, integrated */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-[55vh] overflow-hidden"
        >
          <Image
            src="/images/profile.png"
            alt="Putera Buana Gani"
            fill
            className="object-cover object-center"
            style={{ filter: 'grayscale(0.85) contrast(1.05) brightness(0.85) sepia(0.08)' }}
            priority
          />
          {/* Heavy gradient to blend into ink */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 50% 30%, rgba(255,200,140,0.08), transparent 60%)' }} />

          {/* Floating big "portfolio" text behind everything */}
          <div className="absolute inset-0 flex items-end justify-center pointer-events-none opacity-[0.08]">
            <div className="font-display italic text-[40vw] leading-[0.7] tracking-tighter text-bone whitespace-nowrap translate-y-[20%]">
              portfolio
            </div>
          </div>

          {/* Name overlay on photo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 2.4 }}
            className="absolute bottom-4 left-6 right-6 flex justify-between items-end"
          >
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-bone/60">
              Putera<br />Buana Gani
            </div>
            <div className="font-mono text-[9px] tracking-[0.3em] uppercase text-bone/60 text-right">
              PBG<br />Studio
            </div>
          </motion.div>
        </motion.div>

        {/* Headline - flows out of photo */}
        <div className="relative z-10 px-6 -mt-8">
          <h1 className="font-display text-[14vw] leading-[0.94] tracking-[-0.03em] text-bone">
            {['Building', 'brands'].map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-top mr-[0.2em]">
                <motion.span
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={wordReveal}
                  className="inline-block"
                >
                  {w}
                </motion.span>
              </span>
            ))}
            <br />
            {['that', 'actually'].map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-top mr-[0.2em]">
                <motion.span
                  custom={i + 2}
                  initial="hidden"
                  animate="show"
                  variants={wordReveal}
                  className="inline-block italic font-light text-silver"
                >
                  {w}
                </motion.span>
              </span>
            ))}
            <br />
            <span className="inline-block overflow-hidden align-top">
              <motion.span
                custom={4}
                initial="hidden"
                animate="show"
                variants={wordReveal}
                className="inline-block italic font-light text-silver"
              >
                perform.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.3 }}
            className="mt-8 text-silver text-[15px] leading-relaxed font-light"
          >
            I'm <span className="text-bone">Putera Buana Gani</span> — a freelance digital marketing
            specialist, designer, and data professional helping ambitious teams turn ideas into
            results-driven brands.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.4 }}
            className="mt-8 flex flex-col gap-3"
          >
            <a
              href="#work"
              className="inline-flex items-center justify-between bg-bone text-ink px-6 py-4 rounded-full text-[11px] font-mono tracking-[0.2em] uppercase group"
            >
              View Portfolio
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-between border border-bone/30 text-bone px-6 py-4 rounded-full text-[11px] font-mono tracking-[0.2em] uppercase"
            >
              Hire Me
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </motion.div>

          {/* Meta strip mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.6 }}
            className="mt-12 pt-8 pb-12 border-t border-bone/[0.08] grid grid-cols-2 gap-6"
          >
            {[
              { label: 'Specialties', value: 'Marketing · Design · Data' },
              { label: 'Status', value: 'Open to projects', live: true },
              { label: 'Based in', value: 'Indonesia · Worldwide' },
              { label: 'Response', value: 'Within 1–2 hours' },
            ].map((item, i) => (
              <div key={i}>
                <div className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted mb-2">
                  {item.label}
                </div>
                <div className="text-bone text-[13px] flex items-center gap-2">
                  {item.live && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                  {item.value}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
