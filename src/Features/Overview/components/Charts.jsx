import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

export default function Charts() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <LineChart />
      <BarChart />
      <PieChart />
    </div>
  );
}
