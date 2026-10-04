import { defineConfig, type UserConfig } from 'tsdown';

const config = {
  globalName: 'npm-package-typescript-template',
  sourcemap: true,
} satisfies UserConfig;

export default defineConfig([
  {
    ...config,
    format: ['esm', 'cjs', 'umd'],
  },

  {
    ...config,
    format: 'umd',
    minify: true,
    outputOptions: {
      entryFileNames: '[name].umd.min.js',
    },
  },
]);
