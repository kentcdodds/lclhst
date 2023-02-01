import { useEffect } from "react";

export default function Go() {
  useEffect(() => {
    // refresh the page
    window.location.reload();
  }, []);
  return <p>You should not see this for long...</p>;
}
