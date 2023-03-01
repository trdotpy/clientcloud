import React from "react";
import Chart from "react-apexcharts";
import ChartCard from "../../UI/Cards/ChartCard";
import OverviewCard from "../../UI/Cards/OverviewCard";


export default function TeamRange() {
  const options = {
    legend: {
      show: false,
    },
    theme: {
      mode: "light",
    },

    chart: {
      type: "rangeBar",
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
      data: [
        {
          x: "Team A",
          y: [1, 5],
        },
        {
          x: "Team B",
          y: [4, 6],
        },
        {
          x: "Team C",
          y: [5, 8],
        },
        {
          x: "Team D",
          y: [3, 11],
        },
      ],
    },
    {
      data: [
        {
          x: "Team A",
          y: [2, 6],
        },
        {
          x: "Team B",
          y: [1, 3],
        },
        {
          x: "Team C",
          y: [7, 8],
        },
        {
          x: "Team D",
          y: [5, 9],
        },
      ],
    },
  ];

  return (
    <OverviewCard>
      <ChartCard title="Quarter" subtitle="Performance">
        <Chart
          options={options}
          series={series}
          type="rangeBar"
          width="100%"
          height="100%"
        />
      </ChartCard>
    </OverviewCard>
  );
}
