const initialState = {
  cityList: []
};

export default function cityList(state = initialState, action){
  switch(action.type){
    case 'ADD_CITY':
      console.log('addcity');
      return {...state,  cityList: Array.from(new Set([action.payload,...state.cityList])).slice(0,10)}
    default:
      return state;
  }
}
