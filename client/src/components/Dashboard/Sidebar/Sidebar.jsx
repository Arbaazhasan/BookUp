import React from 'react';
import './sidebar.scss';
import { TbBrandBooking } from "react-icons/tb";
import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RiReservedLine } from "react-icons/ri";
import { MdOutlineBedroomChild } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div className="heading">
                <span><TbBrandBooking /></span>
                <h1>User Dashbaord</h1>
            </div>


            <div className="options">

                <div className="heading">
                    <p>Statistics</p>
                </div>

                <Link to={'/dashboard'}>
                    <span><MdDashboard /></span>
                    <p>Dashbaord</p>
                </Link>

                <Link to={'/dashboard/profile'}>
                    <span><FaRegUser /></span>
                    <p>Profile</p>
                </Link>

                <Link to={'/dashboard/bookings'}>
                    <span><RiReservedLine /></span>
                    <p>Bookings</p>
                </Link>



                <div className="heading">
                    <p>Control Panel</p>
                </div>

                <Link to={'/dashboard/rooms'}>
                    <span><MdOutlineBedroomChild /></span>
                    <p>Rooms</p>
                </Link>

                <Link to={'/dashboard/add'}>
                    <span><IoIosAddCircleOutline /></span>

                    <p>Add Room</p>
                </Link>

                <Link to={'/dashboard/update'}>
                    <span><MdOutlineUpdate /></span>
                    <p>Update Room</p>
                </Link>


                <Link to={'/dashboard/delete'}>
                    <span><MdOutlineDelete /></span>

                    <p>Delete Room</p>

                </Link>



            </div>

        </div >
    );
};

export default Sidebar;