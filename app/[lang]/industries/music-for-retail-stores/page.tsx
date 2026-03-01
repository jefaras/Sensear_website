import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/lib/dictionary";
import { AnimatedButton } from "@/components/AnimatedButton";
import { FinalCTA } from "@/components/sections/FinalCTA";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.retail_stores;

    return {
        title: t.meta?.title || "Music for Retail Stores | SensEar",
        description: lang === 'el'
            ? 'Εξειδικευμένη μουσική επιμέλεια για καταστήματα λιανικής. Δημιουργούμε τη μοναδική ηχητική ταυτότητα του brand σας.'
            : 'Bespoke music curation for retail stores. We craft your brand\'s unique sonic identity for memorable shopping experiences.',
        openGraph: {
            title: t.meta?.title || "Music for Retail Stores | SensEar",
            description: lang === 'el'
                ? 'Εξειδικευμένη μουσική επιμέλεια για καταστήματα λιανικής.'
                : 'Bespoke music curation for retail stores.',
            type: 'website',
        },
    };
}

export default async function RetailStoresPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.retail_stores;

    return (
        <main className="bg-[#faebe3]">
            <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-32 pb-8 lg:pb-24 min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-full px-6 md:px-12 lg:px-16"><div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center text-left">
                        <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                            <span className="block mb-3 text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">{t.hero.title}</span>
                            <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">{t.hero.subtitle}</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">{t.hero.description}</p>
                    </div>
                    <div className="w-full slide-up-4 flex justify-end"><div className="w-full max-w-[740px]"><div className="overflow-hidden rounded-2xl shadow-2xl"><div className="relative aspect-square">
                        <Image src={t.hero.image} alt={t.hero.image_alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                    </div></div></div></div>
                </div></div>
            </section>
            <section className="bg-black py-20"><div className="max-w-7xl mx-auto px-6"><div className="flex flex-col items-center text-center">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-heading mb-12" dangerouslySetInnerHTML={{ __html: t.intro.title }}></h2>
                <div className="w-full">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.intro.p1 }}></p>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.intro.p2 }}></p>
                </div>
            </div></div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12"><h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 leading-heading">{t.what_we_do.title}</h2><p className="text-xl text-black/60 font-medium">{t.what_we_do.subtitle}</p></div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block relative aspect-[3/4]"><Image src={t.what_we_do.image} alt="Stylish man in retail fashion setting" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8">
                        {t.what_we_do.items.map((item, index) => (
                            <div key={index}><h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3><p className="text-lg text-black/70">{item.description}</p></div>
                        ))}
                    </div>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center leading-heading">{t.ideal_for.title}</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div><ul className="space-y-8 text-lg text-black/70">
                        {t.ideal_for.items.map((item, index) => (
                            <li key={index} className="block"><span className="font-semibold text-2xl block mb-1 text-black">{item.title}</span><span>{item.description}</span></li>
                        ))}
                    </ul></div>
                    <div className="hidden lg:block relative aspect-[3/4]"><Image src={t.ideal_for.image} alt="Fashion model in stylish retail setting" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover rounded-2xl shadow-lg" /></div>
                </div>
            </div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center leading-heading">{t.how_we_help.title}</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block relative aspect-[3/4]"><Image src={t.how_we_help.image} alt="Modern retail interior with neon lighting" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8">
                        {t.how_we_help.items.map((item, index) => (
                            <div key={index}><h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3><p className="text-lg text-black/70">{item.description}</p></div>
                        ))}
                    </div>
                </div>
            </div></section>
            <FinalCTA
                heading={lang === 'el' ? 'Αναβαθμίστε την ατμόσφαιρα του καταστήματός σας' : "Upgrade your store's atmosphere"}
                text={t.cta.description}
                buttons={[
                    { text: t.cta.button, link: 'contact' },
                    { text: lang === 'el' ? 'Δείτε τις υπηρεσίες μας' : 'Explore our services', link: 'services' }
                ]}
                lang={lang}
            />
        </main>
    );
}
