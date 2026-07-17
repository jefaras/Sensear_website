import Image from 'next/image';
import { MorphCTA } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';
import { goldPrefix } from './gold-prefix';

interface ServiceRowProps {
    service: {
        title: string;
        subtitle: string;
        desc: string;
        ideal_for: string;
        cta: string;
    };
    href: string;
    image: string;
    imageSide: 'left' | 'right';
}

export function ServiceRow({ service, href, image, imageSide }: ServiceRowProps) {
    return (
        <div className="mb-[clamp(101px,7.95vw,140px)] grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-2">
            <ScrollReveal direction={imageSide} className={imageSide === 'left' ? '' : 'lg:order-2'}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image src={image} alt={service.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_60%,rgba(11,10,10,0.35))]" />
                </div>
            </ScrollReveal>

            <div className={imageSide === 'left' ? '' : 'lg:order-1'}>
                <ScrollReveal delay={0.05}>
                    <h3 className="mb-3 text-[clamp(2.19rem,3.91vw,3.45rem)] font-extrabold leading-[1.04] tracking-[-0.02em]">
                        {service.title}
                    </h3>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p className="se-gold-text font-didot mb-[clamp(22px,1.7vw,30px)] text-[clamp(1.29rem,1.46vw,1.61rem)]">
                        {service.subtitle}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.14}>
                    <p className="mb-[clamp(18px,1.42vw,25px)] max-w-[600px] text-[clamp(1.03rem,1.17vw,1.29rem)] leading-[1.65] text-[#faf6f1]/66">
                        {service.desc}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.18}>
                    <p className="mb-[clamp(28px,2.22vw,39px)] max-w-[600px] text-[clamp(0.97rem,1.1vw,1.21rem)] leading-[1.6] text-[#faf6f1]/55">
                        {goldPrefix(service.ideal_for)}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.24}>
                    <MorphCTA href={href}>{service.cta}</MorphCTA>
                </ScrollReveal>
            </div>
        </div>
    );
}
