import type { ReactNode } from 'react';
import Image from 'next/image';
import { DriftOrb } from './DriftOrb';

interface SplitHeroProps {
    /** Text column content: H1, lede, CTAs (each page keeps its own). */
    children: ReactNode;
    /** Photo for the right column. Ignored when `imageSlot` is given. */
    image?: { src: string; alt: string };
    /** Tailwind object-position class for the photo crop, e.g. `object-[30%_50%]`. */
    imagePosition?: string;
    /** Replaces the default photo (e.g. the blog's featured-article card). Rendered inside the column. */
    imageSlot?: ReactNode;
    id?: string;
}

/**
 * The home-page hero shell (components/home-v3/Hero.tsx), shared by the other pages:
 * text left, a photo flush to the column edges filling the right half from top to bottom
 * (below the text on phones). Capped at 1920 x 1080 CSS px and centred, as on home.
 */
export function SplitHero({ children, image, imagePosition = 'object-center', imageSlot, id }: SplitHeroProps) {
    return (
        <section
            id={id}
            className="relative mx-auto grid min-h-[100dvh] w-full max-w-[1920px] grid-cols-1 overflow-hidden lg:min-h-[min(100dvh,1080px)] lg:grid-cols-[1.04fr_0.96fr]"
        >
            <DriftOrb
                className="h-[50vw] w-[50vw] max-h-[710px] max-w-[710px]"
                style={{
                    bottom: '-15%',
                    left: '-10%',
                    background: 'radial-gradient(circle,rgba(250,235,227,0.06),rgba(250,235,227,0) 60%)',
                }}
                duration={22}
                reverse
            />

            <div className="relative z-10 flex items-end justify-center px-5 pb-14 pt-36 sm:px-8 sm:pb-16 lg:items-center lg:px-[clamp(2rem,5.2vw,6.5rem)] lg:pb-[clamp(4rem,8vh,6.5rem)] lg:pt-24">
                <div className="w-full max-w-[780px]">{children}</div>
            </div>

            <div className="relative min-h-[52vh] overflow-hidden border-t border-[#faf6f1]/10 lg:min-h-full lg:border-l lg:border-t-0 min-[1921px]:border-r">
                {imageSlot ??
                    (image && (
                        <>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                priority
                                sizes="(min-width: 1024px) 48vw, 100vw"
                                className={`object-cover ${imagePosition}`}
                            />
                            <div className="absolute inset-0 bg-[#0b0a0a]/10" />
                        </>
                    ))}
            </div>
        </section>
    );
}
