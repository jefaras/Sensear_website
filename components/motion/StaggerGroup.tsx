"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggerGroupProps {
    children: ReactNode;
    /** Delay between each child animation in seconds (default: 0.1) */
    staggerDelay?: number;
    /** Initial delay before the first child animates (default: 0) */
    initialDelay?: number;
    /** Only trigger once (default: true) */
    once?: boolean;
    /** Additional className */
    className?: string;
}

const containerVariants = (staggerDelay: number, initialDelay: number) => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
        },
    },
});

const childVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
        },
    },
};

export function StaggerGroup({
    children,
    staggerDelay = 0.1,
    initialDelay = 0,
    once = true,
    className,
}: StaggerGroupProps) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-40px" }}
            variants={containerVariants(staggerDelay, initialDelay)}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/** Wrap individual children in this to receive stagger animation */
export function StaggerItem({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div variants={childVariants} className={className}>
            {children}
        </motion.div>
    );
}
