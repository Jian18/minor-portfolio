/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/personen/jian',
        permanent: true,
      },
    ];
  },
  nextConfig,
};
