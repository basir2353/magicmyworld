import React from "react";
import "./Pricing.css";
import EndImage from "../endlogo/endimage";
import Footer from "../footer/footer";
function Pricing() {
  return (
    <div>
      <div className="home-container1">
        <div className="circle left-top"></div>
        <div className="text-container1">
          <div className="background-gradient1">
            <p className="main-text1">Pricing Plan</p>
          </div>
          <h2 className="sub-heading1">Buy MagicMyHouse Credits</h2>
          <p className="sub-text1">
            You have 10 credits. Join thousands of happy customers. Explore more
            options below.
          </p>
          <div className="circle right-top"></div>

          <div className="box-container">
            <div className="box1">
              <div className="pac">1 Month Package</div>
              <div className="price-heading">$9.99</div>
              <div className="price-description">
                Unlimted credit <br /> credits for
              </div>
              <button className="pay-button">Pay</button>
            </div>

            <div className="box2">
              <div className="pac">6 Month Package</div>
              <div className="price-heading">$24.99</div>
              <div className="price-description">
                Unlimted Credit
                <br /> credits for
              </div>
              <button className="pay-button">Pay</button>
            </div>
          </div>

          <div
            style={{
              marginLeft: "3rem",
              marginTop: "2rem",
              display: "flow",
              position: "absolute",
            }}
          >
            <p>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                style={{ justifyContent: "space-between" }}
                fill="currentColor"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
              </svg>
              Onetime payments
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                style={{ justifyContent: "space-between" }}
                fill="currentColor"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
              </svg>
              Premium support by email
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                style={{ justifyContent: "space-between" }}
                fill="currentColor"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
              </svg>
              Commercial usage of photos
            </p>
          </div>
          <div style={{ marginLeft: "26rem", marginTop: "2rem" }}>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                style={{ justifyContent: "space-between" }}
                fill="currentColor"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
              </svg>
              Onetime payments
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                style={{ justifyContent: "space-between" }}
                fill="currentColor"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
              </svg>
              Premium support by email
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                style={{ justifyContent: "space-between" }}
                fill="currentColor"
                class="bi bi-check2-circle"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
              </svg>
              Commercial usage of photos
            </p>
          </div>
        </div>
        <div className="circle bottom"></div>
        <div className="circle left-bottom"></div>
        <div
          style={{
            border: "1px solid black",
            width: "27rem",
            borderRadius: "19px",
            marginTop: "2rem",
          }}
        >
          <p
            style={{
              marginLeft: "24px",
              fontSize: "10px",
              marginTop: 0,
              marginBottom: "0px",
            }}
          >
            Interested in team or bulk pricing? Email : info@magicmyhouse.com or
            KVK : 08214009
          </p>
        </div>
      </div>
      <EndImage />
      <Footer />
    </div>
  );
}
export default Pricing;
