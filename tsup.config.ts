import { defineConfig } from 'tsup';

export default defineConfig({
  name: 'type matchers',
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  clean: true,
  sourcemap: true,
});
