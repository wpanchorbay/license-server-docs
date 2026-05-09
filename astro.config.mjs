// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import { BASE_PATH, REPO_URL, SITE_ORIGIN, LOGO_SVG_PATH } from './site-config.mjs';

const srcDir = fileURLToPath(new URL('./src', import.meta.url));
const customIconPath = fileURLToPath(new URL('./src/components/starlight/Icon.astro', import.meta.url));

// https://astro.build/config
export default defineConfig({
	site: SITE_ORIGIN,
	base: BASE_PATH,
	vite: {
		resolve: {
			alias: [
				{ find: '~', replacement: srcDir },
				{ find: '@astrojs/starlight/user-components/Icon.astro', replacement: customIconPath },
				{ find: '../user-components/Icon.astro', replacement: customIconPath },
			],
		},
	},
	integrations: [
		sitemap(),
		starlight({
			title: 'License Server for WooCommerce',
			description:
				'Documentation for operating License Server and integrating client plugins with its licensing and update APIs.',
			customCss: ['./src/styles/home.css'],
			logo: {
				src: LOGO_SVG_PATH,
				replacesTitle: false,
			},
			components: {
				SiteTitle: './src/components/SiteTitle.astro',
				ThemeProvider: './src/components/ThemeProvider.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
				LanguageSelect: './src/components/starlight/LanguageSelect.astro',
				SocialIcons: './src/components/starlight/SocialIcons.astro',
			},
			head: [
				{ tag: 'link', attrs: { rel: 'icon', href: `${BASE_PATH}/assets/favicon.ico` } },
				{ tag: 'link', attrs: { rel: 'icon', sizes: '16x16', href: `${BASE_PATH}/assets/favicon-16x16.png` } },
				{ tag: 'link', attrs: { rel: 'icon', sizes: '32x32', href: `${BASE_PATH}/assets/favicon-32x32.png` } },
				{ tag: 'link', attrs: { rel: 'apple-touch-icon', href: `${BASE_PATH}/assets/apple-touch-icon.png` } },
			],
			social: [{ icon: 'github', label: 'GitHub', href: REPO_URL }],
			sidebar: [
				{
					label: 'Overview',
					items: [{ label: 'Welcome', slug: '' }],
				},
				{
					label: 'Getting Started',
					items: [
						{ label: 'Requirements', slug: 'getting-started/requirements' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Initial Setup', slug: 'getting-started/initial-setup' },
					],
				},
				{
					label: 'Operate License Server',
					items: [
						{ label: 'Software Releases', slug: 'operate/software-releases' },
						{ label: 'License Management', slug: 'operate/license-management' },
						{ label: 'Customer Experience', slug: 'operate/customer-experience' },
						{ label: 'Troubleshooting', slug: 'operate/troubleshooting' },
					],
				},
				{
					label: 'Integrate Your Plugin',
					items: [
						{ label: 'Integration Overview', slug: 'integrations/overview' },
						{ label: 'WordPress Plugin Example', slug: 'integrations/wordpress-plugin' },
					],
				},
				{
					label: 'REST API',
					items: [
						// Note: This slug automatically maps to public-endpoints.mdx
						{ label: 'Public Endpoints', slug: 'api/public-endpoints' },
						{ label: 'Admin Endpoints', slug: 'api/admin-endpoints' },
					],
				},
				{
					label: 'Developer Reference',
					items: [
						{ label: 'Data Model', slug: 'developer/data-model' },
						{ label: 'Hooks And Lifecycle', slug: 'developer/hooks-and-lifecycle' },
						{ label: 'Architecture', slug: 'developer/architecture' },
					],
				},
				{
					label: 'Agents and MCP',
					items: [
						{ label: 'Agent Guide', slug: 'agents' },
						{ label: 'Install And Operate', slug: 'agents/install-operate' },
						{ label: 'Integrate Plugins', slug: 'agents/integrate-plugins' },
						{ label: 'Agent REST Reference', slug: 'agents/rest-api' },
						{ label: 'Agent Troubleshooting', slug: 'agents/troubleshooting' },
						{ label: 'MCP Server', slug: 'agents/mcp-server' },
					],
				},
			],
		}),
	],
});