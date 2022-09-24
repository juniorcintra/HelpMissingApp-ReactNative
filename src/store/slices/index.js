import { combineReducers } from 'redux';
import userReducer from './user.slice';
import genericReducer from './generics.slice';

export default combineReducers({
  userReducer,
  genericReducer,
});
