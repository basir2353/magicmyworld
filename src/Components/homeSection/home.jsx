import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <div className="background-gradient">
          <p className="main-text">
          ALREADY GENERATED MORE THAN 1 MILLION DESIGNS
          </p>
        </div>
        <h2 className="sub-heading" style={{textAlign:'center'}}>
          Transform Houses
          <br />
          in Seconds using ai
        </h2>
        <p className="sub-text" style={{textAlign:'center',fontFamily:'Poppins-Regular'}}>
          Capture a house Photo and see it Transform into 8+ themes instantly.
          Join
          Our Satisfied customers   <br /> and revamp your space today!
        </p>
      </div>
      <div className="button-container">
        <button className="log-button">Transform Your House</button>
      </div>

      <div className="top-right-section">
        <div className="round-background"></div>
      </div>
    </div>
  );
};

export default Home;
