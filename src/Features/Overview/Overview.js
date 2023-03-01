import React from "react";
import RevenueBar from "../Charts/RevenueBar";
import PieChart from "../Charts/RegionPie";
import Article from "./components/Article";
import Statistics from "./components/Statistics";
import Welcome from "./components/Welcome";
import ClientArea from "../Charts/ClientArea";

export default function Overview() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4">
        <Welcome />
        <Statistics />
        <div className="grid grid-cols-1 gap-8">
          <RevenueBar />
          <PieChart />
          <div className="md:col-span-2">
            <ClientArea />
          </div>
        </div>
        {/* <Article /> */}
      </div>
    </div>
  );
}
