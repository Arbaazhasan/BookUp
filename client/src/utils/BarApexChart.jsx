import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts'; // Make sure you have this package installed

const ApexChart = () => {
    const [chartState] = useState({
        series: [44, 55, 67, 83],
        options: {
            chart: {
                type: 'radialBar',
                height: 350,
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                // Custom formatter function
                                return 249;
                            }
                        }
                    }
                }
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        },
    });

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={chartState.options} series={chartState.series} type="radialBar" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default ApexChart;
