'use client';

import { AnimatePresence, m } from 'motion/react';
import type { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

/**
 * PageTransition — wraps page content with fade + slight upward slide on mount.
 *
 * Uses `AnimatePresence` to enable exit animations when the component unmounts
 * (e.g. during route changes). Pair with a unique `key` on the wrapper or
 * pass `key={pathname}` from the consuming layout.
 *
 * Must be rendered inside a `<MotionProvider>` (or any `<LazyMotion>` ancestor).
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <m.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1], // custom ease-out curve
        }}
        className={className}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}
