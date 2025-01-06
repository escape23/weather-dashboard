// src/components/ForecastChart.jsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Typography } from "@mui/material";

const ForecastChart = ({ data }) => {
  if (!data || !data.list) return null;

  const chartData = data.list.map((item) => ({
    time: item.dt_txt,
    temperature: item.main.temp,
  }));

  return (
    <>
      <Typography variant="h6" gutterBottom>
        5-Day Forecast
      </Typography>
      <LineChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      </LineChart>
    </>
  );
};

export default ForecastChart;
