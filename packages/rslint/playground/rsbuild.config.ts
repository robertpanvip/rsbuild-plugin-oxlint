import { defineConfig } from '@rsbuild/core';
import { rslintPlugin } from '../src/index.ts';

export default defineConfig({
  plugins: [rslintPlugin()],
});
