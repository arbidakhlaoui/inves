
import React, { useState } from "react";
import DonutChart from "../components/DonutChart";
import DonutChart1 from "../components/DonutChart1";
import EffectifChart from "../components/EffectifChart";
import RHTutorial from "../components/RHTutorial";
import "./RHpage.css";
const turnoverValues = [7660, 2820, 5120];
const satisfactionValues = [4000, 3800, 2200];
const productivityValues = [3000, 4200, 1000];

const PageRH = () => {
  const [showTutorial, setShowTutorial] = useState(false);

  return (
      <div className="main-content">
          <h1 className="page-title">Human_resources</h1>
          <div className="dashboard-layout">
            {/* Bloc 1 : KPIs + Graphique */}
            <div className="bloc1">
              <div className="kpi-row">
                {/* KPI Turnover */}
                <div className="kpi-card">
                  <div className="kpi-header">
                    <h3>Taux de turnover</h3>
                    <img src={require("../assets/3pts.png")} alt="options" className="dots-icon" />
                  </div>
                  <p className="kpi-value">
                    $6,420{" "}
                    <span className="positive">
                      <img src={require("../assets/upp.png")} alt="b" className="a" />
                      3.3%
                    </span>
                  </p>
                  <div className="ring-container">
                    <DonutChart values={turnoverValues} radius={33} stroke={8} />
                    <ul className="atelier-list">
                      <li>
                        <span className="atelier-dot" style={{ backgroundColor: "#167ABC" }}></span>
                        <span className="atelier-label">Atelier 1 :</span>
                        <span className="atelier-value">${turnoverValues[0]}</span>
                      </li>
                      <li>
                        <span className="atelier-dot" style={{ backgroundColor: "#4494C9" }}></span>
                        <span className="atelier-label">Atelier 2 :</span>
                        <span className="atelier-value">${turnoverValues[1]}</span>
                      </li>
                      <li>
                        <span className="atelier-dot" style={{ backgroundColor: "#9FC9E4" }}></span>
                        <span className="atelier-label">Atelier 3 :</span>
                        <span className="atelier-value">${turnoverValues[2]}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* KPI Satisfaction */}
                <div className="kpi-card">
                  <div className="kpi-header">
                    <h3>Taux de satisfaction des employés</h3>
                    <img src={require("../assets/3pts.png")} alt="options" className="dots-icon" />
                  </div>
                  <p className="kpi-value">
                    $4,420{" "}
                    <span className="positive">
                      <img src={require("../assets/upp.png")} alt="b" className="a" />
                      3.3%
                    </span>
                  </p>
                  <div className="ring-container">
                    <DonutChart1 values={satisfactionValues} radius={33} stroke={8} />
                    <ul className="atelier-list">
                      <li>
                        <span className="atelier-dot" style={{ backgroundColor: "#746D38" }}></span>
                        <span className="atelier-label">Atelier 1 :</span>
                        <span className="atelier-value1">${satisfactionValues[0]}</span>
                      </li>
                      <li>
                        <span className="atelier-dot" style={{ backgroundColor: "#C2B65E" }}></span>
                        <span className="atelier-label">Atelier 2 :</span>
                        <span className="atelier-value1">${satisfactionValues[1]}</span>
                      </li>
                      <li>
                        <span className="atelier-dot" style={{ backgroundColor: "#DAD39E" }}></span>
                        <span className="atelier-label">Atelier 3 :</span>
                        <span className="atelier-value1">${satisfactionValues[2]}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* KPI Productivité */}
                <div className="kpi-card">
                  <div className="kpi-header">
                    <h3>Taux de productivité</h3>
                    <img src={require("../assets/3pts.png")} alt="options" className="dots-icon" />
                  </div>
                  <p className="kpi-value">
                    $7,220{" "}
                    <span className="positive">
                      <img src={require("../assets/upp.png")} alt="b" className="a" />
                      3.3%
                    </span>
                  </p>
                  <div className="ring-container">
                    <DonutChart values={productivityValues} radius={33} stroke={8} />
                    <ul className="atelier-list">
                      <li>
                        <span className="atelier-dot" style={{ backgroundColor: "#167ABC" }}></span>
                        <span className="atelier-label">Atelier 1 :</span>
                        <span className="atelier-value">${productivityValues[0]}</span>
                      </li>
                      <li>
                        <span className="atelier-dot" style={{ backgroundColor: "#4494C9" }}></span>
                        <span className="atelier-label">Atelier 2 :</span>
                        <span className="atelier-value">${productivityValues[1]}</span>
                      </li>
                      <li>
                        <span className="atelier-dot" style={{ backgroundColor: "#9FC9E4" }}></span>
                        <span className="atelier-label">Atelier 3 :</span>
                        <span className="atelier-value">${productivityValues[2]}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <EffectifChart />
            </div>

            {/* Bloc 2 : Conseils expert */}
            <div className="expert-section-wrapper">
              <div className="expert-block">
                <h4>Conseils de l’expert</h4>
                <div className="advice positive">
                  <img src={require("../assets/okbutton.png")} alt="Positif" className="advice-icon" />
                  <span>Félicitation ! Votre engagement et votre sens du leadership ont permis à votre équipe de s’épanouir.</span>
                </div>
                <div className="advice positive">
                  <img src={require("../assets/okbutton.png")} alt="Positif" className="advice-icon" />
                  <span>Continuez sur cette lancée !</span>
                </div>
                <div className="advice warning">
                  <img src={require("../assets/attentionicon.png")} alt="Attention" className="advice-icon" />
                  <span>Attention ! Vous n’êtes pas en train d’optimiser la gestion de votre parc machines.</span>
                </div>
                <div className="advice warning">
                  <img src={require("../assets/attentionicon.png")} alt="Attention" className="advice-icon" />
                  <span>Pensez à vendre les machines excédentaires ou à augmenter votre production.</span>
                </div>
                <div className="expert-image-container">
                  <img src={require("../assets/expertia.png")} alt="Illustration Expert" className="expert-illustration" />
                </div>
              </div>
            </div>
          </div>

         
          <img
            src={require("../assets/extrimite.png")}
            alt="Illustration Expert"
            className="next"
            onClick={() => setShowTutorial(true)}
          />

          {/* Affichage tutoriel RH */}
          {showTutorial && <RHTutorial onClose={() => setShowTutorial(false)} />}
        </div>
  );
};

export default PageRH;
