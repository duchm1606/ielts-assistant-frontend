import { IDiagramInfoDetail } from "@/type/chart";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const stringToHexColor = (str: string) => {
  // Step 1: Hash the string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Step 2: Convert to hex
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).substr(-2);
  }

  return color;
};

const LineChartCardItem = ({ data }: { data: IDiagramInfoDetail }) => {
  return (
    <div className="w-[50%] h-[300px] flex justify-center items-center">
      <ResponsiveContainer>
        <LineChart data={data.data}>
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis
            dataKey={data.data[0].hasOwnProperty("name") ? "name" : data.xAxis}
            name={data.dataKey[0]}
            padding={{ left: 30, right: 30 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          {data.dataKey.map((item, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={item}
              stroke={stringToHexColor(item)}
              activeDot={{ r: 5 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartCardItem;
