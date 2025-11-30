import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable React strict mode for better error detection
  reactStrictMode: true,
  // Ensure framer-motion works with Turbopack
  transpilePackages: ['framer-motion'],
};

export default nextConfig;
