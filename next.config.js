/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  reactStrictMode: true,
  redirects: async () => {
    return [
    ];
  },
  rewrites: async () => [
  ],
};

module.exports = nextConfig;
