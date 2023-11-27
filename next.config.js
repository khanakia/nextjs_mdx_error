/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()


const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    // mdxRs: true,
  },

};

module.exports = withMDX(nextConfig)
