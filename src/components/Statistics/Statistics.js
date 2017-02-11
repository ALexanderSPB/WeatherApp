import React, {Component} from 'react';
import {connect} from 'react-redux';
import StatisticsItem from './StatisticsItem';
import './statistics.css';

class Statistics extends Component{
  render(){
    return(
      <div className='StatisticsContainer'>
        {this.props.cityList.cityList.map((city) =>
          <StatisticsItem
          key={this.props.cityList.cityList.indexOf(city)}
          city={city}
          />
        )}
      </div>
    )
  }
}

function mapStateToProps(state){
  return(
      {cityList: state.cityList}
    )
}

export default connect(mapStateToProps)(Statistics);
