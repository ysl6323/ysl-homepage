import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    highlight: z.string().default('Shanglin Yuan'),
    venue: z.string(),
    year: z.number(),
    arxiv: z.string().optional(),
    code: z.string().optional(),
    project: z.string().optional(),
    hf: z.string().optional(),
    tags: z.array(z.string()).default([]),
    teaser: z.string().optional(),
    order: z.number().default(0),
    abstract: z.string(),
    bibtex: z.string().default(''),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['notes', 'radar', 'life']),
    summary: z.string().default(''),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { papers, notes };
