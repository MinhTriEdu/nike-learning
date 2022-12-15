import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}/>
          <Route path="/store/*" element={<StorePage></StorePage>}/>
          <Route path="/store/:search/:sort_info" element={<StorePage></StorePage>}/>
          <Route path="/cart" element={<CartPage></CartPage>}/>
          <Route path='*' element={<HomePage/>} />
        </Routes>
      <FooterMain/>
    </BrowserRouter>
  );
}

export default App;
