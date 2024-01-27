import React from "react";
import CreateCount from "../images/createCount.png";
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

const NavBar = () => {
  const capture = "ma capture";
  return (
    <section className="Section-paragraph">
      <div className="Paragraph-Content">
        <h2 id="Procédures">Procédures à suivre</h2>

        <div className="Content">
          <h2 id="Création de l’espace de travail">
            Création de l’espace de travail
          </h2>
          <img src={CreateCount} alt="Capture" width="500" height="500" />
        </div>

        <div className="Content">
          <h2 id="Choix de la catégorie de l’assujetti">
            Choix de la catégorie de l’assujetti
          </h2>
          <img src={CatAssujetti} alt="Capture" width="500" height="500" />
        </div>

        <div className="Section-paragraph">
          <h2 id="Personne physique">Personne physique</h2>
          <p>
            Apres le choix de la catégorie de l’assujetti, si cette dernière est
            une personne physique (commerçante ou non commerçante) ; il est
            important de préciser que la procédure est la même.
          </p>
          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Etape 1 : enregistrement de coordonnées
            </h3>
            <img src={StorageData} alt="Capture" width="500" height="500" />
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Etape 2: choix de la nationalité
            </h3>
            <img
              src={SelectNationnality}
              alt="Capture"
              width="500"
              height="500"
            />
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Assujetti de droit congolais
            </h3>
            <img
              src={AssujettiCongolais}
              alt="Capture"
              width="500"
              height="500"
            />
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Assujetti de droit Etranger
            </h3>
            <img
              src={AssujettiEtranger}
              alt="Capture"
              width="500"
              height="500"
            />
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Etape 3 : Déclinaison de l'identité de la personne
            </h3>
            <img
              src={IdentitéPersonnelle}
              alt="Capture"
              width="500"
              height="500"
            />
          </div>
          <p>
            N.B : Après avoir soumis le formulaire, le système génère de manière
            automatique le nom d’utilisateur et le mot de passe par défaut après
            l’enregistrement via l’adresse mail renseignée à l’étape 1.
          </p>
        </div>

        <div className="Section-paragraph">
          <h2 id="Personne physique">Personne morale</h2>
          <p>
            Apres le choix de la catégorie de l’assujetti, si cette dernière est
            une personne morale (commerçante ou non commerçante) ; il est
            important de préciser que la procédure est la même à la première,
            deuxième et quatrième étape.
          </p>
          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Etape 1 : enregistrement de coordonnées
            </h3>
            <img src={StorageData} alt="Capture" width="500" height="500" />
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Etape 2: choix de la nationalité
            </h3>
            <img
              src={SelectNationnality}
              alt="Capture"
              width="500"
              height="500"
            />
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Assujetti de droit congolais
            </h3>
            <img
              src={AssujettiCongolais}
              alt="Capture"
              width="500"
              height="500"
            />
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Assujetti de droit Etranger
            </h3>
            <img
              src={AssujettiEtranger}
              alt="Capture"
              width="500"
              height="500"
            />
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Etape 3 : Déclinaison de l'identité de la personne
            </h3>
            <div className="Content-image">
              <img src={PMC} alt="Capture" width="500" height="500" />
              <img src={PMNC} alt="Capture" width="500" height="500" />
            </div>
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Etape 4 : déclinaison de l’identité
            </h3>
            <div className="Content-image">
              <img
                src={DenominationEts}
                alt="Capture"
                width="500"
                height="500"
              />
              <img src={StatutNotarie} alt="Capture" width="500" height="500" />
            </div>
          </div>
          <p>
            N.B : Après avoir soumis le formulaire, le système génère de manière
            automatique le nom d’utilisateur et le mot de passe par défaut après
            l’enregistrement via l’adresse mail renseignée à l’étape 1.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
