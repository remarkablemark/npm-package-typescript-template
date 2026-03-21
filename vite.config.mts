import { copyFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'npm-package-typescript-template',
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => {
        switch (format) {
          case 'cjs':
            return 'index.cjs';
          case 'es':
            return 'index.mjs';
          case 'umd':
            return 'index.umd.js';
          default:
            return `index.${format}.js`;
        }
      },
    },
    sourcemap: true,
  },

  plugins: [
    dts({
      include: ['src'],
      rollupTypes: true,
      async afterBuild() {
        const outDir = resolve(import.meta.dirname, 'dist');
        await Promise.all(
          ['cts', 'mts'].map((extension) =>
            copyFile(
              resolve(outDir, 'index.d.ts'),
              resolve(outDir, `index.d.${extension}`),
            ),
          ),
        );
      },
    }),
  ],

  test: {
    globals: true,
    coverage: {
      thresholds: {
        100: true,
      },
    },
  },
});
