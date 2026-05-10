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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden"
    >
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]"
      >
        <div className="font-display italic text-[28vw] md:text-[22vw] leading-none tracking-tighter text-bone whitespace-nowrap">
          portfolio
        </div>
      </motion.div>

      <div className="relative z-10 max-w-[1600px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex justify-between items-start mb-16 md:mb-24"
        >
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted">
            <div className="text-silver mb-1">— Portfolio / 2026</div>
            <div>Indonesia → Worldwide</div>
          </div>
          <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted text-right hidden md:block">
            <div className="text-silver mb-1">N 06° 55′ 11″</div>
            <div>E 106° 55′ 36″</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <div className="col-span-12 md:col-span-9">
            <h1 className="font-display text-[14vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.92] tracking-[-0.04em] text-bone">
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
              {['that actually', 'perform.'].map((w, i) => (
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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-3 flex md:justify-end items-end mt-6 md:mt-0"
          >
            <div className="relative w-32 h-40 md:w-full md:h-56 lg:h-72 overflow-hidden rounded-sm">
              <Image
                src="/images/profile.png"
                alt="Putera Buana Gani"
                fill
                className="object-cover transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 font-mono text-[9px] tracking-[0.25em] uppercase text-bone/80">
                PBG
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8 mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.3 }}
            className="col-span-12 md:col-span-5"
          >
            <p className="text-base md:text-lg text-silver leading-relaxed font-light max-w-md">
              I'm <span className="text-bone">Putera Buana Gani</span> — a freelance digital
              marketing specialist, designer, and data professional helping ambitious teams turn
              ideas into results-driven brands.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.4 }}
            className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col md:items-end gap-4"
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
                className="inline-flex items-center gap-3 border border-bone/30 text-bone px-7 py-4 rounded-full text-[12px] font-mono tracking-[0.2em] uppercase hover:bg-bone hover:text-ink transition-all"
              >
                Hire Me
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="mt-20 md:mt-32 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Specialties', value: 'Marketing · Design · Data' },
            { label: 'Status', value: 'Open to projects', live: true },
            { label: 'Based in', value: 'Indonesia · Working globally' },
            { label: 'Response', value: 'Within 1–2 hours' },
          ].map((item, i) => (
            <div key={i}>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted mb-2">
                {item.label}
              </div>
              <div className="text-bone text-sm flex items-center gap-2">
                {item.live && <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />}
                {item.value}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
