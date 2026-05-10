'use client';

import Reveal from '../components/Reveal';

const testimonials = [
  {
    quote:
      'Putera delivered exactly what we needed for our launch. Clean designs, fast turnaround, no back-and-forth on tiny things. He just gets it.',
    name: 'Andrea M.',
    role: 'Online Shop Owner · Indonesia',
    initial: 'A',
  },
  {
    quote:
      "Our landing page conversion went up noticeably after Putera's redesign. Communication was easy, and the visuals felt premium without being over-the-top.",
    name: 'Daniel K.',
    role: 'Startup Founder · Singapore',
    initial: 'D',
  },
  {
    quote:
      'Reliable, organized, and easy to brief. Putera handled our data work and social design without me needing to micromanage anything. Will hire again.',
    name: 'Rena S.',
    role: 'Small Business Owner · Australia',
    initial: 'R',
  },
];

export default function Testimonials() {
  return (
    <section className="relative px-6 md:px-12 py-32 md:py-48 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-20">
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
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1} className="glass rounded-sm p-8 md:p-10">
              <svg width="32" height="22" viewBox="0 0 32 22" fill="none" className="mb-6">
                <path
                  d="M0 22V12C0 5.4 5.4 0 12 0V4C7.6 4 4 7.6 4 12H8V22H0ZM18 22V12C18 5.4 23.4 0 30 0V4C25.6 4 22 7.6 22 12H26V22H18Z"
                  fill="#f5f3ee"
                  opacity="0.3"
                />
              </svg>
              <p className="font-display text-xl md:text-2xl text-bone leading-relaxed mb-8">
                {t.quote}
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
        </div>
      </div>
    </section>
  );
}
