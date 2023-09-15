import React from 'react';
import './ImageWithText.css';

const ImageWithText = () => {
  return (
    <div className="image-text-container">
      <img src={process.env.PUBLIC_URL + '/imagewihtextbox.png'} alt="Image" className="center-image" />
      
      <div className="round-box1"></div>
    </div>
  );
};

export default ImageWithText;
