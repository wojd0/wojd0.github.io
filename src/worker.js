import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event));
});

async function handleRequest(event) {
  const url = new URL(event.request.url);

  try {
    return await getAssetFromKV(event, {
      mapRequestToAsset: (req) => {
        const parsedUrl = new URL(req.url);
        if (!parsedUrl.pathname.includes(".")) {
          return new Request(`${parsedUrl.origin}/index.html`, req);
        }
        return req;
      },
    });
  } catch (e) {
    try {
      return await getAssetFromKV(event, {
        mapRequestToAsset: () =>
          new Request(`${url.origin}/index.html`, event.request),
      });
    } catch (e) {
      return new Response("Not Found", { status: 404 });
    }
  }
}
