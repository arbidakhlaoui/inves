import React, { useState } from "react";
import "./RHTutorial.css";

const RHTutorial = ({ onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define the slides content
  const slides = [
    {
      leftBlock: (
        <>
          <h4>DÉPARTEMENT RESSOURCES HUMAINES « RH »</h4>
         
          
          <p style={{ lineHeight: "2" }}> <div class="border"><h3>1. Comportement des ouvriers</h3>
            Vos ouvriers sont la force motrice de votre usine, ils jouent un rôle
            important dans votre réussite et c’est grâce à eux que votre productivité
            est assurée.
            <br />
            Les ouvriers n’accepteront pas d’être payés au-dessous du salaire
            mensuel minimum interprofessionnel garanti (SMIG) qui est de l’ordre de <strong style={{ color: "#167ABC" }}>529 BA</strong>.
            <br />
            Les ouvriers n’accepteront pas d’être payés au-dessous de la moyenne
            des salaires distribués sur le marché.
            <br />
            Les ouvriers quitteront votre entreprise, s’ils ne sont pas satisfaits
            (minimum 50%), cette satisfaction dépend du salaire et de
            l’investissement formation.
            <br /></div>
            Chaque ouvrier ne peut pas produire plus que <strong style={{ color: "#167ABC" }}>1 unité</strong> additionnelle. Le
            taux des heures supplémentaires est de <strong style={{ color: "#167ABC" }}>25%</strong> du salaire.
            <br />
            La gestion des ressources humaines vous permettra de garantir la
            continuité de votre activité et la performance sur le marché.
          </p>
        </>
      ),
      rightBlock: (
        <>
          <h3>Les principaux indicateurs de suivi de votre gestion RH sont :</h3>
          <p className="last-paragraph" style={{ lineHeight: "2" }}>
            <span style={{ color: "#746D38", fontWeight: "bold" }}>-Le taux de satisfaction des ouvriers</span> : Il indique le niveau de satisfaction
            des ouvriers et il dépend du salaire et du budget formation que vous
            allouez, chaque tour, à votre équipe.
            <br />
            Ainsi, le taux de satisfaction, minimum, qui garantit l'activité de vos
            ouvriers est de <strong style={{ color: "#167ABC" }}>50%</strong>. Au-dessous de <strong style={{ color: "#167ABC" }}>50%</strong>, vos ouvriers quittent votre
            usine ou s’abstiennent de produire.
            <br />
            <span style={{ color: "#746D38", fontWeight: "bold" }}>-Le niveau de compétences des ouvriers</span> : Il dépend de la gamme de
            machines que vous utilisez. Ainsi, au-dessous du niveau minimal de
            compétence requis, les ouvriers ne seront pas affectés à la machine et
            donc vous n’allez pas pouvoir produire. Pour découvrir le niveau de
            compétence minimum, pour chaque gamme de machines, il faut consulter
            sa fiche technique des machines.
            <br />
            À titre indicatif, pour la machine bas de gamme, le budget minimal de
            formation, par ouvrier, doit se situer au-dessus de <strong style={{ color: "#167ABC" }}>350 BA</strong>.
          </p>
          <div className="imgtuto-container">
            <img
              src={require("../assets/imgtuto.png")}
              alt="tuto"
              className="imgtuto"
            />
          </div>
        </>
      ),
    },
    {
      leftBlock: (
        <>
          <h3>2. Comportement des commerciaux</h3>
          <p style={{ lineHeight: "2" }}>
            Pour les commerciaux, ils sont payés en salaire fixe et commission sur les ventes (à mentionner en chiffre, sans le pourcentage).
            <br />
            Les éléments de rémunération sont des facteurs importants pour la motivation de votre force de vente et leurs rendements.
            <br />
            La moyenne de salaire pour les commerciaux est de <strong style={{ color: "#9B924B", fontWeight: "bold" }}>900 BA</strong> par mois, au-dessous de ce montant, les commerciaux ne seront pas motivés.
            <br />
            Le budget de fidélisation des clients est réservé aux commerciaux pour assurer les visites de suivi des clients et l’organisation d’événements dédiés pour ça.
          </p> 
         
          <p style={{ lineHeight: "2" }}><div class="border"> <h3>3. Comportement des comptables</h3>
            L’apport des comptables est aussi très important dans l’entreprise, il permet d’apporter de l’ordre à vos pièces comptables, à réduire la durée de vos impôts et à éviter les risques de pénalités.</div>
            <div className="imgtuto-container">
              <img
                src={require("../assets/tv.png")}
                alt="tuto"
                className="tvimg"
              />
            </div>
          </p>
        </>
      ),
      rightBlock: (
        <>
        </>
      ),
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="rh-overlay">
      <div className="rh-tutorial">
        <div className="rh-header">
          <div className="rh-header1">
            <img
              src={require("../assets/tuto.png")}
              alt="tuto"
              className="tuto"
            />
            <h2>Tutoriel human-resources</h2>
          </div>
          <img
            src={require("../assets/bye.png")}
            alt="bye"
            className="byebye"
            onClick={onClose}
          />
        </div>

        <div className="rh-content">
          <div className="rh-columns">
            {/* Bloc gauche */}
            <div className="rh-block">{slides[currentSlide].leftBlock}</div>

            {/* Bloc droite */}
            <div className="rh-block">{slides[currentSlide].rightBlock}</div>
          </div>

          <img
            src={require("../assets/left.png")}
            alt="left"
            className="left-character"
            onClick={handlePrev}
          />
          <img
            src={require("../assets/right.png")}
            alt="right"
            className="right-character"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default RHTutorial;