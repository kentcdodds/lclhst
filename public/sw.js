self.addEventListener("install", function () {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  if (
    request.mode === "navigate" &&
    (request.destination === "iframe" || request.destination === "document")
  ) {
    console.log({ request });
    const url = new URL(request.url);

    // Having a predicate is a good idea so we don't end up
    // redirecting from everywhere on the site.
    if (url.pathname === "/go") {
      const destination = url.searchParams.get("url");
      return event.respondWith(
        new Response(null, {
          status: 301,
          headers: {
            // Construct a regular redirect response.
            Location: destination,
          },
        })
      );
    }
  }
});
