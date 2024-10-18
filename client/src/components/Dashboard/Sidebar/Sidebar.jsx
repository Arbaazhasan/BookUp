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
import { getRoomListAction } from '../../../Redux/actions/controlPanelAction';
import { useDispatch } from 'react-redux';


const Sidebar = () => {

    const dispatch = useDispatch();

    const getRoomListHandler = () => {
        getRoomListAction(dispatch);
    };


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

                <div>
                    <Link to={'/dashboard'}>
                        <span><MdDashboard /></span>
                        <p>Dashbaord</p>
                    </Link>
                </div>

                <div>
                    <Link to={'/dashboard/profile'}>
                        <span><FaRegUser /></span>
                        <p>Profile</p>
                    </Link>
                </div>

                <div>
                    <Link to={'/dashboard/bookings'}>
                        <span><RiReservedLine /></span>
                        <p>Bookings</p>
                    </Link>
                </div>


                <div className="heading">
                    <p>Control Panel</p>
                </div>

                <div onClick={() => getRoomListHandler()}>
                    <Link to={'/dashboard/rooms'}>
                        <span><MdOutlineBedroomChild /></span>
                        <p>Rooms</p>
                    </Link>
                </div>

                <div >

                    <Link to={'/dashboard/add'} >
                        <span><IoIosAddCircleOutline /></span>

                        <p>Add Room</p>
                    </Link>

                </div>

                <div>

                    <Link to={'/dashboard/update'}>
                        <span><MdOutlineUpdate /></span>
                        <p>Update Room</p>
                    </Link>
                </div>

                <div>

                    <Link to={'/dashboard/delete'}>
                        <span><MdOutlineDelete /></span>

                        <p>Delete Room</p>

                    </Link>

                </div>

            </div>

        </div >
    );
};

export default Sidebar;