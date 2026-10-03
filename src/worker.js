import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', (event) => {
	event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
	const url = new URL(event.request.url);

	try {
		return await getAssetFromKV(event);
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
