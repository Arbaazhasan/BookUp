import React, { useEffect, useState } from 'react';
import './profile.scss';
import { useDispatch } from 'react-redux';
import { guestLogout } from '../../Redux/actions/guestAuthActions';

const Profile = () => {

    const dispatch = useDispatch();
    const [isProfile, setIsProfile] = useState(true);

    const profileToggler = () => {

        setIsProfile(pre => !pre);
    };

    useEffect(() => {
    }, [isProfile]);


    return (
        <div className='guestProfile'>


            <div className="guestHeader">

                <div className="guestMenu">
                    <p onClick={profileToggler} style={{ borderBottom: isProfile ? "2px solid red" : "" }}>Profile</p>
                    <p onClick={profileToggler} style={{ borderBottom: !isProfile ? "2px solid red" : "" }}>Bookings </p>
                </div>

                <div className="logoutBtn">
                    <button onClick={() => guestLogout(dispatch)} >Logout</button>
                </div>


            </div>


            <div className="guestProfileWindow">

                {
                    isProfile ?

                        // User Profile Deatils  
                        <form action="">


                            <div className="top">
                                <p>Profile</p>

                                <button>Edit</button>
                            </div>

                            <table>
                                <tbody>

                                    <tr>
                                        <td><label htmlFor="">First Name</label></td>
                                        <td><input type="text" /></td>
                                    </tr>





                                    <tr>
                                        <td><label htmlFor="">Last Name</label></td>
                                        <td><input type="text" /></td>
                                    </tr>



                                    <tr>
                                        <td><label htmlFor="">Address</label></td>
                                        <td><input type="text" /></td>
                                    </tr>



                                    <tr>
                                        <td><label htmlFor="">Phone Number</label></td>
                                        <td><input type="text" /></td>
                                    </tr>


                                    <tr>
                                        <td><label htmlFor="">Alternet Phone Number</label></td>
                                        <td><input type="text" /></td>
                                    </tr>



                                    <tr>
                                        <td><label htmlFor="">City</label></td>
                                        <td><input type="text" /></td>
                                    </tr>



                                    <tr>
                                        <td><label htmlFor="">Pin-code</label></td>
                                        <td><input type="text" /></td>
                                    </tr>



                                    <tr>
                                        <td><label htmlFor="">State</label></td>
                                        <td><input type="text" /></td>
                                    </tr>



                                    <tr>
                                        <td><label htmlFor="">Country</label></td>
                                        <td><input type="text" /></td>
                                    </tr>


                                </tbody>

                            </table>

                        </form>

                        :



                        <div className="bookings">




                            <div className="booking">

                                <div className="hotelDetails">
                                    <div className="hotelImage">
                                        <div>
                                            <img src="/images/Hotels/img3.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="details">
                                        <h2>Hotel Grand </h2>
                                        <p>Bazar Mufti Nawabpura </p>
                                        <p>Moradbad - 24004, India  </p>
                                        <p>9058714187</p>
                                    </div>
                                </div>

                                <div className="bookingDetails">
                                    <div>
                                        <p>Booking Id : </p>
                                        <p>#235876UO4</p>
                                    </div>

                                    <div>
                                        <p>Booking Date :</p>
                                        <p>13-09-2024</p>

                                    </div>

                                </div>


                                <div className="userDetails">
                                    <h3>User Details </h3>
                                    <p>Arbaz Hasan</p>
                                    <p>Bazar Mufti Nawabpura </p>
                                    <p>Moradbad - 24004, India  </p>
                                    <p>9058714187</p>
                                    <p>3 Adults, 2 Childrens</p>
                                </div>

                            </div>



                            <div className="booking">

                                <div className="hotelDetails">
                                    <div className="hotelImage">
                                        <div>
                                            <img src="/images/Hotels/img3.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="details">
                                        <h2>Hotel Grand </h2>
                                        <p>Bazar Mufti Nawabpura </p>
                                        <p>Moradbad - 24004, India  </p>
                                        <p>9058714187</p>
                                    </div>
                                </div>

                                <div className="bookingDetails">
                                    <div>
                                        <p>Booking Id : </p>
                                        <p>#235876UO4</p>
                                    </div>

                                    <div>
                                        <p>Booking Date :</p>
                                        <p>13-09-2024</p>

                                    </div>

                                </div>


                                <div className="userDetails">
                                    <h3>User Details </h3>
                                    <p>Arbaz Hasan</p>
                                    <p>Bazar Mufti Nawabpura </p>
                                    <p>Moradbad - 24004, India  </p>
                                    <p>9058714187</p>
                                    <p>3 Adults, 2 Childrens</p>
                                </div>

                            </div>



                            <div className="booking">

                                <div className="hotelDetails">
                                    <div className="hotelImage">
                                        <div>
                                            <img src="/images/Hotels/img3.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="details">
                                        <h2>Hotel Grand </h2>
                                        <p>Bazar Mufti Nawabpura </p>
                                        <p>Moradbad - 24004, India  </p>
                                        <p>9058714187</p>
                                    </div>
                                </div>

                                <div className="bookingDetails">
                                    <div>
                                        <p>Booking Id : </p>
                                        <p>#235876UO4</p>
                                    </div>

                                    <div>
                                        <p>Booking Date :</p>
                                        <p>13-09-2024</p>

                                    </div>

                                </div>


                                <div className="userDetails">
                                    <h3>User Details </h3>
                                    <p>Arbaz Hasan</p>
                                    <p>Bazar Mufti Nawabpura </p>
                                    <p>Moradbad - 24004, India  </p>
                                    <p>9058714187</p>
                                    <p>3 Adults, 2 Childrens</p>
                                </div>

                            </div>



                            <div className="booking">

                                <div className="hotelDetails">
                                    <div className="hotelImage">
                                        <div>
                                            <img src="/images/Hotels/img3.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="details">
                                        <h2>Hotel Grand </h2>
                                        <p>Bazar Mufti Nawabpura </p>
                                        <p>Moradbad - 24004, India  </p>
                                        <p>9058714187</p>
                                    </div>
                                </div>

                                <div className="bookingDetails">
                                    <div>
                                        <p>Booking Id : </p>
                                        <p>#235876UO4</p>
                                    </div>

                                    <div>
                                        <p>Booking Date :</p>
                                        <p>13-09-2024</p>

                                    </div>

                                </div>


                                <div className="userDetails">
                                    <h3>User Details </h3>
                                    <p>Arbaz Hasan</p>
                                    <p>Bazar Mufti Nawabpura </p>
                                    <p>Moradbad - 24004, India  </p>
                                    <p>9058714187</p>
                                    <p>3 Adults, 2 Childrens</p>
                                </div>

                            </div>



                            <div className="booking">

                                <div className="hotelDetails">
                                    <div className="hotelImage">
                                        <div>
                                            <img src="/images/Hotels/img3.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="details">
                                        <h2>Hotel Grand </h2>
                                        <p>Bazar Mufti Nawabpura </p>
                                        <p>Moradbad - 24004, India  </p>
                                        <p>9058714187</p>
                                    </div>
                                </div>

                                <div className="bookingDetails">
                                    <div>
                                        <p>Booking Id : </p>
                                        <p>#235876UO4</p>
                                    </div>

                                    <div>
                                        <p>Booking Date :</p>
                                        <p>13-09-2024</p>

                                    </div>

                                </div>


                                <div className="userDetails">
                                    <h3>User Details </h3>
                                    <p>Arbaz Hasan</p>
                                    <p>Bazar Mufti Nawabpura </p>
                                    <p>Moradbad - 24004, India  </p>
                                    <p>9058714187</p>
                                    <p>3 Adults, 2 Childrens</p>
                                </div>

                            </div>



                            <div className="booking">

                                <div className="hotelDetails">
                                    <div className="hotelImage">
                                        <div>
                                            <img src="/images/Hotels/img3.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="details">
                                        <h2>Hotel Grand </h2>
                                        <p>Bazar Mufti Nawabpura </p>
                                        <p>Moradbad - 24004, India  </p>
                                        <p>9058714187</p>
                                    </div>
                                </div>

                                <div className="bookingDetails">
                                    <div>
                                        <p>Booking Id : </p>
                                        <p>#235876UO4</p>
                                    </div>

                                    <div>
                                        <p>Booking Date :</p>
                                        <p>13-09-2024</p>

                                    </div>

                                </div>


                                <div className="userDetails">
                                    <h3>User Details </h3>
                                    <p>Arbaz Hasan</p>
                                    <p>Bazar Mufti Nawabpura </p>
                                    <p>Moradbad - 24004, India  </p>
                                    <p>9058714187</p>
                                    <p>3 Adults, 2 Childrens</p>
                                </div>

                            </div>



                            <div className="booking">

                                <div className="hotelDetails">
                                    <div className="hotelImage">
                                        <div>
                                            <img src="/images/Hotels/img3.jpg" alt="" />
                                        </div>
                                    </div>

                                    <div className="details">
                                        <h2>Hotel Grand </h2>
                                        <p>Bazar Mufti Nawabpura </p>
                                        <p>Moradbad - 24004, India  </p>
                                        <p>9058714187</p>
                                    </div>
                                </div>

                                <div className="bookingDetails">
                                    <div>
                                        <p>Booking Id : </p>
                                        <p>#235876UO4</p>
                                    </div>

                                    <div>
                                        <p>Booking Date :</p>
                                        <p>13-09-2024</p>

                                    </div>

                                </div>


                                <div className="userDetails">
                                    <h3>User Details </h3>
                                    <p>Arbaz Hasan</p>
                                    <p>Bazar Mufti Nawabpura </p>
                                    <p>Moradbad - 24004, India  </p>
                                    <p>9058714187</p>
                                    <p>3 Adults, 2 Childrens</p>
                                </div>

                            </div>




                        </div>


                }





            </div>


        </div>
    );
};

export default Profile;