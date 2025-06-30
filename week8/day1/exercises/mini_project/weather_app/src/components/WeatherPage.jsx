import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function WeatherPage({ favorites, setFavorites }) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=nAp50rNKahgGBEswvNHKzzeXEYWeTLNM}`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  const addToFavorites = () => {
    if (!favorites.includes(city)) {
      const updated = [...favorites, city];
      setFavorites(updated);
      localStorage.setItem("favorites", JSON.stringify(updated));
    }
  };

  return (
    <>
      <TextField
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        fullWidth
      />
      <Button onClick={fetchWeather} variant="contained" sx={{ mt: 2 }}>
        Get Weather
      </Button>
      {error && <Typography color="error">{error}</Typography>}
      {weather && (
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h5">{weather.name}</Typography>
            <Typography>Temperature: {weather.main.temp} °C</Typography>
            <Typography>Condition: {weather.weather[0].description}</Typography>
            <Button onClick={addToFavorites} startIcon={<FavoriteIcon />}>
              Save to Favorites
            </Button>
          </CardContent>
        </Card>
      )}
    </>
  );
}
