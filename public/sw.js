console.log("Service Worker Loaded...");
self.addEventListener("fetch", async (e) => {
  console.log(e);
  const res = await fetch("http://localhost:3000");
  console.log(res);
  // e.respondWith(); //whatever you want
});
