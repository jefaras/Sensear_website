import analyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = analyzer({
    enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'qtrypzzcjebvfcihiynt.supabase.co',
                pathname: '/storage/v1/object/public/**',
            },
        ],
    },

    // Disable ES Lint and Typescript checks during build to prevent out-of-memory errors
    // Since we check the code locally before pushing, running it again on a low-RAM production 
    // server is redundant and often kills the build process (Exit code: 9).
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },

    // Turbopack configuration (Next.js 16 default bundler)
    // Keep empty config for dev mode, but use --no-turbopack for production builds
    turbopack: {},

    // Redirects to fix Google Search Console indexing issues
    async redirects() {
        return [
            // Fix redirect errors for trailing slash on locale routes
            {
                source: '/en/',
                destination: '/en',
                permanent: true, // 308 - permanent redirect
            },
            {
                source: '/el/',
                destination: '/el',
                permanent: true, // 308 - permanent redirect
            },
            // Fix 404 error: old URL structure for hotels-resorts
            {
                source: '/:lang(en|el)/industries/hotels-resorts',
                destination: '/:lang/industries/music-for-hotels-and-resorts',
                permanent: true, // 308 - permanent redirect
            },
            // Fix alternative page with canonical: /home doesn't exist
            {
                source: '/home',
                destination: '/',
                permanent: true, // 308 - permanent redirect
            },
            // Fix crawled but not indexed: non-existent client pages
            // Redirect to case studies page where these clients are featured
            {
                source: '/klouvi-bar',
                destination: '/case-studies',
                permanent: true, // 308 - permanent redirect
            },
            {
                source: '/:lang(en|el)/klouvi-bar',
                destination: '/:lang/case-studies',
                permanent: true, // 308 - permanent redirect
            },
            {
                source: '/beach-house-antiparos',
                destination: '/case-studies',
                permanent: true, // 308 - permanent redirect
            },
            {
                source: '/:lang(en|el)/beach-house-antiparos',
                destination: '/:lang/case-studies',
                permanent: true, // 308 - permanent redirect
            },

            // Fix Bing Webmaster Tools 400-499 errors

            // Fix double /services/services/ duplication
            {
                source: '/:lang(en|el)/services/services/:slug',
                destination: '/:lang/services/:slug',
                permanent: true, // 308 - permanent redirect
            },

            // Fix missing /industries/ prefix for industry pages
            {
                source: '/:lang(en|el)/music-for-hotels-and-resorts',
                destination: '/:lang/industries/music-for-hotels-and-resorts',
                permanent: true, // 308 - permanent redirect
            },
            {
                source: '/:lang(en|el)/music-for-restaurants-and-bars',
                destination: '/:lang/industries/music-for-restaurants-and-bars',
                permanent: true, // 308 - permanent redirect
            },

            // Clean up 404 errors for pages Google indexed during the previous redirect loop bug
            // Specifically catching paths that repeat /industries/industries/
            {
                source: '/:lang(en|el)?/industries/industries/:slug',
                destination: '/:lang/industries/:slug',
                permanent: true, // 308 - permanent redirect
            },

            // Fix missing /services/ prefix for service pages (localized)
            {
                source: '/:lang(en|el)/sonic-identity',
                destination: '/:lang/services/sonic-identity',
                permanent: true, // 308 - permanent redirect
            },
            {
                source: '/:lang(en|el)/signature-playlists',
                destination: '/:lang/services/signature-playlists',
                permanent: true, // 308 - permanent redirect
            },

            // Fix broken redirects for non-localized URLs (Bing Webmaster Tools)
            // These need to redirect to the correct path structure with locale
            {
                source: '/sonic-identity',
                destination: '/services/sonic-identity',
                permanent: true, // 308 - permanent redirect
            },
            {
                source: '/signature-playlists',
                destination: '/services/signature-playlists',
                permanent: true, // 308 - permanent redirect
            },
            {
                source: '/music-for-hotels-and-resorts',
                destination: '/industries/music-for-hotels-and-resorts',
                permanent: true, // 308 - permanent redirect
            },
            {
                source: '/music-for-restaurants-and-bars',
                destination: '/industries/music-for-restaurants-and-bars',
                permanent: true, // 308 - permanent redirect
            },
        ];
    },

    // Caching headers for better performance
    headers: async () => [
        {
            // Apply to all routes
            source: '/:path*',
            headers: [
                // Cache static assets for 1 year (immutable)
                {
                    key: 'Cache-Control',
                    value: 'public, max-age=31536000, immutable',
                },
            ],
        },
        {
            // HTML pages - shorter cache with revalidation
            source: '/:path((?!_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml).*)',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'public, max-age=3600, stale-while-revalidate=86400',
                },
            ],
        },
    ],

    // Enable experimental features for package import optimization
    experimental: {
        // Enable Lightning CSS for CSS optimization (reduces CSS size by 20-30%)
        optimizeCss: true,
        // Limit worker threads to prevent process spawn issues on shared hosting
        workerThreads: false,
        cpus: 1,
        // Optimize imports from these packages to reduce bundle size
        optimizePackageImports: [
            'lucide-react',
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-select',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-tooltip',
        ],
    },

    // Webpack configuration for bundle optimization
    webpack: (config, { isServer }) => {
        // Enable tree shaking
        config.optimization = {
            ...config.optimization,
            usedExports: true,
            sideEffects: true,
        };

        // Split chunks configuration for better caching and smaller bundles
        if (!isServer) {
            config.optimization.splitChunks = {
                chunks: 'all',
                cacheGroups: {
                    // React core - rarely changes, good for long-term caching
                    react: {
                        test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
                        name: 'react-vendor',
                        priority: 40,
                        reuseExistingChunk: true,
                    },
                    // Radix UI components
                    radix: {
                        test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
                        name: 'radix-ui',
                        priority: 25,
                        reuseExistingChunk: true,
                    },
                    // Lucide icons - tree-shakeable icon library
                    lucide: {
                        test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
                        name: 'lucide-icons',
                        priority: 25,
                        reuseExistingChunk: true,
                    },
                    // Other vendor libraries
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        priority: 20,
                        reuseExistingChunk: true,
                    },
                    // Common modules shared between routes
                    common: {
                        minChunks: 2,
                        priority: 10,
                        reuseExistingChunk: true,
                    },
                },
                maxInitialRequests: 25,
                minSize: 20000,
            };
        }

        return config;
    },
};

export default withBundleAnalyzer(nextConfig);
