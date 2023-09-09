import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [roundBoxColor, setRoundBoxColor] = useState('');

  useEffect(() => {
    // Check if the user is logged in based on your authentication logic
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setIsLoggedIn(true);
      setUserName(parsedUser.username);
      setRoundBoxColor(getRandomColor());
    } else {
      setIsLoggedIn(false);
      setUserName('');
      setRoundBoxColor('');
    }
  }, []);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  

  return (
    <nav className="navbar">
      <Link to='/' className="navbar-logo">
        <img src={process.env.PUBLIC_URL + '/MMH_logo.png'} alt="Logo" />
      </Link>
      {isLoggedIn && (
        <>
          <Link to='/pricing' className='el'>Pricing</Link>
          <Link to='/desiging' className='el1'>Redesign</Link>
        </>
      )}
      <div className="navbar-login">
        {isLoggedIn ? (
          <div
            className="user-round-box btn btn-login"
            style={{ backgroundColor: roundBoxColor }}
          >
            {userName.charAt(0).toUpperCase()}
          </div>
        ) : (
          <Link to="/login" className="btn btn-login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
