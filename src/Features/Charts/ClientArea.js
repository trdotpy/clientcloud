import React from "react";
import Chart from "react-apexcharts";
import ChartCard from "../../UI/Cards/ChartCard";
import OverviewCard from "../Overview/components/OverviewCard";

export default function ClientArea() {
  const options = {
    legend: {
      show: false,
    },
    theme: {
      mode: "light",
    },

    chart: {
      type: "area",
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
      data: [120, 190, 510, 1600, 900, 2100],
      color: "#63B4D1",
    },
  ];

  return (
    <OverviewCard>
      <ChartCard title="Annual" subtitle="Clients">
        <Chart
          options={options}
          series={series}
          type="area"
          width="100%"
          height="100%"
        />
      </ChartCard>
    </OverviewCard>
  );
}
