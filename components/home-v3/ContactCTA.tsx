import Image from 'next/image';
import { Phone } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { ScrollReveal } from '@/components/motion';
import { GhostButton, Kicker, MorphCTA } from '@/components/v3';

interface ContactCTAProps {
    lang: Locale;
    cta: {
        kicker: string;
        title: string;
        subtitle: string;
        primary_cta: string;
        call_label: string;
        services_link: string;
        background_image: string;
    };
}

export function ContactCTA({ lang, cta }: ContactCTAProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);

    return (
        <section className="relative overflow-hidden py-[clamp(122px,9.66vw,170px)]">
            <Image
                src={cta.background_image}
                alt=""
                fill
                aria-hidden="true"
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0.82),rgba(11,10,10,0.92))]" />
            <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] text-center sm:px-[clamp(27px,2.1vw,37px)]">
                <ScrollReveal>
                    <Kicker variant="gold" className="mb-[clamp(22px,1.7vw,30px)] justify-center">
                        {cta.kicker}
                    </Kicker>
                </ScrollReveal>
                <ScrollReveal delay={0.08}>
                    <h2
                        className="se-html mx-auto mb-[clamp(25px,1.99vw,35px)] max-w-[1130px] text-[clamp(2.76rem,6.32vw,5.29rem)] font-extrabold leading-[1.02] tracking-[-0.025em]"
                        dangerouslySetInnerHTML={{ __html: cta.title }}
                    />
                </ScrollReveal>
                <ScrollReveal delay={0.16}>
                    <p className="mx-auto mb-[clamp(37px,2.9vw,51px)] max-w-[690px] text-[clamp(1.09rem,1.24vw,1.36rem)] leading-[1.6] text-[#faf6f1]/68">
                        {cta.subtitle}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.24}>
                    <div className="mb-[clamp(25px,1.99vw,35px)] flex flex-wrap items-center justify-center gap-[clamp(15px,1.19vw,21px)]">
                        <MorphCTA href={localizedPath('/contact')}>{cta.primary_cta}</MorphCTA>
                        <a
                            href="tel:+306976994212"
                            className="se-call group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-[clamp(32px,2.6vw,46px)] py-[clamp(17px,1.4vw,25px)] text-[clamp(15px,1.1vw,19px)] font-bold no-underline"
                        >
                            <Phone className="se-cta-ico h-[26px] w-[26px] shrink-0" strokeWidth={2.2} />
                            <span className="se-cta-label">{cta.call_label}</span>
                            <span className="se-cta-arrow text-[clamp(18px,1.3vw,23px)]">→</span>
                        </a>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                    <div className="flex justify-center">
                        <GhostButton href={localizedPath('/services')} arrow>
                            {cta.services_link}
                        </GhostButton>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
