import React from "react";
import Chart from "react-apexcharts";
import ChartCard from "../../UI/Cards/ChartCard";
import OverviewCard from "../Overview/components/OverviewCard";

export default function RevenueBar() {
  const options = {
    chart: {
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
      theme: "dark",
      onDatasetHover: {
        style: {
          fontSize: "12px",
          fontFamily: undefined,
        },
      },
    },
    xaxis: {
      categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
      show: false,
      labels: {
        show: true,
        style: {
          colors: "#A3AED0",
          fontSize: "14px",
          fontWeight: "500",
        },
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      color: "black",
      labels: {
        show: false,
        style: {
          colors: "#A3AED0",
          fontSize: "14px",
          fontWeight: "500",
        },
      },
    },

    grid: {
      borderColor: "rgba(163, 174, 208, 0.3)",
      show: true,
      yaxis: {
        lines: {
          show: true,
          opacity: 0.5,
        },
      },
      row: {
        opacity: 0.5,
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    fill: {
      type: "solid",
      colors: ["#63B4D1", "#EA526F", "#E1E9F8"],
    },
    legend: {
      show: false,
    },
    colors: ["#63B4D1", "#EA526F", "#E1E9F8"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "20px",
      },
    },
  };

  const series = [
    {
      name: "PRODUCT A",
      data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
      color: "#EA526F",
    },
    {
      name: "PRODUCT B",
      data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
      color: "#63B4D1",
    },
    {
      name: "PRODUCT C",
      data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
      color: "#EFF4FB",
    },
  ];
  return (
    <OverviewCard>
      <ChartCard title="Annual" subtitle="Revenue">
        <Chart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height="100%"
        />
      </ChartCard>
    </OverviewCard>
  );
}
