import { cards as defaultCards } from '../normalized-state';

const cardsReducer = (cards = defaultCards, action) => {
  if (action.type === 'CARD_CREATE') {
    const { card, cardId } = action.payload;
    return {
      entities: { ...cards.entities, [cardId]: card },
      ids: [...cards.ids, cardId],
    };
  }

  return cards;
};

export default cardsReducer;
