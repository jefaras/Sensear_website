import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Music, Sparkles, SlidersHorizontal, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import useEmblaCarousel from 'embla-carousel-react';

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

const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 4000);
      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  const images = [
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e517a47e3_universal_upscale_0_4f88a784-7ce2-4381-8059-39738ad141ea_0.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6fa9ec2a4_ace50e7b5_E_HryzeWYAUw8vR-2CROPPED1-1.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/52886774b_OneOnly_Aesthesis_P4_Neo_Boutique_Exterior_0033_MASTER_1-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6fcaa40a3_e56a199c4_ac423ae7b75beed60a76ecc7a719d544croppedUPSCALEDcropped.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b042a0fd5_d879cafadbbf888b32b8923798fcbcf3-cropped.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fa74dc9ac_skycropped1-1.png",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65063f93c_home-1-scaled-1-1.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f18df65bd_GR2C1917-1-1455x970_1-1.jpg",
    "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/cd9cf79ec_The-Venice-Glass-Week-2023-01_1-1.jpg"
  ];

  return (
    <div className="overflow-hidden rounded-2xl shadow-2xl" ref={emblaRef}>
      <div className="flex">
        {images.map((src, index) => (
          <div className="flex-[0_0_100%] min-w-0 relative aspect-square" key={index}>
            <img 
              src={src} 
              alt={`Hero slide ${index + 1}`} 
              className="w-full h-full object-cover" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "SensEar - Bespoke Music Curation & Sonic Branding";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Bespoke music curation and sonic branding for hotels, restaurants and events. Elevate your atmosphere with custom playlists. Book your free consultation.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    let localeTag = document.querySelector('meta[property="og:locale"]');
    if (localeTag) {
      localeTag.setAttribute('content', 'en_US');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      meta.content = 'en_US';
      document.head.appendChild(meta);
    }

    let languageTag = document.querySelector('meta[http-equiv="content-language"]');
    if (languageTag) {
      languageTag.setAttribute('content', 'en');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'content-language');
      meta.content = 'en';
      document.head.appendChild(meta);
    }

    document.documentElement.lang = 'en';

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(robotsMeta);
    }

    let googlebotMeta = document.querySelector('meta[name="googlebot"]');
    if (googlebotMeta) {
      googlebotMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      googlebotMeta = document.createElement('meta');
      googlebotMeta.name = 'googlebot';
      googlebotMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(googlebotMeta);
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://sensear.music/');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'SensEar - Bespoke Music Curation & Sonic Branding' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg' },
    { property: 'og:url', content: 'https://sensear.music/' },
    { property: 'og:type', content: 'website' }];


    ogTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });

    const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'SensEar - Bespoke Music Curation & Sonic Branding' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg' }];


    twitterTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });

    const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SensEar",
      "alternateName": "SensEar Music Curation",
      "url": "https://sensear.music",
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
      "description": "Bespoke music curation and sonic branding for hotels, restaurants and events.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Athens",
        "addressCountry": "GR"
      },

      "sameAs": [
      "https://www.facebook.com/61575909304249/",
      "https://www.instagram.com/sensear.music",
      "https://www.linkedin.com/company/sensear"]

    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://sensear.music/"
      }]

    }];


    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#faebe3]">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll-left 30s linear infinite;
          white-space: nowrap;
          width: fit-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
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
        
        @keyframes scroll-icon {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-gradient {
          background: linear-gradient(
            135deg,
            #f5d4c1 0%,
            #e8c3b0 15%,
            #d4c4b0 30%,
            #c0c0c0 45%,
            #d3d3d3 60%,
            #f0d5d0 75%,
            #e8c3b0 90%,
            #f5d4c1 100%
          );
          background-size: 400% 400%;
          animation: gradient-shift 10s ease infinite;
        }
      `}</style>

      {/* Hero Section - Redesigned */}
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Hero section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 and CTA */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                Μουσική επιμέλεια <br />για ξεχωριστές εμπειρίες
              </h1>
              
              <div className="mb-8 max-w-xl slide-up-2">
                  <p className="text-lg sm:text-xl md:text-2xl text-black/65 leading-relaxed">
                    Κάθε χώρος έχει τη δική του ιστορία.
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl text-black/65 leading-relaxed">
                    Αφήστε τη μουσική να την αφηγηθεί.
                  </p>
                <p className="text-lg sm:text-xl md:text-2xl text-black/65 leading-relaxed">
                  Εξειδικευμένη μουσική επιμέλεια με χαρακτήρα, για χώρους και εμπειρίες που ξεφεύγουν από τα συνηθισμένα.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12 slide-up-3">
                <Link to={createPageUrl("Services")}>
                  <AnimatedButton className="w-full sm:w-auto h-14" aria-label="Ανακαλύψτε τις υπηρεσίες μας">
                    <span className="relative inline-flex items-center mr-2 align-middle w-10 h-10">
                      <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e5fb8532d_sensear-logo-avatar-color1.png" className="absolute inset-0 w-10 h-10 object-contain transition-opacity duration-300 group-hover:opacity-0" alt="" />
                      <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7a2f42e1a_sensear-logo-avatar-white-transparent1.png" className="absolute inset-0 w-10 h-10 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100" alt="" />
                    </span>
                    Ανακαλύψτε τις υπηρεσίες μας
                  </AnimatedButton>
                </Link>
              </div>
            </div>

            {/* Right Column: Image Carousel */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
               <div className="w-full lg:w-[93.5%]">
                  <HeroCarousel />
               </div>
            </div>
          </div>
        </div>

        {/* Animated Mouse Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 slide-up-4">
          <div className="w-[30px] h-[50px] border-2 border-black rounded-full relative flex justify-center">
            <div className="w-[4px] h-[8px] bg-black rounded-full mt-2 animate-[scroll-icon_1.5s_infinite]"></div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
                Ποιοι είμαστε
              </h2>
            
              <div className="w-full text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                  Είμαστε μια ομάδα ειδικών στον ήχο με βαθιά μουσική κουλτούρα, που επενδύει χώρους και εκδηλώσεις με στοχευμένη, βιωματική μουσική που μένει στη μνήμη.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                  Η μουσική, για εμάς, διαμορφώνει την ατμόσφαιρα, επηρεάζει τη συμπεριφορά και ενισχύει τη σύνδεση με τους επισκέπτες.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Four Ways We Transform Venues */}
      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6">
            <h2 id="services-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 text-center">
                Τέσσερις τρόποι με τους οποίους επαναπροσδιορίζουμε τους χώρους
            </h2>
            <p className="text-xl text-black/60 font-medium mb-12 text-center max-w-5xl mx-auto">
                Οι μουσικές μας υπηρεσίες διαμορφώνουν τον τρόπο που βιώνεται ο χώρος, δημιουργούν ατμόσφαιρα και καλλιεργούν σύνδεση με το brand σας, μέσα από τη μουσική και τον ήχο.
            </p>
            <article role="listitem">
                <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
                    {/* Left: Text Content */}
                    <div className="md:order-1">
                        <div className="flex flex-col mb-12">
                            {/* Service 1 */}
                            <div className="mb-8">
                                <Link to={createPageUrl("signature-playlists")} className="text-[31.5px] font-bold text-black block mb-2 group w-fit">
                                    <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Επιμελημένες playlists</span> <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                                <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                    Η καθημερινή μουσική ταυτότητα του χώρου σας, προσαρμοσμένη στη ροή της ημέρας.
                                </p>
                            </div>
                            {/* Service 2 */}
                            <div className="mb-8">
                                <Link to={createPageUrl("event-soundtracks")} className="text-[31.5px] font-bold text-black block mb-2 group w-fit">
                                    <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Ηχητική επιμέλεια εκδηλώσεων</span> <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                                <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                    Μουσικά soundtracks και DJ sets που δίνουν συνοχή και χαρακτήρα σε κάθε εκδήλωση.
                                </p>
                            </div>
                            {/* Service 3 */}
                            <div className="mb-4">
                                <Link to={createPageUrl("sonic-strategy")} className="text-xl font-bold text-black block mb-1 group w-fit">
                                    <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Σχεδιασμός ηχητικής ταυτότητας</span> <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                                <p className="text-[17px] text-black/70 leading-relaxed">
                                    Ένα ξεκάθαρο ηχητικό πλαίσιο για όλους τους χώρους και τα κανάλια επικοινωνίας σας.
                                </p>
                            </div>
                            {/* Service 4 */}
                            <div>
                                <Link to={createPageUrl("audio-upgrades")} className="text-xl font-bold text-black block mb-1 group w-fit">
                                    <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Ακουστική αναβάθμιση</span> <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                                <p className="text-[17px] text-black/70 leading-relaxed">
                                    Προτάσεις για βελτιώσεις και υποστήριξη για τον χώρου σας, για καθαρό, ισορροπημένο ήχο.
                                </p>
                            </div>
                        </div>
                        
                        <Link to={createPageUrl("Services")}>
                            <AnimatedButton aria-label="Εξερευνήστε τις υπηρεσίες μας">
                                Εξερευνήστε τις υπηρεσίες μας
                            </AnimatedButton>
                        </Link>
                    </div>
                    
                    {/* Right: Image */}
                    <div className="md:order-2 block">
                        <img
                          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ee4f6e2db_SIGNATUREcropped.jpg"
                          alt="SensEar Services"
                          className="w-full h-auto object-cover rounded-xl shadow-lg" />
                    </div>
                </div>
            </article>
        </div>
      </section>

      {/* Your World, Our Expertise */}
      <section className="py-24 animated-gradient">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 text-center">
                Ο κόσμος σας, η εξειδίκευσή μας
            </h2>
            <p className="text-xl text-black/60 font-medium mb-12 text-center mx-auto max-w-5xl">
                Κατανοούμε πώς ο ρυθμός, η ενέργεια και η ατμόσφαιρα διαμορφώνουν την ελληνική εμπειρία φιλοξενίας.
            </p>
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-20 items-center">
                {/* Left: Image */}
                <div className="order-last md:order-1 block">
                        <img
                          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5a170449c_lwnxeqhxcfez5hw0yraf-OK.jpg"
                          alt="Sonic expertise in hospitality and retail"
                          className="w-full h-auto object-cover rounded-xl shadow-lg"
                        />
                </div>

                {/* Right: Content */}
                <div className="md:order-2 md:pl-12">
                    <div className="flex flex-col mb-12">
                        <div className="mb-8">
                            <Link to={createPageUrl("music-for-hotels-and-resorts")} className="text-[31.5px] font-bold text-black block mb-2 group w-fit" aria-label="Music for Hotels & Resorts">
                                <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Ξενοδοχεία & Θέρετρα</span> <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                Μουσική για κάθε ώρα της ημέρας και κάθε χώρο.
                            </p>
                        </div>
                        <div className="mb-8">
                            <Link to={createPageUrl("music-for-restaurants-and-bars")} className="text-[31.5px] font-bold text-black block mb-2 group w-fit" aria-label="Music for Restaurants & Bars">
                                <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Εστιατόρια & Bar</span> <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                Ήχος που ακολουθεί τον ρυθμό του service και κρατά τους επισκέπτες περισσότερο.
                            </p>
                        </div>
                        <div className="mb-8">
                            <Link to={createPageUrl("music-for-events-and-experiences")} className="text-[31.5px] font-bold text-black block mb-2 group w-fit" aria-label="Music for Events">
                                <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Εκδηλώσεις & Εμπειρίες</span> <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                Μουσικές μεταβάσεις με ακρίβεια, ροή και φυσικό timing.
                            </p>
                        </div>

                        <div className="mb-8">
                            <Link to={createPageUrl("music-for-retail-stores")} className="text-[31.5px] font-bold text-black block mb-2 group w-fit" aria-label="Music for Retail Stores">
                                <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Καταστήματα λιανικής</span> <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                Μουσική που ενισχύει την περιήγηση και την ταυτότητα του brand.
                            </p>
                        </div>
                        <div className="mb-8">
                            <Link to={createPageUrl("music-for-wellness-and-gyms")} className="text-[31.5px] font-bold text-black block mb-2 group w-fit" aria-label="Music for Wellness & Gyms">
                                <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Wellness & Γυμναστήρια</span> <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                Ήχος προσαρμοσμένος στη χαλάρωση, τη συγκέντρωση ή την ενέργεια.
                            </p>
                        </div>
                        <div>
                            <Link to={createPageUrl("music-for-art-museums-and-fashion")} className="text-[31.5px] font-bold text-black block mb-2 group w-fit" aria-label="Music for Art, Museums & Fashion">
                                <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Τέχνη, Μουσεία & Μόδα</span> <ArrowRight className="inline ml-2 w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                Διακριτικές, ακριβείς μουσικές επιλογές που σέβονται τον χώρο και το έργο.
                            </p>
                        </div>
                    </div>
                    
                    <Link to={createPageUrl("Industries")}>
                        <AnimatedButton>
                            Δείτε τον κλάδο που σας αφορά
                        </AnimatedButton>
                    </Link>
                </div>
            </div>
        </div>
      </section>

      {/* How We Enhance Your Venue */}
      <section className="py-24" style={{ backgroundImage: "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="enhance-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="enhance-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-4 text-black">
            Πώς επαναπροσδιορίζουμε τον χώρο σας
          </h2>
          <p className="text-xl text-black/60 font-medium mb-12 text-center max-w-5xl mx-auto">
            Στρατηγικός σχεδιασμός ήχου που λειτουργεί με την ίδια πρόθεση και ακρίβεια όπως κάθε άλλο στοιχείο της επιχείρησής σας.
          </p>
          
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
            {/* Left: Benefits List */}
            <div className="md:order-1">
                <div className="space-y-10 mb-12" role="list">
                  <article role="listitem" className="flex gap-4">
                    <div>
                        <h3 className="text-[31.5px] font-bold text-black mb-2">Αναβάθμιση του brand</h3>
                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                        Ενισχύστε την εικόνα και την αξία του brand σας μέσα από μια ατμόσφαιρα που μένει στη μνήμη.
                        </p>
                    </div>
                  </article>

                  <article role="listitem" className="flex gap-4">
                    <div>
                        <h3 className="text-[31.5px] font-bold text-black mb-2">Απόλυτος έλεγχος</h3>
                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                        Έχετε πλήρη έλεγχο στο μουσικό ύφος, τη ροή και τα επίπεδα έντασης του ήχου.
                        </p>
                    </div>
                  </article>

                  <article role="listitem" className="flex gap-4">
                    <div>
                        <h3 className="text-[31.5px] font-bold text-black mb-2">Συνεπής εμπειρία</h3>
                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                        Εξασφαλίζετε ένα ενιαίο μουσικό ταξίδι σε όλους τους χώρους και τα κανάλια επικοινωνίας σας.
                        </p>
                    </div>
                  </article>
                </div>

                <Link to={createPageUrl("case-studies")} aria-label="Music curation case studies">
                    <AnimatedButton>
                        Δείτε τα Case Studies
                    </AnimatedButton>
                </Link>
            </div>

            {/* Right: Car Image */}
            <div className="md:order-2 block">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6e62c430c_03aebeb4e_car-1OK.png"
                  alt="SensEar branded car"
                  className="w-full h-auto object-cover rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-24 bg-black overflow-hidden" aria-labelledby="clients-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="clients-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-10 text-white">Χώροι που μας εμπιστεύονται για τη μουσική τους</h2>
          <p className="text-xl text-white/80 font-medium mb-20 text-center mx-auto max-w-5xl">
            Χώροι σε Αθήνα και Αιγαίο μας εμπιστεύονται για τη μουσική τους, επιλέγοντας ήχο με χαρακτήρα και συνέπεια.
          </p>

          
          <div className="relative">
            <div className="flex gap-12 animate-scroll">
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8c4f5bc6_Klouvi-Bar_final.jpg" alt="Klouvi Bar logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Klouvi Bar</p>
                <p className="text-sm text-white/60 mt-1">Αθήνα</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg" alt="Blue Bamboo logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Blue Bamboo</p>
                <p className="text-sm text-white/60 mt-1">Αθήνα - Σέριφος</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg" alt="Beach House logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Beach House</p>
                <p className="text-sm text-white/60 mt-1">Αντίπαρος</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fc48e3d65_Pelicanos_final.jpg" alt="Pelicanos logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Pelicanos</p>
                <p className="text-sm text-white/60 mt-1">Σίφνος</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65422bc1d_fav.png" alt="Yam logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Yam</p>
                <p className="text-sm text-white/60 mt-1">Αντίπαρος</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8c4f5bc6_Klouvi-Bar_final.jpg" alt="Klouvi Bar logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Klouvi Bar</p>
                <p className="text-sm text-white/60 mt-1">Αθήνα</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg" alt="Blue Bamboo logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Blue Bamboo</p>
                <p className="text-sm text-white/60 mt-1">Αθήνα - Σέριφος</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg" alt="Beach House logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Beach House</p>
                <p className="text-sm text-white/60 mt-1">Αντίπαρος</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fc48e3d65_Pelicanos_final.jpg" alt="Pelicanos logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Pelicanos</p>
                <p className="text-sm text-white/60 mt-1">Σίφνος</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65422bc1d_fav.png" alt="Yam logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Yam</p>
                <p className="text-sm text-white/60 mt-1">Αντίπαρος</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Highlights Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="blog-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Το περιοδικό της Μουσικής Επιμέλειας</h2>
            <p className="text-xl text-black/60 font-medium max-w-5xl mx-auto">
              Διαβάστε πώς η μουσική διαμορφώνει την αντίληψη, το συναίσθημα και την ταυτότητα των brands μέσα από τον ήχο.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" role="list">
            <article role="listitem">
              <Link to={createPageUrl("three-reasons-make-music-hospitality")} className="block">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg"
                      alt="Luxury hotel interior"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-black/5 text-black border-black/10 hover:bg-black/5">Insights</Badge>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      Τρεις λόγοι που η μουσική έχει σημασία στη φιλοξενία
                    </h3>
                    <p className="text-black/70 mb-4 leading-relaxed">
                      Η επιμελημένη μουσική είναι ένας πρακτικός τρόπος να διαμορφώνεται το πώς νιώθουν οι επισκέπτες, τι θυμούνται και πώς κινούνται στον χώρο.
                    </p>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Διαβάστε περισσότερα</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            <article role="listitem">
              <Link to={createPageUrl("brand-music-converts-browsers-buyers")} className="block">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg"
                      alt="Restaurant ambiance"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-black/5 text-black border-black/10 hover:bg-black/5">Research</Badge>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      Πώς η μουσική που ταιριάζει στο brand μετατρέπει επισκέπτες σε πελάτες
                    </h3>
                    <p className="text-black/70 mb-4 leading-relaxed">
                      Έρευνες δείχνουν πώς η σωστά ευθυγραμμισμένη μουσική αυξάνει τα έσοδα σε χώρους φιλοξενίας.
                    </p>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Διαβάστε περισσότερα</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            <article role="listitem">
              <Link to={createPageUrl("what-exactly-does-music-curator-do")} className="block">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png"
                      alt="Professional music curator"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-black/5 text-black border-black/10 hover:bg-black/5">Education</Badge>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      Τι ακριβώς κάνει ένας music curator;
                    </h3>
                    <p className="text-black/70 mb-4 leading-relaxed">
                      Μάθετε πώς επαγγελματίες music curators σχεδιάζουν μουσικές ταυτότητες μέσα από στρατηγική επιμέλεια και δεδομένα.
                    </p>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Διαβάστε περισσότερα</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl("Blog")}>
              <AnimatedButton aria-label="SensEar blog on sound and space">
                Ανακαλύψτε περισσότερα άρθρα
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}