// Serves /video/* with HTTP byte-range support.
// pages.dev ignores Range headers on static assets (custom domains handle it), and
// iPhone Safari will not play an <video> whose server can't answer a range request.
// Safe to delete once the site moves to a custom domain behind Cloudflare's cache.

function parseRange(header, size) {
  const m = /^bytes=(\d*)-(\d*)$/.exec(header.trim());
  if (!m) return null;
  let start, end;
  if (m[1] === "") {
    const suffix = Number(m[2]);
    if (!suffix) return null;
    start = Math.max(0, size - suffix);
    end = size - 1;
  } else {
    start = Number(m[1]);
    end = m[2] === "" ? size - 1 : Math.min(Number(m[2]), size - 1);
  }
  if (start > end || start >= size) return null;
  return { start, end };
}

async function serve(context, headOnly) {
  const { request, env } = context;
  const asset = await env.ASSETS.fetch(new Request(request.url, { method: "GET" }));
  if (asset.status !== 200) return asset;

  const headers = new Headers(asset.headers);
  headers.set("Accept-Ranges", "bytes");
  headers.set("Cache-Control", "public, max-age=86400");

  const rangeHeader = request.headers.get("Range");
  if (!rangeHeader) {
    return new Response(headOnly ? null : asset.body, { status: 200, headers });
  }

  const buf = await asset.arrayBuffer();
  const size = buf.byteLength;
  const range = parseRange(rangeHeader, size);
  if (!range) {
    headers.set("Content-Range", `bytes */${size}`);
    return new Response(null, { status: 416, headers });
  }
  const { start, end } = range;
  headers.set("Content-Range", `bytes ${start}-${end}/${size}`);
  headers.set("Content-Length", String(end - start + 1));
  return new Response(headOnly ? null : buf.slice(start, end + 1), { status: 206, headers });
}

export const onRequestGet = (context) => serve(context, false);
export const onRequestHead = (context) => serve(context, true);
