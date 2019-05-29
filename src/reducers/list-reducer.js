import { lists as defaultLists } from '../normalized-state';
import set from 'lodash/fp/set';

const listsReducer = (lists = defaultLists, action) => {
  if (action.type === 'CARD_CREATE') {
    const { cardId, listId } = action.payload;

    const cards = lists.entities[listId].cards.concat(cardId);
    return set(['entities', listId, 'cards'], cards, lists);
  }
  return lists;
};

export default listsReducer;
