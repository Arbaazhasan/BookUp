import React, { useEffect, useState } from 'react';
import './booking.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft, FaSwimmer, FaMoneyBillAlt } from "react-icons/fa";
import { CiWifiOn, CiParking1, CiCreditCard1 } from "react-icons/ci";
import { MdOutlineRestaurant, MdOutlinePets } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { bookingAction } from '../../Redux/actions/bookingAction';

const Booking = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {
        roomDetails,
        adults,
        children,
        noOfRooms,
        checkInDate,
        checkOutDate
    } = useSelector(state => state.bookingReducer);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [isCOD, setIsCOD] = useState(false);

    const getDayName = (val) => {
        const dayNameArray = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        const date = new Date(val);
        const getDay = date.getDay();
        return dayNameArray[getDay] + " " + val;
    };

    const bookingHandler = (e) => {
        e.preventDefault();

        const name = {
            name: firstName + " " + lastName,
            email,
            phoneNumber,
            city,
            country,
        };

        const isSuccess = bookingAction(
            dispatch,
            roomDetails._id,
            name,
            adults,
            children,
            noOfRooms,
            checkInDate,
            checkOutDate
        );

        if (isSuccess)
            navigate("/booked")

    };


    const cancelHandler = () => {
        navigate("/list");
    }
    useEffect(() => {
        console.log(roomDetails);
    }, [checkInDate, checkOutDate]);

    return (
        <form className='bookings' onSubmit={bookingHandler}>
            <div className="bookingHeader">
                <div>
                    <Link to={`/hotel/${roomDetails._id}`}><FaArrowLeft /></Link>
                    <h1>Booking Page</h1>
                </div>
                <button type='button' onClick={cancelHandler}>Cancel Booking</button>
            </div>

            <div className="bookingDetails">
                <div className="left">
                    <div className="hotelDetails">
                        <p>Hotel Details</p>
                        <div className="hotelInfo">
                            <h3>{roomDetails.name}</h3>
                            <p>{roomDetails?.description?.slice(0, 500) + "..."}</p>
                        </div>
                        <div className="hotelRating">
                            <p><IoLocation /></p>
                            <p>{roomDetails.address}</p>
                        </div>
                        <div className="hotelfacilities">
                            <div><FaSwimmer /> Swimming Pool</div>
                            <div><MdOutlinePets /> Pets Allowed</div>
                            <div><CiWifiOn /> Wifi</div>
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
                            <span>{noOfRooms} Room(s) for {adults} adult(s) and {children} child(ren)</span>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className="guestDetails">
                        <h3>Enter your details</h3>
                        <div className="inputSection">
                            <div>
                                <p>First Name <span>*</span></p>
                                <input
                                    type="text"
                                    pattern='[A-Za-z]{1,20}'
                                    maxLength={20}
                                    title="Enter alphabet only."
                                    onChange={(e) => setFirstName(e.target.value)}

                                />
                            </div>
                            <div>
                                <p>Last Name <span>*</span></p>
                                <input
                                    type="text"
                                    pattern='[A-Za-z]{1,20}'
                                    maxLength={20}
                                    title="Enter alphabet only."
                                    onChange={(e) => setLastName(e.target.value)}

                                />
                            </div>
                            <div>
                                <p>Email <span>*</span></p>
                                <input
                                    type="email"
                                    maxLength={30}
                                    onChange={(e) => setEmail(e.target.value)}

                                />
                            </div>
                            <div>
                                <p>Phone Number <span>*</span></p>
                                <input
                                    type="text"
                                    pattern="[0-9]{10}"
                                    title="Please enter a valid phone number with 10 digits."
                                    maxLength="10"
                                    onChange={(e) => setPhoneNumber(e.target.value)}

                                />
                            </div>
                            <div>
                                <p>City <span>*</span></p>
                                <input
                                    type="text"
                                    pattern='[A-Za-z]{1,20}'
                                    maxLength={20}
                                    title="Enter alphabet only."
                                    onChange={(e) => setCity(e.target.value)}

                                />
                            </div>
                            <div>
                                <p>Country <span>*</span></p>
                                <input
                                    type="text"
                                    pattern='[A-Za-z]{1,20}'
                                    maxLength={20}
                                    title="Enter alphabet only."
                                    onChange={(e) => setCountry(e.target.value)}

                                />
                            </div>
                        </div>
                    </div>

                    <div className="bookingAmount">
                        <div className="left">
                            <h3>Payment Method</h3>
                            <div className="paymentType">
                                {/* You can enable card option if needed */}
                                {/* <div>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="card"
                                        checked={!isCOD}
                                        onChange={() => setIsCOD(false)}
                                    />
                                    <span><CiCreditCard1 /></span>
                                    <p> Credit/Debit Card</p>
                                </div> */}
                                <div>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        value="cod"
                                        checked={isCOD}
                                        onChange={() => setIsCOD(true)}
                                    />
                                    <span><FaMoneyBillAlt /></span>
                                    <p>Pay at Check-In</p>
                                </div>
                            </div>
                            <button type="submit">Book Now</button>
                        </div>

                        <div className="right">
                            <div className="priceSummary">
                                <h3>Your price summary</h3>
                                <div className="amount">
                                    <div>
                                        <p>Price</p>
                                        <p>₹{roomDetails.price}</p>
                                    </div>
                                </div>

                                <div className="priceInformation">
                                    <h4>Price Information</h4>
                                    <div className="information">
                                        <p><FaMoneyBillAlt /></p>
                                        <div>
                                            <div>
                                                <p>Goods & services tax ₹500</p>
                                            </div>
                                            <div>
                                                <p>Cleaning Fee</p>
                                                <p>₹600</p>
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
