import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event) => {
	event.respondWith(handleRequest(event));
});

const YEAR = 31536000;
const WEEK = 604800;

function cacheControl(request) {
	const { pathname } = new URL(request.url);

	if (/-[\w-]{8}\.(js|css)$/.test(pathname)) return { browserTTL: YEAR };
	if (pathname.startsWith('/assets/fonts/')) return { browserTTL: YEAR };
	if (pathname.startsWith('/assets/')) return { browserTTL: WEEK };
	return {};
}

async function handleRequest(event) {
	const url = new URL(event.request.url);

	try {
		return await getAssetFromKV(event, { cacheControl });
	} catch (_e) {
		try {
			const notFound = await getAssetFromKV(event, {
				mapRequestToAsset: () =>
					new Request(`${url.origin}/404.html`, event.request),
			});

			return new Response(notFound.body, {
				status: 404,
				headers: notFound.headers,
			});
		} catch (_e) {
			return new Response('Not Found', { status: 404 });
		}
	}
}
