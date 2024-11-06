import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'rickandmortyapi.com'
    }]
  },
  async redirects(){
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  }
};

export default nextConfig;
