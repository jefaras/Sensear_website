import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Briefcase, Building2, FileText, BookOpen, ArrowRight } from "lucide-react";

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

export default function Sitemap() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Sitemap | Sensear";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Browse all SensEar pages, services, industries, case studies and journal articles in one place.";
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

    // Add robots meta tag
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow');
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow';
      document.head.appendChild(robotsMeta);
    }

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://sensear.music/sitemap');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/sitemap';
      document.head.appendChild(canonicalLink);
    }

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sitemapSections = [
    {
      title: "Main Pages",
      icon: Home,
      pages: [
        { name: "Home", path: createPageUrl("Home") },
        { name: "Services", path: createPageUrl("Services") },
        { name: "Industries", path: createPageUrl("Industries") },
        { name: "Case Studies", path: createPageUrl("case-studies"), ariaLabel: "Music curation case studies" },
        { name: "About", path: createPageUrl("about"), ariaLabel: "About SensEar" },
        { name: "Contact", path: createPageUrl("contact"), ariaLabel: "Contact SensEar" },
        { name: "Blog", path: createPageUrl("Blog"), ariaLabel: "SensEar blog on sound and space" },
        { name: "FAQ", path: createPageUrl("FAQ"), ariaLabel: "Frequently asked questions about music curation" }
      ]
    },
    {
      title: "Services",
      icon: Briefcase,
      pages: [
        { name: "All Services", path: createPageUrl("Services") },
        { name: "Signature Playlists", path: createPageUrl("signature-playlists") },
        { name: "Event Soundtracks", path: createPageUrl("event-soundtracks") },
        { name: "Sonic Strategy", path: createPageUrl("sonic-strategy") },
        { name: "Audio Upgrades", path: createPageUrl("audio-upgrades") }
      ]
    },
    {
      title: "Industries",
      icon: Building2,
      pages: [
        { name: "All Industries", path: createPageUrl("Industries") },
        { name: "Hotels & Resorts", path: createPageUrl("music-for-hotels-and-resorts"), ariaLabel: "Music for Hotels & Resorts" },
        { name: "Restaurants & Bars", path: createPageUrl("music-for-restaurants-and-bars"), ariaLabel: "Music for Restaurants & Bars" },
        { name: "Retail Stores", path: createPageUrl("music-for-retail-stores"), ariaLabel: "Music for Retail Stores" },
        { name: "Wellness & Gyms", path: createPageUrl("music-for-wellness-and-gyms"), ariaLabel: "Music for Wellness & Gyms" },
        { name: "Events & Experiences", path: createPageUrl("music-for-events-and-experiences"), ariaLabel: "Music for Events" },
        { name: "Art, Museums & Fashion", path: createPageUrl("music-for-art-museums-and-fashion"), ariaLabel: "Music for Art, Museums & Fashion" }
      ]
    },
    {
      title: "Blog Posts",
      icon: BookOpen,
      pages: [
        { name: "All Blog Articles", path: createPageUrl("Blog"), ariaLabel: "SensEar blog on sound and space" },
        { name: "How Top Hospitality Brands Design Their Sound", path: createPageUrl("how-top-hospitality-brands-design-sound") },
        { name: "Three Reasons Music Matters in Hospitality", path: createPageUrl("three-reasons-make-music-hospitality") },
        { name: "How Brand Music Increases Sales", path: createPageUrl("brand-music-converts-browsers-buyers") },
        { name: "What Does a Music Curator Do?", path: createPageUrl("what-exactly-does-music-curator-do") },
        { name: "Analyze and Optimize Music Curation", path: createPageUrl("music-curation-cycle-venues") },
        { name: "Building Your Brand Through Sound", path: createPageUrl("building-brand-people-can-hear") },
        { name: "Music Influence on Consumer Behavior", path: createPageUrl("background-music-shapes-customer-behavior") },
        { name: "Waiting Time Perception & Music", path: createPageUrl("service-environment-shapes-wait-time") }
      ]
    }
  ];

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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Sitemap section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                Sitemap
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Explore all pages and resources on SensEar.Music website. Find everything from our <Link to={createPageUrl("Services")} className="underline hover:text-black font-semibold">music curation services</Link> to <Link to={createPageUrl("Blog")} className="underline hover:text-black font-semibold" aria-label="SensEar blog on sound and space">industry insights</Link>.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/70c619556_handling-sensear-sitemap.jpg" 
                      alt="Explore SensEar website sitemap" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {sitemapSections.map((section, index) => (
              <Card key={index} className="p-8 bg-white shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-black">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <Link 
                        to={page.path}
                        className="text-black/70 hover:text-black hover:translate-x-2 transition-all inline-block"
                        aria-label={page.ariaLabel || page.name}
                      >
                        → {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center flex flex-col items-center gap-6">
            <p className="text-black/70 text-lg">
              Can't find what you are looking for?
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to={createPageUrl("contact")}>
                <AnimatedButton aria-label="Contact SensEar">
                  Contact us
                </AnimatedButton>
              </Link>

              <span className="text-black/70 font-medium">or check our</span>

              <Link to={createPageUrl("FAQ")}>
                <AnimatedButton aria-label="Frequently asked questions about music curation">
                  FAQ page
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}