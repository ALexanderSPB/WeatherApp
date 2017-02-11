import React, {Component} from 'react';
import FindCity from './FindCity';

class InputContainer extends Component{
  constructor(props,context){
    super(props,context);
    this.state ={
      city:''
    };
  };
  handleSubmitCity = (e) => {
    this.context.router.push('/forecast/' + this.state.city)
  };

  handleUpdateCity = (e) => {
    this.setState({
      city: e.target.value
    })
  };

  render(){
    return(
      <FindCity
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    );
  }
};
InputContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default InputContainer;
