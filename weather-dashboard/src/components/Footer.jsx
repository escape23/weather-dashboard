// src/components/Footer.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        backgroundColor: "primary.main",
        color: "white",
        mt: "auto",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} My Weather Dashboard
      </Typography>
    </Box>
  );
};

export default Footer;
