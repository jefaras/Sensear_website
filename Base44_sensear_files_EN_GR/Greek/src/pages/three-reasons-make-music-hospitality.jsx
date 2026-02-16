import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';

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

export default function ThreeReasonsMakeMusicHospitality() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const pageTitle = "Τρεις λόγοι να εντάξετε τη μουσική στη στρατηγική luxury φιλοξενίας σας | SensEar";
    const description = "Γιατί η επιμελημένη μουσική είναι ένας πρακτικός τρόπος να διαμορφώνετε το πώς νιώθουν οι επισκέπτες, τι θυμούνται και πώς ξοδεύουν.";
    const pageUrl = 'https://sensear.music/three-reasons-make-music-hospitality';
    const imageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7e961365e_e56c8a322bf8043723ba7e215cf5e636.jpg';
    const publishedDate = '2025-01-15';

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
      { property: 'article:author', content: 'SensEar Team' },
      { property: 'article:section', content: 'Insights' }
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
          "https://www.instagram.com/sensear.music"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Τρεις λόγοι να εντάξετε τη μουσική στη στρατηγική luxury φιλοξενίας σας",
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
            "name": "Τρεις λόγοι να εντάξετε τη μουσική στη στρατηγική luxury φιλοξενίας σας",
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

      <article>
        {/* Hero Section - Two Column Layout */}
        <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Τρεις λόγοι να εντάξετε τη μουσική στη στρατηγική luxury φιλοξενίας σας">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: H1 */}
              <div className="flex flex-col justify-center text-left">
                <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                  <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Τρεις λόγοι να εντάξετε τη μουσική</span>
                  <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">στη στρατηγική luxury φιλοξενίας σας</span>
                </h1>
                <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                  Γιατί η επιμελημένη μουσική είναι ένας πρακτικός τρόπος να διαμορφώνετε το πώς νιώθουν οι επισκέπτες, τι θυμούνται και πώς ξοδεύουν.
                </p>
                <div className="flex items-center gap-6 text-sm text-black/60 slide-up-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time dateTime="2025-01-15">15 Ιανουαρίου 2025</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" aria-hidden="true" />
                    <span>Ομάδα SensEar</span>
                  </div>
                  <div className="text-black/50">
                    <span>8 λεπτά ανάγνωσης</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Square Image */}
              <div className="w-full slide-up-4 flex justify-center lg:justify-end">
                <div className="w-full lg:w-[93.5%]">
                  <div className="overflow-hidden rounded-2xl shadow-2xl">
                    <div className="relative aspect-square">
                      <img 
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/2d2243a41_seedream-40_Upscale_this_image_keeping_all_natural_contexts_and_add_two_small_and_discreet_s-0.jpg" 
                        alt="Luxury hotel interior showcasing music's role in hospitality marketing strategy" 
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
          <section className="prose prose-lg max-w-none bg-white p-8 md:p-12 shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-black mb-8">
              Σύντομη εκδοχή
            </h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Η επιμελημένη μουσική είναι ένας πρακτικός τρόπος να επηρεάζετε το συναίσθημα των επισκεπτών, τη μνήμη που δημιουργούν και τη συμπεριφορά τους στον χώρο.
            </p>

            <p className="text-black/80 leading-relaxed mb-6">
              Τα κορυφαία luxury ξενοδοχειακά brands αντιμετωπίζουν την εμπειρία ως ένα ολοκληρωμένο σύστημα σχεδιασμού. Κάθε απόφαση μετρά: από την αρχιτεκτονική και τα υλικά, μέχρι τον ήχο σε κάθε χώρο.
            </p>

            <blockquote className="border-l-4 border-black pl-6 italic text-black/80 my-8">
              "Ο σχεδιασμός μουσικής έχει εξελιχθεί σε βασικό στοιχείο για luxury brands που θέλουν να ξεχωρίσουν."
            </blockquote>

            <p className="text-black/80 leading-relaxed mb-6">
              Χαρακτηριστικά παραδείγματα είναι τα W Hotels και τα The Standard Hotels. Η επιλογή τοποθεσίας, ο εσωτερικός σχεδιασμός και οι playlists που ακούγονται στους χώρους τους αποτελούν συνειδητές αποφάσεις που στηρίζουν μια ξεκάθαρη ταυτότητα.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              Τα τελευταία χρόνια, όλο και περισσότερα luxury brands εντάσσουν τον μουσικό σχεδιασμό στον βασικό τους εξοπλισμό για engagement, ατμόσφαιρα και brand κύρος.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Μουσική και εμπειρία επισκέπτη</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Η μουσική είναι ένας άμεσος και οικονομικά αποδοτικός τρόπος να ορίσετε τη διάθεση και να συνδεθείτε με το κοινό σας. Οι σωστές επιλογές ευθυγραμμίζονται με τις αξίες, το γούστο και τις προσδοκίες των επισκεπτών.
            </p>

            <p className="text-black/80 leading-relaxed mb-6">
              <a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Αργή μουσική υπόκρουση</a> μπορεί να αυξήσει τον χρόνο παραμονής και τις πωλήσεις σε συγκεκριμένα περιβάλλοντα, ενώ <a href="https://www.deepdyve.com/lp/sage/using-background-music-to-affect-the-behavior-of-supermarket-shoppers-0MSfbyjTU0" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">πιο γρήγοροι ρυθμοί</a> βοηθούν στην επιτάχυνση της ροής όταν η εναλλαγή είναι προτεραιότητα. Η μουσική επηρεάζει επίσης την <a href="https://www.sciencedirect.com/science/article/pii/S014829639900003X" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">αντίληψη του χρόνου</a> και τον τρόπο που αξιολογείται το περιβάλλον και τα προϊόντα, κάτι ιδιαίτερα χρήσιμο για τη <a href="https://journals.sagepub.com/doi/pdf/10.1177/00222437221150930" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">διαχείριση του service</a> και της ικανοποίησης των επισκεπτών.
            </p>

            <blockquote className="border-l-4 border-black pl-6 italic text-black/80 my-8">
              "Όταν γίνεται με φροντίδα, η μουσική είναι ένας απλός τρόπος να βελτιωθεί η εμπειρία του επισκέπτη. Μια σωστά επιμελημένη playlist επιτρέπει στο brand να συνδεθεί σε βαθύτερο συναισθηματικό επίπεδο."
            </blockquote>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Μουσική και ταυτότητα brand</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Ο ήχος αποτελεί μέρος της μνήμης του brand. Σταθερές μουσικές επιλογές κάνουν έναν χώρο αναγνωρίσιμο, όπως ακριβώς το χρώμα, η τυπογραφία και τα υλικά. <a href="https://www.sciencedirect.com/science/article/pii/S0001691824002105" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Έρευνες στο marketing και την ψυχολογία καταναλωτή</a> δείχνουν ότι το sonic branding και τα μουσικά cues επηρεάζουν την ανάκληση, την αίσθηση «ταιριάσματος» και την πρόθεση αγοράς. Όταν οι playlists ευθυγραμμίζονται με το περιβάλλον και το επιθυμητό συναίσθημα του brand, δημιουργείται <a href="https://etheses.whiterose.ac.uk/id/eprint/22404/1/Wong%202018%20-%20Sound%20Branding%20-%20FINAL%20DEC%202018.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">ανταγωνιστικό πλεονέκτημα</a> που η γενική background μουσική δεν μπορεί να προσφέρει.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Μουσική και παραγωγικότητα προσωπικού</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Η μουσική επηρεάζει και το προσωπικό. <a href="https://hbr.org/2022/09/can-music-make-you-more-productive" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Αξιολογήσεις και επαγγελματικές μελέτες</a> δείχνουν ότι η κατάλληλη μουσική υπόκρουση μπορεί να βελτιώσει τη διάθεση και τη βραχυπρόθεσμη απόδοση σε συγκεκριμένες εργασίες. Γι’ αυτό είναι κρίσιμες οι ξεκάθαρες πολιτικές ακρόασης και η επιμέλεια ανά ώρα της ημέρας. <a href="https://cloudcovermusic.com/research/music-at-work-research" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Έρευνες του κλάδου</a> επιβεβαιώνουν αυτή την εικόνα, με μεγάλο ποσοστό εργαζομένων να δηλώνει ότι αποδίδει καλύτερα όταν η μουσική στο περιβάλλον είναι σωστά επιλεγμένη.
            </p>

            <p className="text-black/80 leading-relaxed mb-6">
              Ο <Link to={createPageUrl("sonic-strategy")} className="text-black underline hover:text-black/70 font-semibold">μουσικός σχεδιασμός</Link> ανήκει δίπλα στον οπτικό και τον οσφρητικό σχεδιασμό στη luxury φιλοξενία. Ενισχύει την εμπειρία επισκέπτη, μπορεί να στηρίξει έσοδα και πωλήσεις, και συμβάλλει σε υψηλότερο ηθικό και παραγωγικότητα του προσωπικού. <a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Μελέτες σε retail και εστιατόρια</a> δείχνουν ότι ο σωστός ρυθμός και το σωστό ύφος επηρεάζουν τον ρυθμό κίνησης, την αντίληψη του χρόνου και τη δαπάνη. Όταν εφαρμόζονται με φροντίδα, αυτά τα ευρήματα <a href="https://www.sciencedirect.com/science/article/pii/S014829639900003X" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">μεταφράζονται εξαιρετικά</a> και σε luxury χώρους.
            </p>

            <p className="text-black/80 leading-relaxed">
              Δείτε τι μπορεί να κάνει η <Link to={createPageUrl("signature-playlists")} className="text-black underline hover:text-black/70 font-semibold">επιμελημένη μουσική</Link> για το brand σας. <Link to={createPageUrl("contact")} className="text-black underline hover:text-black/70 font-semibold">Ξεκινήστε εδώ</Link>.
            </p>
          </section>

          <footer className="mt-16 pt-8 border-t border-black/10 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4">Έτοιμοι να αναβαθμίσετε το hospitality brand σας;</h2>
            <p className="text-black/70 mb-6">
              Ανακαλύψτε πώς η SensEar μπορεί να σας βοηθήσει να δημιουργήσετε έναν signature ήχο που ορίζει το brand σας και ενθουσιάζει τους επισκέπτες.
            </p>
            <Link to={createPageUrl("contact")}>
              <AnimatedButton aria-label="Start Your Sound Journey">
                Ξεκινήστε το ηχητικό σας ταξίδι
              </AnimatedButton>
            </Link>
          </footer>

          <nav className="mt-12" aria-label="Blog navigation">
            <Link to={createPageUrl("Blog")}>
              <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                Επιστροφή στα άρθρα
              </Button>
            </Link>
          </nav>
        </div>
      </article>
    </div>
  );
}