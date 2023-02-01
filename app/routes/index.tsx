import type { HeadersFunction } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";

export const headers: HeadersFunction = () => {
  // csp that allows iframes from localhost at any port
  return {
    "Content-Security-Policy": "frame-ancestors 'self' http://localhost:3000",
  };
};

export default function Index() {
  const [searchParams] = useSearchParams();
  const url = searchParams.get("url");
  if (!url) {
    return <p>No URL Provided</p>;
  }
  return (
    <iframe
      src={url}
      title="localhost:3000"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        width: "100%",
        height: "100%",
        border: "none",
        margin: "0",
        padding: "0",
        overflow: "hidden",
        zIndex: "999999",
      }}
    />
  );
}
