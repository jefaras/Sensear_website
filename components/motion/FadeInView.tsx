"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right";

interface FadeInViewProps {
    children: ReactNode;
    /** Direction to slide from (default: "up") */
    direction?: Direction;
    /** Animation delay in seconds */
    delay?: number;
    /** Animation duration in seconds (default: 0.7) */
    duration?: number;
    /** Only trigger once (default: true) */
    once?: boolean;
    /** Distance to translate in pixels (default: 40) */
    distance?: number;
    /** Additional className */
    className?: string;
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: 1 },
    down: { x: 0, y: -1 },
    left: { x: 1, y: 0 },
    right: { x: -1, y: 0 },
};

export function FadeInView({
    children,
    direction = "up",
    delay = 0,
    duration = 0.7,
    once = true,
    distance = 40,
    className,
}: FadeInViewProps) {
    const offset = directionOffset[direction];

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: offset.x * distance,
                y: offset.y * distance,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{ once, margin: "-60px" }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
