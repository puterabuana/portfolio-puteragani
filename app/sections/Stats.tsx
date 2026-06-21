'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const stats = [
  { value: 5.0, label: 'Client Rating ★', decimals: 1, pad: false, prefix: '' },
  { value: 100, label: 'On-Time Delivery %', decimals: 0, pad: false, prefix: '' },
  { value: 4, label: 'Certifications', decimals: 0, pad: true, prefix: '' },
  { value: 2, label: 'Response · Hours', decimals: 0, pad: false, prefix: '<' },
];

function Counter({
  target,
  decimals = 0,
  pad = true,
  prefix = '',
}: {
  target: number;
  decimals?: number;
  pad?: boolean;
  prefix?: string;
}) {
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
      setVal(target * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  const display = decimals > 0 ? val.toFixed(decimals) : Math.round(val).toString();
  const padded = pad && decimals === 0 ? display.padStart(2, '0') : display;

  return (
    <div ref={ref} className="font-display text-5xl md:text-7xl text-bone tabular-nums">
      {prefix}
      {padded}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative px-6 md:px-12 py-20 md:py-24 border-y border-bone/[0.08] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s) => (
            <div key={s.label}>
              <Counter target={s.value} decimals={s.decimals} pad={s.pad} prefix={s.prefix} />
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
