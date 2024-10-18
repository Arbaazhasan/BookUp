import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
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
import ImageViewer from './components/ImageViewer/ImageViewer';
import toast, { Toaster } from 'react-hot-toast';
import Loading from './components/Loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { isGuestAuthonticatedAction } from './Redux/actions/guestAuthActions';
import GuestProfile from './pages/Profile/Profile';
import Booking from './pages/Booking/Booking';
import { isVendorAuthonticatedAction } from './Redux/actions/vendorAuthAction';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';


function App() {

  const dispatch = useDispatch();
  const { loading: guestLoading, error: guestAuthError, isGuestAuthonticated } = useSelector(state => state.guestAuthReducer);
  const { loading: vendorLoading, error: vendorAuthError, isVendorAuthonticated } = useSelector(state => state.vendorAuthReducer);
  const { loading: bookingLoading, error: bookingError } = useSelector(state => state.bookingReducer);
  const { loading: controlPanelLoading, error: controlPanelError } = useSelector(state => state.bookingReducer);


  useEffect(() => {
    AOS.init({ duration: "2000" });

    {
      /* Display Toast Error if error exists */
      if (guestAuthError)
        toast.error(guestAuthError);

      if (vendorAuthError)
        toast.error(vendorAuthError);

      if (bookingError)
        toast.error(bookingError);

      if (controlPanelError)
        toast.error(controlPanelError);
    }

    isGuestAuthonticatedAction(dispatch);
    isVendorAuthonticatedAction(dispatch);
  }, [dispatch, guestAuthError, vendorAuthError, bookingError]);


  useEffect(() => {


  }, [dispatch]);



  return (

    <Router>

      {
        /* Display Loading Component if loading */
        guestLoading ||
        vendorLoading ||
        bookingLoading ||
        controlPanelLoading
        && <Loading />

      }


      {/* Check Room Availability  */}
      {/* <CheckAvailability />  */}

      {/* Dashboardore ImageViewer */}
      {/* <ImageViewer /> */}


      <Routes>

        {/* Public Routes */}
        <Route path='/' element={<Home />} />

        {/* Hotels List (it shows search result) */}
        <Route path='/list' element={<HotelsList />} />

        {/* Search Hotel Description */}
        <Route path='/hotel' element={<Hotel />} />


        {/* Guest Protected Routes */}

        <Route path='/login' element={
          isGuestAuthonticated ? <Navigate to={'/'} /> : <Login />
            &&
            isVendorAuthonticated ? <Navigate to={'/dashboard'} /> : <Login />} />


        <Route path='/guestProfile' element={

          <ProtectedRoute isAuthonticated={isGuestAuthonticated}>
            <Outlet />
          </ProtectedRoute>
        }>

          {/* Guest Profile */}
          <Route index element={<GuestProfile />} />


          {/* Booking Confermation Page & Payment Method */}
          <Route path='/guestProfile/booking' element={<Booking />} />


        </Route>



        {/* Dashboard Routes */}

        <Route path='/dashboard' element={

          <ProtectedRoute isAuthonticated={isVendorAuthonticated}>

            {/* It react-route-dom compoent - it render the nested routes  */}
            <Outlet />

          </ProtectedRoute>

        } >

          {/* Default Route (when url redirect on "Dashbaord" so it will render)*/}
          <Route index element={<Dashboard currentPath={'Control Panel'} dashboardComponent={<ControlPanel />} />} />

          <Route path='/dashboard/profile' element={<Dashboard currentPath={'Profile'} dashboardComponent={<Profile />} />} />

          <Route path='/dashboard/bookings' element={<Dashboard currentPath={'Bookings'} dashboardComponent={<Bookings />} />} />

          <Route path='/dashboard/rooms/room/:roomNo' element={<Dashboard currentPath={'Room'} dashboardComponent={<RoomView />} />} />



          {/* Control Panel */}

          <Route path='/dashboard/rooms' element={<Dashboard currentPath={'Rooms'} dashboardComponent={<Rooms />} />} />

          <Route path='/dashboard/add' element={<Dashboard currentPath={'Add Room'} dashboardComponent={<AddRoom />} />} />

          <Route path='/dashboard/update' element={<Dashboard currentPath={'Update Room'} dashboardComponent={<UpdateRoom />} />} />

          <Route path='/dashboard/delete' element={<Dashboard currentPath={'Delete Room'} dashboardComponent={<RoomView isDelete={true} />} />} />
          <Route path='/dashboard/imageviewer' element={<ImageViewer />} />

        </Route>



        <Route path='*' element={<Home />} />

      </Routes>

      <Toaster />
    </Router>
  );
}

export default App;
