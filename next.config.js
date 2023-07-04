/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // swcMinify: true,
  env: {
    API_URL: "http://localhost:5000",
  },
}

module.exports = nextConfig
