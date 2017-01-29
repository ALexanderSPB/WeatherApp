import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const CityListItem= function CityListItem ( {city} ) {
  return(
    <Link to={'/forecast/'+city} className='list-group-item list-group-item-success' style={{width: '30%'}}>
      {city}
    </Link>
  )
}

CityListItem.PropTypes = {
  city: PropTypes.string.isRequired
}

export default CityListItem;
