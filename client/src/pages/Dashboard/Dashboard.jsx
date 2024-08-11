import React from 'react';
import './dashboard.scss';
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar';
import Header from '../../components/Dashboard/Header/Header';
import AddRoom from '../../components/Dashboard/AddRoom/AddRoom';
import RoomView from '../../components/Dashboard/RoomView/RoomView';

const Dashboard = ({ dashboardComponent, currentPath }) => {
    return (
        <div className='Dashboard'>

            <div className="background"></div>

            <div className="left">
                <Sidebar />
            </div>

            <div className="right">
                <Header currentPath={currentPath} />

                {/* <AddRoom /> */}

                {/* <Rooms /> */}

                {/* <RoomView /> */}

                {dashboardComponent}

            </div>



        </div>
    );
};

export default Dashboard;