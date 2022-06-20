/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/personen/jian-kootker',
        permanent: true,
      },
    ];
  },
  nextConfig,
};
