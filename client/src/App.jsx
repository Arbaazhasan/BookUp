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


function App() {

  const [headerBackground, setHeaderBackground] = useState(false);


  useEffect(() => {
    AOS.init({ duration: "2000" });
    var currentPath = window.location.pathname;

    // console.log(currentPath);
    // setHeaderBackground(currentPath === '/home');
    console.log(headerBackground);

  }, [headerBackground]);

  return (

    <Router>

      {/* <CheckAvailability />  */}


      <Routes>

        {/* Home Page */}
        <Route path='/' element={<Home />} />

        {/* Hotels List (it shows search result) */}
        <Route path='/list' element={<HotelsList />} />

        <Route path='/hotel' element={<Hotel />} />

        <Route path='*' element={<Home />} />

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
