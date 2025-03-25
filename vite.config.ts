import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    ghPages({
      branch: 'gh-pages',
      dotfiles: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
  },
  base: process.env.NODE_ENV === 'production' ? '/github-profile-master/' : '/',
  publicDir: 'public',
});
