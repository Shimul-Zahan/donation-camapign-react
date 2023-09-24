import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Radar } from "recharts";
import { searchItemInLCS } from "../Utils/LocalStorage";

// const [donateItem, setDonateItem] = useState();

const donation = searchItemInLCS();

const data = [
  { name: "Total", value: 12 },
  { name: "Donation", value: donation.length },
];

const COLORS = ["#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  Legend,
  Radar,
})=> {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PiChart() {

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <PieChart width={600} height={600}>
          <Pie
            data={data}
            cx={300}
            cy={300}
            labelLine={false}
            label={renderCustomizedLabel}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Legend>
            
          </Legend>
        </PieChart>
      </div>
    </div>
  );
}