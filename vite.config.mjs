import { defineConfig } from "vite";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  plugins: [injectHTML()],
  rollupOptions: {
    input: {
      main: resolve(__dirname, "index.html"),
      about: resolve(__dirname, "src/pages/about.html"),
      music: resolve(__dirname, "src/pages/music.html"),
      spaces: resolve(__dirname, "src/pages/spaces.html"),
    },
    output: {
      assetFileNames: "assets/[name].[hash][extname]",
    },
  },

  root: "src",
  build: {
    outDir: "dist",
  },
  server: {
    port: 3000,
    open: true,
  },
});
