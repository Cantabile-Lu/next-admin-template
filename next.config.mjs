/** @type {import('next').NextConfig} */
import createNextIntlPlugin from  'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['antd']
};

export default withNextIntl(nextConfig);
