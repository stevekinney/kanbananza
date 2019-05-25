import { lists as defaultLists } from '../normalized-state';
import { CARD_CREATE, CARD_DELETE, CARD_MOVE } from '../actions/card-actions';
import { LIST_CREATE, LIST_DELETE } from '../actions/list-actions';

import {
  addEntity,
  addIdToChildren,
  removeEntity,
  removeIdFromChildren,
} from './_utilities';

const listsReducer = (lists = defaultLists, action) => {
  if (action.type === CARD_CREATE) {
    const { listId, cardId } = action.payload;
    return addIdToChildren(lists, listId, 'cards', cardId);
  }

  if (action.type === CARD_DELETE) {
    const { cardId, listId } = action.payload;
    return removeIdFromChildren(lists, listId, 'cards', cardId);
  }

  if (action.type === LIST_CREATE) {
    const { list, listId } = action.payload;
    return addEntity(lists, list, listId);
  }

  if (action.type === LIST_DELETE) {
    const { listId } = action.payload;
    return removeEntity(lists, listId);
  }

  if (action.type === CARD_MOVE) {
    const { cardId, originListId, destinationListId } = action.payload;
    let newState = removeIdFromChildren(lists, originListId, 'cards', cardId);
    return addIdToChildren(newState, destinationListId, 'cards', cardId);
  }

  return lists;
};

export default listsReducer;
