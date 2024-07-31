import React from 'react';
import './slider.scss';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Slider = () => {
    return (
        <div className='sliderWindow'>

            <div className="img">
                <div>
                    <img src="/public/images/resorts/img1.jpg" alt="" />

                </div>
            </div>

            <button className="SliderBtn">
                <IoIosArrowBack />
            </button>

            <div className="sliderText">

                <h1>Life Is Beautiful</h1>
                <p>Unloack to enjoy the view of Martine</p>

            </div>


            <button className="SliderBtn">
                <IoIosArrowForward />
            </button>



        </div>
    );
};

export default Slider;