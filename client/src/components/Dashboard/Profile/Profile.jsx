// import React, { useDeferredValue, useEffect, useState } from 'react';
// import "./profile.scss";
// import Widgets from '../Widgets/Widgets';

// import { FaRegBookmark } from "react-icons/fa6";
// import { MdOutlineDateRange } from "react-icons/md";
// import { TbDoorEnter } from "react-icons/tb";
// import { TbDoorExit } from "react-icons/tb";
// import { PiDoorBold } from "react-icons/pi";
// import { updateUserProfileAction } from '../../../Redux/actions/controlPanelAction';
// import { useDispatch, useSelector } from 'react-redux';


// const Profile = () => {

//     const dispatch = useDispatch();

//     const { vendorProfile } = useSelector(state => state.vendorAuthReducer)

//     const [userName, setUserName] = useState();
//     const [email, setEmail] = useState();
//     const [firstName, setFirstName] = useState();
//     const [lastName, setLastName] = useState();
//     const [address, setAddress] = useState();
//     const [city, setCity] = useState();
//     const [country, setCountry] = useState();
//     const [postalCode, setPostalCode] = useState();
//     const [aboutMe, setAboutMe] = useState();


//     const onSubmitHandler = (e) => {
//         e.preventDefault();
//         updateUserProfileAction(
//             dispatch,
//             userName,
//             email,
//             firstName,
//             lastName,
//             address,
//             city,
//             country,
//             postalCode,
//             aboutMe,
//         );
//     };


//     useEffect(() => {
//         console.log(vendorProfile)
//     }, [vendorProfile])

//     return (
//         <div className='profile'>

//             <div className="mainImage">
//                 <div className="bgImg">
//                     <img src="/public/images/Rooms/img1.jpg" alt="" />
//                 </div>

//                 <div className='heading'>
//                     <h1>{vendorProfile?.username}</h1>
//                 </div>

//             </div>

//             <div className="userProfile">

//                 <div className="left">
//                     <form action="" onSubmit={onSubmitHandler}>

//                         <div className='saveBtn'>
//                             <p>Edit Profile</p>
//                             <button>Save</button>
//                         </div>

//                         <div className="userInformation">

//                             <div className="heading">
//                                 User Informaiton
//                             </div>

//                             <div>
//                                 <p>Username</p>
//                                 <input type="text" maxLength={40} onChange={(e) => setUserName(e.target.value)} value={vendorProfile?.username} />
//                             </div>

//                             <div>
//                                 <p>Email Address</p>
//                                 <input type="email" maxLength={40} onChange={(e) => setEmail(e.target.value)} value={vendorProfile?.email} />
//                             </div>

//                             <div>
//                                 <p>First name</p>
//                                 <input type="text" pattern='[A-Za-z]*$' title='Enter the text only' onChange={(e) => setFirstName(e.target.value)} value={vendorProfile?.firstName} />
//                             </div>

//                             <div>
//                                 <p>Last Name</p>
//                                 <input type="text" pattern='[A-Za-z]*$' title='Enter the text only' maxLength={40} onChange={(e) => setLastName(e.target.value)} value={vendorProfile?.lastName} />
//                             </div>
//                         </div>

//                         <div className="ContactInformaiton">

//                             <div className='heading'>Contact Information</div>

//                             <div>
//                                 <p>Address</p>
//                                 <input type="text" maxLength={40} onChange={(e) => setAddress(e.target.value)} value={vendorProfile?.address} />
//                             </div>

//                             <div className="addressDetails">

//                                 <div>
//                                     <p>City</p>
//                                     <input type="text" pattern='[A-Za-z]*$' title='Enter the text only.' maxLength={40} onChange={(e) => setCity(e.target.value)} value={vendorProfile?.city} />
//                                 </div>


//                                 <div>
//                                     <p>Country</p>
//                                     <input type="text" pattern='[A-Za-z]*$' title='Enter the text only.' maxLength={40} onChange={(e) => setCountry(e.target.value)} value={vendorProfile?.country} />
//                                 </div>


//                                 <div>
//                                     <p>Postal Code</p>
//                                     <input type="number" pattern='[0-9]{10}' title='Enter Number only ' maxLength={10} onChange={(e) => setPostalCode(e.target.value)} value={vendorProfile?.postalCode} />
//                                 </div>

//                             </div>


//                         </div>


//                         <div className="ContactInformaiton">

//                             {/* <div className='heading'>About Me</div> */}

//                             {/* <div>
//                                 <p>About Me</p>
//                                 <input type="text" maxLength={40} onChange={(e) => setAboutMe(e.target.value)} />
//                             </div> */}
//                         </div>





//                     </form>

//                 </div>


//                 {/* <div className="right">


