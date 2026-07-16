import type { ReactNode } from 'react';

interface SideRailProps {
    children: ReactNode;
    className?: string;
}

export function SideRail({ children, className }: SideRailProps) {
    return (
        <div
            className={`absolute left-8 top-1/2 hidden -translate-y-1/2 rotate-180 lg:block ${className ?? ''}`}
            style={{ writingMode: 'vertical-rl' }}
        >
            <span className="text-[clamp(10px,0.74vw,13px)] font-semibold tracking-[0.42em] text-[#faf6f1]/40">
                {children}
            </span>
        </div>
    );
}
