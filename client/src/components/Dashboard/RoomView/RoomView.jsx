import React, { useEffect, useState } from 'react';
import './roomView.scss';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdFullscreenExit, MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import ImageViewer from '../../ImageViewer/ImageViewer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRoomDetailsAction } from '../../../Redux/actions/controlPanelAction';


const RoomView = ({ isDelete }) => {

    const dispatch = useDispatch();
    const { roomDetails } = useSelector(state => state.controlPanelReducer);

    const [imageArray, setImageArray] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);

    const { roomNo } = useParams();

    const nextImage = () => {

        if (currentImage !== imageArray.length - 1) {
            setCurrentImage((preNo) => preNo + 1);

        } else {
            setCurrentImage(0);
        }
    };

    const prevImage = () => {
        if (currentImage !== 0) {
            setCurrentImage((preNo) => preNo - 1);
        } else {
            setCurrentImage(imageArray.length - 1);
        }
    };

    useEffect(() => {

        getRoomDetailsAction(dispatch, roomNo);

    }, [dispatch, roomNo]);

    useEffect(() => {
        if (roomDetails && roomDetails.images)
            setImageArray(roomDetails.images);
        setCurrentImage(0);

    }, [roomDetails]);


    return (
        <div className='roomView'>


            <div className="mainImage">
                <div className="bgImg">
                    <img src="/public/images/Rooms/img1.jpg" alt="" />
                </div>

                <div className='heading'>
                    <h1>{roomDetails?.name}</h1>
                </div>

                {
                    isDelete && <div className="deleteBtn">
                        <button>Delete</button>
                    </div>
                }

            </div>


            <div className="details">

                <div className="left">

                    <div className="desc">

                        <h1>Superior Room</h1>

                        <p>{roomDetails.description}</p>

                        {/* <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores quas consequuntur ad facere maxime molestias sint provident fugit. Deserunt dolorem cum sit quod iure nesciunt totam reprehenderit eligendi ut. Nam consequuntur vero illum optio natus ullam, enim veritatis ipsam repellendus blanditiis voluptatum quas dolores aliquid similique? Aliquam, placeat dolorum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eius?
                            Lorem ipsum dolor sit, amet consectetur
                        </p> */}

                        {/* <span>₹512.00/-</span> */}

                    </div>


                    {/* <div className="rating">

                        <p> <span>4.2 </span>| Excellent </p>

                        <div className="ratingStars">
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStar />
                            <MdOutlineStarBorder />
                            <MdOutlineStarBorder />

                        </div>
                    </div> */}

                    <div className="info">


                        <table>
                            <tbody>

                                <tr>
                                    <td><span>Details</span></td>
                                    <td></td>
                                </tr>


                                <tr>
                                    <td>Room No.</td>
                                    <td>{roomDetails.roomNo}</td>
                                </tr>

                                <tr>
                                    <td>Number of Rooms </td>
                                    <td>{roomDetails.noOfRooms}</td>
                                </tr>

                                <tr>
                                    <td>Available Room</td>
                                    <td>{roomDetails.availableRooms}</td>
                                </tr>

                                <tr>
                                    <td>Room Type </td>
                                    <td> {roomDetails.roomType} </td>
                                </tr>

                                <tr>
                                    <td>Price</td>
                                    <td>₹{roomDetails.price}/-</td>
                                </tr>

                                <tr>
                                    <td>Ratigns</td>
                                    <td>5.3</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>





                </div>

                <div className="right">



                    <div className='slider'>



                        <button className="SliderBtn" onClick={prevImage} >
                            <IoIosArrowBack />
                        </button>

                        <div className="img">
                            <div>
                                {imageArray && <img src={imageArray[currentImage]?.url} alt="" />}
                            </div>
                        </div>

                        <button className="SliderBtn" onClick={nextImage}>
                            <IoIosArrowForward />
                        </button>

                        <div className="fullScreenIcon" >
                            <MdFullscreenExit />

                        </div>



                    </div>
                </div>


            </div>

        </div>
    );
};

export default RoomView;