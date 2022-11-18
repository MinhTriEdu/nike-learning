import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './page/homePage/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/home"} element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
