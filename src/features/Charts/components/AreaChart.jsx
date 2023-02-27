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
import Card from "../../../UI/Cards";

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

export default function AreaChart() {
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
        backgroundColor: "rgba(200, 247, 197, 0.5)",
        borderColor: "#49A078",
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
      <Card title={"Active Users"}>
        <Line data={data} options={options} />
      </Card>
    </>
  );
}
