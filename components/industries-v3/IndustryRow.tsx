import Image from 'next/image';
import { MorphCTA, goldPrefix } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';

interface IndustryRowProps {
    item: {
        title: string;
        subtitle: string;
        desc1: string;
        desc2: string;
        image: string;
        link: string;
        cta: string;
    };
    href: string;
    imageSide: 'left' | 'right';
    isLast?: boolean;
}

export function IndustryRow({ item, href, imageSide, isLast = false }: IndustryRowProps) {
    return (
        <div
            className={`grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-2 ${isLast ? '' : 'mb-[clamp(79px,6.25vw,110px)]'}`}
        >
            <ScrollReveal direction={imageSide} className={imageSide === 'left' ? '' : 'lg:order-2'}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <Image src={item.image} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_60%,rgba(11,10,10,0.4))]" />
                </div>
            </ScrollReveal>

            <div className={imageSide === 'left' ? '' : 'lg:order-1'}>
                <ScrollReveal delay={0.05}>
                    <h3 className="mb-3 text-[clamp(2.19rem,3.91vw,3.45rem)] font-extrabold leading-[1.04] tracking-[-0.02em]">
                        {item.title}
                    </h3>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p className="se-gold-text font-didot mb-[clamp(22px,1.7vw,30px)] text-[clamp(1.29rem,1.46vw,1.61rem)]">
                        {item.subtitle}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.14}>
                    <p className="mb-[clamp(18px,1.42vw,25px)] max-w-[600px] text-[clamp(1.03rem,1.17vw,1.29rem)] leading-[1.65] text-[#faf6f1]/66">
                        {item.desc1}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.18}>
                    <p className="mb-[clamp(28px,2.22vw,39px)] max-w-[600px] text-[clamp(0.92rem,1.05vw,1.15rem)] leading-[1.6] text-[#faf6f1]/55">
                        {goldPrefix(item.desc2)}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.22}>
                    <MorphCTA href={href}>{item.cta}</MorphCTA>
                </ScrollReveal>
            </div>
        </div>
    );
}
