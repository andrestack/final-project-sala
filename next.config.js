/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

(module.exports = nextConfig),
  {
    env: {
      AUTH0_BASE_URL:
        process.env.AUTH0_BASE_URL ??
        process.env.VERCEL_URL ??
        "http://localhost:3000",
    },
  };
