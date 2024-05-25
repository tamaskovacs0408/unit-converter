/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";

export default defineConfig({
  ...viteConfig,

  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./test/setup.ts",
  },
});
