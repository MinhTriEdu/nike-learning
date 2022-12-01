import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HeaderMain from "./component/header/HeaderMain";
import FooterMain from "./component/footer/FooterMain";
import LoginPage from "./page/loginPage/LoginPage";
import RegisterPage from "./page/registerPage/RegisterPage"
import Details from "./page/detailPage/Details";
import StorePage from "./page/storePage/StorePage";
import CartPage from "./page/cartPage/CartPage";
function App() {
  return (
    <BrowserRouter>
      {/* <HeaderMain /> */}
      <Routes>
        <Route path={"/home"} element={<HomePage />} />
        <Route path={"/details/:id}"} element={<Details />} />
      </Routes>
      {/* <FooterMain /> */}
      {/* <Routes>
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage/>} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
