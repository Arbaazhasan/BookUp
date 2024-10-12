import React, { useEffect, useState } from 'react';
import './searchBar.scss';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowRight } from "react-icons/md";
import toast from 'react-hot-toast';

const SearchBar = () => {

    const [cityName, setCityName] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [noOfRoom, setNoOfRoom] = useState(1);
    const [children, setChildren] = useState(0);
    const [adult, setAdult] = useState(1);

    useEffect(() => {
        console.log(cityName, checkIn, checkOut, noOfRoom, children, adult);


    }, [cityName, checkIn, checkOut, noOfRoom, children, adult]);

    const checkOutOnChange = (e) => {
        const selectedCheckOut = e.target.value;

        if (checkIn && new Date(checkIn) > new Date(selectedCheckOut)) {
            toast.error("Please select a correct date!", {
                duration: 500
            });
            setCheckOut('');
        } else {
            setCheckOut(selectedCheckOut);
        }
    };

    return (
        <div className='searchBar'>
            <form className="searchTab">
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
                    <button type="button">Search</button>
                </div>
            </form>

            <div className="currentPath">
                <Link to="/"> Home </Link>
                <span><MdKeyboardArrowRight /></span>
                <p>Hotels and more in Goa</p>
            </div>

            <div className="searchResult">
                <h1>2734 Properties in Goa</h1>
            </div>
        </div>
    );
};

export default SearchBar;
