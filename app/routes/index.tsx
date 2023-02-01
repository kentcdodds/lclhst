export default function Index() {
  return (
    <div>
      <form method="get" action="/go">
        <input name="url" type="url" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
