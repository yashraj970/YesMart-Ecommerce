import { Box, CircularProgress } from "@mui/material";
import React from "react";

const CircularLoading = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <CircularProgress />
    </Box>
  );
};

export default CircularLoading;