//                     <Widgets heading={6} title={'New Bookings'} icon={<FaRegBookmark />} />
//                     <Widgets heading={21} title={'Pendind Bookings'} icon={<MdOutlineDateRange />} />
//                     <Widgets heading={4} title={'Check-In'} icon={<TbDoorEnter />} />
//                     <Widgets heading={12} title={'Check-Out'} icon={<TbDoorExit />} />
//                     <Widgets heading={9} title={'Available Rooms'} icon={<PiDoorBold />} />


//                 </div> */}


//             </div>



//         </div>
//     );
// };

// export default Profile;


import React, { useEffect, useState } from 'react';
import "./profile.scss";
import Widgets from '../Widgets/Widgets';

import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { TbDoorEnter, TbDoorExit } from "react-icons/tb";
import { PiDoorBold } from "react-icons/pi";
import { updateUserProfileAction } from '../../../Redux/actions/controlPanelAction';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {

    const dispatch = useDispatch();
    const { vendorProfile } = useSelector(state => state.vendorAuthReducer);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [aboutMe, setAboutMe] = useState("");

    useEffect(() => {
        if (vendorProfile) {
            setUserName(vendorProfile.username || "");
            setEmail(vendorProfile.email || "");
            setFirstName(vendorProfile.firstName || "");
            setLastName(vendorProfile.lastName || "");
            setAddress(vendorProfile.address || "");
            setCity(vendorProfile.city || "");
            setCountry(vendorProfile.country || "");
            setPostalCode(vendorProfile.postalCode || "");
            setAboutMe(vendorProfile.aboutMe || "");
        }
    }, [vendorProfile]);

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
            aboutMe
        );
    };

    return (
        <div className='profile'>
            <div className="mainImage">
                <div className="bgImg">
                    <img src="/public/images/Rooms/img1.jpg" alt="" />
                </div>
                <div className='heading'>
                    <h1>{vendorProfile?.username}</h1>
                </div>
            </div>

            <div className="userProfile">
                <div className="left">
                    <form onSubmit={onSubmitHandler}>
                        <div className='saveBtn'>
                            <p>Edit Profile</p>
                            <button type="submit">Save</button>
                        </div>

                        <div className="userInformation">
                            <div className="heading">User Information</div>

                            <div>
                                <p>Username</p>
                                <input
                                    type="text"
                                    maxLength={40}
                                    onChange={(e) => setUserName(e.target.value)}
                                    value={userName}
                                />
                            </div>

                            <div>
                                <p>Email Address</p>
                                <input
                                    type="email"
                                    maxLength={40}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>

                            <div>
                                <p>First Name</p>
                                <input
                                    type="text"
                                    pattern='[A-Za-z]*$'
                                    title='Enter text only'
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                />
                            </div>

                            <div>
                                <p>Last Name</p>
                                <input
                                    type="text"
                                    pattern='[A-Za-z]*$'
                                    title='Enter text only'
                                    maxLength={40}
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                />
                            </div>
                        </div>

                        <div className="ContactInformaiton">
                            <div className='heading'>Contact Information</div>

                            <div>
                                <p>Address</p>
                                <input
                                    type="text"
                                    maxLength={40}
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                />
                            </div>

                            <div className="addressDetails">
                                <div>
                                    <p>City</p>
                                    <input
                                        type="text"
                                        pattern='[A-Za-z]*$'
                                        title='Enter text only'
                                        maxLength={40}
                                        onChange={(e) => setCity(e.target.value)}
                                        value={city}
                                    />
                                </div>

                                <div>
                                    <p>Country</p>
                                    <input
                                        type="text"
                                        pattern='[A-Za-z]*$'
                                        title='Enter text only'
                                        maxLength={40}
                                        onChange={(e) => setCountry(e.target.value)}
                                        value={country}
                                    />
                                </div>

                                <div>
                                    <p>Postal Code</p>
                                    <input
                                        type="number"
                                        title='Enter numbers only'
                                        onChange={(e) => setPostalCode(e.target.value)}
                                        value={postalCode}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Uncomment if you want About Me section */}
                        {/* <div className="ContactInformaiton">
                            <div className='heading'>About Me</div>
                            <div>
                                <p>About Me</p>
                                <input
                                    type="text"
                                    maxLength={100}
                                    onChange={(e) => setAboutMe(e.target.value)}
                                    value={aboutMe}
                                />
                            </div>
                        </div> */}
                    </form>
                </div>

                {/* Right section for widgets, uncomment if needed */}
                {/* <div className="right">
                    <Widgets heading={6} title={'New Bookings'} icon={<FaRegBookmark />} />
                    <Widgets heading={21} title={'Pending Bookings'} icon={<MdOutlineDateRange />} />
                    <Widgets heading={4} title={'Check-In'} icon={<TbDoorEnter />} />
                    <Widgets heading={12} title={'Check-Out'} icon={<TbDoorExit />} />
                    <Widgets heading={9} title={'Available Rooms'} icon={<PiDoorBold />} />
                </div> */}
            </div>
        </div>
    );
};

export default Profile;
