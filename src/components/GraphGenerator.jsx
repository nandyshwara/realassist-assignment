import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function BurglaryChart({ data }) {
//   const years = data.map((entry) => entry.year);
//   const burglaries = data.map((entry) => entry.arrests);

  return (
    <div className="bg-white py-5 px-2 rounded-xl w-[750px] h-[290px]">
      <ResponsiveContainer width="100%" height={250} className="">
        <LineChart
          width={700}
          height={250}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid horizontal={true} vertical={false} />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip/>
          <Line
            connectNulls = {false}
            type="linear"
            dataKey="arrests"
            stroke="#1463FF"
            fill="#1463FF"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
