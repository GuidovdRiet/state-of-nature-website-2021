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

    // load worker files as a urls by using Asset Modules
    // https://webpack.js.org/guides/asset-modules/
    config.module.rules.unshift({
      test: /pdf\.worker\.(min\.)?js/,
      type: 'asset/resource',
      generator: {
        filename: 'static/worker/[hash][ext][query]',
      },
    });

    config.module.rules.unshift({
      test: /\.node$/,
      loader: 'node-loader',
    });

    return config;
  },
};
