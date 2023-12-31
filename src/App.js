import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { ProductProvider } from './context/ProductContext';
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
  Address,
  Protected
} from "./components";
const App = () => {
  // const { user, login } = useUserContext();

  return (
    <>

      <UserProvider>
      <ProductProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/product/:id" element={<Protected Component={ProductPage} />} />
            <Route path="/checkout" element={<Protected Component={Checkout}/>} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="/returnandorder" element={<Protected Component={ReturnAndOrder}/>} />
            <Route path="/address" element={<Protected Component={Address}/>} />
          </Routes>
        </BrowserRouter>
        </ProductProvider>
      </UserProvider>
    </>
  );
};

export default App;
