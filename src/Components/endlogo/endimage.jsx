import React from 'react';
import './EndImage.css';

const EndImage = () => {
  return (
    <div className="end-image-container">
      <img
        src={process.env.PUBLIC_URL + '/MMH_logo.png'}
        alt="Logo"
        className="center-logo"
        
      />
      <p className="lorem-text">Capture a house photo and see it transform into 8+ themes instantly. Join our satisfied<br/>
customers and revamp your space today!</p>
    </div>
  );
};

export default EndImage;
