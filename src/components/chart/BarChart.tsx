import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  Title,
  Tooltip,
  LinearScale,
} from "chart.js";
import { FC } from "react";
import { Bar } from "react-chartjs-2";

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
    },
  },
};

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

type Props = {
  label: string;
  values: number[];
};

export const BarChart: FC<Props> = ({ label, values }) => {
  const data = {
    labels: [label],
    datasets: [
      {
        label: "Nông nghiệp",
        data: [values[0]],
        backgroundColor: "pink",
      },
      {
        label: "Công nghiệp",
        data: [values[1]],
        backgroundColor: "blue",
      },
      {
        label: "Lâm nghiệp",
        data: [values[2]],
        backgroundColor: "red",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
