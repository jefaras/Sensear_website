import type { ReactNode } from 'react';

interface KickerProps {
    children: ReactNode;
    className?: string;
    variant?: 'muted' | 'gold' | 'hero';
}

export function Kicker({ children, className, variant = 'muted' }: KickerProps) {
    const labelClass =
        variant === 'muted'
            ? 'text-[12px] tracking-[0.34em] font-bold text-[#faf6f1]/60'
            : 'se-gold-text text-[12px] tracking-[0.34em] font-bold';

    return (
        <div className={`flex items-center gap-[14px] ${className ?? ''}`}>
            {variant === 'hero' && (
                <span className="h-px w-[34px] shrink-0" style={{ background: 'var(--gold)' }} />
            )}
            <span className={labelClass}>{children}</span>
        </div>
    );
}
