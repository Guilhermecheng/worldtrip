/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  nextConfig,
  images: {
    loader: 'imgix',
    // path: 'http://localhost:3000/', // this path for svg use in dev mode
    path: 'https://worldtrip-guilhermecheng.vercel.app',
    domains: ['prismic.io', 'images.prismic.io']
  },
}
