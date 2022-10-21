import { combineReducers } from 'redux';
import userReducer from './user.slice';
import genericReducer from './generics.slice';
import missingPersonReducer from './missingPerson.slice';

export default combineReducers({
  userReducer,
  genericReducer,
  missingPersonReducer,
});
