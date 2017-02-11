import React, {Component} from 'react';
import Forecast from './Forecast';
import getForcast from '../../OpenWeather/api';
import { bindActionCreators } from 'redux';
import * as pageActions from '../../actions/addCity'
import { connect } from 'react-redux';

class ForecastContainer extends Component{
  constructor(props,context){
    super(props,context);
    this.state={
      isLoading: true,
      forecastData: {}
    };
  };

  componentDidMount () {
    this.makeRequest(this.props.routeParams.city)
  };
  componentWillReceiveProps (nextProps) {
    this.makeRequest(nextProps.routeParams.city)
  };
  makeRequest (city) {
    getForcast(city)
      .then(function (forecastData) {
        this.setState({
          isLoading: false,
          forecastData: forecastData
        });
        this.props.pageActions.addCity(this.state.forecastData);
      }.bind(this));
  };
  handleClick = (weather) => {
    this.context.router.push({
      pathname: '/detail/' + this.state.forecastData.city.name,
      state: {
        weather: weather
      }
    })
  };
  render () {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        handleClick={this.handleClick}
        forecastData={this.state.forecastData} />
    )
  };
};
ForecastContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
};
function mapStateToProps (state) {
  return {
  }
};
function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastContainer);
