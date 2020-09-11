const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  distDir: 'build',
  webpack: (config) => {
    config.plugins.push(
      new CompressionPlugin({
        test: /\.js$|\.css$|\.html$/
      })
    );
    return config;
  }
};
