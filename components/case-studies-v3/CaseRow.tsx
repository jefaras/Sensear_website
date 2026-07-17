import Image from 'next/image';
import { ScrollReveal } from '@/components/motion';

interface CaseRowProps {
    item: {
        title: string;
        location: string;
        desc1: string;
        desc2: string;
        link_text: string;
    };
    image: string;
    scUrl: string;
    scLink: string;
    listenPrefix: string;
    imageSide: 'left' | 'right';
    isLast?: boolean;
}

export function CaseRow({ item, image, scUrl, scLink, listenPrefix, imageSide, isLast = false }: CaseRowProps) {
    // Venue name only (dict title bundles ", <location>"); strip the trailing
    // comma segment so the H3 shows "Beach House" and the location sits in the
    // Didot subtitle. Falls back to the full title if there is no comma.
    const venue = item.title.replace(/,\s*[^,]*$/, '');

    return (
        <div
            className={`grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-2 ${isLast ? '' : 'mb-[clamp(79px,6.25vw,110px)]'}`}
        >
            <ScrollReveal direction={imageSide} className={imageSide === 'left' ? '' : 'lg:order-2'}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <Image src={image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_60%,rgba(11,10,10,0.4))]" />
                </div>
            </ScrollReveal>

            <div className={imageSide === 'left' ? '' : 'lg:order-1'}>
                <ScrollReveal delay={0.05}>
                    <h3 className="mb-[9px] text-[clamp(2.19rem,3.91vw,3.45rem)] font-extrabold leading-[1.04] tracking-[-0.02em]">
                        {venue}
                    </h3>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p className="se-gold-text font-didot mb-[clamp(22px,1.7vw,30px)] text-[clamp(1.29rem,1.46vw,1.61rem)]">
                        {item.location}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.14}>
                    <p className="mb-[clamp(15px,1.19vw,21px)] max-w-[600px] text-[clamp(1.03rem,1.17vw,1.29rem)] leading-[1.65] text-[#faf6f1]/66">
                        {item.desc1}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.18}>
                    <p className="mb-[clamp(25px,1.99vw,35px)] max-w-[600px] text-[clamp(0.97rem,1.1vw,1.21rem)] leading-[1.6] text-[#faf6f1]/55">
                        {item.desc2}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.22}>
                    <div className="max-w-[600px] overflow-hidden rounded-[12px] border border-[#faf6f1]/10">
                        <iframe
                            width="100%"
                            height="166"
                            scrolling="no"
                            frameBorder="0"
                            allow="autoplay"
                            loading="lazy"
                            src={scUrl}
                            title={`${item.title} — sound sample`}
                        />
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.26}>
                    <a
                        href={scLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-[clamp(15px,1.19vw,21px)] inline-flex items-center gap-[9px] border-b border-[#faf6f1]/25 pb-[3px] text-[clamp(12px,0.85vw,15px)] font-semibold text-[#faf6f1]/60 no-underline transition-colors hover:text-[#faf6f1]"
                    >
                        {listenPrefix} {venue} →
                    </a>
                </ScrollReveal>
            </div>
        </div>
    );
}
