'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const onClick = (e: Event) => {
      const a = e.currentTarget as HTMLAnchorElement;
      const href = a.getAttribute('href');
      if (href && href.length > 1 && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((l) => l.addEventListener('click', onClick));

    return () => {
      links.forEach((l) => l.removeEventListener('click', onClick));
    };
  }, []);

  return null;
}
