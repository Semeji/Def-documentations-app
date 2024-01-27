import React from "react";
import Préambule from "../components/Préambule.jsx";
import AccèsSys from "../components/AccèsSys.jsx";
import ConnexionSys from "../components/ConnexionSys.jsx";
import CréationCpt from "../components/CréationCpt.jsx";
import Procédures from "../components/Procédures.jsx";

const Authentification = () => {
  const capture = "ma capture";
  return (
    <>
      <div className="Authentification">
        <Préambule />
        <AccèsSys />
        <CréationCpt />
        <Procédures/>
        <ConnexionSys id='Connexion' />
      </div>
    </>
  );
};

export default Authentification;
