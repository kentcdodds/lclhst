import { Form } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <Form method="get" action="/go">
        <input name="url" type="url" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
