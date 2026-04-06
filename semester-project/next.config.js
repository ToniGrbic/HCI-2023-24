/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: [
      "src/app",
      "src/components",
      "src/hooks",
      "src/lib",
      "src/styles",
      "src/types",
    ],
  },
};

module.exports = nextConfig;
