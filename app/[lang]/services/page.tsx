import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        title: dict.services_page.meta.title,
        description: dict.services_page.meta.description,
    };
}

export default async function Services({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.services_page;

    return (
        <main className="bg-[#faebe3]">
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-up-1 { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
        .slide-up-2 { animation: slideUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .slide-up-4 { animation: slideUp 0.8s ease-out 0.6s forwards; opacity: 0; }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient {
            background-size: 400% 400%;
            animation: gradient-shift 10s ease infinite;
        }
      `}} />

            {/* Hero Section */}
            <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-32 pb-8 lg:pb-24 min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden">
                {/* Background - using inline style for arbitrary external URL */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />

                <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: H1 */}
                        <div className="flex flex-col justify-center text-left">
                            <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                                {content.hero.title.split('<br />').map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                )) || content.hero.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                                {content.hero.subtitle}
                            </p>
                        </div>

                        {/* Right Column: Square Image */}
                        <div className="w-full slide-up-4 flex justify-end">
                            <div className="w-full max-w-[740px]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl bg-white aspect-square relative">
                                    <Image
                                        src="/images/services/services-hero-strategic-music.jpg"
                                        alt="Strategic music services for hospitality and retail venues"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section - Black Background */}
            <section className="bg-black py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
                            {content.intro.title.replace('<br />', ' ')}
                        </h2>

                        <div className="w-full text-center">
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: content.intro.p1 }} />
                            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.intro.p2 }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Starting Point Section */}
            <section className="pt-24 pb-12 relative">
                <div
                    className="absolute inset-0 z-0 opacity-100" // Not fading out here as per design used in other pages or kept vivid
                    style={{
                        backgroundImage: `linear-gradient(to bottom, 
                  #ffffff 0%, 
                  #ffffff 25%, 
                  rgba(255,255,255,0) 45%, 
                  rgba(255,255,255,0) 55%,
                  #FFF7F2 75%, 
                  #ffffff 100%
                ), url('/images/backgrounds/background-texture-warm-silver.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed'
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-24">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 leading-heading">{content.starting_point.title}</h2>
                        <p className="text-xl text-black/60 font-medium max-w-3xl mx-auto">{content.starting_point.subtitle}</p>
                    </div>

                    {/* Signature Playlists */}
                    <div className="mb-24">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <Image
                                    src="/images/services/service-signature-playlists.jpg"
                                    alt="Signature Playlists service for curated music experiences"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover rounded-xl shadow-lg"
                                />
                            </div>

                            <div className="order-1 lg:order-2">
                                <h3 className="text-[2.7rem] md:text-[48px] font-bold text-black leading-tight mb-2">
                                    {content.services.playlists.title}
                                </h3>
                                <p className="text-xl font-medium text-black/60 mb-8">{content.services.playlists.subtitle}</p>

                                <div>
                                    <div className="mb-6">
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">{content.services.playlists.desc}</p>
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.services.playlists.ideal_for }} />
                                    </div>

                                    <Link href={`/${lang}/services/signature-playlists`}>
                                        <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                            <span className="relative inline-flex items-center mr-2 align-middle">
                                                <Image src="/images/brand/sensear-logo-color.png" width={32} height={32} className="w-8 h-8 object-contain opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300" alt="" />
                                            </span>
                                            <span className="transition-transform duration-300 group-hover:-translate-x-10 inline-block">
                                                {content.services.playlists.cta}
                                            </span>
                                            <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Event Soundtracks */}
                    <div className="mb-24">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-1 lg:order-1">
                                <h3 className="text-[2.7rem] md:text-[48px] font-bold text-black leading-tight mb-2">
                                    {content.services.events.title}
                                </h3>
                                <p className="text-xl font-medium text-black/60 mb-8">{content.services.events.subtitle}</p>

                                <div>
                                    <div className="mb-6">
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">{content.services.events.desc}</p>
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed" dangerouslySetInnerHTML={{ __html: content.services.events.ideal_for }} />
                                    </div>

                                    <Link href={`/${lang}/services/event-soundtracks`}>
                                        <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                            <span className="relative inline-flex items-center mr-2 align-middle">
                                                <Image src="/images/brand/sensear-logo-color.png" width={32} height={32} className="w-8 h-8 object-contain opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300" alt="" />
                                            </span>
                                            <span className="transition-transform duration-300 group-hover:-translate-x-10 inline-block">
                                                {content.services.events.cta}
                                            </span>
                                            <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                        </button>
                                    </Link>
                                </div>
                            </div>

                            <div className="order-2 lg:order-2">
                                <Image
                                    src="/images/services/service-event-soundtracks.jpg"
                                    alt="Event Soundtracks service for memorable experiences"
                                    width={800}
                                    height={1000}
                                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Alternative 1: Compact Side-by-Side Cards */}
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Sonic Strategy Card */}
                        <div className="bg-white/50 border border-black/10 rounded-2xl p-6 lg:p-8">
                            <Image
                                src="/images/services/service-sonic-strategy.jpg"
                                alt="Sonic Strategy service for brand identity"
                                width={600}
                                height={400}
                                className="w-full h-48 lg:h-56 object-cover rounded-xl mb-6"
                            />
                            <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-1">
                                {content.services.strategy.title}
                            </h3>
                            <p className="text-lg font-medium text-black/50 mb-4">{content.services.strategy.subtitle}</p>
                            <p className="text-base text-black/60 leading-relaxed mb-4">{content.services.strategy.desc}</p>
                            <p className="text-base text-black/50 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: content.services.strategy.ideal_for }} />
                            <Link href={`/${lang}/services/sonic-identity`}>
                                <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-6 py-4 text-base font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                    <span className="relative inline-flex items-center mr-2 align-middle">
                                        <Image src="/images/brand/sensear-logo-color.png" width={28} height={28} className="w-7 h-7 object-contain opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300" alt="" />
                                    </span>
                                    <span className="transition-transform duration-300 group-hover:-translate-x-9 inline-block">
                                        {content.services.strategy.cta}
                                    </span>
                                    <ArrowRight className="absolute right-5 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                </button>
                            </Link>
                        </div>

                        {/* Audio Upgrades Card */}
                        <div className="bg-white/50 border border-black/10 rounded-2xl p-6 lg:p-8">
                            <Image
                                src="/images/services/service-audio-upgrades.jpg"
                                alt="Audio Upgrades service for venue sound quality"
                                width={600}
                                height={400}
                                className="w-full h-48 lg:h-56 object-cover rounded-xl mb-6"
                            />
                            <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight mb-1">
                                {content.services.upgrades.title}
                            </h3>
                            <p className="text-lg font-medium text-black/50 mb-4">{content.services.upgrades.subtitle}</p>
                            <p className="text-base text-black/60 leading-relaxed mb-4">{content.services.upgrades.desc}</p>
                            <p className="text-base text-black/50 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: content.services.upgrades.ideal_for }} />
                            <Link href={`/${lang}/services/audio-upgrades`}>
                                <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-6 py-4 text-base font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                    <span className="relative inline-flex items-center mr-2 align-middle">
                                        <Image src="/images/brand/sensear-logo-color.png" width={28} height={28} className="w-7 h-7 object-contain opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300" alt="" />
                                    </span>
                                    <span className="transition-transform duration-300 group-hover:-translate-x-9 inline-block">
                                        {content.services.upgrades.cta}
                                    </span>
                                    <ArrowRight className="absolute right-5 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-24 bg-[#faebe3]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <Image
                                src="/images/services/services-delivery-process.jpg"
                                alt="Services delivery process for music curation"
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                        </div>
                        <div className="order-1 lg:order-2 md:pl-12">
                            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-6 leading-heading">{content.delivery.title}</h2>
                            <p className="text-xl text-black/60 font-medium mb-12 leading-relaxed">{content.delivery.subtitle}</p>

                            <div className="space-y-8">
                                {content.delivery.points.map((point, index) => (
                                    <div key={index}>
                                        <Link href={`/${lang}/services/${point.link}`} className="text-2xl font-bold text-black block mb-1 group w-fit">
                                            <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">{point.link_text}</span> <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                        <p className="text-lg text-black/70">{point.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <FinalCTA
                heading={content.cta.title}
                text={content.cta.subtitle}
                buttons={[
                    { text: content.cta.contact_btn, link: "contact" },
                    { text: content.cta.industries_btn, link: "industries" }
                ]}
                lang={lang}
            />
        </main>
    );
}
