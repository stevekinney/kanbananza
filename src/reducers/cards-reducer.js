import { cards as defaultCards } from '../normalized-state';
import { CARD_CREATE, CARD_DELETE } from '../actions/card-actions';

import { addEntity, removeEntity } from './_utilities';

const cardsReducer = (cards = defaultCards, action) => {
  if (action.type === CARD_CREATE) {
    const { card, cardId } = action.payload;
    return addEntity(cards, card, cardId);
  }

  if (action.type === CARD_DELETE) {
    const { cardId } = action.payload;
    return removeEntity(cards, cardId);
  }

  return cards;
};

export default cardsReducer;
