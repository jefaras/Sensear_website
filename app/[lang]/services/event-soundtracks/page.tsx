import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export default async function EventSoundtracksPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;

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
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-full px-6 md:px-12 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col justify-center text-left">
                            <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Event Soundtracks:</span>
                                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Music timed to your event's flow.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                                Soundtracks designed to support each phase, from arrival to finale.
                            </p>
                        </div>
                        <div className="w-full slide-up-4 flex justify-center lg:justify-end">
                            <div className="w-full lg:w-[93.5%]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl">
                                    <div className="relative aspect-square">
                                        <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f5124bf21_pxbee_2025-11-20_15-29-00-cropped1-1.jpg" alt="Custom event soundtracks and live DJ programming" className="w-full h-full object-cover" />
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
                        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12">
                            Music that moves<br />with your event's timeline
                        </h2>
                        <div className="w-full">
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                                We design soundtracks to <strong><em>follow your event's plan</em></strong>, so energy always <strong><em>matches</em></strong> the moment.
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                                Music <strong><em>carries the event forward</em></strong>, turning interactions into something guests <strong><em>enjoy & remember</em></strong>.
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
                            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e56a199c4_ac423ae7b75beed60a76ecc7a719d544croppedUPSCALED.jpg" alt="Event soundtrack planning and execution" className="w-full h-auto rounded-2xl shadow-lg" />
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Follow your event timeline</h3>
                                <p className="text-lg text-black/70">Custom multi-part music themes that match your event's sequence & happenings.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Playlists, DJ sets or both</h3>
                                <p className="text-lg text-black/70">Music that fits your concept and audience, delivered as you need it.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Total sound confidence</h3>
                                <p className="text-lg text-black/70">AV direction, sound checks, and playback management so nothing is left to chance.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Optional venue audit</h3>
                                <p className="text-lg text-black/70">Inspection of your space for coverage & clarity issues or upgrade needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Perfect for */}
            <section className="py-20" style={{ backgroundImage: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Perfect for</h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <ul className="space-y-8 text-lg text-black/70">
                                <li className="block">
                                    <Link href={`/${lang}/industries/hotels-resorts`} className="underline hover:text-black font-semibold text-2xl block mb-1">Hotels & Resorts</Link>
                                    <span>hosting launches, weddings, or signature dinners.</span>
                                </li>
                                <li className="block">
                                    <Link href={`/${lang}/industries/events-experiences`} className="underline hover:text-black font-semibold text-2xl block mb-1">Event Organisers & Agencies</Link>
                                    <span>creating immersive branded experiences.</span>
                                </li>
                                <li className="block">
                                    <Link href={`/${lang}/industries/restaurants-bars`} className="underline hover:text-black font-semibold text-2xl block mb-1">Private Chefs & Hosts</Link>
                                    <span>offering ceremonial or intimate dining.</span>
                                </li>
                                <li className="block">
                                    <Link href={`/${lang}/industries/art-museums-fashion`} className="underline hover:text-black font-semibold text-2xl block mb-1">Cultural Venues & Galleries</Link>
                                    <span>staging talks, previews or exhibition openings.</span>
                                </li>
                                <li className="block">
                                    <Link href={`/${lang}/blog`} className="underline hover:text-black font-semibold text-2xl block mb-1">Brands</Link>
                                    <span>that want music to shape how guests feel, share & remember.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:block">
                            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9f56a9904_2f602f264fc83649ea78ee45caeec916upscaled.jpg" alt="Event venue with curated soundscape" className="w-full h-auto rounded-2xl shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Professionally managed staging */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Professionally managed staging</h2>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="hidden lg:block">
                            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f5882e104_IMG_20250917_225633.jpg" alt="Event music planning process" className="w-full h-auto rounded-2xl shadow-lg" />
                        </div>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-black mb-3">Creative, but also precise</h3>
                                <p className="text-lg text-black/70">We manage or supervise scheduling, sound checks and live adjustments so key moments land as planned and you focus on hosting.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20" style={{ backgroundImage: "linear-gradient(to bottom, #faebe3 0%, rgba(250, 235, 227, 0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Let us design your event's sonic journey</h2>
                    <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
                        Need a soundtrack that feels as curated as everything else?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href={`/${lang}/contact`}>
                            <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                    Book your event consultation
                                </span>
                                <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                            </button>
                        </Link>
                    </div>
                    <p className="text-black/70 mt-8">
                        Explore how our <Link href={`/${lang}/services/signature-playlists`} className="underline hover:text-black font-semibold">Signature Playlists</Link> & <Link href={`/${lang}/services/audio-upgrades`} className="underline hover:text-black font-semibold">Audio Upgrades</Link> support event experiences.
                    </p>
                </div>
            </section>
        </div>
    );
}
