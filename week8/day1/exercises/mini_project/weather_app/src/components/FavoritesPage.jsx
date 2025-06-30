import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, List, ListItem } from "@mui/material";

const API_KEY = "nAp50rNKahgGBEswvNHKzzeXEYWeTLNM"; 

export default function FavoritesPage({ favorites }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all(
      favorites.map((city) =>
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        ).then((res) => res.json())
      )
    ).then(setData);
  }, [favorites]);

  return (
    <div>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Favorite Cities
      </Typography>
      <List>
        {data.map((item, index) => (
          <ListItem key={index} sx={{ display: "block" }}>
            <Card sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography>Temp: {item.main.temp} °C</Typography>
                <Typography>{item.weather[0].description}</Typography>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
