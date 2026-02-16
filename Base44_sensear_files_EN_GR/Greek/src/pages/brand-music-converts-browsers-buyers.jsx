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

export default function BrandMusicConvertsBrowsersBuyers() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const pageTitle = "Πώς η μουσική που ταιριάζει στο brand μετατρέπει τους επισκέπτες σε πελάτες | SensEar";
    const description = "Έρευνα βασισμένη σε δεδομένα δείχνει πώς η μουσική ευθυγραμμισμένη με το brand αυξάνει τις πωλήσεις κατά 9,1% σε χώρους φιλοξενίας.";
    const pageUrl = 'https://sensear.music/brand-music-converts-browsers-buyers';
    const imageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg';
    const publishedDate = '2021-01-20';

    document.title = pageTitle;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }

    // Add locale and language meta tags
    const localeTag = document.querySelector('meta[property="og:locale"]');
    if (localeTag) {
      localeTag.setAttribute('content', 'el_GR');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      meta.content = 'el_GR';
      document.head.appendChild(meta);
    }

    let languageTag = document.querySelector('meta[http-equiv="content-language"]');
    if (languageTag) {
      languageTag.setAttribute('content', 'el');
    } else {
      languageTag = document.createElement('meta');
      languageTag.setAttribute('http-equiv', 'content-language');
      languageTag.content = 'el';
      document.head.appendChild(languageTag);
    }

    document.documentElement.lang = 'el';

    // Add robots meta tag - BLOG ARTICLE: index, follow
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

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:url', content: pageUrl },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: `${publishedDate}T09:00:00Z` },
      { property: 'article:author', content: 'Zoe Burnard' },
      { property: 'article:section', content: 'Research' }
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

    // Twitter Card tags
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

    // Update structured data to include BreadcrumbList
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
        "headline": "Πώς η μουσική που ταιριάζει στο brand μετατρέπει τους επισκέπτες σε πελάτες",
        "description": description,
        "image": imageUrl,
        "author": {
          "@type": "Person",
          "name": "Zoe Burnard"
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
            "name": "Πώς η μουσική που ταιριάζει στο brand μετατρέπει τους επισκέπτες σε πελάτες",
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Brand Music Converts Browsers Buyers section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Πώς η μουσική που ταιριάζει στο brand</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">μετατρέπει τους επισκέπτες σε πελάτες</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                Έρευνα βασισμένη σε δεδομένα δείχνει πώς η μουσική ευθυγραμμισμένη με το brand αυξάνει τις πωλήσεις κατά 9,1% σε χώρους φιλοξενίας.
              </p>
              <div className="flex items-center gap-6 text-sm text-black/60 slide-up-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime="2021-01-20">20 Ιανουαρίου 2021</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>Zoe Burnard</span>
                </div>
                <div className="text-black/50">
                  <span>6 λεπτά ανάγνωσης</span>
                </div>
              </div>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0b3de4b5_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-0.jpg" 
                      alt="Ατμόσφαιρα εστιατορίου που αναδεικνύει τον αντίκτυπο της μουσικής στις πωλήσεις και τη συμπεριφορά των πελατών" 
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
            <h2 className="text-3xl font-bold text-black mt-0 mb-6">Ο ήχος είναι ο πιο γρήγορος δρόμος προς τον εγκέφαλο και το πιο υποτιμημένο εργαλείο στο retail</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Μπαίνοντας σε ένα bar, ξενοδοχείο ή εστιατόριο, νιώθετε τον χώρο πριν διαβάσετε καν τον κατάλογο: φωτισμός, υφές, διάταξη. Όμως το πρώτο ερέθισμα που φτάνει στον εγκέφαλο είναι ο ήχος — ο συντονιστής όλων των υπόλοιπων αισθήσεων — που κατευθύνει διακριτικά την προσοχή, τον ρυθμό και τις επιλογές. Στο πλαίσιο του μοντέλου <a href="https://www.jstor.org/stable/1252042" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">servicescape της Bitner</a>, η μουσική αναγνωρίζεται ως βασικό στοιχείο της ατμόσφαιρας.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Πέρα από τον «ήχο στο βάθος»: τα δεδομένα πίσω από τη μουσική που ταιριάζει στο brand</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Μεγάλης κλίμακας <a href="https://ideas.repec.org/p/hhs/huiwps/0121.html" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">έρευνες πεδίου</a> μετέτρεψαν επιτέλους τη διαίσθηση σε μετρήσιμα αποτελέσματα. Σε πολυμήνα πείραμα σε 16 <Link to={createPageUrl("music-for-restaurants-and-bars")} className="text-black underline hover:text-black/70 font-semibold">εστιατόρια</Link> υψηλής επισκεψιμότητας, playlists ευθυγραμμισμένες με την προσωπικότητα του brand ξεπέρασαν τις τυχαίες δημοφιλείς επιλογές, αυξάνοντας τα <a href="https://ideas.repec.org/p/hhs/huiwps/0121.html" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">έσοδα κατά περίπου 9,1%</a>.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              Προηγούμενες μελέτες είχαν ήδη δείξει ότι η μουσική επηρεάζει τη συμπεριφορά: <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">αργός ρυθμός</a> μειώνει την <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">ταχύτητα κίνησης</a> και αυξάνει τις <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πωλήσεις στα σούπερ μάρκετ</a>, ενώ μουσική που ταιριάζει πολιτισμικά μπορεί να επηρεάσει ακόμη και την επιλογή προϊόντων, όπως στην περίπτωση <a href="https://archive.org/download/wikipedia-scholarly-sources-corpus/10.1037%252F0002-9432.71.2.245.zip/10.1037%252F0021-9010.84.2.271.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">γαλλικών και γερμανικών κρασιών</a>.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Τι σημαίνει πραγματικά «μουσική που ταιριάζει στο brand»</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              Η <Link to={createPageUrl("signature-playlists")} className="text-black underline hover:text-black/70 font-semibold">μουσική που ταιριάζει στο brand</Link> λειτουργεί όπως η χρωματική παλέτα του χώρου — αλλά για τα αυτιά. Αντανακλά αξίες, ύφος και επιθυμητό ρυθμό, ώστε ο ήχος να «ακούγεται» ξεκάθαρα δικός σας. Αντίθετα, η προσέγγιση που βασίζεται μόνο στις υποτιθέμενες προτιμήσεις των πελατών συχνά οδηγεί σε μια άχρωμη μίξη χωρίς χαρακτήρα, ειδικά σε χώρους με ετερόκλητο κοινό.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Γιατί λειτουργεί: πολυαισθητηριακή επιστήμη, όχι marketing τρικ</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              Ο ήχος δεν λειτουργεί απομονωμένα. Αλληλεπιδρά με τη γεύση, την αντίληψη του χρόνου και το επίπεδο διέγερσης. Έρευνες στην πολυαισθητηριακή αντίληψη δείχνουν ότι τα ηχητικά ερεθίσματα μπορούν να αλλάξουν ακόμη και την <a href="https://ora.ox.ac.uk/objects/uuid%3Af7af7995-1ba5-4557-bdb1-782dd9185583/download_file?safe_filename=Spence-et-al-2021-Commercializing-sonic-seasoning.pdf&type_of_work=Journal+article" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">εμπειρία της γεύσης</a> (sonic seasoning), καθώς και τη συνολική εμπειρία φιλοξενίας. Όλα αυτά εντάσσονται στη θεωρία του <a href="https://eclass-demo.aueb.gr/modules/document/file.php/MISC418/Lecture5_Reading_Servicescapes.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">servicescape</a>, όπου οι <a href="https://eclass-demo.aueb.gr/modules/document/file.php/MISC418/Lecture5_Reading_Servicescapes.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">περιβαλλοντικοί παράγοντες</a> (μουσική, άρωμα, θερμοκρασία) επηρεάζουν τόσο τους πελάτες όσο και το προσωπικό.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Τι δείχνουν τα δεδομένα, με απλά λόγια</h2>

            <p className="text-black/80 leading-relaxed mb-4">
              • Playlists που ταιριάζουν στο brand ξεπερνούν τυχαία δημοφιλή κομμάτια, αυξάνοντας τις <a href="https://ideas.repec.org/p/hhs/huiwps/0121.html" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πωλήσεις κατά περίπου 9,1%</a>.
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              • Ο συνδυασμός αναγνωρίσιμων και λιγότερο γνωστών κομματιών, όταν ευθυγραμμίζονται με το brand, μειώνει την κόπωση και διατηρεί την ταυτότητα.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              • Ο ρυθμός και η πολιτισμική συνάφεια έχουν σημασία: <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πιο αργή μουσική</a> αυξάνει τον χρόνο παραμονής και το καλάθι αγορών, ενώ η πολιτισμικά ταιριαστή μουσική επηρεάζει τις <a href="https://archive.org/download/wikipedia-scholarly-sources-corpus/10.1037%252F0002-9432.71.2.245.zip/10.1037%252F0021-9010.84.2.271.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">επιλογές</a>.
            </p>

            <div className="bg-black/5 p-8 rounded-lg my-10">
              <h2 className="text-3xl font-bold text-black mb-6 text-center">Το playbook της SensEar: από τον ήχο στις μετρήσιμες πωλήσεις</h2>
              <ol className="space-y-4 text-black/80">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">1.</span>
                  <span><strong>Ηχητικό DNA του brand</strong> - Μεταφράζουμε αξίες και οπτική ταυτότητα σε ηχητικά χαρακτηριστικά: ρυθμό, υφή, ενέργεια και πολιτισμικές αναφορές.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">2.</span>
                  <span><strong>Προσαρμοσμένες playlists με ταυτότητα</strong> - Δυναμικός προγραμματισμός που συνδυάζει γνωστά και ανερχόμενα κομμάτια, με συνέπεια ώρα με την ώρα.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">3.</span>
                  <span><strong>Ηχητικά τοπία ανά ζώνη</strong> - Διαφορετικοί χώροι, διαφορετικοί ρόλοι: είσοδος, bar, σάλα, τουαλέτες — όλα ενταγμένα στο ταξίδι του επισκέπτη.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">4.</span>
                  <span><strong>Αδειοδότηση & συμμόρφωση</strong> - Διαχειριζόμαστε τα δικαιώματα ώστε ο ήχος να είναι premium και απολύτως νόμιμος.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">5.</span>
                  <span><strong>A/B δοκιμές & συσχέτιση αποτελεσμάτων</strong> - Συνδέουμε παραλλαγές playlists με επισκεψιμότητα, χρόνο παραμονής και επιλογές προϊόντων — όχι απλώς με «αίσθηση».</span>
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Έτοιμοι να ακούσετε τη διαφορά;</h2>

            <p className="text-black/80 leading-relaxed">
              Αν διαχειρίζεστε <Link to={createPageUrl("music-for-restaurants-and-bars")} className="text-black underline hover:text-black/70 font-semibold">bar</Link>, <Link to={createPageUrl("music-for-hotels-and-resorts")} className="text-black underline hover:text-black/70 font-semibold">ξενοδοχείο</Link> ή <Link to={createPageUrl("music-for-restaurants-and-bars")} className="text-black underline hover:text-black/70 font-semibold">εστιατόριο</Link> και θέλετε μετρήσιμα αποτελέσματα, όχι απλώς ατμόσφαιρα, η SensEar μπορεί να σχεδιάσει και να υλοποιήσει το <Link to={createPageUrl("signature-playlists")} className="text-black underline hover:text-black/70 font-semibold">σύστημα μουσικής</Link> του brand σας από άκρη σε άκρη. Κλείστε έναν 20λεπτο <Link to={createPageUrl("contact")} className="text-black underline hover:text-black/70 font-semibold">ηχητικό έλεγχο</Link> και λάβετε το δικό σας ηχητικό DNA με άμεσες, πρακτικές προτάσεις.
            </p>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link to={createPageUrl("Blog")}>
            <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Πίσω στο Blog
            </Button>
          </Link>
          <Link to={createPageUrl("contact")}>
            <AnimatedButton>
              Ανακαλύψτε τις υπηρεσίες μουσικής επιμέλειας μας
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}