import React from 'react';
import {connect} from 'react-redux';
import StatisticsItem from '../components/StatisticsItem';
import '../styles/statistics.css';

function Statistics (props){
    return(
      <div className='StatisticsContainer'>
        {props.cityList.cityList.map((city) =>
          <StatisticsItem
          key={props.cityList.cityList.indexOf(city)}
          city={city}
          />
        )}
      </div>
    )
}

function mapStateToProps(state){
  return(
      {cityList: state.cityList}
    )
}

export default connect(mapStateToProps)(Statistics);
