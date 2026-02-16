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

export default function MusicCurationCycleVenues() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "The music curation cycle for venues | SensEar blog";
    
    const description = "Learn how continuous music analysis and optimisation improves atmosphere, supports guest flow, and keeps venues sounding relevant.";
    const metaDescription = document.querySelector('meta[name="description"]');
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
      canonicalLink.setAttribute('href', 'https://sensear.music/music-curation-cycle-venues');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/music-curation-cycle-venues';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'The music curation cycle for venues | SensEar blog' },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e0fc2b036_43b114fc2a27cb08c8b377305973c588_X-Design.png' },
      { property: 'og:url', content: 'https://sensear.music/music-curation-cycle-venues' },
      { property: 'og:type', content: 'article' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:locale:alternate', content: 'en_GB' },
      { property: 'article:published_time', content: '2025-01-15T09:00:00Z' },
      { property: 'article:modified_time', content: '2025-01-15T09:00:00Z' },
      { property: 'article:author', content: 'SensEar Team' },
      { property: 'article:section', content: 'Strategy' }
    ];

    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (meta) {
        meta.setAttribute('content', tag.content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'The music curation cycle for venues | SensEar blog' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e0fc2b036_43b114fc2a27cb08c8b377305973c588_X-Design.png' },
      { name: 'twitter:url', content: 'https://sensear.music/music-curation-cycle-venues' },
      { name: 'twitter:creator', content: '@SensEarMusic' },
      { name: 'twitter:site', content: '@SensEarMusic' }
    ];

    twitterTags.forEach(tag => {
      let meta = document.querySelector(`meta[name="${tag.name}"]`);
      if (meta) {
        meta.setAttribute('content', tag.content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', tag.name);
        meta.content = tag.content;
        document.head.appendChild(meta);
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
        "headline": "The music curation cycle: analyze, optimize & evolve your sonic identity",
        "description": description,
        "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e0fc2b036_43b114fc2a27cb08c8b377305973c588_X-Design.png",
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
          "@id": "https://sensear.music/music-curation-cycle-venues"
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
            "name": "The music curation cycle: analyze, optimize & evolve your sonic identity",
            "item": "https://sensear.music/music-curation-cycle-venues"
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

    // Add scroll event listener for parallax
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="The Music Curation Cycle for Venues">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">The music curation cycle:</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">analyze, optimize & evolve</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                How continuous music curation optimization enhances venue atmosphere with data-driven strategies.
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
                  <span>5 min read</span>
                </div>
              </div>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/a730d7c9f_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-02.jpg" 
                      alt="Data analytics for music curation optimization and performance tracking" 
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
            <h2 className="text-3xl font-bold text-black mt-0 mb-6">Music is more than ambience</h2>
            <p className="text-black/80 leading-relaxed mb-6">
              The right track at the right moment can reshape how a room feels. In the lobby, use calm, mid-tempo selections to ease arrivals and reduce noise fatigue (<a href="https://www.sciencedirect.com/science/article/pii/S0969698923002345" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>). In the dining room, steady rhythmic music supports conversational comfort and smooth service pacing (<a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>). For late sets, increase energy and tempo to keep guests engaged for longer and encourage an extra round (<a href="https://www.tandfonline.com/doi/pdf/10.1080/1750984X.2011.631026" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>).
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              At SensEar, we design those shifts on purpose. For venues that care about guest experience and brand voice, curated music strengthens sonic identity, increases dwell time, and supports repeat visits.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Curation is a loop, not a checkbox</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Great programming is never "set it and forget it." It starts with a launch and continues through measurement and refinement. We review performance regularly, remove tracks that feel tired or trigger skips, and add new material that matches your audience. Slow-paced selections can increase time on site and spending in certain contexts (<a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>). In restaurants, slower music has been linked with guests staying longer and ordering more, while faster tempos can speed table turnover when needed (<a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>).
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Humans in the mix</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              Our curators are musicians, DJs, and ethnomusicologists with backgrounds in labels, radio, classical stages, and tech. They spend time in your space to understand the flow of service and daily rhythms. We test in context: pacing a fitness studio to verify tempo curves for classes (<a href="https://www.sciencedirect.com/science/article/pii/S1469029224000554" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>), running a full dinner service to validate energy arcs for peak hours (<a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>), or evaluating quiet sets for spa settings to avoid listener fatigue (<a href="https://www.tandfonline.com/doi/pdf/10.1080/1750984X.2011.631026" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>).
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Stay current. Stay relevant.</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              What works today can feel dated in a few months. Culture moves and tastes shift. Matching music to context can also steer choices. For example, when background music aligns with cultural cues, guests are more likely to choose congruent products, such as French music increasing French wine selection in a retail test (<a href="https://archive.org/download/wikipedia-scholarly-sources-corpus/10.1037%252F0002-9432.71.2.245.zip/10.1037%252F0021-9010.84.2.271.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>). Programming benefits from tracking trends and audience response in real time rather than relying only on static algorithms.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">The craft and the science</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Every set is shaped by feel and by data. We look at tempo, intensity, cadence, and bpm to match the arc of your environment. Music also changes how time is perceived. Retail experiments show background music can alter both perceived and actual shopping duration, which affects evaluations and spend (<a href="https://rybn.org/ANTI/ADMXI/documentation/ALGORITHM_DOCUMENTATION/HARMONY_OF_THE_SPEARS/BACKGROUND_MUSIC_STUDIES/EFFECT_ON_CONSUMPTION/2000_The_Effects_of_Music_in_a_Retail_Setting_on_Real_and_Perceived_Shopping_Times.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>).
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>Fitness studios:</strong> Plan build-ups, peaks, and recovery moments. Faster tempos tend to align better as intensity rises and can improve affect and perceived exertion (<a href="https://www.sciencedirect.com/science/article/pii/S1469029224000554" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>) (<a href="https://www.tandfonline.com/doi/pdf/10.1080/1750984X.2011.631026" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>).
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>Restaurants and bars:</strong> Use slower tempos to lengthen stays when desired, and increase pace to support faster turns during rush periods (<a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>).
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>Spas and lounges:</strong> Favor gentle entries, stable mid-sections, and unhurried fades to maintain calm without dulling the space (<a href="https://www.tandfonline.com/doi/pdf/10.1080/1750984X.2011.631026" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>).
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              <strong>Retail and gallery spaces:</strong> Align cues across the environment. When scent and music arousal levels match, shopper evaluations improve, which shows the value of tuning the whole atmosphere, not just the playlist (<a href="https://www.sciencedirect.com/science/article/pii/S0022435901000422" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">source</a>). A public preprint is also available <a href="https://www.researchgate.net/profile/Jochen-Wirtz/publication/222542870_Congruency_of_Scent_and_Music_as_a_Driver_of_In-Store_Evaluations_and_Behavior/links/59f47c0a458515547c21c2be/Congruency-of-Scent-and-Music-as-a-Driver-of-In-Store-Evaluations-and-Behavior.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">here for easy access</a>.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">What you get with SensEar</h2>

            <ul className="list-disc list-inside space-y-2 text-black/80 leading-relaxed mb-8">
              <li>Programming that evolves with your clientele and dayparts</li>
              <li>Specialists who test music inside your real-world service flow</li>
              <li>Frequent updates that keep sets fresh and culturally tuned</li>
              <li>A balance of analytics and expert taste that outperforms one-size-fits-all music</li>
            </ul>

            <p className="text-black/80 leading-relaxed">
              Music changes how people move, connect, and remember. We make that power part of your venue's identity. Then we keep improving it, cycle after cycle. Ready to elevate your venue's sound strategy? <Link to={createPageUrl("contact")} className="text-black underline hover:text-black/70 font-semibold">Contact us today</Link>!
            </p>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link to={createPageUrl("Blog")}>
            <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          <Link to={createPageUrl("contact")}>
            <AnimatedButton>
              Start Your Music Curation Journey
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}