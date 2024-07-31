import React from 'react';
import './hotel.scss';

import SearchBar from '../../components/SearchBar/SearchBar';

import { FaLocationDot } from "react-icons/fa6";

const Hotel = () => {
    return (
        <div className='hotelpage'>
            <SearchBar />

            <div className="hotel">


                <div className='heading'>

                    <div className="desc">
                        <h1>Grand Hotel</h1>

                        <p>
                            <span><FaLocationDot /> </span>
                            Elton St 125 New york
                        </p>

                        <p>Excellent Location - 500m from center</p>

                        <p>Book stay over $144 at this property and get a free airport taxi</p>

                    </div>


                    <div className="bookingBtn">
                        <button>Reserve or Book Now!</button>
                    </div>
                </div>


                <div className="hotelImages">


                    <div>
                        <img src="/public/images/Hotels/img1.jpg" alt="" />
                    </div>


                    <div>
                        <img src="/public/images/Hotels/img2.jpg" alt="" />
                    </div>


                    <div>
                        <img src="/public/images/Hotels/img3.jpg" alt="" />
                    </div>


                    <div>
                        <img src="/public/images/Hotels/img2.jpg" alt="" />
                    </div>


                    <div>
                        <img src="/public/images/Hotels/img3.jpg" alt="" />
                    </div>


                    <div>
                        <img src="/public/images/Hotels/img1.jpg" alt="" />
                    </div>


                </div>

                <div className="roomDetails">

                    <div className="left">
                        <h1>Stay in the heart of krakow</h1>
                        <p>
                            Situated in Prague, 300 m from Municipal House, The Julius Prague features accommodation with a restaurant, private parking, a fitness centre and a bar. Among the facilities at this property are a 24-hour front desk and room service, along with free WiFi throughout the property. The hotel has family rooms. All units in the hotel are equipped with a coffee machine. Complete with a private bathroom fitted with a shower and a hairdryer, all rooms at The Julius Prague have a flat-screen TV and air conditioning, and some rooms also boast a seating area. At the accommodation the rooms are fitted with bed linen and towels.
                        </p>
                    </div>

                    <div className="right">
                        <div>

                            <h2>Perfect for a 9-night stay!</h2>

                            <p>Located in the real heart of karakow,
                                this property has an excellent Location score of 9.8!
                            </p>

                            <h1>₹945 <span>(9 nights)</span></h1>

                            <button>Reserve or Book Now!</button>

                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Hotel;