import Image, { type ImageProps } from 'next/image';
import type { CSSProperties } from 'react';

/**
 * Photos that are not ready yet (Experience Marketing brief v2, Task G, 14 Nov 2026). Each slot that
 * waits for one shows a plain white placeholder with the missing file name, never an older photo.
 * When a photo arrives in public/images under this exact name, remove the name here: the slot then
 * shows the photo with the alt text it already has, and nothing else changes.
 * The pages must not go live while this list has names in it.
 */
export const PENDING_IMAGES = new Set<string>([
    'experience-marketing-hero.jpg',
    'experience-marketing-phase-before.jpg',
    'experience-marketing-phase-there.jpg',
    'experience-marketing-phase-after.jpg',
    'experience-marketing-cta.jpg',
]);

const fileName = (src: string) => src.split('/').pop() ?? src;
export const isPending = (src: string) => PENDING_IMAGES.has(fileName(src));

/**
 * White box with a thin light-grey border, so it shows on any background, and the missing file name
 * in small grey text in the middle. It carries the slot's final alt text. The file name is
 * aria-hidden and marked data-placeholder-label, so the word check can leave it out.
 */
export function ImagePlaceholder({ src, alt, className = '', style }: { src: string; alt: string; className?: string; style?: CSSProperties }) {
    return (
        <div role="img" aria-label={alt} className={`flex items-center justify-center border border-[#d6d6d6] bg-white ${className}`} style={style}>
            <span aria-hidden="true" data-placeholder-label className="px-3 text-center text-[12px] leading-[1.4] text-[#8c8c8c] [overflow-wrap:anywhere]">
                {fileName(src)}
            </span>
        </div>
    );
}

/** A `fill` next/image, or the placeholder in the same frame while the photo is pending. */
export function SlotImage({ alt, ...props }: ImageProps & { src: string; alt: string }) {
    if (isPending(props.src)) return <ImagePlaceholder src={props.src} alt={alt} className="absolute inset-0" />;
    return <Image alt={alt} {...props} />;
}
