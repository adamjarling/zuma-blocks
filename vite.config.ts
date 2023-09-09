import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "ZumaBlocks",
      fileName: "zuma-blocks",
    },
    sourcemap: true,
    rollupOptions: {
      external: [
        "@headlessui/react",
        "@heroicons/react",
        "react",
        "react-dom",
        "tailwindcss",
        "framer-motion",
      ],
      output: {
        globals: {
          react: "React",
          reactDOM: "ReactDOM",
        },
      },
    },
  },
});
