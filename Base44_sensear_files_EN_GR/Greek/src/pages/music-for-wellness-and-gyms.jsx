import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
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

export default function WellnessGyms() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Μουσική για Σπα & Γυμναστήρια | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Music for wellness and gyms curated around activity and intensity, supporting focus, calm and movement across treatments and training spaces.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/wellness-gyms');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/wellness-gyms';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Music for Wellness & Gyms' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/wellness-gyms' },
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
    { name: 'twitter:title', content: 'Music for Wellness & Gyms' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80' }];

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
      "name": "Wellness & Gyms Music Curation",
      "description": "Soothing soundscapes for unique relaxation and rejuvenation experiences. Ultra-specialized ambient and biophilic sound layers.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Wellness Music Curation",
      "audience": {
        "@type": "Audience",
        "audienceType": "Wellness Centers and Gyms"
      }
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
        "name": "Industries",
        "item": "https://sensear.music/industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Wellness & Gyms",
        "item": "https://sensear.music/wellness-gyms"
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
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Wellness & Gyms section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Μουσική για Σπα & Γυμναστήρια:</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Σχεδιασμένη γύρω από τη δραστηριότητα και την ένταση</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Στοχευμένη μουσική που ενισχύει τη συγκέντρωση σε όλους τους χώρους και τις πρακτικές.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1328f3e9a_80sspa-1-1.jpg" 
                      alt="Luxury wellness spa interior with curated ambient music" 
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
              Μουσικά θέματα ρυθμισμένα<br />
              για σώμα και νου
            </h2>
            
            <div className="w-full">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                Η μουσική σε χώρους ευεξίας και άσκησης <strong><em>καθοδηγεί τη συγκέντρωση, τον ρυθμό και τη νοητική κατάσταση</em></strong> κατά τη διάρκεια των συνεδριών.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                Οι μίξεις μας <strong><em>προσαρμόζονται σε κάθε ζώνη και επίπεδο έντασης</em></strong>, βοηθώντας τους επισκέπτες να <strong><em>παραμένουν παρόντες και ενεργοί</em></strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do - White Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Τι κάνουμε</h2>
            <p className="text-xl text-black/60 font-medium">Στρατηγική και υλοποίηση μουσικής για Σπα & γυμναστήρια</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image (Reusing Industry-specific challenges image) */}
            <div className="hidden lg:block">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f7415e860_MaxFine-Walk-On-Snow-collection-by-FMG-Fabbrica-Marmi-e-Graniti-4-4c.jpg"
                  alt="Modern gym interior with minimalist design"
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Ηχητικά τοπία για χώρους θεραπειών</h3>
                <p className="text-lg text-black/70">Ambient και θεραπευτικός ηχητικός σχεδιασμός που βοηθά τους επισκέπτες να χαλαρώσουν και να παραμείνουν συγκεντρωμένοι.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Playlists για classes & προπονήσεις</h3>
                <p className="text-lg text-black/70">Μουσική προσαρμοσμένη στην ενέργεια για yoga, Pilates, ενδυνάμωση και cardio, που βοηθά τη φυσική ροή της συνεδρίας.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Προγραμματισμός βάσει ωραρίου</h3>
                <p className="text-lg text-black/70">Μουσική που ακολουθεί τον ημερήσιο ρυθμό: από ήρεμα πρωινά έως πιο ενεργητικά απογεύματα, σε όλους τους χώρους.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Ρύθμιση ανά ζώνη</h3>
                <p className="text-lg text-black/70">Υποδοχή, χώροι θεραπειών και αίθουσες άσκησης αποκτούν τον δικό τους ήχο, διατηρώντας μία κοινή, αναγνωρίσιμη ταυτότητα.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For - Bg Image (Who this is for) */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Ιδανικό για μουσική wellness & γυμναστηρίων</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <ul className="space-y-8 text-lg text-black/70">
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Spa & Κέντρα Ευεξίας</span>
                  <span>Όπου ο ήχος υποστηρίζει τη θεραπεία και την αποκατάσταση.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Στούντιο Yoga, Pilates & Διαλογισμού</span>
                  <span>Που χρειάζονται ατμόσφαιρα που εμβαθύνει την πρακτική.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Boutique Γυμναστήρια & Στούντιο Προπόνησης</span>
                  <span>Με έμφαση στην εμπειρία και τη διατήρηση μελών.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Brands Ευεξίας με πολλαπλές τοποθεσίες</span>
                  <span>Που θέλουν συνεπή ήχο σε όλα τα σημεία.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Υβριδικούς χώρους</span>
                  <span>Που συνδυάζουν θεραπείες και ενεργή άσκηση.</span>
                </li>
              </ul>
            </div>

            {/* Right: Image (Reusing Who this is for image) */}
            <div className="hidden lg:block">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1918a9569_73e713e59820cc7915a71ef35c9d5835.jpg"
                  alt="Luxury wellness spa interior"
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
            </div>
          </div>
        </div>
      </section>

      {/* How we help - Animated Gradient */}
      <section className="py-20 animated-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Πώς βοηθάμε</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image (Reusing How SensEar solves this image) */}
            <div className="hidden lg:block">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/677b8f7ca_d3ccc7081_24ff3eb97d703e018840f54d6030eb58.jpg"
                  alt="Luxury wellness pool interior"
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Υποστηρίζουμε βαθύτερες συνεδρίες</h3>
                <p className="text-lg text-black/70">Ο ηχητικός σχεδιασμός βοηθά τη χαλάρωση και τη συγκέντρωση, δημιουργώντας συνεδρίες που μένουν στη μνήμη.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Ταιριάζουμε την ενέργεια με τη δραστηριότητα</h3>
                <p className="text-lg text-black/70">Η μουσική ανεβαίνει και πέφτει μαζί με την ένταση, υποστηρίζοντας κάθε άσκηση.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Δημιουργούμε συνεκτική ατμόσφαιρα brand</h3>
                <p className="text-lg text-black/70">Όλοι οι χώροι και οι τοποθεσίες ακούγονται με πρόθεση, από την υποδοχή έως το τελευταίο stretch.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Αφαιρούμε τη διαχείριση των playlists</h3>
                <p className="text-lg text-black/70">Το προσωπικό εστιάζει σε πελάτες και μέλη, ενώ εμείς αναλαμβάνουμε επιλογές μουσικής, ανανεώσεις και επαγγελματική αδειοδότηση.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Αναβαθμίστε την ατμόσφαιρα ευεξίας σας</h2>
          <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
            Έτοιμοι να σχεδιάσουμε ήχο για θεραπεία και προπόνηση;
            Αξιολογούμε το υπάρχον setup, τις συνεδρίες και το ταξίδι των μελών και προτείνουμε μια προσαρμοσμένη προσέγγιση.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("contact")}>
              <AnimatedButton className="w-full sm:w-auto" aria-label="Book a music consultation">
                Κλείστε μια μουσική συμβουλευτική
              </AnimatedButton>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Δείτε πώς οι <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Επιμελημένες playlists</Link> και ο <Link to={createPageUrl("sonic-strategy")} className="underline hover:text-black font-semibold">Σχεδιασμός ηχητικής ταυτότητας</Link> λειτουργούν για wellness & γυμναστήρια.
          </p>
        </div>
      </section>
    </div>
  );
}