import React, { PropTypes } from 'react';
import CityListItem from './CityListItem';

const CityList = ({ cityList }) => (
      <div className='list-group'>
        { cityList.cityList.map((city) =>
          <CityListItem
            key={cityList.cityList.indexOf(city)}
            cityName={city.city.name}
          />
        )}
      </div>
);
CityList.PropTypes = {
  cityList: PropTypes.arrayOf(PropTypes.shape({
    cityName: PropTypes.object.isRequired
  }).isRequired).isRequired
}

export default CityList;
