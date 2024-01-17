/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://flowbite.com/"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.com",
        pathname: "/docs/*",
      },
    ],
    domains: ["https://images.unsplash.com/"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/*",
      },
    ],
    domains: ["https://cdn.dummyjson.com/product-images/"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/product-images/*",
      },
    ],
  },
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
};

module.exports = nextConfig;
