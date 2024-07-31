import React from 'react';
import './filter.scss';
import { IoSearch } from "react-icons/io5";

const Filter = () => {
    return (
        <div className='filter'>
            <form action="" >
                <div>
                    <p>SORT BY :</p>
                </div>

                <div>
                    Popular
                </div>

                <div>
                    User Rating <span>(Heights First)</span>
                </div>

                <div> Price <span>(Heighest First)</span></div>
                <div> Price <span>(Lowest First)</span></div>

                <div className='search'>
                    <p><IoSearch /></p>
                    <input type="text" placeholder='Search for Locality/hotel name' />
                </div>



            </form>
        </div>
    );
};

export default Filter;