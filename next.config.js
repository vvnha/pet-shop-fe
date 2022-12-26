/** @type {import('next').NextConfig} */
const { i18n } = require('./i18n.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    REACT_APP_STRIPE_PUBLISHABLE_KEY:
      'pk_test_51MEQ9pIuPPPbhqb2brCt2Ie86iDbCLSeMwXtlKnsPU90TCu8aMRxzuaVGFCFHdCtzvsjevZD18tx4P3gtuiZl3VK00f1lrksdu',
  },
  i18n,
};

module.exports = nextConfig;
