/** @type {import('next').NextConfig} */

const repoName = 'byguilitykk.github.io';
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  trailingSlash: true,

  basePath: isProduction ? `/${repoName}` : '',
  assetPrefix: isProduction ? `/${repoName}/` : '',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;