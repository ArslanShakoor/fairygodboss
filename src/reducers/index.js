import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import userReducer from './userReducer';

export default combineReducers({
  form: reduxForm,
  user: userReducer
});
