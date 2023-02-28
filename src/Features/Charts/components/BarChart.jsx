import React from "react";
import {
  Chart,
  Title,
  Tooltip,
  BarElement,
  CategoryScale,
  LinearScale,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Card from "../../../UI/Cards";

Chart.register(Title, Tooltip, BarElement, CategoryScale, LinearScale, Legend);

export default function BarChart() {
  const labels = ["Aug", "Sept", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

  const data = {
    labels,
    datasets: [
      {
        label: "Store 1",
        data: labels.map(() => {
          return Math.random() * 1000 + 500;
        }),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Store 2",
        data: labels.map(() => {
          return Math.random() * 1000 + 500;
        }),
        backgroundColor: "rgba(53, 162, 235, 1)",
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
    <Card title="Order Quantity">
      <Bar data={data} options={options} />
    </Card>
  );
}
