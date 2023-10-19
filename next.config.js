/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  exportTrailingSlash: true,
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
