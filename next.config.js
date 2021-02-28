const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const getWebpackConfig = require('./webpackConfig');
const runtimeConfigDev = require('./.env.dev.json');
const runtimeConfigProd = require('./.env.prod.json');
const runtimeConfigStag = require('./.env.stag.json');

module.exports = () => {
  const env = process.env.NODE_ENV;
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
    withSass({
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
