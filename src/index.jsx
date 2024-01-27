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
        path: "/authentification",
        element: <h2 id="Préambule">Préambule</h2>,
      },
      {
        path: "/authentification",
        element: <h2 id="Accès-système">Accès au système</h2>,
      },
      {
        path: "/authentification",
        element: <h2 id="connexion">Connexion au système</h2>,
      },
      {
        path: "/authentification",
        element: <h2 id="Création-de-compte">Création de compte</h2>,
      },
      {
        path: "/authentification",
        element: <h2 id="procédures">Procédures à suivre</h2>,
      },

      {
        path: "/authentification",
        element: (
          <h2 id="Création-espace-travail">Création de l'espace de travail</h2>
        ),
      }, 
      {
        path: "/authentification",
        element: <h2 id="Choix-catégorie-assujetti">Choix de droit d'assujetti</h2>,
      },
     
      {
           path: "/authentification",
         element: <h2 id="Personne-physique">Personne physique</h2>


       },
      {
           path: "/authentification",
         element: <h2 id="Personne-morale">Personne morale</h2>


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
