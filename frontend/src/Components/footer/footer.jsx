import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="round-box"></div>
      <div className="round-box13 round-box-none"></div>
      <div className="round-box14 round-box-none"></div>
      <div className="round-box12 round-box-none"></div>
      
      <div className="copyright">Copyright © 2023 MagicMyHouse.com</div>
      <div className="login-link">
        <a href="/login">Login</a>
      </div>
    </footer>
  );
};

export default Footer;
