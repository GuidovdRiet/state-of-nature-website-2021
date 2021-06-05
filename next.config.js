module.exports = {
  distDir: 'out',
  target: serverless,
  images: {
    domains: ['images.ctfassets.net'],
  },
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    return config;
  },
};
