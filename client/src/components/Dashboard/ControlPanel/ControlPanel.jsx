import React, { useEffect, useRef } from 'react';
import './controlPanel.scss';
import Widgets from '../Widgets/Widgets';
import Chart from 'chart.js/auto';

import { MdAddchart } from "react-icons/md";
import { TbDoorEnter } from "react-icons/tb";
import { TbDoorExit } from "react-icons/tb";
import { MdOutlineKingBed } from "react-icons/md";



const ControlPanel = () => {
    const chartRef = useRef(null);

    useEffect(() => {

        const data = [
            { year: 2010, count: 10 },
            { year: 2011, count: 20 },
            { year: 2012, count: 15 },
            { year: 2013, count: 25 },
            { year: 2014, count: 22 },
            { year: 2015, count: 30 },
            { year: 2016, count: 28 },
        ];

        const chart = new Chart(
            chartRef.current,
            {
                type: 'line',
                data: {
                    labels: data.map(row => row.year),
                    datasets: [
                        {
                            // label: 'Acquisitions by year',
                            // data: data.map(row => row.count)

                            label: 'Bookingd Overview',
                            data: [65, 59, 80, 81, 56, 55, 40],
                            fill: false,
                            borderColor: 'rgb(75, 192, 192)',
                            tension: 0.1
                        }
                    ]
                }
            }
        );

        // Clean up the chart when the component is unmounted
        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div className='contnrolpanel'>
            <div className='widgetsbar' >

                <Widgets heading={"Today's Bookings"} number={23} percent={53} icon={<MdAddchart />} />
                <Widgets heading={"Today's Check In"} number={6} percent={26} icon={<TbDoorEnter />} />
                <Widgets heading={"Today's Check Out"} number={2} percent={3} icon={<TbDoorExit />} />
                <Widgets heading={"Available Rooms"} number={15} percent={63} icon={<MdOutlineKingBed />} />

            </div>

            <div className="overview">
                <div className="chart">
                    <h2>Booking Overview</h2>
                    <canvas ref={chartRef}></canvas>
                </div>

                <div className="newBookings">

                    <div className="heading">
                        <h3>New Bookings</h3>
                    </div>

                    <div className="bookingTable">
                        <div className='tableHeading'>

                            <div>
                                Sr. No.
                            </div>

                            <div>
                                Booking Date
                            </div>

                            <div>
                                Room no.
                            </div>

                            <div>
                                Name
                            </div>

                            <div>
                                Peoples
                            </div>


                        </div>



                        <div className="tableDetails">




                            <div className="details">

                                <div>
                                    1
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    10/02/20224
                                    <br />
                                    to
                                    12/02/2024
                                </div>

                                <div>
                                    12e
                                </div>

                                <div>
                                    John Deep
                                </div>

                                <div>
                                    6
                                </div>

                            </div>



                            <div className="details">

                                <div>
                                    1
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    10/02/20224
                                    <br />
                                    to
                                    12/02/2024
                                </div>

                                <div>
                                    12e
                                </div>

                                <div>
                                    John Deep
                                </div>

                                <div>
                                    6
                                </div>

                            </div>



                            <div className="details">

                                <div>
                                    1
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    10/02/20224
                                    <br />
                                    to
                                    12/02/2024
                                </div>

                                <div>
                                    12e
                                </div>

                                <div>
                                    John Deep
                                </div>

                                <div>
                                    6
                                </div>

                            </div>



                            <div className="details">

                                <div>
                                    1
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    10/02/20224
                                    <br />
                                    to
                                    12/02/2024
                                </div>

                                <div>
                                    12e
                                </div>

                                <div>
                                    John Deep
                                </div>

                                <div>
                                    6
                                </div>

                            </div>



                            <div className="details">

                                <div>
                                    1
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    10/02/20224
                                    <br />
                                    to
                                    12/02/2024
                                </div>

                                <div>
                                    12e
                                </div>

                                <div>
                                    John Deep
                                </div>

                                <div>
                                    6
                                </div>

                            </div>



                            <div className="details">

                                <div>
                                    1
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    10/02/20224
                                    <br />
                                    to
                                    12/02/2024
                                </div>

                                <div>
                                    12e
                                </div>

                                <div>
                                    John Deep
                                </div>

                                <div>
                                    6
                                </div>

                            </div>



                            <div className="details">

                                <div>
                                    1
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    10/02/20224
                                    <br />
                                    to
                                    12/02/2024
                                </div>

                                <div>
                                    12e
                                </div>

                                <div>
                                    John Deep
                                </div>

                                <div>
                                    6
                                </div>

                            </div>



                            <div className="details">

                                <div>
                                    1
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    10/02/20224
                                    <br />
                                    to
                                    12/02/2024
                                </div>

                                <div>
                                    12e
                                </div>

                                <div>
                                    John Deep
                                </div>

                                <div>
                                    6
                                </div>

                            </div>



                            <div className="details">

                                <div>
                                    1
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    10/02/20224
                                    <br />
                                    to
                                    12/02/2024
                                </div>

                                <div>
                                    12e
                                </div>

                                <div>
                                    John Deep
                                </div>

                                <div>
                                    6
                                </div>

                            </div>



                            <div className="details">

                                <div>
                                    1
                                </div>

                                <div style={{ textAlign: 'center' }}>
                                    10/02/20224
                                    <br />
                                    to
                                    12/02/2024
                                </div>

                                <div>
                                    12e
                                </div>

                                <div>
                                    John Deep
                                </div>

                                <div>
                                    6
                                </div>

                            </div>




                        </div>



                    </div>



                </div>
            </div>
        </div>
    );
};

export default ControlPanel;
