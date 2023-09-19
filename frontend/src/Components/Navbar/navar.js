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
  const [showLogoutButton, setShowLogoutButton] = useState(false); // New state variable

  useEffect(() => {
    const googleUser = localStorage.getItem("googleUser");
    const simpleUser = localStorage.getItem("simpleUser");

    if (googleUser || simpleUser) {
      setShowLogoutButton(true);
    } else {
      setShowLogoutButton(false);
    }

    if (googleUser) {
      const parsedGoogleUser = JSON.parse(googleUser);
      setUserName(parsedGoogleUser.given_name);
      setIsLoggedIn(true);
      setRoundBoxColor("color-for-google-users");
    } else if (simpleUser) {
      const parsedSimpleUser = JSON.parse(simpleUser);
      setUserName(parsedSimpleUser.username);
      setIsLoggedIn(true);
      setRoundBoxColor("color-for-simple-login-users");
    } else {
      setIsLoggedIn(false);
    }
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

  const handleLogout = () => {
    localStorage.removeItem("googleUser");
    localStorage.removeItem("simpleUser");
    setIsLoggedIn(false);
    setCredit(3); // Reset credit to 3
    setRoundBoxColor(""); // Reset round box color
    setShowLogoutButton(false); // Hide the logout button
    alert("You Logged Out");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gray-900 p-4">
    <Link to="/" className="navbar-logo">
      <img
        src={process.env.PUBLIC_URL + "/MMH_logo.png"}
        alt="Logo"
        className="max-h-10 ml-2 ml-md-6 max-h-md-8 md:ml-0"
      />
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
 <i class="fa-solid fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {isLoggedIn && (
          <>
            <li className="nav-item">
              <Link to="/desiging"  className="nav-link nav-link1">
                Redesign
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/pricing" className="nav-link nav-link1">
                Pricing
              </Link>
            </li>
          </>
        )}
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          {showLoggedInText && (
            <div className="logedtext">
              <div className="loggedInText px-4 py-2 text-white">
                Your Credit: {credit}
              </div>
            </div>
          )}
        </li>
        <li className="nav-item">
          {!isLoggedIn && (
            <Link to="/login" className="btn btn-login nav-link">
              LOG IN
            </Link>
          )}
          {isLoggedIn && (
            <>
              <button
                className={`user-round-box btn btn-login ${roundBoxColor}`}
                style={{ backgroundColor: roundBoxColor }}
                onClick={handleLogout}
              >
                {userName ? userName.charAt(0).toUpperCase() : ""}
              </button>
              {showLogoutButton && (
                <button className={`user-round-box btn btn-login ${roundBoxColor}`} onClick={handleLogout}>
                  Logout
                </button>
              )}
            </>
          )}
        </li>
      </ul>
    </div>
  </nav>
  );
};

export default Navbar;
