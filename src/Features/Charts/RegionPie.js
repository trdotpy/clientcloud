import React from "react";
import Chart from "react-apexcharts";
import ChartCard from "../../UI/Cards/ChartCard";
import OverviewCard from "../Overview/components/OverviewCard";

export default function RegionPie() {
  const options = {
    labels: ["United States", "Europe", "Asia"],
    colors: ["#EA526F", "#6564DB", "#E9ECF5"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#EA526F", "#6564DB", "#E9ECF5"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
    },
  };

  const series = [30000, 11000, 6000];
  return (
    <OverviewCard>
      <ChartCard title="Regional" subtitle="Sales">
        <Chart
          options={options}
          series={series}
          type="pie"
          width="100%"
          height="100%"
        />
      </ChartCard>
    </OverviewCard>
  );
}
