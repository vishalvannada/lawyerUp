import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import availabilityReducer from "./availabilityReducer";
export default combineReducers({
  auth : authReducer,
  error: errorReducer,
  availability : availabilityReducer,
  form : formReducer
});
