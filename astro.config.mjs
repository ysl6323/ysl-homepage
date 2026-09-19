// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ysl6323.github.io',
  // Project-site base path for GitHub Pages. Change to '/' if you enable a
  // custom domain or rename the repo to ysl6323.github.io.
  base: '/Personal-Website-ShanglinYuan',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
