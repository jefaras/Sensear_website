import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export default async function ArtMuseumsFashionPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    return (
        <div className="bg-[#faebe3]">
            <style dangerouslySetInnerHTML={{ __html: `@keyframes gradient-shift{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.animated-gradient{background:linear-gradient(135deg,#f5d4c1 0%,#e8c3b0 15%,#d4c4b0 30%,#c0c0c0 45%,#d3d3d3 60%,#f0d5d0 75%,#e8c3b0 90%,#f5d4c1 100%);background-size:400% 400%;animation:gradient-shift 10s ease infinite}@keyframes slideUp{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}.slide-up-1{animation:slideUp .8s ease-out forwards;opacity:0}.slide-up-2{animation:slideUp .8s ease-out .2s forwards;opacity:0}.slide-up-4{animation:slideUp .8s ease-out .6s forwards;opacity:0}` }} />
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="w-full px-6 md:px-12 lg:px-16"><div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col justify-center text-left">
                        <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                            <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Music for Art, Museums & Fashion:</span>
                            <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Honour the work, shape the experience.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">Discreet sound that complements your curatorial vision.</p>
                    </div>
                    <div className="w-full slide-up-4 flex justify-center lg:justify-end"><div className="w-full lg:w-[93.5%]"><div className="overflow-hidden rounded-2xl shadow-2xl"><div className="relative aspect-square">
                        <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/49f04cdfd_seedream-40_professional_photo_of_Upscale_this_image_keeping_all_natural_contexts_and_detail-0.jpg" alt="Art gallery with curated music atmosphere and fashion installation" className="w-full h-full object-cover" />
                    </div></div></div></div>
                </div></div>
            </section>
            <section className="bg-black py-20"><div className="max-w-7xl mx-auto px-6"><div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12">Discreet precision<br />for galleries & runways</h2>
                <div className="w-full">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">In galleries and runways alike, sound should <strong><em>feel present</em></strong> without <strong><em>competing</em></strong>.</p>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">We create soundscapes that <strong><em>respect each piece</em></strong> & <strong><em>gently guide</em></strong> how visitors <strong><em>move & perceive</em></strong> the work.</p>
                </div>
            </div></div></section>
            <section className="py-20 bg-white"><div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12"><h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">What we do</h2><p className="text-xl text-black/60 font-medium">Cultural space music strategy and execution</p></div>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div><h3 className="text-2xl font-bold text-black mb-3">Acoustically calibrated sound</h3><p className="text-lg text-black/70">Levels & speaker placement for your layout so music sounds natural without echoing.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Exhibition-specific curation</h3><p className="text-lg text-black/70">Each show or collection gets its own sonic identity within your brand.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Timed runway sequences</h3><p className="text-lg text-black/70">Pre-programmed music for fashion shows & presentations, arranged on-site for walks, transitions & finales.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Living catalogues</h3><p className="text-lg text-black/70">Monthly refreshes keep repeat visitors & staff engaged while complying with commercial licensing.</p></div>
                    </div>
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7952e2759_seedream-40_professional_photo_of_Upscale_this_image_keeping_physical_all_natural_contexts_a-1.jpg" alt="Fashion runway show" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Art & fashion music is ideal for</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div><h3 className="text-2xl font-bold text-black mb-3">Art Galleries & Museums</h3><p className="text-lg text-black/70">presenting exhibitions & permanent collections.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Fashion Houses & Showrooms</h3><p className="text-lg text-black/70">staging runway shows, previews & launches.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Cultural Foundations</h3><p className="text-lg text-black/70">hosting installations and public programs.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Concept & Editorial Retail</h3><p className="text-lg text-black/70">with rotating art and design installations.</p></div>
                        <div><h3 className="text-2xl font-bold text-black mb-3">Pop-Ups & Launch Events</h3><p className="text-lg text-black/70">needing immediate sonic identity.</p></div>
                    </div>
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/a98f357a2_a_gem_of_a_museum_allows_us_to_enjoy_the_biggest_names_in_contemporary_art-cropped.jpg" alt="Fashion portrait" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                </div>
            </div></section>
            <section className="py-20 bg-black"><div className="max-w-7xl mx-auto px-6">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-white text-center">How we help</h2>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="hidden lg:block"><img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/0460123b3_652b0f6467d21dea21815655a47b712d.jpg" alt="Fashion editorial" className="w-full h-auto rounded-2xl shadow-lg" /></div>
                    <div className="space-y-6">
                        <div><h3 className="text-2xl font-bold text-white mb-3">Support contemplation and focus</h3><p className="text-lg text-white/80">Discreet sound lets visitors observe each piece without disturbing the atmosphere.</p></div>
                        <div><h3 className="text-2xl font-bold text-white mb-3">Strengthen curatorial narrative</h3><p className="text-lg text-white/80">Music supports your story from exhibition entrance to finale.</p></div>
                        <div><h3 className="text-2xl font-bold text-white mb-3">Simplify event execution</h3><p className="text-lg text-white/80">Planning and reliable playback let teams focus on guests & artists rather than volume & transitions.</p></div>
                    </div>
                </div>
            </div></section>
            <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}><div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Upgrade your cultural atmosphere</h2>
                <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">Ready to design sound for your space? We review your venue, programming & audience, then propose a tailored approach for exhibitions and events.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"><Link href={`/${lang}/contact`}><button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center"><span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">Book a music consultation</span><ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" /></button></Link></div>
                <p className="text-black/70 mt-8">Explore how our <Link href={`/${lang}/services/sonic-strategy`} className="underline hover:text-black font-semibold">Sonic Strategy</Link> & <Link href={`/${lang}/services/event-soundtracks`} className="underline hover:text-black font-semibold">Event Soundtracks</Link> work for art, museums and fashion.</p>
            </div></section>
        </div>
    );
}
