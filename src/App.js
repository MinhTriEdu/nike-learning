import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/homePage/HomePage";
import React from "react";
import HeaderMain from "./component/header/HeaderMain";
import FooterMain from "./component/footer/FooterMain";
function App() {
  return (
    <BrowserRouter>
    <HeaderMain/>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
      </Routes>
      <FooterMain/>
    </BrowserRouter>
  );
}

export default App;
