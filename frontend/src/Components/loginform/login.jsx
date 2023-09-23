import React, { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import apiClient from "../../api/apiClient";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './loginform.css';

const LoginForm = () => {
  const navigate = useNavigate();
  const [userImage, setUserImage] = useState(null);

  const responseMessage = async (response) => {
    console.log(response);
    const accessToken = response.credential;
    const user = jwt_decode(accessToken);

    const result = await apiClient.post("/auth/google", { googlePayload: user });

    if (!result.ok) {
      toast.error(result.data.message || "Google Login Failed");
      return;
    }

    // Store the user information for Google OAuth users
    localStorage.setItem("googleUser", JSON.stringify(user));

    try {
      const userImageResponse = await apiClient.get("/user/image");
      setUserImage(userImageResponse.data.imageUrl);
    } catch (error) {
      console.error("Error fetching user image:", error);
    }

    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    // Fetch the user's image when the component mounts (if user is already logged in)
    const fetchUserImage = async () => {
      try {
        const userImageResponse = await apiClient.get("/user/image");
        setUserImage(userImageResponse.data.imageUrl);
      } catch (error) {
        console.error("Error fetching user image:", error);
      }
    };

    fetchUserImage();
  }, []); 

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
     
        <div className="col-xl-7 m-auto col-lg-8  col-md-12 col-sm-12 col-xs-12">
          <div className="background-gradient mt-5">
            <p className="main-text">
              <span className="main-text1">0ver</span> 1 Million User Have used MagicMyHouse So far 
            </p>
          </div>
          <h2 className="sub-heading1" style={{ textAlign: 'center' }}>
          Redesign your House in seconds
          </h2>
          <p className="sub-text" >
          Sign in below with Google to create a free account and redesign your room today. You will get 3 generations for free.
          </p>
          </div>
        <div className="col-md-9 " >
          <div className="card-body">
            <div className="mt-4">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 nbv">
                  <GoogleLogin onSuccess={responseMessage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
