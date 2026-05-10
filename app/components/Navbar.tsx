'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? 'py-4 backdrop-blur-lg bg-ink/70 border-b border-bone/[0.08]'
          : 'py-6'
      }`}
    >
      <a
        href="#hero"
        className="font-display text-xl tracking-tight italic text-bone hover:text-silver transition-colors"
      >
        pbg<span className="text-silver">.studio</span>
      </a>
      <div className="hidden md:flex items-center gap-10 text-[13px] font-mono tracking-wider uppercase">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="link-underline text-silver hover:text-bone transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
      <a
        href="#contact"
        className="hidden md:inline-flex items-center gap-2 text-[12px] font-mono tracking-[0.2em] uppercase border border-bone/20 hover:border-bone/60 px-5 py-2.5 rounded-full transition-all hover:bg-bone hover:text-ink"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Available
      </a>
    </nav>
  );
}
