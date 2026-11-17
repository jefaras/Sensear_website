import type { CSSProperties, ReactNode } from 'react';

interface HeroRevealProps {
    children: ReactNode;
    className?: string;
    /** Delay before the animation starts (in seconds), same scale as ScrollReveal */
    delay?: number;
}

/**
 * HeroReveal — the same fade-and-rise entrance as ScrollReveal, done in CSS
 * (`.se-rise` in app/globals.css) for content that is visible on first paint.
 *
 * ScrollReveal renders `opacity: 0` into the static HTML and only shows the
 * content after React hydrates. In a page hero that hides the LCP element (the
 * H1) until all JavaScript has loaded, which cost ~14 s of LCP on a throttled
 * phone. A CSS animation starts with the first paint instead, with no JS.
 * Use this only above the fold; below the fold keep ScrollReveal.
 */
export function HeroReveal({ children, className, delay = 0 }: HeroRevealProps) {
    return (
        <div
            className={`se-rise${className ? ` ${className}` : ''}`}
            style={delay ? ({ '--se-rise-delay': `${delay}s` } as CSSProperties) : undefined}
        >
            {children}
        </div>
    );
}
