# 🧾 Astro Project Snapshot
Generated: 2025-05-12T16:46:37.847Z

## 🔧 Environment

```bash
Node: v23.5.0
npm: 11.0.0
pnpm: 9.15.3
```

## 📁 File Structure

```bash
./_scripts/dump-astro-project-info.mjs
./_scripts/README.md
./.DS_Store
./.gitignore
./.prettierrc
./.stylelintrc.json
./.vscode/settings.json
./astro.config.mjs
./eslint.config.js
./package-lock.json
./package.json
./public/favicon.svg
./README.md
./src/.DS_Store
./src/components/Button.astro
./src/components/Navbar.astro
./src/env.d.ts
./src/layouts/main.astro
./src/pages/index.astro
./src/pages/markdown-page.md
./src/pages/project-detail.astro
./src/styles/global.css
./tsconfig.json
```

## 📄 package.json

```
{
  "name": "astro-portfolio-base",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "lint": "eslint . --ext .ts,.astro",
    "format": "prettier --write .",
    "dump": "node _scripts/dump-astro-project-info.mjs"
  },
  "dependencies": {
    "@astrojs/mdx": "^4.2.6",
    "@tailwindcss/vite": "^4.1.3",
    "@types/canvas-confetti": "^1.9.0",
    "astro": "^5.7.12",
    "astro-icon": "^1.1.5",
    "astro-show-tailwindcss-breakpoint": "^1.0.9",
    "canvas-confetti": "^1.9.3",
    "flowbite": "^3.1.2",
    "tailwindcss": "^4.1.3"
  },
  "devDependencies": {
    "@typescript-eslint/parser": "^8.32.0",
    "eslint": "^9.26.0",
    "eslint-plugin-astro": "^1.3.1",
    "prettier": "^3.5.3",
    "prettier-plugin-astro": "0.14.1",
    "prettier-plugin-tailwindcss": "^0.6.11",
    "stylelint": "^16.19.1",
    "stylelint-config-standard": "^38.0.0"
  }
}
```

## 📄 astro.config.mjs

```
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

import showTailwindcssBreakpoint from 'astro-show-tailwindcss-breakpoint';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '~': path.resolve('./src'),
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@pages': path.resolve('./src/pages'),
        '@public': path.resolve('./public'),
        '@styles': path.resolve('./src/styles'),
        '@utils': path.resolve('./src/utils'),
        '@assets': path.resolve('./src/assets'),
        '@project-images': path.resolve('./src/assets/images/project-images'),
      },
    },
    plugins: [tailwindcss()],
  },

  integrations: [showTailwindcssBreakpoint()],
});
```

## 📄 eslint.config.js

```
import eslintPluginAstro from "eslint-plugin-astro";
export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
];

```

## 📄 .prettierrc

```
{
  "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  "overrides": [
    {
      "files": "*.astro",
      "options": {
        "parser": "astro"
      }
    }
  ],
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2
}

```

## 📄 .gitignore

```
# build output
dist/
# generated types
.astro/

# dependencies
node_modules/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*


# environment variables
.env
.env.production

# macOS-specific files
.DS_Store

# jetbrains setting folder
.idea/

```

## 📄 .vscode/settings.json

```
{
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "astro", // Enable .astro
    "typescript", // Enable .ts
    "typescriptreact" // Enable .tsx
  ]
}

```

## 📄 README.md

```
# Astro with Tailwind

```sh
npm create astro@latest -- --template with-tailwindcss
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/with-tailwindcss)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/with-tailwindcss/devcontainer.json)

Astro comes with [Tailwind](https://tailwindcss.com) support out of the box. This example showcases how to style your Astro project with Tailwind.

For complete setup instructions, please see our [Tailwind Integration Guide](https://docs.astro.build/en/guides/integrations-guide/tailwind).

```