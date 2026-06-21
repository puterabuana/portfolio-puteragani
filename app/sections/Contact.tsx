'use client';

import Reveal from '../components/Reveal';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 py-24 md:py-32 overflow-hidden border-t border-bone/[0.08]"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <div className="font-display italic text-[28vw] md:text-[20vw] leading-none tracking-tighter text-bone whitespace-nowrap">
          together?
        </div>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-12 gap-4 md:gap-8 mb-16">
          <Reveal className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted mb-3">
              — 07 / Contact
            </div>
            <div className="font-mono text-[11px] tracking-[0.25em] uppercase text-silver">
              Let's Make
              <br />
              Something Real
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-9" delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.03em] text-bone">
              Have a project
              <br />
              in mind? <span className="italic font-light text-silver">Let's talk.</span>
            </h2>
            <p className="mt-8 text-silver text-base md:text-lg max-w-xl leading-relaxed">
              Whether it's a brand refresh, a landing page that needs to convert, or a campaign you
              want to launch — I'd love to hear about it. Quick reply, no obligation.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-8 mt-16">
          <Reveal className="col-span-12 md:col-span-6">
            <a
              href="mailto:ganiputerabuana@gmail.com"
              className="group glass rounded-sm p-8 md:p-10 hover:-translate-y-1 transition-all duration-500 block h-full"
            >
              <div className="flex items-start justify-between mb-12">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted mb-2">
                    Primary
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-silver">
                    Email
                  </div>
                </div>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-silver group-hover:text-bone group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
              <div className="font-display text-2xl md:text-3xl text-bone mb-2 break-all">
                ganiputerabuana@gmail.com
              </div>
              <div className="text-muted text-sm">Best for project inquiries & quotes</div>
            </a>
          </Reveal>

          <div className="col-span-12 md:col-span-6 grid grid-cols-1 gap-4">
            {[
              {
                label: 'Professional',
                title: 'LinkedIn',
                handle: '/in/puterabuana',
                href: 'https://www.linkedin.com/in/puterabuana/',
              },
              {
                label: 'Casual',
                title: 'Instagram',
                handle: '@puterabuana',
                href: 'https://www.instagram.com/puterabuana',
              },
              {
                label: 'Reading',
                title: 'Personal Blog',
                handle: 'puteragani.com',
                href: 'https://puteragani.com',
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="group glass rounded-sm p-7 hover:-translate-y-1 transition-all duration-500 block"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted mb-2">
                        {item.label}
                      </div>
                      <div className="font-display text-xl text-bone">{item.title}</div>
                      <div className="text-muted text-xs mt-1 font-mono">{item.handle}</div>
                    </div>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-silver group-hover:text-bone group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
