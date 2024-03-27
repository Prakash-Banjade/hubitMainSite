/** @type {import('next').NextCo
 * nfig} */
const nextConfig = {
  reactStrictMode: true,
  siteUrl: process.env.SITE_URL || "https://hubit.com.np",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 1000,
  env: {
    // "NEXT_APP":"https://hubitbackend.onrender.com"
    "NEXT_APP": "https://hubmainback.hubit.com.np",
    "API_URL": "http://192.168.1.72:3000"
  },
  images: {
    domains: [
      "192.168.1.72",
      // "https://storage.googleapis.com/",
      "storage.googleapis.com", "i.gifer.com",
      "images.unsplash.com", "encrypted-tbn0.gstatic.com",
      "hubmainback.hubit.com.np",
    ],
  },
};

module.exports = nextConfig;
