"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface TextRevealProps {
    /** Text content (can be HTML string via dangerouslySetInnerHTML or plain text) */
    children: ReactNode;
    /** Delay before animation starts in seconds */
    delay?: number;
    /** Duration per word in seconds (default: 0.5) */
    duration?: number;
    /** Stagger delay between words (default: 0.08) */
    staggerDelay?: number;
    /** Only trigger once (default: true) */
    once?: boolean;
    /** Additional className applied to the container */
    className?: string;
}

const containerVariants = (stagger: number, delay: number) => ({
    hidden: {},
    visible: {
        transition: {
            staggerChildren: stagger,
            delayChildren: delay,
        },
    },
});

const wordVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: "blur(4px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
        },
    },
};

export function TextReveal({
    children,
    delay = 0,
    staggerDelay = 0.08,
    once = true,
    className,
}: TextRevealProps) {
    // If children is a string, split into words and animate each
    if (typeof children === "string") {
        const words = children.split(" ");

        return (
            <motion.span
                initial="hidden"
                whileInView="visible"
                viewport={{ once, margin: "-40px" }}
                variants={containerVariants(staggerDelay, delay)}
                className={className}
                style={{ display: "inline" }}
            >
                {words.map((word, i) => (
                    <motion.span
                        key={i}
                        variants={wordVariants}
                        style={{ display: "inline-block", marginRight: "0.3em" }}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.span>
        );
    }

    // For non-string children (JSX), apply a simple fade+slide reveal
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once, margin: "-40px" }}
            transition={{
                duration: 0.7,
                delay,
                ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
