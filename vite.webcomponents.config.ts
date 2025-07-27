import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true
			}
		})
	],
	css: {
		postcss: './postcss.config.js'
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/web-components/index.ts'),
			name: 'SvelteComponents',
			fileName: 'svelte-components',
			formats: ['es', 'umd']
		},
		rollupOptions: {
			external: [],
			output: {
				globals: {}
			}
		}
	}
});