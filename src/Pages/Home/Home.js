import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useSelector } from "react-redux";
import MainCarousel from "../../Components/Carousel/MainCarousel";

const Home = () => {
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.app.darkMode);

  return (
    <div>
      <MainCarousel />
    </div>
  );
};

export default Home;
