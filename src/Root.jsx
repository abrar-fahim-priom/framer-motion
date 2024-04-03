import { AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import AnimateOutlet from "./AnimateOutlet";

export default function Root() {
  const location = useLocation();
  return (
    <div>
      <ul className="flex top-0 sticky bg-gray-900 px-2 py-2 font-sans font-light text-white justify-around">
        <li>
          <NavLink to={"/textmotion"}>Text Motion</NavLink>
        </li>
        <li>
          <NavLink to={"/transitiontype"}>Transition Type</NavLink>
        </li>
        <li>
          <NavLink to={"/app"}>Drafts</NavLink>
        </li>
        <li>
          <NavLink to={"/keyframe"}>Keyframe in single page</NavLink>
        </li>
        <li>
          <NavLink to={"/phone"}>Phone</NavLink>
        </li>
      </ul>
      <div>
        <AnimatePresence mode="wait">
          <AnimateOutlet key={location.pathname} />
        </AnimatePresence>
      </div>
    </div>
  );
}
