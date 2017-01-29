import React, {Component}  from 'react';
import {Link} from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pageActions from '../actions/addCity'
import '../styles/main.css';

class Main extends Component{
  render(){
    return(
      <div className='main--container'>
        <div className='main--header'>
          <h2> Прогноз погоды от "Open Weather" </h2>
          <Link className='homelink' to='/'><img src='../homepage.png' className='homeicon' alt='homepage'></img></Link>
        </div>
        {this.props.children}
      </div>
    )
  }
};
function mapStateToProps (state) {
  return {
    cityList: state.cityList
  }
};
function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
