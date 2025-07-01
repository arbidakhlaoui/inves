import React, { useState, useEffect } from "react";
import "./EffectifChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

// Constante 13 jours en ms
const DAY_13_MS = 13 * 24 * 60 * 60 * 1000;

// Formatteur pour afficher "jour mois" à partir d'un timestamp
const formatDateLabel = (timestamp) => {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  return `${day} ${month}`;
};

// Données avec date transformée en timestamp
const initialData = [
  { date: "2025-01-01", value: 190 },
  { date: "2025-01-08", value: 210 },
  { date: "2025-01-15", value: 230 },
  { date: "2025-01-22", value: 220 },
  { date: "2025-02-01", value: 250 },
  { date: "2025-02-08", value: 260 },
  { date: "2025-02-15", value: 245 },
  { date: "2025-02-22", value: 220 },
  { date: "2025-03-01", value: 200 },
  { date: "2025-03-08", value: 190 },
  { date: "2025-03-15", value: 170 },
  { date: "2025-03-22", value: 150 },
].map(item => ({ ...item, timestamp: new Date(item.date).getTime() }));

const EffectifChart = () => {
  const [data] = useState(initialData);
  const [showMenu, setShowMenu] = useState(false);
  const [showDepartements, setShowDepartements] = useState(false);
  const [showPostes, setShowPostes] = useState(false);

  useEffect(() => {
    const close = () => setShowMenu(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  // Calcul min/max timestamps
  const minTimestamp = Math.min(...data.map(d => d.timestamp));
  const maxTimestamp = Math.max(...data.map(d => d.timestamp));

  // Génère ticks tous les 13 jours entre min et max
  const ticks = [];
  for (let t = minTimestamp; t <= maxTimestamp; t += DAY_13_MS) {
    ticks.push(t);
  }

  return (
    <div className="effectif-chart">
      <p className="chart-title">
        <span className="title-text">Effectif</span>
        <div className="filter-button">
          <img src={require("../assets/filtre.png")} alt="filtre" className="a" />
          Filter
          <img
            src={require("../assets/filtre1.png")}
            alt="filtre1"
            className="a clickable"
            onClick={(e) => {
              e.stopPropagation();
              setShowMenu(!showMenu);
            }}
          />
          {showMenu && (
            <div className="filter-dropdown" onClick={(e) => e.stopPropagation()}>
              <div className="filter-section-titlegrand">Membres de l'équipe</div>

              <div className="filter-section">
                <div className="filter-section-title with-toggle">
                  <span>Départements</span>
                  <img
                    src={require("../assets/dep.png")}
                    alt="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDepartements((prev) => !prev);
                    }}
                  />
                </div>
                {showDepartements && (
                  <>
                    <label><input type="checkbox" /> Département 1</label>
                    <label><input type="checkbox" /> Département 2</label>
                    <label><input type="checkbox" /> Département 3</label>
                    <label><input type="checkbox" /> Département 4</label>
                  </>
                )}
              </div>

              <div className="filter-section">
                <div className="filter-section-title with-toggle">
                  <span>Postes</span>
                  <img
                    src={require("../assets/dep.png")}
                    alt="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowPostes((prev) => !prev);
                    }}
                  />
                </div>
                {showPostes && (
                  <>
                    <label><input type="checkbox" /> Poste 1</label>
                    <label><input type="checkbox" /> Poste 2</label>
                    <label><input type="checkbox" /> Poste 3</label>
                    <label><input type="checkbox" /> Poste 4</label>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </p>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={data}
          margin={{ top: 30, right: 30, left: 10, bottom: 60 }}
        >
          <CartesianGrid strokeDasharray="4 4" stroke="#e2e8f0" strokeWidth={0.5} />
          <XAxis
           dataKey="timestamp"
           type="number"
           domain={[minTimestamp, maxTimestamp]}
           ticks={ticks}
           tickFormatter={formatDateLabel}
           tick={{ fontSize: 12 }}
                dy={10}        
                interval={0}
/>
          <YAxis
            domain={[0, 300]}
            tick={{ fontSize: 12 }}
            ticks={[0, 50, 100, 150, 200, 250, 300]}
          />
          <Tooltip
            labelFormatter={(t) => `Date : ${formatDateLabel(t)}`}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EffectifChart;
