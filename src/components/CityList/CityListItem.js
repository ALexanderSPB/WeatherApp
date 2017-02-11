import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

class CityListItem extends Component {
  render(){
    return(
      <Link to={'/forecast/'+this.props.cityName} className='list-group-item list-group-item-success' style={{width: '30%'}}>
        {this.props.cityName}
      </Link>
    )
}
}

CityListItem.PropTypes = {
  cityName: PropTypes.string.isRequired
}

export default CityListItem;
