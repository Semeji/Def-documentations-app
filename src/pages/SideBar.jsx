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

   
    const handleSidebarMenu= ()=>{const SidebarMenu = document.getElementById(
        "SidebarMenu");
    if (window.scrollY > 0) {
          SidebarMenu.classList.add('scrolled');
    } else {
          SidebarMenu.classList.remove('scrolled');
    }
  };

  const handleLinkClick = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: 'smooth' });
    
  };
  return (
    <div className="sideBar-container">

      <div className="sideBar-header">    
      <a href="#">
        <img src={logo} alt="DGI LOGO" />
      </a>
        <button className="Dark-mode-button" onClick={toggleDarkMode}>
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
              <p onClick={handleMenuClick} id='sidebar-menu' >Authentification</p>
              {isClicked && (<ul>
                <li> 
                 <NavLink to= "/authentification"
                onClick={() => handleLinkClick('préambule')}>Préambule
                 </NavLink>
                  </li>
                <li>
                  
                  <NavLink to= "/authentification"
                    onClick={() => handleLinkClick('Accès-système')}>Accès au système
                     </NavLink>
                </li>
                <li>
                  <NavLink to= "/authentification"
                    onClick={() => handleLinkClick('Création-de-compte')}>Création de compte
                     </NavLink>
              
                </li>
                <li>
                  <NavLink to= "/authentification"
                    onClick={() => {handleLinkClick('procédures'); ()=> handleMenuClick()} }>Procédures à suivre
                     </NavLink>
                </li>
                {isClicked && ( <ul> 
      <li>
        <NavLink to= "/authentification"
          onClick={() => handleLinkClick('Création-espace-travail')}>Création de l'espace de travail
           </NavLink>
                </li>
                <li>
                  <NavLink to= "/authentification"
                    onClick={() => handleLinkClick('Choix-catégorie-assujetti')}>Choix de catégorie de l’assujetti
                     </NavLink>
                </li>
                  
              
                <li>
                  <NavLink to= "/authentification"
                    onClick={() => handleLinkClick('Personne-physique')}>Personne physique
                     </NavLink>
                  </li>

                  <li>
                  <NavLink to= "/authentification"
                    onClick={() => handleLinkClick('Personne-morale')}>Personne morale
                     </NavLink>
                  </li>

                  </ul>)}
                  
                <li>
                  
                  <NavLink to= "/authentification"
  onClick={() => handleLinkClick('connexion')}>
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
