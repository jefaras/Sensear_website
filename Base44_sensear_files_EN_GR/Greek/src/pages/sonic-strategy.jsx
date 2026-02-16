import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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

export default function SonicStrategy() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Σχεδιασμός ηχητικής ταυτότητας | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Develop your brand's sonic identity. Strategic audio branding and sound design that defines how your brand should feel and be remembered.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    const localeTag = document.querySelector('meta[property="og:locale"]');
    if (localeTag) {
      localeTag.setAttribute('content', 'en_US');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      meta.content = 'en_US';
      document.head.appendChild(meta);
    }

    const languageTag = document.querySelector('meta[http-equiv="content-language"]');
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
      canonicalLink.setAttribute('href', 'https://sensear.music/sonic-strategy');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/sonic-strategy';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Sonic Strategy & Audio Branding | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg' },
    { property: 'og:url', content: 'https://sensear.music/sonic-strategy' }];

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
    { name: 'twitter:title', content: 'Sonic Strategy & Audio Branding | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg' }];

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
      "url": "https://sensear.music",
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
      "sameAs": [
      "https://www.facebook.com/61575909304249/",
      "https://www.instagram.com/sensear.music"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Sonic Strategy",
      "description": "Strategic audio branding and sonic identity development that defines how your brand should sound and be remembered.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Audio Branding Strategy"
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://sensear.music/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Sonic Strategy",
        "item": "https://sensear.music/sonic-strategy"
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Sonic Strategy section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Ηχητική ταυτότητα:</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Σχεδιάζουμε το πώς ακούγεται το brand σας</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Ένα πρακτικό ηχητικό πλαίσιο που κρατά τη μουσική που χρησιμοποιεί το brand σας διακριτό και συνεπές.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/726fac292_Empire_Song4-cropped1-1.jpg" 
                      alt="Sonic strategy and audio branding for brands" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
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
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12">
              Ηχητικό πλάνο δράσης<br />για σταθερή ταυτότητα brand
            </h2>
            
            <div className="w-full">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                Μεταφράζουμε το όραμα του brand σας σε έναν <strong><em>πρακτικό οδηγό ήχου</em></strong> που λειτουργεί σε κάθε χώρο και κανάλι.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                Το brand σας αποκτά ξεκάθαρη <strong><em>ηχητική ταυτότητα</em></strong>, συνεπή σε χώρους, social media και διαφημίσεις.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Τι προσφέρουμε</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image - kept from previous "What you get" */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/deb3db30e_image00006b-CROPPED1.jpg"
                alt="Sonic DNA workshop and brand audio strategy"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Κατάρτιση ηχητικού DNA</h3>
                <p className="text-lg text-black/70">Μαθαίνουμε τις αξίες του brand σας, το προφίλ των επισκεπτών και τους συναισθηματικούς σας στόχους, με mood boards και μουσικές αναφορές.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Χάρτης χώρων & διαδρομών</h3>
                <p className="text-lg text-black/70">Σαφές πλάνο για το πώς πρέπει να «ακούγεται» κάθε χώρος και στιγμή της ημέρας.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Οδηγίες για ομάδες</h3>
                <p className="text-lg text-black/70">Συνοπτικό πλαίσιο που κρατά τις μουσικές επιλογές συνεπείς στο προσωπικό, τους συνεργάτες και το τμήμα marketing σας.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Χρονοδιάγραμμα υλοποίησης</h3>
                <p className="text-lg text-black/70">Ρεαλιστική μετάβαση από τον υπάρχοντα ήχο στη νέα ταυτότητα, ευθυγραμμισμένη με το ημερολόγιο σας.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect for */}
      <section className="py-20" style={{ backgroundImage: "linear-gradient(to top, #ffffff 0%, rgba(255,255,255,0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Ιδανικό για</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <ul className="space-y-8 text-lg text-black/70">
                <li className="block">
                  <Link to={createPageUrl("music-for-hotels-and-resorts")} className="underline hover:text-black font-semibold text-2xl block mb-1" aria-label="Music for Hotels & Resorts">Ξενοδοχειακούς ομίλους</Link>
                  <span>Ενιαία ηχητική ταυτότητα σε πολλαπλές μονάδες.</span>
                </li>
                <li className="block">
                  <span className="block mb-1"><Link to={createPageUrl("music-for-restaurants-and-bars")} className="underline hover:text-black font-semibold text-2xl" aria-label="Music for Restaurants & Bars">Εστιατόρια, Bar</Link> <span className="text-2xl">&</span> <Link to={createPageUrl("music-for-retail-stores")} className="underline hover:text-black font-semibold text-2xl" aria-label="Music for Retail Stores">Retail brands</Link></span>
                  <span>Ανάπτυξη, επανατοποθέτηση ή άνοιγμα νέων χώρων.</span>
                </li>
                <li className="block">
                  <span className="block mb-1"><Link to={createPageUrl("music-for-wellness-and-gyms")} className="underline hover:text-black font-semibold text-2xl" aria-label="Music for Wellness & Gyms">Χώρους ευεξίας</Link> <span className="text-2xl">&</span> <Link to={createPageUrl("music-for-art-museums-and-fashion")} className="underline hover:text-black font-semibold text-2xl" aria-label="Music for Art, Museums & Fashion">πολιτισμού</Link></span>
                  <span>Καθορισμένη ηχητική προσωπικότητα.</span>
                </li>
                <li className="block">
                  <Link to={createPageUrl("music-for-art-museums-and-fashion")} className="underline hover:text-black font-semibold text-2xl block mb-1" aria-label="Music for Art, Museums & Fashion">Brands μόδας & lifestyle</Link>
                  <span>Ισχυρή οπτική ταυτότητα με ξεκάθαρο ήχο.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Marketing agencies</span>
                  <span>Brand στρατηγική χωρίς in-house audio expertise.</span>
                </li>
              </ul>
            </div>

            {/* Right: Image - kept from previous "Who this is for" */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/2f1aa2923_00a27c3bd633abfcfe751c91ef9d3f08sonic.jpg"
                alt="Brand sonic identity development"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Strategically defined identity */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Ταυτότητα με ξεκάθαρους στόχους</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image - kept from previous "How it works" */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7c6f67623_d6be48cfcce95f702a6c4b34c0e7cc47CROPPED-pxbee-minitools-enhance-2025112017940.jpg"
                alt="Sonic strategy implementation process"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Συνεκτική αλλά ευέλικτη ταυτότητα</h3>
                <p className="text-lg text-black/70">Το brand σας ακούγεται αναγνωρίσιμο παντού, σεβόμενο παράλληλα τη μοναδικότητα κάθε χώρου.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundImage: "linear-gradient(to bottom, #faebe3 0%, rgba(250, 235, 227, 0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Ας ορίσουμε την ηχητική ταυτότητα του brand σας</h2>
          <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
            Χρειάζεστε στρατηγική ήχου με την ίδια προσοχή που δίνετε στον σχεδιασμό;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("contact")}>
              <AnimatedButton className="w-full sm:w-auto" aria-label="Start your sonic strategy">
                Ξεκινήστε τον σχεδιασμό ηχητικής ταυτότητας
              </AnimatedButton>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Δείτε πώς οι <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Επιμελημένες playlists</Link> και η <Link to={createPageUrl("audio-upgrades")} className="underline hover:text-black font-semibold">Ακουστική αναβάθμιση</Link> ζωντανεύουν τη στρατηγική σας.
          </p>
        </div>
      </section>
    </div>
  );
}