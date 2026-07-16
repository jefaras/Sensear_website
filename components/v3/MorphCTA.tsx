'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

interface MorphCTAProps {
    href: string;
    children: ReactNode;
    external?: boolean;
    className?: string;
}

export function MorphCTA({ href, children, external = false, className }: MorphCTAProps) {
    const inner = (
        <span
            className={`se-cta group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-[clamp(27px,2.1vw,37px)] py-[clamp(14px,1.14vw,20px)] text-[clamp(14px,0.97vw,17px)] font-bold no-underline ${className ?? ''}`}
        >
            <Image
                src="/images/brand/sensear-logo-color.png"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
                className="se-cta-ico h-[23px] w-[23px] shrink-0 object-contain"
            />
            <span className="se-cta-label">{children}</span>
            <span className="se-cta-arrow text-[clamp(16px,1.14vw,20px)]">→</span>
        </span>
    );

    if (external) {
        return (
            <a href={href} className="inline-flex">
                {inner}
            </a>
        );
    }

    return (
        <Link href={href} className="inline-flex">
            {inner}
        </Link>
    );
}
