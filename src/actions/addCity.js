export function addCity(city){
  return (dispatch) => {
    dispatch({
      type: 'ADD_CITY',
      payload: {city}
    })
  }
};
