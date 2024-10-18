import React from 'react';
import './list.scss';
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from 'react-router-dom';


const List = ({ _id, image, name, description, price }) => {

  return (
    <div className='list' key={_id}>

      <div className="hotel">

        <div className="hotemImage">
          {/* <img src="images/Hotels/img3.jpg" alt="" /> */}
          <img src={image && image[0].url} alt="" />
        </div>

        <div className="details">
          <div className="name">
            <h1>{name}</h1>

            <p>{description}</p>

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
            <h1>₹ {price}/-</h1>
          </div>

          <Link to={'/hotel'}>
            <button>Book Now</button>
          </Link>
        </div>


      </div>

    </div>
  );
};

export default List;