import type { DataFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

function getDomainUrl(request: Request) {
  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}

export async function loader({ request }: DataFunctionArgs) {
  return json({ domainUrl: getDomainUrl(request) });
}

export default function Test() {
  const data = useLoaderData<typeof loader>();
  return (
    <iframe
      src={`${data.domainUrl}/go?url=http%3A%2F%2Flocalhost%3A3000%2Fexercise%2F1`}
      title="The embedded page"
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
