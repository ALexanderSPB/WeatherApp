import React from 'react';
import utils from '../OpenWeather/utils';
import DayItem from './DayItem';
import '../styles/detail.css';

var convertTemp = utils.convertTemp;

function Detail (props) {
  return (
    <div className='detail'>
      <DayItem day={props.weather} />
      <div className='detail--container'>
        <p>{props.city}</p>
        <p>{props.weather.weather[0].description}</p>
        <p>Минимальная температура: {convertTemp(props.weather.temp.min)} градусов</p>
        <p>Максимальная температура: {convertTemp(props.weather.temp.max)} градусов</p>
        <p>Влажность: {props.weather.humidity}%</p>
        <p>Ветер: {props.weather.speed}, м/с</p>
        <p>Атмосферное давление: {props.weather.pressure}, hPa</p>
      </div>
    </div>
  )
}

export default Detail;
