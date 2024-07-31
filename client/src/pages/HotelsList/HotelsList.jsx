import React from 'react';
import './hotelList.scss';

import SearchBar from '../../components/SearchBar/SearchBar';
import Filter from '../../components/Filter/Filter';
import List from '../../components/List/List';
import PriceFilter from '../../components/PriceFilter/PriceFilter';

const HotelsList = () => {
  return (
    <div>
      <SearchBar />

      <Filter />

      <div className="hotelsAndPriceFilter">

        <div className='left'>
          <PriceFilter />
        </div>

        <div className='right'>

          <List />
          <List />
          <List />
          <List />
          <List />


        </div>

      </div>


    </div>
  );
};

export default HotelsList;