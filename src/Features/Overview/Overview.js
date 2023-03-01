import React from "react";
import BarChart from "../Charts/BarChart";
import LineChart from "../Charts/LineChart";
import PieChart from "../Charts/PieChart";

export default function Overview() {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 gap-4">
          <BarChart />
          <PieChart />
          <div className="md:col-span-2">
            <LineChart />
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </>
  );
}
