'use client';

import Reveal from '../components/Reveal';

const points = [
  {
    n: '01',
    title: 'Fast Response',
    desc: "Replies within 1–2 hours during working hours. You won't be left waiting on a quote, brief, or update.",
  },
  {
    n: '02',
    title: 'Detail-Oriented',
    desc: 'Pixel alignment, copy consistency, file structure — the small things that separate amateur work from pro.',
  },
  {
    n: '03',
    title: 'Modern Visual Approach',
    desc: 'Your brand should feel current. I bring contemporary design instincts shaped by global standards.',
  },
  {
    n: '04',
    title: 'Organized Workflow',
    desc: "Clear phases, milestones, file naming, and handoff. You always know where the project is and where it's going.",
  },
  {
    n: '05',
    title: 'Deadline Focused',
    desc: "If it's promised by Friday, it's delivered by Friday. Predictable timelines, no last-minute surprises.",
  },
  {
    n: '06',
    title: 'Clear Communication',
    desc: "Direct, concise updates. No agency jargon. You'll always understand what we're doing and why.",
  },
];

export default function WhyMe() {
  return (
    <section className="relative px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-14 md:mb-16">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted mb-3">
              — 05 / Why Me
            </div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-silver">
              How I Work
              <br />
              With Clients
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-9" delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em] text-bone">
              Six things you can{' '}
              <span className="italic font-light text-silver">expect from working with me.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/[0.08]">
          {points.map((p, i) => (
            <Reveal
              key={p.n}
              delay={(i % 3) * 0.08}
              className="bg-ink p-8 md:p-10 hover:bg-smoke transition-colors duration-500"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted mb-8">
                / {p.n}
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-bone mb-3">{p.title}</h3>
              <p className="text-silver text-sm leading-relaxed">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
