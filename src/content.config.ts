import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const testimonials = defineCollection({
  loader: glob({ base: './src/content/testimonials', pattern: '**/*.json' }),
  schema: z.object({
    order: z.number(),
    logo: z.string(),
    logoAlt: z.string(),
    quote: z.string(),
  }),
});

const cases = defineCollection({
  loader: glob({ base: './src/content/cases', pattern: '**/*.md' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    subtitle: z.string(),
    client: z.string(),
    logo: z.string(),
    logoUrl: z.string().url().optional(),
    image: z.string(),
    images: z.array(z.string()).optional(),
    imageLayouts: z.array(z.enum(['narrow', 'wide'])).optional(),
    imageAlt: z.string().optional(),
  }),
});

const audiences = defineCollection({
  loader: glob({ base: './src/content/audiences', pattern: '**/*.json' }),
  schema: z.object({
    order: z.number(),
    emoji: z.string(),
    label: z.string(),
    description: z.string(),
  }),
});

const services = defineCollection({
  loader: glob({ base: './src/content/services', pattern: '**/*.json' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    color: z.string(),
    textColor: z.string().optional(),
    description: z.array(z.string()).optional(),
    details: z.array(z.string()).optional(),
    metrics: z.array(z.string()).optional(),
    whatYouGet: z.array(z.string()).optional(),
  }),
});

const team = defineCollection({
  loader: glob({ base: './src/content/team', pattern: '**/*.json' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    linkedin: z.string().url(),
    roles: z.array(z.string()),
    bio: z.string(),
    location: z.string(),
    photo: z.string().optional(),
  }),
});

export const collections = { testimonials, cases, audiences, services, team };
