import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Target, Gem, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

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

export default function SignaturePlaylists() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Επιμελημένες playlists | Custom Playlists by SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Bespoke, brand-exclusive playlists from rare archives. Hand-curated music that transforms your venue's atmosphere. Monthly updates included.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add locale and language meta tags
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

    // Add robots meta tag - SERVICE PAGE: index, follow
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(robotsMeta);
    }

    // Add googlebot specific tag
    let googlebotMeta = document.querySelector('meta[name="googlebot"]');
    if (googlebotMeta) {
      googlebotMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      googlebotMeta = document.createElement('meta');
      googlebotMeta.name = 'googlebot';
      googlebotMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(googlebotMeta);
    }

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://sensear.music/signature-playlists');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/signature-playlists';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
    { property: 'og:title', content: 'Signature Playlists | Custom Playlists by SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/signature-playlists' }];


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

    // Twitter Card tags
    const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Signature Playlists | Custom Playlists by SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1600&q=80' }];


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

    // Add structured data
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
      "name": "Signature Playlists",
      "description": "Bespoke, brand-exclusive playlists sourced from rare archives for venues that refuse to sound generic.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Music Playlist Curation"
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
        "name": "Signature Playlists",
        "item": "https://sensear.music/signature-playlists"
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Signature Playlists section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Επιμελημένες playlists:</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Μουσική προσαρμοσμένη στον χώρο σας</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Προσεγμένες μουσικές playlists που ακολουθούν το brand, τον χώρο και τον καθημερινό του ρυθμό.
              </p>
            </div>

            {/* Right Column: Square Image */}
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

      {/* Intro Section - Black Background */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
              Δημιουργία playlists<br />για μοναδική ατμόσφαιρα χώρου
            </h2>
            <div className="w-full">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                Διαμορφώνουμε <strong><em>playlists</em></strong> με βάση τον <strong><em>χαρακτήρα</em></strong> του brand και τον <strong><em>ρυθμό</em></strong> του χώρου, ώστε η <strong><em>ενέργεια</em></strong> να είναι ισορροπημένη για επισκέπτες και προσωπικό.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                Ο ήχος <strong><em>γίνεται συνειδητός</em></strong> και <strong><em>αισθητός</em></strong>, μέρος της ατμόσφαιρας και όχι απλό υπόβαθρο.
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
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da61f346a_afb08a148_fe959a9eda0e3059a0b19f803958ba8511.jpg"
                alt="Mindful music curation experience"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Ο δικός σας, μοναδικός ήχος</h3>
                <p className="text-lg text-black/70">Σπάνιες επιλογές, ειδικά επιλεγμένες για εσάς που δεν θα βρείτε σε έτοιμες playlists.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Ενισχύουμε το brand σας</h3>
                <p className="text-lg text-black/70">Μουσική που αντικατοπτρίζει την αισθητική και αφηγείται την ιστορία του brand.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Προσαρμογή στον χώρο σας</h3>
                <p className="text-lg text-black/70">Επιλογές που ακολουθούν τη ροή, το concept και το κοινό του χώρου.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Διατηρούμε τον ήχο φρέσκο</h3>
                <p className="text-lg text-black/70">Τακτικές ενημερώσεις που κρατούν τη μουσική σας αναγνωρίσιμη και ζωντανή.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Πλήρης έλεγχος & υποστήριξη</h3>
                <p className="text-lg text-black/70">Ξεκάθαρο πλαίσιο, κεντρική διαχείριση και άμεση επικοινωνία μαζί μας.</p>
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
                  <span>που χρειάζονται ομαλές μεταβάσεις μέσα στη μέρα.</span>
                </li>
                <li className="block">
                  <Link to={createPageUrl("music-for-restaurants-and-bars")} className="underline hover:text-black font-semibold text-2xl block mb-1" aria-label="Music for Restaurants & Bars">Εστιατόρια & Bar</Link>
                  <span>όπου η ατμόσφαιρα αποτελεί βασικό μέρος της εμπειρίας.</span>
                </li>
                <li className="block">
                  <Link to={createPageUrl("music-for-retail-stores")} className="underline hover:text-black font-semibold text-2xl block mb-1" aria-label="Music for Retail Stores">Καταστήματα Λιανικής</Link>
                  <span>που θέλουν μουσική που να υποστηρίζει την οπτική ταυτότητα.</span>
                </li>
                <li className="block">
                  <Link to={createPageUrl("music-for-wellness-and-gyms")} className="underline hover:text-black font-semibold text-2xl block mb-1" aria-label="Music for Wellness & Gyms">Χώρους Ευεξίας</Link>
                  <span>με ήχο που συνοδεύει θεραπείες και προπονήσεις.</span>
                </li>
                <li className="block">
                  <Link to={createPageUrl("music-for-art-museums-and-fashion")} className="underline hover:text-black font-semibold text-2xl block mb-1" aria-label="Music for Art, Museums & Fashion">Τέχνη & Πολιτισμό</Link>
                  <span>για μια εμπλουτισμένη εμπειρία χωρίς παρεμβολές.</span>
                </li>
              </ul>
            </div>

            {/* Right: Image */}
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
        <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Αδειοδοτημένη μουσική για επαγγελματική χρήση</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="hidden lg:block">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16c07c365_cc313a1e26a1dd887202657b5dabf32c.jpg"
              alt="Vinyl records collection for curated playlists"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">Playlists που σας καλύπτουν σε όλα</h3>
              <p className="text-lg text-black/70">Παρέχουμε μουσική με τις απαραίτητες άδειες για επαγγελματική χρήση, ώστε να λειτουργείτε με ασφάλεια και σιγουριά.</p>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundImage: "linear-gradient(to bottom, #faebe3 0%, rgba(250, 235, 227, 0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Ας δημιουργήσουμε τον ήχο του χώρου σας</h2>
          <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
            Χρειάζεστε ένα ηχητικό τοπίο που εκφράζει το brand σας και μένει στη μνήμη;
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("contact")}>
              <AnimatedButton className="w-full sm:w-auto" aria-label="Create your signature sound">
                Δημιουργήστε τον δικό σας ήχο
              </AnimatedButton>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Δείτε πώς ο <Link to={createPageUrl("sonic-strategy")} className="underline hover:text-black font-semibold">Σχεδιασμός ηχητικής ταυτότητας</Link> και η <Link to={createPageUrl("audio-upgrades")} className="underline hover:text-black font-semibold">Ακουστική αναβάθμιση</Link> συμπληρώνουν τις playlists σας.
          </p>
        </div>
      </section>
    </div>);
}