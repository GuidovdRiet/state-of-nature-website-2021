module.exports = {
  distDir: 'out',
  target: 'serverless',
  images: {
    domains: ['images.ctfassets.net'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
