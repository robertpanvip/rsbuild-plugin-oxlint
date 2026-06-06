# rsbuild-plugin-lint

lint plugin for Rsbuild.

<p>
  <a href="https://npmjs.com/package/rsbuild-plugin-lint">
   <img src="https://img.shields.io/npm/v/rsbuild-plugin-lint?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
  <a href="https://npmcharts.com/compare/rsbuild-plugin-lint?minimal=true"><img src="https://img.shields.io/npm/dm/rsbuild-plugin-example.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="downloads" /></a>
</p>

## Usage

Install:

```bash
npm add rsbuild-plugin-lint -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { lintPlugin } from 'rsbuild-plugin-lint';

export default {
  plugins: [lintPlugin(
      {
          args: [...buildArgs(options), '--format', 'jsonline'],
          executeName: 'rslint',
          formatter,
      }
  )],
};
```

## License

[MIT](./LICENSE).
