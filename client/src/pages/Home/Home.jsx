import React from 'react';
import './home.scss';
import Header from '../../components/Header/Header';
import Slider from '../../components/Slider/Slider';
import AboutUs from '../../components/AboutUs/AboutUs';
import Offers from '../../components/Offers/Offers';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import FeaturedRooms from '../../components/FeaturedRooms/FeaturedRooms';
import ForReservation from '../../components/ForReservation/ForReservation';
import ImagesBar from '../../components/ImagesBar/ImagesBar';
import Footer from '../../components/Footer/Footer';

const Home = () => {



    return (
        <div className='home'>

            <Header />

            <Slider />

            <AboutUs />

            <Offers />

            <VideoPlayer />

            <AboutUs contentDirection={true} />

            <FeaturedRooms />

            <ForReservation />

            <ImagesBar />

            <Footer />



        </div>
    );
};

export default Home;