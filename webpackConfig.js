module.exports = (config) => {
  const webConfig = config;
  webConfig.module.rules.push(
    {
      test: require.resolve('jquery'),
      use: [
        {
          loader: 'expose-loader',
          options: 'jQuery'
        },
        {
          loader: 'expose-loader',
          options: '$'
        },
        {
          loader: 'expose-loader',
          options: 'jquery'
        }
      ]
    },
    {
      test: /\.js|\.jsx$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      exclude: /node_modules/,
      loader: 'file-loader'
    }
  );
  return webConfig;
};
