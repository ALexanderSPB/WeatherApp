import React, { Component }  from 'react';
import { PropTypes }  from 'react';
import utils from '../../OpenWeather/utils';
import './statistics.css';
var LineChart = require("react-chartjs").Line;

var convertTemp = utils.convertTemp;
var getDate = utils.getDate;

class StatisticsItem extends Component{
  initChart = () =>{
    var chartOptions= {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
    }
    var label = [];
    var temperature = [];
    this.props.city.list.map(function(date){
      label.push(getDate(date.dt));
      temperature.push(convertTemp(date.temp.eve));
      return [];
    });
    return{
      labels: label,
      datasets : [
              {
                  fillColor : "rgba(255,223,0,0.6)",
                  strokeColor : "rgba(220,220,220,1)",
                  pointColor : "rgba(220,220,220,1)",
                  pointStrokeColor : "#fff",
                  data : temperature
              }
          ]
    }
  }
  render(){
    return(
      <div className='StatisticsItem'>
        <h2 className='StatisticsItem--header'>{this.props.city.city.name}</h2>
        <LineChart data={this.initChart()} options={this.chartOptions} width="900" height="350"/>
      </div>
    )
  }
}

StatisticsItem.PropTypes = {
  city: PropTypes.object.isRequired
}

export default StatisticsItem;
