import React from "react";
import CreateCount from "../images/CreateCount.png";
import CatAssujetti from "../images/CatAssujetti.png";
import StorageData from "../images/StorageData.png";
import SelectNationnality from "../images/SelectNationnality.png";
import AssujettiCongolais from "../images/AssujettiCongolais.png";
import AssujettiEtranger from "../images/AssujettiEtranger.png";
import IdentitéPersonnelle from "../images/IdentitéPersonnelle.png";
import PMC from "../images/PMC.png";
import PMNC from "../images/PMNC.png";
import DenominationEts from "../images/DenominationEts.png";
import StatutNotarie from "../images/StatutNotarie.png";
import Connexion from "../images/Connexion.png";

const Screens = () => {
  return (
    <div className="position right-0">
      <h1>Screens</h1>
      <section id="sectionImage">
        <img
          src={CreateCount}
          alt="Capture"
          className="w-[30%] h-[30%]  "
          id="hidden"
        />
        <img src={CatAssujetti} alt="Capture" className="w-[30%] h-[30%]  " />
        <img
          src={AssujettiEtranger}
          alt="Capture"
          className="w-[30%] h-[20%] "
        />
        <img
          src={IdentitéPersonnelle}
          alt="Capture"
          className="w-[30%] h-[20%] "
        />
        <img src={StorageData} alt="Capture" className="w-[30%] h-[20%] " />
        <img
          src={SelectNationnality}
          alt="Capture"
          className="w-[30%] h-[20%] "
        />
        <img
          src={AssujettiCongolais}
          alt="Capture"
          className="w-[30%] h-[20%] "
        />
        <img
          src={AssujettiEtranger}
          alt="Capture"
          className="w-[30%] h-[20%] "
        />
        <img src={PMC} alt="Capture" className="w-[40%] h-[50%] " />
        <img
          src={PMNC}
          alt="Capture"
          className="w-[40%] h-[50%] "
        />

        <img
          src={Connexion}
          alt="Capture"  
          className="w-[30%] h-[20%] "
        />

        
      </section>
    </div>
  );
};

export default Screens;
