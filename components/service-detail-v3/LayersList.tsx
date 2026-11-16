'use client';

import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { useState } from 'react';
import { StaggerChildren } from '@/components/motion';
import { itemTextClass, photoFade, photoFrame } from './styles';

type Layer = { title: string; description: string; image_alt: string };

interface LayersListProps {
    items: Layer[];
    /** One photo per layer, in the items' order. `alt` overrides the layer's dictionary alt when
        the slot shows a different photo from the one that alt describes. */
    images: { src: string; position?: string; alt?: string }[];
    /** Index of the layer whose title links down to the journey section, and that link's target. */
    linkIndex: number;
    linkHref: string;
}

const ease = '[transition-timing-function:cubic-bezier(0.22,1,0.36,1)]';

/**
 * "Four layers we design" as an editorial list (Experience Design, 15 Nov 2026). No 01-04
 * numbers: the layers are not a sequence (impeccable audit, 15 Nov).
 * From lg up, one photo sits left of the list in the service pages' 4:4.6 frame (JEF, 15 Nov) and
 * crossfades to the layer under the pointer or keyboard focus; motion meaning: "this layer looks
 * like this". Below lg, every layer shows its own photo above its text. The journey layer's title
 * links to the journey section, so the five moments are explained once.
 */
export function LayersList({ items, images, linkIndex, linkHref }: LayersListProps) {
    const [active, setActive] = useState(0);
    const altOf = (i: number) => images[i].alt ?? items[i].image_alt;

    return (
        <div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-[0.95fr_1.05fr]">
            {/* One photo frame for the whole list (lg and up), left of it. */}
            <div className={`${photoFrame} hidden aspect-[4/4.6] lg:block`}>
                {images.map((img, i) => (
                    <Image
                        key={img.src}
                        src={img.src}
                        alt={altOf(i)}
                        aria-hidden={active !== i}
                        fill
                        sizes="(min-width: 1024px) 46vw, 1px"
                        className={`object-cover transition-[opacity,transform] duration-700 ${ease} ${active === i ? 'scale-100 opacity-100' : 'scale-[1.03] opacity-0'}`}
                        style={img.position ? { objectPosition: img.position } : undefined}
                    />
                ))}
                <div className={photoFade} />
            </div>

            <StaggerChildren staggerDelay={0.08} className="border-t border-[#faf6f1]/12">
                {items.map((item, i) => (
                    <div
                        key={i}
                        onMouseEnter={() => setActive(i)}
                        onFocusCapture={() => setActive(i)}
                        className="border-b border-[#faf6f1]/12 py-[clamp(22px,2.2vw,36px)]"
                    >
                        <div className="relative mb-[clamp(16px,2vw,22px)] aspect-[16/10] overflow-hidden rounded-lg lg:hidden">
                            <Image
                                src={images[i].src}
                                alt={altOf(i)}
                                fill
                                sizes="(max-width: 1024px) 90vw, 1px"
                                className="object-cover"
                                style={images[i].position ? { objectPosition: images[i].position } : undefined}
                            />
                        </div>
                        <h3 className="font-didot mb-[clamp(8px,0.8vw,12px)] text-[clamp(1.7rem,2.3vw,2.3rem)] font-normal leading-[1.15]">
                            {i === linkIndex ? (
                                <a
                                    href={linkHref}
                                    className="group inline-flex items-center gap-3 text-[#faf6f1] no-underline transition-colors hover:text-[#f0bd95] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0bd95]"
                                >
                                    {item.title}
                                    <ArrowDown className="h-5 w-5 text-[#f0bd95] transition-transform group-hover:translate-y-1" aria-hidden="true" />
                                </a>
                            ) : (
                                <span className={`transition-colors duration-500 ${active === i ? 'text-[#faf6f1]' : 'text-[#faf6f1] lg:text-[#faf6f1]/72'}`}>{item.title}</span>
                            )}
                        </h3>
                        <p className={`max-w-[560px] ${itemTextClass}`}>{item.description}</p>
                    </div>
                ))}
            </StaggerChildren>
        </div>
    );
}
