import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.app.darkMode);

  return (
    <div
      style={{
        height: "43rem",
        width: "100%",
        backgroundColor: darkMode ? "#101418" : "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography color="text.secondary" sx={{ fontSize: "21px" }}>
            Best offers for you
          </Typography>
          <Button
            variant="contained"
            color="error"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate("/products")}
          >
            See Products
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
