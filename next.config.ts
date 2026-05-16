import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Sanity CMS image CDN — required for next/image when fetching
      // assets uploaded to project xg3ip04r (or any future Sanity project).
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  async redirects() {
    return [
      // Platform page was folded into Merlin (May 2026 trim). Keep deep
      // links working by sending /platform → /merlin (loop is the closest
      // section to the old Platform "what is physical AI" content).
      { source: "/platform", destination: "/merlin", permanent: true },
    ];
  },
};

export default nextConfig;
