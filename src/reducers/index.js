import { combineReducers } from 'redux';

import lists from './lists-reducer';
import cards from './cards-reducer';
import users from './users-reducer';

export default combineReducers({
  lists,
  cards,
  users,
});
