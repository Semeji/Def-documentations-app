import React from "react";
import Authentification from "./pages/Authentification.jsx";
import Comptabilité from "./pages/Comptabilité.jsx";
import Administrateur from "./pages/Administrateur.jsx";
import Fiscalité from "./pages/Fiscalité.jsx";
import Personnel from "./pages/Personnel.jsx";
import Stock from "./pages/Stock.jsx";
import Layout from "./components/Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import("./styles/App.css");
import("./styles/index.css");



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/authentification",
        element: <Authentification />,
      },
      {
        path: "/administrateur",
        element: <Administrateur />,
      },
      {
        path: "/comptabilité",
        element: <Comptabilité />,
      },
      {
        path: "/fiscalité",
        element: <Fiscalité />,
      },
      {
        path: "/personnel",
        element: <Personnel />,
      },
      {
        path: "/stock",
        element: <Stock />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
