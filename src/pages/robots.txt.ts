import type { APIRoute } from 'astro';
import { buildAbsoluteUrl } from '../../site-config.mjs';

export const prerender = true;

export const GET: APIRoute = () => {
	const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${buildAbsoluteUrl('/sitemap-index.xml')}`].join(
		'\n',
	);

	return new Response(`${body}\n`, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
		},
	});
};
