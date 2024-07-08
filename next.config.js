// next.config.js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  assetPrefix: isProd ? "/untalinfo-website/" : "",
  images: {
    unoptimized: true,
  },
  output: "export",
};
