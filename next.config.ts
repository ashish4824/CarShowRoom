import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Disable source maps in production to reduce memory usage
  productionBrowserSourceMaps: false,
  // Enable standalone output for better optimization
  output: 'standalone',
  // Configure server components external packages
  experimental: {
    serverComponentsExternalPackages: [],
  },
  // Optimize package imports
  webpack: (config: any, { isServer }: any) => {
    // Only run this optimization on the client build
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 10,
        minSize: 0,
        cacheGroups: {
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/,
            priority: 20,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'async',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
