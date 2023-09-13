import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import "./loginform.css";
import jwt_decode from "jwt-decode";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();

  // Inside the handleLogin function in LoginForm.js
const handleLogin = () => {
  const savedUser = localStorage.getItem("user");

  if (savedUser) {
    const parsedUser = JSON.parse(savedUser);
    if (
      parsedUser.username === username &&
      parsedUser.password === password
    ) {
      console.log("Login successful");
      // Store the user information for simple login users
      localStorage.setItem("simpleUser", JSON.stringify(parsedUser));
      navigate("/");
      window.location.reload();
    } else {
      console.log("Invalid username or password");
    }
  } else {
    console.log("User not found");
  }
};

 // Inside the responseMessage function in LoginForm.js
const responseMessage = (response) => {
  const accessToken = response.credential;
  const user = jwt_decode(accessToken);

  // Store the user information for Google OAuth users
  localStorage.setItem("googleUser", JSON.stringify(user));

  console.log(user);
  navigate("/");
  window.location.reload();
};

  
  const errorMessage = (error) => {
    console.log(error, ":error");
  };

  return (
    <div className="container">
      <div
        className="row"
        style={{
          boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
          width: "40rem",
          height: "25rem",
          alignItems: "center",
          marginLeft: "12rem",
          borderRadius: "2rem",
        }}
      >
        <div className="col-md-6 offset-md-3 mt-5">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username or Email</label>
              <input
                type="text"
                required
                className="form-control"
                id="username"
                placeholder="Enter your username or email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                required
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary newb1"
              onClick={handleLogin}
            >
              Login
            </button>
            <Link
              to="/signup"
              type="button"
              className="btn btn-secondary  signup-button "
              onClick={() => {
                console.log("Redirect to signup");
              }}
            >
              Signup
            </Link>
          </form>

          {/* Google Login button */}
          <div className="mt-8">
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;