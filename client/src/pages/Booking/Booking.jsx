import React from 'react';
import './booking.scss';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

import { CiWifiOn } from "react-icons/ci";
import { CiParking1 } from "react-icons/ci";
import { MdOutlineRestaurant } from "react-icons/md";
import { MdOutlinePets } from "react-icons/md";
import { FaSwimmer } from "react-icons/fa";
import { CiCreditCard1 } from "react-icons/ci";
import { FaMoneyBillAlt } from "react-icons/fa";

const Booking = () => {
    return (
        <div className='bookings'>

            <div className="bookingHeader">
                <div>
                    <Link to={'/hotel'} ><FaArrowLeft /></Link>
                    <h1>

                        Booking Page

                    </h1>
                </div>

                <button>Cancel Booking</button>
            </div>

            <div className="bookingDetails">
                <div className="left">
                    <div className="hotelDetails">
                        <p>Hotel Details</p>

                        <div className="hotelInfo">
                            <h3>TATA Rio De Goa - Resort style apt,6 KM from Airport</h3>
                            <p>Tata Housing - Rio de Goa - Tower 6 , Flat no. 405, Vidya Nagar Colony, Near MES College 4, 403726 Chicalim, India</p>

                        </div>
                        <div className="hotelRating">
                            <div className="rating">7.9</div>
                            <p>Good | 61 reviews</p>
                        </div>

                        <div className="hotelfacilities">
                            <div><FaSwimmer /> Swimming Pool</div>
                            <div><MdOutlinePets /> Pets Allowed</div>
                            <div><CiWifiOn /> Wifi </div>
                            <div><CiParking1 /> Parking</div>
                            <div><MdOutlineRestaurant /> Restaurant</div>
                        </div>
                    </div>


                    <div className="bookingDetails">
                        <p>Your booking details</p>

                        <div className="reservationDates">
                            <div>
                                <p>Check-in</p>
                                <p>Sun 15 Sept 2024</p>
                                <p>12:00 - 23:30</p>
                            </div>

                            <div>
                                <p>Check-in</p>
                                <p>Sun 15 Sept 2024</p>
                                <p>12:00 - 23:30</p>
                            </div>
                        </div>

                        <div className="roomDetails">
                            <p>You selected</p>
                            <span>1 Room for 2 adults and 1 children</span>
                        </div>

                    </div>

                </div>

                <div className="right">
                    <div className="guestDetails">
                        <h3>Enter your details</h3>

                        <div className="inputSection">

                            <div>
                                <p>First Name <span>*</span></p>
                                <input type="text" />
                            </div>

                            <div>
                                <p>Lasr Name <span>*</span></p>
                                <input type="text" />
                            </div>

                            <div>
                                <p>email <span>*</span></p>
                                <input type="text" />
                            </div>

                            <div>
                                <p>Phone Number <span>*</span></p>
                                <input type="text" />
                            </div>

                            <div>
                                <p>City <span>*</span></p>
                                <input type="text" />
                            </div>

                            <div>
                                <p>Country <span>*</span></p>
                                <input type="text" />
                            </div>



                        </div>

                    </div>

                    <div className="bookingAmount">

                        <div className="left">
                            <h3>Payment Method </h3>

                            <div className="paymentType">
                                <div>
                                    <input type="radio" name="paymentMethod" id="paymentMethod" />
                                    <span><CiCreditCard1 /></span>
                                    <p> Credit Card / Debit Card</p>
                                </div>

                                <div>
                                    <input type="radio" name="paymentMethod" id="paymentMethod" />
                                    <span><FaMoneyBillAlt /></span>
                                    <p>Check In Time</p>
                                </div>
                            </div>

                            <button>Pay Now</button>

                        </div>

                        <div className="right">
                            <div className="priceSummary">
                                <h3>Your price summary</h3>
                                <div className="amount">
                                    <div>
                                        <p>Price </p>
                                        <p>₹ 4,009.50</p>
                                    </div>
                                    <p>+₹ 1,081 taxes and charges</p>
                                </div>

                                <div className="priceInformation">
                                    <h4>Price Information</h4>
                                    <div className="information">
                                        <p><FaMoneyBillAlt /></p>
                                        <div>
                                            <p>Excludes ₹ 1,081.14 in taxes and charges</p>
                                            <div>
                                                <p>Goods & services tax</p>
                                                <p>₹ 481.14</p>
                                            </div>

                                            <div>
                                                <p>Cleaning Fee</p>
                                                <p>₹ 600</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Booking;