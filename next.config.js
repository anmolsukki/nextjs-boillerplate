const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  distDir: 'build',
  env: {
    BaseUrl: 'https://www.baseurl.com'
  },
  webpack: (config) => {
    config.plugins.push(
      new CompressionPlugin({
        test: /\.js$|\.css$|\.html$/
      })
    );
    return config;
  }
};
