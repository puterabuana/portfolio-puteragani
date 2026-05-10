'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const onClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute('href');
      if (href && href.length > 1 && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) lenis.scrollTo(target as HTMLElement, { offset: -20 });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((l) => l.addEventListener('click', onClick));

    return () => {
      lenis.destroy();
      links.forEach((l) => l.removeEventListener('click', onClick));
    };
  }, []);

  return null;
}
