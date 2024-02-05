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
  const handleScroll = () => {
    document.addEventListener("scroll", function () {
      const sectionParagraph = document.querySelector(".Procedures");
      const sectionImage = document.querySelector("#préambule");
      console.log("je t'aime", sectionImage);
      if (window.scrollY > sectionParagraph.offsetTop) {
        sectionImage.style.visibility = "visible";
      } else {
        sectionImage.style.visibility = "hidden";
      }
    });
    s;
  };

  return (
    <div className="position right-0">
      <h1>Screens</h1>
      <section className="sectionImage">
        <img
          src={CreateCount}
          alt="Capture"
          className="w-[30%] h-[30%]  "
          onScroll={handleScroll}
          id="Image-CreateCount"
        />
      </section>
    </div>
  );
};

export default Screens;
