import fs from "fs";
import path from "path";

const ROOT = process.cwd();

const ROUTES = [
  "",
  "/about",
  "/services",
  "/services/signature-playlists",
  "/services/event-soundtracks",
  "/services/sonic-identity",
  "/services/audio-upgrades",
  "/industries",
  "/industries/music-for-hotels-and-resorts",
  "/industries/music-for-restaurants-and-bars",
  "/industries/music-for-retail-stores",
  "/industries/music-for-wellness-and-gyms",
  "/industries/music-for-events-and-experiences",
  "/industries/music-for-art-museums-and-fashion",
  "/case-studies",
  "/blog",
  "/blog/how-top-hospitality-brands-design-sound",
  "/blog/three-reasons-make-music-hospitality",
  "/blog/brand-music-converts-browsers-buyers",
  "/blog/what-exactly-does-music-curator-do",
  "/blog/music-curation-cycle-venues",
  "/blog/building-brand-people-can-hear",
  "/blog/background-music-shapes-customer-behavior",
  "/blog/service-environment-shapes-wait-time",
  "/contact",
  "/faq",
  "/privacy",
  "/terms",
  "/sitemap-page",
];

const DEFAULT_LAYOUT_META = {
  en: {
    title: "SensEar Music - Bespoke Music Curation & Sonic Branding",
    description:
      "Bespoke music curation and sonic branding for hospitality, retail, and events. We craft your brand's unique sonic identity through tailored playlists and audio experiences.",
  },
  el: {
    title: "SensEar Music - Μουσική Επιμέλεια & Sonic Branding",
    description:
      "Εξειδικευμένη μουσική επιμέλεια και sonic branding για ξενοδοχεία, εστιατόρια, retail και εκδηλώσεις. Δημιουργούμε τη μοναδική ηχητική ταυτότητα του brand σας.",
  },
};

