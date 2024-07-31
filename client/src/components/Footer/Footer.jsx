import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {


    return (
        <footer>

            <div className="details">

                <div>
                    <h1>Address</h1>
                    <p>Bazar Mufti Nawabpura, Moradabad,
                        <br />
                        India</p>

                    <span>Get Direction</span>
                </div>

                <div>
                    <h1>Reservation</h1>
                    <p>+91 9058714187
                        <br />
                        arbaazhasan.ah@gmail.com

                    </p>

                </div>

                <div>
                    <h1>Navigation</h1>

                    <div>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Rooms</Link>
                        <Link to='/'>About</Link>
                        <Link to='/'>News</Link>
                    </div>

                </div>

                <div>
                    <h1>Newsletter</h1>
                    <div className="btn">
                        <input type="text" placeholder='Enter your mail' />
                        <button>Sign Up</button>
                    </div>
                    <p>Subscribe newsletter to get updates</p>
                </div>



            </div>

            <div className="copyright">
                <div className="left">
                    Copyright ©2024 All rights reserved | This template is made with <span><CiHeart /></span> by Arbaz
                </div>

                <div className="right">
                    <div>
                        <FaFacebookF />

                    </div>

                    <div>
                        <FaInstagram />

                    </div>

                    <div>
                        <FaTwitter />

                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;