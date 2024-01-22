import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  
  return (
    <div className="sideBar-container">
      <a href="#">
        {/* <img src={} alt="DGI LOGO" /> */}
      </a>
      <ul className="page-title nav-limk">
        <li>
          <NavLink to="/authentification">
            <div className="nav-limk">
              <h2>Authentification</h2>
              <ul>
                <li>
                  <a href="#Préambule">Préambule</a>
                </li>
                <li>
                  <a href="#Accès au système">Accès au système</a>
                </li>
                <li>
                  <a href="#Création d’un compte">Création d’un compte</a>
                </li>
                <li>
                  <a href="#Procédures à suivre ">Procédures à suivre</a>
                </li>
                <li>
                  <a href="#Création de l’espace de travail">Création de l’espace de travail</a>
                </li>
                <li>
                  <a href="#Choix de la catégorie de l’assujetti">Choix de la catégorie de l’assujetti</a>
                </li>
                <li>
                  <a href="#Personne physique">Personne physique</a>
                </li>
                <li>
                  <a href="#Personne morale">Personne morale</a>
                </li>
                <li>
                  <a href="#Connexion au système">Connexion au système</a>
                </li>
              </ul>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/administrateur">
            <h2>Administrateur</h2>
          </NavLink>
        </li>

        <li>
          <NavLink to="/comptabilité">
            <h2>Comptabilité</h2>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Fiscalité">
            <h2>Fiscalité</h2>
          </NavLink>
        </li>

        <li>
          <NavLink to="/personnel">
            <h2>Personnel</h2>
          </NavLink>
        </li>

        <li>
          <NavLink to="/stock">
            <h2>Stock</h2>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;
