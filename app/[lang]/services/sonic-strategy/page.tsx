import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export default async function SonicStrategyPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    return (
        <div className="bg-[#faebe3]">
            <style dangerouslySetInnerHTML={{ __html: `@keyframes slideUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}.slide-up-1{animation:slideUp .8s ease-out forwards;opacity:0}.slide-up-2{animation:slideUp .8s ease-out .2s forwards;opacity:0}.slide-up-4{animation:slideUp .8s ease-out .6s forwards;opacity:0}` }} />
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-full px-6 md:px-12 lg:px-16"><div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center text-left">
                        <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                            <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Sonic Strategy:</span>
                            <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Defining how your brand sounds.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">A practical audio blueprint that keeps your label distinct & consistent.</p>
                    </div>
                    <div className="w-full slide-up-4 flex justify-center lg:justify-end"><div className="w-full lg:w-[93.5%]"><div className="overflow-hidden rounded-2xl shadow-2xl"><div className="relative aspect-square">
                        <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/726fac292_Empire_Song4-cropped1-1.jpg" alt="Sonic strategy and audio branding for brands" className="w-full h-full object-cover" />
                    </div></div></div></div>
                </div></div>
            </section>
            <section className="bg-black py-20"><div className="max-w-7xl mx-auto px-6"><div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12">Sonic action plan<br />for consistent brand identity</h2>
                <div className="w-full">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">We translate your brand vision into a <strong><em>practical audio guide</em></strong> that works for <strong><em>every space & channel</em></strong>.</p>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">Your firm gains a <strong><em>clear sonic identity</em></strong>, consistent across <strong><em>spaces</em></strong>, <strong><em>social media</em></strong> & <strong><em>ads</em></strong>.</p>
                </div>
            </div></div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-4 text-black text-center">What we do</h2>
                <p className="text-xl text-black/60 font-medium text-center mb-12">Brand audio strategy and implementation</p>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/deb3db30e_image00006b-CROPPED1.jpg" alt="Sonic DNA workshop and brand audio strategy" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8">
                        <div><h3 className="text-2xl font-bold text-black mb-3">Sonic DNA workshop</h3><p className="text-lg text-black/70">Guided session exploring brand values, guest profiles, and emotional targets through mood boards and reference tracks.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Space and journey map</h3><p className="text-lg text-black/70">Clear plan for how each space and time of day should sound, supporting arrivals, service flow, and key touchpoints.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Guidelines for teams</h3><p className="text-lg text-black/70">Concise sonic framework that keeps music choices on brand across internal teams, agencies, and partners.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Implementation roadmap</h3><p className="text-lg text-black/70">Practical path from current sound to new identity, aligned with your brand calendar and rollout timeline.</p></div>
                    </div>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Perfect for</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div><ul className="space-y-8 text-lg text-black/70">
                        <li className="block"><Link href={`/${lang}/industries/hotels-resorts`} className="underline hover:text-black font-semibold text-2xl block mb-1">Hotel & Resort groups</Link><span>needing one recognizable sound across properties.</span></li>
                        <li className="block"><span className="block mb-1"><Link href={`/${lang}/industries/restaurants-bars`} className="underline hover:text-black font-semibold text-2xl">Restaurant, Bar</Link> <span className="text-2xl">&</span> <Link href={`/${lang}/industries/retail-stores`} className="underline hover:text-black font-semibold text-2xl">Retail brands</Link></span><span>growing, rebranding, or opening new locations.</span></li>
                        <li className="block"><span className="block mb-1"><Link href={`/${lang}/industries/wellness-gyms`} className="underline hover:text-black font-semibold text-2xl">Wellness</Link> <span className="text-2xl">&</span> <Link href={`/${lang}/industries/art-museums-fashion`} className="underline hover:text-black font-semibold text-2xl">Cultural spaces</Link></span><span>wanting a defined sonic personality.</span></li>
                        <li className="block"><Link href={`/${lang}/industries/art-museums-fashion`} className="underline hover:text-black font-semibold text-2xl block mb-1">Fashion & Lifestyle brands</Link><span>with strong visual identity but undefined sound.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Marketing agencies</span><span>with brand vision but no in-house audio expertise.</span></li>
                    </ul></div>
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/2f1aa2923_00a27c3bd633abfcfe751c91ef9d3f08sonic.jpg" alt="Brand sonic identity development" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                </div>
            </div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Strategically defined identity</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7c6f67623_d6be48cfcce95f702a6c4b34c0e7cc47CROPPED-pxbee-minitools-enhance-2025112017940.jpg" alt="Sonic strategy implementation process" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8"><div><h3 className="text-2xl font-bold text-black mb-3">Coherent, but also flexible</h3><p className="text-lg text-black/70">Your brand sounds recognizable at all locations & media while respecting what makes each space unique.</p></div></div>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "linear-gradient(to bottom, #faebe3 0%, rgba(250, 235, 227, 0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Let us define your brand's sonic identity</h2>
                <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">Require a sound strategy as considered as your design?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"><Link href={`/${lang}/contact`}><button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center"><span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">Start your sonic strategy</span><ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" /></button></Link></div>
                <p className="text-black/70 mt-8">Explore how our <Link href={`/${lang}/services/signature-playlists`} className="underline hover:text-black font-semibold">Signature Playlists</Link> & <Link href={`/${lang}/services/audio-upgrades`} className="underline hover:text-black font-semibold">Audio Upgrades</Link> bring your strategy to life.</p>
            </div></section>
        </div>
    );
}
