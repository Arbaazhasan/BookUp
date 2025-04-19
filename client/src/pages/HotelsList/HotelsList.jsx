import React, { useEffect } from 'react';
import './hotelList.scss';

import SearchBar from '../../components/SearchBar/SearchBar';
import Filter from '../../components/Filter/Filter';
import List from '../../components/List/List';
import PriceFilter from '../../components/PriceFilter/PriceFilter';
import { useSelector } from 'react-redux';

const HotelsList = () => {

  const { hotelList } = useSelector(state => state.bookingReducer);

  useEffect(() => {
    console.log(hotelList);

  }, [hotelList]);


  return (
    <div>
      <SearchBar />

      {/* <Filter /> */}

      <div className="hotelsAndPriceFilter">

        {/* <div className='left'>
          <PriceFilter />
        </div> */}

        <div className='right'>
          {hotelList.map(hotel => {

            const { _id, images, name, description, price } = hotel; // Destructure the properties

            return (
              <List
                key={_id}
                _id={_id}
                image={images}
                name={name}
                description={description}
                price={price}
              />
            );
          })}

        </div>

      </div>


    </div>
  );
};

export default HotelsList;