'use client';

import Reveal from '../components/Reveal';

const GoogleLogo = () => (
  <svg width="80" height="26" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg">
    <path fill="#4285F4" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" />
    <path fill="#EA4335" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" />
    <path fill="#FBBC05" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" />
    <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z" />
    <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z" />
    <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z" />
  </svg>
);

const MicrosoftLogo = () => (
  <svg width="90" height="20" viewBox="0 0 108 23" xmlns="http://www.w3.org/2000/svg">
    <path fill="#f25022" d="M0 0h10v10H0z" />
    <path fill="#7fba00" d="M11 0h10v10H11z" />
    <path fill="#00a4ef" d="M0 11h10v10H0z" />
    <path fill="#ffb900" d="M11 11h10v10H11z" />
    <text x="26" y="16" fontFamily="Helvetica" fontSize="14" fill="#f5f3ee">Microsoft</text>
  </svg>
);

const UnileverLogo = () => (
  <div className="flex items-center gap-2">
    {/* Unilever "U" logo — inspired by Wolff Olins 2004 design with iconographic cutouts */}
    <svg width="34" height="36" viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" aria-label="Unilever">
      <defs>
        <mask id="unilever-mask">
          <rect width="200" height="220" fill="white" />
          {/* Cutout icons (black = removed) */}
          <g fill="black">
            {/* Sun */}
            <circle cx="38" cy="40" r="5" />
            <g stroke="black" strokeWidth="1.8" strokeLinecap="round">
              <line x1="38" y1="28" x2="38" y2="31" />
              <line x1="38" y1="49" x2="38" y2="52" />
              <line x1="26" y1="40" x2="29" y2="40" />
              <line x1="47" y1="40" x2="50" y2="40" />
              <line x1="30" y1="32" x2="32" y2="34" />
              <line x1="44" y1="46" x2="46" y2="48" />
              <line x1="30" y1="48" x2="32" y2="46" />
              <line x1="44" y1="34" x2="46" y2="32" />
            </g>
            {/* Heart */}
            <path d="M162,32 C155,25 145,32 162,48 C179,32 169,25 162,32 Z" />
            {/* Leaf */}
            <path d="M30,80 Q22,73 28,65 Q40,60 50,70 Q52,80 42,87 Q34,87 30,80 Z" />
            {/* DNA wave */}
            <path d="M147,72 Q152,77 157,72 Q162,67 167,72" stroke="black" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M147,82 Q152,77 157,82 Q162,87 167,82" stroke="black" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Flower */}
            <g transform="translate(38,138)">
              <circle r="3" />
              <circle cx="-5" cy="-4" r="3" />
              <circle cx="5" cy="-4" r="3" />
              <circle cx="-5" cy="4" r="3" />
              <circle cx="5" cy="4" r="3" />
            </g>
            {/* Spoon */}
            <g transform="translate(75,140)">
              <ellipse cy="-3" rx="4" ry="5.5" />
              <rect x="-1.5" y="1.5" width="3" height="9" />
            </g>
            {/* Fish */}
            <g transform="translate(110,140)">
              <path d="M-8,0 Q-3,-5 5,-3 Q9,0 5,3 Q-3,5 -8,0 Z M-8,0 L-12,-3 L-12,3 Z" />
            </g>
            {/* Drop */}
            <g transform="translate(140,140)">
              <path d="M0,-8 Q-5,-1 -3,4 Q0,6 3,4 Q5,-1 0,-8 Z" />
            </g>
            {/* Hand */}
            <g transform="translate(162,140)">
              <path d="M-5,3 L-5,-4 Q-5,-6 -3,-6 L-3,-2 L-1.5,-2 L-1.5,-8 Q-1.5,-9 0,-9 Q1.5,-9 1.5,-8 L1.5,-2 L3,-2 L3,-7 Q3,-8 4.5,-8 Q6,-8 6,-7 L6,-2 L7,-2 L7,-5 Q7,-6 8,-6 Q9,-6 9,-5 L9,4 Q9,9 4,9 L1,9 Q-5,9 -5,3 Z" />
            </g>
          </g>
        </mask>
      </defs>

      {/* The blue U shape with icons masked out */}
      <path
        d="M20,10 L20,120 Q20,200 100,200 Q180,200 180,120 L180,10 L150,10 L150,120 Q150,170 100,170 Q50,170 50,120 L50,10 Z"
        fill="#1f36c7"
        mask="url(#unilever-mask)"
      />
    </svg>
    <span className="font-sans italic font-semibold text-base text-[#1f36c7] tracking-tight">Unilever</span>
  </div>
);

const certs = [
  {
    Logo: GoogleLogo,
    type: 'Course Certificate',
    title: 'Foundations of Digital Marketing & E-commerce',
    date: 'Issued Nov 14, 2024 · Coursera',
    year: '2024',
    verifyUrl: 'https://coursera.org/verify/X79PNYUE3SFN',
  },
  {
    Logo: GoogleLogo,
    type: 'Course Certificate',
    title: 'Foundations: Data, Data, Everywhere',
    date: 'Issued Dec 1, 2024 · Coursera',
    year: '2024',
    verifyUrl: 'https://coursera.org/verify/TWP293WAZH29',
  },
  {
    Logo: MicrosoftLogo,
    type: 'Course Certificate',
    title: 'Business Analysis Fundamentals',
    date: 'Issued Nov 17, 2024 · Coursera',
    year: '2024',
    verifyUrl: 'https://coursera.org/verify/JNE55JOOZHW4',
  },
  {
    Logo: UnileverLogo,
    type: 'Professional Certificate',
    title: 'Unilever Digital Marketing Analyst',
    date: 'Issued Dec 12, 2024 · 4-Course Specialization',
    year: '2024',
    verifyUrl: 'https://coursera.org/verify/professional-cert/EAS6GR82UCY5',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-14 md:mb-16">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted mb-3">
              — 04 / Credentials
            </div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-silver">
              Certified by
              <br />
              Industry Leaders
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-9" delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em] text-bone">
              Trained, certified, and continuously{' '}
              <span className="italic font-light text-silver">sharpening the craft.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((c, i) => {
            const { Logo } = c;
            return (
              <Reveal
                key={i}
                delay={i * 0.08}
                className="glass rounded-sm p-7 transition-all duration-500 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-12">
                  <Logo />
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted">
                    {c.year}
                  </span>
                </div>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-silver mb-2">
                  {c.type}
                </div>
                <h3 className="font-display text-xl text-bone leading-tight mb-2">{c.title}</h3>
                <p className="text-muted text-xs mb-6">{c.date}</p>
                <a
                  href={c.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.2em] uppercase text-bone group-hover:text-silver transition-colors"
                >
                  Verify Certificate
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
