import type { APIRoute } from 'astro';
import { buildAbsoluteUrl } from '../../../site-config.mjs';

export const prerender = true;

export const GET: APIRoute = () => {
	return new Response(
		JSON.stringify(
			{
				name: 'License Server Docs MCP',
				description:
					'Read-only MCP server for License Server documentation, agent guide, API reference, and troubleshooting guidance.',
				documentation: buildAbsoluteUrl('/agents/mcp-server/'),
				static_docs: {
					llms: buildAbsoluteUrl('/llms.txt'),
					llms_full: buildAbsoluteUrl('/llms-full.txt'),
					sitemap: buildAbsoluteUrl('/sitemap-index.xml'),
				},
				transports: {
					stdio: {
						command: 'bun run mcp',
					},
					http: {
						path: '/mcp',
						note: 'Deploy this endpoint to a dynamic host. GitHub Pages is static and cannot run the MCP server.',
					},
				},
			},
			null,
			2,
		),
		{
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
		},
	);
};
