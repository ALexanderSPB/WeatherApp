import React, {Component}  from 'react';
import Detail from './Detail';

class DetailContainer extends Component{
  render() {
    return (
      <Detail
        weather={this.props.location.state.weather}
        city={this.props.routeParams.city} />
    );
  };
};

export default DetailContainer;
