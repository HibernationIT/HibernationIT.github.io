/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  trailingSlash: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
