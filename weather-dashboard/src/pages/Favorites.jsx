// src/pages/Favorites.jsx
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("weatherFavorites")) || [];
    setFavorites(stored);
  }, []);

  const removeFavorite = (loc) => {
    const updated = favorites.filter((fav) => fav !== loc);
    setFavorites(updated);
    localStorage.setItem("weatherFavorites", JSON.stringify(updated));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Favorites
      </Typography>
      {favorites.length === 0 ? (
        <Typography>No favorites yet.</Typography>
      ) : (
        <List>
          {favorites.map((loc) => (
            <ListItem
              key={loc}
              secondaryAction={
                <IconButton edge="end" onClick={() => removeFavorite(loc)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={loc} />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default Favorites;
