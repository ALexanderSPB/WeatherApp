import React from 'react';
import {connect} from 'react-redux';
import StatisticsItem from '../components/StatisticsItem';

function Statistics (props){
    return(
      <div className='historyContainer'>
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
