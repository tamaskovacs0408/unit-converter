import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const ReactCompilerConfig = { target: "18" };

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> master
