import React from 'react';
import './list.scss';
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";


const List = () => {
  return (
    <div className='list'>

      <div className="hotel">

        <div className="hotemImage">
          <img src="/public/images/Hotels/img3.jpg" alt="" />
        </div>

        <div className="details">
          <div className="name">
            <h1>Hotel Vertix</h1>

            <p>Mahipalpur, Delhi | 4.2 km drive to Indira Gandhi Internatioin Airport</p>

            <p>Free Cancellation till check-in</p>

          </div>

          <div className="rating">
            <h2>Excellent 3.2</h2>
            <div className="stars">
              <MdOutlineStarPurple500 />
              <MdOutlineStarPurple500 />
              <MdOutlineStarOutline />
              <MdOutlineStarOutline />
              <MdOutlineStarOutline />
            </div>
          </div>

        </div>

        <div className="bookBtn">
          <div className="price">
            <span>Price</span>
            <h1>₹ 1,561/-</h1>

          </div>

          <button>Book Now</button>
        </div>


      </div>

    </div>
  );
};

export default List;