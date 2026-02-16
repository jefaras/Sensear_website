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

export default function BackgroundMusicShapesCustomerBehavior() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Updated based on the new content
    const blogTitle = "How background music shapes customer behaviour | SensEar Blog";
    document.title = blogTitle;

    const description = "Field research reveals how strategic background music affects dwell time, pace, and spending in retail and hospitality environments.";
    const pageUrl = 'https://sensear.music/background-music-shapes-customer-behavior';
    // Updated imageUrl
    const imageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e9f53224a_ladies.png';
    const blogPostingHeadline = "Sound strategy that sells: how background music shapes behaviour";
    const publishedDate = "2025-03-08";

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
      { property: 'og:title', content: blogTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:url', content: pageUrl },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: `${publishedDate}T09:00:00Z` },
      { property: 'article:author', content: 'SensEar Team' }, // Keep as SensEar Team or change to Research Team
      { property: 'article:section', content: 'Research' },
      { property: 'og:locale', content: 'en_US' }
    ];

    ogTags.forEach(tagData => {
      let metaTag = document.querySelector(`meta[property="${tagData.property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tagData.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tagData.property);
        metaTag.setAttribute('content', tagData.content);
        document.head.appendChild(metaTag);
      }
    });

    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@SensEarResearch' },
      { name: 'twitter:creator', content: '@SensEarResearch' },
      { name: 'twitter:title', content: blogTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
      { name: 'twitter:url', content: pageUrl }
    ];

    twitterTags.forEach(tagData => {
      let metaTag = document.querySelector(`meta[name="${tagData.name}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tagData.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tagData.name);
        metaTag.setAttribute('content', tagData.content);
        document.head.appendChild(metaTag);
      }
    });

    let langMeta = document.querySelector('meta[name="language"]');
    if (langMeta) {
      langMeta.setAttribute('content', 'en-US');
    } else {
      langMeta = document.createElement('meta');
      langMeta.name = 'language';
      langMeta.content = 'en-US';
      document.head.appendChild(langMeta);
    }

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
        "headline": blogPostingHeadline,
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
            "name": blogPostingHeadline,
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
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Background Music Shapes Customer Behavior section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">Sound strategy that sells:</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">how background music shapes behaviour</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                Field research reveals how strategic background music affects dwell time, pace, and spending in retail and hospitality environments.
              </p>
              <div className="flex items-center gap-6 text-sm text-black/60 slide-up-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime="2025-03-08">March 8, 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>Research Team</span>
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
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6d2ec8236_g-cb-1-1.jpg" 
                      alt="Retail environment showing background music influence on shopping behavior" 
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
            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Quick take</h2>

            <p className="text-xl text-black/80 leading-relaxed mb-8">
              The right soundtrack can make people stay longer and spend more, but results depend on who is in the room and what kind of place you run. The field evidence in <a href="https://www.sciencedirect.com/science/article/abs/pii/S0969698912000732" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">the study</a> with real shoppers shows clear lifts in time and spending on music days, with different patterns by gender and store type.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              Other research in restaurants and supermarkets finds similar effects tied to tempo and song choice (<a href="https://www.jstor.org/stable/2489234" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">restaurant tempo classic</a>; <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">supermarket pacing summary</a>).
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Why sound changes behavior</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              Store and venue cues shape feelings like pleasure and alertness, which then drive approach or avoidance behaviors such as exploring, talking to staff, or buying. This path is laid out in the well-known PAD model from environmental psychology (<a href="https://www.sciencedirect.com/science/article/pii/S0022435997900166" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">overview</a>).
            </p>

            <div className="bg-black/5 p-8 rounded-lg my-10">
              <h2 className="text-3xl font-bold text-black mb-6">What the field data actually found</h2>

              <ul className="space-y-4 text-black/80">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>More time and more spend with music.</strong> In real stores, shoppers stayed longer and spent more when music played than when it was quiet (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0969698912000732" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">the study</a>).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Tempo steers pace.</strong> Slower tracks tend to slow movement and can lift basket size or drink orders, while faster tracks speed things up when you need quicker turns (<a href="https://www.jstor.org/stable/2489234" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">restaurants</a>; <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">grocery pace</a>).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Fit beats one-size-fits-all.</strong> Effects vary by audience and setting. A meta-view of retail music studies shows outcomes depend on execution quality and context, not just "music on" vs "off" (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0148296306000282" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">meta-analysis</a>).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Waiting feels shorter with the right tracks.</strong> Music that matches the setting can ease the pain of waiting and support friendlier behavior in service lines and lobbies (<a href="https://chaireomerdesserres.hec.ca/wp-content/uploads/2020/05/The-Impact-of-Music-on-Consumers-Reactions-to-Waiting-for-Services.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">waiting study PDF</a>).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Different people, different reactions.</strong> In the study's two retail tests, women often favored no music or slower music, while men often favored music and quicker tempos. Short-term sales can rise even if some guests enjoy the experience less, which can hurt repeat visits later if you do not tune the mix to your audience (<a href="https://www.sciencedirect.com/science/article/abs/pii/S0969698912000732" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">the study</a>).</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Does this apply outside retail?</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              Yes. Although the experiments took place in an electronics store and a supermarket, the same emotion-to-behavior path applies in many settings. Prior work shows similar music effects in restaurants and other service venues when the soundtrack fits the moment and the crowd (<a href="https://www.jstor.org/stable/2489234" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">restaurant tempo</a>; <a href="https://www.sciencedirect.com/science/article/pii/S0022435997900166" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">PAD model overview</a>).
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">The SensEar checklist: fast setup for retail, bars, and restaurants</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Use this to test safely without hurting guest experience.
            </p>

            <ol className="space-y-6 text-black/80 list-decimal list-inside">
              <li>
                <strong className="text-black">Set clear goals</strong>
                <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                  <li>Retail: grow dwell and basket size, or speed quick trips.</li>
                  <li>Bars: increase orders per guest or speed table turns.</li>
                  <li>Restaurants: control seating pace and upsells without raising stress.</li>
                </ul>
              </li>
              <li>
                <strong className="text-black">Choose tempo by mission</strong>
                <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                  <li>Need browsing and discovery: lean slower.</li>
                  <li>Need quick movement and faster turns: lean faster.</li>
                  <li>Always test a middle set as your control.</li>
                </ul>
              </li>
              <li>
                <strong className="text-black">Match the crowd and time of day</strong>
                <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                  <li>Mornings and older or family-heavy periods: lighter, slower sets.</li>
                  <li>Evenings and younger or high-energy periods: a notch faster.</li>
                  <li>If your audience skews female, trial quieter or slower sessions. If it skews male, trial more energetic sessions. Validate with data from your own floor traffic.</li>
                </ul>
              </li>
              <li>
                <strong className="text-black">Keep volume comfortable</strong>
                <p className="ml-6 mt-2">People should talk without raising their voice. If staff say they are tired by midday, it is too loud.</p>
              </li>
              <li>
                <strong className="text-black">Keep the style on brand</strong>
                <p className="ml-6 mt-2">Pick songs that feel like your space. "Good fit" beats raw BPM tweaks.</p>
              </li>
              <li>
                <strong className="text-black">Measure short and long results</strong>
                <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                  <li>Short term: sales per visitor, time on site, orders per table, queue abandonment.</li>
                  <li>Long term: customer satisfaction, reviews, repeat rate, staff feedback.</li>
                </ul>
              </li>
              <li>
                <strong className="text-black">Test, then tune</strong>
                <ul className="ml-6 mt-2 space-y-1 list-disc list-inside">
                  <li>Run A/B dayparts for two weeks per set.</li>
                  <li>Swap one variable at a time: tempo, volume, or playlist.</li>
                  <li>Keep the winner and retest monthly.</li>
                </ul>
              </li>
            </ol>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Sources</h2>

            <ul className="space-y-2 text-black/80 text-sm">
              <li>• The study with real shoppers and gender moderation in retail settings: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0969698912000732" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">https://www.sciencedirect.com/science/article/abs/pii/S0969698912000732</a></li>
              <li>• Meta-analysis of retail music effects: <a href="https://www.sciencedirect.com/science/article/abs/pii/S0148296306000282" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">https://www.sciencedirect.com/science/article/abs/pii/S0148296306000282</a></li>
              <li>• PAD model summary in environmental psychology: <a href="https://www.sciencedirect.com/science/article/pii/S0022435997900166" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">https://www.sciencedirect.com/science/article/pii/S0022435997900166</a></li>
              <li>• Restaurant tempo classic: <a href="https://www.jstor.org/stable/2489234" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">https://www.jstor.org/stable/2489234</a></li>
              <li>• Supermarket pacing and sales summary: <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf</a></li>
              <li>• Music and perceived waiting time: <a href="https://chaireomerdesserres.hec.ca/wp-content/uploads/2020/05/The-Impact-of-Music-on-Consumers-Reactions-to-Waiting-for-Services.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">https://chaireomerdesserres.hec.ca/wp-content/uploads/2020/05/The-Impact-of-Music-on-Consumers-Reactions-to-Waiting-for-Services.pdf</a></li>
            </ul>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Ready to make every track work harder?</h2>

            <p className="text-black/80 leading-relaxed">
              Book a SensEar Sound Audit to benchmark your space, map your crowd by time of day, and launch a playlist plan that grows sales while keeping guests comfortable.
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
              Book a Sound Audit
            </AnimatedButton>
          </Link>
        </div>
      </div>
    </div>
  );
}