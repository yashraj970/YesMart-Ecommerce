import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Products from "../../Pages/Products/Products";
import Cart from "../../Pages/Cart/Cart";
import Checkout from "../../Pages/Checkout/Checkout";
import Confirmation from "../../Pages/Checkout/Confirmation";
import PaymentCard from "../../Pages/Checkout/PaymentCard";
import ProductDetails from "../../Pages/Products/ProductDetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path='/dressespage/:id' element={<ProductDetails/>} ></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/success" element={<Confirmation />} />
      <Route path="/payment" element={<PaymentCard />} />
    </Routes>
  );
};

export default AllRoutes;
