import React, { useEffect, useState } from 'react';
import './roomView.scss';

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdFullscreenExit } from "react-icons/md";
import ImageViewer from '../../ImageViewer/ImageViewer';



const RoomView = ({ isDelete }) => {
    const arr = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'];
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {

        if (currentImage !== arr.length - 1) {
            setCurrentImage((preNo) => preNo + 1);

        } else {
            setCurrentImage(0);
        }
    };

    const prevImage = () => {
        if (currentImage !== 0) {
            setCurrentImage((preNo) => preNo - 1);
        } else {
            setCurrentImage(arr.length - 1);
        }
    };

    useEffect(() => {

        // console.log(arr[currentImage]);

    }, [currentImage]);


    return (
        <div className='roomView'>

            
            <div className="mainImage">
                <div className="bgImg">
                    <img src="/public/images/Rooms/img1.jpg" alt="" />
                </div>

                <div className='heading'>
                    <h1>Grand Hotel</h1>
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

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores quas consequuntur ad facere maxime molestias sint provident fugit. Deserunt dolorem cum sit quod iure nesciunt totam reprehenderit eligendi ut. Nam consequuntur vero illum optio natus ullam, enim veritatis ipsam repellendus blanditiis voluptatum quas dolores aliquid similique? Aliquam, placeat dolorum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eius?
                            Lorem ipsum dolor sit, amet consectetur
                        </p>

                        {/* <span>₹512.00/-</span> */}

                    </div>

                    {/* 
                    <div className="rating">

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
                                    <td>0120</td>
                                </tr>

                                <tr>
                                    <td>Number of Rooms </td>
                                    <td>35</td>
                                </tr>

                                <tr>
                                    <td>Available Room</td>
                                    <td>30</td>
                                </tr>

                                <tr>
                                    <td>Room Type </td>
                                    <td> Luxery </td>
                                </tr>

                                <tr>
                                    <td>Price</td>
                                    <td>₹531/-</td>
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
                                <img src={`/public/images/Rooms/${arr[currentImage]}`} alt="" />

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