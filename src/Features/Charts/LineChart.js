import React from "react";
import Chart from "react-apexcharts";
import ChartCard from "../../UI/Cards/ChartCard";
import OverviewCard from "../Overview/components/OverviewCard";

export default function LineChart() {
  const options = {
    legend: {
      show: false,
    },
    theme: {
      mode: "light",
    },

    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },

    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
      theme: "dark",
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
      labels: {
        style: {
          colors: "#A3AED0",
          fontSize: "12px",
          fontWeight: "500",
        },
      },
      type: "text",
      range: undefined,
      categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    },

    yaxis: {
      show: false,
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [50, 64, 48, 66, 49, 68],
      color: "#4318FF",
    },
    {
      name: "Profit",
      data: [30, 40, 24, 46, 20, 46],
      color: "#6AD2FF",
    },
  ];

  return (
    <OverviewCard>
      <ChartCard title="Sales" subtitle="Monthly">
        <Chart
          options={options}
          series={series}
          type="line"
          width="100%"
          height="100%"
        />
      </ChartCard>
    </OverviewCard>
  );
}
