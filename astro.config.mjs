// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// 1. 실제 호대님 도메인으로 수정 (가장 중요!)
	site: 'https://blog.daisuki.cloud',

	// 2. 경로 인식을 더 명확하게 하기 위해 trailingSlash 추가
	trailingSlash: 'always',

	integrations: [mdx(), sitemap()],
});