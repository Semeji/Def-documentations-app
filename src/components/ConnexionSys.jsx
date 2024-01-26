import React from "react";

const NavBar = () => {
  const capture = "ma capture";
  return (
    <section className="Section-paragraph">
      <h2 id="Connexion au système">Connexion au système</h2>
      <div className="Content">

      <p>
        Après l’enregistrement dans le DEF, le nom d’utilisateur et le mot de
        passe par défaut reçus via le mail doivent être renseignés
        respectivement dans les champs cidessous pour se connecter
      </p>

        <img src={capture} alt="Capture" width="50" height="100" />
      </div>
    </section>
  );
};

export default NavBar;
