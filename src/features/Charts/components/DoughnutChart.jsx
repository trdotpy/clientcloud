import React from "react";
import { Chart, Title, Tooltip, ArcElement, Filler, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Card from "../../../containers/Cards/Card";

Chart.register(Title, Tooltip, ArcElement, Filler, Legend);

export default function DoughnutChart() {
  const labels = ["Europe", "United States", "Asia"];

  const data = {
    labels,
    datasets: [
      {
        label: "# of Orders",
        data: [122, 219, 30],
        backgroundColor: ["#FFAD05", "#6564DB", "#558564"],
        borderColor: ["#FFAD05", "#6564DB", "#558564"],
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
