/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // keeps React in strict mode for dev
  images: {
    domains: ['storage.tally.so'], // allow images from your domain
    unoptimized: true,            // keeps legacy <Image layout=...> working without breaking
  },
};

module.exports = nextConfig;
