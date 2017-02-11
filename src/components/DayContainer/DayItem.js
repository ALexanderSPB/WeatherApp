import React, { Component } from 'react';
import utils from '../../OpenWeather/utils';
import './dayContainer.css';

var convertTemp = utils.convertTemp;
var PropTypes = React.PropTypes;
var getDate = utils.getDate;

class DayItem extends Component {
  render(){
    var date = getDate(this.props.day.dt);
    var icon = this.props.day.weather[0].icon;
    return (
      <div className='dayContainer' onClick={this.props.handleClick}>
        <img className='dayContainer--imgweather' src={'../images/weather-icons/' + icon + '.svg'} alt='Weather' />
        <h2 className='dayContainer--subheader'>{date}</h2>
        <h3>{convertTemp(this.props.day.temp.min)} ... {convertTemp(this.props.day.temp.max)} </h3>

      </div>
    )
  }
}

DayItem.propTypes = {
  day: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired,
  }).isRequired,
  handleClick: PropTypes.func,
}

export default DayItem;
