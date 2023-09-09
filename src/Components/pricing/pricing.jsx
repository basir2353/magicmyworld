import React from "react";
import "./Pricing.css";
import EndImage from "../endlogo/endimage";
import Footer from "../footer/footer";
function Pricing() {
  return (
    <div >
      <div className="home-container1" style={{display:"flex", flexDirection:'column',marginBottom:'10rem', justifyContent:'center',alignItems:'center '}}>
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
            <div className="box1" style={{margin:'2rem',marginRight:'2rem'}}>
              <div className="pac">1 Month Package</div>
              <div className="price-heading">$9.99</div>
              <div className="price-description">
                Unlimted credit 
                 credits for <br />For a duration of 1 month
              </div>
              <button className="pay-button">Pay</button>
            </div>

            <div className="box2">
              <div className="pac">6 Month Package</div>
              <div className="price-heading">$24.99</div>
              <div className="price-description">
                Unlimted Credit credits for
                <br />For a duration of 6 month
              </div>
              <button className="pay-button">Pay</button>
            </div>
          </div>

          <div
            style={{
              marginLeft: "2rem",
              display: "flex",
              flexDirection:'column',
              justifyContent:'center',
              position: "absolute",
            }}
          >
            <p >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                style={{ justifyContent: "space-between" ,marginRight:'10px'}}
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
                style={{ justifyContent: "space-between" ,marginRight:'10px'}}
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
                style={{ justifyContent: "space-between" ,marginRight:'10px'}}
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
          <div style={{ marginLeft: "25rem", }}>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                style={{ justifyContent: "space-between" ,marginRight:'10px'}}
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
                style={{ justifyContent: "space-between" ,marginRight:'10px'}}
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
                style={{ justifyContent: "space-between" ,marginRight:'10px'}}
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
              marginTop: '1px',
              marginBottom: '3px'
              , fontWeight:'bold'
          
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
