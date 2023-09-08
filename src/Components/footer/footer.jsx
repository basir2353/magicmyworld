import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="round-box"></div>
      
      <div className="copyright">Copyright © 2023 MagicMyHouse.com</div>
      <div className="login-link">
        <a href="/login">Login</a>
      </div>
    </footer>
  );
};

export default Footer;
