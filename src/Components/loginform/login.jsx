import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginform.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      const parsedUser = JSON.parse(savedUser);
      if (parsedUser.username === username && parsedUser.password === password) {
        console.log("Login successful");

        // Refresh the tab
        navigate('/')
        window.location.reload();

        // You can also navigate to a different route after login if needed
        // navigate("/");
      } else {
        console.log("Invalid username or password");
      }
    } else {
      console.log("User not found");
    }
  };

  return (
    <div className="container">
      <div className="row" style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)', width: "40rem", height: "25rem", alignItems: 'center', marginLeft: '12rem' }}>
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
                re
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
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
