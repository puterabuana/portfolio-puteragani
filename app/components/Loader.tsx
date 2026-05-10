'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[10000] bg-ink flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="font-display text-2xl tracking-tight italic text-bone">
              pbg<span className="text-silver">.studio</span>
            </div>
            <div className="w-[200px] h-px bg-bone/10 relative overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
                className="absolute inset-0 bg-bone"
              />
            </div>
            <div className="font-mono text-[10px] tracking-[0.3em] text-muted uppercase">
              Loading Experience
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
