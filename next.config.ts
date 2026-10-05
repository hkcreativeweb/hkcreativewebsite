import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Friendly aliases for pages and sections that live on other routes
  async redirects() {
    return [
      { source: '/work', destination: '/portfolio', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: false },
    ]
  },
  turbopack: { root: path.resolve(__dirname) },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
