import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App1";
import Surprise from "./Surprise1";

const router = createBrowserRouter([
  {
    path: "/HappyBirthdayMind)",
    element: <App />,
  },
  {
    path: "/surprise",
    element: <Surprise />,
  },
]);

export default router;
