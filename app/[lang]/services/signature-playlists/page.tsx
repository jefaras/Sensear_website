import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";

export default async function SignaturePlaylistsPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return (
        <div className="bg-[#faebe3]">
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .slide-up-1 {
                    animation: slideUp 0.8s ease-out forwards;
                    opacity: 0;
                }
                
                .slide-up-2 {
                    animation: slideUp 0.8s ease-out 0.2s forwards;
                    opacity: 0;
                }
                
                .slide-up-4 {
                    animation: slideUp 0.8s ease-out 0.6s forwards;
                    opacity: 0;
                }
            `}} />

            {/* Hero Section */}
            <section
                className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="w-full px-6 md:px-12 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col justify-center text-left">
                            <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Signature Playlists:</span>
                                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Custom music for your space.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                                Curated playlists that follow your brand, space & daily rhythm.
                            </p>
                        </div>

                        <div className="w-full slide-up-4 flex justify-center lg:justify-end">
                            <div className="w-full lg:w-[93.5%]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl">
                                    <div className="relative aspect-square">
                                        <img
                                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/cb5c9be16_fe959a9eda0e3059a0b19f803958ba85-cropped.jpg"
                                            alt="Bespoke music curation and playlist creation for unique venue atmosphere"
                                            className="w-full h-full object-cover"
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
                        <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
                            Playlist creation for<br />unique venue atmosphere
                        </h2>
                        <div className="w-full">
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                                We create <strong><em>playlists</em></strong> in tune with your brand's <strong><em>character</em></strong> and space's <strong><em>rhythm</em></strong>, to balance <strong><em>energy</em></strong> for both guests & staff.
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                                Your sound <strong><em>becomes intentional</em></strong> & <strong><em>felt</em></strong> in the atmosphere, not lost in the background.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What we do */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">What we do</h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="hidden lg:block">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da61f346a_afb08a148_fe959a9eda0e3059a0b19f803958ba8511.jpg"
                                alt="Mindful music curation experience"
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Your own, unique sound</h3>
                                <p className="text-lg text-black/70">Rare tracks you won't hear on generic playlists, chosen especially for you.</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Amplify your brand</h3>
                                <p className="text-lg text-black/70">Music designed to echo your aesthetics & tell your brand story</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Match your space</h3>
                                <p className="text-lg text-black/70">Tracks arranged to follow your venue's flow, concept & guest profiles.</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Keep your vibe fresh</h3>
                                <p className="text-lg text-black/70">Regular updates that keep your sound exciting & recognizable.</p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Total control & support</h3>
                                <p className="text-lg text-black/70">Clear rules, central management & direct access to us when needed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perfect for */}
            <section
                className="py-20"
                style={{
                    backgroundImage: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Perfect for</h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <ul className="space-y-8 text-lg text-black/70">
                                <li className="block">
                                    <Link href={`/${lang}/industries/hotels-resorts`} className="underline hover:text-black font-semibold text-2xl block mb-1">Hotels & Resorts</Link>
                                    <span>that need smooth shifts throughout the day.</span>
                                </li>
                                <li className="block">
                                    <Link href={`/${lang}/industries/restaurants-bars`} className="underline hover:text-black font-semibold text-2xl block mb-1">Restaurants & Bars</Link>
                                    <span>where atmosphere is a core part of the experience.</span>
                                </li>
                                <li className="block">
                                    <Link href={`/${lang}/industries/retail-stores`} className="underline hover:text-black font-semibold text-2xl block mb-1">Retail stores</Link>
                                    <span>that want a soundtrack to fit their visual story.</span>
                                </li>
                                <li className="block">
                                    <Link href={`/${lang}/industries/wellness-gyms`} className="underline hover:text-black font-semibold text-2xl block mb-1">Wellness spaces</Link>
                                    <span>to support treatments or training sessions.</span>
                                </li>
                                <li className="block">
                                    <Link href={`/${lang}/industries/art-museums-fashion`} className="underline hover:text-black font-semibold text-2xl block mb-1">Art & Culture spaces</Link>
                                    <span>that need engaging but unobtrusive sound.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="hidden lg:block">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/87dbd6b8d_ngirwbclf1ak7t0bbzyv.jpg"
                                alt="Luxury hotel room with curated music atmosphere"
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Licensed for business use */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Licensed for business use</h2>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="hidden lg:block">
                            <img
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16c07c365_cc313a1e26a1dd887202657b5dabf32c.jpg"
                                alt="Vinyl records collection for curated playlists"
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">On-brand, but also legal playlists</h3>
                                <p className="text-lg text-black/70">We provide music cleared for professional use which offers you an extra ease of mind.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section
                className="py-20"
                style={{
                    backgroundImage: "linear-gradient(to bottom, #faebe3 0%, rgba(250, 235, 227, 0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Let us craft your signature sound</h2>
                    <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
                        Need a perfect soundscape that reflects your brand and captivates your guests?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href={`/${lang}/contact`}>
                            <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                    Create your signature sound
                                </span>
                                <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                            </button>
                        </Link>
                    </div>
                    <p className="text-black/70 mt-8">
                        Explore how our <Link href={`/${lang}/services/sonic-strategy`} className="underline hover:text-black font-semibold">Sonic Strategy</Link> & <Link href={`/${lang}/services/audio-upgrades`} className="underline hover:text-black font-semibold">Audio Upgrades</Link> build on your playlists.
                    </p>
                </div>
            </section>
        </div>
    );
}
