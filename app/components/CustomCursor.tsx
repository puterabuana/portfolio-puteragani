'use client';

import { useEffect, useRef } from 'react';

const INTERACTIVE = 'a, button, .service-row, .glass';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let raf = 0;
    const dot = dotRef.current!;
    const ring = ringRef.current!;

    const onMove = (e: MouseEvent) => {
      if (dot.style.visibility !== 'visible') {
        rx = e.clientX;
        ry = e.clientY;
        dot.style.visibility = 'visible';
        ring.style.visibility = 'visible';
      }
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
      const target = e.target as Element | null;
      document.body.classList.toggle(
        'cursor-hover',
        !!target?.closest?.(INTERACTIVE),
      );
    };

    const animate = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    document.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener('mousemove', onMove);
      document.body.classList.remove('cursor-hover');
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="cursor-ring fixed w-9 h-9 border border-bone/40 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          transition: 'transform 0.3s ease, border-color 0.3s ease',
          visibility: 'hidden',
        }}
      />
      <div
        ref={dotRef}
        className="cursor-dot fixed w-1.5 h-1.5 bg-bone rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          mixBlendMode: 'difference',
          transition: 'opacity 0.3s ease',
          visibility: 'hidden',
        }}
      />
    </>
  );
}
