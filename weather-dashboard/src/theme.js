// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // or 'dark'
    primary: {
      main: "#2c3e50", // For example, dark blue
    },
    secondary: {
      main: "#f39c12", // Example accent color (orange)
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
});

export default theme;
