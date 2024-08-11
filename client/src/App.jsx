import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import CheckAvailability from './components/CheckAvailability/CheckAvailability';
import HotelsList from './pages/HotelsList/HotelsList';
import Header from './components/Header/Header';
import Hotel from './pages/Hotel/Hotel';
import Footer from './components/Footer/Footer';
import Dashboard from './pages/Dashboard/Dashboard';
import Rooms from './components/Dashboard/Rooms/Rooms';
import AddRoom from './components/Dashboard/AddRoom/AddRoom';
import RoomView from './components/Dashboard/RoomView/RoomView';
import UpdateRoom from './components/Dashboard/UpdateRoom/UpdateRoom';
import Bookings from './components/Dashboard/Bookings/Bookings';
import Profile from './components/Dashboard/Profile/Profile';
import ControlPanel from './components/Dashboard/ControlPanel/ControlPanel';
import Login from './pages/Login/Login';


function App() {

  const [headerBackground, setHeaderBackground] = useState(false);


  useEffect(() => {
    AOS.init({ duration: "2000" });
    var currentPath = window.location.pathname;

    // console.log(currentPath);
    // setHeaderBackground(currentPath === '/home');
    // console.log(headerBackground);

  }, [headerBackground]);

  return (

    <Router>

      {/* <CheckAvailability />  */}

      <Routes>

        {/* Home Page */}
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<Home />} />

        {/* Hotels List (it shows search result) */}
        <Route path='/list' element={<HotelsList />} />

        <Route path='/hotel' element={<Hotel />} />


        {/* Dashboard Routes */}

        <Route path='/dashboard/' element={<Dashboard currentPath={'Profile'} dashboardComponent={<ControlPanel />} />} />


        <Route path='/dashboard/profile' element={<Dashboard currentPath={'Profile'} dashboardComponent={<Profile />} />} />

        <Route path='/dashboard/bookings' element={<Dashboard currentPath={'Bookings'} dashboardComponent={<Bookings />} />} />

        <Route path='/dashboard/rooms/room/view' element={<Dashboard currentPath={'Room'} dashboardComponent={<RoomView />} />} />



        {/* Control Panel */}

        <Route path='/dashboard/rooms' element={<Dashboard currentPath={'Rooms'} dashboardComponent={<Rooms />} />} />

        <Route path='/dashboard/add' element={<Dashboard currentPath={'Add Room'} dashboardComponent={<AddRoom />} />} />

        <Route path='/dashboard/update' element={<Dashboard currentPath={'Update Room'} dashboardComponent={<UpdateRoom />} />} />

        <Route path='/dashboard/delete' element={<Dashboard currentPath={'Delete Room'} dashboardComponent={<RoomView isDelete={true} />} />} />


        <Route path='*' element={<Home />} />

      </Routes>


    </Router>
  );
}

export default App;
