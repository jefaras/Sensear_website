import Link from "next/link";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ScrollReveal, StaggerChildren } from "@/components/motion";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.event_soundtracks;

    return {
        title: t.meta?.title ?? "Event Soundtracks",
        description: t.meta?.description ?? "Expert music curation for events. We create soundtracks that follow the flow of the event.",
    };
}

export default async function EventSoundtracksPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.event_soundtracks;

    return (
        <div className="bg-[#faebe3]">
            <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-32 pb-8 lg:pb-24 min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="w-full px-6 md:px-12 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col justify-center text-left">
                            <ScrollReveal>
                                <h1 className="font-extrabold text-black mb-6 leading-[1.1]">
                                    <span className="block mb-3 text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">{t.hero.title}</span>
                                    <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">{t.hero.subtitle}</span>
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <p className="text-xl md:text-2xl text-black/70 leading-relaxed">{t.hero.description}</p>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal delay={0.2} className="w-full flex justify-end">
                            <div className="w-full max-w-[740px]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl">
                                    <div className="relative aspect-square">
                                        <Image src="/images/services/event-soundtracks/event-soundtracks-hero.jpg" alt="Custom event soundtracks and live DJ programming" fill sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 740px" className="object-cover" priority />
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="bg-black py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center">
                        <ScrollReveal>
                            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-heading mb-12" dangerouslySetInnerHTML={{ __html: t.intro.title }} />
                        </ScrollReveal>
                        <div className="w-full">
                            <ScrollReveal delay={0.1}>
                                <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.intro.p1 }} />
                            </ScrollReveal>
                            <ScrollReveal delay={0.18}>
                                <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.intro.p2 }} />
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center leading-heading">{t.what_we_do.title}</h2>
                    </ScrollReveal>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal className="hidden lg:block">
                            <Image src="/images/services/event-soundtracks/event-soundtracks-planning.jpg" alt="Event soundtrack planning and execution" width={800} height={600} sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 800px" loading="lazy" className="w-full h-auto rounded-2xl shadow-lg" />
                        </ScrollReveal>
                        <StaggerChildren className="space-y-8" staggerDelay={0.1}>
                            {t.what_we_do.items.map((item: any, index: number) => (
                                <div key={index}>
                                    <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                                    <p className="text-lg text-black/70">{item.description}</p>
                                </div>
                            ))}
                        </StaggerChildren>
                    </div>
                </div>
            </section>

            <section className="py-20" style={{ backgroundImage: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0) 15%), url('/images/backgrounds/background-texture-warm-silver.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center leading-heading">{t.perfect_for.title}</h2>
                    </ScrollReveal>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <StaggerChildren className="space-y-8 text-lg text-black/70" staggerDelay={0.1}>
                            {t.perfect_for.items.map((item: any, index: number) => (
                                <div key={index}>
                                    <Link href={`/${lang}/${item.link}`} className="underline hover:text-black font-semibold text-2xl block mb-1">{item.title}</Link>
                                    <span>{item.description}</span>
                                </div>
                            ))}
                        </StaggerChildren>
                        <ScrollReveal className="hidden lg:block">
                            <Image src="/images/services/event-soundtracks/event-soundtracks-venue.jpg" alt="Event venue with curated soundscape" width={800} height={600} sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 800px" loading="lazy" className="w-full h-auto rounded-2xl shadow-lg" />
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <ScrollReveal>
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center leading-heading">{t.staging.title}</h2>
                    </ScrollReveal>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal className="hidden lg:block">
                            <Image src="/images/services/event-soundtracks/event-soundtracks-process.jpg" alt="Event music planning process" width={800} height={600} sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 50vw, 800px" loading="lazy" className="w-full h-auto rounded-2xl shadow-lg" />
                        </ScrollReveal>
                        <StaggerChildren className="space-y-8" staggerDelay={0.1}>
                            {t.staging.items.map((item: any, index: number) => (
                                <div key={index}>
                                    <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                                    <p className="text-lg text-black/70">{item.description}</p>
                                </div>
                            ))}
                        </StaggerChildren>
                    </div>
                </div>
            </section>

            <FinalCTA
                heading={lang === "el" ? "Αφήστε μας να σχεδιάσουμε το ηχητικό ταξίδι της εκδήλωσής σας" : "Let us design your event's sonic journey"}
                text={t.cta.description}
                buttons={[
                    { text: t.cta.button, link: "contact" },
                    { text: lang === "el" ? "Δείτε τις υπηρεσίες μας" : "Explore our services", link: "services" },
                ]}
                lang={lang}
            />
        </div>
    );
}
