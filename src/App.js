import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/homePage/HomePage";
import React from "react";
import HeaderMain from "./Component/header/HeaderMain";
import FooterMain from "./Component/footer/FooterMain";
import LoginPage from "./page/loginPage/LoginPage";
import RegisterPage from "./page/registerPage/RegisterPage"
import Details from "./page/detailPage/Details";
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
