/** @type {import('next').NextConfig} */

// Get the host from environment or use localhost as default
const getHost = () => {
  if (process.env.NEXT_PUBLIC_API_URL) {
    try {
      const url = new URL(process.env.NEXT_PUBLIC_API_URL);
      return url.hostname;
    } catch (e) {
      console.warn('Invalid NEXT_PUBLIC_API_URL format');
    }
  }
  return 'localhost';
};

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }
    return config;
  },
}

export default nextConfig
