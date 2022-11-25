import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/homePage/HomePage";
import React from "react";
import HeaderMain from "./Component/header/HeaderMain";
import FooterMain from "./Component/footer/FooterMain";
import StorePage from "./page/storePage/StorePage";
function App() {
  return (
    <BrowserRouter>
    <HeaderMain/>
      <Routes>
      <Route path={"/"} element={<StorePage />} />
      </Routes>
      <FooterMain/>
    </BrowserRouter>
  );
}

export default App;
