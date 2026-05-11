import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // If deploying to Vercel, use "/"
    // If deploying to GitHub Pages, use "/seadock-frontend/"
    base: "/", 
    build: {
      outDir: "dist",
    }
  }
});