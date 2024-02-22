/* eslint-env node */
import react from "@vitejs/plugin-react-swc";
import { join } from "node:path";
import { defineConfig } from "vite";
import ViteEnvironmentPlugin from "vite-plugin-environment";
import ViteTopLevelAwait from "vite-plugin-top-level-await";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: join(__dirname, "postcss.config.js"),
  },
  plugins: [
    tsconfigPaths(),
    ViteEnvironmentPlugin({
      NODE_ENV: "development",
    }),
    ViteTopLevelAwait(),
    react(),
  ],
});
