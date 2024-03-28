import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'GitArchived',
    favicon: '/favicon.png',
    head: [
      {
        tag: 'link',
        attrs: {
          rel: 'icon',
          href: '/favicon.png',
          sizes: '16x16',
        }
      }
    ],
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
