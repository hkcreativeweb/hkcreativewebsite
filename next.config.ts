import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Friendly aliases for sections that live on other routes
  async redirects() {
    return [
      { source: '/services', destination: '/#services', permanent: false },
      { source: '/work', destination: '/portfolio', permanent: false },
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
