import React from "react";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";

export default function Charts() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <LineChart />
        <div>
          <BarChart />
        </div>
        <div>
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}
