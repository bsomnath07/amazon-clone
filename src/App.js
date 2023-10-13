import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider, useUserContext } from "./context/UserContext";

import {
  HomePage,
  NavBar,
  Checkout,
  SearchResults,
  ProductPage,
  Payment,
  OrderConfirmation,
  Login,
  Registration,
  ReturnAndOrder,
  Address
} from "./components";
const App = () => {
  const { user, login } = useUserContext();

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/returnandorder" element={<ReturnAndOrder/>} />
            <Route path="/address" element={<Address/>} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
};

export default App;
