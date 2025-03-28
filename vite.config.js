import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "jsm-x9",
      project: "javascript-react"
    })
  ],

  build: {
    sourcemap: true
  },

  // Ensure compatibility with GitHub Pages deployment
  base: '/apple_website/', // Change 'repo-name' to your actual GitHub repo name
});
