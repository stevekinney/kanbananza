import { cards as defaultCards } from '../normalized-state';
import { CARD_CREATE } from '../actions/card-actions';

const cardsReducer = (cards = defaultCards, action) => {
  if (action.type === CARD_CREATE) {
    const { card, cardId } = action.payload;
    return {
      entities: { ...cards.entities, [cardId]: card },
      ids: cards.ids.concat(cardId),
    };
  }

  return cards;
};

export default cardsReducer;
