/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Option 1: simple allow-list
    domains: [
      "calm-joy-61798b158b.media.strapiapp.com", // your Strapi media host
      "localhost", // if you load images from local Strapi during dev
      "karanji.com", // if you load images from local Strapi during dev
      "www.karanji.com", // if you load images from local Strapi during dev
    ],
  },
  reactStrictMode: process.env.NODE_ENV === "development",

  // Add headers to allow embedding in Strapi admin panel
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Remove restrictive frame options
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Allow both local development and Strapi Cloud
              "frame-ancestors 'self' http://localhost:1337 https://*.strapiapp.com https://cloud.strapi.io",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https: calm-joy-61798b158b.media.strapiapp.com",
              "font-src 'self' data:",
              "connect-src 'self' https: http://localhost:1337",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
