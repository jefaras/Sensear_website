import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { AnimatedButton } from "@/components/AnimatedButton";
import { FinalCTA } from "@/components/sections/FinalCTA";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.events_experiences;
    
    return {
        title: t.meta?.title || "Music for Events | SensEar",
        description: lang === 'el'
            ? 'Εξειδικευμένη μουσική επιμέλεια για εκδηλώσεις και εμπειρίες. Δημιουργούμε τη μοναδική ηχητική ταυτότητα της εκδήλωσής σας.'
            : 'Bespoke music curation for events and experiences. We craft your event\'s unique sonic identity for memorable moments.',
        openGraph: {
            title: t.meta?.title || "Music for Events | SensEar",
            description: lang === 'el'
                ? 'Εξειδικευμένη μουσική επιμέλεια για εκδηλώσεις.'
                : 'Bespoke music curation for events.',
            type: 'website',
        },
    };
}

export default async function EventsExperiencesPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.events_experiences;

    return (
        <div className="bg-[#faebe3]">
            {/* Hero Section */}
            <section
                className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="w-full px-6 md:px-12 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col justify-center text-left">
                            <h1 className="font-extrabold text-black mb-6 leading-[1.1]">
                                <span className="block mb-3 text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">{t.hero.title}</span>
                                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">{t.hero.subtitle}</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                                {t.hero.description}
                            </p>
                        </div>

                        <div className="w-full flex justify-center lg:justify-end">
                            <div className="w-full lg:w-[93.5%]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl">
                                    <div className="relative aspect-square">
                                        <Image
                                            src={t.hero.image}
                                            alt={t.hero.image_alt}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover"
                                            priority
                                        />
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
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-heading mb-12" dangerouslySetInnerHTML={{ __html: t.intro.title }}>
                        </h2>
                        <div className="w-full">
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.intro.p1 }}>
                            </p>
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: t.intro.p2 }}>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-20 animated-gradient">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 leading-heading">{t.what_we_do.title}</h2>
                        <p className="text-xl text-black/60 font-medium">{t.what_we_do.subtitle}</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            {t.what_we_do.items.map((item, index) => (
                                <div key={index}>
                                    <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                                    <p className="text-lg text-black/70">{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="hidden lg:block relative aspect-[4/3]">
                            <Image
                                src={t.what_we_do.image}
                                alt="Event experience with guests dancing"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Ideal For */}
            <section
                className="py-20"
                style={{
                    backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center leading-heading">{t.ideal_for.title}</h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            {t.ideal_for.items.map((item, index) => (
                                <div key={index}>
                                    <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                                    <p className="text-lg text-black/70">{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="hidden lg:block relative aspect-[4/3]">
                            <Image
                                src={t.ideal_for.image}
                                alt="Event sound technical challenge"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Help */}
            <section className="py-20 bg-black">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-white text-center leading-heading">{t.how_we_help.title}</h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="hidden lg:block relative aspect-[4/3]">
                            <Image
                                src={t.how_we_help.image}
                                alt="Event atmosphere with guests enjoying"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                        <div className="space-y-6">
                            {t.how_we_help.items.map((item, index) => (
                                <div key={index}>
                                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-lg text-white/80">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <FinalCTA
                heading={lang === 'el' ? 'Αναβαθμίστε την ατμόσφαιρα της εκδήλωσής σας' : "Upgrade your event's atmosphere"}
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
