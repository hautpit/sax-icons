/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  webpack: (config, options) => {
    return config;
  },
};

module.exports = withPlugins([withImages()], nextConfig);
