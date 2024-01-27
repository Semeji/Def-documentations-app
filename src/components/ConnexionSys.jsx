import React from "react";
import Connexion from "../images/Connexion.png";


const NavBar = () => {
  
  return (
    <section className="Section-paragraph">
      <h2 id="Connexion">Connexion au système</h2>
      <div className="Content">

      <p>
        Après l’enregistrement dans le DEF, le nom d’utilisateur et le mot de
        passe par défaut reçus via le mail doivent être renseignés
        respectivement dans les champs cidessous pour se connecter
      </p>

        <img src={Connexion} alt="Capture" width="500" height="500" />
      </div>
    </section>
  );
};

export default NavBar;
