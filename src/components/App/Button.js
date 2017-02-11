import React, {Component} from 'react';
import './app.css';
var PropTypes = React.PropTypes;

class Button extends Component {
  render(){
    return (
      <button type='button'
        className='btn btn-success mybutton'
        onClick={this.props.onSubmitCity}>
          {this.props.children}
      </button>
    )
}
}

Button.PropTypes = {
  onSubmitCity: PropTypes.func.isRequired,

}
export default Button;
