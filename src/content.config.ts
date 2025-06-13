// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const recipes = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
	schema: z.object({
		title: z.string(),
		cuisine: z.string(),
		servings: z.number().int().min(1),
	}),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { recipes };