const EXTRA_COPY = {
  global: {
    en: ["Skip to main content"],
    el: ["Skip to main content"],
  },
  about: {
    en: [
      "Meet the team",
      "Music obsessed, hospitality minded",
      "George Fameliaris",
      "Co-founder, Chief music curator & AV expert",
      "G's lifelong passion for music and record collecting was further shaped by a BA in Media & Communications and an MA in Popular Music in Film.",
      "He soon became a regular guest DJ on the Athens scene, holding private parties and long-term residencies at venues such as Balux, Sunset Antiparos, and Burger Disco, while sharing the decks with key DJ figures like Colleen \"Cosmo\" Murphy, Danny Krivit, and Gerd Janson.",
      "At SensEar, he shapes each venue's musical identity with precision, creating rhythm and atmosphere that define the brand's signature sound.",
      "John E. Farazoumis",
      "Co-founder, Brand strategy, Client service",
      "From his early DJ sets to his studies in Hospitality Management, JEF has always been guided by music's magnetic pull.",
      "He is a co-founder of a successful digital agency, with 25 years of experience in Web Services, Sales/Marketing & Customer Care and a degree in Hospitality Management and Experience Design from the Haaga-Helia University of Applied Science.",
      "At SensEar, he shapes the brand's strategic direction & connects creative vision with client experience.",
      "Katerina Karali",
      "Contributing associate, DJ, Music curator",
      "Kat combines visual design & sound narrative with a refined artistic sensibility.",
      "A veteran multimedia art director, she helps curate soundscapes for films, exhibitions & private events.",
      "Known for her instinctive selections & taste for rare grooves, she brings depth, texture and a touch of the unexpected to SensEar.",
      "Together, we form SensEar, a team committed to uplifting spaces through compelling, memorable music.",
      "See how we work with clients or contact us to discuss your project.",
      "Read case studies",
      "Get in touch",
      "What sets us apart",
      "Four principles that guide everything we do",
      "Branding music",
      "We translate your vision into music that feels natural and completely on-brand.",
      "Covering all sectors",
      "Music designed to complete guest journeys in all spaces that value atmosphere.",
      "Personalizing services",
      "Our approach adapts to your style, team & needs across multiple locations.",
      "Using music's unique powers",
      "We understand how music shifts moods, shapes spaces and connects people.",
    ],
    el: [
      "Γνωρίστε την ομάδα",
      "Παθιασμένοι με τη μουσική, προσανατολισμένοι στη φιλοξενία",
      "Γιώργος Φαμελιάρης",
      "Συνιδρυτής, Επικεφαλής μουσικής επιμέλειας & AV expert",
      "Το πάθος του Γιώργου για τη μουσική και τη συλλογή δίσκων εμπλουτίστηκε περαιτέρω μέσα από τις σπουδές του, με ένα Πτυχίο (BA) στα Μέσα Μαζικής Ενημέρωσης & Επικοινωνίας και ένα Μεταπτυχιακό (MA) στη Δημοφιλή Μουσική στον Κινηματογράφο.",
      "Σύντομα καθιερώθηκε ως τακτικός guest DJ στην αθηναϊκή σκηνή, αναλαμβάνοντας ιδιωτικά πάρτι και residencies σε εμβληματικούς χώρους όπως το Balux, το Sunset Antiparos και το Burger Disco. Παράλληλα, έχει μοιραστεί τα decks με κορυφαίες προσωπικότητες του χώρου, όπως η Colleen \"Cosmo\" Murphy, ο Danny Krivit και ο Gerd Janson.",
      "Στη SensEar, διαμορφώνει τη μουσική ταυτότητα κάθε χώρου με ακρίβεια, δημιουργώντας τον ρυθμό και την ατμόσφαιρα που ορίζουν τον χαρακτηριστικό ήχο του κάθε brand.",
      "John E. Farazoumis",
      "Συνιδρυτής, Στρατηγική & Επικοινωνία",
      "Από τα πρώτα DJ sets μέχρι τις σπουδές του στην Ηχοληψία και τώρα στη Διοίκηση Φιλοξενίας, ο ρόλος της μουσικής υπήρξε πάντα καθοριστικός στη ζωή του.",
      "Είναι συνιδρυτής μιας επιτυχημένης digital agency, με 25ετή εμπειρία στις Διαδικτυακές Υπηρεσίες, τις Πωλήσεις/Marketing και την Εξυπηρέτηση Πελατών. Είναι κάτοχος πτυχίου στη Διοίκηση Φιλοξενίας και στον Σχεδιασμό Εμπειριών & Υπηρεσιών (Hospitality Management & Experience Design) από το Πανεπιστήμιο Εφαρμοσμένων Επιστημών Haaga-Helia.",
      "Στη SensEar, χαράσσει τη στρατηγική κατεύθυνση του brand και γεφυρώνει το δημιουργικό όραμα με την εμπειρία πελάτη.",
      "Κατερίνα Καραλή",
      "Συνεργάτιδα, DJ & Μουσική Επιμελήτρια",
      "Συνδυάζει τον οπτικό σχεδιασμό με την ηχητική αφήγηση, με εκλεπτυσμένη καλλιτεχνική ματιά.",
      "Έμπειρη multimedia art director, επιμελείται ηχητικά τοπία για ταινίες, εκθέσεις και ιδιωτικές εκδηλώσεις.",
      "Γνωστή για το ένστικτο και την αγάπη της για σπάνια grooves, προσθέτει βάθος, υφή και απρόσμενο χαρακτήρα στη SensEar.",
      "Μαζί, αποτελούμε τη SensEar. Μια ομάδα αφοσιωμένη στο να αναβαθμίζει χώρους μέσα από ουσιαστική, αξέχαστη μουσική.",
      "Δείτε πώς συνεργαζόμαστε με πελάτες ή επικοινωνήστε μαζί μας για το project σας.",
      "Διαβάστε Παραδείγματα",
      "Επικοινωνήστε μαζί μας",
      "Τι μας ξεχωρίζει",
      "Τέσσερις αρχές που καθοδηγούν ό,τι κάνουμε",
      "Μουσική ως branding",
      "Μεταφράζουμε το όραμά σας σε μουσική που ακούγεται φυσική και απόλυτα ταιριαστή στο brand.",
      "Κάλυψη όλων των κλάδων",
      "Μουσική σχεδιασμένη για να ολοκληρώνει το ταξίδι του επισκέπτη σε κάθε χώρο που δίνει αξία στην ατμόσφαιρα.",
      "Προσαρμοσμένες υπηρεσίες",
      "Η προσέγγισή μας προσαρμόζεται στο στυλ, την ομάδα και τις ανάγκες σας, ακόμη και σε πολλαπλές τοποθεσίες.",
      "Η δύναμη της μουσικής",
      "Κατανοούμε πώς η μουσική αλλάζει τη διάθεση, διαμορφώνει χώρους και συνδέει ανθρώπους.",
    ],
  },
  caseStudies: {
    en: ["Four venues, four journeys", "Each with its own character, needs and musical solution."],
    el: ["Τέσσερις χώροι, τέσσερις διαφορετικές διαδρομές", "Κάθε ένας με τον δικό του χαρακτήρα, τις ανάγκες και τη μουσική του λύση."],
  },
  signaturePlaylistsFinal: {
    en: ["Let us craft your signature sound", "Explore our services"],
    el: ["Θέλετε μια ξεχωριστή μουσική ατμόσφαιρα για τον χώρο σας;", "Δείτε τις υπηρεσίες μας"],
  },
  eventSoundtracksFinal: {
    en: ["Let us design your event's sonic journey", "Explore our services"],
    el: ["Αφήστε μας να σχεδιάσουμε το ηχητικό ταξίδι της εκδήλωσής σας", "Δείτε τις υπηρεσίες μας"],
  },
  sonicIdentityFinal: {
    en: ["Let us define your brand's sonic identity", "Explore our services"],
    el: ["Αφήστε μας να ορίσουμε την ηχητική ταυτότητα του brand σας", "Δείτε τις υπηρεσίες μας"],
  },
  industryFinal: {
    hotels: {
      en: ["Upgrade your hotel's atmosphere", "Explore our services"],
      el: ["Αναβαθμίστε την ατμόσφαιρα του ξενοδοχείου σας", "Δείτε τις υπηρεσίες μας"],
    },
    restaurants: {
      en: ["Upgrade your restaurant's atmosphere", "Explore our services"],
      el: ["Αναβαθμίστε την ατμόσφαιρα του εστιατορίου σας", "Δείτε τις υπηρεσίες μας"],
    },
    retail: {
      en: ["Upgrade your store's atmosphere", "Explore our services"],
      el: ["Αναβαθμίστε την ατμόσφαιρα του καταστήματός σας", "Δείτε τις υπηρεσίες μας"],
    },
    wellness: {
      en: ["Upgrade your wellness atmosphere", "Explore our services"],
      el: ["Αναβαθμίστε την ατμόσφαιρα του wellness χώρου σας", "Δείτε τις υπηρεσίες μας"],
    },
    events: {
      en: ["Upgrade your event's atmosphere", "Explore our services"],
      el: ["Αναβαθμίστε την ατμόσφαιρα της εκδήλωσής σας", "Δείτε τις υπηρεσίες μας"],
    },
    art: {
      en: ["Upgrade your cultural atmosphere", "Explore our services"],
      el: ["Αναβαθμίστε την πολιτιστική ατμόσφαιρα", "Δείτε τις υπηρεσίες μας"],
    },
  },
  blogArticleFixed: {
    en: ["8 MIN READ"],
    el: ["8 MIN READ"],
  },
  backHome: {
    en: ["Back to home"],
    el: ["Επιστροφή στην αρχική"],
  },
};

