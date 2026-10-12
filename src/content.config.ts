import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string().trim().min(1),
    description: z.string().trim().min(1),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string().trim().min(1)).default([]),
    draft: z.boolean().default(false),
    image: image().optional(),
    imageAlt: z.string().trim().min(1).optional(),
  }).refine((data) => !data.image || !!data.imageAlt, {
    message: 'Cover images require descriptive imageAlt text.',
    path: ['imageAlt'],
  }).refine((data) => !data.updatedAt || data.updatedAt >= data.publishedAt, {
    message: 'updatedAt must be on or after publishedAt.',
    path: ['updatedAt'],
  }),
});

export const collections = { blog };
