import React from 'react';
import '../styles/app.css';
var PropTypes = React.PropTypes;

function Button (props) {
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-success'
      onClick={props.onSubmitCity}>
        {props.children}
    </button>
  )
}

function InputField (props) {
  return (
    <input
      className='form-control'
      style={{width: '200px', display: 'inline'}}
      onChange={props.onUpdateCity}
      placeholder='Sankt-Peterburg'
      type='text'
      value={props.city} />
  )
}



function FindCity (props){
    return(
      <div className='InputContainer'>
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button
        onSubmitCity={props.onSubmitCity}>
          Узнать погоду!
      </Button>
    </div>
    );
  }
FindCity.propTypes = {
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

export default FindCity;
