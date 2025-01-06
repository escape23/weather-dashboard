// src/pages/Home.jsx
import React, { useState } from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastChart from "../components/ForecastChart";
import { fetchCurrentWeather, fetchForecast } from "../services/weatherAPI";

const Home = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async (location) => {
    try {
      setError("");
      const current = await fetchCurrentWeather(location);
      setWeatherData(current);
      const forecast = await fetchForecast(location);
      setForecastData(forecast);
    } catch (err) {
      setError("Could not fetch weather data.");
      console.error(err);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Check the Weather
      </Typography>

      <Paper sx={{ p: 2, mb: 2 }}>
        <SearchBar onSearch={handleSearch} />
        {error && (
          <Typography variant="body1" color="error">
            {error}
          </Typography>
        )}
      </Paper>

      {weatherData && (
        <Box sx={{ mb: 3 }}>
          <WeatherCard data={weatherData} />
        </Box>
      )}

      {forecastData && (
        <Paper sx={{ p: 2 }}>
          <ForecastChart data={forecastData} />
        </Paper>
      )}
    </Container>
  );
};

export default Home;
