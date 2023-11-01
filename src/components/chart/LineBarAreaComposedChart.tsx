import { FC } from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

type Props = {
  name: string;
};

const LineBarAreaComposedChart: FC<Props> = ({ name }) => {
  const data = [
    {
      name: "Page A",
      uv: Math.floor(Math.random() * 100),
      pv: Math.floor(Math.random() * 100),
      amt: Math.floor(Math.random() * 100),
      cnt: Math.floor(Math.random() * 100),
    },
    {
      name: "Page B",
      uv: Math.floor(Math.random() * 100),
      pv: Math.floor(Math.random() * 100),
      amt: Math.floor(Math.random() * 100),
      cnt: Math.floor(Math.random() * 100),
    },
    {
      name: "Page C",
      uv: Math.floor(Math.random() * 100),
      pv: Math.floor(Math.random() * 100),
      amt: Math.floor(Math.random() * 100),
      cnt: Math.floor(Math.random() * 100),
    },
    {
      name: "Page D",
      uv: Math.floor(Math.random() * 100),
      pv: Math.floor(Math.random() * 100),
      amt: Math.floor(Math.random() * 100),
      cnt: Math.floor(Math.random() * 100),
    },
    {
      name: "Page E",
      uv: Math.floor(Math.random() * 100),
      pv: Math.floor(Math.random() * 100),
      amt: Math.floor(Math.random() * 100),
      cnt: Math.floor(Math.random() * 100),
    },
    {
      name: "Page F",
      uv: Math.floor(Math.random() * 100),
      pv: Math.floor(Math.random() * 100),
      amt: Math.floor(Math.random() * 100),
      cnt: Math.floor(Math.random() * 100),
    },
  ];

  return (
    <div>
      <p className="text-center">{name}</p>
      <div className="w-[800px] h-[400px] flex items-center">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type="monotone"
              dataKey="amt"
              fill="#8884d8"
              stroke="#8884d8"
            />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            <Scatter dataKey="cnt" fill="red" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineBarAreaComposedChart;
