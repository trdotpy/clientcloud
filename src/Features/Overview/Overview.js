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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <RevenueBar />
          <PieChart />
          <Article />

          <div className="md:col-span-1 lg:col-span-3">
            <ClientArea />
          </div>
        </div>
        {/* <Article /> */}
      </div>
    </div>
  );
}
