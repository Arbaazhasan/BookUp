import React from 'react';
import './imagesBar.scss';
import { FaInstagram } from "react-icons/fa";

const ImagesBar = () => {
    return (
        <div className='imagesBar'>


            <div className="hotelImage" style={{ backgroundImage: 'url(/images/ImagesArray/img1.jpg)' }}>

                <div className='iconSlide'>

                    <FaInstagram />

                </div>
            </div>



            <div className="hotelImage" style={{ backgroundImage: 'url(images/ImagesArray/img2.jpg)' }}>


                <div className='iconSlide'>

                    <FaInstagram />

                </div>
            </div>



            <div className="hotelImage" style={{ backgroundImage: 'url(images/ImagesArray/img3.jpg)' }}>


                <div className='iconSlide'>

                    <FaInstagram />

                </div>
            </div>



            <div className="hotelImage" style={{ backgroundImage: 'url(images/ImagesArray/img4.jpg)' }}>


                <div className='iconSlide'>

                    <FaInstagram />

                </div>
            </div>



            <div className="hotelImage" style={{ backgroundImage: 'url(images/ImagesArray/img5.jpg)' }}>


                <div className='iconSlide'>

                    <FaInstagram />

                </div>
            </div>


        </div>
    );
};

export default ImagesBar;