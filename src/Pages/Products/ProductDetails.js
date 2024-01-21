import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data.json";
import { Box, CircularProgress, Typography } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = data.find(
      (product) => product.id === parseInt(id, 10)
    );

    setProduct(selectedProduct);
  }, [id]);

  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      {product ? (
        <Box sx={{ display: "flex", gap: "30px",mt:4 }}>
          <img
            style={{ width: 210, height: 118, borderRadius: "10px" }}
            alt={product.title}
            src={product.src}
          />

          <Box sx={{ pr: 2, ml: 1 }}>
            <Typography gutterBottom variant="body1" noWrap>
              {product.title}
            </Typography>
            <Typography display="block" variant="body2">
              Price: {`₹ ${product.price}`}
            </Typography>
            <Typography variant="body2" >
             Details: {`${product.views} • ${product.createdAt}`}
            </Typography>
          </Box>
        </Box>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default ProductDetails;
