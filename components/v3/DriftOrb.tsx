import type { CSSProperties } from 'react';

interface DriftOrbProps {
    className?: string;
    style?: CSSProperties;
    duration?: number;
    reverse?: boolean;
}

export function DriftOrb({ className, style, duration = 16, reverse = false }: DriftOrbProps) {
    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute ${className ?? ''}`}
            style={{
                filter: 'blur(20px)',
                animation: `se-drift ${duration}s ease-in-out infinite${reverse ? ' reverse' : ''}`,
                ...style,
            }}
        />
    );
}
