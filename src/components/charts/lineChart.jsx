import { Line } from "react-chartjs-2";
import { Chart as Chartjs } from "chart.js/auto";

const LineChart = ({ data }) => {
  return <Line data={data} />;
};

export default LineChart;
