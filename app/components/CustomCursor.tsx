'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    const dot = dotRef.current!;
    const ring = ringRef.current!;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top = my + 'px';
    };

    const animate = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener('mousemove', onMove);

    const interactive = document.querySelectorAll('a, button, .project-card, .service-row, .glass');
    const onEnter = () => document.body.classList.add('cursor-hover');
    const onLeave = () => document.body.classList.remove('cursor-hover');
    interactive.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      interactive.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed w-9 h-9 border border-bone/40 rounded-full pointer-events-none z-[9998] hidden md:block"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease',
        }}
      />
      <div
        ref={dotRef}
        className="fixed w-1.5 h-1.5 bg-bone rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{ mixBlendMode: 'difference', transform: 'translate(-50%, -50%)' }}
      />
      <style jsx global>{`
        body.cursor-hover .cursor-dot { width: 0 !important; height: 0 !important; }
      `}</style>
    </>
  );
}
