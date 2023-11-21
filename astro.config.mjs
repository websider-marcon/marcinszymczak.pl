import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify/functions';
import robotsTxt from 'astro-robots-txt';
import UnoCSS from '@unocss/astro';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	site: 'https://marcinszymczak.pl/',
	integrations: [
		sitemap(),
		robotsTxt({
			sitemap: [
				'https://marcinszymczak.pl/sitemap-index.xml',
				'https://marcinszymczak.pl/sitemap-0.xml',
			],
		}),
		solidJs(),
		UnoCSS({ injectReset: true }),
	],
	output: 'static',
});
