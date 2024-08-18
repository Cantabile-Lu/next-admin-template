/** @type {import('next').NextConfig} */
import createNextIntlPlugin from  'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['antd'],
    typescript: {
      ignoreBuildErrors: true, // 忽略 TypeScript 检查
    },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'random-d.uk',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
        pathname: '/**',
      },
    ],
  }
};

export default withNextIntl(nextConfig);
