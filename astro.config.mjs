// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/apps/abbott/trivia_farmacias',
  outDir: 'apps/abbott/trivia_farmacias',

  vite: {
    plugins: [tailwindcss()],
  },
});