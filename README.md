# Bernardo Santiago Marin — Portfolio

Static Astro portfolio and blog, deployed to Cloudflare. Production URL: https://bernardosantiago.me.

## Development

Use Node.js 22.12 or newer, then run `npm ci`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Astro server |
| `npm run check` | Validate Astro and TypeScript |
| `npm run build` | Build static pages into `dist/` |
| `npm run preview` | Build and preview with Wrangler |
| `npm run deploy` | Build and deploy using the existing Cloudflare configuration |

There is no lint command configured. Cloudflare Pages can use `npm run build` with `dist/client` as its output directory (the static assets emitted by the installed Cloudflare adapter). The existing Wrangler deployment also remains supported.

## Publish an article

Create `src/content/blog/my-article.mdx` (or `.md`), add frontmatter, write your article, and push it to GitHub. A Cloudflare deployment connected to the repository publishes it on the next build. The filename determines the URL: `my-article.mdx` becomes `/blog/my-article/`. Subdirectories are supported. Keep filenames URL-friendly and stable to preserve links.

```yaml
---
title: 'An informative article title'
description: 'A short summary used in article previews, search results, and RSS.'
publishedAt: 2026-10-11
updatedAt: 2026-10-12 # optional; must not precede publishedAt
tags: ['Java', 'Backend'] # optional; defaults to []
draft: true # optional; defaults to false
# image: ./images/cover.webp # optional local cover image
# imageAlt: 'Describe what the cover image shows' # required when image is set
---
```

`title`, `description`, and `publishedAt` are required and validated at build time. Use ISO dates (or ISO timestamps with a timezone). Start body headings at `##` because the layout supplies the article's `h1`. Set `draft: false` when ready to publish. Drafts are excluded from listings, static routes, RSS, and the sitemap in both development and production. A future date does not schedule publication; use `draft` to control visibility.

The included Markdown and MDX guides are **draft examples**, not published articles. To preview one locally, temporarily set `draft: false`, run `npm run dev`, then restore it before committing. Tables, task lists, blockquotes, lists, links, and syntax-highlighted fenced code are supported in both formats. Wide tables and code blocks scroll horizontally and are keyboard accessible.

### Images and MDX

Put local images beside the article or under `src/assets`. For Markdown body images, use `![Meaningful alt text](./images/example.webp)`; Astro processes local images and reserves their dimensions. For a cover, use the relative `image` field plus `imageAlt`; the layout uses `astro:assets` Image with responsive widths and build-time image optimization. For MDX images, import `Image` from `astro:assets` and the local image:

```mdx
import { Image } from 'astro:assets';
import diagram from './images/diagram.webp';

<Image src={diagram} alt="Diagram showing the request flow through the service" />
```

MDX can also import existing Astro components without hydration; see `mdx-guide.mdx`. Avoid adding `client:*` directives unless interaction requires them. Remote images need an explicit image configuration and dimensions; prefer local assets.

### Discoverability

`astro.config.mjs` sets the production origin used for canonical URLs, social metadata, the official sitemap integration (`/sitemap-index.xml`), and `/blog/rss.xml`. Update `site` if the domain changes. Article URLs and draft filtering live in `src/lib/blog.ts`, shared by all blog consumers. The site uses static generation with the existing Cloudflare adapter; no CMS or database is required.
