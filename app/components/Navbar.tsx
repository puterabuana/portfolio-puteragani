'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#creative', label: 'Creative' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const goTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
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

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="md:hidden font-mono text-[11px] tracking-[0.25em] uppercase text-bone border border-bone/20 px-4 py-2 rounded-full"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-ink/95 backdrop-blur-xl flex flex-col justify-between px-6 pt-28 pb-10"
          >
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(l.href);
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="py-4 border-b border-bone/[0.08] flex items-baseline justify-between group"
                >
                  <span className="font-display text-4xl italic text-bone">{l.label}</span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-muted">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-end justify-between"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to projects
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  goTo('#contact');
                }}
                className="font-mono text-[11px] tracking-[0.25em] uppercase text-ember"
              >
                Hire me →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
