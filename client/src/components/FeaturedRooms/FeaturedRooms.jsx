import React from 'react';
import './featuredRooms.scss';

const FeaturedRooms = () => {
    return (
        <div className='featuredRooms'>

            <div className="title">
                <p>Featured</p>

                <h1>Choose a Better Room</h1>
            </div>

            <div className="rooms">


                <div className="room">

                    <div className="roomImage">
                        <img src="/public/images/Rooms/img1.jpg" alt="" />

                    </div>


                    <div className="nameAndPrice">
                        <p>From $250/night</p>

                        <h1>Superior Room</h1>

                    </div>

                </div>


                <div className="room">

                    <div className="roomImage">
                        <img src="/public/images/Rooms/img2.jpg" alt="" />

                    </div>


                    <div className="nameAndPrice">
                        <p>From $250/night</p>

                        <h1>Superior Room</h1>

                    </div>

                </div>


                <div className="room">

                    <div className="roomImage">
                        <img src="/public/images/Rooms/img3.jpg" alt="" />

                    </div>


                    <div className="nameAndPrice">
                        <p>From $250/night</p>

                        <h1>Superior Room</h1>

                    </div>

                </div>


                <div className="room">

                    <div className="roomImage">
                        <img src="/public/images/Rooms/img4.jpg" alt="" />

                    </div>


                    <div className="nameAndPrice">
                        <p>From $250/night</p>

                        <h1>Superior Room</h1>

                    </div>

                </div>



            </div>

        </div>
    );
};

export default FeaturedRooms;