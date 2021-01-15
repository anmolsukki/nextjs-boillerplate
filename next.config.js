const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css');
const getWebpackConfig = require('./webpackConfig');
const runtimeConfigDev = require('./.env.dev');
const runtimeConfigProd = require('./.env.prod');
const runtimeConfigStag = require('./.env.stag');

module.exports = () => {
  const env = process.env.NODE_ENV || 'development';
  const runtimeConfig = {
    development: runtimeConfigDev,
    production: runtimeConfigProd,
    staging: runtimeConfigStag
  };

  if (typeof require !== 'undefined') {
    require.extensions['.less'] = () => {};
  }

  let config = {
    webpack: getWebpackConfig,
    publicRuntimeConfig: runtimeConfig[env]
  };

  config = withCSS(
    withLess({
      ...config,
      lessLoaderOptions: {
        javascriptEnabled: true
      },
      assetPrefix: runtimeConfig[env].assetPrefix,
      basePath: runtimeConfig[env].basePath,
      trailingSlash: runtimeConfig[env].trailingSlash
    })
  );
  return config;
};
