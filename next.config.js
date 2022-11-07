/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com', 'cdn.sanity.io'],
  },

}

module.exports = nextConfig

// module.exports = {
//   images: {
//     domains: ['via.placeholder.com', 'cdn.sanity.io'],
//   },
// }
//this is test
