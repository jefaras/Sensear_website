import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { FinalCTA } from "@/components/sections/FinalCTA";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        title: dict.case_studies.meta.title,
        description: dict.case_studies.meta.description,
    };
}

export default async function CaseStudies({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.case_studies;

    // Manual list of SoundCloud sources and images based on the items order
    // Order: Beach House, Pelicanos, Yam, Levantis
    const assetMap = [
        {
            img: "/images/case-studies/case-study-beach-house.webp",
            scUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2232613925&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
            scLink: "https://soundcloud.com/sensear_music/beach-house-antiparos-morning-playlist-sample"
        },
        {
            img: "/images/case-studies/case-study-pelicanos.webp",
            scUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2231292320%3Fsecret_token%3Ds-nZKQRmscC5Z&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
            scLink: "https://soundcloud.com/sensear_music/pelicanos-sifnos-jazzy-playlist-1/s-nZKQRmscC5Z"
        },
        {
            img: "/images/case-studies/case-study-yam.jpg",
            scUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2231292317%3Fsecret_token%3Ds-un8Lzx2ibpI&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
            scLink: "https://soundcloud.com/sensear_music/yam-antiparos-night-playlist-2/s-un8Lzx2ibpI"
        },
        {
            img: "/images/case-studies/case-study-levantis.webp",
            scUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2231959406&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
            scLink: "https://soundcloud.com/sensear_music/levantis-sample"
        }
    ];

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
            <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-32 pb-8 lg:pb-24 min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden">
                {/* Background Image Overlay */}
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
                                        src="/images/case-studies/case-studies-hero.jpg"
                                        alt="Case Studies showcasing music curation projects"
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
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                                {content.intro.p1}
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                                {content.intro.p2}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-24 relative">
                <div
                    className="absolute inset-0 z-0 opacity-20"
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
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 leading-heading">
                            {lang === 'el' ? 'Τέσσερις χώροι, τέσσερις διαφορετικές διαδρομές' : 'Four venues, four journeys'}
                        </h2>
                        <p className="text-xl text-black/60 font-medium mb-12">
                            {lang === 'el' ? 'Κάθε ένας με τον δικό του χαρακτήρα, τις ανάγκες και τη μουσική του λύση.' : 'Each with its own character, needs and musical solution.'}
                        </p>
                    </div>

                    <div className="space-y-24">
                        {content.items.map((item, index) => {
                            const assets = assetMap[index] || assetMap[0];
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                                    {/* Image Column */}
                                    <div className={`${isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
                                        <div className="overflow-hidden rounded-xl shadow-lg bg-white relative aspect-[3/4]">
                                            <Image
                                                src={assets.img}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                    </div>

                                    {/* Content Column */}
                                    <div className={`${isEven ? 'order-1 lg:order-2' : 'order-1'}`}>
                                        <h3 className="text-4xl md:text-[48px] font-bold text-black mb-10">{item.title}</h3>

                                        <div className="mb-8">
                                            <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-6">
                                                {item.desc1}
                                            </p>
                                            <p className="text-lg md:text-xl text-black/60 leading-relaxed font-medium">
                                                {item.desc2}
                                            </p>
                                        </div>

                                        <div className="space-y-6">
                                            <iframe
                                                width="100%"
                                                height="166"
                                                scrolling="no"
                                                frameBorder="0"
                                                allow="autoplay"
                                                src={assets.scUrl}
                                                className="rounded-xl shadow-md"
                                            ></iframe>
                                            <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: '100' }}>
                                                <a href="https://soundcloud.com/sensear_music" title="SensEar.Music" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>SensEar.Music</a> · <a href={assets.scLink} title={item.link_text} target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>{item.link_text}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <FinalCTA
                heading={content.cta.title}
                text={content.cta.subtitle}
                buttons={[
                    { text: content.cta.contact, link: "contact" },
                    { text: content.cta.services, link: "services" }
                ]}
                lang={lang}
            />
        </div>
    );
}
