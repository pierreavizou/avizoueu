/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avizou.eu",
        port: "",
        pathname: "/img/**",
      },
    ],
  },
};

module.exports = nextConfig;
