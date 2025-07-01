// src/pages/DGpage.js
import React from "react";
import "./DGpage.css";
import DonutChart from "../components/DonutChart";
import LineChartDG from "../components/LineChartDG";
import BarChartDG from "../components/BarChartDG";
import expertImg from "../assets/expertia.png";
import okIcon from "../assets/okbutton.png";
import warnIcon from "../assets/attentionicon.png";

const croissanceCA = [50000, 30000]; // CA N, CA N-1
const margeNette = [25, 75]; // % marge, reste
const ROI = [20, 80]; // % ROI, reste

const DGpage = () => {
  return (
    <div className="dg-page">
      <h2 className="dg-title">Direction Générale</h2>

      <div className="dashboard-layout">
        {/* Partie gauche */}
        <div className="bloc1">
          <div className="kpi-row">
            <div className="kpi-card">
              <div className="kpi-header">
                <h3>Croissance CA</h3>
                <img src={require("../assets/3pts.png")} alt="options" className="dots-icon" />
              </div>
              <p className="kpi-value">
                +66.7% <span className="positive"><img src={require("../assets/upp.png")} alt="up" className="a" /> 4.4%</span>
              </p>
              <div className="ring-container">
                <DonutChart values={croissanceCA} radius={33} stroke={8} colors={["#3498db", "#ecf0f1"]} />
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-header">
                <h3>Marge nette</h3>
                <img src={require("../assets/3pts.png")} alt="options" className="dots-icon" />
              </div>
              <p className="kpi-value">
                25% <span className="positive"><img src={require("../assets/upp.png")} alt="up" className="a" /> 3.2%</span>
              </p>
              <div className="ring-container">
                <DonutChart values={margeNette} radius={33} stroke={8} colors={["#2ecc71", "#ecf0f1"]} />
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-header">
                <h3>Retour sur investissement</h3>
                <img src={require("../assets/3pts.png")} alt="options" className="dots-icon" />
              </div>
              <p className="kpi-value">
                20% <span className="positive"><img src={require("../assets/upp.png")} alt="up" className="a" /> 2.5%</span>
              </p>
              <div className="ring-container">
                <DonutChart values={ROI} radius={33} stroke={8} colors={["#f39c12", "#ecf0f1"]} />
              </div>
            </div>
          </div>

          <div className="chart-section">
            <h3 className="chart-title">Comparaison Marge nette / ROI</h3>
            <BarChartDG />
          </div>
          <div className="financial-summary-table">
  <table>
    <thead>
      <tr>
        <th>KPI</th>
        <th>Valeur</th>
        <th>Explication rapide</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Chiffre d'affaires (CA)</td>
        <td>50 000 €</td>
        <td>Montant total des ventes réalisées</td>
      </tr>
      <tr>
        <td>Marge nette</td>
        <td>25%</td>
        <td>Rentabilité après toutes charges déduites</td>
      </tr>
      <tr>
        <td>Retour sur investissement (ROI)</td>
        <td>20%</td>
        <td>Rentabilité des investissements réalisés</td>
      </tr>
    </tbody>
  </table>
</div>

        </div>

        {/* Partie droite : conseils */}
        <div className="expert-block">
          <h4>Conseils de l’expert</h4>
          <div className="advice positive">
            <img src={okIcon} alt="OK" className="advice-icon" />
            <span>Votre stratégie de croissance porte ses fruits. Continuez à investir intelligemment !</span>
          </div>
          <div className="advice warning">
            <img src={warnIcon} alt="Attention" className="advice-icon" />
            <span>Gardez un œil sur vos coûts pour maintenir une marge stable.</span>
          </div>
          <div className="expert-image-container">
            <img src={expertImg} alt="Expert" className="expert-illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DGpage;
