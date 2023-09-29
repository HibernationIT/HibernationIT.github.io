/** @type {{trailingSlash: boolean}} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
