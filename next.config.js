/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wfla.com",
      },
    ],
  },
};

module.exports = nextConfig;
