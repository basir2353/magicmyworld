import React, { useState } from 'react';
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

import '@fontsource/poppins';

function App() {
  const [userCredit, setUserCredit] = useState(3); // Initial credit count

  // Function to update user's credit
  const updateUserCredit = (newCredit) => {
    setUserCredit(newCredit);
  };
  const [credits, setCredits] = useState("unlimited"); // Initialize credits state

  // Function to update credits
  const updateCredits = (newCredits) => {
    setCredits(newCredits);
  };
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar userCredit={userCredit}/>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path='pricing' element={<Pricing updateUserCredit={updateUserCredit} updateCredits={updateCredits} />}> </Route>
          <Route path='/desiging' element={<RedesignHouse  credits={credits} />}></Route>
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
