import React, { useState } from "react";
import "./YourComponent.css";
import { Row, Col, Button, Container } from "react-bootstrap";
import apiClient from "../../api/apiClient";
import useApi from "../../hooks/useApi";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify"; // Import toast from react-toastify
import "react-toastify/dist/ReactToastify.css";
import LoadingOverlay from "../LoadingOverlay";
import { useAuth } from "../Navbar/AuthContext";
const RedesignComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setuploadedImage] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedImagesPreview, setSelectedImagesPreview] = useState([]);
  const [selectedRoomType, setSelectedRoomType] = useState("");
  

  const [imageGridData, setImageGridData] = useState([
    {
      id: "Image 1",
      src: process.env.PUBLIC_URL + "/image5.png",
      name: "Modern",
    },
    {
      id: "Image 2",
      src: process.env.PUBLIC_URL + "/image6.png",
      name: "Minimalist",
    },
    {
      id: "Image 3",
      src: process.env.PUBLIC_URL + "/image7.png",
      name: "Professional",
    },
    {
      id: "Image 4",
      src: process.env.PUBLIC_URL + "/image 8.png",
      name: "Tropical",
    },
    {
      id: "Image 5",
      src: process.env.PUBLIC_URL + "/image 9.png",
      name: "Coastal",
    },
    {
      id: "Image 6",
      src: process.env.PUBLIC_URL + "/image10.png",
      name: "Vintage",
    },
    {
      id: "Image 7",
      src: process.env.PUBLIC_URL + "/image11.png",
      name: "Industrial",
    },
    {
      id: "Image 8",
      src: process.env.PUBLIC_URL + "/image12.png",
      name: "Neoclassic",
    },
    {
      id: "Image 9",
      src: process.env.PUBLIC_URL + "/image7.png",
      name: "Tribal",
    },
  ]);

  const toggleImageSelection = (imageId) => {
    const updatedSelectedImages = [...selectedImages];
    const updatedSelectedImagesPreview = [...selectedImagesPreview];

    const imageIndex = updatedSelectedImages.indexOf(imageId);
    const imageGridItem = imageGridData.find((data) => data.name === imageId);

    if (imageIndex !== -1) {
      // Image is already selected, remove it
      updatedSelectedImages.splice(imageIndex, 1);
      updatedSelectedImagesPreview.splice(imageIndex, 1);
    } else {
      // Image is not selected, add it if the limit is not reached
      if (updatedSelectedImages.length < 4) {
        updatedSelectedImages.push(imageId);
        updatedSelectedImagesPreview.push(imageGridItem);
      }
    }
    console.log(updatedSelectedImages, "sel");
    setSelectedImages(updatedSelectedImages);
    setSelectedImagesPreview(updatedSelectedImagesPreview);
    setResultData(null);
  };

  const rows = [];
  for (let i = 0; i < imageGridData.length; i += 3) {
    const row = imageGridData.slice(i, i + 3);
    rows.push(row);
  }
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setuploadedImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const { request, loading } = useApi((data) =>
    apiClient.post("/interior", data)
  );
  const handleAlert = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 3000, // Close the toast after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const [resultData, setResultData] = useState();
 const {user,setUser,refresh,setRefresh}=useAuth()
 async function handleSubmit() {
    if (selectedImages.length === 0) {
      // No image is selected, show an alert or take appropriate action
      handleAlert("Please select at least one photo before rendering designs.");
      return;
    }
    const formdata = new FormData();
    formdata.append("image", uploadedImage);
    formdata.append("themes", JSON.stringify(selectedImages));
    formdata.append("room", selectedRoomType);
    const result = await request(formdata);
    console.log(result.data);
    setResultData(result.data.result);
setRefresh(true)
  }
  const containerStyle = {
    // height: '12rem',
    alignItems: "center",
    border: "1px solid black",
    // marginRight: '8.4rem',
    // paddingTop: '31px',
    borderRadius: "10px",
    borderStyle: "dashed",
    // width: '19rem',
  };

  const responsiveContainerStyle = {
    ...containerStyle, // Copy the original styles
    width: "80%", // Adjust the width for small screens
    marginRight: "5.4rem", // Remove the right margin for small screens
  };
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "5rem" }}>
        <LoadingOverlay open={loading} />

        <div className="col-xl-4   col-lg-4  col-md-12 col-sm-12 col-xs-12">
          <div className="left-box ">
            <p>
              You have no credits left. Buy more here to generate your house.
            </p>
            <div
              style={
                window.innerWidth <= 768
                  ? responsiveContainerStyle
                  : containerStyle
              }
            >
              <div
                style={
                  window.innerWidth <= 768
                    ? responsiveContainerStyle
                    : containerStyle
                }
              >
                <div>
                  {selectedImage ? (
                    <div className="uploaded-image  rounded">
                      <img
                        src={selectedImage}
                        alt="Uploaded"
                        style={{ width: "100%" }}
                        className="rounded"
                      />
                      {uploadedImage && (
                        <button
                          className="delete-image-button"
                          style={{ position: "absolute" }}
                          onClick={() => {
                            setSelectedImage(null);
                            setuploadedImage(null);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="mb-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        style={{ marginTop: "1rem" }}
                        fill="#009FE3"
                        class="bi bi-cloud-upload"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                        />
                      </svg>{" "}
                      <br />
                      Drag and drop Your Image
                      <br />
                      or <br />
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        style={{ display: "none" }}
                        onChange={handleFileUpload}
                      />
                      <button
                        className="upload-button"
                        onClick={() =>
                          document.querySelector('input[type="file"]').click()
                        }
                      >
                        Upload Photo
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="mt-3">
              {" "}
              <span> Select Room type</span>
            </p>

            <div className="dropdown-container">
              <select
                className="dropdown"
                onChange={(e) => setSelectedRoomType(e.target.value)}
              >
                <option value="Living Room">Living Room</option>
                <option value="Dining Room">Dining Room</option>
                <option value="BedRoom">BedRoom</option>
                <option value="Bath Room">Bath Room</option>
                <option value="Office">Office</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Basement">Basement</option>
                <option value="Arabian Majilis">Arabian Majilis</option>
                <option value="Outdoor Patio">Outdoor Patio</option>
                <option value="Gaming Room">Gaming Room </option>
              </select>
            </div>
            <p className="mt-3">
              <span>Select Room Themes (up to 4) </span>
            </p>
            <ImageGrid
              rows={rows}
              selectedImages={selectedImages}
              handleSubmit={handleSubmit}
              toggleImageSelection={toggleImageSelection}
            />
          </div>
        </div>
        <div className="col-xl-8  col-lg-8  col-md-12 col-sm-12 col-xs-12">
          <div className="right-box">
            <div className="row">
              {selectedImagesPreview.map((imageData, index) => (
                <Col key={imageData.id} sm={6}>
                  <div className="selected-image">
                    {resultData?.length > 0 ? (
                      <img
                        src={resultData[index] || ""}
                        alt={"Image " + (index + 1)}
                        className="img-fluid"
                        style={{
                          width: "100%",
                          height: "18rem",
                          marginTop: "0.5rem",
                        }}
                      />
                    ) : (
                      <div
                        className="d-flex justify-content-center align-items-center bg-dark rounded"
                        style={{
                          width: "100%",
                          height: "18rem",
                          marginTop: "0.5rem",
                        }}
                      >
                        <img
                          src={"https://www.roomgpt.io/couch.svg"}
                          alt={imageData.name}
                          className="img-fluid"
                          style={{
                            width: "2rem",
                          }}
                        />
                      </div>
                    )}
                    <div className="image-text" style={{ marginTop: "1.9rem" }}>
                      <span style={{ marginLeft: "2px" }}>
                        {imageData.name + " "}
                      </span>
                      {selectedRoomType ? selectedRoomType : "Living Room"}
                    </div>
                  </div>
                </Col>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="container1">

    // </div>
  );
};
export default RedesignComponent;


const ImageGrid = ({ rows, selectedImages, toggleImageSelection, handleSubmit }) => {
  const {user}=useAuth()
  const isAllowed=user?.subscription.status=="active"||user?.subscription?.credits>=selectedImages.length
  return(
  <div className="image-grid">
    {rows.map((row, rowIndex) => (
      <Row key={rowIndex} className="image-row">
        {row.map((imageData) => (
          <Col key={imageData.id} sm={4} className="image-container">
            <div className="image-wrapper">
              <img
                src={imageData.src}
                alt={imageData.name}
                onClick={() => toggleImageSelection(imageData.name)}
                className={`position-relative img-fluid ${
                  selectedImages?.includes(imageData.name)
                    ? "selected-image"
                    : ""
                }`}
              />
              {selectedImages?.includes(imageData.name) && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="svg-icon"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              )}
              <div className="image-text">{imageData.name}</div>
            </div>
          </Col>
        ))}
      </Row>
    ))}

    <Row className="render">
      <Col>
        <Button onClick={handleSubmit} disabled={!isAllowed} className="bo">RENDER DESIGNS</Button>
        <span className='credits' style={{color:!isAllowed?"red":""}}>
          Cost : {selectedImages.length} Credits
        </span>
      </Col>
      {!isAllowed&&"You need more credits or subscription"}
    </Row>
  </div>
)};

