const initialState = {
  cityList: []
};

export default function cityList(state = initialState, action){
  switch(action.type){
    case 'ADD_CITY':
      for(let i=0; i < state.cityList.length; i++)
      if( state.cityList[i].city.name === action.payload.city.city.name) return state;
      return {...state,  cityList: [action.payload.city,...state.cityList].slice(0,10)}
    default:
      return state;
  }
}
