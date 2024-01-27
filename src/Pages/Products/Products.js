import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Skeleton } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { getProducts } from "../../services/productServices";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
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

  const getData = () => {
    setLoading(true);
    getProducts()
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
            ? "repeat(2, 1fr)"
            : "repeat(3, 1fr)",
          gap: "20px",
          "@media (max-width: 1000px)": {
            gridTemplateColumns: isSideNavOpen
              ? "repeat(1, 1fr)"
              : "repeat(2, 1fr)",
          },
          "@media (max-width: 600px)": {
            gridTemplateColumns: "repeat(1, 1fr)",
          },
        }}
      >
        {loading
          ? [1, 2, 3, 4].map((item, index) => (
              <Box sx={{ my: 5 }} key={index}>
                <Skeleton variant="rectangular" width={250} height={330} />
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              </Box>
            ))
          : products.length > 0 &&
            products.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: 210,
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
                  style={{ width: 250, height: 330, borderRadius: "10px" }}
                  alt={item.name}
                  src={item.image}
                />

                <Box sx={{ pr: 2, ml: 1 }}>
                  <Typography gutterBottom variant="body2" noWrap>
                    {item.name}
                  </Typography>
                  <Typography display="block" variant="caption">
                    {`₹ ${item.price}`}
                  </Typography>
                  <Typography variant="caption">
                    {`Category • ${item.category}`}
                  </Typography>
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
