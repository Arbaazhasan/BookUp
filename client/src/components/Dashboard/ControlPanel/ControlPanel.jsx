import React from 'react';
import './controlPanel.scss';
import Widgets from '../Widgets/Widgets';
import AreaApexChart from '../../../utils/AreaApexChart';
import BarApexChart from '../../../utils/BarApexChart';

import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { TbDoorEnter } from "react-icons/tb";
import { TbDoorExit } from "react-icons/tb";

const ControlPanel = () => {
    return (
        <div className='contnrolpanel'>
            <div className='widgetsbar'>



                <Widgets heading={6} title={'New Bookings'} icon={<FaRegBookmark />} />
                <Widgets heading={21} title={'Pendind Bookings'} icon={<MdOutlineDateRange />} />
                <Widgets heading={4} title={'Check-In'} icon={<TbDoorEnter />} />
                <Widgets heading={12} title={'Check-Out'} icon={<TbDoorExit />} />


            </div>

            <div className='charts'>


                <div className="Chart1">
                    <h3>Booking Overview</h3>
                    <AreaApexChart />
                </div>



                <div className="Chart1">
                    <h3>Booking Overview</h3>
                    <div className="chart">

                        <BarApexChart />
                    </div>

                </div>




            </div>



        </div>
    );
};

export default ControlPanel;
