'use client';

import Image from 'next/image';
import Reveal from '../components/Reveal';
import { projects, type Project } from '../lib/projects';

const labelStyle: Record<Project['accent'], string> = {
  client: 'bg-emerald-400/15 text-emerald-300',
  owned: 'bg-bone/15 text-bone',
  neutral: 'bg-bone/[0.07] text-silver',
};

export default function Work() {
  return (
    <section id="work" className="relative px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-14 md:mb-16">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted mb-3">
              — 03 / Selected Work
            </div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-silver">
              Real Builds &
              <br />
              SEO Case Studies
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-9" delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em] text-bone">
              Websites I build from the ground up —{' '}
              <span className="italic font-light text-silver">
                then rank with independently audited SEO.
              </span>
            </h2>
            <p className="mt-6 text-muted text-sm font-mono max-w-2xl leading-relaxed">
              Real businesses, real domains, built and ranked end-to-end. Most are self-initiated
              builds — created to prove the full process — and every one is live, with scores from
              third-party tools (Rank Math, Seobility, PageSpeed) you can re-run yourself. Scores
              measure technical quality, not traffic.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-16 md:gap-8">
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={(i % 2) * 0.1}
              className={`project-card group ${
                p.span === 'wide' ? 'col-span-12 md:col-span-7' : 'col-span-12 md:col-span-5'
              }`}
            >
              <a
                href={p.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-sm bg-smoke aspect-[16/10]"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                {/* Subtle gradient overlay for label readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/40 pointer-events-none" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span
                    className={`text-[10px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 rounded-full backdrop-blur ${labelStyle[p.accent]}`}
                  >
                    {p.label}
                  </span>
                </div>
                {/* Metric chip — the auditable headline */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-[11px] font-mono tracking-[0.1em] px-2.5 py-1.5 rounded-full bg-ink/60 backdrop-blur text-bone border border-bone/10">
                    {p.metric}
                  </span>
                </div>
                <div className="absolute top-4 right-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-full bg-bone/10 backdrop-blur flex items-center justify-center">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-bone"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </div>
              </a>
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
                    {p.metric}
                    <br />
                    <span className="text-muted">{p.metricNote}</span>
                  </div>
                  <div className="mt-3 flex gap-4 md:justify-end font-mono text-[10px] tracking-[0.2em] uppercase">
                    <a
                      href={p.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-bone hover:text-silver transition-colors"
                    >
                      Live site ↗
                    </a>
                    <a
                      href={p.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline text-silver hover:text-bone transition-colors"
                    >
                      See the proof →
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
