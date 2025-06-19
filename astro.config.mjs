// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://vancouvermindbody.site',
  integrations: [sitemap(
    {
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date('2025-06-19'),
    }
  )]
});