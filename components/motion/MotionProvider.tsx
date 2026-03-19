'use client';

import { LazyMotion, domAnimation } from 'motion/react';
import type { ReactNode } from 'react';

interface MotionProviderProps {
  children: ReactNode;
}

/**
 * MotionProvider wraps children with LazyMotion + domAnimation features
 * for tree-shaking. This reduces the Motion bundle from ~33KB to ~5KB
 * for basic animations (transforms, opacity, layout).
 *
 * Usage: Wrap your layout or page content with <MotionProvider> and use
 * the `m` component (instead of `motion`) inside for tree-shakeable animations.
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
