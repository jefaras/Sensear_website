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

export default function EventSoundtracks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Μουσική επιμέλεια εκδηλώσεων | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Custom event soundtracks and live DJ programming that follow your event timeline. Immersive audio experiences for launches, ceremonies, and celebrations.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/event-soundtracks');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/event-soundtracks';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Event Soundtracks & Live DJ Sets | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg' },
    { property: 'og:url', content: 'https://sensear.music/event-soundtracks' }];

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
    { name: 'twitter:title', content: 'Event Soundtracks & Live DJ Sets | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg' }];

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
      "name": "Event Soundtracks",
      "description": "Custom event soundtracks and live DJ sets that follow your event timeline, creating immersive audio experiences.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Event Music Curation"
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
        "name": "Event Soundtracks",
        "item": "https://sensear.music/event-soundtracks"
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
        
        .slide-up-4 {
          animation: slideUp 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section - Two Column Layout */}
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Event Soundtracks section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Μουσική επιμέλεια εκδηλώσεων:</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Επιλογές που ακολουθούν τη ροή της εκδήλωσης</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Soundtracks και DJ sets σχεδιασμένα να υποστηρίζουν κάθε στάδιο, από την άφιξη έως το φινάλε.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f5124bf21_pxbee_2025-11-20_15-29-00-cropped1-1.jpg" 
                      alt="Custom event soundtracks and live DJ programming" 
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
              Μουσική που κινείται<br />
              μαζί με τον χρόνο της εκδήλωσης
            </h2>
            
            <div className="w-full">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                Σχεδιάζουμε τη μουσική με βάση το πλάνο και τη ροή της εκδήλωσης, ώστε η ενέργεια να ταιριάζει σε κάθε στιγμή.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                Ο ήχος οδηγεί την εμπειρία, μετατρέποντας κάθε αλληλεπίδραση σε κάτι που οι επισκέπτες απολαμβάνουν και θυμούνται.
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e56a199c4_ac423ae7b75beed60a76ecc7a719d544croppedUPSCALED.jpg"
                alt="Event soundtrack planning and execution"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Ακολουθούμε το χρονοδιάγραμμα</h3>
                <p className="text-lg text-black/70">Μουσικά θέματα που αντιστοιχούν σε κάθε φάση και happening της εκδήλωσης.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Playlists, DJ sets (ή και τα δύο)</h3>
                <p className="text-lg text-black/70">Μουσική προσαρμοσμένη στο concept και το κοινό σας.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Σιγουριά στον ήχο</h3>
                <p className="text-lg text-black/70">Κατεύθυνση για τον ήχο, sound checks και διαχείριση της ροής της μουσικής.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Προαιρετικός έλεγχος χώρου</h3>
                <p className="text-lg text-black/70">Αξιολόγηση κάλυψης και καθαρότητας ήχου, με προτάσεις βελτίωσης.</p>
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
                  <Link to={createPageUrl("music-for-hotels-and-resorts")} className="underline hover:text-black font-semibold text-2xl block mb-1" aria-label="Music for Hotels & Resorts">Ξενοδοχεία & Θέρετρα</Link>
                  <span>που φιλοξενούν παρουσιάσεις, γάμους και ξεχωριστά δείπνα.</span>
                </li>
                <li className="block">
                  <Link to={createPageUrl("music-for-events-and-experiences")} className="underline hover:text-black font-semibold text-2xl block mb-1" aria-label="Music for Events">Διοργανωτές events & Agencies</Link>
                  <span>που παρέχουν εμπειρικές branded εκδηλώσεις.</span>
                </li>
                <li className="block">
                  <Link to={createPageUrl("music-for-restaurants-and-bars")} className="underline hover:text-black font-semibold text-2xl block mb-1">Πριβέ chefs & Ιδιώτες</Link>
                  <span>που κάνουν εορταστικά ή πιο προσωπικά δείπνα.</span>
                </li>
                <li className="block">
                  <Link to={createPageUrl("music-for-art-museums-and-fashion")} className="underline hover:text-black font-semibold text-2xl block mb-1" aria-label="Music for Art, Museums & Fashion">Πολιτιστικούς Χώρους & Γκαλερί</Link>
                  <span>που διεξάγουν ομιλίες, previews και εγκαίνια.</span>
                </li>
                <li className="block">
                  <Link to={createPageUrl("building-brand-people-can-hear")} className="underline hover:text-black font-semibold text-2xl block mb-1" aria-label="Building a brand people can hear">Brands</Link>
                  <span>που θέλουν οι εκδηλώσεις τους να μείνουν στη μνήμη και να σχολιαστούν.</span>
                </li>
              </ul>
            </div>

            {/* Right: Image - kept from previous "Who this is for" */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9f56a9904_2f602f264fc83649ea78ee45caeec916upscaled.jpg"
                alt="Event venue with curated soundscape"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professionally managed staging */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Επαγγελματική επιμέλεια και εκτέλεση</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image - kept from previous "How it works" */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f5882e104_IMG_20250917_225633.jpg"
                alt="Event music planning process"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Δημιουργικά, αλλά και με ακρίβεια</h3>
                <p className="text-lg text-black/70">Διαχειριζόμαστε τον ήχο και τον τεχνικό συντονισμό ώστε οι σημαντικές στιγμές να «κουμπώνουν» σωστά, ενώ εσείς επικεντρώνεστε στη φιλοξενία.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundImage: "linear-gradient(to bottom, #faebe3 0%, rgba(250, 235, 227, 0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Ας σχεδιάσουμε το ηχητικό ταξίδι της εκδήλωσής σας</h2>
          <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
            Χρειάζεστε μουσική με την ίδια φροντίδα που δίνετε σε κάθε λεπτομέρεια;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("contact")}>
              <AnimatedButton className="w-full sm:w-auto" aria-label="Book your event consultation">
                Κλείστε μια συζήτηση για την εκδήλωσή σας
              </AnimatedButton>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Δείτε πώς οι <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Επιμελημένες playlists</Link> και η <Link to={createPageUrl("audio-upgrades")} className="underline hover:text-black font-semibold">Ακουστική αναβάθμιση</Link> υποστηρίζουν τις εκδηλώσεις.
          </p>
        </div>
      </section>
    </div>
  );
}