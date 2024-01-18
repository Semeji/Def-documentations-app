import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className="sideBar-container">
      <a href="#">
        <img src={g} alt="DGI LOGO" />
      </a>
      <ul className="page-title nav-limk">
        <li>
          <NavLink to="/authentification">
            <div className="nav-limk">
              <h2>Authentification</h2>
              <ul>
                <li>
                  <a href="#Préambule"></a>
                </li>
                <li>
                  <a href="#Accès au système"></a>
                </li>
                <li>
                  <a href="#Création d’un compte"></a>
                </li>
                <li>
                  <a href="#Procédures à suivre "></a>
                </li>
                <li>
                  <a href="#Création de l’espace de travail"></a>
                </li>
                <li>
                  <a href="#Choix de la catégorie de l’assujetti"></a>
                </li>
                <li>
                  <a href="#Personne physique"></a>
                </li>
                <li>
                  <a href="#Personne morale"></a>
                </li>
                <li>
                  <a href="#Connexion au système"></a>
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
