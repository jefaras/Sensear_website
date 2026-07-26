import Image from 'next/image';
import { ScrollReveal } from '@/components/motion';
import { GhostButton } from './GhostButton';
import { MorphCTA } from './MorphCTA';
import { emphasize } from './emphasize';

interface PageCTAProps {
    heading: string;
    /** Per-locale word inside `heading` to render in Didot italic gold. */
    emWord: string;
    lede: string;
    primaryLabel: string;
    /** Already-localized path, or mailto:/tel:/# href. */
    primaryHref: string;
    /** Ghost button is optional — omit both to render a single primary CTA. */
    ghostLabel?: string;
    ghostHref?: string;
    bgImage: string;
    /** Phone + location footer line. Omit both to end the band on the buttons. */
    phoneLine?: string;
    location?: string;
}

/**
 * Shared full-bleed dark CTA band (H2 → lede → primary + ghost →
 * phone/location line) — the prop-driven ContactCTA primitive from the v3 plan,
 * reused by the About/Services/... demo pages with per-page copy and links.
 */
export function PageCTA({ heading, emWord, lede, primaryLabel, primaryHref, ghostLabel, ghostHref, bgImage, phoneLine, location }: PageCTAProps) {
    const hasGhost = Boolean(ghostLabel && ghostHref);
    const hasContactLine = Boolean(phoneLine || location);
    return (
        <section id="cta" className="relative overflow-hidden py-[clamp(122px,9.66vw,170px)]">
            <Image src={bgImage} alt="" fill aria-hidden="true" sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0.82),rgba(11,10,10,0.93))]" />
            <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] text-center sm:px-[clamp(27px,2.1vw,37px)]">
                <ScrollReveal delay={0.08}>
                    <h2 className="mx-auto mb-[clamp(23px,1.82vw,32px)] max-w-[1060px] text-[clamp(2.76rem,6.33vw,5.06rem)] font-extrabold leading-[1.04] tracking-[-0.025em]">
                        {emphasize(heading, emWord)}
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.16}>
                    <p className="mx-auto mb-[clamp(37px,2.9vw,51px)] max-w-[760px] text-[clamp(1.09rem,1.24vw,1.36rem)] leading-[1.6] text-[#faf6f1]/68">
                        {lede}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.24}>
                    <div
                        className={`${hasContactLine ? 'mb-[clamp(25px,1.99vw,35px)] ' : ''}flex flex-wrap items-center justify-center gap-[clamp(15px,1.19vw,21px)]`}
                    >
                        <MorphCTA href={primaryHref}>{primaryLabel}</MorphCTA>
                        {hasGhost && <GhostButton href={ghostHref!}>{ghostLabel}</GhostButton>}
                    </div>
                </ScrollReveal>
                {hasContactLine && (
                    <ScrollReveal delay={0.3}>
                        <div className="text-[clamp(13px,0.91vw,16px)] tracking-[0.04em] text-[#faf6f1]/45">
                            <a href="tel:+306976994212" className="text-inherit no-underline transition-colors hover:text-[#e3992f]">
                                {phoneLine}
                            </a>
                            {' · '}
                            {location}
                        </div>
                    </ScrollReveal>
                )}
            </div>
        </section>
    );
}
