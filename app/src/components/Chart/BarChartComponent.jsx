// import "./styles.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import styles from "./Barchart.module.css";

export default function BarChartComponent({ barchartData }) {
  // console.log("barchartData::", barchartData);
  return (
    <div className={styles.barChartContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          // width={0}
          // height={0}
          data={barchartData}
          margin={{
            top: 5,
            right: 30,
            left: 50,
            // bottom: 5,
          }}
          layout="vertical"
        >
          <XAxis
            type="number"
            dataKey="value"
            axisLine={false}
            display="none"
          />
          <YAxis type="category" dataKey="name" axisLine={false} />

          <Bar dataKey="value" fill="#8784D2" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
