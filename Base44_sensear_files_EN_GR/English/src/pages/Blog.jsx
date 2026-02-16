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
      title: "How top hospitality brands design their sound on purpose",
      excerpt: "Learn how luxury hotels like W Hotels, Soho House, and The Standard use strategic music curation as part of their brand identity.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/067aa2432_AI_Generated_Image_2025-10-21.png",
      alt: "Luxury hospitality interior showcasing strategic sound design and music curation",
      category: "Insights",
      date: "2025-01-20",
      displayDate: "January 20, 2025",
      author: "SensEar Team",
      link: createPageUrl("how-top-hospitality-brands-design-sound")
    },
    {
      title: "Three reasons to make music part of your luxury hospitality strategy",
      excerpt: "Curated music is a practical way to shape how guests feel, what they remember, and how they spend.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg",
      alt: "Luxury hotel interior showcasing music's role in hospitality marketing strategy",
      category: "Insights",
      date: "2025-01-15", // ISO format for datetime
      displayDate: "January 15, 2025",
      author: "SensEar Team",
      link: createPageUrl("three-reasons-make-music-hospitality")
    },
    {
      title: "How brand-fit music converts browsers into buyers",
      excerpt: "Evidence-based research showing how brand-aligned music increases sales by 9.1% in hospitality venues.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg",
      alt: "Restaurant ambiance demonstrating music's impact on customer sales and behavior",
      category: "Research",
      date: "2021-01-20", // ISO format for datetime
      displayDate: "January 20, 2021",
      author: "Zoe Burnard",
      link: createPageUrl("brand-music-converts-browsers-buyers")
    },
    {
      title: "What exactly does a music curator do?",
      excerpt: "Learn how professional music curators architect brand soundtracks through strategic curation and data-driven sonic branding.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png",
      alt: "Professional music curator selecting tracks for bespoke venue playlists",
      category: "Education",
      date: "2025-01-10", // ISO format for datetime
      displayDate: "January 10, 2025",
      author: "SensEar Team",
      link: createPageUrl("what-exactly-does-music-curator-do")
    },
    {
      title: "The music curation cycle: analyze, optimize & evolve your sonic identity",
      excerpt: "Learn how continuous music curation optimization enhances venue atmosphere through data-driven refinement and expert human curation.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e0fc2b036_43b114fc2a27cb08c8b377305973c588_X-Design.png",
      alt: "Music analytics and optimization process for venue soundscapes",
      category: "Strategy",
      date: "2025-01-15", // ISO format for datetime
      displayDate: "January 15, 2025",
      author: "SensEar Team",
      link: createPageUrl("music-curation-cycle-venues")
    },
    {
      title: "Building a brand people can hear",
      excerpt: "Strategic guide to sonic branding and audio identity development. Create memorable brand experiences through music and sound design.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3a329efef_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-03.jpg",
      alt: "Sonic branding strategy building brand identity through music",
      category: "Branding",
      date: "2025-02-12",
      displayDate: "February 12, 2025",
      author: "SensEar Team",
      link: createPageUrl("building-brand-people-can-hear")
    },
    {
      title: "Sound strategy that sells: how background music shapes customer behavior",
      excerpt: "Field research reveals how strategic background music increases sales and dwell time in retail and hospitality environments.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e9f53224a_ladies.png",
      alt: "Retail environment showing background music influence on shopping behavior",
      category: "Research",
      date: "2025-03-08",
      displayDate: "March 8, 2025",
      author: "Research Team",
      link: createPageUrl("background-music-shapes-customer-behavior")
    },
    {
      title: "How your service environment shapes perceived wait time",
      excerpt: "How music and environmental design can transform the waiting experience and improve customer satisfaction.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1472df5cb_aiease_1760708154014.jpg",
      alt: "Service environment design using music to improve customer waiting experience",
      category: "Research",
      date: "2025-03-15", // ISO format for datetime
      displayDate: "March 15, 2025",
      author: "Research Team",
      link: createPageUrl("service-environment-shapes-wait-time")
    }
  ];

  useEffect(() => {
    document.title = "Blog on Music, Space & Experience | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Articles and perspectives by SensEar on sound, space and experience, exploring how music works in real environments.";
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
                Our music<br />curation blog
              </h1>
              
              <div className="mb-8 max-w-xl slide-up-2">
                <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                  Insights, trends and expertise from the world of luxury music curation.
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
                      How top hospitality brands design their sound on purpose
                    </h2>
                    <p className="text-black/70 text-lg mb-6 leading-relaxed">
                      Learn how luxury hotels like W Hotels, Soho House, and The Standard use strategic music curation as part of their brand identity.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-black/60 mb-6" aria-label="Article metadata">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <time dateTime="2025-01-20">January 20, 2025</time>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" aria-hidden="true" />
                        <span>SensEar Team</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-black font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Read Full Article</span>
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
          <h2 id="recent-articles-heading" className="text-3xl font-bold text-black mb-8 leading-[1.25]">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {/* Article 1 */}
            <article role="listitem">
              <Link to={createPageUrl("three-reasons-make-music-hospitality")} className="block" aria-label="Read article explaining why music matters in luxury hospitality marketing">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg"
                      alt="Luxury hotel interior showcasing music's role in hospitality marketing strategy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0" />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-black/5 text-black border-black/10 hover:bg-black/5 hover:text-black">
                      Insights
                    </Badge>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      Three reasons to make music part of your luxury hospitality strategy
                    </h3>
                    <p className="text-black/70 mb-4 leading-relaxed">
                      Curated music is a practical way to shape how guests feel, what they remember, and how they spend.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-black/60 mb-4" aria-label="Article metadata">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        <time dateTime="2025-01-15">January 15, 2025</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" aria-hidden="true" />
                        <span>SensEar Team</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            {/* Article 2 */}
            <article role="listitem">
              <Link to={createPageUrl("brand-music-converts-browsers-buyers")} className="block" aria-label="Read research article on how brand-fit music influences buying behaviour">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg"
                      alt="Restaurant ambiance demonstrating music's impact on customer sales and behavior"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0" />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-black/5 text-black border-black/10 hover:bg-black/5 hover:text-black">
                      Research
                    </Badge>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      How brand-fit music converts browsers into buyers
                    </h3>
                    <p className="text-black/70 mb-4 leading-relaxed">
                      Evidence-based research showing how brand-aligned music increases sales by 9.1% in hospitality venues.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-black/60 mb-4" aria-label="Article metadata">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        <time dateTime="2021-01-20">January 20, 2021</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" aria-hidden="true" />
                        <span>Zoe Burnard</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            {/* Article 3 */}
            <article role="listitem">
              <Link to={createPageUrl("what-exactly-does-music-curator-do")} className="block" aria-label="Read article explaining the role of a professional music curator">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png"
                      alt="Professional music curator selecting tracks for bespoke venue playlists"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0" />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-black/5 text-black border-black/10 hover:bg-black/5 hover:text-black">
                      Education
                    </Badge>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      What exactly does a music curator do?
                    </h3>
                    <p className="text-black/70 mb-4 leading-relaxed">
                      Learn how professional music curators architect brand soundtracks through strategic curation and data-driven sonic branding.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-black/60 mb-4" aria-label="Article metadata">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        <time dateTime="2025-01-10">January 10, 2025</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" aria-hidden="true" />
                        <span>SensEar Team</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            {/* Article 4 */}
            <article role="listitem">
              <Link to={createPageUrl("music-curation-cycle-venues")} className="block" aria-label="Read article about the music curation cycle for venue optimisation">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e0fc2b036_43b114fc2a27cb08c8b377305973c588_X-Design.png"
                      alt="Music analytics and optimization process for venue soundscapes"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0" />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-black/5 text-black border-black/10 hover:bg-black/5 hover:text-black">
                      Strategy
                    </Badge>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      The music curation cycle: analyze, optimize & evolve your sonic identity
                    </h3>
                    <p className="text-black/70 mb-4 leading-relaxed">
                      Learn how continuous music curation optimization enhances venue atmosphere through data-driven refinement and expert human curation.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-black/60 mb-4" aria-label="Article metadata">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        <time dateTime="2025-01-15">January 15, 2025</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" aria-hidden="true" />
                        <span>SensEar Team</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            {/* Article 5 */}
            <article role="listitem">
              <Link to={createPageUrl("building-brand-people-can-hear")} className="block" aria-label="Read guide on building a sonic brand identity through sound">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3a329efef_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-03.jpg"
                      alt="Sonic branding strategy building brand identity through music"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0" />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-black/5 text-black border-black/10 hover:bg-black/5 hover:text-black">
                      Branding
                    </Badge>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      Building a Brand People Can Hear
                    </h3>
                    <p className="text-black/70 mb-4 leading-relaxed">
                      Strategic guide to sonic branding and audio identity development. Create memorable brand experiences through music and sound design.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-black/60 mb-4" aria-label="Article metadata">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        <time dateTime="2025-02-12">February 12, 2025</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" aria-hidden="true" />
                        <span>SensEar Team</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            {/* Article 6 */}
            <article role="listitem">
              <Link to={createPageUrl("background-music-shapes-customer-behavior")} className="block" aria-label="Read research on how background music influences customer behaviour">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e9f53224a_ladies.png"
                      alt="Retail environment showing background music influence on shopping behavior"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0" />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-black/5 text-black border-black/10 hover:bg-black/5 hover:text-black">
                      Research
                    </Badge>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      Sound strategy that sells: how background music shapes customer behaviour
                    </h3>
                    <p className="text-black/70 mb-4 leading-relaxed">
                      Field research reveals how strategic background music increases sales and dwell time in retail and hospitality environments.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-black/60 mb-4" aria-label="Article metadata">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        <time dateTime="2025-03-08">March 8, 2025</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" aria-hidden="true" />
                        <span>Research Team</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            {/* Article 7 */}
            <article role="listitem">
              <Link to={createPageUrl("service-environment-shapes-wait-time")} className="block" aria-label="Read article on how music affects perceived wait time">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1472df5cb_aiease_1760708154014.jpg"
                      alt="Service environment design using music to improve customer waiting experience"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0" />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-black/5 text-black border-black/10 hover:bg-black/5 hover:text-black">
                      Research
                    </Badge>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      How your service environment shapes perceived wait time
                    </h3>
                    <p className="text-black/70 mb-4 leading-relaxed">
                      How music and environmental design can transform the waiting experience and improve customer satisfaction.
                    </p>
                    <div className="flex items-center gap-4 text-xs text-black/60 mb-4" aria-label="Article metadata">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        <time dateTime="2025-03-15">March 15, 2025</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" aria-hidden="true" />
                        <span>Research Team</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#faebe3] text-black" aria-labelledby="newsletter-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="newsletter-heading" className="text-4xl font-bold mb-4 leading-[1.25]">
            Stay Updated
          </h2>
          <p className="text-xl text-black/70 mb-8">
            <span>Subscribe to receive our latest insights and industry news. Learn more </span><Link to={createPageUrl("about")} className="underline hover:text-black font-semibold" aria-label="About SensEar">about our team</Link><span> or </span><Link to={createPageUrl("contact")} className="underline hover:text-black font-semibold" aria-label="Contact SensEar">get in touch</Link><span> to discuss your project.</span>
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" aria-label="Newsletter subscription form">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-8 h-16 text-lg rounded-xl text-black bg-white border-black/20"
              aria-label="Email address"
              required
            />
            <AnimatedButton aria-label="Subscribe to newsletter">
              Subscribe
            </AnimatedButton>
          </form>
        </div>
      </section>
    </div>
  );
}