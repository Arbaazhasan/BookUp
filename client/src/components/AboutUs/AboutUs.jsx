import React from 'react';
import './aboutUs.scss';

const AboutUs = ({ contentDirection }) => {
    return (
        <div className='AboutUs' style={{ flexDirection: contentDirection && "row-reverse" }}>

            <div className="left">
                <p>About Us</p>

                <div className="details" data-aos="fade-right">
                    <h1>Nature's Retreat Luxury Hotel</h1>

                    <p>Escape to the epitome of elegance nestled within the serene embrace of nature. Our hotel offers unparalleled luxury, seamlessly blended with the tranquility of the natural world. Enjoy a rejuvenating stay where every detail is crafted to perfection, ensuring an unforgettable experience amidst breathtaking surroundings.</p>
                </div>

            </div>

            <div className="right">

                <div data-aos="fade-down">
                    <img src="/public/images/AboutUs/img1.jpg" alt="" />
                </div>

                <div data-aos="fade-up">
                    <img src="/public/images/AboutUs/img2.jpg" alt="" />
                </div>

            </div>

        </div>
    );
};

export default AboutUs;