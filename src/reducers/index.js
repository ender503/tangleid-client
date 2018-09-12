import { combineReducers } from 'redux';
import user from './user';
import claims from './claims';
import system from './system';

export default combineReducers({
  user,
  claims,
  system
});