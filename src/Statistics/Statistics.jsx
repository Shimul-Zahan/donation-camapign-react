import React, { useCallback, useEffect, useState } from "react";
import { PieChart, Pie, Cell, Legend, Label } from "recharts";
import { searchItemInLCS } from "../Utils/LocalStorage";

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  Legend,
  
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      style={{
        fontSize: '22px',
        fill: '#ffffff',
      }}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function PiChart() {
  const [donationNumber, setDonationNumber] = useState([]);
  useEffect(() => {
    const donation = searchItemInLCS();
    setDonationNumber(donation.length);
  }, [])
  
  console.log(donationNumber);

  const data = [
    { name: "Total Donation", value: (12 - donationNumber) },
    { name: "Your Donation", value: donationNumber },
  ];

  return (
    <div className="container mx-auto lg:h-[700px]">
      <div className="flex justify-center items-center h-full">
        <PieChart width={400} height={500}>
          <Pie
            data={data}
            cx={200}
            cy={250}
            labelLine={false}
            label={renderCustomizedLabel}
            dataKey="value"
            outerRadius={180}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}