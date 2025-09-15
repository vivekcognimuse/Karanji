/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    // Option 1: simple allow-list
    domains: [
      'calm-joy-61798b158b.media.strapiapp.com', // your Strapi media host
      'localhost', // if you load images from local Strapi during dev
    ],
  },
reactStrictMode: process.env.NODE_ENV === "development" };

export default nextConfig;
  