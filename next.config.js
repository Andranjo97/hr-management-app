/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/people',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
