import React, { useEffect, useState } from 'react';
import './profile.scss';
import { useDispatch, useSelector } from 'react-redux';
import { guestLogout } from '../../Redux/actions/guestAuthActions';
import { getAllBookingListAction } from '../../Redux/actions/bookingAction';

const Profile = () => {

    const dispatch = useDispatch();
    const { allBookingList } = useSelector(state => state.bookingReducer)
    const [isProfile, setIsProfile] = useState(true);

    const profileToggler = () => {

        setIsProfile(pre => !pre);
    };

    useEffect(() => {

        getAllBookingListAction(dispatch);

    }, [isProfile,]);

    useEffect(() => {

        console.log(allBookingList);
    }, [allBookingList])



    return (
        <div className='guestProfile'>


            <div className="guestHeader">

                <div className="guestMenu">
                    {/* <p onClick={profileToggler} style={{ borderBottom: isProfile ? "2px solid red" : "" }}>Profile</p> */}
                    <p onClick={profileToggler} style={{ borderBottom: !isProfile ? "2px solid red" : "" }}>Bookings </p>
                </div>

                <div className="logoutBtn">
                    <button onClick={() => guestLogout(dispatch)} >Logout</button>
                </div>


            </div>


            <div className="guestProfileWindow">

                {
                    // isProfile ?

                    // User Profile Deatils  
                    // <form action="">


                    //     <div className="top">
                    //         <p>Profile</p>

                    //         <button>Edit</button>
                    //     </div>

                    //     <table>
                    //         <tbody>

                    //             <tr>
                    //                 <td><label htmlFor="">First Name</label></td>
                    //                 <td><input type="text" /></td>
                    //             </tr>





                    //             <tr>
                    //                 <td><label htmlFor="">Last Name</label></td>
                    //                 <td><input type="text" /></td>
                    //             </tr>



                    //             <tr>
                    //                 <td><label htmlFor="">Address</label></td>
                    //                 <td><input type="text" /></td>
                    //             </tr>



                    //             <tr>
                    //                 <td><label htmlFor="">Phone Number</label></td>
                    //                 <td><input type="text" /></td>
                    //             </tr>


                    //             <tr>
                    //                 <td><label htmlFor="">Alternet Phone Number</label></td>
                    //                 <td><input type="text" /></td>
                    //             </tr>



                    //             <tr>
                    //                 <td><label htmlFor="">City</label></td>
                    //                 <td><input type="text" /></td>
                    //             </tr>



                    //             <tr>
                    //                 <td><label htmlFor="">Pin-code</label></td>
                    //                 <td><input type="text" /></td>
                    //             </tr>



                    //             <tr>
                    //                 <td><label htmlFor="">State</label></td>
                    //                 <td><input type="text" /></td>
                    //             </tr>



                    //             <tr>
                    //                 <td><label htmlFor="">Country</label></td>
                    //                 <td><input type="text" /></td>
                    //             </tr>


                    //         </tbody>

                    //     </table>

                    // </form>

                    // :



                    <div className="bookings">

                        {
                            allBookingList?.map((val, index) => (
                                <div className="booking">

                                    <div className="hotelDetails">
                                        <div className="hotelImage">
                                            <div>
                                                <img src="/images/Hotels/img3.jpg" alt="" />
                                            </div>
                                        </div>

                                        <div className="details">
                                            <h2>{val.vendorId.username} </h2>
                                            <p>{val.vendorId.address} </p>
                                            <p>{val.vendorId.city}, {val.vendorId.country} </p>
                                            <p>9058714187</p>
                                        </div>
                                    </div>

                                    <div className="bookingDetails">
                                        <div>
                                            <p>Booking Id : </p>
                                            <p>{val.bookingId}</p>
                                        </div>

                                        <div>
                                            <p>Booking Date :</p>
                                            <p>{new Date(val.reservationDates.from).toLocaleDateString()} to {new Date(val.reservationDates.to).toLocaleDateString()}</p>

                                        </div>

                                    </div>


                                    <div className="userDetails">
                                        <h3>User Details </h3>
                                        <p>{val.customerDetails.name}</p>
                                        <p>{val.customerDetails.phoneNumber}</p>
                                        <p>{val.customerDetails.city}, {val.customerDetails.country}</p>
                                        <p>{val.customerDetails.adults} Adults, {val.customerDetails.adults} Childrens</p>
                                        <p>No of Rooms : {val.noOfBookedRooms}</p>
                                    </div>

                                </div>

                            ))
                        }


                    </div>


                }





            </div>


        </div>
    );
};

export default Profile;