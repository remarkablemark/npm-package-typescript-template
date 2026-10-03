import { defineConfig } from 'tsdown';

export default defineConfig({
  format: ['esm', 'cjs', 'umd'],
  sourcemap: true,
  globalName: 'npm-package-typescript-template',
});