const INDUSTRY_META_DESCRIPTION = {
  hotels: {
    en: "Bespoke music curation for hotels and resorts. We craft your venue's unique sonic identity for memorable guest experiences.",
    el: "Εξειδικευμένη μουσική επιμέλεια για ξενοδοχεία και θέρετρα. Δημιουργούμε τη μοναδική ηχητική ταυτότητα του χώρου σας.",
  },
  restaurants: {
    en: "Bespoke music curation for restaurants and bars. We craft your venue's unique sonic identity for memorable dining experiences.",
    el: "Εξειδικευμένη μουσική επιμέλεια για εστιατόρια και μπαρ. Δημιουργούμε τη μοναδική ηχητική ταυτότητα του χώρου σας.",
  },
  retail: {
    en: "Bespoke music curation for retail stores. We craft your brand's unique sonic identity for memorable shopping experiences.",
    el: "Εξειδικευμένη μουσική επιμέλεια για καταστήματα λιανικής. Δημιουργούμε τη μοναδική ηχητική ταυτότητα του brand σας.",
  },
  wellness: {
    en: "Bespoke music curation for spas and gyms. We craft your venue's unique sonic identity for wellness experiences.",
    el: "Εξειδικευμένη μουσική επιμέλεια για σπα και γυμναστήρια. Δημιουργούμε τη μοναδική ηχητική ταυτότητα του χώρου σας.",
  },
  events: {
    en: "Bespoke music curation for events and experiences. We craft your event's unique sonic identity for memorable moments.",
    el: "Εξειδικευμένη μουσική επιμέλεια για εκδηλώσεις και εμπειρίες. Δημιουργούμε τη μοναδική ηχητική ταυτότητα της εκδήλωσής σας.",
  },
  art: {
    en: "Bespoke music curation for museums, galleries, and fashion events. We craft your venue's unique sonic identity.",
    el: "Εξειδικευμένη μουσική επιμέλεια για μουσεία, γκαλερί και εκδηλώσεις μόδας. Δημιουργούμε τη μοναδική ηχητική ταυτότητα του χώρου σας.",
  },
};

