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