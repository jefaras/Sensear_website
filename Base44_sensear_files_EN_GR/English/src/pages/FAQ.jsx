import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AnimatedButton = ({ children, className = "", ...props }) => (
  <Button
    variant="outline"
    className={`group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden ${className}`}
    {...props}
  >
    <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
      {children}
    </span>
    <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
  </Button>
);

export default function FAQ() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => { // Corrected syntax from useEffect() => { to useEffect(() => {
    document.title = "Questions & Answers | Music Curation FAQ | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Clear answers to common questions about music curation, licensing, services and how we work.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#faebe3]">
      <style>{`
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
        
        .slide-up-3 {
          animation: slideUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .slide-up-4 {
          animation: slideUp 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section - Two Column Layout */}
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Frequently Asked Questions">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                Understanding how it works
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Answers to common questions about sound, licensing & our services.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17b4a5b7d_seedream-40_high-resolution_professional_photography_image_with_precise_details_and_refined_-01-.jpg" 
                      alt="Understanding music curation services and licensing" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="faq-section-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="faq-section-heading" className="text-4xl font-bold text-center text-black mb-12">
            Your Questions, Answered
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-0" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Is it legal to play music from Spotify, YouTube, or Apple Music in my restaurant/bar/hotel?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Typically, consumer streaming platforms (like Spotify Free/Premium, YouTube, Apple Music, etc.) are licensed only for personal use, meaning they do not cover public performance rights in a commercial setting. You'll need a business license or properly licensed service to legally play music for your patrons.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-1" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Why can't I just use my personal Spotify or Apple Music subscription?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Personal subscriptions don't include public performance or commercial use rights. Using them in a public venue can violate copyright law and may lead to fines or legal complications. Commercial music services, by contrast, include the necessary licenses for public playback.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                What is a public performance license, and why do I need it?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                A Public Performance License is an agreement that compensates artists, songwriters, and music publishers when their work is played in a public venue. You must utilize it to legally broadcast or perform music in restaurants, bars, hotels, retail stores, etc. SensEar can help you navigate or secure these licenses for peace of mind.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                How long does it take to create a custom playlist?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                It varies. For a single venue with a clear music profile, it may take just a few days. For larger or multi-location clients, it can take a week or more to finalize the whole process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Is your music fully licensed?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Yes. All tracks are properly licensed so you can focus on running your business without any legal concerns.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Can I update the music playlists myself?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Absolutely. Our user-friendly platform allows you to make quick changes, adjust settings, or schedule different playlists for specific times.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Do I need special equipment for playing your music playlists?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Basic sound systems work just fine, but if you want specialized audio-visual solutions, we can provide design, purchase, and installation services. For more info see our AV Design & Integration section.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Do you offer support after setup?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Yes. We are available for ongoing support, updates, and any adjustments you need along the way. Just send us a message and we will talk about it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                What is the difference between background music and bespoke curation?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Background Music offers pre-curated, automated playlists for a seamless ambiance, ideal for general business needs. Bespoke Curation is a fully customized music strategy, crafted to reflect a brand's identity and create a unique, immersive experience. It is ideal for luxury venues, boutique spaces, and businesses seeking a signature sound experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12 bg-white/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-black mb-4">Still Have Questions? Let's Talk</h3>
            <p className="text-black/80 mb-6">Let's talk about how we can elevate your brand's sound.</p>
            <Link to={createPageUrl("contact")}>
              <AnimatedButton>
                Contact us
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}