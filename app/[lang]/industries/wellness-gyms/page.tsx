import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export default async function WellnessGymsPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    return (
        <div className="bg-[#faebe3]">
            <style dangerouslySetInnerHTML={{ __html: `@keyframes gradient-shift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.animated-gradient{background:linear-gradient(135deg,#f5d4c1 0%,#e8c3b0 15%,#d4c4b0 30%,#c0c0c0 45%,#d3d3d3 60%,#f0d5d0 75%,#e8c3b0 90%,#f5d4c1 100%);background-size:400% 400%;animation:gradient-shift 10s ease infinite}@keyframes slideUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}.slide-up-1{animation:slideUp .8s ease-out forwards;opacity:0}.slide-up-2{animation:slideUp .8s ease-out .2s forwards;opacity:0}.slide-up-4{animation:slideUp .8s ease-out .6s forwards;opacity:0}` }} />
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-full px-6 md:px-12 lg:px-16"><div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center text-left">
                        <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                            <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Music for Wellness & Gyms:</span>
                            <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Designed around activity & intensity.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">Thoughtful music that promotes focus across spaces & activities.</p>
                    </div>
                    <div className="w-full slide-up-4 flex justify-center lg:justify-end"><div className="w-full lg:w-[93.5%]"><div className="overflow-hidden rounded-2xl shadow-2xl"><div className="relative aspect-square">
                        <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1328f3e9a_80sspa-1-1.jpg" alt="Luxury wellness spa interior with curated ambient music" className="w-full h-full object-cover" />
                    </div></div></div></div>
                </div></div>
            </section>
            <section className="bg-black py-20"><div className="max-w-7xl mx-auto px-6"><div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12">Music themes fine-tuned<br />for mind & body</h2>
                <div className="w-full">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">Music in wellness & gym spaces <strong><em>guides focus, pace & mindset</em></strong> during sessions.</p>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">Our mixes <strong><em>adapt to each zone & intensity</em></strong> level, helping guests <strong><em>stay present & engaged</em></strong>.</p>
                </div>
            </div></div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12"><h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">What we do</h2><p className="text-xl text-black/60 font-medium">Wellness & gym music strategy and implementation</p></div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f7415e860_MaxFine-Walk-On-Snow-collection-by-FMG-Fabbrica-Marmi-e-Graniti-4-4c.jpg" alt="Modern gym interior with minimalist design" className="w-full h-auto object-cover rounded-xl shadow-lg" /></div>
                    <div className="space-y-8">
                        <div><h3 className="text-2xl font-bold text-black mb-3">Treatment room soundscapes</h3><p className="text-lg text-black/70">Ambient & therapeutic sound design help clients relax and stay present.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Class & training playlists</h3><p className="text-lg text-black/70">Energy-matched music for yoga, Pilates, strength & cardio, helps following the sessions naturally.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Schedule-aware programming</h3><p className="text-lg text-black/70">Music that follows your daily rhythm: from gentle mornings to energizing evenings, across all spaces.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Zone-specific calibration</h3><p className="text-lg text-black/70">Reception, treatment rooms & gym floor each get their own sound while sharing one recognizable identity.</p></div>
                    </div>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Wellness & gym music is ideal for</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div><ul className="space-y-8 text-lg text-black/70">
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Spas & Wellness Centers</span><span>where sound supports healing and restoration.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Yoga, Pilates & Meditation Studios</span><span>needing an atmosphere that deepens practice.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Boutique Gyms & Training Studios</span><span>focused on member experience and retention.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Multi-Location Wellness Brands</span><span>wanting consistent sound across sites.</span></li>
                        <li className="block"><span className="font-semibold text-2xl block mb-1 text-black">Hybrid Spaces</span><span>balancing both treatment rooms and active training areas.</span></li>
                    </ul></div>
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1918a9569_73e713e59820cc7915a71ef35c9d5835.jpg" alt="Luxury wellness spa interior" className="w-full h-auto object-cover rounded-xl shadow-lg" /></div>
                </div>
            </div></section>
            <section className="py-20 animated-gradient"><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">How we help</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/677b8f7ca_d3ccc7081_24ff3eb97d703e018840f54d6030eb58.jpg" alt="Luxury wellness pool interior" className="w-full h-auto object-cover rounded-xl shadow-lg" /></div>
                    <div className="space-y-8">
                        <div><h3 className="text-2xl font-bold text-black mb-3">Support deeper sessions</h3><p className="text-lg text-black/70">Audio design helps clients relax and focus during treatments and practice, creating memorable sessions.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Match energy to activity</h3><p className="text-lg text-black/70">Music that rises and falls with effort supports members throughout classes and workouts.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Create cohesive brand atmosphere</h3><p className="text-lg text-black/70">All your rooms & locations sound intentional, from reception to last stretch.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Remove playlist management</h3><p className="text-lg text-black/70">Staff focus on clients & members while we handle music selection, updates and commercial licensing.</p></div>
                    </div>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Upgrade your wellness atmosphere</h2>
                <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">Ready to design sound for healing & training? We review your current setup, your sessions & member journey and propose a tailored approach.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"><Link href={`/${lang}/contact`}><button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center"><span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">Book a music consultation</span><ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" /></button></Link></div>
                <p className="text-black/70 mt-8">Explore how our <Link href={`/${lang}/services/signature-playlists`} className="underline hover:text-black font-semibold">Signature Playlists</Link> and <Link href={`/${lang}/services/sonic-strategy`} className="underline hover:text-black font-semibold">Sonic Strategy</Link> work for wellness & gyms.</p>
            </div></section>
        </div>
    );
}
