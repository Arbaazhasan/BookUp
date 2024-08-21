import React from 'react';
import './controlPanel.scss';
import Widgets from '../Widgets/Widgets';
import { FaRegBookmark } from "react-icons/fa6";
import AreaApexChart from '../../../utils/AreaApexChart';
import BarApexChart from '../../../utils/BarApexChart';

const ControlPanel = () => {
    return (
        <div className='contnrolpanel'>
            <div className='widgetsbar'>
                <Widgets backgroundColor={{ first: "#4bc3ff", second: "#59D2FF" }} heading={56} title={'New Bookings'} icon={<FaRegBookmark />} />
                <Widgets backgroundColor={{ first: "#4bc3ff", second: "#59D2FF" }} heading={80} title={'Pending Bookings'} icon={<FaRegBookmark />} />
                <Widgets backgroundColor={{ first: "#4bc3ff", second: "#59D2FF" }} heading={6} title={'Check-In'} icon={<FaRegBookmark />} />
                <Widgets backgroundColor={{ first: "#4bc3ff", second: "#59D2FF" }} heading={16} title={'Check-Out'} icon={<FaRegBookmark />} />
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
