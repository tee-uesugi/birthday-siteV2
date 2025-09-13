import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Surprise from './Surprise';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/surprise",
    element: <Surprise />,
  }
]);

export default router;
