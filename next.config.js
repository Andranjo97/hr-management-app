/** @type {import('next').NextConfig} */
const UIRoutes = require('./constants/ui-routes');

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: UIRoutes.people.route,
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
