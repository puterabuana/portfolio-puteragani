'use client';

import Reveal from '../components/Reveal';

export default function About() {
  return (
    <section id="about" className="relative px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-14 md:mb-16">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted mb-3">
              — 01 / About
            </div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-silver">
              The Person
              <br />
              Behind The Work
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-9" delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em] text-bone">
              A new generation freelancer obsessed with{' '}
              <span className="italic font-light text-silver">
                craft, clarity, and outcomes that move the needle.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8">
          <Reveal className="col-span-12 md:col-span-5 md:col-start-4 space-y-6 text-silver leading-relaxed">
            <p>
              I work at the intersection of{' '}
              <span className="text-bone">digital marketing, visual design, and data</span>. After
              completing certifications from Google, Microsoft, and Unilever, I now help startups,
              small businesses, and personal brands across the globe build presence that converts.
            </p>
            <p>
              My approach is simple: understand the audience, design with intent, measure
              everything, then iterate. No fluff, no inflated promises — just clean execution and
              clear communication every step of the way.
            </p>
            <p>
              I'm at the early stage of my freelance career, which means you get someone fully
              invested, fast on replies, and willing to go the extra mile to make sure your project
              lands exactly where it should.
            </p>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-3 md:col-start-10 mt-10 md:mt-0 space-y-8" delay={0.2}>
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted mb-3">
                Focus Areas
              </div>
              <ul className="space-y-2 text-bone text-sm">
                {['Digital Marketing', 'Graphic Design', 'Data Entry & Analysis', 'Brand Strategy', 'Visual Communication'].map(
                  (f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-bone rounded-full" />
                      {f}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted mb-3">
                Toolkit
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Figma', 'Photoshop', 'GA4', 'Meta Ads', 'Notion', 'Excel', 'Canva'].map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-bone/15 text-silver"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
