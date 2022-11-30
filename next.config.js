/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    loader: 'custom',
    loaderFile: './loader.js',
  },
};

module.exports = nextConfig;
