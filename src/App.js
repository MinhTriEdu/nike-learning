import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/homePage/HomePage';
import Header from './Component/header/Header';
import Footer from './Component/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Header/>}/>
          {/* <Route path={"/"} element={<Footer/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
