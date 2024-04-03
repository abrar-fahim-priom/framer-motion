import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Keyframe from "./Keyframe.jsx";
import Phone from "./Phone.jsx";
import Root from "./Root.jsx";
import TextMotion from "./TextMotion.jsx";
import TransitionType from "./TransitionType.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/textmotion",
        element: <TextMotion />,
      },
      {
        path: "/transitiontype",
        element: <TransitionType />,
      },
      {
        path: "/app",
        element: <App />,
      },
      {
        path: "/phone",
        element: <Phone />,
      },
    ],
  },
  {
    path: "/keyframe",
    element: <Keyframe />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