const SKIP_KEYS = new Set([
  "meta",
  "link",
  "path",
  "url",
  "src",
  "image",
  "image_alt",
  "background_image",
  "icon",
  "cta_link",
]);

function readJson(relativePath) {
  const full = path.join(ROOT, relativePath);
  return JSON.parse(fs.readFileSync(full, "utf8"));
}

function extractContentObject(relativePath) {
  const full = path.join(ROOT, relativePath);
  const src = fs.readFileSync(full, "utf8");
  const marker = "const content =";
  const start = src.indexOf(marker);
  if (start === -1) {
    throw new Error(`Cannot find content object in ${relativePath}`);
  }

  const exportStart = src.indexOf("export default", start);
  const between = src.slice(start + marker.length, exportStart);
  const firstBrace = between.indexOf("{");
  const endObject = between.lastIndexOf("};");
  const objectLiteral = between.slice(firstBrace, endObject + 1);

  return Function(`"use strict"; return (${objectLiteral});`)();
}

function normalizeStringToLines(value) {
  if (typeof value !== "string") return [];

  const text = value
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\r/g, "");

  return text
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);
}

function collectStrings(value, output) {
  if (value == null) return;

  if (typeof value === "string") {
    for (const line of normalizeStringToLines(value)) {
      output.push(line);
    }
    return;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      collectStrings(item, output);
    }
    return;
  }

  if (typeof value === "object") {
    for (const [key, nested] of Object.entries(value)) {
      if (SKIP_KEYS.has(key)) continue;
      collectStrings(nested, output);
    }
  }
}

function uniq(lines) {
  const seen = new Set();
  const out = [];
  for (const line of lines) {
    if (!seen.has(line)) {
      seen.add(line);
      out.push(line);
    }
  }
  return out;
}

function pickBlogListContent(dict) {
  const blog = dict.blog;
  return {
    hero: blog.hero,
    featured: blog.featured,
    recent: blog.recent,
    blog_cta: blog.blog_cta,
    articles: blog.articles.map((a) => ({
      title: a.title,
      desc: a.desc,
      tag: a.tag,
      displayDate: a.displayDate,
      author: a.author,
    })),
  };
}

function pickBlogArticleContent(dict, slug) {
  const article = dict.blog.articles.find((a) => a.link === slug);
  if (!article) return {};
  return {
    back_button: dict.blog.back_button,
    blog_cta: dict.blog.blog_cta,
    article: {
      title: article.title,
      desc: article.desc,
      tag: article.tag,
      displayDate: article.displayDate,
      author: article.author,
      content: article.content,
      structuredContent: article.structuredContent,
    },
  };
}

function getFaqLabel(dict) {
  return (
    dict.footer?.nav?.company?.items?.find((i) => i.link === "faq")?.label ||
    "FAQ"
  );
}

function pickSitemapPageCopy(dict) {
  return {
    sitemap_page: dict.sitemap_page,
    main_pages: [
      dict.navigation.home,
      dict.navigation.services,
      dict.navigation.industries,
      dict.navigation.case_studies,
      dict.navigation.about,
      dict.navigation.contact,
      dict.navigation.blog,
      getFaqLabel(dict),
    ],
    services_pages: [
      dict.services_page.hero.title.split(",")[0],
      dict.services_page.services.playlists.title,
      dict.services_page.services.events.title,
      dict.services_page.services.strategy.title,
      dict.services_page.services.upgrades.title,
    ],
    industries_pages: [
      dict.industries_page.hero.title,
      ...dict.industries_page.expertise.items.map((item) => item.title),
    ],
    blog_pages: [dict.blog.meta.title, ...dict.blog.articles.map((a) => a.title)],
  };
}

