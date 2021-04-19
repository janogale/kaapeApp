const path = require("path");
const withPWA = require("next-pwa");

module.exports = withPWA({
  distDir: "build",
  future: {
    webpack5: true,
  },
  images: {
    domains: ["kaabeapp.blob.core.windows.net"],
  },
  future: { webpack5: true },

  env: {
    protosDir: path.join(__dirname, "Protos"),
  },

  // PWA config
  pwa: {
    dest: "public",
  },
});
