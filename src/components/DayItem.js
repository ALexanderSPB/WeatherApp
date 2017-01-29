import React from 'react';
import utils from '../OpenWeather/utils';
import '../styles/dayContainer.css';

var convertTemp = utils.convertTemp;
var PropTypes = React.PropTypes;
var getDate = utils.getDate;

function DayItem (props) {
  var date = getDate(props.day.dt);
  var icon = props.day.weather[0].icon;
  return (
    <div className='dayContainer' onClick={props.handleClick}>
      <img className='dayContainer--imgweather' src={'../images/weather-icons/' + icon + '.svg'} alt='Weather' />
      <h2 className='dayContainer--subheader'>{date}</h2>
      <h3>{convertTemp(props.day.temp.min)} ... {convertTemp(props.day.temp.max)} </h3>

    </div>
  )
}

DayItem.propTypes = {
  day: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired,
  }).isRequired,
  handleClick: PropTypes.func,
}

export default DayItem;
