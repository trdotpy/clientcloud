import React from "react";
import BarChart from "../../Charts/BarChart";
import LineChart from "../../Charts/LineChart";
import PieChart from "../../Charts/PieChart";

export default function Charts() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <LineChart />
      <BarChart />
      <PieChart />
    </div>
  );
}
