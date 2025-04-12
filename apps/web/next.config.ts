// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
// };

// export default nextConfig;
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"], // add more shared packages here if needed
  output: "standalone",
  experimental: {
    outputFileTracingRoot: path.join(__dirname, "../../"),
  },
  typescript: {
    ignoreBuildErrors: true, // use with caution in prod
  },
  eslint: {
    ignoreDuringBuilds: true, // disable linting in CI builds
  },
};

module.exports = nextConfig;
