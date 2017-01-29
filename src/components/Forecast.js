import React from 'react';
import DayItem from './DayItem';
import '../styles/forecast.css';

var PropTypes = React.PropTypes;

function ForecastUI (props) {

  return (
    <div className='forecast' style={{textAlign: 'center'}}>
      <h1 className='forecast--header'>{props.forecast.city.name}, {props.forecast.city.country}</h1>
      <p className='forecast--subheader'>Выберите день</p>
      <div className='forecast--container'>
        {props.forecast.list.map(function (listItem) {
          return <DayItem key={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null, listItem)} />
        })}
      </div>
    </div>
  )
}

function Forecast (props) {
  return (
    <div>
      {
        props.isLoading === true
          ? <h1 className='forecast--subheader'> Loading </h1>
          : <ForecastUI
              city={props.city}
              forecast={props.forecastData}
              handleClick={props.handleClick} />
      }
    </div>
  )
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;
