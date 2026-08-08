/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  
  /**
   * URL Rewrites for Indexable Section Pages
   * Maps clean URLs to query parameters for SEO
   * Example: /about -> /?section=about
   */
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/?section=about',
      },
      {
        source: '/projects',
        destination: '/?section=projects',
      },
      {
        source: '/contact',
        destination: '/?section=contact',
      },
    ];
  },

  /**
   * Redirects for retired section pages
   * /skills and /experience no longer exist on the redesigned site
   */
  async redirects() {
    return [
      {
        source: '/skills',
        destination: '/',
        permanent: true,
      },
      {
        source: '/experience',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
