export const SITE_ORIGIN =
	process.env.SITE_ORIGIN || process.env.PUBLIC_SITE_ORIGIN || 'https://wpanchorbay.github.io';

export const BASE_PATH = '/license-server';

export const REPO_URL =
	process.env.DOCS_REPO_URL || 'https://github.com/wpanchorbay/license-server-for-woocommerce';

export function buildAbsoluteUrl(pathname = '/') {
	const normalizedPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
	return new URL(`${BASE_PATH}${normalizedPath}`, SITE_ORIGIN).toString();
}
