import React, { Component } from 'react';
import DayItem from '../DayContainer/DayItem';
import './forecast.css';

var PropTypes = React.PropTypes;

class Forecast extends Component {
  render(){
    return (
      <div>
        {
          this.props.isLoading === true
            ? <h1 className='forecast--subheader forecast'> Loading </h1>
            :  <div className='forecast'>
                <h1 className='forecast--header'>{this.props.forecastData.city.name}, {this.props.forecastData.city.country}</h1>
                <p className='forecast--subheader'>Выберите день</p>
                <div className='forecast--container'>
                  {this.props.forecastData.list.map( (listItem)  =>
                    <DayItem key={listItem.dt} day={listItem} handleClick={this.props.handleClick.bind(null, listItem)} />
                  )}
                </div>
              </div>
        }
      </div>
    )
  }
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default Forecast;
