import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export default async function AudioUpgradesPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const t = dict.audio_upgrades;

    return (
        <div className="bg-[#faebe3]">
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
                        <img src="/images/services/audio-upgrades/audio-upgrades-hero.jpg" alt="Professional audio equipment optimization" className="w-full h-full object-cover" />
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
                    <div className="hidden lg:block"><img src="/images/services/audio-upgrades/audio-upgrades-assessment.jpg" alt="Professional audio assessment" className="w-full h-auto rounded-2xl shadow-lg" /></div>
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
                    <div className="hidden lg:block"><img src="/images/services/audio-upgrades/audio-upgrades-venue.jpg" alt="Audio optimization for venues" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                </div>
            </div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center leading-heading">{t.clarity.title}</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><img src="/images/services/audio-upgrades/audio-upgrades-clarity.jpg" alt="Audio clarity and coverage" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8">
                        {t.clarity.items.map((item: any, index: number) => (
                            <div key={index}>
                                <h3 className="text-2xl font-bold text-black mb-3">{item.title}</h3>
                                <p className="text-lg text-black/70">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "linear-gradient(to bottom, #faebe3 0%, rgba(250, 235, 227, 0) 15%), url('/images/backgrounds/background-texture-warm-silver.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12 leading-heading">{t.cta.title}</h2>
                <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">{t.cta.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"><Link href={`/${lang}/contact`}><button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center"><span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">{t.cta.button}</span><ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" /></button></Link></div>
                <p className="text-black/70 mt-8">{t.cta.pair_with} <Link href={`/${lang}/services/signature-playlists`} className="underline hover:text-black font-semibold">{t.cta.signature_playlists}</Link> & <Link href={`/${lang}/services/sonic-identity`} className="underline hover:text-black font-semibold">{t.cta.sonic_identity}</Link> {t.cta.complete_identity}</p>
            </div></section>
        </div>
    );
}
