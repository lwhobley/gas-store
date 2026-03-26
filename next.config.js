/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['files.cdn.printful.com', 'files.catbox.moe'],
  },
};

module.exports = nextConfig;
