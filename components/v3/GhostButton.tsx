import Link from 'next/link';
import type { ReactNode } from 'react';

interface GhostButtonProps {
    href: string;
    children: ReactNode;
    className?: string;
    external?: boolean;
}

export function GhostButton({ href, children, className, external = false }: GhostButtonProps) {
    const cls = `inline-block border-b border-[#faf6f1]/35 pb-1 text-[clamp(14px,0.97vw,17px)] font-semibold text-[#faf6f1] no-underline transition-colors hover:border-[#faf6f1]/70 ${className ?? ''}`;

    if (external) {
        return (
            <a href={href} className={cls}>
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={cls}>
            {children}
        </Link>
    );
}
