import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://kjroelke.github.io',
	base: 'meal-plannr-prototype',
	build: {
		assets: 'dist',
	},
});
