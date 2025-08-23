/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ytimg.com', 'img.youtube.com', 'via.placeholder.com'],
    // or on newer Next: remotePatterns: [
    //   { protocol: 'https', hostname: 'i.ytimg.com' },
    //   { protocol: 'https', hostname: 'img.youtube.com' },
    //   { protocol: 'https', hostname: 'via.placeholder.com' },
    // ],
  },
};

module.exports = nextConfig;
