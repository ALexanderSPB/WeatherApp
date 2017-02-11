import React, {Component}  from 'react';
import {connect} from 'react-redux';
import './history.css';
import HistoryItem from './HistoryItem';

class History extends Component{
  render(){
    return(
      <div className='historyContainer'>
        {this.props.cityList.cityList.map((city) =>
          <HistoryItem
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

export default connect(mapStateToProps)(History);
