'use client';

import Reveal from '../components/Reveal';

const services = [
  {
    n: '01',
    title: 'Web Development',
    desc: 'AI-accelerated website builds across modern stacks — Next.js, custom HTML/CSS/JS, WordPress. Clean, fast, fully responsive, built to be found.',
    tags: ['Next.js', 'HTML/CSS/JS', 'WordPress'],
  },
  {
    n: '02',
    title: 'SEO & Technical Optimization',
    desc: 'On-page, technical, and local SEO — schema, crawl controls, Core Web Vitals, and GEO for AI search. Results independently audited, scores you can re-run yourself.',
    tags: ['Technical', 'Local', 'Schema'],
  },
  {
    n: '03',
    title: 'Content & Article Writing',
    desc: 'Clear, well-researched articles and blog content that rank and read well. SEO-aware writing — and designed page layouts — with an AI-assisted workflow for speed.',
    tags: ['Articles', 'Blog', 'SEO Copy'],
  },
  {
    n: '04',
    title: 'Product Imagery & Design',
    desc: 'AI-generated product and lifestyle imagery, brochures, and print-ready layouts — batch-produced at scale and delivered ready to publish.',
    tags: ['Imagery', 'Brochure', 'Print'],
  },
  {
    n: '05',
    title: 'Digital Marketing',
    desc: 'End-to-end campaign strategy, audience targeting, paid social, and performance tracking. From planning to optimization.',
    tags: ['Meta Ads', 'Funnels', 'GA4'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-14 md:mb-16">
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
              className={`service-row group border-t border-bone/[0.08] hover:bg-bone/[0.02] transition-colors duration-500 ${
                i === services.length - 1 ? 'border-b' : ''
              }`}
            >
              <div className="grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 px-2 md:px-4 items-center">
                <div className="col-span-2 md:col-span-1 font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
                  / {s.n}
                </div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-display text-3xl lg:text-5xl text-bone group-hover:translate-x-2 transition-transform duration-500 break-words">
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
