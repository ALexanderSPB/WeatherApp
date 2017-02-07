import React  from 'react';
import {connect} from 'react-redux';
import '../styles/history.css';
import HistoryItem from '../components/HistoryItem';

function History (props){
    return(
      <div className='historyContainer'>
        {props.cityList.cityList.map((city) =>
          <HistoryItem
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

export default connect(mapStateToProps)(History);
