import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import data from "../../data.json";

const Products = () => {
  const [meals, setMeals] = useState(data);
  const [cart, setCart] = useState([]);
  const isSideNavOpen = useSelector((state) => state.app.isSideNavOpen);
  const darkMode = useSelector((state) => state.app.darkMode);

  const handleAddToCart = (item) => {
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const itemInCart = cartData.find((cartItem) => cartItem.id === item.id);

    if (itemInCart) {
      toast.warn("Item is already in the cart.", {
        position: "bottom-center",
        theme: "dark",
      });
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      cartData = [...cartData, { ...item, quantity: 1 }];
      setCart([...cartData, { ...item, quantity: 1 }]);
      toast.success("Item Added to cart", {
        position: "bottom-center",
        theme: "dark",
      });
    }
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  return (
    <div
      style={{
        height: "100%",
        minHeight: "43rem",
        width: "100%",
        margin: "auto",
      }}
    >
      <Grid
        container
        sx={{
          width: "75%",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: isSideNavOpen
            ? "repeat(4, 1fr)"
            : "repeat(5, 1fr)",
          gap: "20px",
          "@media (max-width: 1200px)": {
            gridTemplateColumns: isSideNavOpen
              ? "repeat(2, 1fr)"
              : "repeat(3, 1fr)",
          },
          "@media (max-width: 800px)": {
            gridTemplateColumns: isSideNavOpen
              ? "repeat(1, 1fr)"
              : "repeat(2, 1fr)",
          },
          "@media (max-width: 600px)": {
            gridTemplateColumns: "repeat(1, 1fr)",
          },
        }}
      >
        {meals.length > 0 &&
          meals.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: 210,
                marginRight: 0.5,
                my: 5,
                cursor: "pointer",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
                "@media (max-width: 500px)": {
                  margin: "auto",
                  my: 5,
                },
              }}
            >
              <img
                style={{ width: 210, height: 118, borderRadius: "10px" }}
                alt={item.title}
                src={item.src}
              />

              <Box sx={{ pr: 2, ml: 1 }}>
                <Typography gutterBottom variant="body2" noWrap>
                  {item.title}
                </Typography>
                <Typography display="block" variant="caption">
                  {`₹ ${item.price}`}
                </Typography>
                <Typography
                  variant="caption"
                >
                  {`${item.views} • ${item.createdAt}`}
                </Typography>
              </Box>
              <Box sx={{ pt: 0.5 }}>
              </Box>
              <RouterLink
                to={`/dressespage/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <Button sx={{ fontSize: "13px" }} color="secondary">
                  Product Details
                </Button>
              </RouterLink>
              <Box sx={{ pr: 2, ml: 1 }}>
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          ))}
      </Grid>
      <ToastContainer />
    </div>
  );
};

export default Products;
