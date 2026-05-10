'use client';

import Reveal from '../components/Reveal';

const services = [
  {
    n: '01',
    title: 'Digital Marketing',
    desc: 'End-to-end campaign strategy, audience targeting, paid social, and performance tracking. From planning to optimization.',
    tags: ['Meta Ads', 'SEO', 'Funnels'],
  },
  {
    n: '02',
    title: 'Graphic Design',
    desc: 'Visual identity, marketing collateral, posters, ads — sharp, modern design that earns attention and trust.',
    tags: ['Figma', 'PS', 'Canva'],
  },
  {
    n: '03',
    title: 'Data Entry & Analysis',
    desc: 'Structured, reliable, and quietly meticulous. Excel, Sheets, dashboards, and clean datasets you can actually use.',
    tags: ['Excel', 'Sheets', 'GA4'],
  },
  {
    n: '04',
    title: 'Landing Page Design',
    desc: 'Conversion-focused pages built around a single message and a single action. Clean, fast, and persuasive.',
    tags: ['Figma', 'UX', 'CRO'],
  },
  {
    n: '05',
    title: 'Social Media Design',
    desc: 'Feed systems, ad creatives, and content templates that look like they belong to a brand — not a side project.',
    tags: ['IG', 'TikTok', 'Reels'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 md:px-12 py-32 md:py-48 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-20">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted mb-3">
              — 02 / Services
            </div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-silver">
              What I Do
              <br />
              For Clients
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-9" delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em] text-bone">
              Five core services.{' '}
              <span className="italic font-light text-silver">
                Engineered to make brands look serious — and convert seriously.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16">
          {services.map((s, i) => (
            <div
              key={s.n}
              className={`service-row group cursor-pointer border-t border-bone/[0.08] hover:bg-bone/[0.02] transition-colors duration-500 ${
                i === services.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 px-2 md:px-4 items-center">
                <div className="col-span-2 md:col-span-1 font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
                  / {s.n}
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-display text-3xl md:text-5xl text-bone group-hover:translate-x-2 transition-transform duration-500">
                    {s.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5 text-silver text-sm md:text-base leading-relaxed">
                  {s.desc}
                </div>
                <div className="col-span-12 md:col-span-2 flex md:justify-end">
                  <div className="flex flex-wrap gap-1.5 md:justify-end">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-bone/15 text-silver"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
