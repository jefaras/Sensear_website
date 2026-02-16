import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import Breadcrumbs from "../components/Breadcrumbs";

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

export default function Blog() {
  const [scrollY, setScrollY] = useState(0);

  // Define posts array here so it's available for useEffect and rendering
  const posts = [
    {
      title: "Πώς κορυφαία brands φιλοξενίας σχεδιάζουν συνειδητά τον ήχο τους",
      excerpt: "Μάθετε πώς luxury ξενοδοχεία όπως τα W Hotels, Soho House και The Standard χρησιμοποιούν τη στρατηγική μουσική επιμέλεια ως βασικό στοιχείο της ταυτότητάς τους.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/067aa2432_AI_Generated_Image_2025-10-21.png",
      alt: "Luxury hospitality interior showcasing strategic sound design and music curation",
      category: "Insights",
      date: "2025-01-20",
      displayDate: "20 Ιανουαρίου 2025",
      author: "Ομάδα SensEar",
      link: createPageUrl("how-top-hospitality-brands-design-sound")
    },
    {
      title: "Τρεις λόγοι να εντάξετε τη μουσική στη στρατηγική luxury φιλοξενίας σας",
      excerpt: "Η επιμελημένη μουσική είναι ένας πρακτικός τρόπος να διαμορφώνεται το πώς νιώθουν οι επισκέπτες, τι θυμούνται και πώς ξοδεύουν.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg",
      alt: "Luxury hotel interior showcasing music's role in hospitality marketing strategy",
      category: "Insights",
      date: "2025-01-15",
      displayDate: "15 Ιανουαρίου 2025",
      author: "Ομάδα SensEar",
      link: createPageUrl("three-reasons-make-music-hospitality")
    },
    {
      title: "Πώς η μουσική που ταιριάζει στο brand μετατρέπει τους επισκέπτες σε πελάτες",
      excerpt: "Έρευνα με δεδομένα που δείχνει πως η brand-aligned μουσική αυξάνει τις πωλήσεις κατά 9,1% σε χώρους φιλοξενίας.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg",
      alt: "Restaurant ambiance demonstrating music's impact on customer sales and behavior",
      category: "Research",
      date: "2021-01-20",
      displayDate: "20 Ιανουαρίου 2021",
      author: "Zoe Burnard",
      link: createPageUrl("brand-music-converts-browsers-buyers")
    },
    {
      title: "Τι ακριβώς κάνει ένας music curator;",
      excerpt: "Μάθετε πώς οι επαγγελματίες music curators σχεδιάζουν ηχητικές ταυτότητες μέσα από στρατηγική επιμέλεια και δεδομένα.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png",
      alt: "Professional music curator selecting tracks for bespoke venue playlists",
      category: "Education",
      date: "2025-01-10",
      displayDate: "10 Ιανουαρίου 2025",
      author: "Ομάδα SensEar",
      link: createPageUrl("what-exactly-does-music-curator-do")
    },
    {
      title: "Ο κύκλος της μουσικής επιμέλειας: ανάλυση, βελτιστοποίηση και εξέλιξη της ηχητικής ταυτότητας",
      excerpt: "Πώς η συνεχής βελτιστοποίηση της μουσικής αναβαθμίζει την ατμόσφαιρα μέσα από δεδομένα και ανθρώπινη επιμέλεια.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e0fc2b036_43b114fc2a27cb08c8b377305973c588_X-Design.png",
      alt: "Music analytics and optimization process for venue soundscapes",
      category: "Strategy",
      date: "2025-01-15",
      displayDate: "15 Ιανουαρίου 2025",
      author: "Ομάδα SensEar",
      link: createPageUrl("music-curation-cycle-venues")
    },
    {
      title: "Χτίζοντας ένα brand που ακούγεται",
      excerpt: "Στρατηγικός οδηγός για sonic branding και ανάπτυξη ηχητικής ταυτότητας. Δημιουργήστε αξέχαστες εμπειρίες μέσα από μουσική και ήχο.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3a329efef_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-03.jpg",
      alt: "Sonic branding strategy building brand identity through music",
      category: "Branding",
      date: "2025-02-12",
      displayDate: "12 Φεβρουαρίου 2025",
      author: "Ομάδα SensEar",
      link: createPageUrl("building-brand-people-can-hear")
    },
    {
      title: "Sound strategy που πουλάει: πώς η background μουσική διαμορφώνει τη συμπεριφορά των πελατών",
      excerpt: "Έρευνα πεδίου δείχνει πώς η στρατηγική background μουσική αυξάνει τις πωλήσεις και τον χρόνο παραμονής σε retail και hospitality περιβάλλοντα.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e9f53224a_ladies.png",
      alt: "Retail environment showing background music influence on shopping behavior",
      category: "Research",
      date: "2025-03-08",
      displayDate: "8 Μαρτίου 2025",
      author: "Research Team",
      link: createPageUrl("background-music-shapes-customer-behavior")
    },
    {
      title: "Πώς ο χώρος εξυπηρέτησης επηρεάζει τον αντιλαμβανόμενο χρόνο αναμονής",
      excerpt: "Πώς η μουσική και ο σχεδιασμός του περιβάλλοντος μεταμορφώνουν την εμπειρία αναμονής και βελτιώνουν την ικανοποίηση των πελατών.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1472df5cb_aiease_1760708154014.jpg",
      alt: "Service environment design using music to improve customer waiting experience",
      category: "Research",
      date: "2025-03-15",
      displayDate: "15 Μαρτίου 2025",
      author: "Research Team",
      link: createPageUrl("service-environment-shapes-wait-time")
    }
  ];

  useEffect(() => {
    document.title = "Blog μουσικής επιμέλειας | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Άρθρα και απόψεις της SensEar για τον ήχο, τον χώρο και την εμπειρία, εξερευνώντας πώς η μουσική λειτουργεί σε πραγματικά περιβάλλοντα.";
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

    // Add robots meta tag - PRIMARY BLOG PAGE: index, follow
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
      canonicalLink.setAttribute('href', 'https://sensear.music/blog');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/blog';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Blog on Music, Space & Experience | SensEar' },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?w=1600&q=80' },
      { property: 'og:url', content: 'https://sensear.music/blog' },
      { property: 'og:type', content: 'website' }
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
      { name: 'twitter:title', content: 'Blog on Music, Space & Experience | SensEar' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?w=1600&q=80' }
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
          // Removed LinkedIn: "https://www.linkedin.com/company/sensear"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SensEar",
        "url": "https://sensear.music",
        "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg", // A general representative image
        "description": "SensEar provides expert music curation, sonic branding, and atmosphere design services for luxury hospitality and retail, elevating guest experiences globally.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Global",
          "addressRegion": "Worldwide",
          "addressCountry": "US" // Assuming a base country for registration or primary operation
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-SEN-SEAR", // Placeholder telephone for demonstration
          "contactType": "Customer Service",
          "areaServed": "Worldwide",
          "availableLanguage": ["en"]
        },
        "priceRange": "$$$", // Indicative price range
        "sameAs": [
          "https://www.facebook.com/61575909304249/",
          "https://www.instagram.com/sensear.music",
          "https://www.linkedin.com/company/sensear" // Re-adding LinkedIn for comprehensive LocalBusiness profile
        ]
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
          }
        ]
      }
    ];

    // Add BlogPosting schema for each blog post on the index page
    posts.forEach(post => {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": {
          "@type": "ImageObject",
          "url": post.image
        },
        "url": `https://sensear.music${post.link}`, // Construct absolute URL
        "datePublished": post.date,
        "dateModified": post.date, // Use published date if modification date is not available
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "SensEar",
          "logo": {
            "@type": "ImageObject",
            "url": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://sensear.music${post.link}`
        },
        "description": post.excerpt
      });
    });

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }

    // Add scroll tracking for parallax effect
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // posts is not a dependency as it's defined once and static

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

      {/* Hero Section - Same format as Home page with two columns */}
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Blog section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 and Description */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                Το περιοδικό της μουσικής<br />επιμέλειας
              </h1>
              
              <div className="mb-8 max-w-xl slide-up-2">
                <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                  Insights, τάσεις και εξειδίκευση από τον κόσμο της πολυτελούς μουσικής επιμέλειας.
                </p>
              </div>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/83b79f59a_gemini-25-flash-image_Upscale_this_image_carefully_especially_for_his_mustache_to_look_fine_Try_anoth-1-.jpg" 
                      alt="Music curation blog" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs - COMMENTED OUT */}
      {/* <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
          { label: "Blog", path: createPageUrl("Blog") }
        ]} />
      </div> */}

      {/* Featured Post */}
      <section className="py-12 bg-[#faebe3]" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-6">
          <Badge className="mb-4 bg-peach text-black border border-black/20">Featured</Badge>
          <article>
            <Link to={createPageUrl("how-top-hospitality-brands-design-sound")} className="block" aria-label="Read article on how top hospitality brands design intentional sound strategies">
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-white group cursor-pointer">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/067aa2432_AI_Generated_Image_2025-10-21.png"
                      alt="Luxury hospitality interior showcasing strategic sound design and music curation"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-black/5 text-black border-black/10 hover:bg-black/5 hover:text-black">
                      Insights
                    </Badge>
                    <h2 id="featured-heading" className="text-3xl lg:text-4xl font-bold text-black mb-4 leading-[1.25]">
                      {posts[0].title}
                    </h2>
                    <p className="text-black/70 text-lg mb-6 leading-relaxed">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-black/60 mb-6" aria-label="Article metadata">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <time dateTime={posts[0].date}>{posts[0].displayDate}</time>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" aria-hidden="true" />
                        <span>{posts[0].author}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-black font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Διαβάστε ολόκληρο το άρθρο</span>
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </article>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="recent-articles-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="recent-articles-heading" className="text-3xl font-bold text-black mb-8 leading-[1.25]">Πρόσφατα άρθρα</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {posts.slice(1).map((post, index) => (
              <article role="listitem" key={index}>
                <Link to={post.link} className="block" aria-label={`Read article: ${post.title}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white h-full flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <Badge className="mb-3 bg-black/5 text-black border-black/10 hover:bg-black/5 hover:text-black w-fit">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-black/70 mb-4 leading-relaxed line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-black/60 mb-4" aria-label="Article metadata">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" aria-hidden="true" />
                          <time dateTime={post.date}>{post.displayDate}</time>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" aria-hidden="true" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform mt-auto">
                        <span>Διαβάστε περισσότερα</span>
                        <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#faebe3] text-black" aria-labelledby="newsletter-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="newsletter-heading" className="text-4xl font-bold mb-4 leading-[1.25]">
            Μείνετε ενημερωμένοι
          </h2>
          <p className="text-xl text-black/70 mb-8">
            <span>Εγγραφείτε για να λαμβάνετε τα πιο πρόσφατα insights και νέα του κλάδου. Μάθετε περισσότερα για την </span><Link to={createPageUrl("about")} className="underline hover:text-black font-semibold" aria-label="About SensEar">ομάδα μας</Link><span> ή </span><Link to={createPageUrl("contact")} className="underline hover:text-black font-semibold" aria-label="Contact SensEar">επικοινωνήστε μαζί μας</Link><span> για να συζητήσουμε το project σας.</span>
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" aria-label="Newsletter subscription form">
            <Input
              type="email"
              placeholder="Εισάγετε το email σας"
              className="flex-1 px-8 h-16 text-lg rounded-xl text-black bg-white border-black/20"
              aria-label="Email address"
              required
            />
            <AnimatedButton aria-label="Subscribe to newsletter">
              Εγγραφή
            </AnimatedButton>
          </form>
        </div>
      </section>
    </div>
  );
}