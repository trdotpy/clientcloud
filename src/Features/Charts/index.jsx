import React from "react";
import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";

export default function Charts() {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div>
        <AreaChart />
      </div>
      <div>
        <BarChart />
      </div>
      <div>
        <DoughnutChart />
      </div>
      <div>
        <LineChart />
      </div>
    </div>
  );
}
