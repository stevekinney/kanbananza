import { cards as defaultCards } from '../normalized-state';
import { CARD_CREATE } from '../actions/card-actions';

import { addEntity } from './_utilities';

const cardsReducer = (cards = defaultCards, action) => {
  if (action.type === CARD_CREATE) {
    const { card, cardId } = action.payload;
    return addEntity(cards, card, cardId);
  }

  return cards;
};

export default cardsReducer;
