import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WeatherPage from "./components/WeatherPage";
import FavoritesPage from "./components/FavoritesPage";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
} from "@mui/material";

export default function App() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Weather App
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Weather
          </Button>
          <Button color="inherit" component={Link} to="/favorites">
            Favorites
          </Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 3 }}>
        <Routes>
          <Route
            path="/"
            element={<WeatherPage favorites={favorites} setFavorites={setFavorites} />}
          />
          <Route
            path="/favorites"
            element={<FavoritesPage favorites={favorites} />}
          />
        </Routes>
      </Container>
    </Router>
  );
}
