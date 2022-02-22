/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    loader: 'imgix',
    path: 'http://localhost:3000/',
  },
}
