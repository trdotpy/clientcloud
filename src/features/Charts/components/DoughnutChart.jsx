import React from "react";
import { Chart, Title, Tooltip, ArcElement, Filler, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Card from "../../../containers/Cards/Card";

Chart.register(Title, Tooltip, ArcElement, Filler, Legend);

export default function DoughnutChart() {
  const labels = [
    "Europe",
    "United States",
    "Asia",
    "Furniture",
    "Watches",
    "Apparel",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "# of Orders",
        data: [122, 219, 30, 51, 82, 13],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],

        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    //
    <Card title={"Orders by Region"}>
      <Doughnut data={data} options={options} />
    </Card>
  );
}
