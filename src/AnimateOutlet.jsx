import { useState } from "react";
import { useOutlet } from "react-router-dom";

export default function AnimateOutlet() {
  const out = useOutlet();
  const outlet = useState(out);
  return <>{outlet}</>;
}
