'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

export type MorphCTASize = 'sm' | 'md' | 'lg' | 'xl';

interface MorphCTAProps {
    href: string;
    children: ReactNode;
    external?: boolean;
    className?: string;
    /** Visual size. `md` is the original v3 pill; larger sizes scale padding, text, icon & arrow together. */
    size?: MorphCTASize;
}

/** Per-size Tailwind fragments. `md` reproduces the original hard-coded values exactly. */
const SIZE_STYLES: Record<MorphCTASize, { pill: string; ico: string; arrow: string }> = {
    sm: {
        pill: 'px-[clamp(20px,1.6vw,28px)] py-[clamp(11px,0.9vw,15px)] text-[clamp(13px,0.85vw,15px)]',
        ico: 'h-[19px] w-[19px]',
        arrow: 'text-[clamp(14px,1vw,17px)]',
    },
    md: {
        pill: 'px-[clamp(27px,2.1vw,37px)] py-[clamp(14px,1.14vw,20px)] text-[clamp(14px,0.97vw,17px)]',
        ico: 'h-[23px] w-[23px]',
        arrow: 'text-[clamp(16px,1.14vw,20px)]',
    },
    lg: {
        pill: 'px-[clamp(32px,2.6vw,46px)] py-[clamp(17px,1.4vw,25px)] text-[clamp(15px,1.1vw,19px)]',
        ico: 'h-[26px] w-[26px]',
        arrow: 'text-[clamp(18px,1.3vw,23px)]',
    },
    xl: {
        pill: 'px-[clamp(38px,3.1vw,56px)] py-[clamp(20px,1.65vw,30px)] text-[clamp(17px,1.28vw,23px)]',
        ico: 'h-[30px] w-[30px]',
        arrow: 'text-[clamp(20px,1.5vw,27px)]',
    },
};

export function MorphCTA({ href, children, external = false, className, size = 'lg' }: MorphCTAProps) {
    const s = SIZE_STYLES[size];
    const inner = (
        <span
            className={`se-cta group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full font-bold no-underline ${s.pill} ${className ?? ''}`}
        >
            <Image
                src="/images/brand/sensear-logo-color.png"
                alt=""
                width={20}
                height={20}
                aria-hidden="true"
                className={`se-cta-ico shrink-0 object-contain ${s.ico}`}
            />
            <span className="se-cta-label">{children}</span>
            <span className={`se-cta-arrow ${s.arrow}`}>→</span>
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
