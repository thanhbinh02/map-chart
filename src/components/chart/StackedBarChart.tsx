import { FC } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

type Props = {
  name: string;
};

export const StackedBarChart: FC<Props> = ({ name }) => {
  const data = [
    {
      name: `${name} - Năm 2020`,
      uv: Math.floor(Math.random() * 100),
      pv: Math.floor(Math.random() * 100),
      amt: Math.floor(Math.random() * 100),
    },
    {
      name: `${name} - Năm 2021`,
      uv: Math.floor(Math.random() * 100),
      pv: Math.floor(Math.random() * 100),
      amt: Math.floor(Math.random() * 100),
    },
    {
      name: `${name} - Năm 2022`,
      uv: Math.floor(Math.random() * 100),
      pv: Math.floor(Math.random() * 100),
      amt: Math.floor(Math.random() * 100),
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        className="[&_.recharts-cartesian-axis]:hidden"
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="pv" stackId="a" fill="red" />
        <Bar dataKey="uv" stackId="a" fill="blue" />
      </BarChart>
    </ResponsiveContainer>
  );
};
