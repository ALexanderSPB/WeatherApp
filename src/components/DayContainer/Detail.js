import React, { Component } from 'react';
import utils from '../../OpenWeather/utils';
import DayItem from './DayItem';
import './detail.css';

var convertTemp = utils.convertTemp;

class Detail extends Component {
  render(){
    return (
      <div className='detail'>
        <DayItem day={this.props.weather} />
        <div className='detail--container'>
          <p>{this.props.city}</p>
          <p>{this.props.weather.weather[0].description}</p>
          <p>Минимальная температура: {convertTemp(this.props.weather.temp.min)} градусов</p>
          <p>Максимальная температура: {convertTemp(this.props.weather.temp.max)} градусов</p>
          <p>Влажность: {this.props.weather.humidity}%</p>
          <p>Ветер: {this.props.weather.speed}, м/с</p>
          <p>Атмосферное давление: {this.props.weather.pressure}, hPa</p>
        </div>
      </div>
    )
  }
}

export default Detail;
