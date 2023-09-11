import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
  });
  
  const [showAlert, setShowAlert] = useState(false);
  
  useNavigate('/')
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignup = () => {
  
    localStorage.setItem('user', JSON.stringify(signupData));


    setShowAlert(true);

    setSignupData({
      username: '',
      email: '',
      password: '',
    });

    
    console.log('Signup successful', signupData);
  };

  return (
    <div className="container" style={{    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',width:"45rem",height:"30rem",borderRadius:"2rem" }}>
      <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <h2>Signup</h2>
          {showAlert && (
            <div className="alert alert-success" role="alert">
              Signup successful!
            </div>
          )}
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
              required
              
                type="text"
                className="form-control"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={signupData.username}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={signupData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={signupData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-primary newb1"
              onClick={handleSignup}
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;