import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

const AnimatedButton = ({ children, className = "", ...props }) => (
  <Button
    variant="outline"
    className={`group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-10 h-16 text-lg font-semibold rounded-xl transition-all duration-300 overflow-hidden flex items-center justify-center ${className}`}
    {...props}
  >
    <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
      {children}
    </span>
    <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
  </Button>
);

export default function HowTopHospitalityBrandsDesignSound() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const pageTitle = "Πώς τα κορυφαία brands φιλοξενίας σχεδιάζουν τον ήχο τους με πρόθεση | SensEar";
    const description = "Ανακαλύψτε πώς luxury brands φιλοξενίας αξιοποιούν τη στρατηγική μουσική επιμέλεια και το sonic branding για να δημιουργούν διακριτές εμπειρίες επισκεπτών.";
    const pageUrl = 'https://sensear.music/how-top-hospitality-brands-design-sound';
    const imageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/0109106f5_HowTopHospitalityBrandsDesignTheirSoundOnPurpose.png';
    const publishedDate = '2025-01-12';

    document.title = pageTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
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
      localeTag.setAttribute('content', 'el_GR');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      meta.content = 'el_GR';
      document.head.appendChild(meta);
    }

    const languageTag = document.querySelector('meta[http-equiv="content-language"]');
    if (languageTag) {
      languageTag.setAttribute('content', 'el');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'content-language');
      meta.content = 'el';
      document.head.appendChild(meta);
    }

    document.documentElement.lang = 'el';

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
      canonicalLink.setAttribute('href', pageUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = pageUrl;
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:url', content: pageUrl },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: `${publishedDate}T09:00:00Z` },
      { property: 'article:author', content: 'SensEar Team' },
      { property: 'article:section', content: 'Strategy' }
    ];

    ogTags.forEach(tag => {
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
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl }
    ];

    twitterTags.forEach(tag => {
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
          "https://www.instagram.com/sensear.music"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Πώς τα κορυφαία brands φιλοξενίας σχεδιάζουν τον ήχο τους με πρόθεση",
        "description": description,
        "image": imageUrl,
        "author": {
          "@type": "Organization",
          "name": "SensEar"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SensEar",
          "logo": {
            "@type": "ImageObject",
            "url": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg"
          }
        },
        "datePublished": publishedDate,
        "dateModified": publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": pageUrl
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
            "name": "Blog",
            "item": "https://sensear.music/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Πώς τα κορυφαία brands φιλοξενίας σχεδιάζουν τον ήχο τους με πρόθεση",
            "item": pageUrl
          }
        ]
      }
    ];

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
        
        .slide-up-4 {
          animation: slideUp 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
      {/* Hero Section - Two Column Layout */}
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Πώς τα κορυφαία brands φιλοξενίας σχεδιάζουν τον ήχο τους με πρόθεση">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Πώς τα κορυφαία brands φιλοξενίας</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">σχεδιάζουν τον ήχο τους με πρόθεση</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                Ανακαλύψτε πώς luxury brands φιλοξενίας αξιοποιούν τη στρατηγική μουσική επιμέλεια και το sonic branding για να δημιουργούν διακριτές εμπειρίες επισκεπτών.
              </p>
              <div className="flex items-center gap-6 text-sm text-black/60 slide-up-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime="2025-01-12">12 Ιανουαρίου 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>Ομάδα SensEar</span>
                </div>
                <div className="text-black/50">
                  <span>7 λεπτά ανάγνωσης</span>
                </div>
              </div>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c8fc795c_hotel-1-1.jpg" 
                      alt="Luxury hotel lobby showcasing strategic music curation and sonic branding design" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <Card className="bg-white p-8 md:p-12 shadow-lg mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-black mt-0 mb-6">Τα luxury και lifestyle ξενοδοχεία δεν αφήνουν τη μουσική στην τύχη.</h2>
            <p className="text-xl text-black/80 leading-relaxed mb-8">
              Αντιμετωπίζουν τον ήχο ως μέρος του brand system: με έρευνα, δοκιμές και συνεχή εξέλιξη, ώστε να επηρεάζουν τη διάθεση, τη μνήμη και τη συμπεριφορά των επισκεπτών.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Οκτώ παραδείγματα που αξίζει να μελετήσετε</h2>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">W Hotels</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              Η μουσική είναι ενσωματωμένη στο brand, από συνεργασίες με καλλιτέχνες έως ειδικά διαμορφωμένους χώρους όπως το W Sound Suite, που φιλοξενεί <a href="https://w-hotels.marriott.com/article/behind-the-dj-booth-with-uner/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">sessions και προγραμματισμό</a> σε επιλεγμένα ξενοδοχεία.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Soho House</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              Εσωτερικές ομάδες μουσικής επιμέλειας δημιουργούν playlists που εξελίσσονται μέσα στη μέρα και αντικατοπτρίζουν τον χαρακτήρα κάθε House. <a href="https://www.sohohouse.com/house-notes/issue-4/dom-chung-soho-house-playlist" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Οι playlists διατίθενται και online</a>, ώστε τα μέλη να «παίρνουν τον ήχο μαζί τους».
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">The Standard Hotels</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              Εδώ και 25 χρόνια αντιμετωπίζουν τη μουσική ως αναπόσπαστο κομμάτι της διαμονής. Πρόσφατα κατέγραψαν αυτή τη φιλοσοφία στο <a href="https://www.standardhotels.com/culture/the-standard-soundtrack" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">The Standard Soundtrack</a>, μια σειρά που αποτυπώνει τη μουσική ταυτότητα του brand ανά έτος.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Ace Hotel</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              Μια μακροχρόνια μουσική κουλτούρα εκφράζεται μέσα από συνεργασίες με labels, live sessions και branded streams που <a href="https://www.cntraveler.com/stories/2015-09-10/ace-hotel-cranks-the-cool-up-to-11-with-vinyl" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">επεκτείνουν την εμπειρία</a> πέρα από το lobby.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Rosewood Hotels (Scarfes Bar, Λονδίνο)</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              Σε συνεργασία με εξειδικευμένο agency μουσικής επιμέλειας, δημιούργησαν venue-specific soundtracks. Το Scarfes Bar αναφέρεται συχνά ως σημείο αναφοράς για την ατμόσφαιρα και το live jazz πρόγραμμα που <a href="https://www.musicconcierge.co.uk/case-study/rosewood/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">ορίζει την ταυτότητά του</a>.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">25hours Hotels</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              Δημοσιεύουν το <a href="https://open.spotify.com/playlist/2GYyzEKnynSVi5eO2f6eGL" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">25hours Music DNA</a>, μια ζωντανή μουσική ταυτότητα που ευθυγραμμίζει τον παιχνιδιάρικο χαρακτήρα του brand σε όλα τα ξενοδοχεία.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">EDITION Hotels</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              Διατηρούν <a href="https://soundcloud.com/editionhotels" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">branded μουσικά mixes</a> στα επίσημα κανάλια τους, αποτυπώνοντας μια σύγχρονη, επιμελημένη αισθητική που συνδέεται άμεσα με τη συνολική τοποθέτηση του brand.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Mama Shelter</h3>
            <p className="text-black/80 leading-relaxed mb-8">
              Σταθερό DJ programming και <a href="https://www.mixcloud.com/mamashelter/playlists/mama-loves-music/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">δημόσιες playlists</a> κρατούν την ενέργεια ρυθμισμένη σε κάθε τοποθεσία, ενώ παράλληλα αναδεικνύουν τοπικούς DJs.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Δύο ακόμη brands που αξίζει να παρακολουθείτε</h2>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Virgin Hotels</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              Αναπτύσσουν συνεχή μουσικά initiatives και δημοσιεύουν <a href="https://virginhotels.com/hearthis/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">επίσημες playlists</a>, προσαρμόζοντας τον ήχο σε κάθε πόλη και χώρο.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Moxy Hotels</h3>
            <p className="text-black/80 leading-relaxed mb-8">
              Χρησιμοποιούν <a href="https://open.spotify.com/playlist/18e07cRHXIDILrMizuN3Ye" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">δημόσιες branded playlists</a> για να εκφράσουν μια νεανική, υψηλής ενέργειας ταυτότητα, σε απόλυτη ευθυγράμμιση με το social lobby concept.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Τι κάνουν διαφορετικά οι leaders</h2>

            <ul className="space-y-4 text-black/80 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span><strong>Αντιμετωπίζουν τον ήχο όπως τον σχεδιασμό.</strong> Ο ήχος έχει κατευθυντήριες γραμμές, υπευθυνότητα και roadmap, όπως τα interiors ή το scent design.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span><strong>Προγραμματίζουν με βάση το πλαίσιο.</strong> Ώρες ημέρας, ζώνες και προφίλ επισκεπτών καθορίζουν tempo, ενέργεια και είδη.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span><strong>Συνδυάζουν ανθρώπινη αισθητική με δεδομένα.</strong> Οι curators «διαβάζουν τον χώρο» και επιβεβαιώνουν επιλογές με στοιχεία παραμονής, πωλήσεων και feedback.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span><strong>Επεκτείνουν τον ήχο πέρα από τον χώρο.</strong> Playlists και ηχογραφήσεις ταξιδεύουν εκτός ξενοδοχείου, ενισχύοντας τη μνήμη και τη σύνδεση με το brand.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Πώς να το εφαρμόσετε στον δικό σας χώρο</h2>

            <ol className="space-y-4 text-black/80 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-black font-bold">1.</span>
                <span><strong>Ορίστε το brief.</strong> Τύποι χώρων, ώρες ημέρας, προφίλ επισκεπτών και χαρακτηριστικά brand.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold">2.</span>
                <span><strong>Δημιουργήστε τη μουσική βιβλιοθήκη.</strong> Επιμελημένα σύνολα που καλύπτουν όλη την εμπειρία, με εποχικές και event-based επιλογές.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold">3.</span>
                <span><strong>Δοκιμάστε και μετρήστε.</strong> Εφαρμογή στον χώρο, παρακολούθηση συμπεριφοράς και συλλογή feedback από την ομάδα.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold">4.</span>
                <span><strong>Διατηρήστε τη φρεσκάδα.</strong> Τακτικές ανανεώσεις κρατούν τον ήχο σχετικό και ανταμείβουν τις επαναλαμβανόμενες επισκέψεις.</span>
              </li>
            </ol>

            <p className="text-black/80 leading-relaxed mb-6">
              Η μουσική αλλάζει τον τρόπο που οι άνθρωποι κινούνται, συνδέονται και θυμούνται.
            </p>
            <p className="text-black/80 leading-relaxed mb-6">
              Εμείς κάνουμε αυτή τη δύναμη μέρος της ταυτότητας του χώρου σας και τη βελτιώνουμε συνεχώς.
            </p>

            <p className="text-black/80 leading-relaxed">
              Έτοιμοι να διαμορφώσετε τη στρατηγική ήχου του χώρου σας; <Link to={createPageUrl("contact")} className="text-black underline hover:text-black/70 font-semibold">Επικοινωνήστε μαζί μας</Link> για να ξεκινήσουμε.
            </p>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link to={createPageUrl("Blog")}>
            <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Πίσω στο blog
            </Button>
          </Link>
          <Link to={createPageUrl("contact")}>
            <AnimatedButton>
              Διαμορφώστε τη στρατηγική ήχου του χώρου σας
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}