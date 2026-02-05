import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export default async function AudioUpgradesPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    return (
        <div className="bg-[#faebe3]">
            <style dangerouslySetInnerHTML={{ __html: `@keyframes slideUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}.slide-up-1{animation:slideUp .8s ease-out forwards;opacity:0}.slide-up-2{animation:slideUp .8s ease-out .2s forwards;opacity:0}.slide-up-4{animation:slideUp .8s ease-out .6s forwards;opacity:0}` }} />
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-full px-6 md:px-12 lg:px-16"><div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center text-left">
                        <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                            <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Audio Upgrades:</span>
                            <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Clear, balanced sound for your space.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">Optimization designed to support atmosphere & conversations.</p>
                    </div>
                    <div className="w-full slide-up-4 flex justify-center lg:justify-end"><div className="w-full lg:w-[93.5%]"><div className="overflow-hidden rounded-2xl shadow-2xl"><div className="relative aspect-square">
                        <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/22a32a26f_seedream-40_professional_photo_of_a_sleek_speaker_in_a_modern_setting_with_a_collection_of_r-1crop1-1.jpg" alt="Professional audio equipment optimization" className="w-full h-full object-cover" />
                    </div></div></div></div>
                </div></div>
            </section>
            <section className="bg-black py-20"><div className="max-w-7xl mx-auto px-6"><div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12">Audio optimization<br />for an inviting atmosphere</h2>
                <div className="w-full">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">We <strong><em>refine</em></strong> your audio system, to achieve <strong><em>clear, balanced sound</em></strong> allover your space.</p>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">Optimised audio <strong><em>elevates your design</em></strong>, letting people <strong><em>enjoy</em></strong> their <strong><em>conversations</em></strong> & <strong><em>music</em></strong> comfortably.</p>
                </div>
            </div></div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-4 text-black text-center">What we do</h2>
                <p className="text-xl text-black/60 font-medium text-center mb-12">Professional audio assessment and implementation</p>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/8aea621ce_e65177c598c0c9820abde209555dc0d0cropped2-pxbee-minitools-enhance-20251120175811.jpg" alt="Professional audio assessment" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8">
                        <div><h3 className="text-2xl font-bold text-black mb-3">On-site acoustic assessment</h3><p className="text-lg text-black/70">We walk the space, listen from key seats and test your setup to identify gaps & issues.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Tailored AV proposals</h3><p className="text-lg text-black/70">Clear plan for speakers, zones and control that fits your layout, budget & aesthetic.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Coordinated installation</h3><p className="text-lg text-black/70">We manage equipment sourcing & installation with AV partners, so you avoid multiple suppliers.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">System tuning & training</h3><p className="text-lg text-black/70">Calibration under live conditions plus guidance, so your team runs it confidently day to day.</p></div>
                    </div>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Perfect for</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div><ul className="space-y-8 text-lg text-black/70">
                        <li className="block"><Link href={`/${lang}/industries/restaurants-bars`} className="underline hover:text-black font-semibold text-2xl block mb-1">Restaurants & Bars</Link><span>where guests struggle to talk over music.</span></li>
                        <li className="block"><Link href={`/${lang}/industries/hotels-resorts`} className="underline hover:text-black font-semibold text-2xl block mb-1">Hotels & Resorts</Link><span>with lobbies, pools or dining areas that sound uneven.</span></li>
                        <li className="block"><Link href={`/${lang}/industries/retail-stores`} className="underline hover:text-black font-semibold text-2xl block mb-1">Retail Stores</Link><span>with dead corners & overpowering spots near speakers.</span></li>
                        <li className="block"><Link href={`/${lang}/industries/wellness-gyms`} className="underline hover:text-black font-semibold text-2xl block mb-1">Wellness Centers</Link><span>needing clear sound for classes without harshness.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Venues</span><span>that invested in interiors but feel sound lowers the experience.</span></li>
                    </ul></div>
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fb6a2cfcc_0acfe1722c9ef9946388029ddb720290CROPPED.jpg" alt="Audio optimization for venues" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                </div>
            </div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Designed for clarity</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b00d7c94c_aiease_1763654314701.jpg" alt="Audio clarity and coverage" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                    <div className="space-y-8"><div><h3 className="text-2xl font-bold text-black mb-3">Balanced coverage, not just volume</h3><p className="text-lg text-black/70">Guests talk comfortably, move naturally through spaces & remember atmosphere instead of loudness.</p></div></div>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "linear-gradient(to bottom, #faebe3 0%, rgba(250, 235, 227, 0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Let us upgrade your venue's sound</h2>
                <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">Need audio that matches your design quality?</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"><Link href={`/${lang}/contact`}><button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center"><span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">Book your audio assessment</span><ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" /></button></Link></div>
                <p className="text-black/70 mt-8">Pair with our <Link href={`/${lang}/services/signature-playlists`} className="underline hover:text-black font-semibold">Signature Playlists</Link> & <Link href={`/${lang}/services/sonic-strategy`} className="underline hover:text-black font-semibold">Sonic Strategy</Link> for complete audio identity.</p>
            </div></section>
        </div>
    );
}
