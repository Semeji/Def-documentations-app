import React from "react";

const NavBar = () => {
  const capture = "ma capture";
  return (
    <section className="Section-paragraph">
      <div className="Paragraph-Content">
        <h2 id="Procédures" >Procédures à suivre</h2>

        <div className="Content">
          <h2 id="Création de l’espace de travail">
            Création de l’espace de travail
          </h2>
          <img src={capture} alt="Capture" width="50" height="100" />
        </div>

        <div className="Content">
          <h2 id="Choix de la catégorie de l’assujetti">
            Choix de la catégorie de l’assujetti
          </h2>
          <img src={capture} alt="Capture" width="50" height="100" />
        </div>

        <div className="Section-paragraph">
          <h2 id="Personne physique">Personne physique</h2>
          <p>
            Apres le choix de la catégorie de l’assujetti, si cette dernière
            est une personne physique (commerçante ou non commerçante) ; il
            est important de préciser que la procédure est la même.
          </p>
          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Etape 1 : enregistrement de coordonnées
            </h3>
            <img src={capture} alt="Capture" width="50" height="100" />
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Etape 2: choix de la nationalité
            </h3>
            <img src={capture} alt="Capture" width="50" height="100" />
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Assujetti de droit congolais
            </h3>
            <img src={capture} alt="Capture" width="50" height="100" />
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Etape 3 : Déclinaison de l'identité de la personne
            </h3>
            <img src={capture} alt="Capture" width="50" height="100" />
          </div>
          <p>
            N.B : Après avoir soumis le formulaire, le système génère de
            manière automatique le nom d’utilisateur et le mot de passe par
            défaut après l’enregistrement via l’adresse mail renseignée à
            l’étape 1.
          </p>
        </div>

        <div className="Section-paragraph">
          <h2 id="Personne physique">Personne morale</h2>
          <p>
            Apres le choix de la catégorie de l’assujetti, si cette dernière
            est une personne morale (commerçante ou non commerçante) ; il est
            important de préciser que la procédure est la même à la première,
            deuxième et quatrième étape.
          </p>
          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Etape 1 : enregistrement de coordonnées
            </h3>
            <img src={capture} alt="Capture" width="50" height="100" />
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Etape 2: choix de la nationalité
            </h3>
            <img src={capture} alt="Capture" width="50" height="100" />
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Assujetti de droit congolais
            </h3>
            <img src={capture} alt="Capture" width="50" height="100" />
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Etape 3 : Déclinaison de l'identité de la personne
            </h3>
           < div  className="Content-image">
            <img src={capture} alt="Capture" width="50" height="100" />
            <img src={capture} alt="Capture" width="50" height="100" />
          </div>          
          </div>

          <div className="Content">
            <h3 id="Choix de la catégorie de l’assujetti">
              Etape 4 : déclinaison de l’identité
            </h3>
            < div  className="Content-image">
              <img src={capture} alt="Capture" width="50" height="100" />
              <img src={capture} alt="Capture" width="50" height="100" />
            </div>  
          </div>
          <p>
            N.B : Après avoir soumis le formulaire, le système génère de
            manière automatique le nom d’utilisateur et le mot de passe par
            défaut après l’enregistrement via l’adresse mail renseignée à
            l’étape 1.
          </p>
        </div>
      </div>
    </section>

  );
};

export default NavBar;
