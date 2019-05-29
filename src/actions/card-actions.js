export const CARD_CREATE = 'CARD_CREATE';
export const CARD_DELETE = 'CARD_DELETE';
export const CARD_MOVE = 'CARD_MOVE';

const defaultCardData = {
  title: '',
  description: '',
  assignedTo: '',
};

export const createCard = (listId, cardData) => {
  const cardId = Date.now().toString();
  const card = {
    id: cardId,
    ...defaultCardData,
    ...cardData,
  };
  return {
    type: CARD_CREATE,
    payload: { card, listId, cardId },
  };
};

export const removeCard = (cardId, listId) => {
  return {
    type: CARD_DELETE,
    payload: { cardId, listId },
  };
};

export const moveCardToList = (cardId, originListId, destinationListId) => {
  return {
    type: CARD_MOVE,
    payload: {
      cardId,
      originListId,
      destinationListId,
    },
  };
};
