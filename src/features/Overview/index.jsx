import React from "react";
import Header from "./components/Header";
import Statistics from "./components/Statistics";
import LineChart from "../Charts/components/LineChart";
import BarChart from "../Charts/components/BarChart";
import DoughnutChart from "../Charts/components/DoughnutChart";
import AdCampaigns from "./components/AdCampaigns";
import Traffic from "./components/Traffic";
import Carousel from "./components/Carousel";

export default function Overview() {
  return (
    <>
      <Header />
      <div className="my-8 grid grid-cols-1 gap-y-4">
        <Statistics />
        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
          <LineChart />
          <BarChart />
        </div>
        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
          <AdCampaigns />
          <DoughnutChart />
        </div>
      </div>
    </>
  );
}
