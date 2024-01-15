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
  },
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
};

module.exports = nextConfig;
