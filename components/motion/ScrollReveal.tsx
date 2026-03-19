'use client';

import { m } from 'motion/react';
import type { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before the animation starts (in seconds) */
  delay?: number;
  /** Direction from which the element slides in. Default: 'up' */
  direction?: Direction;
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

/**
 * ScrollReveal — a scroll-triggered entrance animation component.
 *
 * Wraps children in a `m.div` that fades in and slides from the given
 * `direction` when it enters the viewport. Uses spring physics and
 * triggers only once (`viewport.once: true`).
 *
 * Designed to replace the CSS `.slide-up-*` utility classes with a
 * JS-driven, physics-based alternative.
 *
 * Must be rendered inside a `<MotionProvider>` (or any `<LazyMotion>` ancestor).
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const offset = directionOffset[direction];

  return (
    <m.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 120,
        delay,
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}
