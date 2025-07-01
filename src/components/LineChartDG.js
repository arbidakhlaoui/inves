// src/components/LineChartDG.js
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { trimestre: "T1", chiffreAffaires: 30000, couts: 15000 },
  { trimestre: "T2", chiffreAffaires: 40000, couts: 18000 },
  { trimestre: "T3", chiffreAffaires: 50000, couts: 22000 },
];

const LineChartDG = () => {
  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="trimestre" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="chiffreAffaires" stroke="#167ABC" />
      <Line type="monotone" dataKey="couts" stroke="#D9534F" />
    </LineChart>
  );
};

export default LineChartDG;
