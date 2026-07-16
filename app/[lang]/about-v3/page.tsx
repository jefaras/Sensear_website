import type { Metadata } from 'next';
import { Fragment, type ReactNode } from 'react';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { DriftOrb, FooterV3, Kicker, V3Root, emphasize } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';
import { AboutCTA, Differentiators, Hero, Journey, TeamMember } from '@/components/about-v3';

const stripTags = (html: string) => html.replace(/<[^>]+>/g, '');

/* The philosophy statement's three **bold** runs get distinct treatments in the
   v3 design (per the design ref): gold-gradient bold, Didot italic, then plain. */
function philosophyRuns(text: string): ReactNode {
    let bold = 0;
    return text.split(/\*\*(.+?)\*\*/g).map((part, i) => {
        if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
        const n = bold++;
        if (n === 0)
            return (
                <span key={i} className="se-gold-text font-bold">
                    {part}
                </span>
            );
        if (n === 1)
            return (
                <span key={i} className="font-didot">
                    {part}
                </span>
            );
        return <Fragment key={i}>{part}</Fragment>;
    });
}

function goldWrap(text: string, word: string): ReactNode {
    const idx = text.indexOf(word);
    if (idx === -1) return text;
    return (
        <>
            {text.slice(0, idx)}
            <span className="se-gold-text">{word}</span>
            {text.slice(idx + word.length)}
        </>
    );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return { title: dict.about_page.meta.title, description: dict.about_page.meta.description };
}

export default async function AboutV3({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.about_page;
    const home = dict.home;
    const em = lang === 'el'
        ? { vision: 'brands & εκδηλώσεις', journey: 'στρατηγικό', cta: 'ήχου' }
        : { vision: 'brands & events', journey: 'strategic', cta: 'sound' };
    const imageSides: ('right' | 'left')[] = ['right', 'left', 'right'];

    return (
        <V3Root>
            <Hero lang={lang} hero={content.hero} />

            {/* Vision */}
            <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '-8%', left: '30%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={21}
                />
                <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] text-center sm:px-[clamp(27px,2.1vw,37px)]">
                    <ScrollReveal>
                        <Kicker className="mb-[clamp(28px,2.22vw,39px)] justify-center">{content.vision.kicker}</Kicker>
                    </ScrollReveal>
                    <ScrollReveal delay={0.06}>
                        <h2 className="mx-auto max-w-[1060px] text-[clamp(1.96rem,3.91vw,3.34rem)] font-extrabold leading-[1.18] tracking-[-0.018em]">
                            {emphasize(stripTags(content.vision.text), em.vision)}
                        </h2>
                    </ScrollReveal>
                </div>
            </section>

            {/* Philosophy */}
            <section className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '14%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={24}
                    reverse
                />
                <div className="relative z-10 mx-auto max-w-[1150px] px-[clamp(27px,2.1vw,37px)] text-center">
                    <ScrollReveal>
                        <Kicker className="mb-[clamp(25px,1.99vw,35px)] justify-center">{content.philosophy.kicker}</Kicker>
                    </ScrollReveal>
                    <ScrollReveal delay={0.06}>
                        <p className="text-[clamp(1.61rem,2.99vw,2.42rem)] leading-[1.42] text-[#faf6f1]">
                            {philosophyRuns(content.philosophy.text)}
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <Journey emWord={em.journey} journey={content.journey} />

            {/* Team */}
            <section id="team" className="relative overflow-hidden py-[clamp(108px,8.52vw,150px)] pb-[clamp(94px,7.39vw,130px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '8%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={23}
                />
                <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    <div className="mx-auto mb-[clamp(72px,5.68vw,100px)] max-w-[900px] text-center">
                        <ScrollReveal>
                            <Kicker className="mb-[clamp(15px,1.19vw,21px)] justify-center">{content.team.kicker}</Kicker>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h2
                                className="se-html text-[clamp(2.3rem,4.6vw,3.91rem)] font-extrabold leading-[1.05] tracking-[-0.02em]"
                                dangerouslySetInnerHTML={{ __html: content.team.title }}
                            />
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="mt-[clamp(13px,1.02vw,18px)] text-[clamp(1.02rem,1.15vw,1.27rem)] text-[#faf6f1]/60">
                                {content.team.subtitle}
                            </p>
                        </ScrollReveal>
                    </div>

                    {content.team_members.map((member: any, i: number) => (
                        <TeamMember
                            key={member.name}
                            member={member}
                            imageSide={imageSides[i] ?? 'right'}
                            isLast={i === content.team_members.length - 1}
                        />
                    ))}

                    <ScrollReveal>
                        <p className="mx-auto mt-[clamp(79px,6.25vw,110px)] max-w-[1010px] text-center text-[clamp(1.61rem,2.99vw,2.42rem)] font-semibold leading-[1.4]">
                            {goldWrap(content.team.closing, 'SensEar')}
                        </p>
                    </ScrollReveal>
                </div>
            </section>

            <Differentiators content={content.differentiators} />

            <AboutCTA
                lang={lang}
                emWord={em.cta}
                cta={content.final_cta}
                phoneLine={home.contact_cta.phone_line}
            />

            <FooterV3
                lang={lang}
                footer={home.footer}
                navigation={dict.navigation}
                services={home.services.items}
                industries={home.expertise.items}
                email={home.contact_cta.secondary_email_label}
                phoneLine={home.contact_cta.phone_line}
            />
        </V3Root>
    );
}
