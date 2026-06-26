import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { ScrollReveal } from '@/components/motion';
import { Kicker, MorphCTA } from '@/components/v3';

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
        <section className="relative overflow-hidden py-[150px]">
            <Image
                src={cta.background_image}
                alt=""
                fill
                aria-hidden="true"
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0.82),rgba(11,10,10,0.92))]" />
            <div className="relative z-10 mx-auto max-w-[1380px] px-6 text-center sm:px-8">
                <ScrollReveal>
                    <Kicker variant="gold" className="mb-[26px] justify-center">
                        {cta.kicker}
                    </Kicker>
                </ScrollReveal>
                <ScrollReveal delay={0.08}>
                    <h2
                        className="se-html mx-auto mb-[30px] max-w-[980px] text-[clamp(2.4rem,5.5vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.025em]"
                        dangerouslySetInnerHTML={{ __html: cta.title }}
                    />
                </ScrollReveal>
                <ScrollReveal delay={0.16}>
                    <p className="mx-auto mb-11 max-w-[600px] text-[1.18rem] leading-[1.6] text-[#faf6f1]/68">
                        {cta.subtitle}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.24}>
                    <div className="mb-[30px] flex flex-wrap items-center justify-center gap-[18px]">
                        <MorphCTA href={localizedPath('/contact')}>{cta.primary_cta}</MorphCTA>
                        <a
                            href="tel:+306976994212"
                            className="inline-flex items-center gap-2 rounded-full border border-[#faf6f1]/30 px-8 py-[17px] text-[15px] font-bold text-[#faf6f1] no-underline transition-colors hover:border-[#faf6f1]/60"
                        >
                            <Phone className="h-4 w-4" strokeWidth={2.2} />
                            {cta.call_label}
                        </a>
                    </div>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                    <div className="text-[14px] tracking-[0.04em] text-[#faf6f1]/45">
                        <Link
                            href={localizedPath('/services')}
                            className="text-inherit no-underline transition-colors hover:text-[#e3992f]"
                        >
                            {cta.services_link}
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
