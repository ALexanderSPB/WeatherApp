import React, {Component} from 'react';
import './app.css';
import Button from './Button'
import InputField from './InputField';
var PropTypes = React.PropTypes;

class FindCity extends Component{
  render(){
    return(
      <div className='InputContainer'>
      <InputField
        onUpdateCity={this.props.onUpdateCity}
        city={this.props.city} />
      <Button
        onSubmitCity={this.props.onSubmitCity}>
          Узнать погоду!
      </Button>
    </div>
    );
  }
}

FindCity.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

export default FindCity;
