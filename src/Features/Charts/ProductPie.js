import React from "react";
import Chart from "react-apexcharts";
import ChartCard from "../../UI/Cards/ChartCard";
import OverviewCard from "../Overview/components/OverviewCard";

export default function ProductPie() {
  const options = {
    labels: ["B2B", "DTC", "Other"],
    colors: ["#6564DB", "#EA526F", "#E9ECF5"],
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
      colors: ["#6564DB", "#EA526F", "#E9ECF5"],
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

  const series = [80000, 50000, 21000];
  return (
    <OverviewCard>
      <ChartCard title="Product" subtitle="Sales">
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
