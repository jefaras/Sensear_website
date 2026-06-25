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
            className={`se-cta group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-8 py-[17px] text-[15px] font-bold no-underline ${className ?? ''}`}
        >
            <Image
                src="/images/brand/sensear-logo-color.png"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
                className="se-cta-ico h-5 w-5 shrink-0 object-contain"
            />
            <span className="se-cta-label">{children}</span>
            <span className="se-cta-arrow text-[17px]">→</span>
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
