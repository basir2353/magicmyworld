import React from 'react';
import './EndImage.css';

const EndImage = () => {
  return (

    <div className="container">
      <div className="row">
        <div className="col-xl-7 m-auto col-lg-8  col-md-12 col-sm-12 col-xs-12">
          <div className="end-image-container mb-4">
            <img
              src={process.env.PUBLIC_URL + '/MMH_logo.png'}
              alt="Logo"
              className="center-logo"

            />
            <p className="lorem-text">Capture a house photo and see it transform into 8+ themes instantly. Join our satisfied
              customers and <br />revamp your space today!</p>
          </div>
        </div>
      </div>
    </div>



  );
};

export default EndImage;
