const path = require("path");
const withPWA = require("next-pwa");

module.exports = withPWA({
  future: {
    webpack5: true,
  },
  images: {
    domains: ["kaabeapp.blob.core.windows.net"],
  },
  future: { webpack5: true },
  pwa: {
    dest: "public",
    mode: "production", // for disabling workbox log messages
    disable: process.env.NODE_ENV === "development",
    register: true,
    sw: "sw.js",
  },
  env: {
    protosDir: path.join(__dirname, "Protos"),
  },
});
