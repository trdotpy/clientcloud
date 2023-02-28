import React from "react";
import Welcome from "./components/Welcome";
import Statistics from "./components/Statistics";
import LineChart from "../Charts/components/AreaChart";
import BarChart from "../Charts/components/BarChart";
import Article from "./components/Article";
import Projects from "./components/Projects";

export default function Overview() {
  return (
    <>
      <Welcome />
      <div className="my-8 grid grid-cols-1 gap-y-4">
        <Statistics />
        <Projects />
        <div className="">
          <Article />
        </div>
        <div className="grid grid-cols-1 gap-x-4 md:grid-cols-2">
          <LineChart />
          <BarChart />
        </div>
        {/* <Article /> */}
      </div>
    </>
  );
}
