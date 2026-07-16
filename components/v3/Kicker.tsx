import type { ReactNode } from 'react';

interface KickerProps {
    children: ReactNode;
    className?: string;
    variant?: 'muted' | 'gold' | 'hero';
}

export function Kicker({ children, className, variant = 'muted' }: KickerProps) {
    const labelClass =
        variant === 'muted'
            ? 'text-[clamp(11px,0.8vw,14px)] tracking-[0.34em] font-bold text-[#faf6f1]/60'
            : 'se-gold-text text-[clamp(11px,0.8vw,14px)] tracking-[0.34em] font-bold';

    return (
        <div className={`flex items-center gap-[clamp(12px,0.91vw,16px)] ${className ?? ''}`}>
            {variant === 'hero' && (
                <span className="h-px w-[39px] shrink-0" style={{ background: 'var(--gold)' }} />
            )}
            <span className={labelClass}>{children}</span>
        </div>
    );
}
