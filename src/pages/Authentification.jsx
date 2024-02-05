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

const Authentification = () => {
  const handleScroll = () => {
    document.addEventListener("scroll", function () {
      const navLink = document.querySelector(".link");
      const section = document.querySelector("#préambule");
      console.log("moi et toi", section);
      if (window.scrollY <= section.offsetTop) {
        navLink.classList.add("text-indigo-500"); // Ajoute la classe Tailwind CSS "bg-red-500"
      } else {
        navLink.classList.remove("text-indigo-500"); // Supprime la classe Tailwind CSS "bg-red-500"
      }
    });
  };

  const handleScrollScreens = () => {
    document.addEventListener("scroll", function () {
      const sectionParagraph = document.querySelector(".createCount");

      const sectionImage = document.querySelector("#sectionImage");
      console.log("je taime", sectionImage);
      if (window.scrollY > sectionParagraph.offsetTop) {
        sectionImage.style.visibility = "visible";
      } else {
        sectionImage.style.visibility = "hidden";
      }
    });
  };

  return (
    <>
      <div className="Authentification flex justify-between flex-col right-0 gap-5 px-5 h-screen w-[55%]">
        <section
          className="flex justify-between flex-col mx-5 border-b-2 border-neutral-300"
          id="préambule"
          onClick={handleScroll}
        >
          <div className="py-4">
            <h2 className="bold text-2xl text-indigo-400;" id="préambule">
              Préambule
            </h2>
            <p className="w-[70%]">
              En instituant,{" "}
              <strong>
                {" "}
                par l’article 35 de la loi de finances n° 17/005 du 23 juin
                2017, pour l’exercice 2017, un mécanisme électronique de capture
                automatique des transactions, et notamment d’émission
                automatisée de la facture commerciale (TVA),{" "}
              </strong>
              le droit fiscal congolais a introduit l’informatisation
              (numérisation) dans la gestion comptable et fiscale, par les
              assujettis, des données comptables (la facture notamment)
              conduisant aussi bien à la saisie et à la cristallisation des
              données comptables qu’au calcul exact des impôts, taxes,
              redevances et autres droits dus au Trésor public qui en résultent.
            </p>

            <p className="w-[70%]">
              Aussi la SBN-SBS, Centre congolais de Recherche en Informatique
              Appliquée, a mis au point une solution numérique comptable et
              fiscale, sous forme de plateforme numérique, laquelle
              dématérialise toutes les procédures comptables & fiscales, rendant
              intangibles les données y relatives, en vue de la collecte
              optimale des impôts, taxes, redevances et droits dus au Trésor qui
              y correspondent. L’invention de la SBN-SBS tient donc lieu de{" "}
              <strong>
                Dispositif Électronique Fiscal (DEF) édicté par les textes de
                loi susmentionnés et qui mentionnent ce qui suit ;{" "}
              </strong>
            </p>

            <p className="w-[70%]">
              <strong>
                <em> Article 59 ter </em>{" "}
              </strong>
              de l’ordonnance-Loi n°10/001 du 20 août 2010 portant institution
              de la taxe sur la valeur ajoutée stipule :
              <strong>
                <em>
                  {" "}
                  « Les personnes physiques ou morales assujetties à la taxe sur
                  la valeur ajoutée sont tenues, dans les conditions précisées
                  par voie réglementaire, de se faire enregistrer auprès de
                  l’Administration des Impôts comme utilisatrices des
                  dispositifs électroniques fiscaux. », et de poursuivre « Par
                  dispositifs électroniques fiscaux, il faut entendre des
                  appareils électroniques dont les spécifications techniques
                  sont définies par l’Administration des Impôts et qui sont
                  fabriqués pour être utilisés par les personnes physiques ou
                  morales assujetties à la taxe sur la valeur ajoutée dans leurs
                  transactions. ».{" "}
                </em>{" "}
              </strong>
            </p>

            <p className="w-[70%]">
              <strong>
                {" "}
                <em> Article 59 quater </em>{" "}
              </strong>
              de l’ordonnance-Loi n°10/001 du 20 août 2010 portant institution
              de la taxe sur la valeur ajoutée stipule ;{" "}
              <strong>
                {" "}
                <em>
                  {" "}
                  « Les personnes physiques ou morales assujetties à la taxe sur
                  la valeur ajoutée sont tenues d’utiliser les dispositifs
                  électroniques fiscaux connectés au système informatique de
                  l’Administration des Impôts pour (1) la collecte et la gestion
                  des données de la taxe sur la valeur ajoutée sur les
                  opérations réalisées, (2) délivrer une facture produite
                  automatiquement par l’appareil électronique fiscal lors de
                  chaque transaction et (3) veiller à la transmission
                  électronique, à la fin de la journée, de toutes les
                  transactions réalisées vers ledit système informatique.».
                </em>{" "}
              </strong>
            </p>

            <p className="w-[70%]">
              Au départ, ce Dispositif Electronique Fiscal ne devrait permettre
              à l’État congolais que de capturer la facture et les données de la
              transaction dont recèle ce document comptable stratégique, la
              facture. Ensuite, d’après la loi, le Dispositif Electronique
              Fiscal ferait la gestion des données renseignées dans la facture
              (noms des co-contractants, le vendeur-fournisseur et
              l’acheteur-client), flux réels (marchandises achetées et vendues),
              flux financiers (prix payé et encaissé), frais accessoires à
              l’échange (achat et vente), conditions de l’échange (comptant, à
              tempérament ou à crédit), taxes autres que la TVA affectant la
              transaction, et plusieurs autres informations (rabais, remise et
              ristournes consentis), et, enfin, la TVA elle-même. L’ensemble de
              ces éléments concourent à la gestion optimale de la TVA mais aussi
              des autres impôts tels l’Impôt sur les bénéfices et profits (IBP).
            </p>

            <p className="w-[70%]">
              <strong>
                {" "}
                Il appert que, à ce jour, le Centre de Recherche SBN-SBS a
                étendu la gestion, en la dématérialisant, à toutes les données
                dérivées de la facture
              </strong>{" "}
              et documents qui en tiennent lieu (quittance, …){" "}
              <strong>à la constatation </strong>(matières et bases imposables),{" "}
              <strong>à la liquidation</strong> (calcul des droits dus au
              Trésor),
              <strong> à l’ordonnancement</strong> (déclaration des impôts et
              taxes) <strong>et au paiement</strong> (acquittement des sommes
              dues au Trésor public, aux Administrations et Etablissements
              publics, et, enfin, aux entités Territoriales Décentralisés) (les
              ETD).
            </p>

            <p className="w-[70%]">
              <strong>
                Grâce à ses autres fonctionnalités, le modèle de Dispositif
                Electronique Fiscal que la SBN-SBS fournit à l’Etat congolais a
                l’exceptionnel avantage de rendre intangibles les données à la
                fois comptables et fiscales des entreprises
              </strong>{" "}
              de manière à leur garantir un traitement comptable automatique, de
              la journalisation à la génération automatique des tableaux
              comptables périodiques, intérimaires ou de fin dh��exercice et
              notamment du COMPTE DU RESULTAT.
              <strong>
                {" "}
                La dématérialisation et la génération automatique des résultats
                comptables afférents à chaque type d’impôt évitent aux données
                toute manipulation humaine, accidentelle ou frauduleuse.
              </strong>
            </p>
            <p className="w-[70%]">
              La dématérialisation intégrale des segments et fonctions
              comptables ainsi que le calcul automatisé des données comptables
              de l’entreprise (assujetti) fait de la Solution fiscale SBN-SBS
              une Solution sûre pour la gestion des entreprises qui en sont
              utilisatrices et fait respecter{" "}
              <strong>
                {" "}
                les normes de la Comptabilité OHADA révisée, la seule
                actuellement admise en République Démocratique du Congo.{" "}
              </strong>
            </p>
            <p className="w-[70%]">
              <strong>
                Subséquemment la dématérialisation des segments fiscaux, allant
                de la déclaration et à l’acquittement (recouvrement), aussi bien
                de la TVA que des autres impôts, taxes parafiscales, redevances
                et autres droit dus au Trésor public redent sûrs et certains les
                objectifs techniques et politiques de la mobilisation optimales
                des impôts, taxes, redevances et autres droits dus au Trésor
                public.
              </strong>
            </p>

            <p className="w-[70%]">
              Le Centre de recherche SBN-SBS a étendu les fonctions du
              Dispositif Electronique Fiscal jusqu’au calcul et à l’acquittement
              automatique de l’IPR et des cotisations sociales (CNSS, INPP et
              ONEM).
            </p>

            <p className="w-[70%]">
              Comme susdit, la solution de dématérialisation des procédures
              comptables et fiscales offerte rendraient optimale la collecte des
              tous les impôts perçus par la Direction Générale des Impôts autant
              qu’elle est en mesure d’étendre cette efficience aux autres
              recettes, notamment douanières et domaniales ainsi qu’aux recettes
              parafiscales perçues par les Etablissements et les Administrations
              publics.
            </p>

            <p className="w-[70%]">
              Le modèle de Dispositif Electronique Fiscal proposé par le Centre
              de Recherche SBN-SBS permet de{" "}
              <strong> constater tout fait générateur </strong> d’impôt, taxe,
              redevance et droit du au Trésor, aux Administration et
              Etablissements publics, de{" "}
              <strong>
                {" "}
                liquider ou calculer ledit impôt, taxe, redevance ou droit du au
                Trésor
              </strong>{" "}
              (base imposable et droit qui en découle),
              <strong>
                {" "}
                d’émettre une déclaration spécifique et auto-remplie des droits
                dûment liquidés{" "}
              </strong>{" "}
              et d’assurer le recouvrement automatique et instantané, par voie
              bancaire, des droits préalablement déclarés par l’assujetti au
              profit du compte du Trésor, de l’Administration ou de
              l’Etablissement public concerné (déclaration et paiement par voie
              bancaire).
            </p>

            <p className="w-[70%]">
              Le déploiement de notre Dispositif Electronique Fiscal pour le
              compte du Trésor public nécessite une logistique simplifié qui ne
              fait pas recours aux coûteuses et relativement peu sures CAISSES
              ENREGISTREUSES mais offre une traçabilité infaillible des
              transactions commerciales et un traitement infaillible des données
              collectées jusqu’au résultat fiscal exact et vérifiable, en terme
              d’impôts, taxes, redevances et autres droits dus au Trésor.
            </p>
          </div>
        </section>

        <section className="Section-paragraph flex justify-between flex-col mx-10 border-b-2 border-neutral-300">
          <div className="">
            <h2 id="Accès-système" className="text-indigo-700">
              Accès au système
            </h2>
            <p className="w-[70%]">
              La solution a l’avantage d’un accès aisé grâce à un lien public,
              d’un enregistrement aisé des utilisateurs personnes physiques et
              morales et du traitement automatique des données liées aux
              opérations ou procédures énumérées ci-dessus. Pour se connecter à
              la plate-forme DEF, vous pouvez utiliser n’importe quel navigateur
              (Opéra mini, Fire fox, Chrome...). Le lien d’accès est celui-ci :{" "}
              <a className="text-red-900" href="https://def-rdc.com">
                https://def-rdc.com
              </a>
            </p>
          </div>
        </section>

        <section className="Section-paragraph flex justify-between flex-col mx-10 border-b-2 border-neutral-300">
          <div className="">
            <h2 id="Création-de-compte">Création d’un compte</h2>
            <p className="w-[70%]">
              La Solution offre des interfaces d’enregistrement des nouveaux
              utilisateurs et leur donne un numéro DEF d’utilisateur et un mot
              de passe sécurisé par défaut modifiable par l’utilisateur.
            </p>
          </div>
        </section>

        <section className=" flex justify-between flex-col mx-10 border-b-2 border-neutral-300 Procedures">
          <div className="Paragraph-Content">
            <h2 id="procédures">Procédures à suivre</h2>

            <div className=" flex justify-between flex-row gap-70 pe-1 left-[40%]">
              <div>
                <h2
                  id="Création-espace-travail"
                  className="createCount"
                  onClick={handleScrollScreens}
                >
                  Création de l’espace de travail
                </h2>
                <p>
                  cliquer sur le bouton s'enregistrerpour lancer la création de
                  l’espace de travail{" "}
                </p>
              </div>
              <img
                src={CreateCount}
                alt="Capture"
                className="w-[30%] h-[20%]  rounded-full "
              />
            </div>

            <div className="flex justify-between flex-row gap-50">
              <div>
                <h2 id="Choix-catégorie-assujetti">
                  Choix de la catégorie de l’assujetti
                </h2>
                <p>
                  cliquer sur le bouton s'enregistrerpour lancer la création de
                  l’espace de travail{" "}
                </p>
              </div>
              <img
                src={CatAssujetti}
                alt="Capture"
                className="w-[40%] h-[30%] "
              />
            </div>

            <div className="flex justify-between flex-col mx-10 border-b-2 border-neutral-300">
              <h2 id="Personne-physique">Personne physique</h2>
              <p className="w-[70%]">
                Apres le choix de la catégorie de l’assujetti, si cette dernière
                est une personne physique (commerçante ou non commerçante) ; il
                est important de préciser que la procédure est la même.
              </p>
              <div className="flex justify-between flex-row gap-50">
                <div>
                  <h3>Etape 1 : enregistrement de coordonnées</h3>
                  <p className="w-[70%]   ">
                    La personne physique commerciale ou non commerciale doit
                    dans cette interface : renseigner une adresse mail et un
                    numeor de téléphone valide, renseigner correctement son
                    adresse physique personnelle
                  </p>
                </div>

                <img
                  src={StorageData}
                  alt="StorageData"
                  className="w-[30%] h-[20%]"
                />
              </div>

              <div className="flex justify-between flex-row gap-50">
                <h3>Etape 2: choix de la nationalité</h3>
                <img
                  src={SelectNationnality}
                  alt="Capture"
                  className="w-[30%] h-[20%] "
                />
              </div>

              <div className="flex justify-between flex-row gap-50">
                <div>
                  <h3>Assujetti de droit congolais</h3>
                  <p className="w-[70%]   ">
                    Préciser si l'assujetti de droit congo est une filiale d'une
                    entreprise etrangère ou non
                  </p>
                </div>
                <img
                  src={AssujettiCongolais}
                  alt="Capture"
                  className="w-[30%] h-[20%] "
                />
              </div>

              <div className="flex justify-start flex-row gap-50">
                <div>
                  <h3>Assujetti de droit Etranger</h3>
                  <p>
                    Préciser si l'assujetti de droit etranger ayont une
                    répresentation en RDC ou non
                  </p>
                </div>
                <img
                  src={AssujettiEtranger}
                  alt="Capture"
                  className="w-[30%] h-[20%] "
                />
              </div>

              <div className="flex justify-between flex-row gap-50">
                <div>
                  <h3>Etape 3 : Déclinaison de l'identité de la personne</h3>
                  <p className="w-[70%]   ">
                    Renseigner correctement votre identité puis clicquer sur le
                    bouton blue "Soumettre le formulaire"
                  </p>
                </div>
                <img
                  src={IdentitéPersonnelle}
                  alt="Capture"
                  className="w-[30%] h-[20%] "
                />
              </div>
              <p className="w-[70%]   ">
                N.B : Après avoir soumis le formulaire, le système génère de
                manière automatique le nom d’utilisateur et le mot de passe par
                défaut après l’enregistrement via l’adresse mail renseignée à
                l’étape 1.
              </p>
            </div>

            <div className="flex justify-between flex-col mx-10 border-b-2 border-neutral-300">
              <h2 id="Personne-morale">Personne morale</h2>
              <p className="w-[70%]   ">
                Apres le choix de la catégorie de l’assujetti, si cette dernière
                est une personne morale (commerçante ou non commerçante) ; il
                est important de préciser que la procédure est la même à la
                première, deuxième et quatrième étape.
              </p>
              <div className="flex justify-between flex-row gap-50">
                <div>
                  <h3 id="Choix de la catégorie de l’assujetti">
                    Etape 1 : enregistrement de coordonnées
                  </h3>
                  <p className="w-[70%]   ">
                    La personne morale commerçante ou non commerçante doit dans
                    cette interface: renseigner une adresse mail et un numéro de
                    téléphone valide, renseigner correctement une adresse
                    physique personnelle
                  </p>
                </div>
                <img
                  src={StorageData}
                  alt="Capture"
                  className="w-[30%] h-[20%] "
                />
              </div>

              <div className="flex justify-between flex-row gap-50">
                <div>
                  <h3>Etape 2: choix de la nationalité</h3>
                  <p className="w-[70%]   ">
                    Clicquer sur le champs "Selectionncer la catégorie" puis
                    choissez la nationalité de votre entreprise pour la
                    personalisation de votre espace DEF
                  </p>
                </div>

                <img
                  src={SelectNationnality}
                  alt="Capture"
                  className="w-[30%] h-[20%] "
                />
              </div>

              <div className="flex justify-between flex-row gap-50">
                <div>
                  <h3>Assujetti de droit congolais</h3>
                  <p className="w-[70%]   ">
                    Préciser si l'assujetti de droit congolais est une filiale
                    d'une entreprise etrangère ou non
                  </p>
                </div>

                <img
                  src={AssujettiCongolais}
                  alt="Capture"
                  className="w-[30%] h-[20%] "
                />
              </div>

              <div className="flex justify-between flex-row gap-50">
                <div>
                  <h3>Assujetti de droit Etranger</h3>
                  <p className="w-[70%]   ">
                    Préciser si l'assujetti de droit de etranger ayant une
                    répresentaion en RDC ou non
                  </p>
                </div>

                <img
                  src={AssujettiEtranger}
                  alt="Capture"
                  className="w-[30%] h-[20%] "
                />
              </div>

              <div className="flex justify-between flex-col gap-50">
                <h3>Etape 3 : Déclinaison de l'identité de la personne</h3>

                <div className="flex justify-between flex-row gap-50">
                  <p className="w-[70%]   ">
                    Préciser si l'assujetti de droit de etranger ayant une
                    répresentaion en RDC ou non
                  </p>
                  <div>
                    <img src={PMC} alt="Capture" className="w-[40%] h-[50%] " />
                    <img
                      src={PMNC}
                      alt="Capture"
                      className="w-[40%] h-[50%] "
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between flex-row gap-50 w-[70%]">
                <h3>Etape 4 : déclinaison de l’identité</h3>
                <div className="flex justify-between flex-col">
                  <img
                    src={DenominationEts}
                    alt="Capture"
                    className="w-[30%] h-[20%] "
                  />
                  <img
                    src={StatutNotarie}
                    alt="Capture"
                    className="w-[30%] h-[20%] "
                  />
                </div>
              </div>
              <p className="w-[70%]   ">
                N.B : Après avoir soumis le formulaire, le système génère de
                manière automatique le nom d’utilisateur et le mot de passe par
                défaut après l’enregistrement via l’adresse mail renseignée à
                l’étape 1.
              </p>
            </div>
          </div>
        </section>

        <section
          className="flex justify-between flex-col mx-10 border-b-2 border-neutral-300"
          id="connexion"
        >
          <h2 id="connexion">Connexion au système</h2>
          <div className="flex justify-between flex-row gap-50">
            <p className="w-[70%]   ">
              Après l’enregistrement dans le DEF, le nom d’utilisateur et le mot
              de passe par défaut reçus via le mail doivent être renseignés
              respectivement dans les champs cidessous pour se connecter
            </p>

            <img src={Connexion} alt="Capture" className="w-[30%] h-[20%] " />
          </div>
        </section>
      </div>
    </>
  );
};

export default Authentification;
