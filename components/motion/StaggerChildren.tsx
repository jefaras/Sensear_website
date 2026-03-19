'use client';

import { m } from 'motion/react';
import React, { useMemo, type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  /** Delay between each child animation in seconds. Default: 0.1 */
  staggerDelay?: number;
  /** Direction children animate from. Default: 'up' */
  direction?: Direction;
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up:    { x: 0,   y: 30 },
  down:  { x: 0,   y: -30 },
  left:  { x: 30,  y: 0 },
  right: { x: -30, y: 0 },
};

/** Item variants — each child fades + translates from the given direction. */
const itemVariants = (direction: Direction) => {
  const offset = directionOffset[direction];
  return {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 120,
      },
    },
  };
};

/**
 * StaggerChildren — sequentially animates direct children when scrolled
 * into view. Use for lists, grids, timeline entries, card groups, etc.
 *
 * Each child fades in and slides from the chosen `direction` with a
 * configurable `staggerDelay` between items. Spring physics match
 * `ScrollReveal` for visual consistency.
 *
 * Must be rendered inside a `<MotionProvider>` (or any `<LazyMotion>` ancestor).
 */
export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  direction = 'up',
}: StaggerChildrenProps) {
  const containerVariants = useMemo(
    () => ({
      hidden: {},
      visible: {
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }),
    [staggerDelay],
  );

  const childVariants = useMemo(() => itemVariants(direction), [direction]);

  return (
    <m.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {React.Children.map(children, (child) =>
        child != null ? (
          <m.div variants={childVariants}>{child}</m.div>
        ) : null,
      )}
    </m.div>
  );
}
