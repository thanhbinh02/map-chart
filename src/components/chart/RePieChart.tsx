import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RePieChart = () => {
  const data = [
    { name: "Group A", value: Math.floor(Math.random() * 100) },
    { name: "Group B", value: Math.floor(Math.random() * 100) },
    { name: "Group C", value: Math.floor(Math.random() * 100) },
    { name: "Group D", value: Math.floor(Math.random() * 100) },
  ];

  return (
    <ResponsiveContainer width={70} height={70}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={25}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default RePieChart;
