import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ userData }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [roundBoxColor, setRoundBoxColor] = useState("");
  const [showLoggedInText, setShowLoggedInText] = useState(false);
  useEffect(() => {
    // Check if the user is logged in
    const savedUser = localStorage.getItem("user");
  
    if (userData && userData.given_name) {
      setUserName(userData.given_name);
      setIsLoggedIn(true);
      localStorage.setItem("user", JSON.stringify(userData)); // Save the user data to localStorage
    } else if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      setUserName(parsedUser.given_name || "A");
      setIsLoggedIn(true);
    } else {
      setUserName("Guest");
      setIsLoggedIn(false);
    }
  }, [userData]);
  
  useEffect(() => {
    setShowLoggedInText(isLoggedIn);
  }, [isLoggedIn]);
  

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={process.env.PUBLIC_URL + "/MMH_logo.png"} alt="Logo" />
      </Link>
      {isLoggedIn && (
        <>
          <Link to="/desiging" className="el1">
            Redesign
          </Link>
          <Link to="/pricing" className="el">
            Pricing
          </Link>
        </>
      )}

      <div
        className="navbar-login"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {showLoggedInText && (
          <div
            style={{
              backgroundColor: "black",
              borderRadius: "23px",
              marginRight: "2rem",
            }}
          >
            <div
              className="loggedInText"
              style={{ padding: "5px 19px", color: "white" }}
            >
              Your Credit : {3}
            </div>
          </div>
        )}
        {!isLoggedIn && (
          <Link to="/login" className="btn btn-login">
            Login
          </Link>
        )}
        {isLoggedIn && (
          <div
            className="user-round-box btn btn-login"
            style={{ backgroundColor: roundBoxColor }}
          >
            {userName ? userName.charAt(0).toUpperCase() : ""}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
