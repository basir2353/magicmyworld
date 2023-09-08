import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-container">
        <div className="background-gradient">
          <p className="main-text">
            Already Generated More Than 1 Million House
          </p>
        </div>
        <h2 className="sub-heading">
          Transform Houses
          <br />
          in Seconds using ai
        </h2>
        <p className="sub-text">
          Capture a house Photo and see it Transform into 8+ themes instantly.
          <br />  Join
          Our Satisfied customers and revamp your space today!
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
