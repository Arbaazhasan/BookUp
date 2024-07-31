import React from 'react';
import './searchBar.scss';
import { Link } from 'react-router-dom';

import { MdKeyboardArrowRight } from "react-icons/md";

const SearchBar = () => {
    return (
        <div className='searchBar'>

            <form className="searchTab">

                <div>
                    <p>City, Araa of Property </p>
                    <input type="text" placeholder={"Goa"} />
                </div>

                <div>
                    <p>Check-in</p>
                    <input type="date" placeholder={"Goa"} />
                </div>

                <div>
                    <p>check-out</p>
                    <input type="date" placeholder={"Goa"} />
                </div>

                <div>
                    <p>Rooms & Guests</p>

                    <table>

                        <tr>
                            <td>Room</td>
                            <td>

                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>

                            </td>
                        </tr>

                        <tr>
                            <td>Adult</td>
                            <td>

                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>

                            </td>
                        </tr>
                        <tr>
                            <td>Children</td>
                            <td>

                                <select name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                    <option value="">5</option>
                                </select>

                            </td>
                        </tr>
                    </table>

                </div>

                <div>
                    <button>Search</button>
                </div>

            </form>

            <div className="currentPath">
                <Link to='/'> Home </Link>

                <span>
                    <MdKeyboardArrowRight />
                </span>

                <p>Hotels and more in Goa</p>

            </div>

            <div className="searchResult">
                <h1>
                    2734 Properties in Goa
                </h1>
            </div>

        </div >
    );
};

export default SearchBar;