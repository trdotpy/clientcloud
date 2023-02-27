import React from "react";
import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import LineChart from "./components/LineChart";

export default function Charts() {
  return (
    <div>
      <div className="my-8 grid grid-cols-1 gap-y-4">
        <AreaChart />
        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
          <BarChart />
          <LineChart />
        </div>
        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-3">
          <DoughnutChart />
          <DoughnutChart />
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}
