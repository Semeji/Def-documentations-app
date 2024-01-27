import React from "react";
import { Link, NavLink } from "react-router-dom";
import searchIcon from "../images/SearchIcon.png";
import logo from"../images/logo.svg";
import  { useState } from 'react';


function SideBar() {
  const [isClicked, setIsClicked] = useState(false);
  const handleMenuClick = () => {
    setIsClicked(!isClicked);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  // const handleLinkClick = () => {
  //   const element = document.getElementById('Connexion');
  //   element.scrollIntoView({ behavior: 'smooth' });
  // };
  return (
    <div className="sideBar-container">

      <div className="sideBar-header">    
      <a href="#">
        <img src={logo} alt="DGI LOGO" />
      </a>
        <button className="Dark-mode" onClick={toggleDarkMode}>
          changer de mode </button>
        <div className="sideBarBtn-search">
        <img src={searchIcon} alt="Seach Icon  " />
        <input type='text' placeholder='Search pages' />
      </div>
        </div>

      <ul className="page-title nav-limk">
        <li>
          <NavLink to="/authentification">
            <div className="nav-limk">
              <p onClick={handleMenuClick}>Authentification</p>
              {isClicked && (<ul>
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
                  <NavLink  to="/authentification/Connexion" >
                    Connexion au système
                  </NavLink>
                </li>
                
              </ul>)}
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
