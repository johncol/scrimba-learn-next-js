import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "place-hold.it",
      },
    ],
  },
  devIndicators: false,
};

export default nextConfig;
