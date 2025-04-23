/** @type {import('next').NextConfig} */
// const isExport = process.env.EXPORT === 'true';
const nextConfig = {
  output: 'export',
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio/',
  images: {
    unoptimized: true,
  },
  // ...(isExport && {
  //   basePath: '/portfolio',
  //   assetPrefix: '/portfolio/',
  // }),
};

module.exports = nextConfig;