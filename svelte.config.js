import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// Customize options here
			pages: 'public/static/pages', // Change to a different directory for pages
			assets: 'public/static/assets', 
			fallback: '200.html' // may differ from host to host
		}),
		alias: {
			// Key: Alias name, Value: Path to the file
			'$api': './src/api',
		  },
		  
	}
};

export default config;
