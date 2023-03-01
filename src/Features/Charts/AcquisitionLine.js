import React from "react";
import Chart from "react-apexcharts";
import ChartCard from "../../UI/Cards/ChartCard";
import OverviewCard from "../../UI/Cards/OverviewCard";

export default function AcquisitionLine() {
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
      color: "#63B4D1",
    },
    {
      name: "Profit",
      data: [30, 40, 24, 46, 20, 46],
      color: "#EA526F",
    },
  ];

  return (
    <OverviewCard>
      <ChartCard title="Annual" subtitle="Acquisitions">
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
