/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: 'https://api.sultan-bazar.com/api/v1',
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;