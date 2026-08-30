import { defineCollection, z } from 'astro:content';

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    dek: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { writing };
