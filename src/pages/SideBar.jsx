import React from "react";
import { Link, NavLink } from "react-router-dom";
import searchIcon from "../images/SearchIcon.png";
import logo from "../images/logo.svg";
import lOGODGI from "../images/LogoDGI.svg";
import { useState } from "react";

function SideBar() {
  const [isClicked, setIsClicked] = useState(false);
  const handleMenuClick = () => {
    setIsClicked(!isClicked);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const setDarkmode = () => {
    document.queryselector("body").setAttribute("data-theme", "dark-mode");
  };
  const setmode = () => {
    document.queryselector("body").setAttribute("data-theme", "light-mode");
  };
  const toogleTheme = (e) => {
    if (e.target.checked) {
      setDarkmode();
    } else {
      setLightmode();
    }
  };

  // Sélectionnez l'élément avec l'ID spécifié
  // const sections = document.querySelectorAll("section");
  // const navLink = document.querySelector("#préambule");
  // console.log("tttttttttttt", navLink);
  // const links = document.querySelectorAll('NavLink');
  // console.log("moi et toi", links);
  // Ajoutez un écouteur d'événement pour détecter le scroll de la page
  // const handleScroll = document.addEventListener("scroll", () => {
  // Récupérez la position de l'élément par rapport au haut de la page
  // const position = sections
  //   .getBoundingClientRect()
  //   .getAttribute("section");
  // getBoundingClientRect();
  // Vérifiez si l'élément est à l'endroit souhaité
  // sections.forEach((section) => {
  //   if (position) {
  // Ajoutez une classe CSS pour changer la couleur du navLink
  //   oneLink.classList.add("text-red-700");
  // } else {
  // Supprimez la classe CSS pour rétablir la couleur par défaut du navLink
  //       navLink.classList.remove("text-blue-600");
  //     }
  //   });
  // });
  const handleLinkClick = (section) => {
    const element = document.getElementById(section);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`flex align-center flex-col text-black border-r-2 border-neutral-300  w-[25%] h-full w-[270px] h-[57px] px-8 py-8 font-mono fixed  top-0 left-0 gap-50 bg-white sideBar-link ${
        isClicked ? "sideBar-link" : "hide-Bar"
      }`}
    >
      <div className="sideBar-header  ">
        <div className="flex justify-between flex-row gap-[10px] px-1">
          <a className="flex px-3 items-center min-h-[76px] " href="#">
            <img src={logo} alt="DGI LOGO" className="w-[200px] h-[57px] " />
          </a>

          <div className="dark-mode">
            {/* <input 
            className="Dark-mode-input" type='checkbox' id='darkmode-toggle' onChange={toogleTheme}/> */}
            <label className="Dark-mode-input" for="darkmode-toggle">
              <img
                src={
                  isDarkMode
                    ? "https://img.icons8.com/ios-filled/50/ffffff/sun"
                    : "https://img.icons8.com/ios-filled/50/ffffff/moon"
                }
                alt="sun-moon-mode"
              />
              <input
                className="Dark-mode-input"
                type="checkbox"
                id="darkmode-toggle"
                onChange={toogleTheme}
              />
            </label>
          </div>
        </div>
        <div className="sideBarBtn-search flex flex-row gap-2 order-r-2 border-neutral-300 rounded-full">
          <img src={searchIcon} alt="Seach Icon  " />
          <input type="text" placeholder="Search pages" />
        </div>
      </div>

      <ul className="sideBar-link  nav-limks py-8 ">
        <a className="logo hidden" href="#">
          <img src={lOGODGI} alt="DGI LOGO" />
        </a>

        <li>
          <NavLink to="/authentification">
            <div className="nav-limk ">
              <p
                onClick={handleMenuClick}
                id="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 "
                className="clicked text-color-[#5469D4] hover:bg-[#5469D4] hover:opacity-50  font-BlinkMacSystemFont rounded-[5%]"
              >
                Authentification
              </p>
              {isClicked && (
                <ul className="text-stone-500">
                  <li>
                    <NavLink
                      to="/authentification"
                      onClick={() => handleLinkClick("préambule")}
                      id="préambule"
                      className="link"
                    >
                      Préambule
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/authentification"
                      onClick={() => handleLinkClick("Accès-système")}
                    >
                      Accès au système
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/authentification"
                      onClick={() => handleLinkClick("Création-de-compte")}
                    >
                      Création de compte
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/authentification"
                      onClick={() => {
                        handleLinkClick("procédures");
                        {
                          handleMenuClick;
                        }
                      }}
                    >
                      Procédures à suivre
                    </NavLink>
                  </li>
                  {isClicked && (
                    <ul>
                      <li>
                        <NavLink
                          to="/authentification"
                          onClick={() =>
                            handleLinkClick("Création-espace-travail")
                          }
                        >
                          Création de l'espace de travail
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/authentification"
                          onClick={() =>
                            handleLinkClick("Choix-catégorie-assujetti")
                          }
                        >
                          Choix de catégorie de l’assujetti
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/authentification"
                          onClick={() => handleLinkClick("Personne-physique")}
                        >
                          Personne physique
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/authentification"
                          onClick={() => handleLinkClick("Personne-morale")}
                        >
                          Personne morale
                        </NavLink>
                      </li>
                    </ul>
                  )}

                  <li>
                    <NavLink
                      to="/authentification"
                      onClick={() => handleLinkClick("connexion")}
                      className="link"
                    >
                      Connexion au système
                    </NavLink>
                  </li>
                </ul>
              )}
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
