import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { ScrollReveal, StaggerChildren } from '@/components/motion';
import { Kicker, emphasize } from '@/components/v3';

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
}

const INDUSTRY_IMAGES: Record<string, string> = {
    'industries/music-for-hotels-and-resorts': '/images/industries/industry-hotels-resorts.jpg',
    'industries/music-for-restaurants-and-bars': '/images/industries/industry-restaurants-bars.jpg',
    'industries/music-for-events-and-experiences': '/images/industries/industry-events-experiences.jpg',
    'industries/music-for-retail-stores': '/images/industries/industry-retail-stores.jpg',
    'industries/music-for-wellness-and-gyms': '/images/industries/industry-wellness-gyms.jpg',
    'industries/music-for-art-museums-and-fashion': '/images/industries/industry-art-museums-fashion.jpg',
};

export function IndustriesGrid({ lang, kicker, title, subtitle, items }: IndustriesGridProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const emWord = lang === 'el' ? 'εξειδίκευσή' : 'expertise';

    return (
        <section className="py-[130px]">
            <div className="mx-auto max-w-[1380px] px-6 sm:px-8">
                <ScrollReveal>
                    <Kicker className="mb-[18px]">{kicker}</Kicker>
                </ScrollReveal>
                <ScrollReveal delay={0.06}>
                    <h2 className="mb-[18px] max-w-[820px] text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.04] tracking-[-0.02em]">
                        {emphasize(title, emWord)}
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.12}>
                    <p className="mb-[54px] max-w-[680px] text-[1.1rem] text-[#faf6f1]/60">{subtitle}</p>
                </ScrollReveal>

                <StaggerChildren className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
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
                                <div className="absolute inset-x-0 bottom-0 p-6">
                                    <div className="mb-1.5 text-[1.35rem] font-bold text-[#faf6f1]">{item.title}</div>
                                    <p className="text-[0.92rem] leading-[1.5] text-[#faf6f1]/62">{item.desc}</p>
                                </div>
                            </Link>
                        );
                    })}
                </StaggerChildren>
            </div>
        </section>
    );
}
