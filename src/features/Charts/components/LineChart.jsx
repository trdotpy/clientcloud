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
import Card from "../../../containers/Cards/Card";

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
        fill: true,
        label: "Active Users",
        data: labels.map(() => {
          return Math.random() * 1000 + 30000;
        }),
        borderColor: "#7dd3fc",
        backgroundColor: "#0ea5e9",
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
      <Card title={"Active Users (Thousands)"}>
        <Line data={data} options={options} />
      </Card>
    </>
  );
}
