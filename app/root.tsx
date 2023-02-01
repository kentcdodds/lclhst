import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html: /* javascript */ `
if ('serviceWorker' in navigator) {
  async function init() {
    await navigator.serviceWorker.register('/sw.js', {
      type: 'module'
    })
    await navigator.serviceWorker.ready
    console.log('Service Worker is ready!')
  }

  init()
}
        `,
          }}
        ></script>
      </body>
    </html>
  );
}
