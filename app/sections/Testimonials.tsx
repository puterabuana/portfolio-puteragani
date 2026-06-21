'use client';

import Reveal from '../components/Reveal';

const testimonials = [
  {
    quote:
      'Absolutely fantastic, super high quality. Very high quality work.',
    name: 'Farah Mubeen D.',
    role: 'Content Writing · 🇬🇧 United Kingdom',
    initial: 'F',
    rating: 5.0,
    platform: 'Verified · Freelancer.com',
  },
];

export default function Testimonials() {
  return (
    <section className="relative px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-14 md:mb-16">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted mb-3">
              — 06 / Voices
            </div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-silver">
              What Clients
              <br />
              Are Saying
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-9" delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em] text-bone">
              Honest words from{' '}
              <span className="italic font-light text-silver">people I've worked with.</span>
            </h2>
            <p className="mt-6 text-muted text-sm font-mono max-w-xl">
              Just getting started — every review here is real and verifiable. Quality over quantity,
              from day one.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1} className="glass rounded-sm p-8 md:p-10 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#f5f3ee">
                      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21l1.6-7L2 9.2l7.1-.6L12 2z" />
                    </svg>
                  ))}
                  <span className="ml-2 font-mono text-xs text-bone">{t.rating.toFixed(1)}</span>
                </div>
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-emerald-400/80 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {t.platform}
                </span>
              </div>
              <p className="font-display text-xl md:text-2xl text-bone leading-relaxed mb-8 flex-1">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-3 pt-6 border-t border-bone/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-bone/20 to-bone/5 flex items-center justify-center font-display italic text-bone">
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm text-bone">{t.name}</div>
                  <div className="text-xs text-muted font-mono">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Invitation card — be the next review */}
          <Reveal delay={0.1} className="rounded-sm p-8 md:p-10 border border-dashed border-bone/15 flex flex-col justify-between group hover:border-bone/30 transition-colors">
            <div>
              <div className="flex items-center gap-1.5 mb-6 opacity-30">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f5f3ee" strokeWidth="1.5">
                    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21l1.6-7L2 9.2l7.1-.6L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="font-display text-xl md:text-2xl text-silver leading-relaxed mb-8">
                Your review could be next.
                <br />
                <span className="text-muted text-base font-sans">
                  Early-stage rates, serious quality, fast replies.
                </span>
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-[11px] font-mono tracking-[0.2em] uppercase text-bone group-hover:gap-4 transition-all"
            >
              Become a client
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
