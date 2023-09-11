
import "./Pricing.css";
import EndImage from "../endlogo/endimage";
import Footer from "../footer/footer";
import React, { useState } from "react";
import { makePayment } from "./paymentapi";

function Pricing() {
  const [paymentData, setPaymentData] = useState(null);
  const [newStringState, setNewStringState] = useState("");

  async function dataPayment(amount) {
    try {
      const response = await makePayment({ amount }); // Pass amount as an object
      console.log('Payment Response:', response); // Log the response for debugging
      setPaymentData(response?.data?.amount?.value);
      
      const amountValue = response?.data?.amount?.value;
      setNewStringState(amountValue ? String(amountValue) : "");
console.log(response?.data)

      const popupContent = `
      <html>
        <head>
          <title>Payment Response</title>
          <!-- Include Bootstrap CSS -->
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css"
          />
          <!-- Custom CSS for the "Pay" button -->
          <style>
            .dark-pink-gradient-button {
              background: linear-gradient(to bottom, #ff1493, #c71585);
              color: #fff;
            }
            .dark-pink-gradient-button:hover {
              background: linear-gradient(to bottom, #c71585, #ff1493);
              color: #fff;
            }
          </style>
        </head>
        <body>
          <!-- Create a Bootstrap modal -->
          <div class="modal fade" id="paymentModal" tabindex="-1" aria-labelledby="paymentModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="paymentModalLabel">Payment Response</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div>
                  <h2>Amount: ${response.amount.value}</h2>

                    <p>Description: ${response.description}</p>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn dark-pink-gradient-button" onclick="closePopup()">Pay</button>
                </div>
              </div>
            </div>
          </div>
          
          <script>
            function closePopup() {
              window.close(); // Close the popup window when the button is clicked
            }
            
            // Show the Bootstrap modal when the page loads
            document.addEventListener("DOMContentLoaded", function() {
              var myModal = new bootstrap.Modal(document.getElementById("paymentModal"), {
                backdrop: "static",
                keyboard: false
              });
              myModal.show();
            });
          </script>
          
          <!-- Include Bootstrap JavaScript -->
          <script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.min.js"></script>
        </body>
      </html>
    `;
    
     

      const blob = new Blob([popupContent], { type: "text/html" });

      const popupURL = URL.createObjectURL(blob);

      const popupWindow = window.open(
        popupURL,
        "_blank",
        `width=500,height=500,left=${(window.screen.width - 500) / 2},top=${
          (window.screen.height - 500) / 2
        }`
      );

      if (popupWindow) {
        popupWindow.focus();
      }
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div>
      <div
        className="home-container1"
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "10rem",
          justifyContent: "center",
          alignItems: "center ",
        }}
      >
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
            <div
              className="box1"
              style={{ margin: "2rem", marginRight: "2rem" }}
            >
              <div className="pac">1 Month Package</div>
              <div className="price-heading">$9.99</div>
              <div className="price-description">
                Unlimted credit credits for <br />
                For a duration of 1 month
              </div>
              <button
                className="pay-button"
                onClick={() => {
                  dataPayment(9);
                }}
              >
                Pay
              </button>
            </div>

            <div className="box2">
              <div className="pac">6 Month Package</div>
              <div className="price-heading">$24.99</div>
              <div className="price-description">
                Unlimted Credit credits for
                <br />
                For a duration of 6 month
              </div>
              <button className="pay-button"  onClick={() => {
                  dataPayment(24);
                }}>Pay</button>
            </div>
          </div>

          <div
            style={{
              marginLeft: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "absolute",
            }}
          >
            <p>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                style={{ justifyContent: "space-between", marginRight: "10px" }}
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
                width="20"
                height="20"
                style={{ justifyContent: "space-between", marginRight: "10px" }}
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
                width="20"
                height="20"
                style={{ justifyContent: "space-between", marginRight: "10px" }}
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
          <div style={{ marginLeft: "25rem" }}>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                style={{ justifyContent: "space-between", marginRight: "10px" }}
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
                width="20"
                height="20"
                style={{ justifyContent: "space-between", marginRight: "10px" }}
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
                width="20"
                height="20"
                style={{ justifyContent: "space-between", marginRight: "10px" }}
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
            width: "35rem",
            borderRadius: "15px",
            marginTop: "2rem",
          }}
        >
          <p
            style={{
              marginLeft: "14px",
              fontSize: "13px",
              marginTop: "1px",
              marginBottom: "3px",
              fontWeight: "bold",
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
