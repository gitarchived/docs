import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'GitArchived',
    favicon: './public/favicon.png',
    logo: {
      src: './src/assets/gitarchived.png',
      replacesTitle: true
    },
    customCss: ['./src/styles/custom.css'],
    social: {
      github: 'https://github.com/gitarchived'
    },
    sidebar: [
      {
        label: 'Reference',
        autogenerate: {
          directory: 'reference'
        }
      },
      {
        label: 'Information',
        autogenerate: {
          directory: 'information'
        }
      },
      {
        label: 'Structures',
        autogenerate: {
          directory: 'structs'
        }
      }
    ]
  })],
  output: "server",
  adapter: cloudflare({ mode: "directory" }),
});
