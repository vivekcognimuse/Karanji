/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "calm-joy-61798b158b.media.strapiapp.com",
      "localhost",
      "karanji.com",
      "www.karanji.com",
    ],
  },
  reactStrictMode: process.env.NODE_ENV === "development",

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "frame-ancestors 'self' http://localhost:1337 https://*.strapiapp.com https://cloud.strapi.io",
              // 👇 Added https://agent.d-id.com here
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://agent.d-id.com https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://tagmanager.google.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: blob: https: calm-joy-61798b158b.media.strapiapp.com",
              "font-src 'self' data: https://fonts.gstatic.com",
              "connect-src 'self' https: http://localhost:1337 https://agent.d-id.com https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;