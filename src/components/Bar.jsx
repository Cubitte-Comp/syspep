import React from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as chartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

chartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = ({ options, data }) => {
  return <Bar options={options} data={data} />;
};
