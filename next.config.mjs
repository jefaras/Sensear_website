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
    
    // Turbopack configuration (Next.js 16 default bundler)
    turbopack: {},
    
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
