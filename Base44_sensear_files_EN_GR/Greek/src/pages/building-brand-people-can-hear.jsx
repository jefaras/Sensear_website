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

export default function BuildingBrandPeopleCanHear() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const pageTitle = "Χτίζοντας ένα brand που ακούγεται | SensEar blog";

    const description = "Στρατηγικός οδηγός για το sonic branding και την ανάπτυξη ηχητικής ταυτότητας μέσα από τη μουσική και τον σχεδιασμό ήχου.";
    const pageUrl = 'https://sensear.music/building-brand-people-can-hear';
    const imageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1749ad78f_BuildingaBrandPeopleCanHear-TheSensEarGuidetoSonicBranding.png';

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
    { property: 'article:published_time', content: '2025-02-12T09:00:00Z' },
    { property: 'article:author', content: 'SensEar Team' },
    { property: 'article:section', content: 'Branding' }];


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
    { name: 'twitter:title', content: pageTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: imageUrl }];


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
      "@type": "BlogPosting",
      "headline": "Χτίζοντας ένα brand που ακούγεται",
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
      "datePublished": "2025-02-12",
      "dateModified": "2025-02-12",
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
        "name": "Χτίζοντας ένα brand που ακούγεται",
        "item": pageUrl
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
    <div className="bg-[#faebe3] min-h-screen">
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Building Brand People Can Hear section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Χτίζοντας ένα brand</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">που ακούγεται</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                Στρατηγικός οδηγός για το sonic branding και την ανάπτυξη ηχητικής ταυτότητας μέσα από τη μουσική και τον σχεδιασμό ήχου.
              </p>
              <div className="flex items-center gap-6 text-sm text-black/60 slide-up-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime="2025-02-12">12 Φεβρουαρίου 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>SensEar Team</span>
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
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3a329efef_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-03.jpg" 
                      alt="Sonic branding strategy building brand identity through music" 
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
            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Στρατηγική sonic branding: χτίζοντας brand ταυτότητα μέσα από τη μουσική</h2>
            <h3 className="text-2xl font-bold text-black mt-6 mb-4">Γιατί ο ήχος είναι το πιο υποτιμημένο περιουσιακό στοιχείο του brand σας</h3>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Η ταυτότητα ενός brand δεν είναι μόνο οπτική</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Η ταυτότητα ενός brand είναι κάτι πολύ περισσότερο από την εικόνα του. Είναι το σύνολο των σημάτων που βοηθούν τους ανθρώπους να σας αναγνωρίζουν και να εμπιστεύονται αυτό που προσφέρετε. Σε αυτά περιλαμβάνονται το όνομα, το λογότυπο, η τυπογραφία, τα χρώματα, η συσκευασία και οι φυσικοί χώροι.
            </p>
            <p className="text-black/80 leading-relaxed mb-6">
              Σε ένα περιβάλλον με έντονο ανταγωνισμό, ο συνεπής ήχος ξεχωρίζει πιο γρήγορα, ταξιδεύει πιο μακριά και μένει περισσότερο στη μνήμη. Έρευνες στο sensory marketing δείχνουν ότι η ενεργοποίηση πολλαπλών αισθήσεων ενισχύει την αντίληψη, την κρίση και τη συμπεριφορά, με τον ήχο να είναι ιδιαίτερα αποτελεσματικός σε μεγάλη κλίμακα.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Τι είναι πραγματικά ένα brand</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Ένα brand είναι μια υπόσχεση που οι άνθρωποι μπορούν να αναγνωρίσουν άμεσα και να εμπιστευτούν σταθερά. Οι καταναλωτές χρησιμοποιούν τα brand cues για να εκτιμήσουν αξία και ποιότητα πριν ακόμα αγοράσουν.
            </p>
            <p className="text-black/80 leading-relaxed mb-6">
              Η οπτική συνέπεια είναι σημαντική και συχνά αναφέρεται ότι το χρώμα αυξάνει την αναγνωρισιμότητα. Ωστόσο, το γνωστό ποσοστό του 80% συχνά παρατίθεται εκτός πλαισίου, καθώς προέρχεται από έρευνες επεξεργασίας εγγράφων και όχι αποκλειστικά από λογότυπα.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Η δύναμη του sonic branding</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Η μουσική και ο ήχος λειτουργούν άμεσα, συναισθηματικά και με υψηλή μνημονικότητα. Πειραματικές μελέτες δείχνουν ότι η μουσική υπόκρουση μπορεί να επηρεάσει τη ροή κίνησης και να αυξήσει τις πωλήσεις, ειδικά όταν το tempo και το μουσικό ύφος επιλέγονται συνειδητά και όχι τυχαία.
            </p>
            <p className="text-black/80 leading-relaxed mb-6">
              Για παράδειγμα, έρευνα σε supermarket έδειξε ότι μουσική με αργό tempo αύξησε τον χρόνο παραμονής και τον όγκο πωλήσεων σε σύγκριση με γρήγορα κομμάτια. Ο συνδυασμός ρυθμού και μουσικού τρόπου επηρεάζει επίσης τη συμπεριφορά, κάτι που σημαίνει ότι οι playlists πρέπει να σχεδιάζονται με σαφή στόχο.
            </p>
            <p className="text-black/80 leading-relaxed mb-6">
              Η συνάφεια παίζει καθοριστικό ρόλο. Όταν η μουσική ταιριάζει με το προϊόν ή το περιβάλλον, οι επιλογές των καταναλωτών ευθυγραμμίζονται με αυτό το ηχητικό μήνυμα. Σε κλασική μελέτη σε τμήμα κρασιών, η γαλλική μουσική αύξησε τις πωλήσεις γαλλικών κρασιών, ενώ η γερμανική μουσική ενίσχυσε τις αντίστοιχες γερμανικές επιλογές — χωρίς ούτε μία λέξη επικοινωνίας.
            </p>
            <p className="text-black/80 leading-relaxed mb-8">
              Τα sonic logos ενισχύουν ακόμη περισσότερο αυτό το φαινόμενο, λειτουργώντας ως σύντομες και αναγνωρίσιμες ηχητικές υπογραφές. Σύγχρονες έρευνες συνδέουν τα καλοσχεδιασμένα sonic logos με αυξημένη ανάκληση μνήμης και καλύτερη αντιστοίχιση με την προσωπικότητα του brand.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Ένα πρακτικό πλαίσιο για στρατηγική brand με αφετηρία τον ήχο</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              Ακολουθήστε αυτή τη διαδικασία έξι βημάτων για να ευθυγραμμίσετε τον ήχο με την υπόσχεση και τους στόχους του brand σας.
            </p>

            <div className="bg-black/5 p-8 rounded-lg my-10">
              <ol className="space-y-6 text-black/80">
                <li>
                  <strong className="text-black text-lg">1. Προσδιορίστε το κοινό και τα κίνητρά του</strong>
                  <p className="mt-2">Χρησιμοποιήστε ποιοτικές συνεντεύξεις και χαρτογράφηση εμπειρίας για να κατανοήσετε πότε και γιατί ο ήχος μειώνει την τριβή ή ενισχύει το συναίσθημα. Σχεδιάστε με βάση την αντίληψη και τη συμπεριφορά, όχι μόνο το γούστο.</p>
                </li>
                <li>
                  <strong className="text-black text-lg">2. Ορίστε μια αξιακή πρόταση που ακούγεται</strong>
                  <p className="mt-2">Μεταφράστε την αξία του brand σε ηχητικά πεδία. Ηρεμία και αξιοπιστία συνδέονται με πιο αργούς ρυθμούς, ενώ η ανακάλυψη και η ενέργεια με πιο φωτεινά timbres και υψηλότερο tempo.</p>
                </li>
                <li>
                  <strong className="text-black text-lg">3. Αξιολογήστε τα ηχητικά τοπία του ανταγωνισμού</strong>
                  <p className="mt-2">Καταγράψτε playlists, φωνή, τόνο και sonic logos. Το sonic branding παραμένει υπο-αξιοποιημένο, αφήνοντας χώρο για διαφοροποίηση με στρατηγική και τεκμηρίωση.</p>
                </li>
                <li>
                  <strong className="text-black text-lg">4. Σχεδιάστε βασικά ηχητικά στοιχεία</strong>
                  <p className="mt-2">Δημιουργήστε ένα modular σύστημα: sonic logo, ηχητικά μοτίβα, UX sounds και playlists ανά περιβάλλον, με μουσικά χαρακτηριστικά ευθυγραμμισμένα με την προσωπικότητα του brand.</p>
                </li>
                <li>
                  <strong className="text-black text-lg">5. Διατυπώστε μια ξεκάθαρη, μετρήσιμη υπόσχεση</strong>
                  <p className="mt-2">Ορίστε πώς ο ήχος υποστηρίζει την εμπειρία. Για παράδειγμα, πιο ήρεμο check-in μέσω low-arousal μουσικής. Μετρήστε αποτελέσματα όπως χρόνος παραμονής, αξιολογήσεις υπηρεσίας και επαναλαμβανόμενες επισκέψεις.</p>
                </li>
                <li>
                  <strong className="text-black text-lg">6. Ενεργοποιήστε τα σωστά σημεία επαφής</strong>
                  <p className="mt-2">Δώστε προτεραιότητα σε σημεία όπου ο ήχος έχει πραγματικό αντίκτυπο: είσοδοι, lobby, χώροι εστίασης, δοκιμαστήρια, apps, IVR και σύντομα βίντεο. Η συνέπεια είναι ο κανόνας.</p>
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Ο ήχος ως βασικό brand touchpoint</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Ο ήχος λειτουργεί άμεσα, ρυθμίζει το συναίσθημα και εφαρμόζεται εύκολα σε πολλαπλές τοποθεσίες και κανάλια. Όταν ενσωματώνεται σωστά, η μουσική και το sonic logo δεν διακοσμούν απλώς έναν χώρο. Γίνονται η φωνή του brand, αναγνωρίσιμη πριν καν κοιτάξει κάποιος γύρω του.
            </p>
            <p className="text-black/80 leading-relaxed mb-6">
              Για brands φιλοξενίας, αυτό μεταφράζεται σε σταθερά σήματα ποιότητας που μειώνουν την αβεβαιότητα και ενισχύουν τη μακροχρόνια πιστότητα.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Έτοιμοι να κάνετε το brand σας να ακούγεται;</h2>

            <p className="text-black/80 leading-relaxed">
              Αν θέλετε <Link to={createPageUrl("signature-playlists")} className="text-black underline hover:text-black/70">playlists που αποδίδουν</Link>, <Link to={createPageUrl("sonic-strategy")} className="text-black underline hover:text-black/70">sonic logos που μένουν στη μνήμη</Link> και <Link to={createPageUrl("Services")} className="text-black underline hover:text-black/70">ηχητικές οδηγίες</Link> που εφαρμόζονται παντού, η SensEar μπορεί να σας βοηθήσει. <Link to={createPageUrl("contact")} className="text-black underline hover:text-black/70">Χαρτογραφούμε το ταξίδι του επισκέπτη</Link>, δοκιμάζουμε τι λειτουργεί για το κοινό σας και χτίζουμε ένα σύστημα sonic branding που ενισχύει την αναγνωρισιμότητα, βελτιώνει την εμπειρία και φέρνει <Link to={createPageUrl("case-studies")} className="text-black underline hover:text-black/70">μετρήσιμα αποτελέσματα</Link>.
            </p>
            <p className="text-black/80 leading-relaxed">
              Σχεδιάστε σήμερα τον ήχο του brand σας.
            </p>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link to={createPageUrl("Blog")}>
            <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Επιστροφή στο Blog
            </Button>
          </Link>
          <Link to={createPageUrl("contact")}>
            <AnimatedButton>
              Χτίστε τη Sonic Ταυτότητα του Brand σας
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>);

}