import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { FinalCTA } from "@/components/sections/FinalCTA";

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
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .slide-up-1 { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
                .slide-up-2 { animation: slideUp 0.8s ease-out 0.2s forwards; opacity: 0; }
                .slide-up-4 { animation: slideUp 0.8s ease-out 0.6s forwards; opacity: 0; }
            `}} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-full px-6 md:px-12 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col justify-center text-left">
                            <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                                <span className="block mb-3 text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">{t.hero.title}</span>
                                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">{t.hero.subtitle}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                                {t.hero.description}
                            </p>
                        </div>
                        <div className="w-full slide-up-4 flex justify-center lg:justify-end">
                            <div className="w-full lg:w-[93.5%]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl">
                                    <div className="relative aspect-square">
                                        <img src="/images/services/event-soundtracks/event-soundtracks-hero.jpg" alt="Custom event soundtracks and live DJ programming" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="bg-black py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-heading mb-12" dangerouslySetInnerHTML={{ __html: t.intro.title }} />
                        <div className="w-full">
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.intro.p1 }} />
                            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.intro.p2 }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* What we do */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center leading-heading">{t.what_we_do.title}</h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="hidden lg:block">
                            <img src="/images/services/event-soundtracks/event-soundtracks-planning.jpg" alt="Event soundtrack planning and execution" className="w-full h-auto rounded-2xl shadow-lg" />
                        </div>
                        <div className="space-y-8">
                            {t.what_we_do.items.map((item: any, index: number) => (
                                <div key={index}>
                                    <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                                    <p className="text-lg text-black/70">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Perfect for */}
            <section className="py-20" style={{ backgroundImage: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0) 15%), url('/images/backgrounds/background-texture-warm-silver.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center leading-heading">{t.perfect_for.title}</h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <ul className="space-y-8 text-lg text-black/70">
                                {t.perfect_for.items.map((item: any, index: number) => (
                                    <li key={index} className="block">
                                        <Link href={`/${lang}/${item.link}`} className="underline hover:text-black font-semibold text-2xl block mb-1">{item.title}</Link>
                                        <span>{item.description}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="hidden lg:block">
                            <img src="/images/services/event-soundtracks/event-soundtracks-venue.jpg" alt="Event venue with curated soundscape" className="w-full h-auto rounded-2xl shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Professionally managed staging */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center leading-heading">{t.staging.title}</h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="hidden lg:block">
                            <img src="/images/services/event-soundtracks/event-soundtracks-process.jpg" alt="Event music planning process" className="w-full h-auto rounded-2xl shadow-lg" />
                        </div>
                        <div className="space-y-8">
                            {t.staging.items.map((item: any, index: number) => (
                                <div key={index}>
                                    <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                                    <p className="text-lg text-black/70">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <FinalCTA
                heading={lang === 'el' ? 'Αφήστε μας να σχεδιάσουμε το ηχητικό ταξίδι της εκδήλωσής σας' : "Let us design your event's sonic journey"}
                text={t.cta.description}
                buttons={[
                    { text: t.cta.button, link: 'contact' },
                    { text: lang === 'el' ? 'Δείτε τις υπηρεσίες μας' : 'Explore our services', link: 'services' }
                ]}
                lang={lang}
            />
        </div>
    );
}
