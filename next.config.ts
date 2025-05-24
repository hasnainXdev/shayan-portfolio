import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ]
  },
  experimental: {
    optimizeCss: true,
    serverComponentsExternalPackages: ['lightningcss'],
  },
};

export default nextConfig;
