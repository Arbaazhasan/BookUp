import React, { useEffect, useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import { FaRegCircleUser } from "react-icons/fa6";


const Header = ({ headerBackground }) => {

    const [isMenu, setIsMenu] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(false);
    const [loginMenu, setLoginMenu] = useState(false);

    const chanageBackground = () => {
        // window.scrollY > 625 ? setBackgroundColor(true) : setBackgroundColor(false);
        window.scrollY > 220 ? setBackgroundColor(true) : setBackgroundColor(false);
        // console.log(window.scrollY);
    };
    window.addEventListener('scroll', () => chanageBackground());


    const burgerMenuHandler = () => {
        setIsMenu(!isMenu);
    };


    useEffect(() => {

        // console.log(headerBackground);
    }, []);

    return (
        <

            // header style={{ backgroundColor: backgroundColor || headerBackground ? 'black' : 'transparent', transition: '1s all' }}
            header
        >


            <div className="menuBurger">

                <div className="menuIcon" onClick={burgerMenuHandler} style={{ display: isMenu ? 'none' : 'block' }}
                    data-aos="fade-right" data-aos-delay="1000"
                >
                    < RxHamburgerMenu />
                </div>

                {/* <div className="menu" style={{ display: isMenu ? 'grid' : 'none', left: '0px' }}> */}
                <div className="menu" style={{ left: isMenu ? '-40px' : "-160px" }}>

                    <div>
                        <Link onClick={burgerMenuHandler}><IoMdClose /></Link>
                    </div>


                    <div>
                        <Link to='/' >Home</Link>

                    </div>

                    <div>
                        <Link to='/list' >Rooms</Link>

                    </div>

                    <div>
                        <Link to='/' >About</Link>
                    </div>

                    <div>
                        <Link to='/' >Blogs</Link>
                    </div>

                    <div>
                        <Link to='/' >Contact</Link>
                    </div>

                </div>


            </div>

            {/* <div className="menu" data-aos="fade-right" data-aos-delay="1000"> */}
            <div className="menu" data-aos='fade-right' data-aos-delay="100">


                <div>
                    <Link to='/' >Home</Link>
                </div>

                <div>
                    <Link to='/list' >Rooms</Link>
                </div>

                <div>
                    <Link to='/' >About</Link>
                </div>

                <div>
                    <Link to='/' >Blogs</Link>
                </div>

                <div>
                    <Link to='/' >Contact</Link>
                </div>

            </div>

            <div className="logo" data-aos='fade-up' data-aos-delay="100">BookUp</div>


            <div className="userMenu" data-aos='fade-left'>
                {/* <button>Book Room</button> */}

                <div className="userIcon" onClick={() => setLoginMenu((pre) => !pre)}>
                    < FaRegCircleUser />
                </div>


                {
                    loginMenu &&

                    <div className="loginMenu" >

                        <Link onClick={() => loginMenu(false)}>Profile</Link>
                        <Link onClick={() => loginMenu(false)}>Logout</Link>

                    </div>

                }

            </div>

        </header>
    );
};

export default Header;