function getRouteCopySources(lang, route, dict, privacyContent, termsContent) {
  switch (route) {
    case "":
      return [dict.navigation, dict.home, dict.footer, EXTRA_COPY.global[lang]];
    case "/about":
      return [dict.about_page, EXTRA_COPY.about[lang]];
    case "/services":
      return [dict.services_page];
    case "/services/signature-playlists":
      return [dict.signature_playlists, EXTRA_COPY.signaturePlaylistsFinal[lang]];
    case "/services/event-soundtracks":
      return [dict.event_soundtracks, EXTRA_COPY.eventSoundtracksFinal[lang]];
    case "/services/sonic-identity":
      return [dict.sonic_identity, EXTRA_COPY.sonicIdentityFinal[lang]];
    case "/services/audio-upgrades":
      return [dict.audio_upgrades];
    case "/industries":
      return [dict.industries_page];
    case "/industries/music-for-hotels-and-resorts":
      return [dict.hotels_resorts, EXTRA_COPY.industryFinal.hotels[lang]];
    case "/industries/music-for-restaurants-and-bars":
      return [dict.restaurants_bars, EXTRA_COPY.industryFinal.restaurants[lang]];
    case "/industries/music-for-retail-stores":
      return [dict.retail_stores, EXTRA_COPY.industryFinal.retail[lang]];
    case "/industries/music-for-wellness-and-gyms":
      return [dict.wellness_gyms, EXTRA_COPY.industryFinal.wellness[lang]];
    case "/industries/music-for-events-and-experiences":
      return [dict.events_experiences, EXTRA_COPY.industryFinal.events[lang]];
    case "/industries/music-for-art-museums-and-fashion":
      return [dict.art_museums_fashion, EXTRA_COPY.industryFinal.art[lang]];
    case "/case-studies":
      return [dict.case_studies, EXTRA_COPY.caseStudies[lang]];
    case "/blog":
      return [pickBlogListContent(dict)];
    case "/contact":
      return [dict.contact];
    case "/faq":
      return [dict.faq_page];
    case "/privacy":
      return [privacyContent[lang], EXTRA_COPY.backHome[lang]];
    case "/terms":
      return [termsContent[lang], EXTRA_COPY.backHome[lang]];
    case "/sitemap-page":
      return [pickSitemapPageCopy(dict)];
    default:
      if (route.startsWith("/blog/")) {
        const slug = route.replace("/blog/", "");
        return [pickBlogArticleContent(dict, slug), EXTRA_COPY.blogArticleFixed[lang]];
      }
      return [];
  }
}

function getRouteMeta(lang, route, dict) {
  if (route === "") return DEFAULT_LAYOUT_META[lang];

  if (route === "/about") return dict.about_page.meta;
  if (route === "/services") return dict.services_page.meta;
  if (route === "/industries") return dict.industries_page.meta;
  if (route === "/case-studies") return dict.case_studies.meta;
  if (route === "/blog") return dict.blog.meta;
  if (route === "/contact") return dict.contact.meta;

  if (route === "/privacy") {
    return {
      title: lang === "el" ? "Πολιτική Απορρήτου | SensEar Music" : "Privacy Policy | SensEar Music",
      description:
        lang === "el"
          ? "Η πολιτική απορρήτου της SensEar Music. Μάθετε πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τα προσωπικά σας δεδομένα."
          : "SensEar Music privacy policy. Learn how we collect, use, and protect your personal data.",
    };
  }

  if (route === "/terms") {
    return {
      title: lang === "el" ? "Όροι Χρήσης | SensEar Music" : "Terms of Service | SensEar Music",
      description:
        lang === "el"
          ? "Οι όροι χρήσης της SensEar Music. Διαβάστε τους όρους και προϋποθέσεις για τη χρήση των υπηρεσιών μας."
          : "SensEar Music terms of service. Read the terms and conditions for using our services.",
    };
  }

  if (route === "/industries/music-for-hotels-and-resorts") {
    return {
      title: dict.hotels_resorts.meta?.title || "Music for Hotels & Resorts | SensEar",
      description: INDUSTRY_META_DESCRIPTION.hotels[lang],
    };
  }

  if (route === "/industries/music-for-restaurants-and-bars") {
    return {
      title: dict.restaurants_bars.meta?.title || "Music for Restaurants & Bars | SensEar",
      description: INDUSTRY_META_DESCRIPTION.restaurants[lang],
    };
  }

  if (route === "/industries/music-for-retail-stores") {
    return {
      title: dict.retail_stores.meta?.title || "Music for Retail Stores | SensEar",
      description: INDUSTRY_META_DESCRIPTION.retail[lang],
    };
  }

  if (route === "/industries/music-for-wellness-and-gyms") {
    return {
      title: dict.wellness_gyms.meta?.title || "Music for Spas & Gyms | SensEar",
      description: INDUSTRY_META_DESCRIPTION.wellness[lang],
    };
  }

  if (route === "/industries/music-for-events-and-experiences") {
    return {
      title: dict.events_experiences.meta?.title || "Music for Events | SensEar",
      description: INDUSTRY_META_DESCRIPTION.events[lang],
    };
  }

  if (route === "/industries/music-for-art-museums-and-fashion") {
    return {
      title: dict.art_museums_fashion.meta?.title || "Music for Art, Museums & Fashion | SensEar",
      description: INDUSTRY_META_DESCRIPTION.art[lang],
    };
  }

  if (route.startsWith("/blog/")) {
    const slug = route.replace("/blog/", "");
    const article = dict.blog.articles.find((a) => a.link === slug);
    return {
      title: article?.title || "Article Not Found",
      description: article?.desc || "",
    };
  }

  // Routes without page-level generateMetadata inherit layout defaults.
  return DEFAULT_LAYOUT_META[lang];
}

