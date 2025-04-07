//App.js

import React, { useState } from "react";
import styles from "./PieChart.module.css";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";

const PieChartComponent = ({ pieData }) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className={styles.pieContainer}>
      <PieChart width={200} height={200}>
        <Pie
          activeIndex={activeIndex}
          label={renderCustomizedLabel}
          labelLine={false}
          data={pieData}
          dataKey="value" /* price to value */
          nameKey="name"
          outerRadius={75}
          fill="green"
          onMouseEnter={onPieEnter}
          style={{ cursor: "pointer", outline: "none" }} // Ensure no outline on focus
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        {/* <Tooltip /> */}
        <Legend
          iconType="rect"
          verticalAlign="bottom"
          layout="horizontal"
          // height="auto"
        />
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
