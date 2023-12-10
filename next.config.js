/** @type {import('next').NextConfig} */
const CopyFilePlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const { resolve } = require("path");

const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new CopyFilePlugin({
        patterns: [
          {
            context: "content/article",
            from: "**/*.{jpg,png}",
            to: resolve(__dirname, "public/assets/images/content"),
          },
        ],
      }),
      new WriteFilePlugin()
    );
    return config;
  },
};

module.exports = nextConfig;
