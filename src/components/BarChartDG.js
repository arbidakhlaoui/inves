// src/components/BarChartDG.js
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Données fictives trimestrielles
const data = [
  { name: "T1", Marge: 25, ROI: 20 },
  { name: "T2", Marge: 30, ROI: 28 },
  { name: "T3", Marge: 27, ROI: 22 },
  { name: "T4", Marge: 32, ROI: 26 },
];

const BarChartDG = () => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Marge" fill="#9FC9E4" radius={[6, 6, 0, 0]} />
          <Bar dataKey="ROI" fill="#167ABC" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartDG;
