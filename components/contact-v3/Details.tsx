'use client';

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { DriftOrb, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';

interface InfoEntry { label: string; value: string; note: string }

interface DetailsProps {
    emWord: string;
    contactInfo: {
        kicker: string;
        heading: string;
        follow_label: string;
        phone: InfoEntry;
        email: InfoEntry;
        location: InfoEntry;
    };
}

const SOCIALS = [
    { Icon: Facebook, href: 'https://www.facebook.com/61575909304249/', label: 'Facebook' },
    { Icon: Instagram, href: 'https://www.instagram.com/sensear.music', label: 'Instagram' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/company/sensear-music/', label: 'LinkedIn' },
];

export function Details({ emWord, contactInfo }: DetailsProps) {
    const cards = [
        { Icon: Phone, entry: contactInfo.phone, href: 'tel:+306976994212' },
        { Icon: Mail, entry: contactInfo.email, href: 'mailto:hello@sensear.music' },
        { Icon: MapPin, entry: contactInfo.location, href: null },
    ];

    return (
        <section id="details" className="relative overflow-hidden py-[clamp(101px,7.95vw,140px)]">
            <DriftOrb className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]" style={{ top: '8%', left: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }} duration={21} />
            <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                <div className="mx-auto mb-[clamp(46px,3.64vw,64px)] max-w-[880px] text-center">
                    <ScrollReveal delay={0.06}>
                        <h2 className="text-[clamp(2rem,3.8vw,3.2rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
                            {emphasize(contactInfo.heading, emWord)}
                        </h2>
                    </ScrollReveal>
                </div>

                <StaggerChildren className="grid grid-cols-1 gap-[clamp(17px,1.31vw,23px)] md:grid-cols-3" staggerDelay={0.08}>
                    {cards.map(({ Icon, entry, href }) => (
                        <div key={entry.label} className="rounded-[12px] border border-[#faf6f1]/10 bg-[#0e0d0c] px-[clamp(24px,2vw,32px)] py-[clamp(30px,2.7vw,38px)] text-center">
                            <span className="mx-auto mb-[clamp(18px,1.42vw,25px)] flex h-14 w-14 items-center justify-center rounded-full border border-[#f0bd95]/40 text-[#f0bd95]" aria-hidden="true">
                                <Icon className="h-6 w-6" strokeWidth={1.7} />
                            </span>
                            <div className="se-gold-text mb-2 text-[clamp(10px,0.74vw,13px)] font-bold uppercase tracking-[0.22em]">{entry.label}</div>
                            {href ? (
                                <a href={href} className="block text-[clamp(1.02rem,1.15vw,1.2rem)] font-semibold text-[#faf6f1] no-underline transition-colors hover:text-[#f0bd95]">
                                    {entry.value}
                                </a>
                            ) : (
                                <div className="text-[clamp(1.02rem,1.15vw,1.2rem)] font-semibold text-[#faf6f1]">{entry.value}</div>
                            )}
                            <p className="mt-2 text-[clamp(0.82rem,0.94vw,1rem)] leading-[1.5] text-[#faf6f1]/50">{entry.note}</p>
                        </div>
                    ))}
                </StaggerChildren>

                <ScrollReveal delay={0.12}>
                    <div className="mt-[clamp(46px,3.64vw,64px)] text-center">
                        <div className="se-gold-text mb-[clamp(15px,1.19vw,21px)] text-[clamp(10px,0.74vw,13px)] font-bold uppercase tracking-[0.22em]">{contactInfo.follow_label}</div>
                        <div className="flex items-center justify-center gap-[clamp(13px,1.02vw,18px)]">
                            {SOCIALS.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#faf6f1]/28 text-[#faf6f1] transition-colors hover:border-[#f0bd95] hover:text-[#f0bd95]"
                                >
                                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                                </a>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
