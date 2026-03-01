import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default async function SonicIdentityPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.sonic_identity;

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
                        <Image src="/images/services/sonic-identity/sonic-identity-hero.jpg" alt="Sonic identity and audio branding for brands" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    </div></div></div></div>
                </div></div>
            </section>
            <section className="bg-black py-20"><div className="max-w-7xl mx-auto px-6"><div className="flex flex-col items-center text-center">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-heading mb-12" dangerouslySetInnerHTML={{ __html: t.intro.title }} />
                <div className="w-full">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: t.intro.p1 }} />
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.intro.p2 }} />
                </div>
            </div></div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-4 text-black text-center leading-heading">{t.what_we_do.title}</h2>
                <p className="text-xl text-black/60 font-medium text-center mb-12">{t.what_we_do.subtitle}</p>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><Image src="/images/services/sonic-identity/sonic-identity-workshop.jpg" alt="Sonic DNA workshop and brand audio strategy" width={800} height={600} sizes="50vw" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8">
                        {t.what_we_do.items.map((item: any, index: number) => (
                            <div key={index}>
                                <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                                <p className="text-lg text-black/70">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0) 15%), url('/images/backgrounds/background-texture-warm-silver.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center leading-heading">{t.perfect_for.title}</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div><ul className="space-y-8 text-lg text-black/70">
                        {t.perfect_for.items.map((item: any, index: number) => (
                            <li key={index} className="block">
                                {item.link ? (
                                    <Link href={`/${lang}/${item.link}`} className="underline hover:text-black font-semibold text-2xl block mb-1">{item.title}</Link>
                                ) : (
                                    <span className="font-semibold text-2xl block mb-1 text-black">{item.title}</span>
                                )}
                                <span>{item.description}</span>
                            </li>
                        ))}
                    </ul></div>
                    <div className="hidden lg:block"><Image src="/images/services/sonic-identity/sonic-identity-development.jpg" alt="Brand sonic identity development" width={800} height={600} sizes="50vw" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                </div>
            </div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center leading-heading">{t.identity.title}</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><Image src="/images/services/sonic-identity/sonic-identity-implementation.jpg" alt="Sonic identity implementation process" width={800} height={600} sizes="50vw" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8">
                        {t.identity.items.map((item: any, index: number) => (
                            <div key={index}>
                                <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                                <p className="text-lg text-black/70">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div></section>
            <FinalCTA
                heading={lang === 'el' ? "Αφήστε μας να ορίσουμε την ηχητική ταυτότητα του brand σας" : "Let us define your brand's sonic identity"}
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
