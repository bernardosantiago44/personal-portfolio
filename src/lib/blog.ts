import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

// Shared by the landing page, static routes, and feed. Drafts are never public.
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) =>
    b.data.publishedAt.getTime() - a.data.publishedAt.getTime() || a.id.localeCompare(b.id),
  );
}

export function postUrl(post: Pick<BlogPost, 'id'>): string {
  return `/blog/${post.id.split('/').map(encodeURIComponent).join('/')}/`;
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  }).format(date);
}
