/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['lenis'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
