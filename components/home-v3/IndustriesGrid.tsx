import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { ScrollReveal, StaggerChildren } from '@/components/motion';
import { Kicker, MorphCTA, emphasize } from '@/components/v3';

interface IndustryItem {
    title: string;
    desc: string;
    link: string;
}

interface IndustriesGridProps {
    lang: Locale;
    kicker: string;
    title: string;
    subtitle: string;
    items: IndustryItem[];
    cta: string;
}

const INDUSTRY_IMAGES: Record<string, string> = {
    'industries/music-for-hotels-and-resorts': '/images/industries/industry-hotels-resorts.jpg',
    'industries/music-for-restaurants-and-bars': '/images/industries/industry-restaurants-bars.jpg',
    'industries/music-for-events-and-experiences': '/images/industries/industry-events-experiences.jpg',
    'industries/music-for-retail-stores': '/images/industries/industry-retail-stores.jpg',
    'industries/music-for-wellness-and-gyms': '/images/industries/industry-wellness-gyms.jpg',
    'industries/music-for-art-museums-and-fashion': '/images/industries/industry-art-museums-fashion.jpg',
};

export function IndustriesGrid({ lang, kicker, title, subtitle, items, cta }: IndustriesGridProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const emWord = lang === 'el' ? 'εξειδίκευσή' : 'expertise';

    return (
        <section className="py-[clamp(108px,8.52vw,150px)]">
            <div className="mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                <ScrollReveal>
                    <Kicker className="mb-[clamp(15px,1.19vw,21px)]">{kicker}</Kicker>
                </ScrollReveal>
                <ScrollReveal delay={0.06}>
                    <h2 className="mb-[clamp(15px,1.19vw,21px)] max-w-[940px] text-[clamp(2.3rem,4.6vw,3.91rem)] font-extrabold leading-[1.04] tracking-[-0.02em]">
                        {emphasize(title, emWord)}
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.12}>
                    <p className="mb-[clamp(45px,3.52vw,62px)] max-w-[780px] text-[clamp(1.01rem,1.15vw,1.26rem)] text-[#faf6f1]/60">{subtitle}</p>
                </ScrollReveal>

                <StaggerChildren className="grid grid-cols-1 gap-[clamp(17px,1.31vw,23px)] sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
                    {items.map((item) => {
                        const img = INDUSTRY_IMAGES[item.link];
                        return (
                            <Link
                                key={item.link}
                                href={localizedPath(`/${item.link}`)}
                                className="group relative block aspect-[1/1.04] overflow-hidden rounded-lg no-underline"
                            >
                                {img && (
                                    <Image
                                        src={img}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0.1)_30%,rgba(11,10,10,0.82))]" />
                                <div className="absolute inset-x-0 bottom-0 p-[clamp(20px,1.59vw,28px)]">
                                    <div className="mb-1.5 text-[clamp(1.24rem,1.41vw,1.55rem)] font-bold text-[#faf6f1]">{item.title}</div>
                                    <p className="text-[clamp(0.85rem,0.96vw,1.06rem)] leading-[1.5] text-[#faf6f1]/62">{item.desc}</p>
                                </div>
                            </Link>
                        );
                    })}
                </StaggerChildren>

                <ScrollReveal delay={0.12}>
                    <div className="mt-[clamp(40px,3.12vw,55px)]">
                        <MorphCTA href={localizedPath('/industries')}>
                            {cta}
                        </MorphCTA>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
