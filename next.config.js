/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/',
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
