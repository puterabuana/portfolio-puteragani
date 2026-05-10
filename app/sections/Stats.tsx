'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const stats = [
  { value: 40, label: 'Projects Completed' },
  { value: 98, label: 'Client Satisfaction %' },
  { value: 100, label: 'Response Rate %' },
  { value: 120, label: 'Design Concepts' },
];

function Counter({ target }: { target: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <div ref={ref} className="font-display text-5xl md:text-7xl text-bone tabular-nums">
      {val.toString().padStart(2, '0')}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative px-6 md:px-12 py-32 border-y border-bone/[0.08] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter target={s.value} />
              <div className="mt-2 font-mono text-[10px] tracking-[0.25em] uppercase text-muted">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
