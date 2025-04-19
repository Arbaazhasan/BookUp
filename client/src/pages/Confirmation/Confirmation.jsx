import React from 'react';
import "./confirmation.scss"
import { GiConfirmed } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Confirmation = () => {
    return (
        <div className='confirmation'>

            <h1><GiConfirmed /></h1>

            <h3>Your booking has been confirmed.</h3>

            <Link to="/" >Go to Home</Link>


        </div>
    );
}

export default Confirmation;
