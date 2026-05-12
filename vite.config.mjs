import { defineConfig } from "vite";
import { resolve } from "path";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
  base: "/tomdalby.github.io/",

  plugins: [injectHTML()],

  build: {
    outDir: "dist",
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
  },

  server: {
    port: 3000,
    open: true,
  },
});