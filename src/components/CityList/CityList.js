import React, { Component, PropTypes } from 'react';
import CityListItem from './CityListItem';

class CityList extends Component {
  render(){
    return(
      <div className='list-group'>
        { this.props.cityList.cityList.map((city) =>
          <CityListItem
            key={this.props.cityList.cityList.indexOf(city)}
            cityName={city.city.name}
          />
        )}
      </div>
    )
  }
}

CityList.PropTypes = {
  cityList: PropTypes.arrayOf(PropTypes.shape({
    cityName: PropTypes.object.isRequired
  }).isRequired).isRequired
}

export default CityList;
