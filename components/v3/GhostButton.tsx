import Link from 'next/link';
import type { ReactNode } from 'react';

export type GhostButtonSize = 'md' | 'lg';

interface GhostButtonProps {
    href: string;
    children: ReactNode;
    className?: string;
    external?: boolean;
    /** `md` is the original underlined link size; `lg` is more prominent. */
    size?: GhostButtonSize;
    /** Append an animated gold arrow that slides on hover — makes the link read as a clear CTA. */
    arrow?: boolean;
}

const SIZE_TEXT: Record<GhostButtonSize, string> = {
    md: 'text-[clamp(14px,0.97vw,17px)]',
    lg: 'text-[clamp(15px,1.1vw,19px)]',
};

export function GhostButton({ href, children, className, external = false, size = 'lg', arrow = false }: GhostButtonProps) {
    const cls = `group inline-flex items-center gap-2 border-b border-[#faf6f1]/35 pb-1 font-semibold text-[#faf6f1] no-underline transition-colors hover:border-[#faf6f1]/70 ${SIZE_TEXT[size]} ${className ?? ''}`;

    const content = (
        <>
            <span>{children}</span>
            {arrow && (
                <span aria-hidden="true" className="se-gold-text transition-transform duration-300 group-hover:translate-x-1">
                    →
                </span>
            )}
        </>
    );

    if (external) {
        return (
            <a href={href} className={cls}>
                {content}
            </a>
        );
    }

    return (
        <Link href={href} className={cls}>
            {content}
        </Link>
    );
}
