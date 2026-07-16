import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { ScrollReveal } from '@/components/motion';
import { GhostButton, Kicker, MorphCTA, emphasize } from '@/components/v3';

interface AboutCTAProps {
    lang: Locale;
    emWord: string;
    cta: {
        heading: string;
        kicker: string;
        lede: string;
        primary_cta: string;
        secondary_cta: string;
        location: string;
    };
    phoneLine: string;
}

export function AboutCTA({ lang, emWord, cta, phoneLine }: AboutCTAProps) {
    return (
        <section className="relative overflow-hidden py-[clamp(122px,9.66vw,170px)]">
            <Image
                src="/images/about/about-hero.jpg"
                alt=""
                fill
                aria-hidden="true"
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0.82),rgba(11,10,10,0.93))]" />
            <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] text-center sm:px-[clamp(27px,2.1vw,37px)]">
                <ScrollReveal>
                    <Kicker variant="gold" className="mb-[clamp(22px,1.7vw,30px)] justify-center">
                        {cta.kicker}
                    </Kicker>
                </ScrollReveal>
                <ScrollReveal delay={0.08}>
                    <h2 className="mx-auto mb-[clamp(23px,1.82vw,32px)] max-w-[1060px] text-[clamp(2.76rem,6.33vw,5.06rem)] font-extrabold leading-[1.04] tracking-[-0.025em]">
                        {emphasize(cta.heading, emWord)}
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.16}>
                    <p className="mx-auto mb-[clamp(37px,2.9vw,51px)] max-w-[760px] text-[clamp(1.09rem,1.24vw,1.36rem)] leading-[1.6] text-[#faf6f1]/68">
                        {cta.lede}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.24}>
                    <div className="mb-[clamp(25px,1.99vw,35px)] flex flex-wrap items-center justify-center gap-[clamp(15px,1.19vw,21px)]">
                        <MorphCTA href={getLocalizedPath(lang, '/case-studies')}>{cta.primary_cta}</MorphCTA>
                        <GhostButton href="mailto:hello@sensear.music">{cta.secondary_cta}</GhostButton>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                    <div className="text-[clamp(13px,0.91vw,16px)] tracking-[0.04em] text-[#faf6f1]/45">
                        <a href="tel:+306976994212" className="text-inherit no-underline transition-colors hover:text-[#e3992f]">
                            {phoneLine}
                        </a>
                        {' · '}
                        {cta.location}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
