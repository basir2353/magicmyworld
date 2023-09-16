import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [roundBoxColor, setRoundBoxColor] = useState("");
  const [showLoggedInText, setShowLoggedInText] = useState(false);
  const [credit, setCredit] = useState(3); // Assuming an initial credit of 3
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-gray p-4 text-black">
        <Link to="/" className="navbar-brand">
          <img
            src={process.env.PUBLIC_URL + "/MMH_logo.png"}
            alt="Logo"
            className="img-fluid max-h-12 ml-6 ml-md-0"
            style={{ maxWidth: "100px" }}
          />
        </Link>
        <button
          className="navbar-toggler bg-black custom-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav">
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link to="/designing" className="nav-link" style={{ color: "black" }}>
                    Redesign
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/pricing" className="nav-link" style={{ color: "#861b82" }}>
                    Pricing
                  </Link>
                </li>
            
              </>
            )}
          </ul>
          <div className="navbar-login ml-auto">
            {showLoggedInText && (
              <div className="loggedtext">
                <div className="loggedInText px-4 py-2 text-white">
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
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
