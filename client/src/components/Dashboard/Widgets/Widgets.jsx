import React from 'react';
import './widgets.scss';

const Widgets = ({ heading, number, percent, icon }) => {
    return (
        <div className='widgets'>


            <div>
                <div className="widgetIcon">{icon}</div>
                <p>{heading}</p>
                <h2>{number}</h2>
                <span><span>+{percent}%</span> yesterday</span>
            </div>

            {/* 
            <div>
                <div className="widgetIcon"><TbDoorEnter /></div>

                <p>Today's Check In </p>
                <h2>23</h2>
                <span><span>+55%</span> yesterday</span>
            </div>


            <div>
                <div className="widgetIcon"><TbDoorExit /></div>
                <p>Today's Check Out</p>
                <h2>23</h2>
                <span><span>+55%</span> yesterday</span>
            </div>


            <div>
                <div className="widgetIcon"><MdOutlineKingBed /></div>
                <p>Available Rooms</p>
                <h2>23</h2>
                <span><span>+55%</span> yesterday</span>
            </div> */}


        </div>
    );
};

export default Widgets;