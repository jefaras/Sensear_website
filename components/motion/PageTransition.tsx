'use client';

import { AnimatePresence, m } from 'motion/react';
import { useEffect, type ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

// False until the first page has mounted in the browser. The first page then
// renders with `initial={false}`: the static HTML carries the visible state, so
// the page paints without waiting for JavaScript. Before this, the whole page was
// exported at `opacity: 0` and stayed blank until hydration (mobile LCP ~14 s).
// Client-side route changes after that keep the fade below.
let firstPageMounted = false;

/**
 * PageTransition — wraps page content with fade + slight upward slide on
 * client-side route changes (not on the first page load, see above).
 *
 * Uses `AnimatePresence` to enable exit animations when the component unmounts
 * (e.g. during route changes). Pair with a unique `key` on the wrapper or
 * pass `key={pathname}` from the consuming layout.
 *
 * Must be rendered inside a `<MotionProvider>` (or any `<LazyMotion>` ancestor).
 */
export function PageTransition({ children, className }: PageTransitionProps) {
  const animateIn = firstPageMounted;

  useEffect(() => {
    firstPageMounted = true;
  }, []);

  return (
    <AnimatePresence mode="wait">
      <m.div
        initial={animateIn ? { opacity: 0, y: 12 } : false}
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
