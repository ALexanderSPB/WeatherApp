import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cityList from './cityList';

export const rootReducer = combineReducers({
  cityList,
  routing: routerReducer
});
