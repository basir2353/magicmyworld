import React from 'react';
import Navbar from './Components/Navbar/navar';
import Home from './Components/homeSection/home';
import ImageWithText from './Components/image withtextbox/imagewithTextbbox';
import './App.css';
import EndImage from './Components/endlogo/endimage';
import Footer from './Components/footer/footer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './Components/loginform/login';
import SignupForm from './Components/loginform/singup';
import Pricing from './Components/pricing/pricing';
import RedesignHouse from './Components/redesignhouse/redesignhouse';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path='pricing' element={<Pricing/>}> </Route>
          <Route path='/desiging' element={<RedesignHouse/>}></Route>
        </Routes>
        
        <Routes>
          <Route path="/" element={<ImageWithText />} />
        </Routes>
        
        
        <Routes>
          <Route path="/"  element={<EndImage />} />
          
        </Routes>
        <Routes>
        <Route path="/" element={<Footer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
