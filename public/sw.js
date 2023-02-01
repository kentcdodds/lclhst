console.log("Service Worker Loaded...");
self.addEventListener("fetch", async (e) => {
  console.log(e);
  return event.respondWith(
    new Response(null, {
      status: 301,
      headers: {
        // Construct a regular redirect response.
        Location: `http://localhost:3000/exercise/1`,
      },
    })
  );
  // e.respondWith(); //whatever you want
});
