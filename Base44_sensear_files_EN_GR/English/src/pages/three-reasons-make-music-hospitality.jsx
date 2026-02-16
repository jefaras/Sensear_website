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
    document.title = "Why Music Belongs in Luxury Hospitality Marketing";
    
    const description = "Three evidence-based reasons curated music improves guest experience, brand perception, and spending in luxury hospitality venues.";
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
      localeTag.setAttribute('content', 'en_US');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      meta.content = 'en_US';
      document.head.appendChild(meta);
    }

    let languageTag = document.querySelector('meta[http-equiv="content-language"]');
    if (languageTag) {
      languageTag.setAttribute('content', 'en');
    } else {
      languageTag = document.createElement('meta');
      languageTag.setAttribute('http-equiv', 'content-language');
      languageTag.content = 'en';
      document.head.appendChild(languageTag);
    }

    document.documentElement.lang = 'en';

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
      canonicalLink.setAttribute('href', 'https://sensear.music/three-reasons-make-music-hospitality');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/three-reasons-make-music-hospitality';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Why Music Belongs in Luxury Hospitality Marketing' },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7e961365e_e56c8a322bf8043723ba7e215cf5e636.jpg' },
      { property: 'og:url', content: 'https://sensear.music/three-reasons-make-music-hospitality' },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: '2025-01-15T09:00:00Z' },
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
      { name: 'twitter:title', content: 'Why Music Belongs in Luxury Hospitality Marketing' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7e961365e_e56c8a322bf8043723ba7e215cf5e636.jpg' }
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
        "headline": "Three reasons to make music part of your luxury hospitality strategy",
        "description": description,
        "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7e961365e_e56c8a322bf8043723ba7e215cf5e636.jpg",
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
        "datePublished": "2025-01-15",
        "dateModified": "2025-01-15",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://sensear.music/three-reasons-make-music-hospitality"
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
            "name": "Three reasons to make music part of your luxury hospitality strategy",
            "item": "https://sensear.music/three-reasons-make-music-hospitality"
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
        <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Three Reasons Make Music Hospitality section">
          <div className="w-full px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: H1 */}
              <div className="flex flex-col justify-center text-left">
                <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                  <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Three reasons to make music</span>
                  <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">part of your luxury hospitality strategy</span>
                </h1>
                <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                  Why curated music is a practical way to shape how guests feel, what they remember, and how they spend.
                </p>
                <div className="flex items-center gap-6 text-sm text-black/60 slide-up-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <time dateTime="2025-01-15">January 15, 2025</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" aria-hidden="true" />
                    <span>SensEar Team</span>
                  </div>
                  <div className="text-black/50">
                    <span>8 min read</span>
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
              Short take: curated music is a practical way to shape how guests feel, what they remember, and how they spend
            </h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Most leading luxury hotel brands treat the experience as a complete design system. Every decision is considered, from architecture to materials to the sound in each space.
            </p>

            <blockquote className="border-l-4 border-black pl-6 italic text-black/80 my-8">
              "Music design has become a vital component for luxury brands that want to stand out."
            </blockquote>

            <p className="text-black/80 leading-relaxed mb-6">
              Consider W Hotels, or The Standard Hotels. Location choices, interior design, and the playlists heard across their venues are intentional choices that support a distinctive identity.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              In recent years, more luxury brands have added music design to the core toolkit for guest engagement, atmosphere, and brand stature.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Music and the guest experience</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Music is a direct, cost-effective way to set mood and connect with your target audience. The right selections align with guest values, taste, and expectations.
            </p>

            <p className="text-black/80 leading-relaxed mb-6">
              <a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Slow background music</a> can lengthen dwell and lift sales in certain contexts, while <a href="https://www.deepdyve.com/lp/sage/using-background-music-to-affect-the-behavior-of-supermarket-shoppers-0MSfbyjTU0" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">faster tempos</a> help accelerate pace when turnover is a priority. Music can also alter <a href="https://www.sciencedirect.com/science/article/pii/S014829639900003X" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">perceived time</a> and influence evaluations of the environment and merchandise, which is useful for <a href="https://journals.sagepub.com/doi/pdf/10.1177/00222437221150930" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">managing service flow</a> and guest satisfaction.
            </p>

            <blockquote className="border-l-4 border-black pl-6 italic text-black/80 my-8">
              "Done with care, music is a simple way to improve the guest experience. A well-curated playlist lets a brand connect on a deeper emotional level."
            </blockquote>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Music and brand identity</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Sound is part of brand memory. Consistent musical choices make a space feel on-brand and recognizable, the same way color, typography, and materials do. <a href="https://www.sciencedirect.com/science/article/pii/S0001691824002105" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Research in marketing and consumer psychology</a> shows that sonic branding and music cues can shape recall, perceived fit, and purchase intent. Aligning playlists with the environment and the brand's desired feel creates a <a href="https://etheses.whiterose.ac.uk/id/eprint/22404/1/Wong%202018%20-%20Sound%20Branding%20-%20FINAL%20DEC%202018.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">competitive edge</a> that generic background music cannot match.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Music and employee productivity</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Music also affects staff. <a href="https://hbr.org/2022/09/can-music-make-you-more-productive" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Reviews and practitioner summaries</a> suggest that background music can improve mood regulation and short-term performance on certain tasks, which is why clear listening policies and curation by daypart matter. <a href="https://cloudcovermusic.com/research/music-at-work-research" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Industry research</a> echoes this perception, with large shares of employees reporting they work better with appropriate music in the background.
            </p>

            <p className="text-black/80 leading-relaxed mb-6">
              <Link to={createPageUrl("sonic-strategy")} className="text-black underline hover:text-black/70 font-semibold">Music design</Link> belongs alongside visual and olfactory design in luxury hospitality. It enhances guest experience, can support sales and revenue outcomes, and contributes to higher employee morale and productivity. <a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Studies in retail and restaurants</a> show that getting tempo and style right changes pace, time perception, and spend, which <a href="https://www.sciencedirect.com/science/article/pii/S014829639900003X" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">translates well to luxury venues</a> when applied with care.
            </p>

            <p className="text-black/80 leading-relaxed">
              See what <Link to={createPageUrl("signature-playlists")} className="text-black underline hover:text-black/70 font-semibold">curated music</Link> can do for your brand. <Link to={createPageUrl("contact")} className="text-black underline hover:text-black/70 font-semibold">Start here</Link>.
            </p>
          </section>

          <footer className="mt-16 pt-8 border-t border-black/10 flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to elevate your hospitality brand?</h2>
            <p className="text-black/70 mb-6">
              Discover how SensEar can help you create a signature sound that defines your brand and delights your guests.
            </p>
            <Link to={createPageUrl("contact")}>
              <AnimatedButton aria-label="Start Your Sound Journey">
                Start Your Sound Journey
              </AnimatedButton>
            </Link>
          </footer>

          <nav className="mt-12" aria-label="Blog navigation">
            <Link to={createPageUrl("Blog")}>
              <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                Back to Articles
              </Button>
            </Link>
          </nav>
        </div>
      </article>
    </div>
  );
}