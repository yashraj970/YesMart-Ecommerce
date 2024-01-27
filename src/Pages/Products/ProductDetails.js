import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { getSingleProduct } from "../../services/productServices";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    getSingleProduct(id)
      .then((data) => {
        console.log(data.data);
        setProduct(data.data[0]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, [id]);

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
        display: "flex",
        width: "100%",
        justifyContent: "center",
        height: "36rem",
      }}
    >
      {!loading ? (
        <Box
          sx={{
            height: "35rem",
            "@media (max-width: 600px)": {
              height: "36rem",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              mt: 4,
              "@media (max-width: 800px)": {
                flexDirection: "column",
                alignItems: "center",
              },
            }}
          >
            <img
              style={{ width: 250, height: 330, borderRadius: "10px" }}
              alt={product.name}
              src={product.image}
            />

            <Box
              sx={{
                pr: 2,
                ml: 1,
                "@media (max-width: 600px)": {
                  width: "300px",
                },
              }}
            >
              <Typography gutterBottom variant="body1" noWrap>
                {product.name}
              </Typography>
              <Typography display="block" variant="body2">
                Price: {`₹ ${product.price}`}
              </Typography>
              <Typography variant="body2">
                Details: {`${product.views} • ${product.createdAt}`}
              </Typography>
              <Typography variant="caption">
                {`Category • ${product.category}`}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ pr: 2, ml: 1, mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                "@media (max-width: 600px)": {
                  width: "300px",
                },
              }}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      ) : (
        <CircularProgress />
      )}
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
