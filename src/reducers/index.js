import { combineReducers } from 'redux';
import user from './user';

import system from './system';

export default combineReducers({
  user,
  system
});