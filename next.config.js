/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
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
