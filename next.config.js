/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Required for static export
  },
  output: 'export', // Enable static export
  trailingSlash: true, // Required for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/brando' : '', // Replace 'brando' with your repo name
}

module.exports = nextConfig 