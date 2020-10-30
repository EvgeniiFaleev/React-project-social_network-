const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@music": path.resolve(__dirname, "src/features/music"),
      "@ui": path.resolve(__dirname, "src/ui"),
      "@news": path.resolve(__dirname, "src/features/news"),
      "@profile": path.resolve(__dirname, "src/features/profile"),
      "@users": path.resolve(__dirname, "src/features/users"),
      "@auth": path.resolve(__dirname,
        "src/features/authentication/"),
      "@dialogs": path.resolve(__dirname,
        "src/features/dialogs"),
      "@images": path.resolve(__dirname, "src/ui/assets/images"),
      "@icons": path.resolve(__dirname, "src/ui/assets/icons"),
      "@api": path.resolve(__dirname, "src/api"),
      "@socialAPI": path.resolve(__dirname, "src/api/socialAPI.ts"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@store": path.resolve(__dirname, "src/lib"),
    },
  }
};

