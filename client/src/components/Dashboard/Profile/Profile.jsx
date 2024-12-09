import React, { useEffect, useState } from 'react';
import "./profile.scss";
import Widgets from '../Widgets/Widgets';

import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { TbDoorEnter } from "react-icons/tb";
import { TbDoorExit } from "react-icons/tb";
import { PiDoorBold } from "react-icons/pi";
import { updateUserProfileAction } from '../../../Redux/actions/controlPanelAction';
import { useDispatch } from 'react-redux';


const Profile = () => {

    const dispatch = useDispatch();
    const [userName, setUserName] = useState();
    const [email, setEmail] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [postalCode, setPostalCode] = useState();
    const [aboutMe, setAboutMe] = useState();


    const onSubmitHandler = (e) => {
        e.preventDefault();
        updateUserProfileAction(
            dispatch,
            userName,
            email,
            firstName,
            lastName,
            address,
            city,
            country,
            postalCode,
            aboutMe,
        );
    };


    return (
        <div className='profile'>

            <div className="mainImage">
                <div className="bgImg">
                    <img src="/public/images/Rooms/img1.jpg" alt="" />
                </div>

                <div className='heading'>
                    <h1>Grand Hotel</h1>
                </div>

            </div>

            <div className="userProfile">

                <div className="left">
                    <form action="" onSubmit={onSubmitHandler}>

                        <div className='saveBtn'>
                            <p>Edit Profile</p>
                            <button>Save</button>
                        </div>

                        <div className="userInformation">

                            <div className="heading">
                                User Informaiton
                            </div>

                            <div>
                                <p>Username</p>
                                <input type="text" maxLength={40} onChange={(e) => setUserName(e.target.value)} />
                            </div>

                            <div>
                                <p>Email Address</p>
                                <input type="email" maxLength={40} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div>
                                <p>First name</p>
                                <input type="text" pattern='[A-Za-z]*$' title='Enter the text only' onChange={(e) => setFirstName(e.target.value)} />
                            </div>

                            <div>
                                <p>Last Name</p>
                                <input type="text" pattern='[A-Za-z]*$' title='Enter the text only' maxLength={40} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                        </div>

                        <div className="ContactInformaiton">

                            <div className='heading'>Contact Information</div>

                            <div>
                                <p>Address</p>
                                <input type="text" maxLength={40} onChange={(e) => setAddress(e.target.value)} />
                            </div>

                            <div className="addressDetails">

                                <div>
                                    <p>City</p>
                                    <input type="text" pattern='[A-Za-z]*$' title='Enter the text only.' maxLength={40} onChange={(e) => setCity(e.target.value)} />
                                </div>


                                <div>
                                    <p>Country</p>
                                    <input type="text" pattern='[A-Za-z]*$' title='Enter the text only.' maxLength={40} onChange={(e) => setCountry(e.target.value)} />
                                </div>


                                <div>
                                    <p>Postal Code</p>
                                    <input type="number" pattern='[0-9]{10}' title='Enter Number only ' maxLength={10} onChange={(e) => setPostalCode(e.target.value)} />
                                </div>

                            </div>


                        </div>


                        <div className="ContactInformaiton">

                            <div className='heading'>About Me</div>

                            <div>
                                <p>About Me</p>
                                <input type="text" maxLength={40} onChange={(e) => setAboutMe(e.target.value)} />
                            </div>
                        </div>





                    </form>

                </div>


                <div className="right">


                    <Widgets heading={6} title={'New Bookings'} icon={<FaRegBookmark />} />
                    <Widgets heading={21} title={'Pendind Bookings'} icon={<MdOutlineDateRange />} />
                    <Widgets heading={4} title={'Check-In'} icon={<TbDoorEnter />} />
                    <Widgets heading={12} title={'Check-Out'} icon={<TbDoorExit />} />
                    <Widgets heading={9} title={'Available Rooms'} icon={<PiDoorBold />} />


                </div>


            </div>



        </div>
    );
};

export default Profile;