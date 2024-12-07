import { IDiagramInfoDetail } from "@/type/chart";
import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartCardItem = ({
  data,
  stringToHexColor,
}: {
  data: IDiagramInfoDetail;
  stringToHexColor: Function;
}) => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer>
        <BarChart
          width={500}
          height={300}
          data={data.data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey={data.data[0].hasOwnProperty("name") ? "name" : data.xAxis}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          {data.dataKey.map((item, index) => (
            <Bar
              key={`bar-item-${index}`}
              dataKey={data.dataKey[index]}
              fill={stringToHexColor(item)}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartCardItem;
