import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

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
            img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/4246ff146_upscalemedia-transformed.png",
            scUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2232613925&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
            scLink: "https://soundcloud.com/sensear_music/beach-house-antiparos-morning-playlist-sample"
        },
        {
            img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5b48f2dce_pelicanos-2-5.png",
            scUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2231292320%3Fsecret_token%3Ds-nZKQRmscC5Z&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
            scLink: "https://soundcloud.com/sensear_music/pelicanos-sifnos-jazzy-playlist-1/s-nZKQRmscC5Z"
        },
        {
            img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/2886fc06f_hyggelig-aftenstemningcropped-pxbee-minitools-enhance-20251212181718.jpg",
            scUrl: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%3Atracks%3A2231292317%3Fsecret_token%3Ds-un8Lzx2ibpI&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
            scLink: "https://soundcloud.com/sensear_music/yam-antiparos-night-playlist-2/s-un8Lzx2ibpI"
        },
        {
            img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d36a8c70d_2e5887651_Levantis1.png",
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
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden">
                {/* Background Image Overlay */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')",
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
                        <div className="w-full slide-up-4 flex justify-center lg:justify-end">
                            <div className="w-full lg:w-[93.5%]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl bg-white aspect-square relative">
                                    <img
                                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d7a77faed_flux-pro-20_photography_of_Upscale_this_image_candid_photography_style-0.jpg"
                                        alt="Case Studies"
                                        className="w-full h-full object-cover"
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
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
                            {content.intro.title.split('<br />').map((line, i) => <span key={i} className="block">{line}</span>) || content.intro.title}
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
                ), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed'
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">
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
                                            <img
                                                src={assets.img}
                                                alt={item.title}
                                                className="w-full h-full object-cover"
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
            <section className="py-20 bg-gradient-to-r from-[#f5d4c1] via-[#e8c3b0] to-[#f5d4c1] bg-[length:400%_400%] animate-gradient-shift">
                <div className="w-full mx-auto px-6 text-center">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">{content.cta.title}</h2>
                    <p className="text-xl text-black/60 mb-12 max-w-3xl mx-auto">
                        {content.cta.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href={`/${lang}/contact`}>
                            <Button
                                variant="outline"
                                className="group w-full sm:w-auto h-14 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 text-lg font-semibold rounded-full transition-all duration-300"
                            >
                                <span className="mr-2">{content.cta.contact}</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <span className="text-black/60 font-medium">{lang === 'el' ? 'ή' : 'or'}</span>
                        <Link href={`/${lang}/services`}>
                            <Button
                                variant="outline"
                                className="group w-full sm:w-auto h-14 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 text-lg font-semibold rounded-full transition-all duration-300"
                            >
                                <span className="mr-2">{content.cta.services}</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
