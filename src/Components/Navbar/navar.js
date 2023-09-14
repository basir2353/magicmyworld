import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [roundBoxColor, setRoundBoxColor] = useState("");
  const [showLoggedInText, setShowLoggedInText] = useState(false);
  const [credit, setCredit] = useState(3); // Assuming an initial credit of 3
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
 
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 3000);
  }, []);

  useEffect(() => {
    setShowLoggedInText(isLoggedIn);
  }, [isLoggedIn]);

  useEffect(() => {
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  function handleMessage(event) {
    if (event.data === "payment_successful") {
      // Update the user's credit to "Unlimited" when payment is successful
      setCredit("Unlimited");
      setShowLoggedInText(true);
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    useEffect(() => {
      const googleUser = localStorage.getItem("googleUser");
      if (googleUser) {
        const parsedGoogleUser = JSON.parse(googleUser);
        setUserName(parsedGoogleUser.given_name || "Guest");
        setIsLoggedIn(true);
        setRoundBoxColor("color-for-google-users");
      } else {
        const simpleUser = localStorage.getItem("simpleUser");
        if (simpleUser) {
          const parsedSimpleUser = JSON.parse(simpleUser);
          setUserName(parsedSimpleUser.username || "Guest");
          setIsLoggedIn(true);
          setRoundBoxColor("color-for-simple-login-users");
        } else {
          setUserName("Guest");
          setIsLoggedIn(false);
        }
      }
    }, []);

    useEffect(() => {
      setShowLoggedInText(isLoggedIn);
    }, [isLoggedIn]);

    useEffect(() => {
      window.addEventListener('message', handleMessage);

      return () => {
        window.removeEventListener('message', handleMessage);
      };
    }, []);

    function handleMessage(event) {
      if (event.data === 'payment_successful') {
        // Update the user's credit to "Unlimited" when payment is successful
        setCredit("Unlimited");
        setShowLoggedInText(true);
      }
    }

    return (
      <nav className="navbar bg-gray-900 p-4">
        <Link to="/" className="navbar-logo">
          <img src={process.env.PUBLIC_URL + "/MMH_logo.png"} alt="Logo"  className="max-h-10 ml-6 md:max-h-8 md:ml-0" />
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
          className="navbar-login flex items-center"
         
        >
          {showLoggedInText && (
            <div className="logedtext"
            >
              <div
                className="loggedInText px-4 py-2 text-white"
              
              >
                Your Credit: {credit}
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
              className={`user-round-box btn btn-login ${roundBoxColor}`}zzz
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
