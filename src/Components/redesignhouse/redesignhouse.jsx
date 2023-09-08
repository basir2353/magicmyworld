import React from 'react';
import './RedesignHouse.css'; 
import './RedesignHouseai.jsx'
import RedesignComponent from './RedesignHouseai.jsx';
import EndImage from '../endlogo/endimage';
import Footer from '../footer/footer';
const RedesignHouse = () => {
    return (
        <div style={{alignItems:'center',justifyContent:'center',marginTop:'4rem'}}>
        <div className="redesign-house">
            <h2 className="redesign-house-heading">Transform your<br/> house in seconds</h2>
            <p className="redesign-house-description">
            Begin by uploading a photo, choosing the room type, 
            selecting themes, and clicking Render designs.
            </p>
            <div className="redesign-house-images">
                <div className="image-container">
                    <img width='498px' height='508px' src={process.env.PUBLIC_URL + '/Mediamodifier.png'} alt="Image 1" />
                    <img className="overlay-image" width='60px' height='60px' src={process.env.PUBLIC_URL + '/crop.png'} alt="Image 2" />
                </div>
            </div>
        </div>
       <RedesignComponent/>
       <EndImage/>
       <Footer/>
     </div>
    );
}

export default RedesignHouse;
