/** @type {import('next').NextConfig} */
const UIRoutes = require('./constants/ui-routes');
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.resolve(__dirname, 'styles')],
    prependData: `@import '__importable.scss';`,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    let configCopy = { ...config };
    configCopy.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve('./components'),
      '@constants': path.resolve('./constants'),
      '@styles': path.resolve('./styles'),
      '@pages': path.resolve('./pages'),
      '@public': path.resolve('./public'),
      '@services': path.resolve('./services'),
    }

    return configCopy;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: UIRoutes.people.route,
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig
