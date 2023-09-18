import React from "react";
import "./ImageWithText.css";

const ImageWithText = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-9 m-auto col-lg-8  col-md-12 col-sm-12 col-xs-12">
          <div className="mt-5">
          <img
            src={process.env.PUBLIC_URL + "/imagewihtextbox.png"}
            alt="Image"
            className="center-image"
          />

          <div className="round-box1"></div>
         </div>
        </div>
      </div>
    </div>
    // <div className="image-text-container">

    // </div>
  );
};

export default ImageWithText;
