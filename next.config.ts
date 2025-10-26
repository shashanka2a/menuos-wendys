import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wendys.bs',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.wendys.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'wendys.ky',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'people.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.tegna-media.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
