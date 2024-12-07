import React from "react";
import PieChartCardItem from "./PieChartCardItem";
import BarChartCardItem from "./BarChartCardItem";
import LineChartCardItem from "./LineChartCardItem";
import { IDiagramInfoDetail, IWritingTestInfo } from "@/type/chart";
import TableCardItem from "./TableCardItem";

enum DiagramItemCardType {
  PieChart = "Pie",
  LineChart = "Line",
  BarChart = "Bar",
  Table = "Table",
}

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

const getDiagramItemCard = (data: IDiagramInfoDetail) => {
  switch (data.chartType) {
    case DiagramItemCardType.PieChart:
      return <PieChartCardItem data={data} />;
    case DiagramItemCardType.LineChart:
      return <LineChartCardItem data={data} />;
    case DiagramItemCardType.BarChart:
      return (
        <BarChartCardItem data={data} stringToHexColor={stringToHexColor} />
      );
    case DiagramItemCardType.Table:
      return <TableCardItem data={data} />;
  }
};

const DiagramModal = (data?: IWritingTestInfo) => {
  return (
    <div className="ml-10 md:w-[80%] w-[50%] flex flex-col gap-2">
      {/* Add title and description */}
      <div className="font-bold text-xl">{data?.title}</div>
      <div className="opacity-70">{data?.instruction}</div>
      {data?.diagrams.map((item, index) => (
        <div key={index}>
          <div className="mt-4 text-sm font-semibold">{item.title}</div>
          {getDiagramItemCard(item)}
        </div>
      ))}
    </div>
  );
};

export default DiagramModal;
