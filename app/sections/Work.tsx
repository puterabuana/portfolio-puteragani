'use client';

import Reveal from '../components/Reveal';
import { projects } from '../lib/projects';
import { visualMap } from '../components/ProjectVisuals';

export default function Work() {
  return (
    <section id="work" className="relative px-6 md:px-12 py-32 md:py-48 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-20">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted mb-3">
              — 03 / Selected Work
            </div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-silver">
              Concepts &
              <br />
              Case Studies
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-9" delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em] text-bone">
              A curated set of{' '}
              <span className="italic font-light text-silver">
                conceptual projects, brand explorations, and case studies
              </span>{' '}
              built to demonstrate craft.
            </h2>
            <p className="mt-6 text-muted text-sm font-mono max-w-xl">
              Note: Several projects below are concept and exploration work created to showcase
              capability. Each one solves a real brief with measurable thinking behind it.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {projects.map((p, i) => {
            const Visual = visualMap[p.visualKey];
            return (
              <Reveal
                key={p.id}
                delay={(i % 2) * 0.1}
                className={`project-card group cursor-pointer ${
                  p.span === 'wide' ? 'col-span-12 md:col-span-7' : 'col-span-12 md:col-span-5'
                }`}
              >
                <div className="relative overflow-hidden rounded-sm bg-smoke aspect-[16/10]">
                  <Visual />
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-bone/10 backdrop-blur text-bone">
                      {p.label}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-bone/10 backdrop-blur flex items-center justify-center">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-bone">
                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-4 mt-5">
                  <div className="col-span-12 md:col-span-7">
                    <h3 className="font-display text-2xl md:text-3xl text-bone">{p.title}</h3>
                    <p className="text-silver mt-2 text-sm leading-relaxed">{p.description}</p>
                  </div>
                  <div className="col-span-12 md:col-span-5 md:text-right">
                    <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted mb-1">
                      {p.category}
                    </div>
                    <div className="text-bone text-sm">
                      {p.result}
                      <br />
                      <span className="text-muted">{p.resultNote}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
