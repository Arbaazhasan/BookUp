import React, { useEffect, useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import { FaRegCircleUser } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { guestLogout } from '../../Redux/actions/guestAuthActions';


const Header = () => {

    const disptach = useDispatch();
    const { isGuestAuthonticated } = useSelector(state => state.guestAuthReducer);

    const [isMenu, setIsMenu] = useState(false);
    const [loginMenu, setLoginMenu] = useState(false);

    const burgerMenuHandler = () => {
        setIsMenu(!isMenu);
    };

    const onSubmitHandler = () => {

        guestLogout(disptach);

    };


    useEffect(() => {

        // console.log(isGuestAuthonticated);
    }, [isGuestAuthonticated]);

    return (
        <header>


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

                    {/* <div>
                        <Link to='#AboutUs' >About</Link>
                    </div> */}

                    <div>
                        <a href="#AboutUs" onClick={burgerMenuHandler}>About</a>
                    </div>

                    <div>
                        <Link to='/' >Contact</Link>
                    </div>

                </div>


            </div>

            {/* <div className="menu" data-aos="fade-right" data-aos-delay="1000"> */}
            <div className="menu" data-aos='fade-right' data-aos-delay="100">


                <div>
                    <a href="#Home" onClick={burgerMenuHandler}>Home</a>
                </div>

                <div>
                    <Link to='/list' >Rooms</Link>
                </div>


                <div>
                    <a href="#AboutUs" onClick={burgerMenuHandler}>About</a>
                </div>

                <div>
                    <a href="#footer" onClick={burgerMenuHandler}>Contact</a>
                </div>


            </div>

            <div className="logo" data-aos='fade-up' data-aos-delay="100">BookUp</div>


            <div className="userMenu" data-aos='fade-left'>
                {/* <button>Book Room</button> */}

                {

                    isGuestAuthonticated ?

                        // If user login, then dropdown window will be show 
                        <div className="userIcon" onClick={() => setLoginMenu((pre) => !pre)}>
                            < FaRegCircleUser />
                        </div>

                        :

                        <Link to='/guestProfile' className='userIcon'>< FaRegCircleUser /></Link>


                }



                {

                    loginMenu &&

                    <div className="loginMenu" >

                        <Link to={'/guestProfile'} >Profile</Link>

                        <Link to={'/login'} onClick={onSubmitHandler}>Logout</Link>

                    </div>


                }

            </div>

        </header>
    );
};

export default Header;