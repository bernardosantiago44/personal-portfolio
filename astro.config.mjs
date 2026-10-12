// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import rehypeBlog from "./scripts/rehype-blog.mjs";

// https://astro.build/config
export default defineConfig({
  site: 'https://bernardosantiago.me',
  trailingSlash: 'always',
  markdown: {
    processor: unified({ rehypePlugins: [rehypeBlog] }),
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: cloudflare({ imageService: 'compile' }),
  integrations: [mdx(), sitemap()],
  output: 'static'
});