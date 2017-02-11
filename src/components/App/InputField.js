import React, {Component} from 'react';
import './app.css';
var PropTypes = React.PropTypes;

class InputField extends Component {
  render(){
    return (
      <input
        className='form-control myform'
        onChange={this.props.onUpdateCity}
        placeholder='Sankt-Peterburg'
        type='text'
        value={this.props.city} />
    )
}
}
InputField.PropTypes = {
  onSubmitCity: PropTypes.func.isRequired,

}
export default InputField;
