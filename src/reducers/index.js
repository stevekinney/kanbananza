import { combineReducers } from 'redux';

import lists from './lists-reducer';
import cards from './cards-reducer';

export default combineReducers({
  lists,
  cards,
});
