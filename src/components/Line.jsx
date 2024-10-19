import { Line } from "react-chartjs-2";
import {
  Chart as chartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

chartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


export const LineGraph = ({data, options}) => {
  

  return <Line options={options} data={data} />;
};
