import React from 'react';
import './VideoPlayer.scss';
import { IoIosPlay } from "react-icons/io";

const VideoPlayer = () => {
    return (
        <div className='videoPlayer' >

            <p data-aos="fade-up"   >BookUp</p>

            <h1 data-aos="fade-up">Relax and Enjoy your
                <br />
                Vacation</h1>


            <div className="playBtn" data-aos="fade-up">
                <IoIosPlay />
            </div>




        </div>
    );
};

export default VideoPlayer;