/**
 * pages.config.js - Page routing configuration
 * 
 * This file is AUTO-GENERATED. Do not add imports or modify PAGES manually.
 * Pages are auto-registered when you create files in the ./pages/ folder.
 * 
 * THE ONLY EDITABLE VALUE: mainPage
 * This controls which page is the landing page (shown when users visit the app).
 * 
 * Example file structure:
 * 
 *   import HomePage from './pages/HomePage';
 *   import Dashboard from './pages/Dashboard';
 *   import Settings from './pages/Settings';
 *   
 *   export const PAGES = {
 *       "HomePage": HomePage,
 *       "Dashboard": Dashboard,
 *       "Settings": Settings,
 *   }
 *   
 *   export const pagesConfig = {
 *       mainPage: "HomePage",
 *       Pages: PAGES,
 *   };
 * 
 * Example with Layout (wraps all pages):
 *
 *   import Home from './pages/Home';
 *   import Settings from './pages/Settings';
 *   import __Layout from './Layout.jsx';
 *
 *   export const PAGES = {
 *       "Home": Home,
 *       "Settings": Settings,
 *   }
 *
 *   export const pagesConfig = {
 *       mainPage: "Home",
 *       Pages: PAGES,
 *       Layout: __Layout,
 *   };
 *
 * To change the main page from HomePage to Dashboard, use find_replace:
 *   Old: mainPage: "HomePage",
 *   New: mainPage: "Dashboard",
 *
 * The mainPage value must match a key in the PAGES object exactly.
 */
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Industries from './pages/Industries';
import Services from './pages/Services';
import Sitemap from './pages/Sitemap';
import about from './pages/about';
import audioUpgrades from './pages/audio-upgrades';
import backgroundMusicShapesCustomerBehavior from './pages/background-music-shapes-customer-behavior';
import brandMusicConvertsBrowsersBuyers from './pages/brand-music-converts-browsers-buyers';
import buildingBrandPeopleCanHear from './pages/building-brand-people-can-hear';
import caseStudies from './pages/case-studies';
import contact from './pages/contact';
import eventSoundtracks from './pages/event-soundtracks';
import howTopHospitalityBrandsDesignSound from './pages/how-top-hospitality-brands-design-sound';
import musicCurationCycleVenues from './pages/music-curation-cycle-venues';
import musicForArtMuseumsAndFashion from './pages/music-for-art-museums-and-fashion';
import musicForEventsAndExperiences from './pages/music-for-events-and-experiences';
import musicForHotelsAndResorts from './pages/music-for-hotels-and-resorts';
import musicForRestaurantsAndBars from './pages/music-for-restaurants-and-bars';
import musicForRetailStores from './pages/music-for-retail-stores';
import musicForWellnessAndGyms from './pages/music-for-wellness-and-gyms';
import serviceEnvironmentShapesWaitTime from './pages/service-environment-shapes-wait-time';
import signaturePlaylists from './pages/signature-playlists';
import sonicStrategy from './pages/sonic-strategy';
import threeReasonsMakeMusicHospitality from './pages/three-reasons-make-music-hospitality';
import wellnessCenters from './pages/wellness-centers';
import whatExactlyDoesMusicCuratorDo from './pages/what-exactly-does-music-curator-do';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Blog": Blog,
    "CaseStudies": CaseStudies,
    "FAQ": FAQ,
    "Home": Home,
    "Industries": Industries,
    "Services": Services,
    "Sitemap": Sitemap,
    "about": about,
    "audio-upgrades": audioUpgrades,
    "background-music-shapes-customer-behavior": backgroundMusicShapesCustomerBehavior,
    "brand-music-converts-browsers-buyers": brandMusicConvertsBrowsersBuyers,
    "building-brand-people-can-hear": buildingBrandPeopleCanHear,
    "case-studies": caseStudies,
    "contact": contact,
    "event-soundtracks": eventSoundtracks,
    "how-top-hospitality-brands-design-sound": howTopHospitalityBrandsDesignSound,
    "music-curation-cycle-venues": musicCurationCycleVenues,
    "music-for-art-museums-and-fashion": musicForArtMuseumsAndFashion,
    "music-for-events-and-experiences": musicForEventsAndExperiences,
    "music-for-hotels-and-resorts": musicForHotelsAndResorts,
    "music-for-restaurants-and-bars": musicForRestaurantsAndBars,
    "music-for-retail-stores": musicForRetailStores,
    "music-for-wellness-and-gyms": musicForWellnessAndGyms,
    "service-environment-shapes-wait-time": serviceEnvironmentShapesWaitTime,
    "signature-playlists": signaturePlaylists,
    "sonic-strategy": sonicStrategy,
    "three-reasons-make-music-hospitality": threeReasonsMakeMusicHospitality,
    "wellness-centers": wellnessCenters,
    "what-exactly-does-music-curator-do": whatExactlyDoesMusicCuratorDo,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};