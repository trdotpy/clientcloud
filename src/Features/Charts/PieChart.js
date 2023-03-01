import React from "react";
import Chart from "react-apexcharts";
import ChartCard from "../../UI/Cards/ChartCard";
import OverviewCard from "../Overview/components/OverviewCard";

export default function PieChart() {
  const options = {
    labels: ["Your files", "System", "Empty"],
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
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
      colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
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

  const series = [63, 25, 12];
  return (
    <OverviewCard>
      <ChartCard title="Customers" subtitle="Regional">
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
