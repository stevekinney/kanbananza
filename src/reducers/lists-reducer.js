import { lists as defaultLists } from '../normalized-state';
import { CARD_CREATE } from '../actions/card-actions';

const listsReducer = (lists = defaultLists, action) => {
  if (action.type === CARD_CREATE) {
    const { listId, cardId } = action.payload;
    const entities = { ...lists.entities };

    entities[listId] = {
      ...entities[listId],
      cards: entities[listId].cards.concat(cardId),
    };

    return {
      ...lists,
      entities,
    };
  }

  if (action.type === 'LIST_CREATE') {
    const { list, listId } = action.payload;
    return {
      entities: { ...lists.entities, [listId]: list },
      ids: lists.ids.concat(listId),
    };
  }

  return lists;
};

export default listsReducer;
