import { combineReducers } from 'redux';

import lists from './list-reducer';
import cards from './card-reducer';

export default combineReducers({
  lists,
  cards,
});
