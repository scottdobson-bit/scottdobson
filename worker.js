export default {
  async fetch(request, env) {
    try {
      const url = new URL(request.url);
      
      // Attempt to fetch the static asset from the ASSETS binding
      const response = await env.ASSETS.fetch(request);

      // SPA Fallback: If the asset is not found (404) and the path doesn't look like a file (no dot),
      // serve the index.html to let the client-side router handle it.
      if (response.status === 404 && !url.pathname.includes('.')) {
        return await env.ASSETS.fetch(new URL('/index.html', request.url));
      }

      return response;
    } catch (e) {
      // Fallback for internal errors
      return new Response(`Internal Error: ${e.message}`, { status: 500 });
    }
  },
};