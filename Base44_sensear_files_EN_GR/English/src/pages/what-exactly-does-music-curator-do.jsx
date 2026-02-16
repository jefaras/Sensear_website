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

export default function WhatExactlyDoesMusicCuratorDo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "What a music curator does for brands | SensEar Blog";
    
    const description = "An in-depth look at how professional music curators design strategic sound systems that shape emotion, behaviour, and brand memory.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/what-exactly-does-music-curator-do');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/what-exactly-does-music-curator-do';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'What a music curator does for brands | SensEar Blog' },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png' },
      { property: 'og:url', content: 'https://sensear.music/what-exactly-does-music-curator-do' },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: '2025-01-10T09:00:00Z' },
      { property: 'article:author', content: 'SensEar Team' },
      { property: 'article:section', content: 'Education' }
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
      { name: 'twitter:title', content: 'What a music curator does for brands | SensEar Blog' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png' }
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
        "headline": "What a music curator does for brands",
        "description": "An in-depth look at how professional music curators design strategic sound systems that shape emotion, behaviour, and brand memory.",
        "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png",
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
        "datePublished": "2025-01-10",
        "dateModified": "2025-01-10"
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
            "name": "What a music curator does for brands",
            "item": "https://sensear.music/what-exactly-does-music-curator-do"
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="What Exactly Does a Music Curator Do?">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">What exactly does</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">a music curator do?</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                The SensEar approach to turning brand voice into living sound
              </p>
              <div className="flex items-center gap-6 text-sm text-black/60 slide-up-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime="2025-01-10">January 10, 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>SensEar Team</span>
                </div>
                <div className="text-black/50">
                  <span>6 min read</span>
                </div>
              </div>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/c4ed33ff8_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-01.jpg" 
                      alt="Professional music curator at work designing brand soundtracks and strategic playlists" 
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
            <h2 className="text-3xl font-bold text-black mt-0 mb-6">Music curators architect the soundtrack of a brand</h2>
            <p className="text-xl text-black/80 leading-relaxed mb-8">
              They design purpose-built playlists and ambient soundscapes that shape emotion, guide behavior, and make spaces memorable. Unlike DJs who perform live and read a crowd in the moment, <a href="https://thearf-org-unified-admin.s3.amazonaws.com/ARF%20Councils/ARF_Creative_SonicBranding_2024_10.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">curators work upstream</a>: they translate strategy, context, and data into on-brand audio systems for retail, hospitality, offices, events, and installations.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">How SensEar curates: Four pillars of planned sound</h2>

            <h3 className="text-2xl font-bold text-black mt-10 mb-4">1) Constant listening with intent</h3>

            <p className="text-black/80 leading-relaxed mb-6">
              Curators live at the edge of culture, mapping new releases and catalog gems across genres, regions, and moods. The goal isn't just "good music" but musical fit. Tracks whose tempo, timbre, energy, and familiarity align with the <a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1236006/full" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">experience you want to produce</a>.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              Beneath the art sits neuroscience: <a href="https://www.brainmusic.org/MBB91%20Webpage/Blood_Zatorre_2001.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">peak emotional responses</a> to music recruit the brain's reward circuitry (ventral striatum, amygdala, OFC), which is why the right song at the right moment can feel transformative.
            </p>

            <h3 className="text-2xl font-bold text-black mt-10 mb-4">2) Brand & space diagnostics</h3>

            <p className="text-black/80 leading-relaxed mb-8">
              Before a single track is placed, we interrogate context: vision, clientele, day-parts, acoustic constraints, and the behaviors you need (linger longer, browse deeper, buy, relax, socialize). The brief might include <a href="https://www.ioa.org.uk/system/files/proceedings/kp_roy_sound_masking_system_design_and_speech_privacy.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">speech-privacy</a> or confidentiality needs. Cases where curators partner with <a href="https://www.sciencedirect.com/science/article/pii/S2405844024130733" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">acoustic design</a> and <a href="https://cambridgesound.com/sound-masking-references/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">sound masking</a> to ensure conversations remain private while keeping the room comfortable.
            </p>

            <h3 className="text-2xl font-bold text-black mt-10 mb-4">3) Bespoke playlist systems, not templates</h3>

            <p className="text-black/80 leading-relaxed mb-6">
              From a blank canvas, curators design adaptive playlists that express your audio identity across moments: opening calm, midday energy, golden-hour warmth, late-night minimalism. The mix calibrates:
            </p>

            <ul className="space-y-3 text-black/80 mb-8 list-disc pl-6">
              <li><a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1236006/full" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Familiar vs. discovery</a> to balance comfort with novelty.</li>
              <li><a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Tempo</a> to nudge pace & dwell time; a <a href="https://www.sciencedirect.com/science/article/pii/S0969698912000732" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">lever</a> repeatedly shown to shift <a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">shopping</a> and <a href="https://www.sciencedirect.com/science/article/pii/S0950329324000971" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">dining behavior</a>.</li>
              <li>Vocal vs. instrumental to manage cognitive load and conversation.</li>
              <li>Representation & fairness in <a href="https://dl.acm.org/doi/fullHtml/10.1145/3640457.3688163" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">artist selection</a>, addressing known biases in music ecosystems and recommender systems.</li>
            </ul>

            <p className="text-black/80 leading-relaxed mb-8">
              We also consider brand personality cues. For example, sonic logos and short audio signatures can amplify perceived sincerity or ruggedness when <a href="https://www.sciencedirect.com/science/article/pii/S0148296323005283" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">musical features</a> are congruent with brand traits.
            </p>

            <h3 className="text-2xl font-bold text-black mt-10 mb-4">4) Governance: keep it fresh, measured, and on-brand</h3>

            <p className="text-black/80 leading-relaxed mb-8">
              Curation isn't "set and forget." SensEar runs data-driven playlisting with scheduled rotation, seasonality, event spikes, and test-and-learn loops. We tag features (tempo/energy/mode), monitor skips and staff feedback, and align with brand KPIs (dwell time, NPS, conversion). Modern sonic branding programs <a href="https://thearf-org-unified-admin.s3.amazonaws.com/ARF%20Councils/ARF_Creative_SonicBranding_2024_10.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">measure memory</a>, recognition, and emotional lift, then iterate to improve asset recall and engagement.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Why it works: the evidence behind strategic sound</h2>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>Tempo steers pace & spend.</strong> <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Slow-tempo music</a> can lengthen in-store time and increase sales; similar effects appear in <a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">restaurants</a> where slower music extends <a href="https://www.sciencedirect.com/science/article/pii/S0950329324000971" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">dining duration</a>.
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>Emotion is the engine.</strong> Peak musical pleasure lights up the <a href="https://www.brainmusic.org/MBB91%20Webpage/Blood_Zatorre_2001.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">brain's reward network</a>, explaining why calibrated soundscapes can reliably shift mood and memory.
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>From jingles to systems.</strong> Sonic branding is now measured like visual identity; <a href="https://thearf-org-unified-admin.s3.amazonaws.com/ARF%20Councils/ARF_Creative_SonicBranding_2024_10.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">assets are tested</a>, optimized, and governed for <a href="https://www.sciencedirect.com/science/article/pii/S0148296323005283" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">recall and fit</a>.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              <strong>Privacy matters in real spaces.</strong> <a href="https://www.ioa.org.uk/system/files/proceedings/kp_roy_sound_masking_system_design_and_speech_privacy.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Sound masking</a> and <a href="https://www.sciencedirect.com/science/article/pii/S2405844024130733" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">spatial design</a> improve speech privacy without killing ambience, which is crucial for healthcare, offices, and <a href="https://cambridgesound.com/sound-masking-references/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">premium retail</a>.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Curators vs. DJs</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              DJs perform; curators pre-engineer the experience. Curators build scalable, context-aware retail soundscapes and experiential audio systems that teams can run daily; grounded in brand strategy, psychoacoustics, and <a href="https://thearf-org-unified-admin.s3.amazonaws.com/ARF%20Councils/ARF_Creative_SonicBranding_2024_10.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">measurement</a>.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Ready to hear your brand?</h2>

            <p className="text-black/80 leading-relaxed">
              If you're designing a new space, refreshing an audio identity, or want measurable uplift from in-store music, SensEar can help; <Link to={createPageUrl("sonic-strategy")} className="text-black underline hover:text-black/70 font-semibold">strategy</Link>, <Link to={createPageUrl("signature-playlists")} className="text-black underline hover:text-black/70 font-semibold">curation</Link>, and governance included. Let's build a sound your customers remember and your team can run every day. Get your <Link to={createPageUrl("contact")} className="text-black underline hover:text-black/70 font-semibold">free sonic audit</Link> today.
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
              Get Your Free Sonic Audit
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}