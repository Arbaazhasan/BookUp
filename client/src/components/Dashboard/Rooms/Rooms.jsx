import React, { useEffect, useState } from 'react';
import './rooms.scss';

import { CiImageOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRoomListAction } from '../../../Redux/actions/controlPanelAction';

const Rooms = () => {

    const { roomList } = useSelector(state => state.controlPanelReducer);
    const dispatch = useDispatch();

    // getting rooms if page get Refresh
    useEffect(() => {
        getRoomListAction(dispatch);
    }, []);


    return (
        <div className='rooms'>

            {
                roomList?.map(room => {
                    return <div className="room" key={room._id}>
                        <div className="images">
                            <div className='main'>
                                {/* <CiImageOn />  */}

                                <img src={room.images[0].url} alt="" />

                            </div>

                            <div className="imagesArray">
                                {/* <div><CiImageOn /></div> */}

                                {
                                    room?.images?.map(image => {
                                        return <div key={image.public_id}>
                                            <img src={image.url} alt="" />
                                        </div>;
                                    })
                                }

                                {

                                    room.images.length > 6 &&
                                    <div>
                                        <div>
                                            {room.images.length < 6 ? '' : `+` + room.images.length - 6}
                                        </div>
                                        <img src={"/public/images/Rooms/img3.jpg"} alt="" />
                                    </div>

                                }
                            </div>
                        </div>

                        <div className="details">
                            <h1>{room.name}</h1>

                            <p>{room.description}</p>

                            <div>
                                <p>₹{room.price}/-</p>

                                <div>
                                    <Link to={`/dashboard/rooms/room/${room.roomNo}`}>
                                        <button>View</button>
                                    </Link>
                                </div>

                            </div>

                        </div>

                    </div>;
                })
            }

        </div >
    );
};

export default Rooms;