function routeToUrl(lang, route) {
  return route === "" ? `/${lang}` : `/${lang}${route}`;
}

function renderCopyFile(lang, dict, privacyContent, termsContent) {
  const lines = [
    "========================================",
    `EXTRACTED WEBSITE COPY (${lang.toUpperCase()})`,
    "Source: translation dictionaries + code strings",
    "Route order: app/sitemap.ts",
    "========================================",
  ];

  for (const route of ROUTES) {
    const url = routeToUrl(lang, route);
    const gathered = [];

    for (const source of getRouteCopySources(lang, route, dict, privacyContent, termsContent)) {
      collectStrings(source, gathered);
    }

    const finalLines = uniq(gathered);
    lines.push("", `## URL: ${url}`, "");

    if (finalLines.length === 0) {
      lines.push("- [No copy extracted]");
    } else {
      for (const text of finalLines) {
        lines.push(`- ${text}`);
      }
    }
  }

  return `${lines.join("\n")}\n`;
}

function renderMetaFile(lang, dict) {
  const lines = [
    "========================================",
    `META TITLES & DESCRIPTIONS (${lang.toUpperCase()})`,
    "Source: Next.js metadata in code + dictionary values",
    "Route order: app/sitemap.ts",
    "========================================",
  ];

  for (const route of ROUTES) {
    const url = routeToUrl(lang, route);
    const meta = getRouteMeta(lang, route, dict);
    lines.push(
      "",
      `## URL: ${url}`,
      `Meta Title: ${meta.title || ""}`,
      `Meta Description: ${meta.description || ""}`
    );
  }

  return `${lines.join("\n")}\n`;
}

function main() {
  const en = readJson("dictionaries/en.json");
  const el = readJson("dictionaries/el.json");
  const privacyContent = extractContentObject("app/[lang]/privacy/page.tsx");
  const termsContent = extractContentObject("app/[lang]/terms/page.tsx");

  const enCopy = renderCopyFile("en", en, privacyContent, termsContent);
  const elCopy = renderCopyFile("el", el, privacyContent, termsContent);
  const enMeta = renderMetaFile("en", en);
  const elMeta = renderMetaFile("el", el);

  fs.writeFileSync(path.join(ROOT, "dictionaries/en-extracted-text.txt"), enCopy, "utf8");
  fs.writeFileSync(path.join(ROOT, "dictionaries/el-extracted-text.txt"), elCopy, "utf8");
  fs.writeFileSync(path.join(ROOT, "dictionaries/en-meta-title-description.txt"), enMeta, "utf8");
  fs.writeFileSync(path.join(ROOT, "dictionaries/el-meta-title-description.txt"), elMeta, "utf8");

  console.log("Generated dictionaries/en-extracted-text.txt");
  console.log("Generated dictionaries/el-extracted-text.txt");
  console.log("Generated dictionaries/en-meta-title-description.txt");
  console.log("Generated dictionaries/el-meta-title-description.txt");
}

main();

