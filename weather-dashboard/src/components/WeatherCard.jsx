// src/components/WeatherCard.jsx
import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const WeatherCard = ({ data }) => {
  if (!data) return null;

  const { name, main, weather } = data;
  const temperature = main?.temp;
  const condition = weather?.[0]?.description;
  const iconCode = weather?.[0]?.icon;

  return (
    <Card sx={{ maxWidth: 600, margin: "0 auto" }}>
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="body1">Temperature: {temperature}°C</Typography>
        <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
          Condition: {condition}
        </Typography>
      </CardContent>
      {iconCode && (
        <CardMedia
          component="img"
          image={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
          alt={condition}
          sx={{ width: 100, mx: "auto", mb: 2 }}
        />
      )}
    </Card>
  );
};

export default WeatherCard;
