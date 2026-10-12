import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { getPublishedPosts, postUrl } from '../../lib/blog';

export const GET: APIRoute = async ({ site }) => {
  if (!site) throw new Error('Configure the production site URL in astro.config.mjs.');
  const posts = await getPublishedPosts();
  return rss({
    title: 'Bernardo Santiago Marin — Blog',
    description: 'Notes on backend engineering, building software, and lessons learned along the way.',
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      categories: post.data.tags,
      link: postUrl(post),
    })),
    customData: '<language>en</language>',
  });
};
