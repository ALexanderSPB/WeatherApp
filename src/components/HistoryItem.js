import React, { PropTypes }  from 'react';
import utils from '../OpenWeather/utils';
import '../styles/history.css';

var convertTemp = utils.convertTemp;
var getDate = utils.getDate;

function HistoryItem( props ){
  return(
    <div className='HistoryItem'>
      <h2 className='HistoryItem--header'>{props.city.city.name}</h2>
      {props.city.list.map(function(dayweather){
        var icon = dayweather.weather[0].icon;
        return(
          <div  key={props.city.list.indexOf(dayweather)}>
            <h3 className='HistoryItem--date'>{getDate(dayweather.dt)}</h3>
            <p className='HistoryItem--details'>
            <img className='HistoryItem--imgweather' src={'../images/weather-icons/' + icon + '.svg'} alt='Weather' />
            ( {dayweather.weather[0].description} )   ;
            Температура:   {convertTemp(dayweather.temp.min)} ... {convertTemp(dayweather.temp.max)}  ;
            Влажность: {dayweather.humidity}%  ;
            Ветер: {dayweather.speed}, м/с  ;
            Атмосферное давление: {dayweather.pressure}, hPa
            </p>
          </div>
        )
      })}
    </div>
  )
}

HistoryItem.PropTypes = {
  city: PropTypes.object.isRequired
}

export default HistoryItem;
