/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    loader: 'default',
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
  poweredByHeader: false,
  generateEtags: false,
  compress: true,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    scrollRestoration: true,
  },
  httpAgentOptions: {
    keepAlive: true,
  },
}

// Only use bundle analyzer when explicitly enabled
if (process.env.ANALYZE === 'true') {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
  })
  module.exports = withBundleAnalyzer(nextConfig)
} else {
  module.exports = nextConfig
}