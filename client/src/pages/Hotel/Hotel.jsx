import React, { useEffect } from 'react';
import './hotel.scss';

import SearchBar from '../../components/SearchBar/SearchBar';

import { FaLocationDot } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { getHotelDetailsAction } from '../../Redux/actions/bookingAction';
import { useDispatch, useSelector } from 'react-redux';
import { checkAvailabilityAction } from '../../Redux/reducers/bookingReducer';

const Hotel = () => {


    const { id } = useParams();
    const dispatch = useDispatch();
    const { roomDetails } = useSelector(state => state.bookingReducer);

    const checkAvailabilityHandler = () => {
        dispatch(checkAvailabilityAction());
    };

    useEffect(() => {
        getHotelDetailsAction(dispatch, id);
    }, []);

    useEffect(() => {
        // console.log(roomDetails);

    }, [roomDetails]);


    return (
        <div className='hotelpage'>
            <SearchBar />

            <div className="hotel">

                <div className='heading'>

                    <div className="desc">
                        <h1>{roomDetails.name}</h1>

                        <p>
                            <span><FaLocationDot /> </span>
                            {roomDetails.address}
                        </p>

                        <p>Excellent Location - 500m from center</p>

                        <p>
                            Book stay over $144 at this property and get a free airport taxi
                        </p>

                    </div>


                    <div className="bookingBtn">
                        <button className='bookingBtn' onClick={checkAvailabilityHandler}>Reserve or Book Now!</button>
                    </div>
                </div>


                <div className="hotelImages">



                    {
                        roomDetails && roomDetails.images?.map((image) => (
                            <div key={image.public_id}>
                                <img src={image.url} alt="" />
                            </div>
                        ))
                    }


                </div>

                <div className="roomDetails">

                    <div className="left">
                        <h1>About</h1>
                        <p>
                            {roomDetails.description}
                        </p>
                    </div>

                    <div className="right">
                        <div>

                            <h2>Perfect for a night stay!</h2>

                            <p>Located in the real heart of karakow,
                                this property has an excellent Location score of 9.8!
                            </p>

                            <h1>₹{roomDetails.price} <span>(nights)</span></h1>


                            <div className="bookingBtn" onClick={checkAvailabilityHandler}>
                                <button className='bookingBtn'>Reserve or Book Now!</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
};

export default Hotel;