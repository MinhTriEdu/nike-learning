import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HeaderMain from "./Component/header/HeaderMain";
import FooterMain from "./Component/footer/FooterMain";
import LoginPage from "./page/loginPage/LoginPage";
import RegisterPage from "./page/registerPage/RegisterPage"
import Details from "./page/detailPage/Details";
import HomePage from "./page/homePage/HomePage";
import StorePage from "./page/storePage";
import CartPage from "./page/cartPage/CartPage";
function App() {
  return (
    <BrowserRouter>
      <HeaderMain/>
      <StorePage/>
      <FooterMain/>
    </BrowserRouter>
  );
}

export default App;
