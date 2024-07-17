import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import browserslistToEsbuild from 'browserslist-to-esbuild';

// https://vitejs.dev/config/
export default defineConfig({
  build: { target: browserslistToEsbuild() },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', { compilationMode: 'all', panicThreshold: 'CRITICAL_ERRORS' }]],
      },
    }),
    tsconfigPaths(),
  ],
});
