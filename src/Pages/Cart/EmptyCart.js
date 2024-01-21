import { Box, Button, Typography } from "@mui/material";
import React from "react";
import emptyCart from "../../assets/Cart.webp";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const EmptyCart = () => {
  const darkMode = useSelector((state) => state.app.darkMode);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        height: "43rem",
        bgcolor: darkMode ? "#101418" : "white",
      }}
    >
      <Box
        sx={{
          margin: "auto",
        }}
      >
        <img
          src={emptyCart}
          style={{
            width: "50%",
            marginBottom: "20px",
          }}
        />
        <Typography
          fontSize="20px"
          color={!darkMode ? "text.secondary" : "white"}
          sx={{ flex: 1 }}
        >
          Your cart is empty
        </Typography>
        <Typography
          color={!darkMode ? "text.secondary" : "white"}
          sx={{ flex: 1 }}
        >
          You can go to home page to view more Products
        </Typography>
        <Button
          variant="contained"
          color="error"
          endIcon={<ArrowForwardIcon />}
          onClick={() => navigate("/products")}
          sx={{mt:2}}
        >
          See Products
        </Button>
      </Box>
    </Box>
  );
};

export default EmptyCart;
