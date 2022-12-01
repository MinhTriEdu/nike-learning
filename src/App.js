import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HeaderMain from "./Component/header/HeaderMain";
import FooterMain from "./Component/footer/FooterMain";
import StorePage from "./page/storePage/StorePage";
import CartPage from "./page/cartPage/CartPage";
function App() {
  return (
    <BrowserRouter>
    <HeaderMain/>
      <Routes>
       <Route path={"/"} element={<CartPage/>} /> 
      </Routes>
      <FooterMain/>
    </BrowserRouter>
  );
}

export default App;
