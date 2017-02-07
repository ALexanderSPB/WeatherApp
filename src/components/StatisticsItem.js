import React, { PropTypes }  from 'react';
import utils from '../OpenWeather/utils';
import '../styles/statistics.css';

var convertTemp = utils.convertTemp;
var getDate = utils.getDate;

function StatisticsItem( props ){
  return(
    <div className='StatisticsItem'>
      <h2 className='StatisticsItem--header'>{props.city.city.name}</h2>
      <canvas></canvas>
    </div>
  )
}

StatisticsItem.PropTypes = {
  city: PropTypes.object.isRequired
}

export default StatisticsItem;
