import React, { useEffect, useState } from 'react';
import './searchBar.scss';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { MdKeyboardArrowRight } from "react-icons/md";
import toast from 'react-hot-toast';
import { getHotelListAction } from '../../Redux/actions/bookingAction';
import { useDispatch, useSelector } from 'react-redux';

const SearchBar = () => {

    const [cityName, setCityName] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [noOfRoom, setNoOfRoom] = useState(1);
    const [children, setChildren] = useState(0);
    const [adult, setAdult] = useState(1);
    const [searchCity, setSearchCity] = useState('');

    const dispatch = useDispatch();
    const { hotelList } = useSelector(state => state.bookingReducer);

    useEffect(() => {

    }, [cityName, checkIn, checkOut, noOfRoom, children, adult]);

    const navigate = useNavigate();

    const searchBarHandler = (e) => {
        e.preventDefault();
        getHotelListAction(dispatch, cityName, checkIn, checkOut, noOfRoom);
        navigate('/list');
    };


    // Verify that check-out-date should not be less than check-in-date 
    const checkOutOnChange = (e) => {
        const selectedCheckOut = e.target.value;

        if (checkIn && new Date(checkIn) > new Date(selectedCheckOut)) {
            toast.error("CheckOut can't bee less then CheckIn!", {
                duration: 2000
            });
            setCheckOut('');
        } else {
            setCheckOut(selectedCheckOut);
        }
    };

    return (
        <div className='searchBar'>
            <form className="searchTab" onSubmit={searchBarHandler}>
                <div>
                    <p>City, Area of Property</p>
                    <input type="text" placeholder="Goa" value={cityName} onChange={(e) => setCityName(e.target.value)} />
                </div>

                <div>
                    <p>Check-in</p>
                    <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                </div>

                <div>
                    <p>Check-out</p>
                    <input type="date" value={checkOut} onChange={checkOutOnChange} />
                </div>

                <div>
                    <p>Rooms & Guests</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>Room</td>
                                <td>
                                    <select value={noOfRoom} onChange={(e) => setNoOfRoom(parseInt(e.target.value))}>
                                        {[1, 2, 3, 4, 5].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td>Adult</td>
                                <td>
                                    <select value={adult} onChange={(e) => setAdult(parseInt(e.target.value))}>
                                        {[1, 2, 3, 4, 5].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td>Children</td>
                                <td>
                                    <select value={children} onChange={(e) => setChildren(parseInt(e.target.value))}>
                                        {[0, 1, 2, 3, 4, 5].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div>
                    <button type="submit" >Search</button>
                </div>
            </form>

            <div className="currentPath">
                <Link to="/"> Home </Link>
                <span><MdKeyboardArrowRight /></span>
                <p>Hotels and more in {searchCity.charAt(0).toUpperCase() + searchCity.slice(1)}</p>
            </div>

            <div className="searchResult">
                {
                    hotelList.length ?
                        <h1>{hotelList.length} Properties in {searchCity.charAt(0).toUpperCase() + searchCity.slice(1)}</h1>
                        :
                        <h1>Search hotel</h1>
                }
            </div>
        </div>
    );
};

export default SearchBar;
