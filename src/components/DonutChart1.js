import React from "react";

const COLORS = ["#746D38", "#C2B65E", "#DAD39E"]; // Atelier 1, 2, 3

const DonutChart = ({ values, radius = 30, stroke = 10 }) => {
  const total = values.reduce((acc, val) => acc + val, 0);
  let cumulativePercent = 0;

  return (
    <svg width={2 * (radius + stroke)} height={2 * (radius + stroke)}>
      <g transform={`translate(${radius + stroke}, ${radius + stroke})`}>
        {values.map((value, index) => {
          const percentage = value / total;
          const startAngle = cumulativePercent * 2 * Math.PI;
          const endAngle = (cumulativePercent + percentage) * 2 * Math.PI;
          cumulativePercent += percentage;

          const x1 = Math.cos(startAngle) * radius;
          const y1 = Math.sin(startAngle) * radius;
          const x2 = Math.cos(endAngle) * radius;
          const y2 = Math.sin(endAngle) * radius;
          const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

          const pathData = `
            M ${x1} ${y1}
            A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}
          `;

          return (
            <path
              key={index}
              d={pathData}
              stroke={COLORS[index]}
              strokeWidth={stroke}
              fill="none"
            />
          );
        })}
      </g>
    </svg>
  );
};

export default DonutChart;
