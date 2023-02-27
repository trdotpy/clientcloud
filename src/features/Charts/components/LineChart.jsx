import React from "react";
import {
  Chart,
  Title,
  Tooltip,
  LineElement,
  Filler,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Card from "../../../layout/Cards/Card";

Chart.register(
  Title,
  Tooltip,
  LineElement,
  Filler,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend
);

export default function LineChart() {
  const labels = ["Aug", "Sept", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];

  const data = {
    labels,
    datasets: [
      {
        fill: false,
        label: "Company A",
        data: labels.map(() => {
          return Math.random() * 1000 + 30000;
        }),
        backgroundColor: "rgba(54, 162, 235, 0.8)",
        borderColor: "rgba(54, 162, 235, 0.8)",
        cubicInterpolationMode: "monotone",
        lineTension: 0.8,
      },
      {
        fill: false,
        label: "Company B",
        data: labels.map(() => {
          return Math.random() * 1000 + 25000;
        }),
        backgroundColor: "rgba(255, 99, 132, 0.8)",
        borderColor: "rgba(255, 99, 132, 0.8)",
        cubicInterpolationMode: "monotone",
        lineTension: 0.8,
      },
      {
        fill: false,
        label: "Company C",
        data: labels.map(() => {
          return Math.random() * 1000 + 20000;
        }),
        backgroundColor: "rgba(255, 206, 86, 1)",
        borderColor: "rgba(255, 206, 86, 1)",
        cubicInterpolationMode: "monotone",
        lineTension: 0.8,
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
    <>
      <Card title={"Client Revenue"}>
        <Line data={data} options={options} />
      </Card>
    </>
  );
}
