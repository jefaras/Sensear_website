(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ScrollToTop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollToTop",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ScrollToTop() {
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Show button when page is scrolled down
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            const toggleVisibility = {
                "ScrollToTop.useEffect.toggleVisibility": ()=>{
                    if (window.scrollY > 300) {
                        setIsVisible(true);
                    } else {
                        setIsVisible(false);
                    }
                }
            }["ScrollToTop.useEffect.toggleVisibility"];
            window.addEventListener("scroll", toggleVisibility);
            return ({
                "ScrollToTop.useEffect": ()=>window.removeEventListener("scroll", toggleVisibility)
            })["ScrollToTop.useEffect"];
        }
    }["ScrollToTop.useEffect"], []);
    // Scroll to top smoothly
    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: scrollToTop,
        className: `fixed bottom-8 right-8 z-50 p-3 rounded-full bg-black/30 backdrop-blur-sm text-white border border-white/20 shadow-lg transition-all duration-300 hover:bg-black/50 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/30 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`,
        "aria-label": "Scroll to top",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
            className: "w-5 h-5"
        }, void 0, false, {
            fileName: "[project]/components/ScrollToTop.tsx",
            lineNumber: 41,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ScrollToTop.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_s(ScrollToTop, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Navbar({ lang, navigation }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            let ticking = false;
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    if (!ticking) {
                        window.requestAnimationFrame({
                            "Navbar.useEffect.handleScroll": ()=>{
                                setScrolled(window.scrollY > 20);
                                ticking = false;
                            }
                        }["Navbar.useEffect.handleScroll"]);
                        ticking = true;
                    }
                }
            }["Navbar.useEffect.handleScroll"];
            // Check initial scroll position on mount
            setScrolled(window.scrollY > 20);
            // Use passive event listener for better scroll performance
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const isActive = (path)=>pathname === path;
    const switchLang = ()=>{
        if (!pathname) return "/";
        const segments = pathname.split("/");
        const currentLang = segments[1];
        const newLang = currentLang === "en" ? "el" : "en";
        segments[1] = newLang;
        return segments.join("/");
    };
    const targetLang = lang === "en" ? "el" : "en";
    const targetLangLabel = lang === "en" ? "GR" : "EN";
    const links = [
        {
            href: `/${lang}`,
            label: navigation.home
        },
        {
            href: `/${lang}/services`,
            label: navigation.services
        },
        {
            href: `/${lang}/industries`,
            label: navigation.industries
        },
        {
            href: `/${lang}/case-studies`,
            label: navigation.case_studies
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        role: "navigation",
        "aria-label": "Main navigation",
        suppressHydrationWarning: true,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-1", scrolled || isOpen ? "bg-black lg:bg-black/95 shadow-lg" : "bg-transparent", !scrolled && !isOpen ? "text-black" : "text-white"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${lang}`,
                        className: "group flex items-center gap-3 shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-16 h-16",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: scrolled || isOpen ? "/images/brand/sensear-logo-white.png" : "/images/brand/sensear-logo-color.png",
                                    alt: "SensEar",
                                    fill: true,
                                    className: "object-contain transition-all duration-300 group-hover:scale-110",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 86,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-syne text-3xl font-bold tracking-wide transition-colors", scrolled || isOpen ? "text-white" : "text-black"),
                                children: "SENSEAR"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 98,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:flex items-center gap-6",
                        children: [
                            links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-jakarta text-base font-bold tracking-wide transition-all hover:underline decoration-1 underline-offset-4", scrolled || isOpen ? "text-white/90 hover:text-white" : "text-black/80 hover:text-black", isActive(link.href) && "underline"),
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/components/Navbar.tsx",
                                    lineNumber: 109,
                                    columnNumber: 25
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${lang}/blog`,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-jakarta text-base font-bold tracking-wide transition-all hover:underline decoration-1 underline-offset-4", scrolled || isOpen ? "text-white/90 hover:text-white" : "text-black/80 hover:text-black", isActive(`/${lang}/blog`) && "underline"),
                                children: navigation.blog
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 122,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${lang}/about`,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-jakarta text-base font-bold tracking-wide transition-all hover:underline decoration-1 underline-offset-4", scrolled || isOpen ? "text-white/90 hover:text-white" : "text-black/80 hover:text-black", isActive(`/${lang}/about`) && "underline"),
                                children: navigation.about
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 133,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${lang}/contact`,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full px-6 py-2 border font-jakarta text-base font-bold tracking-wide transition-all hover:underline decoration-1 underline-offset-4", scrolled || isOpen ? "border-white/30 text-white/90 hover:text-white hover:border-white/50" : "border-black/30 text-black/80 hover:text-black hover:border-black/50", isActive(`/${lang}/contact`) && "underline"),
                                children: navigation.contact
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 144,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: switchLang(),
                                "aria-label": `Switch to ${targetLangLabel === 'EN' ? 'English' : 'Ελληνικά'}`,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-1 text-sm font-medium px-3 py-1 border rounded-full transition-colors", scrolled || isOpen ? "border-white/20 text-white hover:bg-white/10" : "border-black/20 text-black hover:bg-black/5"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        className: "w-4 h-4",
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 168,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: targetLangLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 169,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 158,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": isOpen ? "Close menu" : "Open menu",
                        "aria-expanded": isOpen,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("lg:hidden p-2 transition-colors", scrolled || isOpen ? "text-white" : "text-black"),
                        onClick: ()=>setIsOpen(!isOpen),
                        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 183,
                            columnNumber: 31
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 183,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 174,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden absolute top-full left-0 right-0 bg-black shadow-lg p-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto",
                children: [
                    links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            onClick: ()=>setIsOpen(false),
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-jakarta font-bold py-3 border-b border-white/10", isActive(link.href) ? "text-white" : "text-white/70"),
                            children: link.label
                        }, link.href, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 191,
                            columnNumber: 25
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${lang}/contact`,
                        onClick: ()=>setIsOpen(false),
                        className: "text-lg font-jakarta font-bold py-3 border-b border-white/10 text-white/70",
                        children: navigation.contact
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 204,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${lang}/blog`,
                        onClick: ()=>setIsOpen(false),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-jakarta font-bold py-3 border-b border-white/10", isActive(`/${lang}/blog`) ? "text-white" : "text-white/70"),
                        children: navigation.blog
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 212,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${lang}/about`,
                        onClick: ()=>setIsOpen(false),
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg font-jakarta font-bold py-3 border-b border-white/10", isActive(`/${lang}/about`) ? "text-white" : "text-white/70"),
                        children: navigation.about
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 223,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: switchLang(),
                        className: "flex items-center gap-2 text-lg font-bold py-2 text-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 238,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Switch to ",
                                    targetLangLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 239,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 234,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 189,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar.tsx",
        lineNumber: 73,
        columnNumber: 9
    }, this);
}
_s(Navbar, "70KHIOP4FbrEe0C29HnWrar0C7g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/data:1a918f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitNewsletterForm",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40df08ee095886368fb9400a0d42a79e1be75ed6bc":"submitNewsletterForm"},"app/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40df08ee095886368fb9400a0d42a79e1be75ed6bc", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitNewsletterForm");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcclxuXHJcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XHJcbmltcG9ydCB7IHNlbmRFbWFpbCwgZ2VuZXJhdGVDb250YWN0RW1haWxIVE1MLCBnZW5lcmF0ZU5ld3NsZXR0ZXJFbWFpbEhUTUwgfSBmcm9tIFwiQC9saWIvZW1haWxcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHZlcmlmeVR1cm5zdGlsZVRva2VuKHRva2VuOiBzdHJpbmcgfCBudWxsKSB7XHJcbiAgICBpZiAoIXRva2VuKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgaWYgKCFwcm9jZXNzLmVudi5UVVJOU1RJTEVfU0VDUkVUX0tFWSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIlRVUk5TVElMRV9TRUNSRVRfS0VZIGlzIG1pc3NpbmcsIGJ5cGFzc2luZyBzZWN1cml0eSBjaGVjayBmb3IgZGV2ZWxvcG1lbnRcIik7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9jaGFsbGVuZ2VzLmNsb3VkZmxhcmUuY29tL3R1cm5zdGlsZS92MC9zaXRldmVyaWZ5XCIsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyh7XHJcbiAgICAgICAgICAgICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LlRVUk5TVElMRV9TRUNSRVRfS0VZLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHRva2VuLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gZGF0YS5zdWNjZXNzO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiVHVybnN0aWxlIHZlcmlmaWNhdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgbmFtZTogei5zdHJpbmcoKS5taW4oMiwgXCJOYW1lIG11c3QgYmUgYXQgbGVhc3QgMiBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgc3VybmFtZTogei5zdHJpbmcoKS5taW4oMiwgXCJTdXJuYW1lIG11c3QgYmUgYXQgbGVhc3QgMiBjaGFyYWN0ZXJzXCIpLFxyXG4gICAgYnVzaW5lc3NfbmFtZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoXCJJbnZhbGlkIGVtYWlsIGFkZHJlc3NcIiksXHJcbiAgICBwaG9uZTogei5zdHJpbmcoKS5yZWZpbmUodmFsID0+IHZhbC5yZXBsYWNlKC9cXEQvZywgJycpLmxlbmd0aCA9PT0gMTAsIFwiUGhvbmUgbnVtYmVyIG11c3QgY29udGFpbiBleGFjdGx5IDEwIGRpZ2l0c1wiKSxcclxuICAgIGNvdW50cnlfY29kZTogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxyXG4gICAgdmVudWVfdHlwZTogei5zdHJpbmcoKS5taW4oMSwgXCJQbGVhc2Ugc2VsZWN0IGEgdmVudWUgdHlwZVwiKSxcclxuICAgIHNlcnZpY2VfaW50ZXJlc3Q6IHouc3RyaW5nKCkubWluKDEsIFwiUGxlYXNlIHNlbGVjdCBhIHNlcnZpY2UgaW50ZXJlc3RcIiksXHJcbiAgICBtZXNzYWdlOiB6LnN0cmluZygpLm1pbigxMCwgXCJNZXNzYWdlIG11c3QgYmUgYXQgbGVhc3QgMTAgY2hhcmFjdGVyc1wiKSxcclxufSk7XHJcblxyXG5jb25zdCBuZXdzbGV0dGVyU2NoZW1hID0gei5vYmplY3Qoe1xyXG4gICAgZW1haWw6IHouc3RyaW5nKCkuZW1haWwoXCJJbnZhbGlkIGVtYWlsIGFkZHJlc3NcIiksXHJcbiAgICBzb3VyY2U6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcclxufSk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc3VibWl0Q29udGFjdEZvcm0oZm9ybURhdGE6IEZvcm1EYXRhKSB7XHJcbiAgICAvLyBWZXJpZnkgdHVybnN0aWxlIHRva2VuIGZpcnN0XHJcbiAgICBjb25zdCB0b2tlbiA9IGZvcm1EYXRhLmdldChcImNmLXR1cm5zdGlsZS1yZXNwb25zZVwiKT8udG9TdHJpbmcoKSB8fCBudWxsO1xyXG4gICAgY29uc3QgaXNWYWxpZFRva2VuID0gYXdhaXQgdmVyaWZ5VHVybnN0aWxlVG9rZW4odG9rZW4pO1xyXG5cclxuICAgIGlmICghaXNWYWxpZFRva2VuKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgICAgICBfZm9ybTogW1wiU2VjdXJpdHkgdmVyaWZpY2F0aW9uIGZhaWxlZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIl0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFZhbGlkYXRlIGZvcm0gZGF0YVxyXG4gICAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gc2NoZW1hLnNhZmVQYXJzZSh7XHJcbiAgICAgICAgbmFtZTogZm9ybURhdGEuZ2V0KFwibmFtZVwiKSxcclxuICAgICAgICBzdXJuYW1lOiBmb3JtRGF0YS5nZXQoXCJzdXJuYW1lXCIpLFxyXG4gICAgICAgIGJ1c2luZXNzX25hbWU6IGZvcm1EYXRhLmdldChcImJ1c2luZXNzX25hbWVcIiksXHJcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmdldChcImVtYWlsXCIpLFxyXG4gICAgICAgIHBob25lOiBmb3JtRGF0YS5nZXQoXCJwaG9uZVwiKSxcclxuICAgICAgICBjb3VudHJ5X2NvZGU6IGZvcm1EYXRhLmdldChcImNvdW50cnlfY29kZVwiKSxcclxuICAgICAgICB2ZW51ZV90eXBlOiBmb3JtRGF0YS5nZXQoXCJ2ZW51ZV90eXBlXCIpLFxyXG4gICAgICAgIHNlcnZpY2VfaW50ZXJlc3Q6IGZvcm1EYXRhLmdldChcInNlcnZpY2VfaW50ZXJlc3RcIiksXHJcbiAgICAgICAgbWVzc2FnZTogZm9ybURhdGEuZ2V0KFwibWVzc2FnZVwiKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmICghdmFsaWRhdGVkRmllbGRzLnN1Y2Nlc3MpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhID0gdmFsaWRhdGVkRmllbGRzLmRhdGE7XHJcblxyXG4gICAgLy8gR2VuZXJhdGUgZW1haWwgSFRNTFxyXG4gICAgY29uc3QgZW1haWxIVE1MID0gZ2VuZXJhdGVDb250YWN0RW1haWxIVE1MKHtcclxuICAgICAgICAuLi5kYXRhLFxyXG4gICAgICAgIHBob25lOiBkYXRhLmNvdW50cnlfY29kZSA/IGAke2RhdGEuY291bnRyeV9jb2RlfSAke2RhdGEucGhvbmV9YCA6IGRhdGEucGhvbmVcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNlbmQgZW1haWwgdG8gYWxsIHJlY2lwaWVudHNcclxuICAgIGNvbnN0IHJlY2lwaWVudHMgPSBwcm9jZXNzLmVudi5TTVRQX1RPID8gcHJvY2Vzcy5lbnYuU01UUF9UTy5zcGxpdCgnLCcpLm1hcChlID0+IGUudHJpbSgpKSA6IFtcImplZmFyYXpAZ21haWwuY29tXCIsIFwiaW5mb0BzZW5zZWFyLm11c2ljXCJdO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsUmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgIHJlY2lwaWVudHMubWFwKHJlY2lwaWVudCA9PlxyXG4gICAgICAgICAgICBzZW5kRW1haWwoe1xyXG4gICAgICAgICAgICAgICAgdG86IHJlY2lwaWVudCxcclxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IGBbU2Vuc0Vhcl0gTmV3IENvbnRhY3QgRm9ybSBTdWJtaXNzaW9uIGZyb20gJHtkYXRhLm5hbWV9YCxcclxuICAgICAgICAgICAgICAgIGh0bWw6IGVtYWlsSFRNTCxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICApO1xyXG5cclxuICAgIC8vIENoZWNrIGlmIGFsbCBlbWFpbHMgd2VyZSBzZW50IHN1Y2Nlc3NmdWxseVxyXG4gICAgY29uc3QgZmFpbGVkRW1haWxzID0gZW1haWxSZXN1bHRzLmZpbHRlcihyZXN1bHQgPT4gIXJlc3VsdC5zdWNjZXNzKTtcclxuICAgIGlmIChmYWlsZWRFbWFpbHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gc2VuZCBzb21lIGNvbnRhY3QgZm9ybSBlbWFpbHM6XCIsIGZhaWxlZEVtYWlscyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZXJyb3JzOiB7XHJcbiAgICAgICAgICAgICAgICBfZm9ybTogW2BGYWlsZWQgdG8gc2VuZCBlbWFpbC4gU2VydmVyIEVycm9yOiAke1N0cmluZygoZmFpbGVkRW1haWxzWzBdLmVycm9yIGFzIGFueSk/Lm1lc3NhZ2UgfHwgZmFpbGVkRW1haWxzWzBdLmVycm9yKX1gXSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiU3VjY2VzcyEgQ29udGFjdCBmb3JtIHN1Ym1pdHRlZCBhbmQgZW1haWxzIHNlbnQ6XCIsIGRhdGEubmFtZSwgZGF0YS5lbWFpbCk7XHJcblxyXG4gICAgLy8gUmV0dXJuIHN1Y2Nlc3NcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXROZXdzbGV0dGVyRm9ybShmb3JtRGF0YTogRm9ybURhdGEpIHtcclxuICAgIC8vIFZlcmlmeSB0dXJuc3RpbGUgdG9rZW4gZmlyc3RcclxuICAgIGNvbnN0IHRva2VuID0gZm9ybURhdGEuZ2V0KFwiY2YtdHVybnN0aWxlLXJlc3BvbnNlXCIpPy50b1N0cmluZygpIHx8IG51bGw7XHJcbiAgICBjb25zdCBpc1ZhbGlkVG9rZW4gPSBhd2FpdCB2ZXJpZnlUdXJuc3RpbGVUb2tlbih0b2tlbik7XHJcblxyXG4gICAgaWYgKCFpc1ZhbGlkVG9rZW4pIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcnM6IHtcclxuICAgICAgICAgICAgICAgIF9mb3JtOiBbXCJTZWN1cml0eSB2ZXJpZmljYXRpb24gZmFpbGVkLiBQbGVhc2UgdHJ5IGFnYWluLlwiXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmFsaWRhdGUgZm9ybSBkYXRhXHJcbiAgICBjb25zdCB2YWxpZGF0ZWRGaWVsZHMgPSBuZXdzbGV0dGVyU2NoZW1hLnNhZmVQYXJzZSh7XHJcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmdldChcImVtYWlsXCIpLFxyXG4gICAgICAgIHNvdXJjZTogZm9ybURhdGEuZ2V0KFwic291cmNlXCIpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGVycm9yczogdmFsaWRhdGVkRmllbGRzLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBlbWFpbCBIVE1MXHJcbiAgICBjb25zdCBlbWFpbEhUTUwgPSBnZW5lcmF0ZU5ld3NsZXR0ZXJFbWFpbEhUTUwoe1xyXG4gICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICAgIHNvdXJjZTogZGF0YS5zb3VyY2UgfHwgXCJXZWJzaXRlXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTZW5kIGVtYWlsIHRvIGJvdGggcmVjaXBpZW50c1xyXG4gICAgY29uc3QgcmVjaXBpZW50cyA9IFtcImplZmFyYXpAZ21haWwuY29tXCIsIFwiaW5mb0BzZW5zZWFyLm11c2ljXCJdO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsUmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFxyXG4gICAgICAgIHJlY2lwaWVudHMubWFwKHJlY2lwaWVudCA9PlxyXG4gICAgICAgICAgICBzZW5kRW1haWwoe1xyXG4gICAgICAgICAgICAgICAgdG86IHJlY2lwaWVudCxcclxuICAgICAgICAgICAgICAgIHN1YmplY3Q6IGBbU2Vuc0Vhcl0gTmV3IE5ld3NsZXR0ZXIgU3Vic2NyaXB0aW9uIGZyb20gJHtkYXRhLmVtYWlsfWAsXHJcbiAgICAgICAgICAgICAgICBodG1sOiBlbWFpbEhUTUwsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBDaGVjayBpZiBhbGwgZW1haWxzIHdlcmUgc2VudCBzdWNjZXNzZnVsbHlcclxuICAgIGNvbnN0IGZhaWxlZEVtYWlscyA9IGVtYWlsUmVzdWx0cy5maWx0ZXIocmVzdWx0ID0+ICFyZXN1bHQuc3VjY2Vzcyk7XHJcbiAgICBpZiAoZmFpbGVkRW1haWxzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHNlbmQgc29tZSBuZXdzbGV0dGVyIGVtYWlsczpcIiwgZmFpbGVkRW1haWxzKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBlcnJvcnM6IHtcclxuICAgICAgICAgICAgICAgIF9mb3JtOiBbYEZhaWxlZCB0byBzdWJzY3JpYmUuIFNlcnZlciBFcnJvcjogJHtTdHJpbmcoKGZhaWxlZEVtYWlsc1swXS5lcnJvciBhcyBhbnkpPy5tZXNzYWdlIHx8IGZhaWxlZEVtYWlsc1swXS5lcnJvcil9YF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3MhIE5ld3NsZXR0ZXIgc3Vic2NyaXB0aW9uIHN1Ym1pdHRlZCBhbmQgZW1haWxzIHNlbnQ6XCIsIGRhdGEuZW1haWwpO1xyXG5cclxuICAgIC8vIFJldHVybiBzdWNjZXNzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN1Y2Nlc3M6IHRydWUsXHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVJBMEhzQixpTUFBQSJ9
}),
"[project]/components/NewsletterForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsletterForm",
    ()=>NewsletterForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$1a918f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:1a918f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$marsidev$2f$react$2d$turnstile$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@marsidev/react-turnstile/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const invisibleOptions = {
    size: 'invisible'
};
function NewsletterForm({ placeholder, buttonText, source = "Website", variant = "footer" }) {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [turnstileToken, setTurnstileToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");
        if (!turnstileToken) {
            setStatus("error");
            setErrorMessage("Security verification failed. Please refresh the page.");
            return;
        }
        const formData = new FormData();
        formData.append("cf-turnstile-response", turnstileToken);
        formData.append("email", email);
        formData.append("source", source);
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$1a918f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitNewsletterForm"])(formData);
        if (result.success) {
            setStatus("success");
            setEmail("");
            setTurnstileToken(null);
        } else if (result.errors) {
            setStatus("error");
            const errors = result.errors;
            setErrorMessage(errors._form?.[0] || errors.email?.[0] || "Something went wrong. Please try again.");
        }
    }
    if (status === "success") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `text-lg ${variant === "footer" ? "text-white/70" : "text-black/70"}`,
            children: "✓ Thank you for subscribing!"
        }, void 0, false, {
            fileName: "[project]/components/NewsletterForm.tsx",
            lineNumber: 64,
            columnNumber: 13
        }, this);
    }
    if (variant === "cta") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "email",
                    value: email,
                    onChange: (e)=>{
                        setEmail(e.target.value);
                        if (status === "error") {
                            setStatus("idle");
                            setErrorMessage("");
                        }
                    },
                    placeholder: placeholder,
                    required: true,
                    className: `flex-1 px-8 py-5 text-lg rounded-full border-2 bg-white/80 text-black placeholder:text-black/50 focus:outline-none ${status === "error" ? 'border-red-500' : 'border-black/20 focus:border-black/50'}`
                }, void 0, false, {
                    fileName: "[project]/components/NewsletterForm.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "submit",
                    disabled: status === "loading",
                    className: "group relative bg-black text-white hover:bg-black/90 px-12 py-5 text-lg font-semibold rounded-full transition-all duration-500 overflow-hidden flex items-center justify-center border-2 border-transparent disabled:opacity-50 disabled:cursor-not-allowed",
                    children: status === "loading" ? "Subscribing..." : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "transition-transform duration-300 group-hover:-translate-x-2 inline-block",
                                children: buttonText
                            }, void 0, false, {
                                fileName: "[project]/components/NewsletterForm.tsx",
                                lineNumber: 97,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                            }, void 0, false, {
                                fileName: "[project]/components/NewsletterForm.tsx",
                                lineNumber: 100,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/components/NewsletterForm.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, this),
                status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-red-500 text-sm w-full text-center",
                    children: errorMessage
                }, void 0, false, {
                    fileName: "[project]/components/NewsletterForm.tsx",
                    lineNumber: 105,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$marsidev$2f$react$2d$turnstile$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Turnstile"], {
                    siteKey: ("TURBOPACK compile-time value", "1x00000000000000000000AA") || "",
                    onSuccess: (token)=>setTurnstileToken(token),
                    options: invisibleOptions
                }, void 0, false, {
                    fileName: "[project]/components/NewsletterForm.tsx",
                    lineNumber: 107,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/NewsletterForm.tsx",
            lineNumber: 72,
            columnNumber: 13
        }, this);
    }
    // Footer variant
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        value: email,
                        onChange: (e)=>{
                            setEmail(e.target.value);
                            if (status === "error") {
                                setStatus("idle");
                                setErrorMessage("");
                            }
                        },
                        placeholder: placeholder,
                        required: true,
                        className: `bg-white/10 border text-white placeholder:text-white/50 flex-1 text-sm h-9 max-w-[180px] rounded-full px-4 focus:outline-none ${status === "error" ? 'border-red-500' : 'border-white/20 focus:border-white/50'}`
                    }, void 0, false, {
                        fileName: "[project]/components/NewsletterForm.tsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: status === "loading",
                        className: "group relative bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-2 text-xs font-semibold rounded-full transition-all duration-300 overflow-hidden h-9 flex items-center disabled:opacity-50 disabled:cursor-not-allowed",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative inline-flex items-center mr-2 align-middle transition-transform duration-300 group-hover:-translate-x-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/brand/sensear-logo-white.png",
                                    width: 20,
                                    height: 20,
                                    className: "w-5 h-5 object-contain",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/components/NewsletterForm.tsx",
                                    lineNumber: 141,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/NewsletterForm.tsx",
                                lineNumber: 140,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "transition-transform duration-300 group-hover:-translate-x-2 inline-block",
                                children: status === "loading" ? "..." : buttonText
                            }, void 0, false, {
                                fileName: "[project]/components/NewsletterForm.tsx",
                                lineNumber: 143,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "absolute right-2 w-3 h-3 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 top-1/2 -translate-y-1/2"
                            }, void 0, false, {
                                fileName: "[project]/components/NewsletterForm.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/NewsletterForm.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/NewsletterForm.tsx",
                lineNumber: 119,
                columnNumber: 13
            }, this),
            status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-400 text-xs",
                children: errorMessage
            }, void 0, false, {
                fileName: "[project]/components/NewsletterForm.tsx",
                lineNumber: 150,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$marsidev$2f$react$2d$turnstile$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Turnstile"], {
                siteKey: ("TURBOPACK compile-time value", "1x00000000000000000000AA") || "",
                onSuccess: (token)=>setTurnstileToken(token),
                options: invisibleOptions
            }, void 0, false, {
                fileName: "[project]/components/NewsletterForm.tsx",
                lineNumber: 152,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/NewsletterForm.tsx",
        lineNumber: 118,
        columnNumber: 9
    }, this);
}
_s(NewsletterForm, "ay6g/iD3SJChv/9AH692sUiRUC0=");
_c = NewsletterForm;
var _c;
__turbopack_context__.k.register(_c, "NewsletterForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_12146f59._.js.map