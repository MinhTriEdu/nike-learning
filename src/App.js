import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HeaderMain from "./Component/header/HeaderMain";
import FooterMain from "./Component/footer/FooterMain";
import LoginPage from "./page/loginPage/LoginPage";
import RegisterPage from "./page/registerPage/RegisterPage"
import Details from "./page/detailPage/Details";
import HomePage from "./page/homePage/HomePage";
import StorePage from "./page/storePage/StorePage";
import CartPage from "./page/cartPage/CartPage";
function App() {
  return (
    <BrowserRouter>
      <HeaderMain/>
      <CartPage/>
      <FooterMain/>
      {/* <Routes>
        <Route path={"/home"} element={<HomePage/>} />
        <Route path={"/details/:id}"} element={<Details />} />
      </Routes> */}
      {/* <Routes>
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage/>} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
