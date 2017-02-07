import React, { PropTypes } from 'react';
import {Link} from 'react-router';

function CityListItem ( props ) {
  return(
    <Link to={'/forecast/'+props.cityName} className='list-group-item list-group-item-success' style={{width: '30%'}}>
      {props.cityName}
    </Link>
  )
}

CityListItem.PropTypes = {
  cityName: PropTypes.string.isRequired
}

export default CityListItem;
