import React from 'react';
import "./profile.scss";
import Widgets from '../Widgets/Widgets';

import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { TbDoorEnter } from "react-icons/tb";
import { TbDoorExit } from "react-icons/tb";
import { PiDoorBold } from "react-icons/pi";




const Profile = () => {
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
                    <form action="">

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
                                <input type="text" />
                            </div>

                            <div>
                                <p>Email Address</p>
                                <input type="text" />
                            </div>

                            <div>
                                <p>First name</p>
                                <input type="text" />
                            </div>

                            <div>
                                <p>Last Name</p>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="ContactInformaiton">

                            <div className='heading'>Contact Information</div>

                            <div>
                                <p>Address</p>
                                <input type="text" />
                            </div>

                            <div className="addressDetails">

                                <div>
                                    <p>City</p>
                                    <input type="text" />
                                </div>


                                <div>
                                    <p>Country</p>
                                    <input type="text" />
                                </div>


                                <div>
                                    <p>Postal Code</p>
                                    <input type="text" />
                                </div>

                            </div>


                        </div>


                        <div className="ContactInformaiton">

                            <div className='heading'>About Me</div>

                            <div>
                                <p>About Me</p>
                                <input type="text" />
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