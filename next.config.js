/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => { // webpack configurations
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'widget5',
        remotes: {
          //next1: `next1@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './demo': './components/demo',
        },
        shared: {
          // "react": {
          //   singleton: true,
          //   strictVersion: true,
          //   version: '18.2.0'
          // },
          // "react-dom": {
          //   singleton: true,
          //   strictVersion: true,
          //   version: '18.2.0'
          // }
        },
      })
    );

    return config;
  }
}

module.exports = nextConfig