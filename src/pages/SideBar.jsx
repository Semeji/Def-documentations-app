import React from "react";
import { NavLink } from "react-router-dom";
import searchIcon from "../images/SearchIcon.png";
import logoDGI from"../images/logoDGI.svg";


function SideBar() {
  return (
    <div className="sideBar-container">

      <div className="sideBar-header">    
      <a href="#">
        <img src={logoDGI} alt="DGI LOGO" />
      </a>
        <div className="sideBarBtn-search">
        <img src={searchIcon} alt="Tweet Repost" />
        <input type='text' placeholder='Search pages' />
      </div>
        </div>

      <ul className="page-title nav-limk">
        <li>
          <NavLink to="/authentification" onclick={
          ()=> {style={color:"red"}}
                      }>
            <div className="nav-limk">
              <p>Authentification</p>
              <ul>
                <li>
                  <NavLink to="/authentification/Préambule"> Préambule</NavLink>
                  
                </li>
                <li>
                  <NavLink to="/authentification/Accès">
                    Accès au système
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/authentification/Création">
                    Création d’un compte
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/authentification/Procédures">
                    Procédures à suivre
                  </NavLink>
                </li>
                {/* <li> */}
                  {/* <NavLink to="/Création de l’espace de travail">
                    Création de l’espace de travail
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Choix de la catégorie de l’assujetti">
                    Choix de la catégorie de l’assujetti
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Personne physique">Personne physique</NavLink>
                </li>
                <li>
                  <NavLink to="/Personne morale">Personne morale</NavLink>
                </li> */}
                <li>
                  <NavLink to="/authentification/Connexion">
                    Connexion au système
                  </NavLink>
                </li>
              </ul>
            </div>
          </NavLink>
        </li>

        <li>
          <NavLink to="/administrateur">
            <p>Administrateur</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/comptabilité">
            <p>Comptabilité</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/Fiscalité">
            <p>Fiscalité</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/personnel">
            <p>Personnel</p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/stock">
            <p>Stock</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default SideBar;
