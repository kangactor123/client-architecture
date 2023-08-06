import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'http://localhost:3000',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@components', replacement: '/src/components' },
      { find: '@core', replacement: '/src/core' },
      { find: '@module', replacement: '/src/modules' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@recoil', replacement: '/src/recoil' },
      { find: '@', replacement: '/src' },
    ],
  },
});
