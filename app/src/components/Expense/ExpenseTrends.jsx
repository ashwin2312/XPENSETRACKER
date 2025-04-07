// import React from "react";
import BarChartComponent from "../Chart/BarChartComponent";

export default function ExpenseTrends({ barchartData }) {
  return (
    <div>
      <h2>Top Expenses</h2>
      <div>
        <BarChartComponent barchartData={barchartData} />
      </div>
    </div>
  );
}
