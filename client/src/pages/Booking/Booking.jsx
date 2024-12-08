import React, { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { IoLocation } from "react-icons/io5";

const Booking = () => {

    const {
        roomDetails,
        checkInDate,
        checkOutDate

    } = useSelector(state => state.bookingReducer);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [isCOD, setIsCOD] = useState(false);



    const getDayName = (val) => {
        const dayNameArray = ["Sun", "Mon", "Tues", "Wed", "Thus", "Fri", "Sat"];
        const date = new Date(val);
        const getDay = date.getDay();

        // console.log(dayNameArray[getDay]);

        return dayNameArray[getDay] + " " + checkInDate;
    };



    useEffect(() => {

        console.log(roomDetails);

    }, [checkInDate,
        checkOutDate,
    ]);



    return (
        <form className='bookings'>

            <div className="bookingHeader">
                <div>
                    <Link to={`/hotel/${roomDetails._id}`} ><FaArrowLeft /></Link>
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
                            <h3>{roomDetails.name}</h3>

                            <p>{roomDetails.description.slice(0, 500) + "..."}</p>

                        </div>
                        <div className="hotelRating">
                            {/* <div className="rating">7.9</div> */}
                            {/* <p>Good | 61 reviews</p> */}
                            <p><IoLocation /></p>
                            <p>{roomDetails.address}</p>
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
                                <p>{getDayName(checkInDate)}</p>
                                <p>12:00 - 23:30</p>
                            </div>

                            <div>
                                <p>Check-out</p>
                                <p>{getDayName(checkOutDate)}</p>
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
                                <input type="text" pattern='[A-Za-z]{1,20}' maxLength={20} required title="Enter alphabet only." onChange={(e) => setFirstName(e.target.value)} />

                            </div>

                            <div>
                                <p>Lasr Name <span>*</span></p>
                                <input type="text" pattern='[A-Za-z]{1,20}' maxLength={20} required title="Enter alphabet only." onChange={(e) => setLastName(e.target.value)} />
                            </div>

                            <div>
                                <p>email <span>*</span></p>
                                <input type="email" maxLength={30} required onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div>
                                <p>Phone Number <span>*</span></p>
                                <input
                                    type="text"
                                    pattern="[0-9]{10}"
                                    title="Please enter a valid phone number with 10 digits."
                                    maxLength="10"
                                    required
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>

                            <div>
                                <p>City <span>*</span></p>
                                <input type="text" pattern='[A-Za-z]{1,20}' maxLength={20} title="Enter alphabet only." required onChange={(e) => setCity(e.target.value)} />
                            </div>

                            <div>
                                <p>Country <span>*</span></p>
                                <input type="text" pattern='[A-Za-z]{1,20}' maxLength={20} title="Enter alphabet only." required onChange={(e) => setCountry(e.target.value)} />
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
                                    <span> <FaMoneyBillAlt /> </span>
                                    <p> Check In Time </p>

                                </div>

                            </div>

                            <button> Pay Now </button>

                        </div>

                        <div className="right">
                            <div className="priceSummary">
                                <h3>Your price summary</h3>
                                <div className="amount">
                                    <div>
                                        <p>Price </p>
                                        <p>₹{roomDetails.price}</p>
                                    </div>
                                    {/* <p>+₹ 1,081 taxes and charges</p> */}
                                </div>

                                <div className="priceInformation">
                                    <h4>Price Information</h4>
                                    <div className="information">
                                        <p><FaMoneyBillAlt /></p>
                                        <div>
                                            {/* <p>Excludes ₹ 1,081.14 in taxes and charges</p> */}
                                            <div>
                                                <p>Goods & services tax ₹500</p>
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

        </form>
    );
};

export default Booking;