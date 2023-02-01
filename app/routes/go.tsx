import type { DataFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

export async function loader({ request }: DataFunctionArgs) {
  const destination = new URL(request.url).searchParams.get("url");
  if (!destination) return redirect("/");
  return redirect(destination);
}
