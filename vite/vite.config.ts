import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import react from "@vitejs/plugin-react";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue(), react(), vueJsx()],
  server: {
    port: 5173,
  },
});
