import { defineCollection, z } from 'astro:content';

const creative = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    dek: z.string(),
    draft: z.boolean().optional().default(false),
    wide: z.boolean().optional().default(false),
    noImageIndex: z.boolean().optional().default(false),
  }),
});

export const collections = { creative };
