/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // images: {
  //   unoptimized: true,
  // },
 images: {
    domains: ['storage.tally.so'],
  },
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
