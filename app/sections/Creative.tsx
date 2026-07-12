'use client';

import Image from 'next/image';
import Reveal from '../components/Reveal';

const shopifyImages = Array.from(
  { length: 10 },
  (_, i) => `/images/creative/shopify/shopify-${String(i + 1).padStart(2, '0')}.png`,
);

export default function Creative() {
  return (
    <section id="creative" className="relative px-6 md:px-12 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-14 md:mb-16">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted mb-3">
              — 04 / Beyond The Build
            </div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-silver">
              Creative &
              <br />
              Production Work
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-9" delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em] text-bone">
              Not just websites —{' '}
              <span className="italic font-light text-silver">
                imagery, print, and words for paying clients.
              </span>
            </h2>
            <p className="mt-6 text-muted text-sm font-mono max-w-2xl leading-relaxed">
              An AI-augmented workflow lets one person move across disciplines fast — without
              dropping quality. Here&apos;s real, delivered client work beyond the code.
            </p>
          </Reveal>
        </div>

        {/* Block 1 — Product Imagery */}
        <Reveal className="mb-8">
          <div className="glass rounded-sm p-6 md:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-emerald-400/15 text-emerald-300">
                    Client Project
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
                    Shopify · Content & Management
                  </span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-bone">
                  Shopify Product Content
                </h3>
                <p className="text-silver text-sm mt-2 max-w-xl leading-relaxed">
                  End-to-end product content for a Shopify store — photoreal lifestyle mockups of
                  stickers and embroidered caps, created, named, and uploaded across 70 live product
                  listings.
                </p>
              </div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted text-right leading-relaxed">
                70 Images
                <br />
                <span className="text-bone">Repeat Client</span>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
              {shopifyImages.map((src, i) => (
                <div
                  key={src}
                  className={`relative overflow-hidden rounded-sm bg-smoke aspect-square group ${
                    i >= 8 ? 'hidden md:block' : ''
                  }`}
                >
                  <Image
                    src={src}
                    alt="Shopify product lifestyle image"
                    fill
                    sizes="(max-width: 768px) 45vw, 18vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Block 2 — Brochure + Article */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brochure */}
          <Reveal className="glass rounded-sm p-6 md:p-8 flex flex-col sm:flex-row gap-6">
            <a
              href="#contact"
              className="relative block w-full sm:w-2/5 aspect-[874/1224] rounded-sm overflow-hidden bg-smoke shrink-0 self-start group"
            >
              <Image
                src="/images/creative/corium-brochure-1.png"
                alt="Corium Test fire-safety product brochure cover"
                fill
                sizes="(max-width: 768px) 90vw, 20vw"
                className="object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </a>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-emerald-400/15 text-emerald-300">
                  Client Project
                </span>
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
                  Print · Layout
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-bone">
                Corium Test — Product Brochure
              </h3>
              <p className="text-silver text-sm mt-2 leading-relaxed">
                A 12-page corporate brochure for a fire-safety technology brand — cover to spec
                sheets, revised to the client&apos;s sign-off. “I am happy at the layout now.”
              </p>
              <div className="mt-4 font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
                12 Pages · International Edition
              </div>
            </div>
          </Reveal>

          {/* Article writing */}
          <Reveal delay={0.1} className="glass rounded-sm p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-bone/[0.07] text-silver">
                Content Writing
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
                Long-form · SEO
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-bone">
              Long-Form Article Design
            </h3>
            <p className="text-silver text-sm mt-2 leading-relaxed">
              A 3-part, 3,600+ word editorial series — researched, written, and hand-designed as
              responsive HTML with pull-quotes, callouts, and a conversion CTA system. Words and
              layout, both mine.
            </p>
            <div className="mt-6 rounded-sm border border-bone/10 bg-ink/40 p-5">
              <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-emerald-300 mb-2">
                Make Money with ChatGPT · Page 1 of 3
              </div>
              <p className="font-display text-lg text-bone leading-snug">
                How to Pocket <span className="italic text-silver">$10K–$50K/Month</span> Selling
                Done-for-You Services
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[9px] tracking-[0.15em] uppercase text-muted">
                <span>3,600+ words</span>
                <span>5 income models</span>
                <span>Self-designed</span>
              </div>
            </div>
            <div className="mt-auto pt-6 font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
              3 Pages · Written + Designed
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
