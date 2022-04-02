import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from '../Landing/Landing';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className="wrapper">
      <NavBar/>
      <BrowserRouter className="pagebody">
        <Routes>
            <Route exact path = "/" element={<Landing/>}/>
        </Routes>        
      </BrowserRouter>
      <Footer className="footer"/>
    </div>
  );
}

export default App;