/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["calm-joy-61798b158b.media.strapiapp.com", "localhost"],
  },

  reactStrictMode: process.env.NODE_ENV === "development",

  compiler: {
    // Remove console.* except error and warn in production
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
};

export default nextConfig;
